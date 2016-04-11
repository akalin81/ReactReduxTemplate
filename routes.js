import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import TestPage from './containers/TestPage'
import IndexPage from './containers/IndexPage'
import { requireAuthentication } from './components/AuthenticatedComponent'

export default (

  <Route path="/" component={App}>
    <IndexRoute component={IndexPage}/>
    <Route path="test" component={requireAuthentication(TestPage)} />
    <Route path="*" component={IndexPage} />
  </Route>
)
