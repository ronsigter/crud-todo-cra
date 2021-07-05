import { render } from '@testing-library/react'
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
    const screen = render(<Card todo={todo} />)
    const title = screen.getByTestId('card-title')
    const description = screen.getByTestId('card-description')

    expect(title).toHaveTextContent(todo.title)
    expect(description).toHaveTextContent(todo.description)
  })
})
