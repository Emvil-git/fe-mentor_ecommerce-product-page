import { useBEM } from "../../customHooks";
import { useRef } from "react";
import useAppStore from "../../app/store"

const GalleryMobile = () => {

    const [B,E] = useBEM('gallery-mobile')

    const imgWindow = useRef();
    const setLightboxShow = useAppStore((state) => state.setLightboxShow)

    return(
        <div className={B()}>
            <section className={E('img-main')}>
                <div className={E('btn-div')}>
                    <button>
                        <img src="images/icon-previous.svg" alt="" />
                    </button>
                    <button>
                        <img src="images/icon-next.svg" alt="" />
                    </button>
                </div>
                <div onClick={() => {setLightboxShow(true)}} id="img-window" ref={imgWindow} className={E('img-window')}>
                    <div className={E('img-slider')}>
                        <img id="image-1" src="images/image-product-1.jpg" alt="" />
                        <img id="image-2" src="images/image-product-2.jpg" alt="" />
                        <img id="image-3" src="images/image-product-3.jpg" alt="" />
                        <img id="image-4" src="images/image-product-4.jpg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GalleryMobile;
