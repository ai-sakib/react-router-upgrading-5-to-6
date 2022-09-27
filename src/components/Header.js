import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        {/* React touter 5
                        <NavLink activeClassName={classes.active} to='/welcome'>
                            Welcome
                        </NavLink> */}

                        {/* React Router 6 */}
                        <NavLink
                            className={navData =>
                                navData.isActive ? classes.active : ''
                            }
                            to='/welcome'>
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={navData =>
                                navData.isActive ? classes.active : ''
                            }
                            to='/products'>
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
