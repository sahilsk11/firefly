import React from 'react';
import './App.css';
import Navbar from './Header.js';
import SignUp from './Footer.js';
import Projects from './Projects.js';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/">
        {Index()}
      </Route>
      <Route path="/projects">
        {Projects()}
      </Route>
    </Router>
  )
}

function Index() {
  const globalStyles = {
    sectionTitle: {
      textAlign: "center",
      paddingTop: "40px",
      paddingBottom: "40px",
      fontWeight: "600",
      fontSize: "25px"
    }
  }
  return (
    <div>
      {Navbar()}
      {Landing()}
      {Sponsors()}
      {Discover({ globalStyles })}
      {Makers({ globalStyles })}
      {SignUp()}
    </div >
  );
}

function Landing(props) {
  const styles = {
    landingContainer: {
      height: "90vh",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#F7F8F7",
      backgroundImage: "url('./img/background.svg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    },
    spaceVector: {
      maxHeight: "100%",
      minHwidth: "100%"
    },
    clouds: {
      position: "absolute",
      left: "0px",
      minWidth: "100%",
      height: "100%"
    }
  }
  return (
    <div>
      <div style={styles.landingContainer}>
        <img src="./img/clouds + stars.svg" style={styles.clouds} />
        {Title()}
      </div>
    </div>
  )
}

function Title(props) {
  const styles = {
    container: {
      position: "absolute",
      top: "40%",
      left: "7%",
      transform: "translateY(-50%)",
    },
    title: {
      color: "white",
      fontSize: "45px",
      width: "400px"
    },
    hack: {
      backgroundColor: "#FEC000",
      width: "180px",
      display: "block",
      textAlign: "center",
      height: "50px",
      lineHeight: "50px",
      color: "white",
      fontWeight: "800",
      borderRadius: "30px",
      boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
      marginTop: "30px"
    },
    company: {
      backgroundColor: "#F1F1F1",
      width: "570px",
      height: "34px",
      textAlign: "center",
      display: "block",
      lineHeight: "34px",
      marginTop: "40px",
      borderRadius: "40px",
      fontWeight: "600",
      color: "#461F97"
    }
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Build real projects for companies & win prizes</h1>
      <a href="#" style={styles.hack}>Start Building!</a>
      <a href="#" style={styles.company}>COMPANIES: Crowdsource innovation from thousands of students →</a>
    </div>
  )
}

function Sponsors(props) {
  const styles = {
    container: {
      backgroundColor: "#F7F8F7",
      width: "100%",
    },
    subtitle: {
      fontSize: "20px",
      margin: "0px",
      paddingTop: "30px",
      textAlign: "center"
    },
    imgContainer: {
      display: "flex",
      paddingTop: "30px",
      maxWidth: "1000px",
      width: "80%",
      margin: "0px auto",
      justifyContent: "space-evenly",
      height: "100px",
      paddingBottom: "30px"
    },
    imgWrapper: {
      width: "24%",
      position: "relative",
    },
    img: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      maxWidth: "80%",
      maxHeight: "70%"
    }
  }
  return (
    <div style={styles.container}>
      <p style={styles.subtitle}>Firefly hosts projects from top companies & startups</p>
      <div style={styles.imgContainer}>
        <div style={styles.imgWrapper}>
          <img src="./img/twitch.png" style={styles.img} />
        </div>
        <div style={styles.imgWrapper}>
          <img src="./img/airbnb.png" style={styles.img} />
        </div>
        <div style={styles.imgWrapper}>
          <img src="./img/brex.png" style={styles.img} />
        </div>
        <div style={styles.imgWrapper}>
          <img src="./img/producthunt.png" style={styles.img} />
        </div>

      </div>
    </div>
  )
}

