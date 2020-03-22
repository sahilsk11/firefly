import React from 'react';

function SignUp() {
  const styles = {
    container: {
      background: "linear-gradient(77.44deg, #5069EF -8.5%, #725DF4 78.64%)",
      minHeight: "300px",
      paddingTop: "40px",
    },
    subtitle: {
      textAlign: "center",
      color: "#FEC000",
      fontWeight: "800"
    },
    title: {
      textAlign: "center",
      width: "80%",
      maxWidth: "1000px",
      margin: "0px auto",
      color: "white",
      fontWeight: "600",
      lineHeight: "180%"
    },
    input: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      border: "1px solid white",
      width: "200px",
      height: "30px",
      borderRadius: "13px",
      margin: "0px auto",
      display: "block",
      marginTop: "40px",
      color: "white",
      fontSize: "17px",
      paddingLeft: "10px",
      outline: "none"
    },
    subtext: {
      display: "block",
      textAlign: "center",
      color: "rgba(255, 255, 255, 0.51)",
      fontSize: "10px",
      paddingBottom: "40px",
      marginBottom: "0px"
    }
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.subtitle}>New challenges every two weeks</h3>
      <h1 style={styles.title}>Join the Firefly community to hear about new challenges, opportunities, and internships for students.</h1>
      <input style={styles.input} placeholder="Your email" />
      <p style={styles.subtext}>Just 2 emails / month. No B.S.</p>
    </div>
  )
}

export default SignUp;