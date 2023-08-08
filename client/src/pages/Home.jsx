import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';

import state from '../store'
import { CustomButton } from '../components';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'


const Home = () => {

    const snap = useSnapshot(state);
    function refreshPage() {
        window.location.reload(false);
      }

  return (
    <AnimatePresence>
        {snap.intro &&(
            <motion.section className="home" {...slideAnimation('left')} >
<motion.header  {...slideAnimation('down')}>
    <img  src='./tshirt_customizer_logo.png' alt='logo' className='w-16 h-16 object-contain'
    style={{cursor:"pointer"}} 
    onClick={refreshPage}/>
</motion.header>

<motion.div className='home-content' {...headContainerAnimation}>
<motion.div {...headTextAnimation} >
<h1 className='head-text'>
PLUS <br className='xl:block hidden' /> <span style={{color:state.color}} >ULTRA!</span>
</h1>
</motion.div>

<motion.div {...headContentAnimation} className='flex flex-col gap-5'>
<p className='max-w-md font-normal text-gray-600 text-base' >
    Create your unique, novelty shirts with our powerful 3D customisation tool. <strong>Blaze your Glory</strong>{''} and define your own style.
</p>

<CustomButton
type="filled"
title="Customize It"
handleClick={() => state.intro = false}
customStyles='w-fit px-4 py-2.5 font-bold text-sm'
/>

</motion.div>

</motion.div>

            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home