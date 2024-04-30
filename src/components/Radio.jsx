/* eslint-disable react/prop-types */
export default function Radio({value}) {

    return (
        <>
        <input type="radio" value={value} name="color" id={`color-${value}`}/> 
        <label htmlFor={`color-${value}`}>{value}</label>
        </>
    )
}