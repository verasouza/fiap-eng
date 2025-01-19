import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <tr class={"controls"}>
              <div>
                <button className='remove' onClick={() => clearEvents()}><FontAwesomeIcon icon="fa-solid fa-broom" /><span>Limpar</span></button>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventLog;
