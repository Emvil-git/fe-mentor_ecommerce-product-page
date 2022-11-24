import { useState } from "react";
import useAppStore from "../../app/store";
import { useBEM } from "../../customHooks";
import CartItem from "./CartItem";

const Cart = () => {

    const [B,E] = useBEM('cart')
    const [cartStatus, setCartStatus] = useState(null);
    const cartItems = useAppStore(state => state.cart);

    const openDrop = () => {
        switch(cartStatus){
            case 'open':
                return E('drop', 'open')
            case 'close':
                return E('drop', 'close')
            default:
                return E('drop')
        }
    }

    const handleClick = () => {
        if (cartStatus === 'open') {
            setCartStatus('close')
        } else {
            setCartStatus('open')
        }
    }

    const displayCart = () => {
        if (cartItems.length === 0) return(
            <div className={E('empty')}>
                <span>Your cart is empty.</span>
            </div>
        )

        return(
            <div className={E('filled')}>
            <div className={E('filled-items')}>
            {cartItems.map(
                item => <CartItem item={item}/>
            )}
            </div>
            <button className={E('filled-btn')}> Checkout </button>
            </div>
        )
    }

    return(
        <div className={B()}>
            <button onClick={handleClick}>
                <img src="images/icon-cart.svg" alt="" />
            </button>
            <section className={openDrop()}>
                <h2>Cart</h2>
                <div className={E('contents')}>
                    {displayCart()}
                </div>
            </section>
        </div>
    )
}

export default Cart;
