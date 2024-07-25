// import logo from './logo.svg';

import React from 'react';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false,
    pushNotifications: ""
  });


  function changeHandler(event) {
    //destructuring thr data ----> fetchig all the values

    const { name, type, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value // Remove the extra space after "checkbox"
      }
    });
  }


  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the form data :");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler} >

        <label htmlFor='firstName'>First name :</label> <br />
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='Enter your first name'
          value={formData.firstName}
          onChange={changeHandler}
          className='outline'
        />

        <br /><br />

        <label htmlFor='lastName'>Last name :</label> <br />
        <input
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Enter your last name'
          value={formData.lastName}
          onChange={changeHandler}
          className='outline'


        />
        <br /> <br />
        <label htmlFor='email'>Email Address:</label> <br />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
          value={formData.email}
          onChange={changeHandler}
          className='outline'

        />
        <br /><br />

        {/* country selection */}

        <label htmlFor='country'>Country :</label> <br />
        <select
          name='country'
          id='country'
          value={formData.country}
          onChange={changeHandler}
          className='outline'

        >
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>

        </select> <br /> <br />

        <label htmlFor='streetAddress'>Street Address :</label> <br />
        <textarea
          name='streetAddress'
          placeholder='Enter your address'
          id='streetAddress'
          onChange={changeHandler}
          value={formData.streetAddress}
          className='outline'
        /> <br /> <br />

        <label htmlFor='city'>Last name :</label>City : <br />
        <input
          type='text'
          id='city'
          name='city'
          placeholder='Enter your city name'
          value={formData.city}
          onChange={changeHandler}
          className='outline'


        />
        <br /> <br />

        <label htmlFor='state'>State/Province :</label>City : <br />
        <input
          type='text'
          id='state'
          name='state'
          placeholder='Enter your state name'
          value={formData.state}
          onChange={changeHandler}
          className='outline'


        />
        <br /> <br />

        <label htmlFor='postalCode'>zip/pin code :</label><br />
        <input
          type='text'
          id='postalCode'
          name='postalCode'
          placeholder='Enter your postal code'
          value={formData.postalCode}
          onChange={changeHandler}
          className='outline'


        />
        <br /> <br />


        {/* check box */}
        <fieldset>
          <legend>By Email </legend>

          <div className='flex'>
            <input
              type='checkbox'
              name='comments'
              id="comments"
              onChange={changeHandler}
              checked={formData.comments}
            /> <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someone posts a comments on a posting</p>
            </div>
          </div>

          <div className='flex'>
            <input
              type='checkbox'
              name='candidates'
              id="candidates"
              onChange={changeHandler}
              checked={formData.candidates}
            /> <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when someone posts a comments on a posting</p>
            </div>
          </div>

          <div className='flex'>
            <input
              type='checkbox'
              name='offers'
              id="offers"
              onChange={changeHandler}
              checked={formData.offers}
            /> <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when someone posts a comments on a posting</p>
            </div>
          </div>
        </fieldset>
        <br /><br />

        {/* radio bbutton */}
        <fieldset>
          <legend>Push Notificatons :-</legend>
          <p>These are delivered via SMS to your movbile phone</p>

          <input
            type='radio'
            name='pushNotifications'
            id='pushEverything'
            value="Everything"
            onChange={changeHandler}

          /> <label htmlFor='pushEverything'>Everything</label><br />

          <input
            type='radio'
            name='pushNotifications'
            id='pushEmail'
            value="Same as email"
            onChange={changeHandler}

          /> <label htmlFor='pushEmail'>Same as email</label><br />

          <input
            type='radio'
            name='pushNotifications'
            id='pushNothing'
            value='No Push Notificstions'
            onChange={changeHandler}

          /> <label htmlFor='pushNothing'>No Push Notificstions</label>
        </fieldset>
        <br /><br />

        <button>Save</button>

      </form>

    </div >
  );
}

export default App;
