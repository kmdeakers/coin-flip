import Coin from './Coin';
import { useState } from 'react'

function getRandom () {
    const index = Math.floor(Math.random() * 2 + 1);
    return index;
}

const heads = "./Heads.jpg"
const tails = "./Tails.jpg"

const sides = [heads, tails];

function Coinflipper(arr) {
    const [side, setSide] = useState(null)

    function handleClick() {
        const index = getRandom()
        setSide(sides[index]);
    }

    return (
        <div className='Coinflipper' >
            <h1>Let's flip a coin!</h1>
            {side !== null && <Coin side={side}/>}
            <button onClick={handleClick} className='Coinflipper-flip'>Flip Coin</button>
            {/* <p className='Coinflipper-message'>Out of {numFlips}, ther have been
             {numHeads} and {numTails}.</p> */}
        </div>
    )
}

export default Coinflipper;
