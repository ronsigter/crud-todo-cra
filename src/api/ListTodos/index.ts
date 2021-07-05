export const ListTodos = async () => {
  const response = await fetch(`/todos`)
  if (!response.ok) {
    throw new Error('Problem fetching data')
  }
  const todos = await response.json()

  return todos
}
