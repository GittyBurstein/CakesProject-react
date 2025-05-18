import { useEffect } from 'react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import SmallShopingCartProduct from '../shopingCart/SmallShopingCartProduct';
import './home.css';
import { Link } from 'react-router-dom';


export default function Home() {
    // Redux state
    const cakeList = useSelector((state) => state.cakesList.cakesList);
    // Redux state for invited cakes
    const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
    // State for sorted cake list
    const [sortedCakeList, setSortedCakeList] = useState(cakeList);
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    // Sort by Price
    const sortingByPrice = () => {
        const newCakeList = [...cakeList].sort((a, b) => a.price - b.price);
        setSortedCakeList(newCakeList);
    };
    // Sort by Name
    const sortingByName = () => {
        const newCakeList = [...cakeList].sort((p1, p2) =>
            p1.name.trim().localeCompare(p2.name.trim())
        );
        setSortedCakeList(newCakeList);
    };
    // Sort by ID
    const sortingById = () => {
        const newCakeList = [...cakeList].sort((a, b) => a.id - b.id);
        setSortedCakeList(newCakeList);
    };
    return (
        <div className="container" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="row">
                {/* Sidebar for Shopping Cart */}
                {invitedCakeList.length > 0 && (
                    <div className="col-md-3 sidebar">
                        <div className="cart-header">סל הקניות שלך</div>

                        {invitedCakeList.map(cake => (
                            <SmallShopingCartProduct key={cake.id} {...cake} className="small-cart-product" />
                        ))}
                        <div>

                            <Link to={`/BakingOven`} className="btn btn-primary mt-3">
                                <p>למעבר לעגלת הקניות </p>
                            </Link>
                        </div>
                    </div>
                )}
                {/* Main Content */}
                <div className={invitedCakeList.length > 0 ? "col-md-9 main-content" : "col-md-12 main-content"}>
                    {/* Sorting Dropdown */}
                    <div className="row mb-3">
                        <div className="col-auto">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    סינון לפי קטגוריה
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button" onClick={sortingByPrice}>מחיר</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={sortingByName}>שם</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={sortingById}>מספר מזהה</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div className="row row-cols-1 row-cols-md-3 g-5 align-items-stretch">
                        {sortedCakeList.map(cake => (
                            <div className="col-md-4" key={cake.id}>
                                <Product {...cake} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
