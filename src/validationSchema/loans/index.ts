import * as yup from 'yup';

export const loanValidationSchema = yup.object().shape({
  loan_number: yup.string().required(),
  loan_type: yup.string().required(),
  amount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
