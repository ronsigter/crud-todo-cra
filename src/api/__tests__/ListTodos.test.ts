import nock from 'nock'
import { ListTodos } from 'api'
import { todos as todosMock } from 'mock'

describe('ListTodos API', () => {
  it('returns a list of todos', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todos/)
      .reply(200, todosMock)

    const todos = await ListTodos()

    expect(todos).toEqual(todosMock)
  })
})
