import loading from '../../../assets/images/loading.gif';
import { addToCart } from '../../../redux/actions';
import imageMap from './CakeImage';
import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
} from '@mui/material';

export default function Special() {
  const [shape, setShape] = useState('');
  const [layers, setLayers] = useState('1');
  const [flavor, setFlavor] = useState('');
  const [decoration, setDecoration] = useState('');
  const [showImageOnly, setShowImageOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // חישוב מזהה התמונה על סמך הבחירות של המשתמש
  const imageId = useMemo(() => {
    const computedLayers = shape === '1' ? layers : '1';
    return shape + computedLayers + flavor + decoration;
  }, [shape, layers, flavor, decoration]);
  // פונקציה להזמנת העוגה
  const handleInviteCake = (myCake) => {
    dispatch(addToCart({ myCake }));
    alert("העוגה הוספה בהצלחה")
  };
  // פונקציה להציג את התמונה
  const handleShowImage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowImageOnly(true);
    }, 3000);
  };
  // פונקציה לאיפוס כל הבחירות
  const handleReset = () => {
    setShape('');
    setLayers('1');
    setFlavor('');
    setDecoration('');
    setShowImageOnly(false);
    setIsLoading(false);
  };

  // תיאורים עבור כל אפשרות
  const shapeDescriptions = {
    '1': 'עוגה עגולה',
    '2': 'עוגה מרובעת',
    '3': 'עוגה בצורת לב',
  };

  const flavorDescriptions = {
    '1': 'וניל',
    '2': 'שוקולד',
  };

  const decorationDescriptions = {
    '1': 'קישוטי פירות',
    '2': 'קישוטי שוקולד',
    '3': 'קישוטי תותים',
    '4': 'קישוטי סוכריות צבעוניות',
    '5': 'קישוטי פרחים יפיפיים',
  };

  // פונקציה שמחזירה תיאור של העוגה
  const getDescription = () => {
    const shapeText = shapeDescriptions[shape] || 'צורה לא נבחרה';
    const flavorText = flavorDescriptions[flavor] || 'טעם לא נבחר';
    const decorationText = decorationDescriptions[decoration] || 'קישוט לא נבחר';
    return ` ${shapeText} עם ${flavorText} ו-${decorationText}`;
  };
  // סגנון בסיסי עבור תיבות הבחירה
  const baseBoxStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
  };
  const boxStyles = [
    { backgroundColor: '#ede0d4' }, // Light mocha cream
    { backgroundColor: '#e6ccb2' }, // Mocha בהיר
    { backgroundColor: '#d5b39f' }, // חום ורדרד עדין
    { backgroundColor: '#c19a6b' }, // Cafe au lait
  ];

  return (
    <div
      className={`container d-flex flex-column py-5 ${showImageOnly || isLoading ? 'no-background' : ''}`}
      style={{ direction: 'rtl' }}
    >

      {!showImageOnly && !isLoading ? (
        <>
          <h2>בחר בעיצוב כמו שאתה אוהב...</h2>

          {/* Shape */}
          <div style={{ ...baseBoxStyle, ...boxStyles[0] }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" className="fw-bold">בחרי צורה:</FormLabel>
              <RadioGroup
                value={shape}
                onChange={(e) => setShape(e.target.value)}
                style={{ flexDirection: 'column' }}
              >
                <FormControlLabel value="1" control={<Radio />} label="עיגול" />
                <FormControlLabel value="2" control={<Radio />} label="מלבן" />
                <FormControlLabel value="3" control={<Radio />} label="לב" />
              </RadioGroup>
            </FormControl>
          </div>

          {/* Layers (if circle) */}
          {shape === '1' && (
            <div style={{ ...baseBoxStyle, ...boxStyles[1] }}>
              <FormControl component="fieldset">
                <FormLabel component="legend" className="fw-bold">בחרי מספר קומות:</FormLabel>
                <RadioGroup
                  value={layers}
                  onChange={(e) => setLayers(e.target.value)}
                  style={{ flexDirection: 'column' }}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                </RadioGroup>
              </FormControl>
            </div>
          )}

          {/* Flavor */}
          <div style={{ ...baseBoxStyle, ...boxStyles[2] }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" className="fw-bold">בחרי טעם:</FormLabel>
              <RadioGroup
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                style={{ flexDirection: 'column' }}
              >
                <FormControlLabel value="1" control={<Radio />} label="וניל" />
                <FormControlLabel value="2" control={<Radio />} label="שוקולד" />
              </RadioGroup>
            </FormControl>
          </div>

          {/* Decoration */}
          <div style={{ ...baseBoxStyle, ...boxStyles[3] }}>
            <FormControl component="fieldset">
              <FormLabel component="legend" className="fw-bold">בחרי קישוט:</FormLabel>
              <RadioGroup
                value={decoration}
                onChange={(e) => setDecoration(e.target.value)}
                style={{ flexDirection: 'column' }}
              >
                <FormControlLabel value="1" control={<Radio />} label="פירות" />
                <FormControlLabel value="2" control={<Radio />} label="שוקולד" />
                <FormControlLabel value="3" control={<Radio />} label="תותים" />
                <FormControlLabel value="4" control={<Radio />} label="סוכריות צבעוניות" />
                <FormControlLabel value="5" control={<Radio />} label="פרחים" />
              </RadioGroup>
            </FormControl>
          </div>

          {/* Show Image */}
          <div className="text-center">
            {shape && flavor && decoration ? (
              <Button variant="contained" onClick={handleShowImage}>הצג תמונה</Button>
            ) : (
              <p className="text-danger">יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
            )}
          </div>
        </>
      ) : isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <div className="text-center">


          <h5>כך העוגה שלך תראה לאחר היציאה מהתנור</h5>
          <img src={imageMap[imageId]} alt="Cake" style={{ width: '100%', maxWidth: '600px' }} />
          <div style={{ marginTop: '20px' }}>
            <Button variant="outlined" onClick={handleReset} style={{ marginRight: '10px' }}>
              חזרה לבחירה
            </Button>
            <Button

              variant="contained"
              onClick={() =>

                handleInviteCake({
                  id: parseInt(imageId, 10),
                  name: 'special cake',
                  image: imageMap[imageId],
                  description: getDescription(),
                  price: 250.0,
                  amount: 1,
                })
              }
            >
              הזמנה
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

