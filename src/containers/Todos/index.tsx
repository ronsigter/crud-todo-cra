import { useListTodos } from 'hooks'
import Loader from './Loader'

const Todos: React.FC = () => {
  const { todos, status } = useListTodos()

  return (
    <section className='App h-screen w-full bg-green-500'>
      <div>Todo List</div>
      <Loader status={status} items={todos || []} />
    </section>
  )
}

export default Todos
