import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div style={{ height: '100vh', backgroundColor: "#111122" }} className="grid place-items-center text-white">
            <div className="text-center">
                <img src="https://i.ibb.co/9qpTLLC/error-Page.jpg" alt="error-Page" border="0" />
                <p className="text-3xl font-medium pt-5 pb-2">Page  Not Pound</p>
                <p className="text-1xl font-medium pb-1">Oops! Something went wrong.</p>
                <p className="text-1xl font-medium pb-1">We apologize for the inconvenience. An error has occurred.</p>
                <button className="btn btn-accent"><Link to='/'>Back to Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;