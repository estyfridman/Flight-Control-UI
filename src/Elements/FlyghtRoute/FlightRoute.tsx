import { Station } from "../Station/Station"

interface IStation {
    id: number;
    name: string;
    occupied: boolean;
  }

  const stations: IStation[] = [
    { id: 1, name: ' 1', occupied: true },
    { id: 2, name: ' 2', occupied: false },
    { id: 3, name: ' 3', occupied: false },
    { id: 4, name: ' 4', occupied: true },
    { id: 5, name: ' 5', occupied: false },
    { id: 6, name: ' 6', occupied: true },
    { id: 7, name: ' 7', occupied: true },
    { id: 8, name: ' 8', occupied: false },
    { id: 9, name: ' 9', occupied: true },
  ];
  
  
export const FlightRoute = () => {

    return(
        <>
            {stations.map(station => (
                <Station key={station.id} name={station.name} occupied={station.occupied}/>
            ))}
        </>
    )
}