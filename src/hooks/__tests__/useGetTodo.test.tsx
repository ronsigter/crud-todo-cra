import { renderHook, RenderResult, WaitFor } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import { useGetTodo, UseGetTodo } from 'hooks'
import { todos as todosMock } from 'mock'

const queryClient = new QueryClient()

type HookWrapper = {
  result: RenderResult<UseGetTodo>
  waitFor: WaitFor
}

describe('useGetTodo custom hook', () => {
  function hookWrapper(): HookWrapper {
    const wrapper = ({ children }): JSX.Element => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result, waitFor } = renderHook(() => useGetTodo(1), {
      wrapper,
    })
    // Test the initial state of the request
    expect(result.current.status).toBe('loading')
    expect(result.current.isError).toBeFalsy()
    expect(result.current.todo).toEqual(null)

    return { result, waitFor }
  }

  it('returns todo item', async () => {
    // intercept request from db
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todo/)
      .reply(200, todosMock[1])

    const { result, waitFor } = hookWrapper()

    // wait for success
    await waitFor(() => result.current.status === 'success')

    // Access the hook result using result.current
    expect(result.current.isError).toBeFalsy()
    expect(result.current.todo).toEqual(todosMock[1])
  })
})
