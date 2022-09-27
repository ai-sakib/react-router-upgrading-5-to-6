import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams()
    const productId = params.productId
    return (
        <section>
            <h1>Product Detail</h1>
            <div>{productId}</div>
        </section>
    )
}

export default ProductDetail
