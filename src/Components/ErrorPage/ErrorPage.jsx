import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Ooops!!!</h1>
            <NavLink to="/"><button className="bg-teal-400 rounded px-8 py-1 font-bold">Back to Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;