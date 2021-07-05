import { useParams } from 'react-router-dom'
import Card from 'component/Card'
import { useGetTodo } from 'hooks'

const Todo: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { todo } = useGetTodo(id)

  if (!todo)
    return (
      <div>
        <span>No such activity exists</span>
      </div>
    )

  return (
    <div>
      <Card todo={todo} />
    </div>
  )
}

export default Todo
