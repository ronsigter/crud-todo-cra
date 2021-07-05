import { Todo } from 'types'

export const ListTodos = async (): Promise<Todo[] | null> => {
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
