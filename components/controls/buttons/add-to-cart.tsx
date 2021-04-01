import Button from 'components/controls/buttons/button'
import PlusIcon from 'components/icons/plus'
import { font16 } from 'components/typography'
import styled from 'styled-components'

const Icon = styled(PlusIcon).attrs({
  fill: '#eb5a1e',
})`
  width: 0.93rem;
  margin-right: 0.45rem;
`

const Counter = styled.div`
  padding: 0.34rem 0.51rem;
  margin-left: 0.71rem;
  border-radius: 50%;
  background: #eb5a1e;
  font-size: 0.93rem;
  line-height: 1;
  color: white;
  font-weight: bold;
`

const StyledAddToCart = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 11.21rem;
  min-height: 2.93rem;
  padding-left: 1.21rem;
  border: 1px solid #eb5a1e;
  background: none;
  color: #eb5a1e;
  ${font16}
`

interface AddToCartProps {
  count?: number
}

const AddToCart = ({ count }: AddToCartProps) => {
  return (
    <StyledAddToCart>
      <Icon />
      Добавить
      {count && <Counter>{count}</Counter>}
    </StyledAddToCart>
  )
}

export default AddToCart
