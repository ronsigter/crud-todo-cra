import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type LoaderProps = {
  status: MutationStatus
  item: Todo
}

const Loader: React.FC<LoaderProps> = ({ status, item }) => {
  // loading state
  if (status === 'loading')
    return (
      <div data-testid='todo-loading-state'>
        <p data-testid='todo-loading-state-message'>getting activity details</p>
      </div>
    )
  // blank state
  if (status === 'success' && item === null)
    return (
      <div data-testid='todo-blank-state'>
        <p data-testid='todo-blank-state-message'>activity does not exist</p>
      </div>
    )
  // success state
  return (
    <div data-testid='todo-success-state'>
      <div data-testid='todo'>
        <div>
          <p data-testid='card-title'>{item?.title}</p>
          <p data-testid='card-description'>{item?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Loader
