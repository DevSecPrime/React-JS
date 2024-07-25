// import logo from './logo.svg';
import './App.css';
import NewProduct from './components/NewProduct';
import Products from './components/Products';

// keep in mind whatever component we creat we are needed to import it in App.js  --- here item.js and then passs it to index.js to show O/P on UI...
// import Item from './components/Item';
// import ItemDate from './components/ItemDate';
// import Card from './components/Card';

// import Products from './components/Products';

//App component itSelf is a function..

function App() {


  // passing funtion child to parent from NewProduct to App.js
  function printProductData() {
    console.log("Hey, You are inSide App.js...");
    console.log(data);
  }


  return (

    //this is not an exactly HTMl code --- It`s just component(function)--which has structure  just like HTML & JavaScript.....
    // this is not valid js code , this is JSX syntaxt , Basicaly we write HTML code inSide JavaScript...

    //always keep in mind that every component MUST have a single parent ...
    //<div>...</div> OR <>...</> use to create parent 
    <div>

      <NewProduct printProduct={printProductData} />
      <Products></Products>


    </div>

  );
}

export default App;
