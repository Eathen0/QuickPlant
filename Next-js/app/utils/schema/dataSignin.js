import { z } from "zod";

const dataSigninSchema = z.object({
   username: z.string()
      .regex(/^[a-zA-Z0-9_]+$/, {message: "username must contain only letters, numbers, and underscores"})
      .min(3, {message: "username must be greater than or equals 3 charactes"})
      .max(25, {message: "username must be less than or equals 25 characters"}),
   password: z.string()
      .regex(/[a-z]+/, {message: "password must contain at least one lowercase letter"})
      .regex(/[A-Z]+/, {message: "password must contain at least one uppercase letter"})
      .regex(/[0-9]+/, {message: "password must contain at least one number"})
      .regex(/[^a-zA-Z0-9]+/, {message: "password must contain at least one symbol"})
      .min(5, {message: "password must be greater than or equals 5 characters"})
      .max(15, {message: "password must be less than or equals 25 characters"}),
   namaLengkap: z.string()
      .regex(/^[a-zA-Z\s]+$/, {message: "nama lengkap must contain only letters and spaces"})
      .min(3, {message: "nama lengkap must be greater than or equals 3 charactes"})
      .max(100, {message: "nama lengkap must be less than or equals 100 characters"}),
   nomorWhatsApp: z.string()
      .regex(/^[0-9]+$/, {message: "nomor whatsapp must contain only numbers"})
      .max(13, {message: "nomor whatsapp must be less than or equals 13 digit of number"}),
   photoProfile: z.any().nullable(),
   noAbsen: z.string()
      .regex(/^[0-9]+$/, {message: "no absen must contain only numbers"})
      .max(2, {message: "no absen must be less than or equals 2 digit of number"})
})

export default dataSigninSchema;