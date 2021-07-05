export type ListTodoFilterProps = {
  byActive: 'all' | true | false
  term: string
}

export type Todo = {
  id: number
  title: string
  description: string
  creationDate: string
  isActive: boolean
}

export type Todos = Todo[] | null
