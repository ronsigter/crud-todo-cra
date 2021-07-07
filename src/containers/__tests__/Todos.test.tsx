import { waitFor, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastProvider } from 'react-toast-notifications'
import nock from 'nock'
import { BrowserRouter as Router } from 'react-router-dom'
import Todos from 'containers/Todos'
import { todos as todosMock } from 'mock'

describe('Todos Container', () => {
  beforeEach(() => {
    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Router>
            <Todos />
          </Router>
        </ToastProvider>
      </QueryClientProvider>
    )

    // loading state
    const loadingContainer = screen.getByTestId('todos-loading-state')
    const message = screen.getByTestId('todos-loading-state-message')
    expect(loadingContainer).toBeInTheDocument()
    expect(message).toHaveTextContent('getting activity list')
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
    expect(message).toHaveTextContent('What tasks are on your mind?')
  })
})
