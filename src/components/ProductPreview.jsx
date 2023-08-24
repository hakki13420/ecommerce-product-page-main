import ProductGallery from './ProductGallery'

import { ReactComponent as Close } from '../assets/images/icon-close.svg'
import { ReactComponent as Next } from '../assets/images/icon-next.svg'
import { ReactComponent as Previous } from '../assets/images/icon-Previous.svg'
import { useDispatch, useSelector } from 'react-redux'
import { closePreview, nextImage, previousImage } from '../slices/productsSlice'
import Icon from './Icon'

const ProductPreview = ({ product }) => {
  const dispatch = useDispatch()
  const showPreview = useSelector(state => state.products.showPreview)

  const closePreviewGallery = () => {
    dispatch(closePreview())
  }
  const previous = () => {
    dispatch(previousImage())
  }
  const next = () => {
    dispatch(nextImage())
  }
  return (
    <div className="product-preview" style={{ display: showPreview ? 'flex' : 'none' }}>
      <div className="product-preview-container">
        <ProductGallery product={product}/>
        <div className="close-container">
          <Close className='close' onClick={closePreviewGallery} />
        </div>
        <Icon class="next-container" handlClick={next}>
          <Next className='next'/>
        </Icon>
        <Icon class="previous-container" handlClick={previous}>
          <Previous className='previous'/>
        </Icon>
      </div>
    </div>
  )
}

export default ProductPreview
