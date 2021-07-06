import { UpdateTodo } from 'api'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { Todo } from 'GlobalTypes'
import { UseUpdateTodo } from './types'
import { queryClient } from 'services/queryClient'

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
