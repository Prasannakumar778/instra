import React from 'react'
import "./Suggestion.css";
import {Avatar} from '@mui/material'
function Suggestion() {
  return (
    <div className='suggestion'>
      <div className='suggestion_title'>Suggestions for you</div>
      <div className='suggestion_usernames'>
        
      <div className='suggestion_username'>
      <div className='suggestion_left'>
        <span className='avatar'>
         <Avatar>R</Avatar>
        </span>
        <div className='username_Info'>
          <span className='username'>redian</span>
          <span className='relation'>New to Instagram</span>
        </div>
      </div>
      <button className='follow_button'>Follow</button>
      </div>
      <div className='suggestion_username'>
      <div className='suggestion_left'>
        <span className='avatar'>
         <Avatar>R</Avatar>
        </span>
        <div className='username_Info'>
          <span className='username'>redian</span>
          <span className='relation'>New to Instagram</span>
        </div>
      </div>
      <button className='follow_button'>Follow</button>
      </div>
      </div>
    </div>
  )
}

export default Suggestion
