import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Hello = (name) => (<p style='margin-left: 2em'>Just... Hello world! This is {name}</p>)

const Hello1 = () => Hello('View 1')
const Hello2 = () => Hello('View 2')
const Hello3 = () => Hello('View 3')

const AppRoutes = function () {
  return <Switch>
    <Route path='/viewhello1' component={Hello1} />
    <Route path='/viewhello2' component={Hello2} />
    <Route path='/viewhello3' component={Hello3} />
    <Redirect from='/' to='/viewhello1' />
  </Switch>
}

export default AppRoutes
