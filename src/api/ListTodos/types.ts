import { ListTodoFilterProps } from 'GlobalTypes'

export type ListTodosParams = {
  queryKey: [string, { filters: ListTodoFilterProps }]
}
