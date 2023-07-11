import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap';
import { faArrowLeft, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import lock from '../../assets/vector/lock.svg';
import './popUp.scss';
import { useState } from 'react';

const PopUp = (props) => {
  const [confirmVisible, setConfirmVisible] = useState(false);


  const handleConfirm = () => {
    props.onClose();
    setConfirmVisible(false);
    if (props.onConfirmClose) {
      props.onConfirmClose();
    }
  };

  return (
    <Modal size={props.size} show={props.show} onHide={props.onHide} className="mt-5 pt-5">
      <Modal.Header className={`popUpHeader ${props.headerStyle}`} closeLabel="">
        {props.onClose && (
          <div className="d-flex">
            <p className="text-success me-3 text-nowrap" role="button" onClick={props.onHide}>
              <FontAwesomeIcon icon={faArrowLeft} className="me-1" />
              back to Tickets
            </p>
            <Button onClick={() => setConfirmVisible(true)} className="btn btn-danger text-white popUpButtonDeny p-0 w-50">
              <span className="small">Close Ticket</span>
              <img src={lock} alt="" className="h-50 ms-1" />
            </Button>
          </div>
        )}
        <Modal.Title className="small">
          <div className="d-flex align-items-center w-auto mx-auto flex-row-reverse">
            <span>
              <FontAwesomeIcon className="fs-4 ms-2" style={{ color: '#7E94FF' }} icon={faCaretLeft} />
            </span>
            <p className="me-1 m-0 text-white">{props.popUpHead}</p>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="popUpBody">{props.popUpBody}</Modal.Body>
      <Modal.Footer className="popUpFooter">
        {props.onCancel && (
          <Button onClick={props.onCancel} className="bg-transparent btn btn-danger2 popUpButtonDeny">
            {props.onCancelText}
          </Button>
        )}
        {props.onAcceptText && (
          <Button onClick={props.onAccept} className="popUpBody popUpButton">
            {props.onAcceptText}
          </Button>
        )}
      </Modal.Footer>

      {/* Confirmation Dialog */}
      <Modal show={confirmVisible} onHide={() => setConfirmVisible(false)} centered>
        <Modal.Body>
          <p>Are you sure you want to permanently close the ticket?</p>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" className="me-2" onClick={() => setConfirmVisible(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirm}>
              Close Ticket
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Modal>
  );
};

export default PopUp;
