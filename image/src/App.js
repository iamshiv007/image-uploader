import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NewStudent from './components/NewStudent'
import NewProduct from './components/NewProduct'
import Home from './components/home/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/student/new' component={NewStudent}/>
        <Route exact path='/product/new' component={NewProduct} />
    </Switch>
    </BrowserRouter>
  )
}

export default App