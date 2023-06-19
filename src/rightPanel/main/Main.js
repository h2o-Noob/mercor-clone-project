import React, { Fragment } from 'react'
import "./Main.css"
import Content from './content/Content'
import Header from './header/Header'

function Main() {
  return (
    <Fragment>
      <Header />
      <div className="content">
        <Content />
      </div>
    </Fragment>
  )
}

export default Main