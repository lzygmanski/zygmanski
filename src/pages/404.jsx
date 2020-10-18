import React from "react"
import { Helmet } from "react-helmet"

import "./mystyles.scss"

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Łukasz Zygmański - Senior Software Engineer</title>
      </Helmet>
      <a className="logo" href="/">
        <img
          src="/assets/logo.svg"
          alt="nayment"
          style={{
            width: 30,
          }}
        />
      </a>
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <figure
              className="image container mb-4"
              style={{
                maxWidth: 200,
              }}
            >
              <img alt="nayment" src="/assets/logotype.svg" />
            </figure>
            <h1 className="title">404</h1>
            <h2 className="subtitle">Page not found</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
