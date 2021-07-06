import Form from 'component/Form'
import { InfoProps } from 'component/Form/types'
import { useHistory } from 'react-router-dom'
import { useCreateTodo } from 'hooks'

const CreateTodo = () => {
  const history = useHistory()
  const { createTodo, status } = useCreateTodo()

  const handleOnSubmit = (info: InfoProps): void => {
    createTodo(info)
    history.push('/')
  }

  return (
    <div>
      <Form onSubmit={handleOnSubmit} status={status} />
    </div>
  )
}

export default CreateTodo
