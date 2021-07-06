import { renderHook, RenderResult, WaitFor } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import { useUpdateTodo, UseUpdateTodo } from 'hooks'
import { todos as todosMock } from 'mock'
import { act } from 'react-dom/test-utils'

const queryClient = new QueryClient()

type HookWrapper = {
  result: RenderResult<UseUpdateTodo>
  waitFor: WaitFor
}

describe('useGetTodo custom hook', () => {
  function hookWrapper(): HookWrapper {
    const wrapper = ({ children }): JSX.Element => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result, waitFor } = renderHook(() => useUpdateTodo(), {
      wrapper,
    })
    // Test the initial state of the request
    expect(result.current.status).toBe('idle')
    expect(result.current.isError).toBeFalsy()
    expect(result.current.todo).toEqual(null)
    expect(typeof result.current.updateTodo).toEqual('function')

    return { result, waitFor }
  }

  it('creates a todo', async () => {
    // intercept request from db
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .put('/todos/2')
      .reply(200, todosMock[1])

    const { result, waitFor } = hookWrapper()

    // trigger function
    act(() => {
      result.current.updateTodo(todosMock[1])
    })

    // wait for success
    await waitFor(() => result.current.status === 'success')

    // Access the hook result using result.current
    expect(result.current.isError).toBeFalsy()
    expect(result.current.todo).toEqual(todosMock[1])
  })
})
