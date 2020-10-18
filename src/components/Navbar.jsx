import React from "react"

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img
            src="/assets/logo.svg"
            alt="nayment"
            style={{
              width: 30,
              maxHeight: "auto",
            }}
          />
        </a>
      </div>
    </nav>
  )
}

export default Header
