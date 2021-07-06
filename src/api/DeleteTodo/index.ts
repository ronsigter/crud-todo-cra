export const DeleteTodo = async (
  id: string | number
): Promise<{ message: string }> => {
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
