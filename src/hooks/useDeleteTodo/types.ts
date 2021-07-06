import { MutationStatus } from 'react-query'

export type UseDeleteTodo = {
  deleteTodo: (ids: (string | number)[]) => void
  status: MutationStatus
  isError: boolean
}
