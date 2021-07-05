import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type UseGetTodo = {
  status: MutationStatus
  isError: boolean
  todo: Todo
}
