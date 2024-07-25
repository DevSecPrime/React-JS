
import { NavLink, Route, Routes } from 'react-router-dom';
import HOME from './components/HOME';
import AboutUS from './components/AboutUS';
import './App.css';
import Labs from './components/Labs';
import Support from './components/Support';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* //single route is created by using <Route> </Route> tag   */}
      {/* and multple routes are created by using <Routes> </Routes> tag same as single router  */}

      {/* for user */}
      {/* because of <Link> we cant get what is the current tab / page </Link> */}

      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About US</Link></li>
        <li><Link to='/support'>Support</Link></li>
        <li><Link to='/labs'>Labs</Link></li>
        {/* <li><Link to ='/'>Home</Link></li> */}
      {/* </ul> */}

      {/* we will use NavLink for the same purpose as <Link> but it include the active class to navigate */}

      <ul className='header'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About US</NavLink></li>
        <li><NavLink to='/support'>Support</NavLink></li>
        <li><NavLink to='/labs'>Labs</NavLink></li>
        {/* <li><Link to ='/'>Home</Link></li> */}
      </ul>


      <Routes> {/* <Routes> For MULTIPLE roouts/PATHS</Routes> */}

        {/* <Route path='/' element={<h1>Hello Guys! This is HOME PAGE</h1>}></Route>  */}
        {/* <Router> For SINGLE roout/PATH</Router> */}
        {/* <Route path='/' element={<h1>Hello Guys! This is HOME PAGE</h1>}></Route> ---> Je route apne banavnchhe e route no patha api devano .... jethi indicate kari sakay ----> ej rite */}

        {/* <Route path='/support' element={<h1>Hello Guys! This is SUPPORT PAGE</h1>}></Route>
        <Route path='/aboutus' element={<h1>Hello Guys! This is ABOUT US PAGE</h1>}></Route>
        <Route path='/labs' element={<h1>Hello Guys! This is LABS PAGE</h1>}></Route>
        <Route path='/footer' element={<h1>Hello Guys! This is FOOTER PAGE</h1>}></Route> */}

        {/* if not even a single path is matched --> jyre koi path MATCH naa thy */}
        {/* <Route path='*' element={<h1>Sorry Guys.......! <br />Page IS NOT found <br /> This is ERROR 404 PAGE</h1>}></Route> */}

        {/* we can create the page via components also , bcz all page would have massive data */}

        {/* <Route path='/' element={<HOME />}></Route>
        <Route path='/about' element={<AboutUS />}></Route>
        <Route path='/labs' element={<Labs />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='*' element={<NotFound />}></Route> */}


        {/* for nested routiing --> we will make home route as parent route and then we will make other routes as child routes likw below */}

        <Route path='/' element={<MainHeader />}> {/*This is parent route*/}
          <Route index element={<HOME />}></Route> {/*This is default route --> If no pathes are matched*/}
          <Route path='/about' element={<AboutUS />}></Route>{/*These all below are chlid route*/}
          <Route path='/labs' element={<Labs />}></Route>
          <Route path='/support' element={<Support />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
