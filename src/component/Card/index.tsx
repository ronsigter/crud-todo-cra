import { Link } from 'react-router-dom'
import { Todo } from 'GlobalTypes'

type CardProps = {
  todo: Todo
}

const Card: React.FC<CardProps> = ({ todo }) => {
  return (
    <div>
      <Link to={`/todos/${todo?.id}`}>
        <p data-testid='card-title'>{todo?.title}</p>
      </Link>
      <p data-testid='card-description'>{todo?.description}</p>
    </div>
  )
}

export default Card
