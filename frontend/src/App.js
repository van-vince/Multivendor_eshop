import React, { useEffect } from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Store from "./redux/store";
import { loadUser, loadSeller } from "./redux/actions/userAction";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import SellerProtectedRoute from "./ProtectedRoutes/SellerProtectedRoute";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./pages/Routes.js";
import {
  ShopHomePage,
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvent,
  ShopAllEvents,
  ShopAllCoupons
} from "./pages/shop/ShopRoutes";


function App() {

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* <Route path="/order/success/:id" element={
        <ProtectedRoute >     
          <OrderSuccessPage />
        </ProtectedRoute>
      } /> */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute >
              <ProfilePage />
            </ProtectedRoute>
          }
        />
          {/* Shop Routes */}
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path="/shop/:id" element={
          <SellerProtectedRoute>
            <ShopHomePage />
           </SellerProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <SellerProtectedRoute >
            <ShopDashboardPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-create-product" element={
          <SellerProtectedRoute >
            <ShopCreateProduct />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-products" element={
          <SellerProtectedRoute >
            <ShopAllProducts/>
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-create-event" element={
          <SellerProtectedRoute >
            <ShopCreateEvent/>
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-events" element={
          <SellerProtectedRoute >
            <ShopAllEvents/>
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-coupons" element={
          <SellerProtectedRoute >
            <ShopAllCoupons/>
          </SellerProtectedRoute>
        } />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>

  );
}

export default App;
