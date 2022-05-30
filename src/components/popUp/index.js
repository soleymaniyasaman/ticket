import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Popconfirm, Button } from 'antd';

import { React } from 'react';

// import { Button } from 'react-bootstrap';

import Modal from "react-bootstrap/Modal";

import { faArrowLeft, faCaretLeft } from '@fortawesome/free-solid-svg-icons'

import lock from '../../assets/vector/lock.svg'

import './popUp.scss'



const PopUp = (props) => {

  return (

    <Modal size={props.size} show={props.show} onHide={props.onHide} className="mt-5 pt-5">

      <Modal.Header className={`popUpHeader ${props.headerStyle}`} closeLabel="">

        {props.onClose ?

          <div className="d-flex" >

            <p className="text-success mr-3" role="button" onClick={props.onHide}>

              <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />

              بازگشت به لیست تیکت‌‌ها

            </p>

            <Popconfirm

              placement="bottom"

              title={props.onCloseText}

              onConfirm={props.onClose}

              okText="تایید"

              cancelText="لغو"

            >
              <Button className="ant-btn border-0 btn btn-danger text-white popUpButtonDeny">

                بستن تیکت

                <img src={lock} className="h-50 ml-1" />

              </Button>

            </Popconfirm>

            {/* <Button onClick={props.onClose} className="bg-transparent btn btn-danger2 popUpButtonDeny">

            {props.onCloseText}

          </Button> */}

          </div>

          : null

        }

        <Modal.Title className="small">

          <div className=" d-flex align-items-center w-auto mx-auto flex-row-reverse">

            {/* <img src="/assests/drawer/Polygon.svg" /> */}
            <span>

              <FontAwesomeIcon className='fs-4 ms-2' style={{ color: '#7E94FF' }} icon={faCaretLeft} />

            </span>

            <p className="me-1 m-0 text-white"> {props.popUpHead} </p>

          </div>

        </Modal.Title>

      </Modal.Header>

      <Modal.Body className="popUpBody">{props.popUpBody}</Modal.Body>

      <Modal.Footer className="popUpFooter">

        {props.onCancel ?

          <Button onClick={props.onCancel} className="bg-transparent btn btn-danger2 popUpButtonDeny">

            {props.onCancelText}

          </Button>

          : null
        }

        {props.onAcceptText ?

          <Button onClick={props.onAccept} className="popUpBody popUpButton ">

            {props.onAcceptText}

          </Button> : null}

      </Modal.Footer>

    </Modal>

  )

}



export default PopUp;
