import { Todo } from 'GlobalTypes'

export const UpdateTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const serverPath = process.env.REACT_APP_SERVER
      ? `${process.env.REACT_APP_SERVER}/todos/${todo.id}`
      : `/todos/${todo.id}`

    const response = await fetch(serverPath, {
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
