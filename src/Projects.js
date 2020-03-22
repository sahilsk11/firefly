import React from 'react';
import Navbar from './Header.js';
import SignUp from './Footer.js';

function Projects() {
  const styles = {

  };

  return (
    <div>
      {Landing()}
      {ProjectsContainer()}
      {SignUp()}
    </div>
  );
}

function Landing() {
  const styles = {
    container: {
      position: "relative",
      minHeight: "500px",
      height: "50vh",
      background: "linear-gradient(234.38deg, #73C5ED -1.51%, #5C6BCF 23.02%, #5C6CD0 48.26%, #44228C 91.38%)",
      overflow: "hidden"
    },
    backdrop: {
      height: "100%",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)"
    },
    titleContainer: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)"
    },
    title: {
      textAlign: "center",
      color: "white",
      fontSize: "50px",
      marginBottom: "0px",
      fontWeight: "600"
    },
    subtitle: {
      textAlign: "center",
      color: "white",
      fontWeight: "500",
      fontSize: "20px"
    }
  };
  return (
    <div style={styles.container}>
      <img src="./img/symbol-bg.svg" style={styles.backdrop} />
      {Navbar({ active: "projects" })}
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Firefly Projects</h1>
        <h3 style={styles.subtitle}>Build real projects for companies & win prizes.</h3>
      </div>
    </div>
  );
}

function ProjectsContainer() {
  const styles = {
    container: {
      width: "90%",
      margin: "0px auto",
      display: "block",
      maxWidth: "1200px",
      paddingTop: "50px",
      paddingBottom: "100px"
    },
    title: {
      fontSize: "25px",
      fontWeight: "500",
      paddingLeft: "4px"
    },
  };
  const projects = [
    {
      company: "Microsoft",
      title: "COVID-19: Open Crisis Challenge",
      description: <p>OpenCrisisBoard is an open-source ready-to-deploy application that builds community resilience by letting users communicate on needs-focused message boards, such as Volunteering Services (Think grocery delivery for elderly) and other needs like Medication, Food & Water, Shelter, and more.</p>,
      img: "./img/microsoft-logo.png",
      startColor: "#D75427",
      endColor: "#E7AA3C"
    },
    {
      company: "Airtable",
      title: "COVID-19: Open Crisis Challenge",
      description: <p>OpenCrisisBoard is an open-source ready-to-deploy application that builds community resilience by letting users communicate on needs-focused message boards, such as Volunteering Services (Think grocery delivery for elderly) and other needs like Medication, Food & Water, Shelter, and more.</p>,
      img: "./img/airtable-logo.png",
      startColor: "#2B27D7",
      endColor: "#C53CE7"
    },
    {
      company: "People.AI",
      title: "COVID-19: Open Crisis Challenge",
      description: <p>OpenCrisisBoard is an open-source ready-to-deploy application that builds community resilience by letting users communicate on needs-focused message boards, such as Volunteering Services (Think grocery delivery for elderly) and other needs like Medication, Food & Water, Shelter, and more.</p>,
      img: "./img/peopleai-logo.png",
      startColor: "#1F6314",
      endColor: "#D2FB5F"
    }
  ]
  return (
    <div style={styles.container}>
      <h5 style={styles.title}>Current Projects</h5>
      <div style={styles.projectContainer}>
        {ProjectContainer(projects[0])}
        {ProjectContainer(projects[1])}
        {ProjectContainer(projects[2])}
      </div>
    </div>
  );
}

function ProjectContainer(props) {
  const styles = {
    container: {
      width: "100%",
      minHeight: "250px",
      backgroundColor: "#FAFAFA",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      borderRadius: "30px",
      marginBottom: "60px",
      display: "flex",
      position: "relative"
    }
  };

  return (
    <div style={styles.container}>
      {ProjectCover(props)}
      {ProjectDetails(props)}
      {ProjectStats(props)}
    </div>
  );
}

function ProjectCover(props) {
  const size = "160px";
  const styles = {
    container: {
      height: "100%",
      width: "260px",
      borderRadius: "30px 0px 0px 30px",
      minWidth: "100px",
      background: "linear-gradient(223.33deg, " + props.startColor + " -0.32%, " + props.endColor + " 104.86%)",
      position: "relative",
      overflow: "hidden"
    },
    backdrop: {
      width: "100%"
    },
    imgContainer: {
      width: size,
      height: size,
      backgroundColor: "white",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      borderRadius: "50%"
    },
    imgWrapper: {
      position: "relative",
      width: "100%",
      height: "100%"
    },
    img: {
      maxHeight: "60%",
      maxWidth: "80%",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)"
    }
  };

  return (
    <div style={styles.container}>
      <img src="./img/symbol-sm.svg" style={styles.backdrop} />
      <div style={styles.imgContainer}>
        <div style={styles.imgWrapper}>
          <img src={props.img} style={styles.img} />
        </div>
      </div>
    </div>
  );
}

function ProjectDetails(props) {
  const styles = {
    container: {
      marginLeft: "30px",
      width: "calc(100% - 500px)"
    },
    companyName: {
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: "22px",
      fontWeight: "500",
      marginTop: "20px",
      marginBottom: "0px"
    },
    title: {
      marginTop: "8px",
      fontWeight: "500",
      fontSize: "28px"
    },
    description: {
      color: "rgba(0, 0, 0, 0.6)",
      lineHeight: "140%"
    }
  };

  return (
    <div style={styles.container}>
      <h5 style={styles.companyName}>{props.company}</h5>
      <h1 style={styles.title}>{props.title}</h1>
      <p style={styles.description}>
        {props.description}
      </p>
    </div>
  );
}

function ProjectStats(props) {
  const styles = {
    container: {
      position: "absolute",
      right: "0px",
      height: "100%",
      width: "230px",
    },
    content: {
      position: "absolute",
      left: "40%",
      top: "50%",
      transform: "translate(-50%,-50%)",
    },
    contentWrapper: {
      position: "relative",
      width: "100%",
      height: "100%"
    },
    title: {
      margin: "0px",
      fontWeight: "500",
      textAlign: "right"
    },
    dashes: {
      margin: "0px"
    },
    dueDate: {
      position: "absolute",
      top: "73px",
      left: "150px",
      color: "grey"
    },
    submissions: {
      position: "absolute",
      top: "132px",
      left: "150px",
      color: "grey"
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.content}>
          <h1 style={styles.title}>04.07</h1>
          <br />
          <h1 style={styles.title}>24</h1>
        </div>
        <p style={styles.dueDate}>project<br />due date</p>
        <p style={styles.submissions}>projects<br />submitted</p>
      </div>
    </div>
  )
}

export default Projects;