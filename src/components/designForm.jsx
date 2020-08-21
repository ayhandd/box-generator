import React from 'react'

const DesignForm = props => {
    const {state, setState, results, setResults} = props
    const {color, height, width} = state;
    const onChange = (e) =>{
        setState({...state, [e.target.name]: e.target.value});
    }
    const addBox = (e) =>{
        e.preventDefault();
        let temp = {color: color, height: height, width:width}
        setResults([...results, temp])
        setState("");
    }
    return(
        <div>
            <label>Color</label>
            <input type="text" name="color" onChange={onChange}/>
            <label>Height</label>
            <input type="number" name="height" onChange={onChange}/>
            <label>Width</label>
            <input type="number" name="width" onChange={onChange}/>
            <button type="submit" onClick={addBox}>Add</button>
        </div>
    )
}
export default DesignForm;