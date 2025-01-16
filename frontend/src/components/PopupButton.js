import { useState } from 'react';

const Popup = (props) => {
  const [buttonPopup, setPopup] = useState(false);

  return (
    <button onClick={() => setPopup(true)} className={ props.class ? props.class : 'popupButton' }>
      {props.inner}
    </button>
  );
}