import { ReactComponent as Close } from '../assets/images/icon-close.svg'
import { ReactComponent as Next } from '../assets/images/icon-next.svg'
import { ReactComponent as Previous } from '../assets/images/icon-previous.svg'
import { useDispatch, useSelector } from 'react-redux'
import { closePreview, nextImage, previousImage } from '../slices/productsSlice'
import Icon from './Icon'

const ProductGalleryMobile = ({ product }) => {
  const dispatch = useDispatch()
  const showPreview = useSelector(state => state.products.showPreview)
  const selectedImage = useSelector(state => state.products.selectedImage)

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
    <div className="product-gallery-mobile" >
      <div className="product-image">
        <img src={product?.images[selectedImage]?.image} alt="pdr" />
      </div>
      <Icon class="next-container" handlClick={next}>
        <Next className='next'/>
      </Icon>
      <Icon class="previous-container" handlClick={previous}>
        <Previous className='previous'/>
      </Icon>
    </div>
  )
}

export default ProductGalleryMobile
