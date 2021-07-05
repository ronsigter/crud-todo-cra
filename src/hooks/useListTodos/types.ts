import { Todos } from 'types'

export type UseListTodos = {
  status: 'idle' | 'error' | 'loading' | 'success'
  isError: boolean
  todos: Todos
}
