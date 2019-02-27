import React, { SFC } from 'react'
import { useSpring, animated } from 'react-spring'
interface iOwnProps {
  key: any
  item: any
  user?: any
  onDelete(id: string): void
  onChecked(id: string): void
  onUserIdClick(id: string): void
  error?: any
}

/**
 * @author
 * @function @ListItem
 **/

const ListItem: SFC<iOwnProps> = ({ onChecked, error, item, onDelete, onUserIdClick, user }) => {
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
          <p className='user-Id' onClick={() => onUserIdClick(item.id)}>
            user: {item.userId}
          </p>
        </h3>
        {user && user.id === item.userId && (
          <animated.div className='user-bubble' style={styles}>
            {user.name}
          </animated.div>
        )}
      </div>
      <button onClick={() => onDelete(item.id)}>X</button>
    </animated.div>
  )
}

export default ListItem
