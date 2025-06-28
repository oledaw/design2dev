import React from "react";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout; 