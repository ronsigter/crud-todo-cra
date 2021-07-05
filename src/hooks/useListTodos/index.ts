import { ListTodos } from 'api'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Todos, ListTodoFilterProps } from 'GlobalTypes'
import { UseListTodos } from './types'

export const useListTodos = (): UseListTodos => {
  const [todos, setTodos] = useState<Todos>([])
  const [filters, setFilters] = useState<ListTodoFilterProps>({
    byActive: 'all',
    term: '',
  })

  const { status, isError } = useQuery<Todos>(
    [
      'todos',
      {
        filters,
      },
    ],
    ListTodos,
    {
      onSuccess: (data) => setTodos(data),
      initialData: [],
    }
  )

  return {
    setFilters,
    status,
    isError,
    todos,
  }
}
