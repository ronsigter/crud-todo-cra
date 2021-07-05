import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Todos from 'containers/Todos'
import Todo from 'containers/Todo'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Todos />
        </Route>
        <Route path='/todo/:id'>
          <Todo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
