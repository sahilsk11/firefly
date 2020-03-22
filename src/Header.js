import React from 'react';

function Navbar(props) {
  const styles = {
    navContainer: {
      position: "absolute",
      zIndex: "99",
      width: "100%"
    },
    navHeader: {
      marginTop: "43px",
      marginLeft: "5%",
      display: "flex",
      width: "109px",
      height: "40px",
      cursor: "pointer"
    },
    navImg: {
      height: "40px"
    },
    navTitle: {
      paddingLeft: "7px",
      fontWeight: "700",
      fontSize: "23px",
      paddingTop: "0px",
      marginTop: "7px",
      color: "white"
    },
    linkContainer: {
      position: "absolute",
      right: "30px",
      top: "40px"
    },
    navLink: {
      color: "rgba(255, 255, 255, 0.65)",
      marginLeft: "30px",
      fontWeight: "500"
    },
    build: {
      backgroundColor: "white",
      height: "50px",
      width: "150px",
      borderRadius: "50px",
      fontSize: "16px",
      color: "#212353",
      marginLeft: "20px",
      border: "none",
      boxShadow: "0px 5px 5px rgba(75, 93, 104, 0.1)",
      fontWeight: "600",
      outline: "none",
      cursor: "pointer"
    }
  }
  return (
    <div style={styles.navContainer}>
      <div style={styles.navHeader} onClick={() => window.location.href="."}>
        <img src="./img/nav-logo.png" style={styles.navImg} />
        <p style={styles.navTitle}>Firefly</p>
      </div>
      <div style={styles.linkContainer}>
        <a href="." style={styles.navLink}>Home</a>
        <a href="projects" style={styles.navLink}>Projects</a>
        <a href="#" style={styles.navLink}>About</a>
        <a href="#" style={styles.navLink}>For Companies</a>
        <a href="#"><button style={styles.build}>Start Building!</button></a>
      </div>
    </div>
  )
}

export default Navbar;