import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface IPlane {
    id: number;
    name: string;
    status: string;
    station: number;
}

interface Itodo {
    userId: number;
    id: string;
    title: string;
    completed: boolean;
}

export const LandingAndDeparture = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [aircraftList, setAircraftList] = useState<Itodo[]>([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(resp => {
                setAircraftList(resp.data);
                console.log(resp.data);
                setIsLoading(false);
            })
    }, [])

    const renderaircrafts = () => {
        if (isLoading) {
            return <h3>Loading...</h3>
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {aircraftList.slice(0, 10).map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.completed.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="container">
            <h1>Landing And Departure List</h1>
            {renderaircrafts()}
        </div>
    )
};
