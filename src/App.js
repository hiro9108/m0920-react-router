import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'

const Home = () => <h1>Home</h1>
const About = () => (
  <>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae alias,
      quos, impedit iure quod corporis, cum pariatur quis culpa aspernatur nobis
      facere reiciendis assumenda fugit delectus neque perspiciatis libero
      officia?
    </p>
  </>
)

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <h1>Footer</h1>
      </div>
    </Router>
  )
}

export default App
