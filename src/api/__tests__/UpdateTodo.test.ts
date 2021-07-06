import nock from 'nock'
import { UpdateTodo } from 'api'
import { todos as todosMock } from 'mock'

describe('UpdateTodo API', () => {
  it('returns created todo', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .put('/todos/2')
      .reply(200, todosMock[1])

    const todo = await UpdateTodo(todosMock[1])

    expect(todo).toEqual(todosMock[1])
  })

  it('returns an error message', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .put('/todos/2')
      .reply(500, 'Something Went Wrong')

    const todo = await UpdateTodo(todosMock[1])

    expect(todo).toEqual(null)
  })
})
