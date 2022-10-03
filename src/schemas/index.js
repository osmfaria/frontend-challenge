import * as yup from 'yup'

export const schema = yup.object().shape({
  amount: yup
    .string()
    .transform((value, original) => value.replace('.', '').replace(',', '.'))
    .min(7, "*o menor valor aceito é R$1000,00")
    .typeError('*utilize um valor númerico para venda')
    .required('*campo requerido'),
  installments: yup
    .number()
    .typeError('*insira um valor entre 1 e 12')
    .integer('valor deve ser inteiro')
    .positive()
    .required()
    .min(1, '*deve ser no mínimo 1')
    .max(12, '*não deve ser maior do que 12'),
  mdr: yup
    .number()
    .positive("*deve ser um número positivo")
    .max(100, "*deve ser menor ou igual a 100")
    .typeError('*utilize um valor entre 0 e 100')
    .required(),
  days: yup
    .string()
    .matches(/^(([0-9 ](,)?)*)+$/, '*somente números separdos por virgula'),
})
