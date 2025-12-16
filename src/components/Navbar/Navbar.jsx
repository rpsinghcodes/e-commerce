import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/context";
import { Heart, ShoppingCart, Package, Store, LogOut, Menu, X } from "lucide-react";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const { cartProducts, wishListProducts, user, logout, orders, userOrder } = useContext(CartContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Brand / Logo */}
          <div className="flex items-center gap-4">
            <Link className="text-2xl font-bold text-gray-800 tracking-tight" to="#">
              SafeCart
            </Link>
            {/* Desktop Search */}
            <div className="hidden lg:block w-80">
               <SearchBar/>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-6 text-sm font-medium text-gray-600 mb-0">
              {user.isSellerLogedIn ? (
                <>
                  <li><Link className="hover:text-blue-600 transition-colors" to="/seller">Dashboard</Link></li>
                  <li><Link className="hover:text-blue-600 transition-colors" to="/addproduct">Add Product</Link></li>
                  <li><Link className="hover:text-blue-600 transition-colors" to="/order">Orders</Link></li>
                </>
              ) : (
                <>
                  <li><Link className="hover:text-blue-600 transition-colors mb-0" to="/">Home</Link></li>
                  <li><Link className="hover:text-blue-600 transition-colors mb-0" to="/about">About</Link></li>
                  <li><Link className="hover:text-blue-600 transition-colors mb-0" to="/contact">Contact</Link></li>
                </>
              )}
            </ul>

            {/* Right Side Icons */}
            <div className="flex items-center gap-5 text-gray-700">
              {user.isUserLogedIn ? (
                <>
                  <Link to="/wishlist" className="relative hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6" />
                    {wishListProducts?.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{wishListProducts?.length}</span>}
                  </Link>
                  <Link to="/cart" className="relative hover:text-blue-600 transition-colors">
                    <ShoppingCart className="w-6 h-6" />
                    {cartProducts?.length > 0 && <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartProducts?.length}</span>}
                  </Link>
                   <Link to="/my-orders" className="relative hover:text-green-600 transition-colors">
                    <Package className="w-6 h-6" />
                    {userOrder?.length > 0 && <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{userOrder?.length}</span>}
                  </Link>
                </>
              ) : null}

              {user.isUserLogedIn || user.isSellerLogedIn ? (

                 <div className="relative pl-4 border-l border-gray-200 ml-4 group">
                   <button 
                     onClick={() => setIsProfileOpen(!isProfileOpen)}
                     className={`flex items-center gap-3 p-1 rounded-full transition-all duration-200 ${isProfileOpen ? 'ring-2 ring-blue-100 bg-blue-50' : 'hover:bg-gray-50 bg-transparent'}`}
                   >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-md flex items-center justify-center text-white font-bold text-sm border-2 border-white ring-1 ring-gray-100 uppercase">
                        {user.userName?.[0]}
                      </div>
                      <span className="hidden xl:block text-sm font-semibold text-gray-700 capitalize leading-tight mr-2">{user.userName}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-gray-400 transition-transform duration-200 hidden xl:block ${isProfileOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                   </button>

                   {/* Profile Dropdown */}
                   {isProfileOpen && (
                     <>
                        <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100/50 ring-1 ring-black/5 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 origin-top-right">
                           {/* Header */}
                           <div className="px-4 py-2 bg-gray-50/50 border-b border-gray-100" >
                              <p className="text-sm font-bold text-gray-900 capitalize mb-0">{user.userName}</p>
                              <p className="text-xs text-gray-500 font-medium truncate mb-0">{user.email}</p>
                           </div>

                           {/* Stats Grid - Hide for Sellers */}
                           {!user.isSellerLogedIn && (
                             <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100 bg-white">
                                <Link to="/wishlist" className="flex flex-col items-center justify-center py-3 hover:bg-gray-50 transition-colors group" onClick={() => setIsProfileOpen(false)}>
                                   <div className="relative">
                                      <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                                      {wishListProducts?.length > 0 && <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border border-white"></span>}
                                   </div>
                                   <span className="text-[10px] font-medium text-gray-500 mt-1">Wishlist</span>
                                   <span className="text-xs font-bold text-gray-900">{wishListProducts?.length || 0}</span>
                                </Link>
                                
                                <Link to="/cart" className="flex flex-col items-center justify-center py-3 hover:bg-gray-50 transition-colors group" onClick={() => setIsProfileOpen(false)}>
                                   <div className="relative">
                                      <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                      {cartProducts?.length > 0 && <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-600 rounded-full border border-white"></span>}
                                   </div>
                                   <span className="text-[10px] font-medium text-gray-500 mt-1">Cart</span>
                                   <span className="text-xs font-bold text-gray-900">{cartProducts?.length || 0}</span>
                                </Link>

                                <Link to="/my-orders" className="flex flex-col items-center justify-center py-3 hover:bg-gray-50 transition-colors group" onClick={() => setIsProfileOpen(false)}>
                                   <Package className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                                   <span className="text-[10px] font-medium text-gray-500 mt-1">Orders</span>
                                   <span className="text-xs font-bold text-gray-900">{userOrder?.length || 0}</span>
                                </Link>
                             </div>
                           )}

                           {/* Menu Items */}
                           <div className="p-1 space-y-0.5">
                             {user.isSellerLogedIn && (
                                <Link to='/order' className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors group" onClick={() => setIsProfileOpen(false)}>
                                   <Store className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                   <span>My Shop</span>
                                   {orders?.length > 0 && <span className="ml-auto text-xs font-bold text-white bg-blue-600 px-1.5 py-0.5 rounded-full">{orders.length}</span>}
                                </Link>
                             )}
                             
                             <button
                               onClick={() => { logout(); setIsProfileOpen(false); }}
                               className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-left group"
                             >
                                <LogOut className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                               Sign Out
                             </button>
                           </div>
                        </div>
                     </>
                   )}
                 </div>
              ) : (
                <div className="flex items-center gap-3">
                   <Link to="/login" className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                      Login
                   </Link>
                   <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-sm">
                      Register
                   </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-4">
             {/* Show User Actions on Mobile Header? Just Cart/Wishlist for quick access */}
             {user.isUserLogedIn && (
               <Link to="/cart" className="relative text-gray-700">
                  <ShoppingCart className="w-6 h-6" />
                  {cartProducts?.length > 0 && <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartProducts?.length}</span>}
               </Link>
             )}
             
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="text-gray-700 hover:text-blue-600 focus:outline-none"
             >
               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>

        {/* Mobile Search Bar Row (Visible always on mobile below brand row) */}
        <div className="lg:hidden mt-3 pb-2">
           <SearchBar/>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[120px] bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-full shadow-lg border-t border-gray-100 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
             <div className="flex flex-col p-4 gap-4">
                {/* Mobile Links */}
                {/* Mobile Links */}
                {user.isSellerLogedIn ? (
                   <>
                     <Link to="/seller" className="text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                     <Link to="/addproduct" className="text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Add Product</Link>
                     <Link to="/order" className="text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Orders</Link>
                   </>
                ) : (
                   <>
                     <Link to="/" className="text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                     <Link to="/about" className="text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                     <Link to="/contact" className="text-gray-700 font-medium py-2 border-b border-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                   </>
                )}
                
                {/* Mobile User Actions */}
                {user.isUserLogedIn || user.isSellerLogedIn ? (
                  <div className="flex flex-col gap-3 mt-2">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 font-bold text-xl uppercase">
                          {user.userName?.[0]}
                       </div>
                       <div className="flex flex-col">
                          <span className="font-semibold text-gray-800 capitalize">{user.userName}</span>
                          <span className="text-xs text-gray-500 capitalize">{user.isSellerLogedIn ? 'Seller Account' : 'Shopper Account'}</span>
                       </div>
                     </div>

                     <div className="grid grid-cols-2 gap-3 mt-2">
                        {user.isUserLogedIn && (
                          <>
                            <Link to="/wishlist" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                               <Heart className="w-4 h-4 text-red-500" /> Wishlist
                            </Link>
                            <Link to="/my-orders" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                               <Package className="w-4 h-4 text-green-600" /> My Orders
                            </Link>
                          </>
                        )}
                        {user.isSellerLogedIn && (
                            <Link to="/order" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                               <Store className="w-4 h-4 text-blue-600" /> My Shop
                            </Link>
                        )}
                     </div>
                     
                     <button 
                        onClick={() => { logout(); setIsMobileMenuOpen(false); }} 
                        className="mt-2 w-full flex items-center justify-center gap-2 py-2 text-red-500 border border-red-100 rounded-lg hover:bg-red-50"
                     >
                       <LogOut className="w-4 h-4" /> Logout
                     </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 mt-2">
                     <Link to="/login" className="w-full text-center py-2 text-blue-600 border border-blue-600 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                        Login
                     </Link>
                     <Link to="/signup" className="w-full text-center py-2 text-white bg-blue-600 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                        Register
                     </Link>
                  </div>
                )}
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
