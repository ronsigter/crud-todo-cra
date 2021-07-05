import { LoaderProps } from './types'

const Loader: React.FC<LoaderProps> = ({ status, items }) => {
  // loading state
  if (status === 'loading')
    return (
      <div data-testid='todos-loading-state'>
        <p>getting movie list</p>
      </div>
    )
  // blank state
  else if (status === 'success' && items.length === 0)
    return (
      <div data-testid='todos-blank-state-container'>
        <p>you dont have any movies</p>
      </div>
    )
  // error state
  else if (status === 'error')
    return (
      <div data-testid='todos-error-state'>
        <p>something went wrong</p>
      </div>
    )
  // success state
  else
    return (
      <div data-testid='todos-success-state'>
        {items.map((item) => (
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    )
}

export default Loader
