import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div
    className='filepicker-container'
    >
      <div className='flex-1 flex flex-col'>
<input 
id='file-upload'
type="file"
accept="image/*"
onChange={(e) => setFile(e.target.files[0])}
/>
<label htmlFor="file-upload" className='filepicker-label' >
  Upload File
</label>

<p className="mt2 text-gray-500 text-xs">
  { file === '' ? 'No file selected (Hint: Square images come out looking the best' : file.name}
</p>
      </div>

<div className='mt-4 flex flex-wrap gap-3'>

<CustomButton
type="outline"
title="Logo"
handleClick={() => readFile('logo')}
customStyles='text-xs'
/>

<CustomButton
type="filled"
title="Full"
handleClick={() => readFile('full')}
customStyles='text-xs'
/>

</div>

    </div>
  )
}

export default FilePicker