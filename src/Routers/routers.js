import React from 'react'
import {Route , Switch} from 'react-router-dom'
import userHome from '../containers/UserHome/UserHome'

const MainRouter = ()=>(
  
    <Switch>
      <Route exact path="/" component = {userHome}></Route>
    </Switch>

)

export default MainRouter;