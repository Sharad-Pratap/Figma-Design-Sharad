import React from "react";
import styles from "./Home.module.css";
import logo from "../../assets/logo.png";
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import featured_logo1 from "../../assets/featured_logo1.png";
import featured_logo2 from "../../assets/featured_logo2.png";
import featured_logo3 from "../../assets/featured_logo3.png";
import featured_logo4 from "../../assets/featured_logo4.png";
import featured_logo5 from "../../assets/featured_logo5.png";
import Property from "../../components/Property";
import btn from "../../assets/btn.png";
import scope from "../../assets/scope.png";
import Whytochoose from "../../components/Whytochoose";
import quick from "../../assets/quick.png";
import tag from "../../assets/tag.png";
import { Img } from "../../components/Img";
import testimonials from "../../assets/testimonials.png";
import house1 from "../../assets/house1.png";
import house2 from "../../assets/house2.png";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navbar__menu}>
          <ul className={styles.navbar__list}>
            <li>
              <a href="#" className={styles.navbar__items}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.navbar__items}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className={styles.navbar__items}>
                Buying
              </a>
            </li>
            <li>
              <a href="#" className={styles.navbar__items}>
                Renting
              </a>
            </li>
            <li>
              <a href="#" className={styles.navbar__items}>
                Selling
              </a>
            </li>
            <li>
              <a href="#" className={styles.navbar__items}>
                Contact Us
              </a>
            </li>
          </ul>
          <button className={styles.navbar__login}>Login</button>
          <button className={styles.navbar__signup}>SignUp</button>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__subcontent}>
            <h1 className={styles.hero__title}>
              Perfect way to buy and sell a home
            </h1>
            <p className={styles.hero__text}>
              {" "}
              Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna,
              massa aliqua dui pellentesque. Ac, gravida in eget non amet eget
              purus non.
            </p>
            <img className={styles.hero__search} src={search} alt="" />
          </div>
          <div className={styles.hero__img}>
            <img src={home} alt="home" />
          </div>
        </div>
      </div>
      <div className={styles.feature}>
        <h1 className={styles.feature__title}>Featured In</h1>
        <div className={styles.feature__img}>
          <a href="#" className={styles.feature__items}>
            <img src={featured_logo1} alt="flogo1" />
          </a>
          <a href="#" className={styles.feature__items}>
            <img src={featured_logo2} alt="flogo2" />
          </a>
          <a href="#" className={styles.feature__items}>
            <img src={featured_logo3} alt="flogo3" />
          </a>
          <a href="#" className={styles.feature__items}>
            <img src={featured_logo4} alt="flogo4" />
          </a>
          <a href="#" className={styles.feature__items}>
            <img src={featured_logo5} alt="flogo5" />
          </a>
        </div>
      </div>
      <h1 className={styles.propertyHeading}>Popular Residence</h1>
      <div className={styles.propertiesContainer}>
        <Property
          title="Aliva Priva Jalvin"
          address="1087 Pin Oak Drive, Clinton, USA"
          beds="4 Beds"
          baths="2 Baths"
          sqft="2 sqft"
        />
        <Property
          title="Aliva Priva Jalvin"
          address="1087 Pin Oak Drive, Clinton, USA"
          beds="4 Beds"
          baths="2 Baths"
          sqft="2 sqft"
        />
        <Property
          title="Aliva Priva Jalvin"
          address="1087 Pin Oak Drive, Clinton, USA"
          beds="4 Beds"
          baths="2 Baths"
          sqft="2 sqft"
        />
        <div className={styles.propertyBtn}>
          <button className={styles.propertyButton}>View All Properties</button>
        </div>
      </div>
      <h1 className={styles.whytochooseHeading}>Why to choose us</h1>
      <div className={styles.propertiesContainer}>
        <Whytochoose
          scope={scope}
          title="Easy to find"
          subtext="Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec
          mattis lectus quam pretium amet facilisis."
        />
        <Whytochoose
          scope={tag}
          title="Affordable Prices"
          subtext="Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec
          mattis lectus quam pretium amet facilisis."
        />
        <Whytochoose
          scope={quick}
          title="Quickly Process"
          subtext="Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec
          mattis lectus quam pretium amet facilisis."
        />

        <Img
          src={testimonials}
          alt={testimonials}
          className={styles.testimonials}
        ></Img>
      </div>
      <div className={styles.getInTouch__container}>
        <Img className={styles.getInTouch__img} src={house1} alt={house1} />
        <Img className={styles.getInTouch__img} src={house2} alt={house2} />
        <div className={styles.getInTouch__content}>
          <div className={styles.getInTouch__subcontent}>
            <h1 className={styles.getInTouch__heading}>We help people to find homes</h1>
            <p className={styles.getInTouch__text}>
              Mauris orci donec blandit maecenas. Orci lorem purus porttitor
              massa consectetur. Neque, vestibulum sed varius magna et at. Eu,
              adipiscing morbi augue justo. Nibh laoreet volutpat quis velit.
              Blandit aliquam donec sed morbi congue eget lorem viverra porta id
              lobortis.
            </p>
            <button className={styles.getInTouch__btn}> Get In Touch</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
