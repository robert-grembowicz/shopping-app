import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({closeModal}) => (
    <div className={styles.modal}>
        <h1>Add new item</h1>
        <Form />
        <button className={styles.closeModal} onClick={closeModal} />
    </div>
);

export default Modal;