import React, { Fragment } from 'react';
import styles from '../UI/Modal.module.css';
import ReactDOM from 'react-dom'; 
const BackDrop = props =>
{
    return <div className={ styles.backdrop } onClick={props.onClose}></div>;
};
const OverLay = props =>
{
    return (
        <div className={ styles['modal-overlay'] }>
            <div className={ styles.conetnts }>{ props.children }</div>
        </div>
    );
};
const Modal = props =>
{
    const portalElement = document.getElementById('overlay');
    return <Fragment>
        { ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalElement)}
        { ReactDOM.createPortal(<OverLay>{props.children}</OverLay>, portalElement)}
    </Fragment>;
};
export default Modal;