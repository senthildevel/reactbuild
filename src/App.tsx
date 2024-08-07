import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserList from "./components/UserList";
import logo from "/logo.png";

const App = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/reactbuild">
              <img src={logo} alt="Courseinn Logo" width="200" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/reactbuild" end={true}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/reactbuild/users"
                    end={true}
                  >
                    Users
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/reactbuild/" element={<Home />}></Route>
          <Route path="/reactbuild/users" element={<UserList />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
