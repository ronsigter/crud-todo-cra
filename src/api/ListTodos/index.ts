import { Todos } from 'GlobalTypes'
import { ListTodosParams } from './types'

export const ListTodos = async (params: ListTodosParams): Promise<Todos> => {
  const [
    ,
    {
      filters: { byActive, term },
    },
  ] = params.queryKey

  try {
    const byIsActiveQuery = () => {
      if (byActive === true) return 'isActive=true'
      else if (byActive === false) return 'isActive=false'
      else return ''
    }

    const byTermQuery = () => {
      if (term === '') return ''
      else return `q=${term}`
    }

    const queryParams = `?${byTermQuery()}&${byIsActiveQuery()}`

    const response = await fetch(`/todos${queryParams}`)
    if (!response.ok) {
      throw new Error('Problem fetching data')
    }
    const todos = await response.json()

    return todos
  } catch (error) {
    return null
  }
}
