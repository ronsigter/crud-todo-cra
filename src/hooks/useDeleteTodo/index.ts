import { DeleteTodo } from 'api'
import { useMutation } from 'react-query'
import { UseDeleteTodo } from './types'
import { queryClient } from 'services/queryClient'

export const useDeleteTodo = (): UseDeleteTodo => {
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
