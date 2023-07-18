import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/Home.module.css"

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <div>
      <section ref={homeRef} id="homePage" className={styles.container}>
      <h1>Home</h1>
      </section>
    </div>
  )
}

export default Home;