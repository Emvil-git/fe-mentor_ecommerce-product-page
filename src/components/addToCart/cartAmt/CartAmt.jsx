const { useBEM } = require("../../../customHooks")

const CartAmt = () => {

    const [B,E] = useBEM('cart-amt')

    return(
        <div className={B()}>
            <button>-</button>
            <span>0</span>
            <button>+</button>
        </div>
    )
}

export default CartAmt;
