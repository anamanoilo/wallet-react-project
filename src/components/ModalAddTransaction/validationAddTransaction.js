import * as Yup from 'yup'; 

export const validationSchema = Yup.object().shape({
   type: Yup.string()
      .required('Type is required'),
   amount: Yup.string('Enter your money')
      .min(0)
      .max(8, 'Very large amount, no more than 8 characters')
      .matches(
        /^(?:\d*\.)?\d+$/,'Only positive amount')
      .required('Enter the amount, only numbers and comas'),
   comment: Yup.string()
      .max(15, 'No more than 15 characters')
   .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed'),
   categoryId: Yup.string('Choose a category')
      .required('Category is required'),
   transactionDate: Yup.date()
   .required('Date is required'),
});
