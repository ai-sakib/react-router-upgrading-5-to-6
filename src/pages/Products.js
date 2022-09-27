import { Link } from 'react-router-dom'

const productRoutes = [
    { id: 1, title: 'Book' },
    { id: 2, title: 'Doll' },
    { id: 3, title: 'Pen' },
]
const Products = () => {
    // const navigate = useNavigate()
    // navigate('/welcome', {replace: true})
    // navigate(1)
    // navigate(-1)
    // Promt will not work in router 6
    return (
        <section>
            <h1>Products page !</h1>
            <ul>
                {productRoutes.map(route => (
                    <li key={route.id}>
                        <Link to={`/products/${route.id}`}>{route.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Products
