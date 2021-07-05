import { ListTodos } from 'api'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Todos } from 'GlobalTypes'
import { UseListTodos } from './types'

export const useListTodos = (): UseListTodos => {
  const [todos, setTodos] = useState<Todos>([])

  const { status, isError } = useQuery<Todos>('todos', ListTodos, {
    onSuccess: (data) => setTodos(data),
  })

  return {
    status,
    isError,
    todos,
  }
}
