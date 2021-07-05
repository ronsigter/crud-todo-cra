import { useParams } from 'react-router-dom'
import { useGetTodo } from 'hooks'
import Loader from 'containers/Todo/Loader'

const Todo: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { todo, status } = useGetTodo(id)

  return (
    <div>
      <Loader status={status} item={todo} />
    </div>
  )
}

export default Todo
