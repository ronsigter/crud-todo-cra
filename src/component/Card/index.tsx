import { CardProps } from './types'

const Card: React.FC<CardProps> = ({ todo }) => {
  return (
    <div>
      <p data-testid='card-title'>{todo?.title}</p>
      <p data-testid='card-description'>{todo?.description}</p>
    </div>
  )
}

export default Card
