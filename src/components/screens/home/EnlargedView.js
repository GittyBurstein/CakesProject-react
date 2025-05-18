import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Typography, Button, Container, Box, Grid } from '@mui/material';
import { addToCart, inviteCake } from '../../../redux/actions';

export const EnlargedView = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // קבלת מזהה העוגה מה-URL

  // שליפת רשימת העוגות מה־store
  const cakeList = useSelector((state) => state.cakesList.cakesList);
  const myCake = cakeList.find(cake => cake.id === parseInt(id)); // חיפוש העוגה המתאימה לפי מזהה

  // גלילה אוטומטית לראש העמוד בכל טעינה של עוגה אחרת
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // לחיצה על כפתור "Invite"
  const handleInviteCake = () => {
    dispatch(inviteCake(myCake.id)); // פעולה להזמנת העוגה

    // בדיקת זמינות
    if (myCake.amount > 0) {
      dispatch(addToCart({ myCake })); // הוספה לסל
    } else {
      alert("This product is out of stock");
    }
  };

  // אם לא נמצאה העוגה (ייתכן בטעינה ראשונית)
  if (!myCake) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4, pb: 6 }}>
      {/* תצוגת תמונת העוגה */}
      <Box textAlign="center" mb={4}>
        <img
          src={myCake.image}
          alt={myCake.name}
          style={{ maxHeight: '500px', borderRadius: '12px', objectFit: 'cover' }}
        />
      </Box>

      {/* פרטי העוגה */}
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          {myCake.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {myCake.description}
        </Typography>
        <Typography variant="body1">
          Price: <strong>${myCake.price}</strong>
        </Typography>
        <Typography variant="body1">
          Amount: <strong>{myCake.amount}</strong>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            px: 4,
            py: 1,
            fontWeight: 'bold',
            borderRadius: 2,
          }}
          onClick={handleInviteCake}
        >
          Invite
        </Button>
      </Box>

      {/* המלצות לעוגות דומות */}
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>
        You might also like:
      </Typography>

      {/* סינון עוגות דומות לפי מאפיינים וצבע */}
      <Grid container spacing={2} justifyContent="center">
        {cakeList
          .filter(cake =>
          (
            (cake.Characteristic1 === myCake.Characteristic2 && cake.Characteristic2 === myCake.Characteristic1) ||
            (cake.Characteristic1 === myCake.Characteristic1 && cake.Characteristic2 === myCake.Characteristic2) ||
            (
              (cake.Characteristic1 === myCake.Characteristic2 ||
                cake.Characteristic1 === myCake.Characteristic1 ||
                cake.Characteristic2 === myCake.Characteristic1)
              && cake.color === myCake.color
            )
          )
          )
          .map(cake => (
            <Grid item xs={4} sm={3} md={2} key={cake.id} textAlign="center">
              <Link to={`/bigViewe/${cake.id}`} style={{ textDecoration: 'none' }}>
                <img
                  src={cake.image}
                  alt={cake.name}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '2px solid #fbd4c6',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
};
