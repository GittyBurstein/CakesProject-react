
import React from 'react';

// צור אובייקט של כל התמונות שהן ייבוא ידני
import cake1111 from '../../../assets/images/SpecialCake/1111.jpg';
import cake1112 from '../../../assets/images/SpecialCake/1112.jpg';
import cake1113 from '../../../assets/images/SpecialCake/1113.jpg';
import cake1114 from '../../../assets/images/SpecialCake/1114.jpg';
import cake1115 from '../../../assets/images/SpecialCake/1115.jpg';
import cake1121 from '../../../assets/images/SpecialCake/1121.jpg';
import cake1122 from '../../../assets/images/SpecialCake/1122.jpg';
import cake1123 from '../../../assets/images/SpecialCake/1123.jpg';
import cake1124 from '../../../assets/images/SpecialCake/1124.jpg';
import cake1125 from '../../../assets/images/SpecialCake/1125.jpg';
import cake1211 from '../../../assets/images/SpecialCake/1211.jpg';
import cake1212 from '../../../assets/images/SpecialCake/1212.jpg';
import cake1213 from '../../../assets/images/SpecialCake/1213.jpg';
import cake1214 from '../../../assets/images/SpecialCake/1214.jpg';
import cake1215 from '../../../assets/images/SpecialCake/1215.jpg';
import cake1221 from '../../../assets/images/SpecialCake/1221.jpg';
import cake1222 from '../../../assets/images/SpecialCake/1222.jpg';
import cake1223 from '../../../assets/images/SpecialCake/1223.jpg';
import cake1224 from '../../../assets/images/SpecialCake/1224.jpg';
import cake1225 from '../../../assets/images/SpecialCake/1225.jpg';
import cake1311 from '../../../assets/images/SpecialCake/1311.jpg';
import cake1312 from '../../../assets/images/SpecialCake/1312.jpg';
import cake1313 from '../../../assets/images/SpecialCake/1313.jpg';
import cake1314 from '../../../assets/images/SpecialCake/1314.jpg';
import cake1315 from '../../../assets/images/SpecialCake/1315.jpg';
import cake1321 from '../../../assets/images/SpecialCake/1321.jpg';
import cake1322 from '../../../assets/images/SpecialCake/1322.jpg';
import cake1323 from '../../../assets/images/SpecialCake/1323.jpg';
import cake1324 from '../../../assets/images/SpecialCake/1324.jpg';
import cake1325 from '../../../assets/images/SpecialCake/1325.jpg';

import cake2111 from '../../../assets/images/SpecialCake/2111.jpg';
import cake2112 from '../../../assets/images/SpecialCake/2112.jpg';
import cake2113 from '../../../assets/images/SpecialCake/2113.jpg';
import cake2114 from '../../../assets/images/SpecialCake/2114.jpg';
import cake2115 from '../../../assets/images/SpecialCake/2115.jpg';
import cake2121 from '../../../assets/images/SpecialCake/2121.jpg';
import cake2122 from '../../../assets/images/SpecialCake/2122.jpg';
import cake2123 from '../../../assets/images/SpecialCake/2123.jpg';
import cake2124 from '../../../assets/images/SpecialCake/2124.jpg';
import cake2125 from '../../../assets/images/SpecialCake/2125.jpg';

import cake3111 from '../../../assets/images/SpecialCake/3111.jpg';
import cake3112 from '../../../assets/images/SpecialCake/3112.jpg';
import cake3113 from '../../../assets/images/SpecialCake/3113.jpg';
import cake3114 from '../../../assets/images/SpecialCake/3114.jpg';
import cake3115 from '../../../assets/images/SpecialCake/3115.jpg';
import cake3121 from '../../../assets/images/SpecialCake/3121.jpg';
import cake3122 from '../../../assets/images/SpecialCake/3122.jpg';
import cake3123 from '../../../assets/images/SpecialCake/3123.jpg';
import cake3124 from '../../../assets/images/SpecialCake/3124.jpg';
import cake3125 from '../../../assets/images/SpecialCake/3125.jpg';
// כל שאר התמונות

const imageMap = {
  '1111': cake1111,
  '1112': cake1112,
  '1113': cake1113,
  '1114': cake1114,
  '1115': cake1115,
  '1121': cake1121,
  '1122': cake1122,
  '1123': cake1123,
  '1124': cake1124,
  '1125': cake1125,
  '1211': cake1211,
  '1212': cake1212,
  '1213': cake1213,
  '1214': cake1214,
  '1215': cake1215,
  '1225': cake1225,
  '1221': cake1221,
  '1222': cake1222,
  '1223': cake1223,
  '1224': cake1224,
  '1225': cake1225,
  '1311': cake1311,
  '1312': cake1312,
  '1313': cake1313,
  '1314': cake1314,
  '1315': cake1315,
  '1321': cake1321,
  '1322': cake1322,
  '1323': cake1323,
  '1324': cake1324,
  '1325': cake1325,
  
  '2111': cake2111,
  '2112': cake2112,
  '2113': cake2113,
  '2114': cake2114,
  '2115': cake2115,
  '2121': cake2121,
  '2122': cake2122,
  '2123': cake2123,
  '2124': cake2124,
  '2125': cake2125,

  '3111': cake3111,
  '3112': cake3112,
  '3113': cake3113,
  '3114': cake3114,
  '3115': cake3115,
  '3121': cake3121,
  '3122': cake3122,
  '3123': cake3123,
  '3124': cake3124,
  '3125': cake3125,
  // הוסף את כל שאר התמונות עם המפתחות המתאימים
};
export default imageMap; // ייצוא של imageMap

export const CakeImage = ({ imageId }) => { // ייצוא של CakeImage
  const src = imageMap[imageId];

  if (!src) {
    return <p>❌ תמונה לא נמצאה</p>;
  }

  return <img src={src} alt={`עוגה ${imageId}`} style={{ maxWidth: '700px' }} />;
};
