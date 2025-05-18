import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// שים לב: רכיב Product חייב להיות מיובא כאן אם אתה משתמש בו
// import Product from './Product'; // ודא שזה קיים

export const EnlargedViewRecepie = () => {
    const dispatch = useDispatch();
    const { id } = useParams(); // קבלת מזהה המתכון מה־URL

    // שליפת רשימת העוגות מה־store
    const cakeList = useSelector((state) => state.cakesList.cakesList);

    // מציאת העוגה/מתכון המתאים לפי מזהה
    const myCake = cakeList.find(cake => cake.id === parseInt(id));

    // פעולת הזמנה: הוספה לעגלה + הזמנה
    const handleInviteCake = () => {
        dispatch(inviteCake(myCake.id));
        dispatch(addToCart({ myCake })); // הוספה לסל
    };

    // אם לא נמצאה עוגה מתאימה (בטעינה ראשונית)
    if (!myCake) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-4">

            {/* תצוגת תמונה מוגדלת של העוגה */}
            <div className="text-center mb-4">
                <img
                    src={myCake.image}
                    alt={myCake.name}
                    className="img-fluid rounded"
                    style={{ maxHeight: '600px', objectFit: 'cover' }}
                />
            </div>

            {/* מידע מפורט על המתכון */}
            <div className="text-center">
                <h3>{myCake.name}</h3>
                <p>{myCake.description}</p>
                <p>Price: <strong>${myCake.price}</strong></p>
                <p>Amount: <strong>{myCake.amount}</strong></p>
                <button onClick={handleInviteCake} className="btn btn-primary">Invite</button>
            </div>

            {/* הצעות לעוגות דומות לפי מאפיינים */}
            <h4 className="mt-4">You might also like:</h4>
            <div className="row">
                {cakeList
                    .filter(cake =>
                    (
                        (cake.shape === myCake.shape && cake.color === myCake.color) ||
                        (cake.Characteristic === myCake.Characteristic)
                    )
                    )
                    .map(cake => (
                        <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4">
                            {/* רכיב מוצר מוקטן */}
                            <Product {...cake} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
