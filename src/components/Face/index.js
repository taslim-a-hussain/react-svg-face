import React, {useContext, useRef, useEffect, useState} from 'react';
import {select} from 'd3';
import './index.scss';

const Face = ({canvasWidth, canvasHeight}) => {
    const rootNode = useRef();

    const [svgLength, setSvgLength] = useState(500);

    useEffect(() => {
        const svg = select(rootNode.current);
        const svgX = svg.node().getBoundingClientRect().width;
        setSvgLength(svgX);
    }, []);
    
    // Component did update
    useEffect(() => {
        const svg = select(rootNode.current);
                svg.attr('transform', `translate(${canvasWidth/2 - svgLength/2}, ${canvasHeight/2 - svgLength/2})`);
    }, [canvasWidth, canvasHeight]);

    return (
        <React.Fragment>
            <svg id="svg" ref={rootNode} className="face"></svg>
        </React.Fragment>
    );
};

export default Face;