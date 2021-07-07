import { Todo } from 'GlobalTypes'

type CardProps = {
  todo: Todo
}

const Card: React.FC<CardProps> = ({ todo }) => {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex-1 flex flex-col min-w-0 pr-2'>
        <p data-testid='card-title'>{todo?.title}</p>
        <p className='truncate ' data-testid='card-description'>
          {todo?.description}
        </p>
      </div>
      {/* <div className='ml-auto pl-4 flex justify-center'>
        <ToggleButton
          isActive={todo.isActive}
          onChange={() => console.log('hehe')}
        />
      </div> */}
    </div>
  )
}

export default Card
