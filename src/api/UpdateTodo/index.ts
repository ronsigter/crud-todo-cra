import { Todo } from 'GlobalTypes'
import { UpdateTodoParams } from './types'

export const UpdateTodo = async (params: UpdateTodoParams): Promise<Todo> => {
  const [, todo] = params.queryKey

  try {
    const response = await fetch(`/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo }),
    })
    if (!response.ok) {
      throw new Error('Problem fetching data')
    }
    const updatedTodo = await response.json()

    return updatedTodo
  } catch (error) {
    return null
  }
}
