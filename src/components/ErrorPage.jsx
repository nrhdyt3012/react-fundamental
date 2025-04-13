import { useRouteError } from "react-router-dom";

function ErrorPage () {
    const error = useRouteError();
    return <div>Ada Error nih</div>
}

export default ErrorPage;