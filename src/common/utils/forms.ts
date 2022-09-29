import { ChangeEvent } from "react";

export function computeFormErrors(
  schema: any,
  formData: any,
  setFormErrors: any
) {
  setFormErrors(undefined);
  
  const { error } = schema.validate({...formData}, { abortEarly: false });

  if (error) {
    const errors = error.details;
    let tempErrors: any = {};

    errors.forEach((error: any) => {
      const { path, message } = error;
      const key = path[0];

      tempErrors[key as keyof any] = message;
    })

    setFormErrors(tempErrors)
  }

  return error;
}

export function computeFormData(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFormData: any,
  formData: any
) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}