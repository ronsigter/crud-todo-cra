import { ListTodoFilterProps, Todos } from 'GlobalTypes'

type ListTodosParams = {
  queryKey: [string, { filters: ListTodoFilterProps }]
}

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

    const queryParams = () => {
      let query = ''
      const isActiveQuery = byIsActiveQuery()
      const termQuery = byTermQuery()

      if (isActiveQuery) query = query + isActiveQuery + '&'
      if (termQuery) query = query + termQuery

      return query ? '?' + query : ''
    }

    const serverPath = process.env.REACT_APP_SERVER
      ? `${process.env.REACT_APP_SERVER}/todos${queryParams()}`
      : `/todos${queryParams()}`

    const response = await fetch(serverPath)
    if (!response.ok) {
      throw new Error('Problem fetching data')
    }
    const todos = await response.json()

    return todos
  } catch (error) {
    return null
  }
}
