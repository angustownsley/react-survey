/* eslint-disable react/prop-types */
export default function Radio({value, formData, handleChange}) {
    
    return (
        <>
        <input onChange={e => handleChange(e)} type="radio" value={value} name="color" id={`color-${value}`} checked={`${value}` === formData.color}/> 
        <label htmlFor={`color-${value}`}>{value}</label>
        </>
    )
}