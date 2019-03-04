import React from 'react'

import App from '@containers/App'
import TodoContainer from '@containers/TodoContainer'
import CounterContainer from '@containers/CounterContainer'
import UserContainer from '@containers/UserContainer'

interface RouteDefinition {
  sequence: number
  exact: boolean
  path: string
  component: any
}

export interface iRoute {
  [prop: string]: RouteDefinition
}

const routes: iRoute = {
  home: {
    sequence: 1,
    path: '/',
    exact: true,
    component: App
  },
  todos: {
    sequence: 2,
    path: '/todos',
    exact: true,
    component: TodoContainer
  },
  users: {
    sequence: 3,
    path: '/users',
    exact: true,
    component: UserContainer
  },
  count: {
    sequence: 4,
    path: '/count',
    exact: true,
    component: CounterContainer
  }
}

export default routes
