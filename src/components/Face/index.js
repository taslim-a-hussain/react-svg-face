import React, {useRef, useEffect, useState} from 'react';
import {select} from 'd3';
import './index.scss';


const Face = React.forwardRef((props,canvasRef) => {
    const faceNode = useRef();

    
    // Component did mount
    useEffect(() => {

        // Get the canvas width and height
        const canvas = select(canvasRef.current);
        const canvasWidth = Math.floor(canvas.node().getBoundingClientRect().width);
        const canvasHeight = Math.floor(canvas.node().getBoundingClientRect().height);

        // Get the face size (square)
        const face = select(faceNode.current);
        const faceSize = face.node().getBoundingClientRect().width / 2;

        // Position face in the center of the canvas
        face.attr('transform', `translate(${canvasWidth/2 - faceSize}, ${canvasHeight/2 - faceSize})`);

        // Create face circle
        const faceCircleG = face.append('g')
                .attr('transform', `translate(${faceSize}, ${faceSize})`);
                faceCircleG.append('circle')
                    .attr('r', faceSize)
                    .attr('class', 'face-circle');

    }, []); 
    
    return (
        <React.Fragment>
            <svg ref={faceNode} className="face"></svg>
            {console.log('Face component rendered...')}
        </React.Fragment>
    );
});

export default Face;