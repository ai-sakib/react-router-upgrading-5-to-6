import { Navigate, Route, Routes } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Products from './pages/Products'
import Header from './components/Header'
import ProductDetail from './pages/ProductDetail'

function App() {
    return (
        <div className='App'>
            <Header />
            <main>
                {/* React Router 5 
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='./welcome' />
                    </Route>
                    <Route path='/welcome'>
                        <Welcome />
                    </Route>
                    <Route path='/products' exact>
                        <Products />
                    </Route>
                    <Route path='/products/:productId'>
                        <ProductDetail />
                    </Route>
                </Switch>
                */}
                {/* React Router 6 */}
                <Routes>
                    <Route path='/' element={<Navigate to='./welcome' />} />
                    <Route path='/welcome/*' element={<Welcome />}>
                        <Route
                            path='new-user'
                            element={<h2>Hello ! New user !</h2>}
                        />
                    </Route>
                    <Route path='/products' element={<Products />} />

                    <Route
                        path='/products/:productId'
                        element={<ProductDetail />}
                    />
                </Routes>
            </main>
        </div>
    )
}

export default App
