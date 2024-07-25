
//always keep in mind to import css of each component in componet_name.js file... if styling is required..
import './Item.css';
function Item(props) {
    const itemName = props.name
    return (
        <>
            <p className="myPara">{itemName}</p> {props.children}

        </>);
}


//keep in mind that whatever component we creat we are needed to export it

export default Item;