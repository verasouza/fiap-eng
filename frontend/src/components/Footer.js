import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <div class={'rev'}>
        <div class={'rev-content'}>
          <p>Copyright &copy; 2025 CRM Easy</p>
          <a href="#" class={'lgpd'}>Política de privacidade</a>
        </div>
      </div>
      <FontAwesomeIcon icon="fa-solid fa-x"/>
    </footer>
  );
};

export default Footer;
