import nock from 'nock'
import { DeleteTodo } from 'api'

describe('DeleteTodo API', () => {
  it('returns a success message', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .delete('/todos/1')
      .reply(200, {
        message: 'Activity Deleted',
      })

    const response = await DeleteTodo([1])

    expect(response).toEqual({
      message: 'Activity Deleted',
    })
  })

  it('returns an error message', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .delete('/todos/2')
      .reply(500, 'Something Went Wrong')

    const todos = await DeleteTodo([2])

    expect(todos).toEqual(null)
  })
})
