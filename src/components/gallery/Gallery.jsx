import { useRef } from "react"
import { useEffect } from "react"
import { useBEM } from "../../customHooks"

const Gallery = () => {

    const [B,E] = useBEM('gallery')

    const index = useRef(1);
    const imgWindow = useRef();
        
    useEffect(()=>{
        setInterval(() => {
            imgWindow.current.scrollTo({
              top: 0,
              left: 400 * (index.current - 1) ,
              behavior: 'smooth'
            })
            console.log(index.current)
            index.current = index.current === 4 ? 1 : index.current + 1;
        
        },5000)
    })



    return(
        <div className={B()}>
            {/* <img src={displayImg()} alt="" /> */}
            <section className={E('img-main')}>
                <div id="img-window" ref={imgWindow} className={E('img-window')}>
                    <div className={E('img-slider')}>
                        <img id="image-1" src="images/image-product-1.jpg" alt="" />
                        <img id="image-2" src="images/image-product-2.jpg" alt="" />
                        <img id="image-3" src="images/image-product-3.jpg" alt="" />
                        <img id="image-4" src="images/image-product-4.jpg" alt="" />
                    </div>
                </div>
            </section>
            <div className={E('thumbs')}>
                <img src="images/image-product-1-thumbnail.jpg" alt="" />
                <img src="images/image-product-2-thumbnail.jpg" alt="" />
                <img src="images/image-product-3-thumbnail.jpg" alt="" />
                <img src="images/image-product-4-thumbnail.jpg" alt="" />
            </div>
        </div>
    )
}

export default Gallery;
