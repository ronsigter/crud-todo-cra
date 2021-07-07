import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ToastProvider } from 'react-toast-notifications'
import Todos from 'containers/Todos'
import Todo from 'containers/Todo'
import CreateTodo from 'containers/CreateTodo'
import UpdateTodo from 'containers/UpdateTodo'
import { queryClient } from 'services/queryClient'
import Layout from 'containers/Layout'

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider placement='top-center' autoDismiss>
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' render={() => <Todos />} />
              <Route path='/todos/:id' render={() => <Todo />} />
              <Route path='/create-todo' render={() => <CreateTodo />} />
              <Route path='/edit/:id' render={() => <UpdateTodo />} />
            </Switch>
          </Router>
        </Layout>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default App
