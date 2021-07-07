import { TiPlus } from 'react-icons/ti'

const AddButton: React.FC = () => {
  return (
    <div
      className='cursor-pointer fixed bottom-10 right-10 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white'
      data-cy='create-button'
    >
      <TiPlus size={32} />
    </div>
  )
}

export default AddButton
