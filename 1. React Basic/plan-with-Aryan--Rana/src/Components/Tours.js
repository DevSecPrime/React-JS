import Card from "./Cards";
function Tours({ tours, removeTour }) {

    return (

        <div className="container">
            {/* passing one heading . */}
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>


            {/* We are returning one card for each value of tour-- */}
            {/* i have 7 values for each card so 7 cards will be created and  get returened */}
            <div className="cards">
                {
                    tours.map((tour) => {
                       return  <Card key={tour.id} {...tours} removeTour={removeTour}></Card>
                    })
                }
            </div>



        </div>
    );

}
export default Tours;