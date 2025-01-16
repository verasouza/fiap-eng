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
    <div class={'outer'}>
      <h2>Log de eventos</h2>
      <div class={'inner'}>
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
            <button className='remove' onClick={() => clearEvents()}>Limpar</button>
            <button className='create' onClick={() => clearEvents()}>Exportar</button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default EventLog;
