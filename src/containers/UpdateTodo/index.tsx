import { useParams, useHistory } from 'react-router-dom'
import { useGetTodo, useUpdateTodo } from 'hooks'
import Form from 'component/Form'
import { InfoProps } from 'component/Form/types'

const UpdateTodo = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const { todo, status } = useGetTodo(id)
  const { updateTodo } = useUpdateTodo()

  const handleOnSubmit = (info: InfoProps) => {
    updateTodo({ ...todo, ...info })
    history.push('/')
  }

  return (
    <div>
      <Form onSubmit={handleOnSubmit} status={status} todo={todo} />
    </div>
  )
}

export default UpdateTodo
