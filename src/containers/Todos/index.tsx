import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { useDeleteTodo, useListTodos } from 'hooks'
import Loader from './Loader'
import AddButton from 'component/AddButton'
import DeleteButton from 'component/DeleteButton'

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

  const handleOnAddId = (isChecked: boolean, id: string | number) => {
    if (isChecked) {
      if (!ids.includes(id)) setIds([...ids, id])
    } else {
      setIds(ids.filter((dataId) => !(dataId === id)))
    }
  }

  const handleAddAllIds = (isChecked: boolean) => {
    if (isChecked) setIds(todos.map(({ id }) => id))
    else setIds([])
  }

  const handleDelete = () => {
    deleteTodo(ids)
    setIds([])
  }

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
    <section className='flex flex-col h-full '>
      <div>
        <div>
          <input
            className='w-full max-w-md px-4 py-2 rounded-md bg-gray-200'
            placeholder='Search activity...'
            onChange={(e) => handleSearchTerm(e.target.value)}
            data-cy='search-todo'
          />
        </div>
      </div>
      <div className='flex-grow-0 w-full flex items-center px-4  mb-4 h-20 border-b-2 border-gray-300'>
        <input
          type='checkbox'
          onChange={(e) => handleAddAllIds(e.target.checked)}
          checked={ids.length === todos?.length}
          disabled={todos?.length === 0}
          data-cy='select-all-button'
        />
        {ids.length !== 0 && (
          <div className='ml-8' onClick={handleDelete} data-cy='delete-button'>
            <DeleteButton />
          </div>
        )}
        <div className='ml-auto'>
          <select
            className='px-4 py-2 rounded-md bg-gray-200'
            onChange={(e) => handleFilterStatus(e.target.value)}
          >
            <option value='all'>All Activities</option>
            <option value='false'>Finished Activities</option>
            <option value='true'>Current Activities</option>
          </select>
        </div>
      </div>
      <div className='relative flex-grow '>
        <Loader
          isFiltering={!!(searchTerm || statusFilter !== 'all')}
          status={todosStatus}
          items={todos || []}
          onChange={handleOnAddId}
          ids={ids}
        />
      </div>
      {todos?.length !== 0 && todos !== null && (
        <Link to='/create-todo'>
          <AddButton />
        </Link>
      )}
    </section>
  )
}

export default Todos
