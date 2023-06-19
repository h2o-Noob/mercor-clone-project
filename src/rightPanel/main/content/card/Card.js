import React, { Fragment } from 'react'
import "./Card.css"
import { Message, FolderMinus } from 'iconsax-react';


function Card({ priority, title, description, id, avatars, image, comments, files }) {

    console.log(avatars)
    return (
        <div className="card">
            <div className="cardHeader">
                <div>
                    <h5 style={{
                        backgroundColor: priority == "low" ? "#DFA87433" : priority == "high" ? "#D8727D1A" : "#83C29D33",
                        color: priority == "low" ? "#D58D49" : priority == "high" ? "#D8727D" : "#68B266"
                    }}>
                        {priority}
                    </h5>
                </div>
                <div>
                    <h5>...</h5>
                </div>
            </div>
            <div className="cardTitle">
                <h2>{title}</h2>
            </div>
            <span>
                {description}
            </span>
            <img src={image} />
            <div className="cardFooter">
                <div className="images">
                    {avatars ?
                        <img src={avatars} />
                        :
                        <h1>hi</h1>
                    }
                </div>
                <h4>
                    <Message size="15" color="#787486" variant="Outline" />
                    {comments} <span>comments</span>
                    <FolderMinus size="15" color="#787486" variant="Outline"/>
                    {files} <span>files</span>
                </h4>

            </div>
        </div>
    )
}

export default Card