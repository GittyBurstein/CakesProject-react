import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

// ייבוא תמונות ווידאו
import img1 from '../../../assets/homePage/1.jpg'
import img2 from '../../../assets/homePage/2.jpg'
import img3 from '../../../assets/homePage/3.jpg'
import img4 from '../../../assets/homePage/4.jpg'
import img5 from '../../../assets/homePage/5.jpg'
import img10 from '../../../assets/homePage/10.jpg'
import img11 from '../../../assets/homePage/11.jpg'
import img12 from '../../../assets/homePage/12.jpg'
import img13 from '../../../assets/homePage/13.jpg'
import img14 from '../../../assets/homePage/14.jpg'
import img15 from '../../../assets/homePage/15.jpg'
import img16 from '../../../assets/homePage/16.jpg'
import img17 from '../../../assets/homePage/17.jpg'
import img18 from '../../../assets/homePage/18.jpg'
import img19 from '../../../assets/homePage/19.jpg'
import img21 from '../../../assets/images/SpecialCake/1313.jpg'
import video from '../../../assets/homePage/video.mp4'

export default function AbautUs() {
  const [counter, setCounter] = useState(0); // אינדקס של תמונת העוגה המתחלפת
  const [fade, setFade] = useState(true); // שליטה באפקט המעבר בין התמונות

  // מערך של תמונות עוגות מתחלפות
  const CakeList = [
    img10, img11, img12, img13, img14,
    img15, img16, img17, img18, img19,
  ];

  // אפקט שמחליף תמונה כל 2 שניות
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCounter(prev => (prev + 1) % CakeList.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // סגנון לתמונה המתחלפת
  const imageStyle = {
    width: '800px',
    height: '500px',
    objectFit: 'cover',
    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
    transition: 'opacity 1s ease-in-out',
    opacity: fade ? 1 : 0
  };

  // רקעים עם שכבת חצי שקיפות לטקסט
  const backgroundSectionStyle1 = {
    backgroundImage: `url(${img2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    zIndex: 1
  };

  const backgroundSectionStyle2 = {
    backgroundImage: `url(${img21})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    zIndex: 1,
  };

  // שכבת שכפול לבנה למחיקת הרקע מאחורי הטקסט
  const backgroundOverlay = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    zIndex: -1
  };

  // סגנון התוכן שמעל הרקע
  const contentBoxStyle = {
    position: 'relative',
    zIndex: 2
  };

  const currentImage = CakeList[counter]; // התמונה הנוכחית בגלריה

  return (
    <div className="container d-flex flex-column py-5" style={{ direction: 'rtl' }}>

      {/* תמונה מתחלפת של עוגות */}
      <div className="App d-flex justify-content-center my-4">
        <img
          src={currentImage}
          alt={`Cake ${counter}`}
          style={imageStyle}
          key={counter}
        />
      </div>

      {/* קטע ברוכים הבאים עם רקע מעוצב */}
      <div className="mb-5 p-4 border rounded bg-light shadow-sm" style={backgroundSectionStyle1}>
        <div style={backgroundOverlay} />
        <div style={contentBoxStyle}>
          <h4 className="mb-3">ברוכים הבאים ל־useCake</h4>
          <p>ב־useCake אנחנו לא רק אופים – אנחנו יוצרים חוויה של עונג, יופי וטעם בלתי נשכח.</p>
          <ul>
            <li>עבודת יד מדויקת ושילובי טעמים מוקפדים</li>
            <li>חומרי גלם טריים ואיכותיים</li>
            <li>תפריט מתחדש ללא הרף</li>
          </ul>
          <p className="fw-bold">useCake – כי מגיע לך טעם של בוטיק.</p>
        </div>
      </div>

      {/* גלריית עוגות בעיצוב עגול */}
      <div className="mb-5 p-4 rounded shadow-sm bg-light">
        <h4 className="mb-3">טעימה מהקולקציה</h4>
        <div className="d-flex justify-content-center flex-wrap">
          {[img1, img2, img3, img4, img5].map((img, index) => (
            <div key={index} className="position-relative">
              <img
                src={img}
                alt={`תמונה ${index + 1}`}
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease-in-out'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
        <p className="mt-4 text-center">
          העוגות של useCake מדברות בעד עצמן – יופי שקשה להתעלם ממנו, וטעם שלא שוכחים.
        </p>
        <Link to={`/Home`} className="d-block text-center btn btn-dark text-white mt-3">
          👉 לגלריית התמונות
        </Link>
      </div>

      {/* קטע על מתכונים - עם רקע נוסף */}
      <div className="mb-5 p-4 rounded shadow-sm bg-light" style={backgroundSectionStyle2}>
        <div style={backgroundOverlay} />
        <div style={contentBoxStyle}>
          <h4 className="mb-3">המתכונים של useCake</h4>
          <p>רוצים להכין עוגות שמקבלות תשואות גם בבית?</p>
          <p>במתחם המתכונים תמצאו מתכונים מקצועיים שמותאמים למטבח הביתי.</p>
          <p>אפשר לדרג כל מתכון באימוג'ים וגם להוריד אותו כ־PDF.</p>
          <p className="fw-bold">useCake – כי גם בבית, כל עוגה יכולה להיות יצירת בוטיק.</p>
        </div>
      </div>

      {/* סרטון הסבר עם לינק להמשך */}
      <div className="mb-5 p-4 border rounded bg-white shadow-sm">
        <h4 className="mb-3">🎥 ראו הסבר קצר - היישר לתוך המחשב שלך</h4>
        <video controls className="w-50" style={{ maxHeight: '300px', margin: '0 auto', display: 'block' }}>
          <source src={video} type="video/mp4" />
        </video>
        <Link to={`/Receipes`} className="d-block text-center btn btn-dark text-white mt-3">
          👉 למתכונים המובחרים שלנו
        </Link>
      </div>

      {/* אזור עיצוב עוגות אינטראקטיבי */}
      <div className="mb-5 p-4 border rounded bg-light shadow-sm position-relative text-white overflow-hidden" style={{ zIndex: 1 }}>
        <div style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.9,
          zIndex: -1
        }} />
        <div style={{
          border: '2px solid black',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          color: 'black',
          zIndex: 2,
          position: 'relative'
        }}>
          <h4 className="mb-3">תעצבו את העוגה – אנחנו נאפה את החלום</h4>
          <p>פיצ'ר ייחודי שמאפשר לעצב עוגה אונליין ולקבל הדמיה מיידית:</p>
          <ul>
            <li>בחירת צורה</li>
            <li>מספר קומות</li>
            <li>טעמים</li>
            <li>קישוטים</li>
          </ul>
          <p>תוך 3 שניות – תקבלו תצוגה של העוגה לפני אפייה.</p>
          <p className="fw-bold">כי כל עוגה מספרת סיפור – וזה הסיפור שלכם.</p>
          <Link to={`/Special`} className="d-block text-center btn btn-dark text-white mt-3">
            👉 ליצירת העוגה
          </Link>
        </div>
      </div>

    </div>
  );
}
