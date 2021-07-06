import { MutationStatus } from 'react-query'

export type UseDeleteTodo = {
  deleteTodo: (id: string | number) => void
  status: MutationStatus
  isError: boolean
}
