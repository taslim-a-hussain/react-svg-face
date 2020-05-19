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

        let eyes = {size: 30, left: 150, right: 350, position: 180};
        let eyebrow = {width: 80, height: 10, left: 100, right: 310, position: -50, animate: 50};
        let mouth = {
            startAngle: Math.PI / 2,
            endAngle: Math.PI * 3 / 2,
            innerRadius: 150,
            outerRadius: 170
          };

        if (face.node().getBoundingClientRect().width === 300) {
            eyes = {size: 15, left: 80, right: 210, position: 120};
            eyebrow = {width: 50, height: 6, left: 60, right: 180, position: -30, animate: 25};
            mouth = {
                startAngle: Math.PI / 2,
                endAngle: Math.PI * 3 / 2,
                innerRadius: 100,
                outerRadius: 110
              };
        }

        // Position face in the center of the canvas
        face.attr('transform', `translate(${canvasWidth/2 - faceSize}, ${canvasHeight/2 - faceSize})`);

        // Create face circle
        const faceCircleG = face.append('g')
                .attr('transform', `translate(${faceSize}, ${faceSize})`);
                faceCircleG.append('circle')
                    .attr('r', faceSize)
                    .attr('class', 'face-circle');

        const eyesG = face.append('g')
                .attr('transform', `translate(0, ${eyes.position})`);

        const leftEye = eyesG.append('circle');
                    leftEye.attr('r', eyes.size)
                            .attr('cx', eyes.left);
        
        const rightEye = eyesG.append('circle');
                    rightEye.attr('r', eyes.size)
                            .attr('cx', eyes.right);

        const eyebrowG = eyesG.append('g')
                    .attr('transform',`translate(0, ${eyebrow.position})`);

        // Animate eyebrow
        eyebrowG
        .transition().duration(1500)
              .attr('transform', `translate(0, ${eyebrow.position - eyebrow.animate})`)
        .transition().duration(1500)
              .attr('transform', `translate(0, ${eyebrow.position})`);

        const leftEyebrow = eyebrowG.append('rect');
                leftEyebrow.attr('width', eyebrow.width)
                           .attr('height', eyebrow.height)
                           .attr('x', eyebrow.left);
        
        const rightEyebrow = eyebrowG.append('rect');
                rightEyebrow.attr('width', eyebrow.width)
                        .attr('height', eyebrow.height)
                        .attr('x', eyebrow.right);

          
        const arcGenerator = arc();

        const pathData = arcGenerator(mouth);


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