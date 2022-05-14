import * as Yup from 'yup'; 

export const validationSchema = Yup.object().shape({
   type: Yup.string()
      .required('Type is required'),
   amount: Yup.number('Enter your money')
      .min(0)
      .required('Money is required'),
   comment: Yup.string('Comment is required')
      .max(15, 'Stop!'),
   categoryId: Yup.string('Choose a category')
      .required('Category is required'),
   transactionDate: Yup.string()
   .required('Data is required'),
});