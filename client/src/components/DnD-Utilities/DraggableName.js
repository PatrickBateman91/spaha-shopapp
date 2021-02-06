import React from 'react';
import {ItemTypes}from './Utilities';
import {useDrag} from 'react-dnd';

const DraggableName = (props) => {

    const [{isDragging}, drag] = useDrag({
        item: {
            type:ItemTypes.CARD,
            name: props.person,
            id: props.id
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
          }),
    })


    return (
        <>
        <div
        ref={drag}
        className={`${props.classNameToDisplay} ${isDragging ? 'onDrag' : ""}`}
        id={props.id}
        key={props.person}
        onClick={(e) => props.itemOnClick(e, props.person, props.itemClicked)}>
        {props.person}
    </div>
    </>
    );
};

export default DraggableName;