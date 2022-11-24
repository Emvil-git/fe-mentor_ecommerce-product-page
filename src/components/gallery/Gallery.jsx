const { useBEM } = require("../../customHooks")

const Gallery = () => {

    const [B,E] = useBEM('gallery')

    const displayImg = () => {
        return "images/image-product-1.jpg"
    }

    return(
        <div className={B()}>
            <img src={displayImg()} alt="" />
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
