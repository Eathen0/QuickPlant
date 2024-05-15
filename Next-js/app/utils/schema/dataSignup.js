import { z } from "zod";

const dataSignupSchema = z.object({
   username: z.string()
      .regex(/^[a-zA-Z0-9_]+$/, {message: "username hanya boleh alphanumeric dan underscore"})
      .min(3, {message: "username minimal 3 karakter"})
      .max(25, {message: "username maksimal 25 karakter"}),
   password: z.string()
      .regex(/[a-z]+/, {message: "password harus ada 1 / lebih kecil"})
      .regex(/[A-Z]+/, {message: "password harus ada 1 / lebih huruf besar"})
      .regex(/[0-9]+/, {message: "password harus ada 1 / lebih angka"})
      .regex(/[^a-zA-Z0-9]+/, {message: "password harus ada 1 / lebih simbol"})
      .min(5, {message: "password minimal 5 karakter"})
      .max(15, {message: "password maksimal 15 karakter"}),
   namaLengkap: z.string()
      .regex(/^[A-Za-z]+(\s+[A-Za-z]+)*$/, {message: "nama lengkap hanya boleh huruf dan spasi"})
      .min(3, {message: "nama lengkap minimal 3 karakter"})
      .max(100, {message: "nama lengkap maksimal 100 karakter"}),
   nomorWhatsApp: z.string()
      .regex(/^[0-9]+$/, {message: "nomor telepon must contain only numbers"})
      .min(10, {message: "nomor telepon minimal 10 digit angka"})
      .max(13, {message: "nomor telepon maksimal 13 digit angka"}),
   photoProfile: z.any().optional(),
   noAbsen: z.string()
      .regex(/^[0-9]+$/, {message: "no absen harus angka"})
      .max(2, {message: "no absen maximal 2 digit angka"}),
}).partial();

export default dataSignupSchema;