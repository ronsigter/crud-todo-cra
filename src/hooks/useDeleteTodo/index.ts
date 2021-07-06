import { DeleteTodo } from 'api'
import { useMutation, useQueryClient } from 'react-query'
import { UseDeleteTodo } from './types'

export const useDeleteTodo = (): UseDeleteTodo => {
  const queryClient = useQueryClient()

  const { mutate, status, isError } = useMutation(DeleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  })

  const deleteTodo = (id: string) => mutate(id)

  return {
    deleteTodo,
    status,
    isError,
  }
}
