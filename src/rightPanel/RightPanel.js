import React, { Fragment } from 'react'
import Main from './main/Main'
import Navbar from './navbar/Navbar'
import "./RightPanel.css"

function RightPanel() {
    return (
        <Fragment>
            <div className='right'>
                <Navbar />
                <Main />
            </div>
        </Fragment>
    )
}

export default RightPanel