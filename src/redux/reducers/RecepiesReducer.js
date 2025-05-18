import React from 'react'
import cakeImage7 from './../../assets/images/42.jpg';//יומלדת ורודה 42
import cakeImage2 from './../../assets/images/33.jpg';//חתונה קומות חלקה בנגיעות רוז
import cakeImage3 from './../../assets/images/12.jpg';//חתונה פרחים לבנים 12
import cakeImage4 from './../../assets/images/46.jpg';//חתונה 4 קומות 46
import cakeImage1 from './../../assets/images/13.jpg';//בר נטיפים בורדו 13
import cakeImage5 from './../../assets/images/11.jpg';//בר נטיפים צבעוני פירות 11
import cakeImage8 from './../../assets/images/44.jpg';//יומולדת תמי 44
import cakeImage6 from './../../assets/images/10.jpg';//בר עם שמנת תותים ונענע 10
import cakeImage9 from './../../assets/images/16.jpg';//יומולדת צבעונית 16
const InitialRecepiesCakesList = {
    myRecepiesCakesList: [
        {
            
            id: 1,
            name: "Berry Blush Celebration Cake",
            image: cakeImage1, // replace with the actual image path
            description: "A vibrant two-tier cake with pink drips, fresh berries, buttercream flowers, and golden decorations.",
            typeEvent:"bar"
        },
        
        
        {
            id: 2,
            name: "Blush Rose Drip Cake",
            image: cakeImage2,  // replace with the actual image path
            description: "A tall boutique cake in soft blush and chocolate tones, topped with elegant sugar flowers and glossy chocolate drips. ",
            typeEvent:"wedding"
        },
        
        {
            id: 3,
            name: "Berry Blush Celebration Cake",
            image: cakeImage3, // replace with the actual image path
            description: "A vibrant two-tier cake with pink drips, fresh berries, buttercream flowers, and golden decorations.",
            typeEvent:"wedding"
        },
      
        
        
        {
            id: 4,
            name: "Berry Blush Celebration Cake",
            image: cakeImage4, // replace with the actual image path
            description: "A vibrant two-tier cake with pink drips, fresh berries, buttercream flowers, and golden decorations.",
            typeEvent:"wedding"
        },
        
        
        {
            id: 5,
            name: "Berry Blush Celebration Cake",
            image: cakeImage5, // replace with the actual image path
            description: "A vibrant two-tier cake with pink drips, fresh berries, buttercream flowers, and golden decorations.",
            typeEvent:"bar"
        },
        {
            id: 6,
            name: "Berry Bliss Cake",
            image: cakeImage6,  // replace with the actual image path
            description: "Luscious berry-topped cake with rich whipped frosting and fresh mint accents. ",
            typeEvent:"bar"
        },
        {
            id: 7,
            name: " Pastel Sprinkle Birthday Cake",
            image: cakeImage7,  // replace with the actual image path
            description: "Pastel birthday cake with pink swirls, sprinkles & golden message.",
            typeEvent:"birthday"

        }
        ,
        {
            id: 8,
            name: "Rainbow Celebration Cake",
            image: cakeImage8,  // replace with the actual image path
            description: "A fun and colorful rainbow-layered cake with vibrant sprinkles and playful candles.",
            typeEvent:"birthday"
        },
    {
        id: 9,
        name: "  Vanilla Sprinkle Delight",
        image: cakeImage9,  // replace with the actual image path
        description: " Light vanilla cream cake with rainbow sprinkles." ,
        typeEvent:"birthday"

    }
        
            
        ]}

// פונקציה המייצגת את ה-reducer של המתכונים
        export default function RecepiesReducer(state = InitialRecepiesCakesList, action) {
            switch (action.type) {
              default:
                return state;
            }
          }
