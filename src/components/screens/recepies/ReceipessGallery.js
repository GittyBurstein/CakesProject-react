import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReceipessGallery.css';
import RadioGroupRating from './RadioGroupRating';

// תצוגת גלריית מתכונים
export default function ReceipessGallery() {
  // שליפת רשימת מתכונים מהמצב של Redux
  const myRecepiesCakesList = useSelector(
    (state) => state.myRecepiesCakesList.myRecepiesCakesList
  ) || [];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  // פונקציה להחזרת תצוגת מתכונים לפי סוג
  const renderSection = (type, title) => {
    const filtered = myRecepiesCakesList.filter(cake => cake.typeEvent === type);
    if (filtered.length === 0) return null;
    return (
      <div className="recepies-section">
        <h3 className="section-title">{title}</h3>
        <div className="recepies-circle-list">
          {/* תצוגת מתכונים בעיגולים */}
          {filtered.map(cake => (
            <div key={cake.id} className="circle-link">
              {/* קישור לתצוגה המוגדלת של המתכון */}
              <Link to={`/recepie/${cake.id}`}>
                <div className="circle-container">
                  {/* תצוגת התמונה בעיגול */}
                  <img src={cake.image} alt={cake.name} className="circle-image" />
                </div>
              </Link>
              {/* תצוגת שם המתכון */}
              <RadioGroupRating id={cake.id} />
            </div>
          ))}
          {/* כפתור להוספת מתכון חדש */}
        </div>
        <div className="section-divider" />
      </div>
    );
  };
  return (
    <div className="recepies-gallery-container">
      {renderSection("birthday", "יום הולדת")}
      {renderSection("bar", "בר מצווה / בת מצווה")}
      {renderSection("wedding", "חתונה")}
    </div>
  );
}