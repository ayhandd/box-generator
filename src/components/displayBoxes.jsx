import React from 'react'

const DisplayBoxes = props =>{
    const {results} = props;
    return(
        <div>
            {results && results.map((box, i)=>(
                <div style={{backgroundColor: box.color, height: box.height, width: box.width}} key={i}></div>
            ))}
        </div>

    );

};
export default DisplayBoxes;