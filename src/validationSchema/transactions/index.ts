import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  transaction_type: yup.string().required(),
  amount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  account_id: yup.string().nullable().required(),
});
