import { GetTodo } from 'api'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Todo } from 'GlobalTypes'
import { UseGetTodo } from './types'

export const useGetTodo = (id: string | number): UseGetTodo => {
  const [todo, setTodo] = useState<Todo>(null)
  const { status, isError } = useQuery<Todo>(['todo', { id }], GetTodo, {
    onSuccess: (data) => setTodo(data),
  })

  return {
    status,
    isError,
    todo,
  }
}
