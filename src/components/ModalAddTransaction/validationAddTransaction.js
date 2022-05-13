import * as Yup from 'yup'; 

export const validationSchema = Yup.object().shape({
   type: Yup.string()
      .required('Type is required'),
   money: Yup.number('Enter your money')
      .min(0)
      .max(10, 'Wow, congratulations rich man')
      .required('Money is required')
   ,
   comment: Yup.string('Comment is required')
      .max(20, 'Stop!')
      .required('Comment is required'),
   category: Yup.string('Choose a category')
      .required('Category is required'),
   date: Yup.string(),
});