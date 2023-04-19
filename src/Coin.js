

function Coin ({side}) {
    console.log("in Coin")
    return (
        <div className="Coin">
            <img src={side} alt={side}/>


        </div>

    )
}

export default Coin;