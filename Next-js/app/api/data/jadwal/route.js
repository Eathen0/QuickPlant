import { sql } from "@vercel/postgres";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import middlewareVerify from '@/utils/middlewareVerify' ;
import env from 'dotenv'

env.config();

const listJadwal = ["Piket_Masjid_Mushola", "Piket_Kelas", "Al-Barzanji", "Yasinan", "Piket_Kantin", "Jumcer", "Pelajaran"];

/**
 * 
 * @param {NextRequest} request
 */
export async function GET(request) {
   const cookie = cookies();
   const header = headers();

   const __tokenAccess = cookie.get(process.env.ACCESS_TOKEN_NAME)
   const token_access = __tokenAccess && __tokenAccess.value

   let namaJadwal = null
   if (header.get('Contet-Type') === 'application/json') {
      namaJadwal = request.json()
   }

   if (!namaJadwal) {
      return NextResponse.json({ message: "please give a JSON for the body response", error: true }, { status: 400 });
   } else if (!listJadwal.includes(namaJadwal)) {
      return NextResponse.json({ message: "nama jadwal not found", error: true }, { status: 400 });
   }

   try {

      if (!token_access) {
         return NextResponse.json({ message: "token not found", error: true }, { status: 401 });
      }
      
      const decodeAccess = middlewareVerify(token_access);

      if (decodeAccess.sub) {

         if (namaJadwal.nama === "Pelajaran") {
            if (!namaJadwal.minggu) {
               return NextResponse.json({ message: "please give a 'minggu' for requst 'jadwal pelajaran'", error: true }, { status: 400 });
            }
            const jadwal_pelajaran = await sql`SELECT * FROM jadwal_pelajaran WHERE minggu = ${namaJadwal.minggu}`;
            return NextResponse.json({ data: jadwal_pelajaran.rows, error: false }, { status: 200 });
         }

         const siswaTerjadwal = await sql`SELECT siswa_terjadwal.id AS "id", users.id AS "id_siswa", users.username AS "nama_siswa", jadwal_piket.nama AS "piket", siswa_terjadwal.sudah_piket AS "sudah_piket", siswa_terjadwal.waktu AS "waktu_konfirmasi", siswa_terjadwal.tanggal AS "tanggal_dijadwalkan", siswa_terjadwal.photo_bukti AS "foto_bukti", jadwal_piket.dari_jam AS "dari_jam", jadwal_piket.sampai_jam AS "sampai_jam" FROM users RIGHT JOIN siswa_terjadwal ON siswa_terjadwal.id_user = users.id INNER JOIN jadwal_piket ON siswa_terjadwal.id_piket = jadwal_piket.id WHERE jadwal_piket.nama = ${namaJadwal.nama}`;
         return NextResponse.json({ data: siswaTerjadwal.rows, error: false }, { status: 200 });
      } else {
         return NextResponse.json({ message: "token is not match", error: true }, { status: 401 });
      
      }

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "something wrong in server", error: true }, {status: 500});
   }
}

// query join
// SELECT siswa_terjadwal.id AS "id", users.id AS "id_siswa", users.username AS "nama_siswa", jadwal_piket.nama AS "piket", siswa_terjadwal.sudah_piket AS "sudah_piket", siswa_terjadwal.waktu AS "waktu_konfirmasi", siswa_terjadwal.tanggal AS "tanggal_dijadwalkan", siswa_terjadwal.photo_bukti AS "foto_bukti", jadwal_piket.dari_jam AS "dari_jam", jadwal_piket.sampai_jam AS "sampai_jam" FROM users RIGHT JOIN siswa_terjadwal ON siswa_terjadwal.id_user = users.id INNER JOIN jadwal_piket ON siswa_terjadwal.id_piket = jadwal_piket.id