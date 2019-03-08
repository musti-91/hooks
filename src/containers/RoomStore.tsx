import React, { Component, createContext } from 'react'

interface iOwnProps {
  isLit: boolean
  onToggleLight: any
}

/**
 * @author
 * @class @RoomStore
 **/
const initialState: iOwnProps = {
  isLit: false,
  onToggleLight: null
}
const RoomContext = createContext(initialState)
class RoomStore extends Component<iOwnProps> {
  state = {
    isLit: false
  }

  toggleLight = () => {
    this.setState(state => ({ isLit: !this.state.isLit }))
  }

  render() {
    const { isLit } = this.state
    return (
      <RoomContext.Provider value={{ isLit, onToggleLight: this.toggleLight }}>
        <Room />
      </RoomContext.Provider>
    )
  }
}
const Room = (props: any) => {
  return (
    <RoomContext.Consumer>
      {({ isLit, onToggleLight }) => (
        <div>
          <h2>{isLit ? 'is Lit' : 'dark'}</h2>
          <button onClick={onToggleLight}>Flip</button>
        </div>
      )}
    </RoomContext.Consumer>
  )
}
export default RoomStore
