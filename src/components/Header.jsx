import React from "react"
import DisplayToggle from "./DisplayToggle"

import logoUrl from "../assets/desktop/logo.svg"

export default function Header(props) {
  function handleClick(e) {
    e.preventDefault()
    document.querySelector(".logo").blur()
    document.querySelector(".btn-return-home").blur()
    console.log(e.target)
    props.switchViewMode(null)
  }

  return (
    <header className="header">
      <div className="title-display-container width-default">
        <button
          type="button"
          aria-label="Return to home page"
          className="btn-return-home"
          onClick={e => handleClick(e)}
        >
          <img className="logo" src={logoUrl} alt="Devjobs logo" />
        </button>
        <DisplayToggle />
      </div>
    </header>
  )
}