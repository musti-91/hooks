import React from 'react'

import App from '@containers/App'
import TodoContainer from '@containers/TodoContainer'
import CounterContainer from '@containers/CounterContainer'
import UserContainer from '@containers/UserContainer'
import ReposContainer from '@containers/ReposContainer'
import RoomStore from '@containers/RoomStore'
import RoomStoreFunction from '@containers/RoomStoreFunction'
import ThemeContainer from '@containers/Theme'
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
  },
  repos: {
    sequence: 5,
    path: '/repos',
    exact: true,
    component: ReposContainer
  },
  room: {
    sequence: 6,
    path: '/room',
    exact: true,
    component: RoomStore
  },
  roomFunction: {
    sequence: 7,
    path: '/roomFunction',
    exact: true,
    component: RoomStoreFunction
  }
}

export default routes
