/* eslint-disable react/no-unescaped-entities */
export default function Checkboxes({formData, handleChange}) {
    return (
        <ul>
            <li>
                <label>
                    <input onChange={handleChange} name="spend-time" type="checkbox" value="swimming" checked={formData.timeSpend.includes("swimming")} />
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleChange} name="spend-time" type="checkbox" value="bathing" checked={formData.timeSpend.includes("bathing")}/>
                    Bathing
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleChange} name="spend-time" type="checkbox" value="chatting" checked={formData.timeSpend.includes("chatting")}/>
                    Chatting
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleChange} name="spend-time" type="checkbox" value="noTime" checked={formData.timeSpend.includes("noTime")}/>I
                    don't like to spend time with it
                </label>
            </li>
        </ul>
    )
}
