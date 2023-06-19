import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';
import "./Content.css"
import Card from "./card/Card"
import avatar1 from "../../../assets/avatars/avatar1.png"
import avatar2 from "../../../assets/avatars/avatar2.png"
import avatar3 from "../../../assets/avatars/avatar3.png"
import avatar4 from "../../../assets/avatars/avatar4.png"
import avatar5 from "../../../assets/avatars/avatar5.png"

import img1 from "../../../assets/images/img1.png"
import img2 from "../../../assets/images/img2.png"
import img3 from "../../../assets/images/img3.png"

import addSquare from "../../../assets/icons/add-square.png"

const itemsFromBackend1 = [
    {
        id: uuidv4(),
        priority: "low",
        title: "Brainstorming",
        description: "Brainstorming brings team members' diverse experience into play.",
        comments: 12,
        files: 0,
        avatars: avatar1
    },
    {
        id: uuidv4(),
        priority: "high",
        title: "Research",
        description: "User research helps you to create an optimal product for users.",
        comments: 10,
        files: 3,
        avatars: avatar2
    },
    {
        id: uuidv4(),
        priority: "high",
        title: "Wireframes",
        description: "Low fidelity wireframes include the most basic content and visuals.",
        comments: 9,
        files: 0,
        avatars: avatar1
    },
];
const itemsFromBackend2 = [
    {
        id: uuidv4(),
        priority: "low",
        title: "Onboarding Illustrations",
        image: img1,
        comments: 14,
        files: 15,
        avatars: avatar3
    },
    {
        id: uuidv4(),
        priority: "low",
        title: "Moodboard",
        image: img2,
        comments: 9,
        files: 10,
        avatars: avatar4
    },
];

const itemsFromBackend3 = [
    {
        id: uuidv4(),
        priority: "completed",
        title: "Mobile App Design",
        image: img3,
        comments: 15,
        files: 12,
        avatars: avatar5
    },
    {
        id: uuidv4(),
        priority: "completed",
        title: "Design System",
        description: "It just needs to adapt the UI from what you did before ",
        comments: 12,
        files: 15,
        avatars: avatar1
    }
];

const columnsFromBackend = {
    [uuidv4()]: {
        name: "To do",
        items: itemsFromBackend1,
    },
    [uuidv4()]: {
        name: "On Progress",
        items: itemsFromBackend2,
    },
    [uuidv4()]: {
        name: "Completed",
        items: itemsFromBackend3,
    }
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function Content() {
    const [columns, setColumns] = useState(columnsFromBackend);
    return (

        <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
            {Object.entries(columns).map(([columnId, column], index) => {
                return (
                    <div
                        className="mainCard"
                        key={columnId}
                    >
                        <div>
                            <div className="mainCardLeft">
                                <div
                                    className="dot"
                                    style={{
                                        backgroundColor: index == 0 ? "#5030E5" : index == 1 ? "#FFA500" : "#8BC48A",
                                        color: index == 0 ? "#5030E5" : index == 1 ? "#FFA500" : "#8BC48A",
                                        borderRadius: "50%",
                                        height:"10px",
                                        width:"10px"
                                    }}
                                >
                                </div>
                                <h4>{column.name}</h4>
                                <div className="count">{column.items.length}</div>
                            </div>
                            <div className="mainCardRight">
                                <img src={addSquare}/>
                            </div>
                        </div>
                        <hr style={{
                            backgroundColor: index == 0 ? "#5030E5" : index == 1 ? "#FFA500" : "#8BC48A",
                            height: "3px",
                            border: "0px"
                        }} />
                        <div className="mainCardBottom">
                            <Droppable droppableId={columnId} key={columnId}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver
                                                    ? "#BEB6E3"
                                                    : "transparent",
                                                borderStyle: snapshot.isDraggingOver
                                                    ? "dotted"
                                                    : "none",
                                                borderRadius: "10px",
                                                width: "100%",
                                                minHeight: 500
                                            }}
                                        >
                                            {column.items.map((item, index) => {
                                                return (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={item.id}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        userSelect: "none",
                                                                        width: "100%",
                                                                        margin: "0 0 8px 0",
                                                                        minHeight: "50px",
                                                                        color: "white",
                                                                        ...provided.draggableProps.style
                                                                    }}
                                                                >
                                                                    <Card
                                                                        key={item.title}
                                                                        id={item.id}
                                                                        priority={item.priority}
                                                                        title={item.title}
                                                                        description={item.description}
                                                                        image={item.image}
                                                                        avatars={item.avatars}
                                                                        comments={item.comments}
                                                                        files={item.files}
                                                                    />
                                                                </div>
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            })}
                                            {provided.placeholder}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        </div>
                    </div>
                );
            })}
        </DragDropContext>
    );
}

export default Content;
