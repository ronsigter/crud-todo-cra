export const DeleteTodo = async (
  ids: (string | number)[]
): Promise<{ message: string }> => {
  try {
    const deleteAll = ids.map((id) =>
      fetch(`/todos/${id}`, { method: 'DELETE' })
    )
    const results = await Promise.all(deleteAll)
    if (results.some((promise) => promise.ok === false)) {
      throw new Error('Problem fetching data')
    }
    return {
      message: 'Activity Deleted',
    }
  } catch (error) {
    return null
  }
}
