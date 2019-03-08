import React, { Component, ComponentType } from 'react'
import ThemeContext from './Context'
interface iOwnProps {}

/**
 * @author
 * @function @Consumer
 **/

const defaultProps = (themeProps: any) => ({ ...themeProps })

const Consumer = (mergeProps = defaultProps) => (WrappedComponent: ComponentType<any>) => {
  return class ClientComponent extends Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {({ state, dispatch }) => (
            <WrappedComponent {...mergeProps(state)} {...this.props} dispatch={dispatch} />
          )}
        </ThemeContext.Consumer>
      )
    }
  }
}

export default Consumer
