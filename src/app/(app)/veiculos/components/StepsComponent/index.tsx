import { useState } from 'react'
import { Button, message, Steps } from 'antd'
import { StepsContainer, StepsContent } from './styles'
import { VehicleRegistrationForm } from '../VehicleRegistrationForm'
import { StepsInsertImg } from '../StepsInsertImg'

const steps = [
  {
    title: 'Cadastro veículo',
    content: <VehicleRegistrationForm />,
  },
  {
    title: 'Inserir Imagens',
    content: <StepsInsertImg />,
  },
  {
    title: 'Conclusão',
    content: 'Concluir',
  },
]

export function StepsComponent() {
  // const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  return (
    <StepsContainer>
      <Steps current={current} items={items} />
      <StepsContent>{steps[current].content}</StepsContent>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Proximo
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Concluir
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Voltar
          </Button>
        )}
      </div>
    </StepsContainer>
  )
}
