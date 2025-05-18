import '../home/Product.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAllReturn, addReturn, reduceFromCart, removeFromCart } from '../../../redux/actions';

export default function ShopingCartProduct(props) {
  const dispatch = useDispatch();

  // Log the props to trace issues
  const handleReduceFromCart = (id) => {
    dispatch(reduceFromCart(id)); // Dispatch the action to decrement the amount
    dispatch(addReturn(id))

  };

  // Log the props to trace issues
  const handleRemoveFromCart = (props) => {
    dispatch(removeFromCart(props.id)); // Dispatch the action to remove the product
    dispatch(addAllReturn({ ...props }))

  };

  return (
    <div className="card mb-4 shadow-sm w-100">
      <div className="row g-0 align-items-center">

        {/* תמונה בצד שמאל */}
        <div className="col-md-3">
          <Link to={`/bigViewe/${props.id}`}>
            <img
              src={props.image}
              alt={props.name}
              className="img-fluid rounded-start"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </Link>
        </div>

        {/* תוכן באמצע */}
        <div className="col-md-6 px-3 py-2">
          <h5 className="card-title mb-1">{props.name}</h5>
          <p className="card-text mb-1 text-muted">{props.description}</p>
          <p className="card-text mb-1">כמות: {props.amount}</p>
          <p className="card-text mb-1">סה״כ: ${(props.amount * props.price).toLocaleString()}</p>
          <small className="text-muted">מזהה: {props.id}</small>
        </div>

        {/* כפתורים בצד ימין */}
        <div className="col-md-3 text-end pe-4">
          <button className="btn btn-outline-danger btn-sm mb-2 w-100" onClick={() => handleRemoveFromCart(props)}>
            הסר לגמרי
          </button>
          <button className="btn btn-outline-warning btn-sm w-100" onClick={() => handleReduceFromCart(props.id)}>
            הפחת כמות
          </button>
        </div>

      </div>
    </div>
  );
}
