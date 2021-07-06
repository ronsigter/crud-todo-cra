import { Todo } from 'GlobalTypes'

type GetTodoParams = {
  queryKey: [string, { id: number | string }]
}

export const GetTodo = async (params: GetTodoParams): Promise<Todo> => {
  const [, { id }] = params.queryKey

  try {
    const response = await fetch(`/todos/${id}`)
    if (!response.ok) {
      throw new Error('Problem fetching data')
    }
    const todo = await response.json()

    return todo
  } catch (error) {
    return null
  }
}
