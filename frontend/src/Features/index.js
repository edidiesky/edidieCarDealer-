import {
    onToggle,
    offToggle,
    toggleStorageTheme,
    onloader,
    offloader,
    ToggleSidebar,
    offSidebar
} from './toggle/toggleSlice'


import {
    onTaskModal,
    offTaskModal,
    ToggleTaskModal,
    onSearchModal,
    offSearchModal,
    ToggleSearchModal
} from './modal/modalSlice'

import {
    getPage,
    getRating,
    clearProductAlert,
    handleCategoryFilter,
    getColor,
    getSort,
    clearReviewAction,
    clearPage,
    getLimit,
    handleProductSearch,
    getSearch,
    getProduct,
    clearProductDetails,
} from './product/productSlice'

import {
    getAllProduct,
    getSingleProductDetails,
    createReviewProduct,
    CreateSingleProductDetails,
    adminDeleteProduct,
    adminUpdateProduct,
    getTopRatedProduct,
    getAllProductCategory,
    getProductStats

} from './product/productReducer'
import {

    addProductToCart,
    addProductToBag,
    calculateBagItem,
    removeBagItem,
    ClearBagData,
    clearCartAlert,
    increaseBagQty,
    decreaseBagQty,
    onCartAlert,
    clearCartMessage,
} from './bag/bagSlice'

import {
    clearUserAlertError,
    ClearUserInfo,
    saveShippingAddress,
    savePaymentType,
    ClearauthInfo,
    handleUserSearch,
    getUserPage,
    getUser,
} from './user/userSlice'

import {
    registerCustomer,
    loginCustomer,
    getAllCustomer,
    getSingleCustomer,
    adminUpdateCustomer,
    adminDeleteCustomer,
    UpdateProfile,
    getUserStats
} from './user/userReducer'

import {
    createCustomersOrder,
    getCustomerOrder,
    updateCustomersOrderToPaid,
    getAllCustomersOrder,
    getCustomerOrderById,
    updateCustomersOrderToIsDelivered,
    getCustomerOrderStats,
    handleStripeCheckout,
    handlePaypalKey
} from './order/orderReducer'
import {
    orderPayReset,
    orderDelieveredReset,
    getOrderPage,
} from './order/orderSlice'

export {
    onToggle,
    offToggle,
    getAllProduct,
    adminDeleteProduct,
    createReviewProduct,
    adminUpdateProduct,
    getPage,
    getSingleProductDetails,
    clearProductAlert,
    handleCategoryFilter,
    getColor,
    getSort,

    clearReviewAction,
    getTopRatedProduct,
    getAllProductCategory,
    getProductStats,
    CreateSingleProductDetails,

    addProductToCart,
    getLimit,
    handleProductSearch,
    getSearch,
    getProduct,
    clearProductDetails,
    addProductToBag,
    calculateBagItem,
    removeBagItem,
    ClearBagData,
    clearCartAlert,
    increaseBagQty,
    decreaseBagQty,
    onCartAlert,
    clearCartMessage,
    getRating,
    clearUserAlertError,
    ClearUserInfo,
    UpdateProfile,
    getUserStats,
    registerCustomer,
    loginCustomer,
    getAllCustomer,
    getSingleCustomer,
    adminUpdateCustomer,
    adminDeleteCustomer,
    saveShippingAddress,
    savePaymentType,
    ClearauthInfo,
    handleUserSearch,
    getUserPage,
    getUser,

    createCustomersOrder,
    getCustomerOrder,
    updateCustomersOrderToPaid,
    orderPayReset,
    orderDelieveredReset,
    getOrderPage,
    getAllCustomersOrder,
    getCustomerOrderById,
    updateCustomersOrderToIsDelivered,
    getCustomerOrderStats,
    handleStripeCheckout,
    handlePaypalKey,

    toggleStorageTheme,
    onloader,
    offloader,
    ToggleSidebar,
    offSidebar,
    onTaskModal,
    offTaskModal,
    ToggleTaskModal,

    onSearchModal,
    offSearchModal,
    ToggleSearchModal

}