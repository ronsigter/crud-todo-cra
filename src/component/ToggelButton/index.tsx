import './styles.css'

type ToggleButtonProps = {
  isActive: boolean
  onChange: (status: boolean) => void
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isActive, onChange }) => {
  return (
    <div className='flex items-center justify-center w-full mb-12'>
      <label htmlFor='toogle' className='flex items-center cursor-pointer'>
        <div className='relative'>
          <input
            id='toogle'
            type='checkbox'
            className='sr-only'
            checked={isActive}
            onChange={(e) => onChange(e.target.checked)}
          />
          <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
          <div className='dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'></div>
        </div>
      </label>
    </div>
  )
}

export default ToggleButton
