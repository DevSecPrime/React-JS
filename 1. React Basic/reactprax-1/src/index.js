import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// keep in mind whatever component we creat we are needed to import it in index.js  --- here item.js




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //here render is used to show output on UI...

    <>
        <App />
      

    </>


);


//index.html :- j public foldrr ma hse and browser ne khli html, css, JS j smj pde chhe ...to browser pr code ne run krva ....and UI pr show karva index.htm no use krvam maa avse.....j kaam index.js dhwara thse...


//index.js :- aaa first file chhe j execute thse...and execute krva mate public/index.html no codde use krse ....render krva and UI ma batav maate


//App.js :- aaa aapno potano code chhhe , j aapne banavelo chhe....
//  App component itSelf is a function..which is renderd in index.js it will be called via root of public folder which has public/index.html 

//npm start :- aa cammand server ne start kkrse and UI ne show krvase...and react na pura code ne html,css and js na code ma convert krse bcz BROWSER ne khli html, css, JS j smj pde chhe ...


// important point :-Whatever code we had written in React is UserFrindly but Browser doesnt understand this code so we need to convert it to Browser understandable code(html,css,js) / BrowserFrindly code...which is done by JS engine [$npm start]