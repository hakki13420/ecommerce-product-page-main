import { useDispatch, useSelector } from 'react-redux'
import { openPreview, selectImage } from '../slices/productsSlice'

const ProductGallery = ({ product }) => {
  const selectedImage = useSelector(state => state.products.selectedImage)
  const dispatch = useDispatch()

  const changeImage = (id) => {
    dispatch(selectImage(id))
  }

  const openPreviewGallery = () => {
    dispatch(openPreview())
  }

  return (
    <div className="product-gallery">
      <div className="product-image" onClick={openPreviewGallery}>
        <img src={product?.images[selectedImage]?.image} alt="pdr" />
      </div>
      <div className="product-gallery">
        {
          product.images.map(prd => (
            <div key={prd.id}

              className={`${selectedImage === prd.id - 1
                ? 'selected-product-image'
                : ''} product-gallery-item`}
              onClick={() => changeImage({ selectedImage: prd.id - 1 })}
            >
              <img src={prd.thumbnail} alt={`prd-${prd.id}`} />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default ProductGallery
