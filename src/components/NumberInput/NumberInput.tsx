import { FC, HTMLAttributes } from 'react'
import { Container, Input, ValueButton } from './NumberInput.styles'
import { observer } from 'mobx-react'

interface NumberInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  controls?: boolean
}

export const NumberInput: FC<NumberInputProps> = observer((props) => {
  const { value, onChange, controls } = props

  const handleChange = (newValue: number) => {
    if (props?.min && newValue < props?.min) {
      return
    }

    if (props?.max && newValue > props?.max) {
      return
    }

    onChange(newValue)
  }

  return (
    <Container>
      {!!controls && (
        <ValueButton onClick={() => handleChange(value - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M0 10h24v4h-24z" />
          </svg>
        </ValueButton>
      )}
      <Input type="number" {...props} onChange={(e) => handleChange(parseInt(e.target.value))} />
      {!!controls && (
        <ValueButton onClick={() => handleChange(value + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
        </ValueButton>
      )}{' '}
    </Container>
  )
})
