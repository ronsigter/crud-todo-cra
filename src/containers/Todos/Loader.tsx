import Card from 'component/Card'
import { LoaderProps } from './types'

const Loader: React.FC<LoaderProps> = ({ status, items }) => {
  // loading state
  if (status === 'loading')
    return (
      <div data-testid='todos-loading-state'>
        <p data-testid='todos-loading-state-message'>getting movie list</p>
      </div>
    )
  // blank state
  if (status === 'success' && items.length === 0)
    return (
      <div data-testid='todos-blank-state'>
        <p data-testid='todos-blank-state-message'>you dont have any movies</p>
      </div>
    )
  // success state
  return (
    <div data-testid='todos-success-state'>
      {items.map((item, key) => (
        <div key={key} data-testid='todos'>
          <Card todo={item} />
        </div>
      ))}
    </div>
  )
}

export default Loader
