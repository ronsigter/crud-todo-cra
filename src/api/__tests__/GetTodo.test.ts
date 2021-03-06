import nock from 'nock'
import { GetTodo } from 'api'
import { todos as todosMock } from 'mock'

describe('GetTodo API', () => {
  it('returns a todo', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get('/todos/2')
      .reply(200, todosMock[1])

    const todo = await GetTodo({
      queryKey: [
        'todos',
        {
          id: 2,
        },
      ],
    })

    expect(todo).toEqual(todosMock[1])
    expect(todo.id).toEqual(todosMock[1].id)
  })

  it('returns an error message', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get('/todos/1')
      .reply(500, 'Something Went Wrong')

    const todo = await GetTodo({
      queryKey: [
        'todos',
        {
          id: 1,
        },
      ],
    })

    expect(todo).toEqual(null)
  })
})
