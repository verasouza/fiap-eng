import React, { useEffect, useState } from 'react';

const EventLog = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/events');
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setEvents((prev) => [...prev, data]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h2>Log de Eventos</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{JSON.stringify(event)}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventLog;
