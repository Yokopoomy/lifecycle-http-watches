import { FC, useState } from "react"
import { TypeDataWatch } from "./Pages"

type PropsCreateWatch = {
    setDataWatch: React.Dispatch<React.SetStateAction<TypeDataWatch[]>>
}

export const CreateWatch: FC<PropsCreateWatch> = ({setDataWatch}) => {
    const [form, setForm] = useState<TypeDataWatch>({name: '', belt: ''})

    const hundleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        setDataWatch(prev => ([...prev, form]))

        setForm({name: '', belt: ''})
    }

    const hundleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const {target:{name, value}} = e
        setForm(prev => ({ ...prev, [name] : value.trim() }))
    }

    return (
        <form className="form" action="" onSubmit={hundleSubmit}>
            <div className="card">
                <label>Название </label>
                <input className="input" type="text" value={form.name} name="name" onChange={hundleChange} required/>

                <label>Часовой пояс </label>
                <input className="input" type="text" value={form.belt} name="belt" onChange={hundleChange} required/>
            </div>
            <button className="add-button">Добавить</button>
        </form>

    )
}