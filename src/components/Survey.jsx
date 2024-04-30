import { useState } from "react"
import Radio from "./Radio"
import Checkboxes from "./Checkboxes"
import AnswersList from "./AnswersList"

function Survey() {
    const [open, setOpen] = useState(false) //Ignore this state
    const [answersList, setAnswersList] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        color: "",
        timeSpend: [],
        review: "",
        email: "",
    })

    const emptyForm = {
        username: "",
        color: "",
        timeSpend: [],
        review: "",
        email: "",
    }
    let colorOptions = [1, 2, 3, 4]

    function handleChange(e) {
        const { name, value, type, checked } = e.target

        const tempTimeSpendArr = structuredClone(formData.timeSpend)

        if (type === "checkbox") {
            checked
                ? tempTimeSpendArr.push(value)
                : tempTimeSpendArr.splice(tempTimeSpendArr.indexOf(value), 1)
                setFormData({...formData, timeSpend:tempTimeSpendArr})
            return
        }

        setFormData({ ...formData, [name]:value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setAnswersList([...answersList], formData)
        setFormData({...emptyForm})
    }

    return (
        <main className="survey">
            <section className={`survey__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList answersList={answersList} />
            </section>
            <section className="survey__form">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Tell us what you think about your rubber duck!</h2>
                    <div className="form__group radio">
                        <h3>How do you rate your rubber duck colour?</h3>
                        {colorOptions.map((e, index) => {
                            return <Radio key={index} value={e} handleChange={handleChange} formData={formData}/>
                        })}
                    </div>
                    <div className="form__group">
                        <h3>
                            How do you like to spend time with your rubber duck
                        </h3>
                        <Checkboxes handleChange={handleChange} formData={formData}/>
                    </div>
                    <label>
                        What else have you got to say about your rubber duck?
                        <textarea value={formData.review} name="review" cols="30" rows="10" onChange={handleChange}></textarea>
                    </label>
                    <label>
                        Put your name here (if you feel like it):
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={(e) =>
                                handleChange(e, "username", "text")
                            }
                        />
                    </label>
                    <label>
                        Leave us your email pretty please??
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleChange(e)}
                        />
                    </label>
                    <input
                        className="form__submit"
                        type="submit"
                        value="Submit Survey!"
                    />
                </form>
            </section>
        </main>
    )
}

export default Survey
