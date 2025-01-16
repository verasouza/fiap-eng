import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Popup = (props) => {
  return (props.trigger) ? (
    <div class={"userFormBackground"}>
      <div class={"userFormPanel"}>
        <div class={"userForm-topPanel"}>
          <button class={"userForm-topPanel-close"} onClick={() => props.setTrigger(false)}>
            <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />
          </button>
          { props.innerContent }
        </div>
      </div>
    </div>
  ) : "";
}
