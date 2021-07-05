import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Todos from 'containers/Todos'
import Todo from 'containers/Todo'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <QueryClientProvider client={queryClient}>
          <Route path='/'>
            <Todos />
          </Route>
          <Route path='/todo/:id'>
            <Todo />
          </Route>
        </QueryClientProvider>
      </Switch>
    </Router>
  )
}

export default App
