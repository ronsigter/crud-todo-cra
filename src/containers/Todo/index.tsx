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
    addToast('Activity Updated Successfully', { appearance: 'success' })
  }

  const handleOnDelete = () => {
    deleteTodo([todo.id])
    addToast('Activity Added Successfully', { appearance: 'success' })
    history.push('/')
  }

  return (
    <div className='w-full flex flex-col items-center space-y-8'>
      <Loader status={status} item={todo} />

      {todo && (
        <>
          <div className='flex'>
            <Link to={`/edit/${todo?.id}`} data-cy='todo-edit'>
              <p>Edit</p>
            </Link>
            <div>
              <button onClick={handleOnDelete}>delete</button>
            </div>
            <Link to='/'>
              <p data-cy='back-button'>Back</p>
            </Link>
          </div>
          <ToggleButton
            isActive={todo?.isActive || false}
            onChange={handleOnChangeStatus}
          />
        </>
      )}
    </div>
  )
}

export default Todo
