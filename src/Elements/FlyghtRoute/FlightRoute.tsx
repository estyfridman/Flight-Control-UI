import { Station } from "../Station/Station"
import { useState, useEffect, useRef } from "react";
import { Connection } from "../../Connect/Conection";

interface IStation {
    id: number;
    name: string;
    occupied: boolean;
  }

  const stations: IStation[] = [
    { id: 1, name: 'Preparation for landing station 1', occupied: true },
    { id: 2, name: 'Preparation for landing station 2', occupied: false },
    { id: 3, name: 'Preparation for landing station 3', occupied: false },
    { id: 4, name: 'Takeoff and landing route station 4', occupied: false },
    { id: 5, name: 'after landing station 5', occupied: false },
    { id: 6, name: 'station 6', occupied: true },
    { id: 7, name: 'station 7', occupied: false },
    { id: 8, name: 'Towards flight station 8', occupied: false },
    { id: 9, name: 'after flight station 9', occupied: false },

  ];
  
export const FlightRoute = () => {
    const connection = Connection();
    const [stations, setStations] = useState<IStation[]>([])
    
  useEffect(() => {
    if (!connection) return;

    connection.on('SendStateOfStations', (newStations) => {
      setStations(newStations);
    });

    return () => {
        connection.off('SendStateOfStations');
      };
    }, [connection]);
    
    return(
        <>
            {stations.map(station => (
                <Station key={station.id} name={station.name} occupied={station.occupied}/>
            ))}
        </>
    )
}