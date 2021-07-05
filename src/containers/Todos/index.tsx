import { useListTodos } from 'hooks'

const Todos: React.FC = () => {
  const { todos, status } = useListTodos()

  console.log(status)
  console.log(todos)

  return (
    <section className='App h-screen w-full flex justify-center items-center bg-green-500'>
      <div>Movie Directory</div>
    </section>
  )
}

export default Todos
