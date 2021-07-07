import { Link } from 'react-router-dom'
import Card from 'component/Card'
import { Todos } from 'GlobalTypes'
import { MutationStatus } from 'react-query'
import LoadingIcon from 'component/LoadingIcon'

type LoaderProps = {
  status: MutationStatus
  items: Todos
  onChange: (isChecked: boolean, id: string | number) => void
  ids: (string | number)[]
}

const Loader: React.FC<LoaderProps> = ({ status, items, onChange, ids }) => {
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
      <div data-testid='todos-blank-state'>
        <p data-testid='todos-blank-state-message'>
          you dont have any activities
        </p>
      </div>
    )
  // success state
  return (
    <div className='space-y-6' data-testid='todos-success-state'>
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
