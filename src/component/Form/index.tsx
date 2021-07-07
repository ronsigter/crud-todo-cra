import { Link } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Todo } from 'GlobalTypes'
import { MutationStatus } from 'react-query'

export type InfoProps = {
  title: string
  description: string
}

export type FormProps = {
  onSubmit: (info: InfoProps) => void
  status: MutationStatus
  todo?: Todo
}

const Form: React.FC<FormProps> = ({ onSubmit, todo }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: useMemo(() => {
      return todo
    }, [todo]),
  })

  useEffect(() => {
    reset(todo)
  }, [todo, reset])

  return (
    <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex justify-between'>
        <label htmlFor='title'>Title:</label>
        <input
          className='bg-gray-300 w-8/12 px-4 py-2 rounded-md'
          type='text'
          id='title'
          name='title'
          {...register('title', { required: true })}
        />
      </div>
      <div className='flex justify-between'>
        <label htmlFor='description'>Description:</label>
        <textarea
          className='bg-gray-300 w-8/12 h-40 px-4 py-2 rounded-md'
          id='description'
          name='description'
          {...register('description', { required: true })}
        />
      </div>
      <div className='w-full'>
        <button
          className='w-full py-2 px-4 bg-green-500 font-bold text-white'
          type='submit'
        >
          Add Activity
        </button>
        <Link to='/'>
          <button className='w-full py-2 px-4 font-bold'>Back</button>
        </Link>
      </div>
    </form>
  )
}

export default Form
