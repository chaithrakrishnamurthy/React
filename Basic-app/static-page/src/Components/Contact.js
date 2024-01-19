import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
      <h1 className='primary-heading'>Have Question in the mind? </h1>
      <h1 className='primary-heading'>Let us Help you!</h1>
      <div className='contact-form-container'>
        <input type='text' placeholder='youremail@mail.com' />
        <button className='secondary-button'>Submit</button>
      </div>
    </div>
  )
}

export default Contact