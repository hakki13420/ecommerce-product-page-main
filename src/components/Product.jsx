import ProductGallery from './ProductGallery'
import ProductDetails from './ProductDetails'
import ProductPreview from './ProductPreview'
import ProductGalleryMobile from './ProductGalleryMobile'

const Product = ({ product }) => {
  return (
    <div className="product">
      <ProductGallery
        product={product}
      />
      <ProductGalleryMobile
        product={product}
      />
      <ProductPreview
        product={product}
      />
      <ProductDetails product={product} />
    </div>
  )
}

export default Product
