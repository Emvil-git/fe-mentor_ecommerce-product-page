import { useBEM } from "../../customHooks"
import CartAmt from "./cartAmt/CartAmt"

const AddToCart = () => {

    const [B,E] = useBEM('addtocart')

    return(
        <div className={B()}>
            <CartAmt/>
            <button className={E('btn')}>
                <img src="images/icon-cart.svg" alt="" />
                Add to cart
            </button>
        </div>
    )
}

export default AddToCart;
