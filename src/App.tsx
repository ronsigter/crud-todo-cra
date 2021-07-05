import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Todos from 'containers/Todos'
import Todo from 'containers/Todo'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Todos />} />
          <Route path='/todo/:id' render={() => <Todo />} />
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default App
