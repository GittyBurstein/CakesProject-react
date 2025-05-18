import React from 'react';
import { Link } from "react-router-dom";
import RadioGroupRating from './RadioGroupRating';

export default function RecepiesProduct(props) {
    return (
        <div className="card mb-4 shadow-sm" style={{ flexDirection: 'row', minHeight: '200px' }}>
            <div className="row g-0 w-100 align-items-center">
                <div className="col-md-4">
                    <Link to={`/bigViewe/${props.id}`}>
                        <img
                            src={props.image}
                            alt={props.name}
                            className="img-fluid rounded-start"
                            style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                        />
                    </Link>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>

                    <RadioGroupRating id={props.id} />

                </div>
            </div>
        </div>
    );
}

