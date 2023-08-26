import { useState } from "react";
import "./Pages.css";
import { NavLink } from "react-router-dom";

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

function Pages() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="contant">
      <nav className="navbar">
        <div className="container">
          <div className="logo">Istanjourney</div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <button className="btn">Book a Tour</button>
        </div>
      </nav>
      <div className="first-section">
        <div className="text">
          <p className="text-in">Discover Istanbul's Hidden Gems</p>
          <p className="title-in">
            Its vibrant culture, delicious cuisine, and welcoming people make it
            a must-visit destination for any traveler seeking adventure, beauty,
            and inspiration.
          </p>
          <button className="read-more">Read More</button>
        </div>
        <div className="rectangle">
          <img
            width={"100%"}
            height={"100%"}
            src="https://s3-alpha-sig.figma.com/img/d872/4eb8/ed6bd3f63d8f6f3fe66ada8a33f090b9?Expires=1693785600&Signature=WGsJn0sKNOlU7RnzTfxt5SBuhXyMCqjeLYrZlaTfIuFphQA9kbHYgpfSYLilVl1NUQnXnDWSqo~EZX5VR2fKAp56vmd4Gc0PP4ojoKTO4fLvmqPzWQ~PMo6kWtujgGjS7ygd4D89x4cXziyjz899icXktYhp~oFNuNyovbtB1fFUu447kXINRKLEBZZdahBMEcmwLQC-UGCy-mWmx5oo8A0kdpXxovpy1l8z1XoqY2poLJDtcsaWcLXr6nHFLwbmG0UkMRppZnqvpWWE-SjO-ZA52h0KWA96SvJxKKMckgt86URh0vhxrDnH0M8bNLogf6L1nG~UGOdDmP-vG-kUVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="dil"
          />
        </div>
        <button className="read-more-none">Read More</button>
      </div>
      <div className="second-section">
        <div className="about-us">
          <a href="#">About us</a>
          <h1 className="about-title">
            One of the most popular travel agencies in 2023
          </h1>
        </div>
        <div className="tourets">
          <div className="img">
            <img
              width={"100%"}
              height={"100%"}
              src="https://s3-alpha-sig.figma.com/img/a0cb/a069/cbb91ef4d215bbd5154740d324687cc4?Expires=1693785600&Signature=TtinTbg0FfDbLFZJnxCEN~JWx40bSnvZrC1uSNPVTuK8MlT74no70R3XYYGFxLyRUoyCJYURsEqKNNMB4CaFznxrMcr6~5Uiq~DrprR7AoxVm-kxzwpTyceQDdPlq78ybuRDLmTjELuIkj4wL3FEa7M4hw8U5KCgtnv0P3Dke2ZtbbE11m5ZgtU3J7tnR-U8-LA~B8CVWfu1jXX~Tducx4NHzRXP6bP9NwXkep7pl2D-9nrGC7VwUSZnGIWr-VuXYX3qp6~nxCQ7COWEjVmGmSMpLbpaf9JUEYoAyYDDcAPurHi8J0OHSsOgt145YNncPpgN3IyyJRv7WjIVK-2hDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="tours"
            />
          </div>
          <div className="our-advantages">
            <div className="namber-tourest">
              <span>10000+</span>
              <br />
              <p>tourists have already got to know Istanbul with us </p>
            </div>
            <div className="years-agency">
              <span>10</span>
              <br />
              <p>years of experience in conducting tours in Istanbul</p>
            </div>
            <div className="rating-tourists">
              <span>99%</span>
              <br />
              <p>of tourists gave excellent rating our agency </p>
            </div>
            <div className="languages">
              <span>15+</span>
              <br />
              <p>languages in which excursions are conducted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pages;
