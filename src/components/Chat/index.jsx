import React from 'react';
import Message from './Message';
import sampleData from '../../data/sampleData.json'
import './index.scss';

export default function Chat() {

  const chat = sampleData.map((item, index) => {
    return (
      <Message
        key={index}
        role={item.role}
        position={item.position}
        message={item.message}
      />
    )
  })

  return (
    <div id='chat-panel'>
      <div id="chat-wrapper">
        {chat}
      </div>
    </div>
  )
}