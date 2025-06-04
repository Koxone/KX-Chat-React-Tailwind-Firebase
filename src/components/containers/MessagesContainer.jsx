import React from 'react'
import MessageCardIn from '../cards/MessageCardIn'
import MessageCardOut from '../cards/MessageCardOut'

function MessagesContainer() {
  return (
    <div className='flex-1 p-3 overflow-y-auto flex flex-col gap-3 pb-28 pt-28'>
        <MessageCardOut />
        <MessageCardIn />
        <MessageCardOut />
        <MessageCardIn />
        <MessageCardOut />
        <MessageCardIn />
        <MessageCardOut />
        <MessageCardIn />
        <MessageCardOut />
        <MessageCardIn />
        <MessageCardOut />
        <MessageCardIn />
        <MessageCardOut />
        <MessageCardIn />
    </div>
  )
}

export default MessagesContainer