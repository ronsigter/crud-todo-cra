import { BsTrash } from 'react-icons/bs'

const DeleteButton: React.FC = () => {
  return (
    <div className='cursor-pointer rounded-full hover:bg-gray-300 hover:text-black h-9 w-9 flex justify-center items-center'>
      <BsTrash size={20} />
    </div>
  )
}

export default DeleteButton
