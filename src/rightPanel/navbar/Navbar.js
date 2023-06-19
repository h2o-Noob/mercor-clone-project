import React, { Fragment } from 'react'
import "./Navbar.css"
import avatar7 from "../../assets/avatars/avatar7.png"
import notif from "../../assets/icons/notification.png"
import { SearchNormal1, Calendar2, MessageQuestion } from 'iconsax-react';


function Navbar() {
  return (
    <Fragment>
      <div className="Nav">
        <div className="navLeft">
          <div className="searchBox">
            <SearchNormal1 size="25" color="#787486" />
            <input
              type="text"
              placeholder='Search for anything...'
            />
          </div>
        </div>
        <div className="navRight">
          <div className="icons">

          </div>
          <div className="navRightAvatar">
            <div>
              <Calendar2 size="23" color="#787486" />
              <MessageQuestion size="23" color="#787486" />
              <img src={notif} />
            </div>
            <div className="navRightText">
              <span>
                Anima Agrawal
              </span>
              <br />
              <span>
                U.P, India
              </span>
            </div>
            <img src={avatar7} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar