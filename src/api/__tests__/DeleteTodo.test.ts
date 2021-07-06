import nock from 'nock'
import { DeleteTodo } from 'api'

describe('DeleteTodo API', () => {
  it('returns a list of todos', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .delete(/todo/)
      .reply(200, {
        message: 'Activity Deleted',
      })

    const response = await DeleteTodo({
      queryKey: [
        'todo',
        {
          id: 1,
        },
      ],
    })

    expect(response).toEqual({
      message: 'Activity Deleted',
    })
  })

  it('returns an error message', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .delete(/todo/)
      .reply(500, 'Something Went Wrong')

    const todos = await DeleteTodo({
      queryKey: [
        'todos',
        {
          id: 1,
        },
      ],
    })

    expect(todos).toEqual(null)
  })
})
