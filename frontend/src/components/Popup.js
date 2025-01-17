import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Popup = (props) => {

  return (props.trigger) ? (
    <div class={"popupBackground"}>
      <div class={"popupPanel"}>
        <div class={"popupTopBar"}>
          <button class={"popupTopBarClose"} onClick={() => props.setTrigger(false)}>
            <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />
          </button>
        </div>
        <div class={"popupContent"}>
          { props.children }
        </div>
      </div>
    </div>
  ) : "";
}

export default Popup;