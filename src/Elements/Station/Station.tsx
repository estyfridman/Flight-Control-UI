import { useState} from "react";
import { Plane } from "../Plane/Plane";

interface Station {
    id: number;
    name: string;
    occupied: boolean
}

export const Station = (props: any) => {
  
    const displayPlane = () => {
        if (props.occupied) {
            return (
                <Plane />
            )
        }
    }

    return (
        <div className="station_div">
            <h6>{props.name}</h6>
            {displayPlane()}
        </div>
    )
}