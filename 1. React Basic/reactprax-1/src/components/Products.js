import './Products.css';
import Item from './Item';
import ItemDate from './ItemDate';
import Card from './Card';


function Products() {

    //other way to use props

    const response = [
        {
            itemName: "Nirma",
            itemDay: "20",
            itemMonth: "June",
            itemYear: "1998"

        },
        {
            itemName: "SurfExcel",
            itemDay: "22",
            itemMonth: "July",
            itemYear: "1999"
        },
        {
            itemName: "555",
            itemDay: "24",
            itemMonth: "August",
            itemYear: "2000"
        }
    ];



    function clickHandler() {

        console.log("you clicked me......")
    }

    return (
        <div>

            <Card>
                {/* we are passing props to each component... */}
                <Item name={response[0].itemName}></Item>
                <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear} />



                <Item name={response[1].itemName}></Item>
                <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear} />


                <Item name={response[2].itemName}></Item>
                <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear} />


                <button onClick={clickHandler}>Add to Cart</button>
                {/* keep in mind do not declare funtion like this clickHandler() otherwise it will call function directly */}

                <button onClick={() => { alert("added to cart") }}>This a alert button...</button>


            </Card>


            

        </div>
    )

}

export default Products;