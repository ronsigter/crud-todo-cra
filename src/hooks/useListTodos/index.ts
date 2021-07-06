import { ListTodos } from 'api'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Todos, ListTodoFilterProps } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type UseListTodos = {
  status: MutationStatus
  isError: boolean
  todos: Todos
  setFilters: (filters?: ListTodoFilterProps) => void
}

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
    }
  )

  return {
    setFilters,
    status,
    isError,
    todos,
  }
}
