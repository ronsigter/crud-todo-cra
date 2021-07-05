import { Link } from 'react-router-dom'
import { CardProps } from './types'

const Card: React.FC<CardProps> = ({ todo }) => {
  return (
    <div>
      <Link to={`/todo/${todo.id}`}>
        <p data-testid='card-title'>{todo?.title}</p>
      </Link>
      <p data-testid='card-description'>{todo?.description}</p>
    </div>
  )
}

export default Card
