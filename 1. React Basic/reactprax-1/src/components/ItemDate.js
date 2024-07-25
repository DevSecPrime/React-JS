import './ItemDate.css';

function ItemDate(props) {

    //now we had hardly coded the data 
    //assuming that data is from ,from API---- or from DB so lets take and example and mock the data...

    //we are passing properties of the date in ItemDate component...using props
    const day = props.day;
    const month = props.month;
    const year = props.year;

    //here, we got the way of changing data dynamically --(dynamic chnage)---and reduce or stop the hardCooding---
    //BUT, the prblm is that we had chnged the data dynamically but all the values are same so WHERE is the concept of reusability...????????//

    //Answer :- Here comes the new concept of reusability...which is a entity called props :- property 


    return (
        <div className='mfg-date'>
            <span>{day}</span>
            {/* //we are not needed text :- day but we are needed of the value of day ---- so we will use the curly braces {} to use the value of day as well as month and year */}
            <span> {month}</span>
            <span> {year}</span>
        </div>
    );

}


export default ItemDate;