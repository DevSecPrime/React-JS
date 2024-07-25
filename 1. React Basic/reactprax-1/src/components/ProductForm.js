import './ProductForm.css';
import { useState } from 'react';

function ProductForm(props) {

    // THIS IS ALL ABOUT HANDLING SINGLE STATE....
    const [newTitle, setTitle] = useState(''); //by default title value is empty
    const [newDate, setDate] = useState('');//byDefault date value is empty

    // // Here, 
    // //event is parameter which are passed to the function tl show value os the variable in UI..and console
    // //event represent the value of the varibale
    function titleChangeHandler(event) {

        setTitle(event.target.value);
        // console.log(`The titleChange is :- ${event.target.value}`);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
        // console.log(`The dateChange is :- ${event.target.value}`);
        // console.log(title);
        // console.log(date);
    }

    //Lets handle/pass Multiple states...
    //1. Created an object and passed multiple value....
    // const [fullProductInput, setFullProductInput] = useState({
    //     title: '',
    //     date: ''
    // });

    // function titleChangeHandler(event, prevState) {
    //     let obj = { ...prevState, title: event.target.value };

    //     console.log(obj);
    //     return obj;
    // };

    // function dateChangeHandler(event) {
    //     setDate(event.target.value); //-----> Skipping for now this thing is not working.....
    // }

    function submitHandler(event) {
        event.preventDefault();//default event is prevented --> Means I dont want any action after clicking the submit button.....Thats why we use preventDefault()

        // now lets create an Object-----------

        const productData = {
            title: newTitle,
            date: newDate
        };

        console.log(productData);
        
        // how to communicate from child to parent in react --> lifting up concept
        props.onSaveProduct(productData);

        setTitle('');
        setDate(''); // this will empty the tile and date field after clicking the submit button -----> BUT it will be emptied in console not get rendered in UI...

        //to show in UI we ar needed to link newTitle and newDate to the input field......BCZ this fields are gettting emptied after submit...

    }


    return (


        <form onSubmit={submitHandler}>
            <div className='new-product-title'>
                <label>Title :- </label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>

            <div className='new-product-date'>
                <label>Date :- </label>
                <input type='date' value={newDate} onChange={dateChangeHandler} min='1999-01-01' max='2024-12-31'></input>
                {/* <input type='date' min='1999-01-01' max='2024-12-31'></input> */}

            </div>

            <div className='new-product-button'>
                <button>Add product...</button>
            </div>
        </form>
    )
}

export default ProductForm;