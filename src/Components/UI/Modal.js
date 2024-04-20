import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  
  console.log(props)
  return <div className={classes.backdrop} onClick={props.onCick} ></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal'>{props.children}
    </div>
    // <div className={classes.modal}>
    //   <div className={classes.content}>{props.children}</div>
    // </div>
  );
};

const portalElement = document.getElementById('modal');

const Modal = (props) => {
  console.log(props)
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}  />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
