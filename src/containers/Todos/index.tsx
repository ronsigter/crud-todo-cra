import { useEffect, useState } from 'react'
import { useListTodos } from 'hooks'
import Loader from './Loader'

const Todos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<boolean | 'all'>('all')
  const { todos, status, setFilters } = useListTodos()

  const handleFilterStatus = (statusFilter: string): void => {
    if (statusFilter === 'all') setStatusFilter('all')
    else if (statusFilter === 'true') setStatusFilter(true)
    else if (statusFilter === 'false') setStatusFilter(false)
  }

  const handleSearchTerm = (term: string): void => {
    setSearchTerm(term)
  }

  useEffect(() => {
    setFilters({
      byActive: statusFilter,
      term: searchTerm,
    })
  }, [setFilters, statusFilter, searchTerm])

  return (
    <section className='App h-screen w-full bg-green-500'>
      <div>Todo List</div>
      <div>
        <div>
          <label>search: </label>
          <input onChange={(e) => handleSearchTerm(e.target.value)} />
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
      <Loader status={status} items={todos || []} />
    </section>
  )
}

export default Todos
