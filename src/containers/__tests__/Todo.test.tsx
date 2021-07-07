import { waitFor, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import { Route, MemoryRouter } from 'react-router-dom'
import Todo from 'containers/Todo'
import { ToastProvider } from 'react-toast-notifications'
import { todos as todosMock } from 'mock'

describe('Todo Container', () => {
  beforeEach(() => {
    const queryClient = new QueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <MemoryRouter initialEntries={['todos/1']}>
            <Route path='todos/:id'>
              <Todo />
            </Route>
          </MemoryRouter>
        </ToastProvider>
      </QueryClientProvider>
    )

    // loading state
    const loadingContainer = screen.getByTestId('todo-loading-state')
    const message = screen.getByTestId('todo-loading-state-message')
    expect(loadingContainer).toBeInTheDocument()
    expect(message).toHaveTextContent('getting activity details')
  })

  it('renders loading-success state cycle', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todo/)
      .reply(200, todosMock[1])

    // success state
    await waitFor(() => screen.findByTestId('todo-success-state'))

    const todo = screen.getByTestId('todo')
    expect(todo).toHaveTextContent(todosMock[1].title)
  })

  it('renders loading-blank state cycle', async () => {
    nock(/localhost/)
      .defaultReplyHeaders({ 'Access-Control-Allow-Origin': '*' })
      .get(/todo/)
      .reply(200, null)

    // success state
    await waitFor(() => screen.findByTestId('todo-blank-state'))

    const message = screen.getByTestId('todo-blank-state-message')
    expect(message).toHaveTextContent('activity does not exist')
  })
})
