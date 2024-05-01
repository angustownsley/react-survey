/* eslint-disable react/no-unescaped-entities */
export default function Checkboxes({formData, handleChange}) {
    return (
        <ul>
            <li>
                <label>
                    <input onChange={handleChange} name="spend-time" type="checkbox" value="swimming" checked={formData.timeSpent.includes("swimming")} />
                    Swimming
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleChange} name="spend-time" type="checkbox" value="bathing" checked={formData.timeSpent.includes("bathing")}/>
                    Bathing
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleChange} name="spend-time" type="checkbox" value="chatting" checked={formData.timeSpent.includes("chatting")}/>
                    Chatting
                </label>
            </li>
            <li>
                <label>
                    <input onChange={handleChange} name="spend-time" type="checkbox" value="noTime" checked={formData.timeSpent.includes("noTime")}/>I
                    don't like to spend time with it
                </label>
            </li>
        </ul>
    )
}
