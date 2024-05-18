import { Link } from "react-router-dom";

function Navbar (){
    return(
        <>
        <Link to="/" >Home</Link> <br/>
        <Link to="/Search">Search</Link> <br/>
        <Link to="/BuyProperty">BuyProperty</Link> <br/>
        <Link to = "/RentProperty" >RentProperty</Link> <br/>
        <Link to="/WatchLater">Watch later</Link>
        </>
    );
}

export default Navbar;