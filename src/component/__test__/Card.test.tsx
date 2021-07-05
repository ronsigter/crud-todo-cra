import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Card from 'component/Card'

describe('Card Component', () => {
  const todo = {
    id: 1,
    title: 'Todo_1 title',
    description: 'Todo_1 description',
    creationDate: '01/07/2021, 9:42:52 pm',
    isActive: true,
  }

  it('renders passed props', () => {
    const screen = render(
      <Router>
        <Card todo={todo} />
      </Router>
    )
    const title = screen.getByTestId('card-title')
    const description = screen.getByTestId('card-description')

    expect(title).toHaveTextContent(todo.title)
    expect(description).toHaveTextContent(todo.description)
  })
})
