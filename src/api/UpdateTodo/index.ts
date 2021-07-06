import { Todo } from 'GlobalTypes'

export const UpdateTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const response = await fetch(`/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
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
