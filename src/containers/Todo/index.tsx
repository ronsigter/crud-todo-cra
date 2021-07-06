import { Link, useParams, useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { useDeleteTodo, useGetTodo, useUpdateTodo } from 'hooks'
import Loader from 'containers/Todo/Loader'
import ToggleButton from 'component/ToggelButton'

const Todo: React.FC = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const { addToast } = useToasts()
  const { todo, status } = useGetTodo(id)
  const { updateTodo } = useUpdateTodo()
  const { deleteTodo } = useDeleteTodo()

  const handleOnChangeStatus = (status: boolean) => {
    updateTodo({ ...todo, isActive: status })
  }

  const handleOnDelete = () => {
    deleteTodo([todo.id])
    addToast('Activity Added Successfully', { appearance: 'success' })
    history.push('/')
  }

  return (
    <div>
      <Loader status={status} item={todo} />
      <Link to={`/edit/${todo?.id}`}>
        <p>Edit</p>
      </Link>
      <div>
        <button onClick={handleOnDelete}>delete</button>
      </div>
      <ToggleButton
        isActive={todo?.isActive || false}
        onChange={handleOnChangeStatus}
      />
    </div>
  )
}

export default Todo
