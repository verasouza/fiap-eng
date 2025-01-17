import React, { useEffect, useState } from 'react';

const EventLog = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(8)

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
                <button className='remove' onClick={() => handleDelete(event._id)}><span>Excluir</span></button>
              </td>
            </tr>
          ))}
          </tbody>
          <tr class={"clear"}>
            <button className='remove' onClick={() => clearEvents()}><span>Limpar</span></button>
            <button className='create' onClick={() => clearEvents()}><span>Exportar</span></button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default EventLog;
