import { FC, useState } from "react"
import { CreateWatch } from "./CreateWatch"
import { Watch } from "./Watch"

export type TypeDataWatch = {
    name: string
    belt: string
}

export const Pages: FC = () => {
    const [dataWatch, setDataWatch] = useState<TypeDataWatch[]>([])

    const onDelete = (el: TypeDataWatch) => setDataWatch(dataWatch.filter(i => i != el))

    return (
        <>
            <CreateWatch setDataWatch={setDataWatch}/>
            <div className="watchList">
                {dataWatch.map( (watch, i) => (
                    <Watch 
                    key={i} 
                    name={watch.name} 
                    belt={watch.belt}
                    onDelete={() => onDelete(watch)}
                    />
                ))}
            </div>
        </>
    )
} 