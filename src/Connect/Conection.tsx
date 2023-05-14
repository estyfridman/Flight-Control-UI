import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { useEffect, useState } from 'react';

export const Connection = () => {
    const [ connection, setConnection ] = useState<HubConnection | null>(null);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
          .withUrl('https://localhost:9876/FlightHubs')
          .withAutomaticReconnect()
          .build();
    
        newConnection.start().catch((err: Error) => console.error(err));
    
        setConnection(newConnection);
      }, []);

  return connection;
};