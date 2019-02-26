import React, { SFC } from 'react'

interface iOwnProps {
  item: any
  indexItem: number
  onDelete(index: number): void
  onChecked(index: number): void
  error?: any
}

/**
 * @author
 * @function @ListItem
 **/

const ListItem: SFC<iOwnProps> = ({ onChecked, indexItem, error, item, onDelete }) => {
  return (
    <li key={indexItem} className='todo'>
      <input
        type='radio'
        onChange={() => onChecked(indexItem)}
        checked={item.complete}
        className='check'
      />
      <p style={{ textDecoration: item.complete ? 'line-through' : '' }}>
        {!error && item.subject}
      </p>
      <button onClick={() => onDelete(indexItem)}>X</button>
    </li>
  )
}

export default ListItem
