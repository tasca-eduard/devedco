import Joi from "joi";

export const schema = Joi.object({
  name: Joi
    .string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  email: Joi
    .string()
    .min(3)
    .required(),
  message: Joi
    .string()
    .alphanum()
    .min(15)
    .required()
})