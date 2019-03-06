import React, { SFC } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import routes from './routes'
import history from '@utils/history'
import withLoading from '@components/hoc/withLoading'

/**
 * @author
 * @function @RouteHook
 **/
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
  }
})
const RouteHook: SFC<any> = props => {
  return (
    <div className='container'>
      <ApolloProvider client={client}>
        <Router history={history}>
          <Switch>
            {Object.keys(routes).map(route => (
              <Route {...routes[route]} key={routes[route].sequence} />
            ))}
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default withLoading(RouteHook)
