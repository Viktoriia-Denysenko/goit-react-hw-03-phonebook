import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.listItem}>
      <span className={s.itemElement}>{name}:</span>
      <span className={s.itemElement}>{number}</span>
      <button className={s.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
