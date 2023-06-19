import React, { Fragment } from 'react'
import "./Header.css"
import addSquare from "../../../assets/icons/add-square.png"
import iconGroup from "../../../assets/icons/icon-group.png"
import { Filter, ArrowDown2, Calendar1, Profile2User } from 'iconsax-react';


import avatar6 from "../../../assets/avatars/avatar6.png"
import menu from "../../../assets/icons/random.png"


function Header() {
    return (
        <Fragment>
            <div className="hed">
                <div className="hedTop">
                    <div className="title">
                        <h1>Mobile App</h1>
                        <img src={iconGroup} />
                    </div>
                    <div className="hedTopAvatars">
                        <img src={addSquare} alt="" />
                        <span>Invite</span>
                        <img src={avatar6} alt="" />
                    </div>

                </div>

                <div className="hedBottom">
                    <div className="leftBtn">
                        <button>
                            <Filter size="18" color="#787486" variant="TwoTone" />
                            <span>Filter</span>
                            <ArrowDown2 size="18" color="#787486" variant="TwoTone" />
                        </button>
                        <button>
                            <Calendar1 size="18" color="#787486" />
                            <span>Today</span>
                            <ArrowDown2 size="18" color="#787486" variant="TwoTone" />
                        </button>
                    </div>
                    <div className="hedRightBtn">
                        <button>
                            <Profile2User size="18" color="#787486" />
                            <span>Share</span>
                        </button>
                        <img src={menu} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Header