import React from 'react'

const Color = ({ color, textColor, setColor }) => {
    return (
        <button className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer" style={{
            backgroundColor: color,
            color: textColor
        }}
            onClick={() => setColor(color)}
        >{color}</button>
    )
}

export default Color