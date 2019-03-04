import React, { SFC } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import routes from './routes'
import history from '@utils/history'
import withLoading from '@components/hoc/withLoading'
import CounterContainer from '@containers/CounterContainer'

/**
 * @author
 * @function @RouteHook
 **/

const RouteHook: SFC<any> = props => {
  return (
    <Router history={history}>
      <Switch>
        {Object.keys(routes).map(route => (
          <Route {...routes[route]} key={routes[route].sequence} />
        ))}
      </Switch>
    </Router>
  )
}

export default withLoading(RouteHook)
