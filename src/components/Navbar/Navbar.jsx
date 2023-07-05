import "./Navbar.css";

// import { debounce } from "lodash";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { FaShoppingCart, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="NavContainer">
      <div className="NavLeftContainer">
        <div className="LogoContainer" onClick={() => navigate("/")}>
          <div className="Logo">
            <span>Smart</span>🧺Basket
          </div>
        </div>
        <div className="VerticleDivider"></div>
      </div>
      <div className="LocationAndSearchContainer">
        <div>
          <div className="BackArrowAndLocationContainer">
            {location.pathname === "/" ? (
              <></>
            ) : (
              <div className="BackButtonContainer">
                <BiArrowBack onClick={() => navigate(-1)} />
              </div>
            )}
            <div className="LocationContainer">
              <div>Delivery in 19 minutes</div>
              <div className="LocationDetail"></div>
            </div>
          </div>
          <div className="SmallNavRightContainer">
            <FaRegUserCircle />
          </div>
        </div>
        <div className="SearchContainer">
          <Link
            className="SearchBox"
            to="/s"
            style={{ display: location.pathname !== "/s" ? "flex" : "none" }}
          >
            <div className="SearchIcon">
              <FaSearch />
            </div>
            <div className="SearchAnimatedContainer">
              <div className="AnimatedSearchText">Search</div>
            </div>
          </Link>
          <div
            className="SearchContainer"
            style={{ display: location.pathname === "/s" ? "block" : "none" }}
          >
            <BiArrowBack
              onClick={() => navigate(-1)}
              className="SearchBackArrow"
            />
            <input type="text" />
            <IoMdClose className="SearchClose" />
          </div>
        </div>
      </div>
      <div className="NavRightContainer">
        <div className="WishlistIconContainer">
          <AiOutlineHeart className="WishlistIcon" />
        </div>
        <div className="CartContainer">
          <div className="CartIcon">
            <FaShoppingCart /> 
          </div>
          <div className="CartText">My Cart</div>
        </div>
      </div>
    </header>
  );
}
