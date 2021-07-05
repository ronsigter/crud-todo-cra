import { Todos } from 'GlobalTypes'

export const ListTodos = async (): Promise<Todos> => {
  try {
    const response = await fetch(`/todos`)
    if (!response.ok) {
      throw new Error('Problem fetching data')
    }
    const todos = await response.json()

    return todos
  } catch (error) {
    return null
  }
}
