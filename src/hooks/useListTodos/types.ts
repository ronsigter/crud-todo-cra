import { Todos } from 'GlobalTypes'

export type UseListTodos = {
  status: 'idle' | 'error' | 'loading' | 'success'
  isError: boolean
  todos: Todos
}
