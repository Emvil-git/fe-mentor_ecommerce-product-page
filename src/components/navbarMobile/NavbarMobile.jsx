import { useBEM } from "../../customHooks";
import Cart from "../cartComponent/Cart";

const NavbarMobile = () => {

    const [B,E] = useBEM('navmobile')

    return(
        <div className={B()}>
            <div>
                <button className={E('menu')}>
                    <img src="images/icon-menu.svg" alt=""/>
                </button>
                <img src="images/logo.svg" alt="" className={E('logo')}/>
            </div> 

            <div>
                <Cart/>
                <img src="images/image-avatar.png" alt="" className={E('avatar')}/>
            </div> 
        </div>
    )
}

export default NavbarMobile;
