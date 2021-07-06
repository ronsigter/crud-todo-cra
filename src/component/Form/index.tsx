import { useForm } from 'react-hook-form'
import { FormProps } from './types'

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='title'>title:</label>
        <input
          type='text'
          id='title'
          name='title'
          {...register('title', { required: true })}
        />
      </div>
      <div>
        <label htmlFor='description'>description:</label>
        <input
          type='text'
          id='description'
          name='description'
          {...register('description', { required: true })}
        />
      </div>
      <button type='submit'>Add Activity</button>
    </form>
  )
}

export default Form
