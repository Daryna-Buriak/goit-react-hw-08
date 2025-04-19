import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Layout/Layout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsRefreshing } from "../src/redux/auth/selectors";
import { refreshUser } from "../src/redux/auth/operations";
import PrivateRoute from "../src/components/PrivateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../src/pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../src/pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../src/pages/ContactsPage/ContactsPage")
);

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  return isRefreshing ? (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
    >
      <CircularProgress />
    </div>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Layout>
  );
}

export default App;
