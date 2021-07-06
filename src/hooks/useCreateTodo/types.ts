import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type UseCreateTodo = {
  createTodo: (todo: Todo) => void
  status: MutationStatus
  isError: boolean
  todo: Todo
}

export type CreateTodoVariables = {
  queryKey: [string, Todo]
}
