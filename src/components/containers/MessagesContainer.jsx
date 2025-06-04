import React from 'react'
import MessageCardIn from '../cards/MessageCardIn'

function MessagesContainer() {
  return (
    <div className='flex-1 p-3 overflow-y-auto flex flex-col gap-3'>
        <div className='flex-1'>
            <MessageCardIn />
        </div>
    </div>
  )
}

export default MessagesContainer