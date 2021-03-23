import { Sprite, Texture } from 'pixi.js'
import gsap from 'gsap/all'

export default class Fish extends Sprite {
    constructor(texture) {
        super(texture)
        this.name = 'fish';
        this.anchor.set(0.5)

        this.interactive = true;
        this.buttonMode = true;
        
    }

    expand() {
        this.texture = Texture.from('big')
        this.scale.set(1.5);
        setTimeout(() => this.emit('big_fish'), 5000);
        
        console.log('big')
    }

    contract() {
        this.texture = Texture.from('small');
        this.scale.set(1);
        console.log('small')
    }
    
}