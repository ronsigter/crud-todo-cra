import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type UseUpdateTodo = {
  updateTodo: (todo: Todo) => void
  status: MutationStatus
  isError: boolean
  todo: Todo
}
