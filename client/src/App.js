import React, { useState } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

const App = (props) => {

  return (
    <div class="bg-black h-screen w-screen flex flex-col justify-center">
      <Login />
    </div>
  )
}

export default withRouter(App)