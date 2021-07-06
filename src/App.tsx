import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import Todos from 'containers/Todos'
import Todo from 'containers/Todo'
import CreateTodo from 'containers/CreateTodo'
import UpdateTodo from 'containers/UpdateTodo'
import { queryClient } from 'services/queryClient'

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Todos />} />
          <Route path='/todos/:id' render={() => <Todo />} />
          <Route path='/create-todo' render={() => <CreateTodo />} />
          <Route path='/update-todo' render={() => <UpdateTodo />} />
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default App
