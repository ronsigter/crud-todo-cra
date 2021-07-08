import { Link } from 'react-router-dom'
import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'
import LoadingIcon from 'component/LoadingIcon'

export type LoaderProps = {
  status: MutationStatus
  item: Todo
}

const Loader: React.FC<LoaderProps> = ({ status, item }) => {
  // loading state
  if (status === 'loading')
    return (
      <div
        className='flex flex-col justify-center items-center h-80'
        data-testid='todos-loading-state'
      >
        <LoadingIcon />
        <p
          className='capitalize pt-2 font-semibold'
          data-testid='todos-loading-state-message'
        >
          getting activity list
        </p>
      </div>
    )
  // blank state
  if (status === 'success' && item === null)
    return (
      <div
        className='flex flex-col justify-center items-center h-80'
        data-testid='todo-blank-state'
      >
        <img src='/no-search.png' alt='blank' />
        <p
          className='capitalize pt-2 font-semibold'
          data-testid='todos-blank-state-message'
        >
          activity does not exist
        </p>
        <Link to='/create-todo'>
          <div
            className='cursor-pointer mt-4 px-4 py-2 bg-red-500 text-white'
            data-cy='create-button'
          >
            Add Activity
          </div>
        </Link>
      </div>
    )
  // success state
  return (
    <div
      className='w-full flex items-center justify-center'
      data-testid='todo-success-state'
    >
      <div data-testid='todo'>
        <div>
          <p className='font-bold capitalize text-3xl' data-testid='card-title'>
            {item?.title}
          </p>
          <p className='text-center' data-testid='card-description'>
            {item?.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loader
