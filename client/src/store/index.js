import {proxy} from 'valtio';
import randomColor from 'randomcolor';

var colorRan = randomColor();

const state = proxy({
    intro:true,
    color:colorRan,
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png'
});

export default state;