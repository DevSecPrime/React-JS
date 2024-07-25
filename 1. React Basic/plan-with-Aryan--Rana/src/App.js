import React from "react";
import data from "./data";
import Tours from "./Components/Tours";
import { useState } from "react";
// import Card from "./Components/Cards";




const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);

    // Here we are using filter method , to filter out the tour that we want to remove and set it to newTours
    //suppose we have 7 tours and we want to remove tour with id 3 and set it to newTours so it will show all the tours except tour with id 3 ====> 1,2,4,5,6,7

    // tours          newTours
    // 1 ---------------> 1      
    // 2 ---------------> 2      
    // 3 --------------(!==3)----> X  ==> WILL NOT SHOW on screen    
    // 4 ---------------> 4      
    // 5 ---------------> 5      
    // 6 ---------------> 6      
    // 7 ---------------> 7     

  }

  // if there is not any availabe city-- it will show the refresh page on UI
  if (tours.length === 0) {

    return (
      <div className="refresh">

        <h2>No more tours left</h2>
        <button onClick={() => setTours(data)} className="btn-white">
          Refresh
        </button>

      </div>
    );

  }


  return (
    <div className="App">

      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
