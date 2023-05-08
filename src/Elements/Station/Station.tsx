import { useState } from "react";
import { Plane } from "../Plane/Plane";

interface Station {
    id: number;
    name: string;
    occupied: boolean
}

export const Station = (props: any) => {
    const [hasPlane, setHasPlane] = useState(true);

    const displayPlane = () => {
        if (props.occupied) {
            return (
                <Plane />
            )
        }
    }


    return (
        <div>
            <h6>{props.name} sergsdfg</h6>
            {displayPlane()}
        </div>
    )
}