import './Card.css';


function Card(props)
{
    return(
        <div className='myCard'>
            {props.children}
        </div>
    )
}

export default Card;