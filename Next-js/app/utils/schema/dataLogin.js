import { z } from "zod";

const dataLoginSchema = z.object({
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
      .max(25, {message: "password must be less than or equals 25 characters"})
})

export default dataLoginSchema;