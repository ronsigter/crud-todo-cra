import { UpdateTodo } from 'api'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Todo } from 'GlobalTypes'
import { UseUpdateTodo } from './types'

export const useUpdateTodo = (): UseUpdateTodo => {
  const [todo, setTodo] = useState<Todo>(null)

  const queryClient = useQueryClient()

  const { mutate, status, isError } = useMutation(UpdateTodo, {
    onSuccess: (data) => {
      setTodo(data)
      queryClient.invalidateQueries('todos')
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
