import React, {useRef} from 'react';
import Face from '../Face';
import './index.scss';



const Canvas = () => {

    // Canvas Element
    const canvasEl = useRef();
    

    return (
            <div className="canvas" ref={canvasEl}>
                <Face ref={canvasEl} />
            </div>
    );
};

export default Canvas;