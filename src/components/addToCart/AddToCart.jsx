import { useState } from "react"
import { useBEM } from "../../customHooks"
import CartAmt from "./cartAmt/CartAmt"

const AddToCart = () => {

    const [B,E] = useBEM('addtocart')
    const [amt, setAmt] = useState(0)

    return(
        <div className={B()}>
            <CartAmt amt={amt} setAmt={setAmt}/>
            <button className={E('btn')}>
                <img src="images/icon-cart.svg" alt="" />
                Add to cart
            </button>
        </div>
    )
}

export default AddToCart;
