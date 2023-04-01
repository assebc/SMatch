import { Image, List } from 'antd-mobile'
import React from 'react'
import { View } from 'react-native'
// import { users } from './user.js'


const Chat = () => {
  return (
    <List>
      {/* {users.map(user => (
        <List.Item
          key={user.name}
          prefix={
            <Image
              src={user.avatar}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description={user.description}
        >
          {user.name}
        </List.Item> */}
      {/* ))} */}
    </List>
  )
}

export default Chat;
