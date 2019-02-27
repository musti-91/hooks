import React, { SFC } from 'react'
import { useSpring, animated } from 'react-spring'
interface iOwnProps {
  key: any
  item: any
  onDelete(id: string): void
  onChecked(id: string): void
  onUserIdClick(id: string): void
  error?: any
}

/**
 * @author
 * @function @ListItem
 **/

const ListItem: SFC<iOwnProps> = ({ onChecked, error, item, onDelete, onUserIdClick }) => {
  const styles = useSpring({
    transform: 'translateY(50%)',
    marginBottom: 30,
    opacity: 1,
    from: { transform: 'translateY(0%)', opacity: 0, marginBottom: 0 }
  })
  return (
    <animated.div className='todo' style={styles}>
      <input
        type='radio'
        onChange={() => onChecked(item.id)}
        checked={item.completed}
        className='check'
      />
      <div className='title'>
        <h3 style={{ textDecoration: item.completed ? 'line-through' : '' }}>
          {!error && item.title}
        </h3>
        <p className='user-Id' onClick={() => onUserIdClick(item.id)}>
          user: {item.userId}
        </p>
      </div>
      <button onClick={() => onDelete(item.id)}>X</button>
    </animated.div>
  )
}

export default ListItem
