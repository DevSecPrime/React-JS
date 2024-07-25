// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
//commponent ne render krya pachii koi chnge krva hoi tyre , e chnges useEffect ma define thy...ej thing ne side effect kahevay..
  const [text, setText] = useState('');
  // const [name, setName] = useState('Aryan Rana'); //for variation - 3

  // note that the hook useEffect will be executed after the APP component is rendered/.---> Atle k UI render thse pacchi useEffext hook run thase--

  //issuuse :- 1). performance issue   2). Stability isssues


  //Variation - 1 :- It will run AFTER EVERY RENDER --> Darek render pachhi run thase

  // useEffect(() => {
  //   console.log("ARYAN, YOUR UI IS RENDERED.....FIRST VARIATION");
  // });

  //Varition - 2 :- first rnder ---> Ek j vaar UI render thse nd useEffect run thase
  //here, we had used and empty array with useEffect which suggest dependency list ,, it will run only once after the first render
  //why ? --> dont know but keep in mind that it`s just happens

  // useEffect(() => {
  //   console.log("ARYAN, YOUR UI IS RENDERED.....2nd VARIATION");

  // }, []);


  //Variation - 3 :- First render + chnage in dependency list
  //means text ma chnge thse tyre useEffect run thase  --> dependency list ma chnge thse etle useEffect execute thase

  // useEffect(() => {
  //   console.log("Change is observerd....3rd Variation");
  // }, [text]);

  //Variation - 4:- To handle the unmounting of code...

  useEffect(() =>{

    //Add event listener
    console.log("Add Listener....4th Variation");// B ---> It will run after befor listener is removed --> pahela nu listener remove thy pacchi aa run thse

    return () =>{
      console.log("Removed Listener....4th Variation");// --> It will be executed first..
    }

  },[text])

  function changeHandler(event) {
    console.log(text); //prints older value
    setText(event.target.value);//sets new value

  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler} />
    </div>
  );
}

export default App;
