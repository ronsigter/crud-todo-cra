import { renderHook, RenderResult, WaitFor } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import { useDeleteTodo, UseDeleteTodo } from 'hooks'
import { todos as todosMock } from 'mock'
import { act } from 'react-dom/test-utils'

const queryClient = new QueryClient()

type HookWrapper = {
  result: RenderResult<UseDeleteTodo>
  waitFor: WaitFor
}

describe('useGetTodo custom hook', () => {
  function hookWrapper(): HookWrapper {
    const wrapper = ({ children }): JSX.Element => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result, waitFor } = renderHook(() => useDeleteTodo(), {
      wrapper,
    })
    // Test the initial state of the request
    expect(result.current.status).toBe('idle')
    expect(result.current.isError).toBeFalsy()
    expect(typeof result.current.deleteTodo).toEqual('function')

    return { result, waitFor }
  }

  it('creates a todo', async () => {
    // intercept request from db
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .delete('/todos/2')
      .reply(200, todosMock[1])

    const { result, waitFor } = hookWrapper()

    // trigger function
    act(() => {
      result.current.deleteTodo([todosMock[1].id])
    })

    // wait for success
    await waitFor(() => result.current.status === 'success')

    // Access the hook result using result.current
    expect(result.current.isError).toBeFalsy()
  })
})
