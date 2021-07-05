import { waitFor, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import Todos from 'containers/Todos'
import { todos as todosMock } from 'mock'

describe('Todos Container', () => {
  beforeEach(() => {
    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    )

    // loading state
    const loadingContainer = screen.getByTestId('todos-loading-state')
    expect(loadingContainer).toBeInTheDocument()
  })

  it('renders loading-success state cycle', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todos/)
      .reply(200, todosMock)

    // success state
    await waitFor(() => screen.findByTestId('todos-success-state'))

    const todos = screen.getAllByTestId('todos')
    expect(todos.length).toBe(5)
  })

  it('renders loading-blank state cycle', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todos/)
      .reply(200, [])

    // success state
    await waitFor(() => screen.findByTestId('todos-blank-state'))

    const message = screen.getByTestId('todos-blank-state-message')
    expect(message).toHaveTextContent('you dont have any movies')
  })
})
