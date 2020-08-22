import React from 'react'

const DisplayBoxes = props =>{
    const {results} = props;
    return(
        <div>
            {results && results.map((box, i)=>(
                <div  key={i}>
                    <p>{box.color}</p>
                    <p>{box.width}</p>
                    <p>{box.height}</p>
                </div>
            ))}
        </div>

    );

};
export default DisplayBoxes;