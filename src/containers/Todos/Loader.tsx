import { Link } from 'react-router-dom'
import Card from 'component/Card'
import { Todos } from 'GlobalTypes'
import { MutationStatus } from 'react-query'
import LoadingIcon from 'component/LoadingIcon'

type LoaderProps = {
  isFiltering: boolean
  status: MutationStatus
  items: Todos
  onChange: (isChecked: boolean, id: string | number) => void
  ids: (string | number)[]
}

const Loader: React.FC<LoaderProps> = ({
  status,
  items,
  onChange,
  ids,
  isFiltering,
}) => {
  // filter state
  if (
    status === 'success' &&
    isFiltering &&
    (items.length === 0 || items === null)
  )
    return (
      <div
        className='flex flex-col justify-center items-center h-80'
        data-testid='todos-filter-state'
      >
        <img src='/no-search.png' alt='blank' />
        <p
          className='capitalize pt-2 font-semibold'
          data-testid='todos-loading-state-message'
        >
          No activities found
        </p>
      </div>
    )

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
  if (status === 'success' && items.length === 0)
    return (
      <div
        className='flex flex-col justify-center items-center h-80'
        data-testid='todos-blank-state'
        data-cy='todos-blank-state'
      >
        <img src='/blank.png' alt='blank' />
        <p data-testid='todos-blank-state-message'>
          What tasks are on your mind?
        </p>
        <Link to='/create-todo'>
          <div
            className='cursor-pointer mt-4 px-4 py-2 bg-red-500 text-white'
            data-cy='create-button'
          >
            Add a task
          </div>
        </Link>
      </div>
    )
  // success state
  return (
    <div
      className='absolute inset-0 overflow-auto h-full space-y-6 pb-80'
      data-testid='todos-success-state'
      data-cy='todos-success-state'
    >
      {items.map((item, key) => (
        <div
          key={key}
          data-testid='todos'
          className='w-full flex rounded-md shadow px-4 py-4 hover:shadow-lg'
        >
          <input
            type='checkbox'
            onChange={(e) => onChange(e.target.checked, item.id)}
            checked={ids.includes(item.id)}
          />
          <div className='pl-4 w-full'>
            <Link to={`/todos/${item?.id}`}>
              <Card todo={item} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Loader
