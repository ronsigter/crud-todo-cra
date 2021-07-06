import Card from 'component/Card'
import { Todos } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

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
      <div data-testid='todos-loading-state'>
        <p data-testid='todos-loading-state-message'>getting activity list</p>
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
    <div data-testid='todos-success-state'>
      {items.map((item, key) => (
        <div key={key} data-testid='todos'>
          <input
            type='checkbox'
            onChange={(e) => onChange(e.target.checked, item.id)}
            checked={ids.includes(item.id)}
          />
          <Card todo={item} />
        </div>
      ))}
    </div>
  )
}

export default Loader
