import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
<textarea 
disabled
placeholder="This was supposed to accept a text prompt and generate a logo using OpenAI. Unfortunately, my free API usage has expired... sorry :("

rows={5}
value={prompt}
onChange= {(e) => setPrompt(e.target.value)}className="aipicker-textarea placeholder_color" 
/>
<div className='flex flex-wrap gap-3'>
{generatingImg ? (
  <CustomButton
  type="outline"
  title="Asking AI..."
  customStyles="text-xs"
  /> 
) : (
  <>
  <CustomButton
  type="outline"
  title="AI Logo"
  handleClick={() => handleSubmit('logo')}
  customStyles="text-xs"
  />

  <CustomButton
  type="filled"
  title="AI Full"
  handleClick={() => handleSubmit('full')}
  customStyles="text-xs"
  />
  </>
)}
</div>
    </div>
  )
}

export default AIPicker