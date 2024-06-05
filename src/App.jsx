import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { ListProvider } from "./context/ListContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Suspense } from "react";
import LoaderFullscreen from "./components/LoaderFullscreen";
import Page404 from "./pages/Page404";
import Layout from "./components/Layout";
import MoviesByGenre from "./pages/MoviesByGenre";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./pages/Details";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
          <ScrollToTop />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies/:movieName",
          element: <Details />,
        },
        {
          path: "/movies/genre/:genre",
          element: <MoviesByGenre />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
    {
      path: "/login",
      element: <Register />,
    },
  ]);

  return (
    <AuthProvider>
      <ListProvider>
        <Suspense fallback={<LoaderFullscreen />}>
          <RouterProvider router={router} />
        </Suspense>
      </ListProvider>
    </AuthProvider>
  );

  /* return (
    <AuthProvider>
      <ListProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoaderFullscreen />}>
            <Routes>
              <ProtectedRoute>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/movies/:movieName" element={<Details />} />
                <Route
                  path="/movies/genre/:genre"
                  element={<MoviesByGenre />}
                />
                <Route path="*" element={<Page404 />} />
              </Route>
              </ProtectedRoute>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ListProvider>
    </AuthProvider>
  ); */
}
