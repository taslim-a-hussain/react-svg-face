import React, {useEffect, useRef, useState} from 'react';
import Face from '../Face';
import {select} from 'd3';
import './index.scss';



const Canvas = () => {

    // Canvas Element
    const canvasEl = useRef();
    // state: canvasSize
    const [canvasSize, setCanvasSize] = useState({width:-500, height:-500});

    // component did mount
   useEffect(() => {
        // Get the size of the canvas
        const canvas = select(canvasEl.current);
        const canvasWidth = Math.floor(canvas.node().getBoundingClientRect().width);
        const canvasHeight = Math.floor(canvas.node().getBoundingClientRect().height);
        setCanvasSize({width: canvasWidth, height: canvasHeight});
    }, []);
    

    return (
            <div className="canvas" ref={canvasEl}>
                <Face canvasWidth={canvasSize.width} canvasHeight={canvasSize.height}/>
            </div>
    );
};

export default Canvas;