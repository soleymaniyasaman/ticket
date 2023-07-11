import React from 'react'

import { Container, Row } from 'react-bootstrap'

import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './panel.scss'


export default function Panel(props) {

    return (

        <Container className={`mw-100 mh-100`}>

            <Row>

                <div id="panel">

                    <div id="panel__header">

                        <span>

                            <FontAwesomeIcon style={{ color: props.caret === "red" ? "red" : props.caret === "green" ? "#10D078" : "#7E94FF", display: props.display === "none" ? "none" : null }} icon={faCaretRight} />

                        </span>

                        <span>

                            {props.title}

                        </span>

                        {/* <img src={props.header_imgPlus} alt="" className={props.header_imgPlus ? "ms-auto m-3 me-5" : "d-noone"} />

                        <img src={props.header_img} alt="" className={props.header_img ? props.header_img_className : "d-none"} style={{ zIndex: "100" }} /> */}

                    </div>

                    <div id="panel__body" className={props.className}>

                        {props.children}

                    </div>

                </div>

            </Row>

        </Container>

    )

}

