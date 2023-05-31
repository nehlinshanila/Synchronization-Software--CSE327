import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./frontpage.css"; // Import the CSS file

const Frontpage = () => {
  useEffect(() => {
    const handleScroll = (sectionClass) => {
      const section = document.querySelector(sectionClass);
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    };

    const aboutLink = document.querySelector(".about-link");
    aboutLink.addEventListener("click", () => handleScroll(".section-about"));

    const servicesLink = document.querySelector(".services-link");
    servicesLink.addEventListener("click", () =>
      handleScroll(".section-services")
    );

    return () => {
      aboutLink.removeEventListener("click", () =>
        handleScroll(".section-about")
      );
      servicesLink.removeEventListener("click", () =>
        handleScroll(".section-services")
      );
    };
  }, []);

  return (
    <div className="frontpage-container">
      <header>
        <h1 className="frontpage-heading">Welcome to My Website</h1>

        <nav className="frontpage-nav">
          <ul>
            <li>
              <a className="about-link" href="#">
                About
              </a>
            </li>

            <li>
              <a a className="services-link" href="#">
                Services
              </a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="section-about">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          justo vitae mauris ultricies sollicitudin et at turpis. Mauris id
          lacus ac elit venenatis feugiat. Vestibulum sit amet nisl a est
          placerat ultrices. Nunc vestibulum, mauris ac lacinia dapibus, sem
          sapien mattis lectus, sit amet posuere mi felis vel massa. Nullam vel
          mauris at ex tincidunt mattis. Phasellus dignissim condimentum ex, sit
          amet lobortis tortor gravida at. Integer nec sem ac risus faucibus
          consectetur. Sed vitae leo ac diam viverra vulputate. Aenean sit amet
          vulputate mauris.
        </p>
      </section>

      <section className="section-services">
        <h2>Our Services</h2>
        <ul>
          <li>Web Design</li>
          <li>Graphic Design</li>
          <li>Mobile App Development</li>
          <li>SEO Services</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Frontpage;
