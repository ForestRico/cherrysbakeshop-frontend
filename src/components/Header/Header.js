import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';

export default function Header() {
    const { cart } = useCart();

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    <img src="/logo/logo.jpg" alt="Cherry's Bakeshop Logo" className={classes.logoimg} />
                </Link>
                <nav>
                    <ul>
                        {/* <li>
                            <Link to="/about us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li> */}
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                Cart
                                {cart.totalCount > 0 && (
                                    <span className={classes.cart_count}>{cart.totalCount}</span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
