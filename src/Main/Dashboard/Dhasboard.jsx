import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Dhasboard = () => {
  //const { isAdmin } = useAdmin();

  const [data, refetch] = useCart();
  const isAdmin = true;
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto w-full h-100 flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#D1A054]">
          {isAdmin ? (
            <>
              <li>
                <Link>Admin Home</Link>
              </li>
              <li>
                <Link to="addItem">Add Items</Link>
              </li>
              <li>
                <Link className="" to="">
                  Manage Items
                </Link>
              </li>
              <li>
                <Link>Manage Bookings</Link>
              </li>
              <li>
                <Link to="allUsers">ALL Users</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>User Home</Link>
              </li>
              <li>
                <Link>Reservation</Link>
              </li>
              <li>
                <Link className="" to="myCart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge">+{data?.length}</span>
                </Link>
              </li>
              <li>
                <Link>Wallet History</Link>
              </li>
              <li>
                <Link>Add Review</Link>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome> Home
            </Link>
          </li>
          <li>
            <Link>Menu</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dhasboard;
