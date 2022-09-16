import React from 'react'

function Alert(props) {
    // const capitalize = (word)=>{
    //     const lower = word.toLowerCase()
    //     return lower.charAt(0).toUpperCase() + lower.slice(1)
    // } 
    return (
        <div style={{height : '50px'}}>
        {props.alert &&
        <div>
            <div className= {`alert alert-${props.alert.type}`} role="alert">
                <strong>{props.alert.message}</strong>
            </div>
        </div>}
        </div>
    )
}

export default Alert
