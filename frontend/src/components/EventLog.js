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

  const handleDelete = async (event) => {
    alert('evento apagado!')
  };

  const clearEvents = async () => {
    alert('log de eventos esvaziado.')
  }

  return (
    <div>
      <h2>Log de eventos</h2>
      <div>
        <hr></hr>
        <table>
          <tbody>
          <tr>
            <th>Data</th>
            <th>Nome</th>
            <th>Detalhe</th>
          </tr>
          {events.map((event) => (
            <tr>
              <td class={"id"}>{event.timestamp}</td>
              <td>{event.name}</td>
              <td>{event.detail}</td>
              <td class={"actions"}>
                <button className='remove' onClick={() => handleDelete(event._id)}>Excluir</button>
              </td>
            </tr>
          ))}
          </tbody>
          <tr class={"clear"}>
            <button className='clear' onClick={() => clearEvents()}>Limpar</button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default EventLog;
