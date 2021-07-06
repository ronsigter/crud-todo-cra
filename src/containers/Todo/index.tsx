import { Link, useParams } from 'react-router-dom'
import { useGetTodo, useUpdateTodo } from 'hooks'
import Loader from 'containers/Todo/Loader'
import ToggleButton from 'component/ToggelButton'

const Todo: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { todo, status } = useGetTodo(id)
  const { updateTodo } = useUpdateTodo()

  const handleOnChangeStatus = (status: boolean) => {
    updateTodo({ ...todo, isActive: status })
  }

  return (
    <div>
      <Loader status={status} item={todo} />
      <Link to={`/edit/${todo?.id}`}>
        <p>Edit</p>
      </Link>
      <ToggleButton
        isActive={todo?.isActive || false}
        onChange={handleOnChangeStatus}
      />
    </div>
  )
}

export default Todo
