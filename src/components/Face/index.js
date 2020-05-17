import React from 'react';
import './index.scss';

const Face = ({canvasSize}) => {

    return (
        <React.Fragment>
            {console.log(canvasSize)}
            <svg className="face"></svg>
        </React.Fragment>
    );
};

export default Face;