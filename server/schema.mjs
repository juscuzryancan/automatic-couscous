import yup from "yup";

export const loginSchema = yup.object({
  body: yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  }),
});

export const registerSchema = yup.object({
  body: yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  }),
});
