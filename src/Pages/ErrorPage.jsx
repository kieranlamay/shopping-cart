import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div>
        Uh, oh. You have travelled to the wrong page!
        <Link to="/">Click here to go back to the main page!</Link>
      </div>
    </>
  );
};

export default ErrorPage;
