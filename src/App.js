import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import Home from './Home'
import Help from './Help'

const Host = () => <h1>Become a Host</h1>
const Login = () => <h1>Login</h1>
const Signup = () => <h1>Sign Up</h1>
const Page404 = () => <h1>Page Not Found</h1>

function App() {
  return (
    <Router>
      <Route path='/' component={NavBar} />
      <Switch>

        <Route
          path='/'
          exact
          render={(props) => {
            return <Home history={props.history} match={props.match} />
          }}
        />

        <Route path='/host' component={Host} />
        <Route path='/help' component={Help} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

//  {/* first way to display a component via Route */}
//  <Route path='/' exact component={Home} />

//  {/* second way to display a component via Route */}
//  <Route path='/' exact render={() => {
//    return(
//      <Home />
//    )
//  }} />

//  {/* third way to display a component via Route */}
//  <Route path='/' exact>
//    <Home />
//  </Route>
