import { Sprite, Texture } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Fish from '../components/Fish';

export default class Play extends Scene {
  async onCreated() {

    const footer = new Footer();
    footer.x = - window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);

    let smallFish = Texture.from('small') 
    const fish = new Fish(smallFish);
    
    this.addChild(fish);

    fish.on('click', fish.expand);
    fish.on('big_fish', fish.contract);
    

    
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
