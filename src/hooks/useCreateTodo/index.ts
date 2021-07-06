import { CreateTodo } from 'api'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { queryClient } from 'services/queryClient'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type UseCreateTodo = {
  createTodo: (todo: Partial<Todo>) => void
  status: MutationStatus
  isError: boolean
  todo: Todo
}

export const useCreateTodo = (): UseCreateTodo => {
  const [todo, setTodo] = useState<Todo>(null)

  const { mutate, status, isError } = useMutation(CreateTodo, {
    onSuccess: (data) => {
      setTodo(data)
      queryClient.invalidateQueries('todos')
    },
  })

  const createTodo = ({ title, description }: Partial<Todo>) =>
    mutate({
      title: title,
      description: description,
      id: uuidv4(),
      isActive: true,
      creationDate: new Date().toLocaleString(),
    })

  return {
    createTodo,
    status,
    isError,
    todo,
  }
}
