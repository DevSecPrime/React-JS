import { useState } from "react";
// import React from "react";


function Card({ id, image, info, price, name, removeTour }) {

    const [readMore, setReadMore] = useState(false);

    // const description = `${info.substring(0, 200)}....`;
    const description = readMore ? info : `${info.substring(0, 200)}....`;



    function readMoreHandler() {
        setReadMore(!readMore); //if readMore is true then set it to false and vice versa ---- true hoi false krse and false hase to true krse
    }

    // function handleRemoveTour() {
    //     removeTour(id);
    // }
    return (
        <div className="card">

            <img src={image} className="image" alt=""></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">Rs. {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}

                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            {/* <button onClick={removeTour(() => removeTour(id))} className="btn-red">
                Not Intrested
            </button> */}

            <button onClick={() => removeTour(id)} className="btn-red">
                Not Interested
            </button>

        </div>
    )
}

export default Card;