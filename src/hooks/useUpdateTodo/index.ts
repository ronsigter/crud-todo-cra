import { UpdateTodo } from 'api'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { Todo } from 'GlobalTypes'
import { queryClient } from 'services/queryClient'
import { MutationStatus } from 'react-query'

export type UseUpdateTodo = {
  updateTodo: (todo: Todo) => void
  status: MutationStatus
  isError: boolean
  todo: Todo
}

export const useUpdateTodo = (): UseUpdateTodo => {
  const [todo, setTodo] = useState<Todo>(null)

  const { mutate, status, isError } = useMutation(UpdateTodo, {
    onSuccess: (data) => {
      setTodo(data)
      queryClient.invalidateQueries('todos')
      queryClient.invalidateQueries(['todo', { id: data.id }])
    },
  })

  const updateTodo = (todo: Todo) => mutate(todo)

  return {
    updateTodo,
    status,
    isError,
    todo,
  }
}
