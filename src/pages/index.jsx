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
              <img className="is-rounded" src="/assets/me.jpg" />
            </figure>
            <h1 className="title">Łukasz Zygmański</h1>
            <h2 className="subtitle">Senior Software Engineer</h2>
          </div>
        </div>
      </div>
      <div className="contact has-text-right">
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
        <br />

        <a className="logotype" href="/">
          <img
            src="/assets/logotype.svg"
            alt="nayment"
            style={{
              width: 130,
            }}
          />
        </a>
      </div>
    </>
  )
}

export default Home
