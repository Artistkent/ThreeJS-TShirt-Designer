import React from 'react';
import Canvas from'./canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { useRef, useEffect } from 'react';
import LoadingSpinner from './pages/LoadingSpinner';


function App () {

  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    setTimeout(() => {
      element.style.display='none'
    }, 2000);
  }, []);

  return (
    <>  
<div ref={ref} id="loader_spin">
<LoadingSpinner  />
</div>
      <main className='app transition-all ease-in' >
       
       <Home/>
       <Canvas/>
       <Customizer/>
      </main>
      </>
  )

  
}

export default App
