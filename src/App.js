import Container from "./components/Container";
import ErrorBoundary from "./components/ErrorBoundary";
import CounterPage from "./pages";
import ErrorPage from "./pages/error-page";
import Page2 from "./pages/page-2";
import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  isRouteErrorResponse,
  useLocation,
  useRouteError,
  useNavigationType
} from "react-router-dom";

const ErrorFallback = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const route = useLocation();
  const navType = useNavigationType();

  const goback = () => {
    console.log("error");
    if (navType === "PUSH") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const errorBody = () => {
    if (isRouteErrorResponse(error) && error.status === 404) {
      return (
        <span>
          This route <code>{route.pathname}</code> doesn't exist
        </span>
      );
    }

    return `Something went wrong: ${error.message}`;
  };

  return (
    <div>
      <p>{errorBody()} </p>
      <button onClick={goback}>Go back</button>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "/",
        element: <CounterPage />
      },
      {
        path: "page2",
        element: <Page2 />
      },
      {
        path: "error",
        element: <ErrorPage />
      }
    ]
  }
]);

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
