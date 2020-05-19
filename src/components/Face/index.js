import React, {useRef, useEffect} from 'react';
import {select, arc} from 'd3';
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

        const eyesG = face.append('g')
                .attr('transform', `translate(0, 180)`);

        const leftEye = eyesG.append('circle');
                    leftEye.attr('r', 30)
                            .attr('cx', 150);
        
        const rightEye = eyesG.append('circle');
                    rightEye.attr('r', 30)
                            .attr('cx', 350);

        const eyebrowG = eyesG.append('g')
                    .attr('transform',`translate(0, -50)`);

        const leftEyebrow = eyebrowG.append('rect');
                leftEyebrow.attr('width', 80)
                           .attr('height', 10)
                           .attr('x', 100);
        
        const rightEyebrow = eyebrowG.append('rect');
                rightEyebrow.attr('width', 80)
                        .attr('height', 10)
                        .attr('x', 310);

          
        const arcGenerator = arc();

        const pathData = arcGenerator({
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 3 / 2,
            innerRadius: 150,
            outerRadius: 170
          });


          faceCircleG.append('path')
            .attr('d', pathData);

    }, []); 
    
    return (
        <React.Fragment>
            <svg ref={faceNode} className="face"></svg>
            {console.log('Face component rendered...')}
        </React.Fragment>
    );
});

export default Face;