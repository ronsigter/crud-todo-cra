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
