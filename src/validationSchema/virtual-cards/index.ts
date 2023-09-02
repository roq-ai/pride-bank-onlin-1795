import * as yup from 'yup';

export const virtualCardValidationSchema = yup.object().shape({
  card_number: yup.string().required(),
  expiry_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
