import nock from 'nock'
import { CreateTodo } from 'api'
import { todos as todosMock } from 'mock'

describe('CreateTodo API', () => {
  it('returns created todo', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .post('/todos/')
      .reply(201, todosMock[1])

    const todo = await CreateTodo(todosMock[1])

    expect(todo).toEqual(todosMock[1])
  })

  it('returns an error message', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .post('/todos/')
      .reply(500, 'Something Went Wrong')

    const todo = await CreateTodo(todosMock[1])

    expect(todo).toEqual(null)
  })
})
