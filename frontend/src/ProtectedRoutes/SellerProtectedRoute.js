import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"

const SellerProtectedRoute = ({children}) => {
    const { isSeller, isloading, } = useSelector((state) => state.seller);

    if (isloading === false) {
        if (!isSeller) {
            return < Navigate to={`/shop-login`} replace />
        }
        return children
    }
}

export default SellerProtectedRoute