function Discover(props) {
  const styles = {
    cardContainer: {
      display: "flex",
      width: "90%",
      margin: "0px auto",
      justifyContent: "space-evenly",
      flexWrap: "wrap"
    },
    link: {
      textDecoration: "underline",
      textAlign: "center",
      display: "block",
      marginBottom: "50px",
      fontWeight: "500"
    }
  }
  return (
    <div>
      <h3 style={props.globalStyles.sectionTitle}>How It Works</h3>
      <div style={styles.cardContainer}>
        {DiscoverCard({
          title: "Discover cool projects",
          description: "Firefly partners with top startups and companies to host cool challenges. Firefly partners with top startups and companies to host cool challenges.",
          img: "./img/compass.svg"
        })}
        {DiscoverCard({
          title: "Work with talented students",
          description: "Firefly partners with top startups and companies to host cool challenges. Firefly partners with top startups and companies to host cool challenges.",
          img: "./img/network.svg"
        })}
        {DiscoverCard({
          title: "Get Rewarded",
          description: "Firefly partners with top startups and companies to host cool challenges. Firefly partners with top startups and companies to host cool challenges.",
          img: "./img/cash.svg"
        })}
      </div>
      <a href="#" style={styles.link}>View our current projects</a>
    </div>
  )
}

function Makers(props) {
  const styles = {
    container: {
      backgroundColor: "#FAFAFA"
    },
    cardContainer: {
      display: "flex",
      width: "90%",
      margin: "0px auto",
      justifyContent: "space-evenly",
      flexWrap: "wrap"
    },
    badge: {
      margin: "0px auto",
      display: "block",
      marginBottom: "30px"
    }
  }
  return (
    <div style={styles.container}>
      <h3 style={props.globalStyles.sectionTitle}>Meet Top Firefly Makers</h3>
      <div style={styles.cardContainer}>
        {DiscoverCard({
          title: "Linus Lee",
          description: "Linus spends most of his free time working on side projects ranging from an audio travel diary to creative coding tools to his own programming language.",
          img: "./img/linus.png",
          person: true,
          children: <img style={styles.badge} src="./img/badge.svg" />
        })}
        {DiscoverCard({
          title: "Katherine Huang",
          description: "Linus spends most of his free time working on side projects ranging from an audio travel diary to creative coding tools to his own programming language.",
          img: "./img/kat.png",
          person: true,
          children: <img style={styles.badge} src="./img/badge.svg" />
        })}
        {DiscoverCard({
          title: "Lachlan Campbell",
          description: "Linus spends most of his free time working on side projects ranging from an audio travel diary to creative coding tools to his own programming language.",
          img: "./img/lachlan.png",
          person: true,
          children: <img style={styles.badge} src="./img/badge.svg" />
        })}
      </div>
    </div>
  )
}

function DiscoverCard(props) {
  const personSpotlight = props.person === true;
  const iconSize = personSpotlight ? "150px" : "60px";
  const styles = {
    card: {
      width: "300px",
      minHeight: "230px",
      backgroundColor: "#FAFAFA",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)",
      borderRadius: "30px",
      margin: "20px",
      position: "relative",
      minWidth: "230px",
      marginBottom: "50px"
    },
    cardIcon: {
      position: "absolute",
      width: iconSize,
      height: iconSize,
      borderRadius: "50%",
      backgroundColor: "#966BEA",
      left: "50%",
      transform: "translate(-50%,-50%)",

    },
    iconWrapper: {
      position: "relative",
      height: "100%"
    },
    iconImg: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      height: personSpotlight ? "100%" : "60%"
    },
    cardTitle: {
      textAlign: "center",
      paddingTop: personSpotlight ? "80px" : "40px",
      fontSize: "17px",
      fontWeight: "600",
      marginTop: "10px",
      marginBottom: "15px"
    },
    description: {
      width: "80%",
      display: "block",
      margin: "0px auto",
      color: "rgba(0, 0, 0, 0.69)",
      lineHeight: "133%",
      marginBottom: "30px"
    }
  }
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>
        <div style={styles.iconWrapper}>
          <img src={props.img} style={styles.iconImg} />
        </div>
      </div>

      <h5 style={styles.cardTitle}>{props.title}</h5>
      <p style={styles.description}>{props.description}</p>
      {props.children}
    </div>
  )
}

export default App;
