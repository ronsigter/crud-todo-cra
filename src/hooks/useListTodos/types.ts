import { Todos, ListTodoFilterProps } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type UseListTodos = {
  status: MutationStatus
  isError: boolean
  todos: Todos
  setFilters: (filters?: ListTodoFilterProps) => void
}
