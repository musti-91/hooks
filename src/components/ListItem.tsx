import React, { SFC } from 'react'

interface iOwnProps {
  key: any
  item: any
  onDelete(index: string): void
  onChecked(index: string): void
  error?: any
}

/**
 * @author
 * @function @ListItem
 **/

const ListItem: SFC<iOwnProps> = ({ onChecked, error, item, onDelete }) => {
  return (
    <li className='todo'>
      <input
        type='radio'
        onChange={() => onChecked(item.id)}
        checked={item.complete}
        className='check'
      />
      <p style={{ textDecoration: item.complete ? 'line-through' : '' }}>
        {!error && item.subject}
      </p>
      <button onClick={() => onDelete(item.id)}>X</button>
    </li>
  )
}

export default ListItem
