import { FC, MouseEventHandler, useEffect, useState } from "react"
import { TypeDataWatch } from "./Pages"

type PropsWatch = TypeDataWatch & { onDelete: MouseEventHandler<HTMLButtonElement> }

export const Watch: FC<PropsWatch> = ({name, belt, onDelete}) => {
    const [time, setTime] = useState<string>('')

    const dateNow = () => {
        const timeNow = Date.now()
        const timeZone = new Date(timeNow).getTimezoneOffset()
        const timeNeed = 
            timeNow + 
            (timeZone * 60 * 1000) + 
            (Number(belt) * 60 * 60 * 1000)
        const timeRu = new Date(timeNeed).toLocaleTimeString('ru')

        setTime(timeRu)
    }

    useEffect(() => {
        const timeout = setInterval(dateNow, 1000)
        return () => {
            clearInterval(timeout)
        }
    })
    
    return (
        <div className="watch">
            <div className="watch-card">
            <span onClick={onDelete} className="delete">
                    x
                </span>
                <h3>{name}</h3>
                <p>{time}</p>
                
            </div>
        </div>
    )
}