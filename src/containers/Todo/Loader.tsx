import Card from 'component/Card'
import { LoaderProps } from './types'

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
        <Card todo={item} />
      </div>
    </div>
  )
}

export default Loader