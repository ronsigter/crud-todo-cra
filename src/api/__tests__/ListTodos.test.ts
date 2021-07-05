import { ListTodos } from 'api'

describe('ListTodos API', () => {
  it('returns a list of todos', async () => {
    const todos = await ListTodos()

    expect(todos).toEqual([])
  })
})
