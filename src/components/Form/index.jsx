import { FormContainer, Title, Container } from './styles'
import { schema } from '../../schemas'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import calculator from '../../assets/icon-calculator.svg'
import Input from '../Input'
import { useCalculate } from '../../providers/calculate'
import { getArray } from '../../utils'
import { useLoading } from '../../providers/loading'
import { motion } from 'framer-motion'
import Button from '../Button'

const Form = () => {
  const { getResults } = useCalculate()
  const { setShowResults, setLoading, setCountResults } = useLoading()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleClick = (data) => {
    const days = getArray(data.days)
    setCountResults(days.length)
    setShowResults(true)
    setLoading(true)

    const payload = {
      ...data,
      mdr: Number(data.mdr),
      amount: 100 * Number(data.amount),
      days,
    }

    getResults(payload)
  }

  return (
    <Container>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <FormContainer key='main-form' onSubmit={handleSubmit(handleClick)}>
          <Title>Simule sua Antecipação</Title>
          <Input
            type='decimal'
            description='Informe o valor da venda*'
            placeholder='digite o valor'
            name='amount'
            register={register}
            error={errors.amount?.message}
            mode='currency'
            setValue={setValue}
          />
          <Input
            type='number'
            description='Em quantas parcelas*'
            placeholder='digite número de parcelas'
            name='installments'
            register={register}
            error={errors.installments?.message}
          />
          <Input
            type='decimal'
            description='Informe o percentual de MDR*'
            placeholder='digite o percentual'
            name='mdr'
            register={register}
            error={errors.mdr?.message}
            setValue={setValue}
          />
          <Input
            type='string'
            description='Lista de dias para antecipação'
            placeholder='exemplo: 1,15,30,90'
            name='days'
            register={register}
            error={errors.days?.message}
          />

          <Button src={calculator} alt='calculator'>
            Calcular
          </Button>
        </FormContainer>
      </motion.div>
    </Container>
  )
}

export default Form
