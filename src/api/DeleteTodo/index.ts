import { DeleteTodoParams } from './types'

export const DeleteTodo = async (
  params: DeleteTodoParams
): Promise<{ message: string }> => {
  const [, { id }] = params.queryKey

  try {
    const response = await fetch(`/todos/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error('Problem fetching data')
    }
    return {
      message: 'Activity Deleted',
    }
  } catch (error) {
    return null
  }
}
