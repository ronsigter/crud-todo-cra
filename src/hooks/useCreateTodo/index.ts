import { CreateTodo } from 'api'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Todo } from 'GlobalTypes'
import { UseCreateTodo } from './types'

export const useCreateTodo = (): UseCreateTodo => {
  const [todo, setTodo] = useState<Todo>(null)

  const queryClient = useQueryClient()

  const { mutate, status, isError } = useMutation(CreateTodo, {
    onSuccess: (data) => {
      setTodo(data)
      queryClient.invalidateQueries('todos')
    },
  })

  const createTodo = (todo: Todo) => mutate(todo)

  return {
    createTodo,
    status,
    isError,
    todo,
  }
}
