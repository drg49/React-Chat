import React from "react";

export default function Card() {
  
  const sampleData = {
    firstName: 'John',
    lastName: 'Smith',
    lastMessage: ' Hey man whats up?',
    profilePic: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
    timestamp: '2 min ago'
  }

  return (
    <div id="contact-card">
      <img src={sampleData.profilePic} alt="Profile Pic" />
      <div>
        <span>{sampleData.firstName} {sampleData.lastName}</span>
        <p>{sampleData.lastMessage}</p>
        <span>{sampleData.timestamp}</span>
      </div>
    </div>
  )
}