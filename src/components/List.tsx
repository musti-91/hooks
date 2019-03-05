import React, { SFC } from 'react'
import ListItem from '@components/ListItem'
import withLoading from './hoc/withLoading'

interface iOwnProps {
  list: Array<any>
  onDelete(id: string): void
  onChecked(id: string): void
  onUserIdClick(id: string): void
  more: any
}

/**
 * @author
 * @function @List
 **/

const List: SFC<iOwnProps> = ({ onChecked, onDelete, onUserIdClick, more, list }) => {
  return (
    <div>
      {list.length !== 0 &&
        list.map((item: any) => (
          <ListItem
            item={item}
            onDelete={onDelete}
            onChecked={onChecked}
            key={item.id}
            onUserIdClick={onUserIdClick}
            user={more.user}
          />
        ))}
    </div>
  )
}

export default withLoading(List)
