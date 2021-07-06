import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { useDeleteTodo, useListTodos } from 'hooks'
import Loader from './Loader'

const Todos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<boolean | 'all'>('all')
  const [ids, setIds] = useState([])
  const { todos, status: todosStatus, setFilters } = useListTodos()
  const { deleteTodo, status: deleteStatus } = useDeleteTodo()
  const { addToast } = useToasts()

  const handleFilterStatus = (statusFilter: string): void => {
    if (statusFilter === 'all') setStatusFilter('all')
    else if (statusFilter === 'true') setStatusFilter(true)
    else if (statusFilter === 'false') setStatusFilter(false)
  }

  const handleSearchTerm = (term: string): void => {
    setSearchTerm(term)
  }

  const handleOnChange = (isChecked: boolean, id: string | number) => {
    if (isChecked) {
      if (!ids.includes(id)) setIds([...ids, id])
    } else {
      setIds(ids.filter((dataId) => !(dataId === id)))
    }
  }

  const handleDelete = () => deleteTodo(ids)

  useEffect(() => {
    setFilters({
      byActive: statusFilter,
      term: searchTerm,
    })
  }, [setFilters, statusFilter, searchTerm])

  useEffect(() => {
    if (deleteStatus === 'success') {
      setIds([])
      addToast('Activity Deleted Successfully', { appearance: 'success' })
    }
  }, [deleteStatus, addToast])

  return (
    <section className='App h-screen w-full bg-green-500'>
      <div>Todo List</div>
      <div>
        <div>
          <label>search: </label>
          <input onChange={(e) => handleSearchTerm(e.target.value)} />
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div>
          <Link to='/create-todo'>Add Activity</Link>
        </div>
        <div>
          <label>Filter: </label>
          <select onChange={(e) => handleFilterStatus(e.target.value)}>
            <option value='all'>All Activities</option>
            <option value='false'>Finished Activities</option>
            <option value='true'>Current Activities</option>
          </select>
        </div>
      </div>
      <Loader
        status={todosStatus}
        items={todos || []}
        onChange={handleOnChange}
        ids={ids}
      />
    </section>
  )
}

export default Todos
