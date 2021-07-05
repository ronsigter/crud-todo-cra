import nock from 'nock'
import { ListTodos } from 'api'
import { todos as todosMock } from 'mock'

describe('ListTodos API', () => {
  it('returns a list of todos', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todos/)
      .reply(200, todosMock)

    const todos = await ListTodos({
      queryKey: [
        'todos',
        {
          filters: {
            byActive: 'all',
            term: '',
          },
        },
      ],
    })

    expect(todos).toEqual(todosMock)
  })

  it('returns an error message', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todos/)
      .reply(500, 'Something Went Wrong')

    const todos = await ListTodos({
      queryKey: [
        'todos',
        {
          filters: {
            byActive: 'all',
            term: '',
          },
        },
      ],
    })

    expect(todos).toEqual(null)
  })
})
