import { DeleteTodo } from 'api'
import { useMutation } from 'react-query'
import { queryClient } from 'services/queryClient'
import { MutationStatus } from 'react-query'

export type UseDeleteTodo = {
  deleteTodo: (ids: (string | number)[]) => void
  status: MutationStatus
  isError: boolean
}

export const useDeleteTodo = (): UseDeleteTodo => {
  const { mutate, status, isError } = useMutation(DeleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })

  const deleteTodo = (ids: (string | number)[]) => mutate(ids)

  return {
    deleteTodo,
    status,
    isError,
  }
}
