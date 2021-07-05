import { renderHook, RenderResult, WaitFor } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import { useListTodos } from 'hooks'
import { UseListTodos } from 'hooks/useListTodos/types'
import { todos as todosMock } from 'mock'

const queryClient = new QueryClient()

type HookWrapper = {
  result: RenderResult<UseListTodos>
  waitFor: WaitFor
}

describe('useGetTodo custom hook', () => {
  function hookWrapper(): HookWrapper {
    const wrapper = ({ children }): JSX.Element => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result, waitFor } = renderHook(() => useListTodos(), {
      wrapper,
    })
    // Test the initial state of the request
    expect(result.current.status).toBe('loading')
    expect(result.current.isError).toBeFalsy()
    expect(result.current.todos).toEqual([])

    return { result, waitFor }
  }

  it('returns todos list', async () => {
    // intercept request from db
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todos/)
      .reply(200, todosMock)

    const { result, waitFor } = hookWrapper()

    // wait for success
    await waitFor(() => result.current.status === 'success')

    // Access the hook result using result.current
    expect(result.current.isError).toBeFalsy()
    expect(result.current.todos).toEqual(todosMock)
  })
})
