const { useBEM } = require("../../customHooks")

const NavbarMobile = () => {

    const [B,E] = useBEM('navmobile')

    return(
        <div className={B()}>
            
        </div>
    )
}

export default NavbarMobile;
