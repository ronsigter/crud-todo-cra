import { Todo } from 'GlobalTypes'

export const CreateTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const response = await fetch(`/todos/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
    if (!response.ok) {
      throw new Error('Problem fetching data')
    }
    const createdTodo = await response.json()

    return createdTodo
  } catch (error) {
    return null
  }
}
