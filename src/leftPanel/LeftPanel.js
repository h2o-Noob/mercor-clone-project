import React, { Fragment } from 'react'
import "./LeftPanel.css"
import logo from "../assets/images/logo.png"
import leftArrow from "../assets/icons/leftArrow.png"
import addSquare from "../assets/icons/add-square.png"
import dot1 from "../assets/images/dot1.png"
import dot2 from "../assets/images/dot2.png"
import dot3 from "../assets/images/dot3.png"
import dot4 from "../assets/images/dot4.png"
import card from "../assets/images/thoughtCard.png"
import { Element3, Message, TaskSquare, Profile2User, Setting2, AddSquare } from 'iconsax-react';


function LeftPanel() {
  return (
    <Fragment>
      <div className="div">
        <div className="left">

          <div className="top">
            <div className="topLeft">
              <img src={logo} alt="" />
              <h1>Project M.</h1>
            </div>

            <div className="topRight">
              <img src={leftArrow} />
            </div>
          </div>

          <div className="middle">
            <ul>
              <li><Element3 size="24" color="#787486" /> <span>Home</span></li>
              <li><Message size="24" color="#787486" /><span>Messages</span></li>
              <li><TaskSquare size="24" color="#787486" /><span>Task</span></li>
              <li><Profile2User size="24" color="#787486" /><span>Members</span></li>
              <li><Setting2 size="24" color="#787486" /><span>Setiings</span></li>
            </ul>
          </div>

          <hr />

          <div className="bottom">
            <div>
              <h2>My Projects</h2>
              <AddSquare size="16" color="#787486" variant="Outline"/>
            </div>
            <div className="list">
              <div>
                <img src={dot1} />
                <span>
                  Mobile App
                </span>
              </div>
              <div>
                <img src={dot2} />
                <span>
                  Website Redesign
                </span>
              </div>
              <div>
                <img src={dot3} />
                <span>
                  Design System
                </span>
              </div>
              <div>
                <img src={dot4} />
                <span>
                  Wireframes
                </span>
              </div>
            </div>
            <div className="box">
              <img src={card} />
            </div>
            <h1>.</h1>
            <h1>.</h1>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LeftPanel