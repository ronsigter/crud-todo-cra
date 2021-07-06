import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type UseCreateTodo = {
  createTodo: (todo: Partial<Todo>) => void
  status: MutationStatus
  isError: boolean
  todo: Todo
}
