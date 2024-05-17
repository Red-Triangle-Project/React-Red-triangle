import { Link } from "react-router-dom";

function Navbar (){
    return(
        <>
        <Link to="/" >Home</Link>
        <Link to="/Search">Search</Link>
        <Link to="/BuyProperty">BuyProperty</Link>
        <Link to = "/RentProperty" >RentProperty</Link>
        </>
    );
}

export default Navbar;