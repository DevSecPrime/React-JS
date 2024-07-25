
import { useState } from 'react';
import './App.css';

const App = () => {

  //First way --> define Each and Every state variable
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstHandler(event) {
  //   // console.log(`Input Changed --> FIRST NAME :- ${event.target.value}`); //event.target.value --> show the value which is entered in the input, &

  //   // console.log(event.target); //event.target --> show the whole input tag

  //   setFirstName(event.target.value);
  // }

  // function changeLastHandler(event) {
  //   // console.log(`Input Changed --> LAST NAME :- ${event.target.value}`); //event.target.value --> show the value which is entered in the input, &

  //   // console.log(event.target); //event.target --> show the whole input tag

  //   setLastName(event.target.value);
  // }

  //second way ---> define only one state variable and stire it in object


  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", checkVisible: true, mode: "", favCar: "" });

  // console.log(formData); //--> done in submitHandler
  function changeHandler(event) {
    //Destructure 
    const { name, value, type, checked } = event.target;
    // console.log(formData.email);
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value // This is syntext ----> No need after destructure
        [name]: type === "checkbox" ? checked : value

      }
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    //pting data in console
    console.log("Finally printing all data in console :-");
    console.log(formData);

  }

  return (
    <div className="App">
      Hello Ji
      <br />
      <br />
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='First Name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />
        <br /><br />

        <input
          type='text'
          placeholder='Last Name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />
        <br /><br />

        <input
          type='email'
          placeholder='Enter your email'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br /><br />

        <textarea
          placeholder='Enter your Comments'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <br /><br />

        <input
          type='checkbox'
          onChange={changeHandler}
          name="checkVisible"
          id='checkVisible'
          checked={formData.checkVisible}
        />

        <label htmlFor='checkVisible'>Am I variable Mitro?</label>

        <br /><br />

        <fieldset>
          <legend>Modes:</legend>
          <input
            type='radio'
            name='mode'
            value="Online-Mode"
            onChange={changeHandler}
            id='Online-Mode'
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor='Online-Mode'>Online-Mode</label>

          <br /><br />

          <input
            type='radio'
            name='mode'
            value="Offline-Mode"
            onChange={changeHandler}
            id='Offline-Mode'
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor='Offline-Mode'>Offline-Mode</label>
        </fieldset>
        <br /><br />

        <label>Select your Favourite Car :</label>
        <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}>

          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="volvo">Volvo</option>

        </select>

        <br /><br />
        <input type='submit' value='Submit' />

        {/* <button type='submit' onClick={}>
          Submit
        </button> */}

      </form>


    </div>
  );
}

export default App;
