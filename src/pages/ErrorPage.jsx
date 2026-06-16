import { Link } from "react-router";
import "./errorpage.css"

const ErrorPage = ({statusCode, message}) => {
  return (
    <div className="error-page">
        <h2 className="error-code">{statusCode}</h2>
        <h4 className="error-message">{message}</h4>
        <Link className="error-link" to="/">Volver al inicio</Link>
    </div>
  )
}

export default ErrorPage