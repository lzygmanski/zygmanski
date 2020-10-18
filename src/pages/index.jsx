import React from "react"
import Navbar from "../components/Navbar"

import "./mystyles.scss"

const contact = {
  position: "fixed",
  bottom: 10,
  right: 10,
}

const Home = () => {
  return (
    <>
      <div className="hero is-fullheight-with-navbar">
        <div class="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <figure
              className="image container mb-4"
              style={{
                maxWidth: 200,
              }}
            >
              <img className="is-rounded" src="/assets/me.jpg" />
            </figure>
            <h1 className="title">Łukasz Zygmański</h1>
            <h2 className="subtitle">Senior Software Engineer</h2>
          </div>
        </div>
        <div className="contact has-text-right" style={contact}>
          <a
            className="has-text-primary"
            href="https://www.linkedin.com/in/lzygmanski/"
            target="_blank"
          >
            linkedin.com/in/lzygmanski
          </a>
          <br />
          <a
            className="has-text-primary"
            href="mailto:lzygmanski@nayment.pl"
            target="_blank"
          >
            lzygmanski@nayment.pl
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
