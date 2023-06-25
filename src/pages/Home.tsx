import "./Home.css";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useEffect, useState, useRef } from "react";

export const Home = () => {
  const url = "https://localhost:8642/hubs/AirportHubs";
  const [connection, setConnection] = useState<HubConnection | null>(null);

  //planes
  const [planeList, setplaneList] = useState<string[]>([]);
  const latestplaneList = useRef<string[]>();
  latestplaneList.current = planeList;

  const updateAircraftList = (newPlane: string) => {
    setplaneList((planes) => [...planes, newPlane])
  };


  //visits
  const [visitList, setVisitList] = useState<string[]>([]);
  const latestVisitList = useRef<string[]>();
  latestVisitList.current = visitList;

  const updateVisit = (newVisit: string) => {
    setVisitList((visits) => [...visits, newVisit])
  };

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(url)
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);


  useEffect(() => {
    if (connection) {
      connection.start()
        .then(result => {
          console.log('Connected!');

          connection.on('SendFlight', (plane: string) => {
            console.log(plane);
            updateAircraftList(plane);
          });

          connection.on('SendVisit', (visit: string) => {
            console.log(visit);
            updateVisit(visit);
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);


  return (
    <>
      <div className="container">
        <div className="h1-cell">
          <h1>Welcome to the perfect airport in the world</h1>
        </div>
        <div className="table-row">
          <div className="table-cell">
            <h4>Flight schedule</h4>
            {planeList.slice(-10).map((plane, index) =>
              <p key={index}>{plane}</p>
            )}
          </div>
          <div></div>
          <div className="table-cell">
            <h4>Changes at the airport</h4>
            {visitList.slice(-10).map((visit, index) =>
              <p key={index}>{visit}</p>
            )}
          </div>
        </div>
      </div>
    </>

  )
};