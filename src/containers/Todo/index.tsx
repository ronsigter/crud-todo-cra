import { useParams } from 'react-router-dom'
import { useGetTodo, useUpdateTodo } from 'hooks'
import Loader from 'containers/Todo/Loader'
import ToggleButton from 'component/ToggelButton'

const Todo: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { todo, status } = useGetTodo(id)
  const { updateTodo } = useUpdateTodo()

  const handleOnChangeStatus = (status: boolean) => {
    console.log(status)

    updateTodo({ ...todo, isActive: status })
  }

  return (
    <div>
      <Loader status={status} item={todo} />
      <ToggleButton
        isActive={todo?.isActive || false}
        onChange={handleOnChangeStatus}
      />
    </div>
  )
}

export default Todo
