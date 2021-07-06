import { useToasts } from 'react-toast-notifications'
import Form from 'component/Form'
import { InfoProps } from 'component/Form/types'
import { useHistory } from 'react-router-dom'
import { useCreateTodo } from 'hooks'

const CreateTodo = () => {
  const history = useHistory()
  const { addToast } = useToasts()
  const { createTodo, status } = useCreateTodo()

  const handleOnSubmit = (info: InfoProps): void => {
    createTodo(info)
    addToast('Activity Added Successfully', { appearance: 'success' })
    history.push('/')
  }

  return (
    <div>
      <Form onSubmit={handleOnSubmit} status={status} />
    </div>
  )
}

export default CreateTodo
