import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import Panel from '../panel'

import './history-layout.scss'



export default function HistoryLayout(props) {

    return (

        <div id="histoy__section" style={{ marginTop: "70px" }}>

            {props.popUp}

            <Container style={{ maxWidth: "97%" }}>

                <Row>

                    <p className="fa-1x">{props.title}</p>

                </Row>

                <Row>

                    <Panel title={props.panelTitle} className={props.className} className_container={props.className_container}>

                        <div id="histoy__section-filter" className={"me-auto d-flex row justify-content-between"}>

                            <Col sm={12} className="d-inline-flex">

                                {props.filterMarket}

                                {props.filter}

                                {props.filterQoin}

                                {props.filterDepositKind}

                                {props.filterOrder}

                                {props.filterKind}

                                {props.filterStatus}

                                {props.filterScore}

                            </Col>

                        </div>

                        <div className="h-100" style={{ height: ' ' }}>

                            {props.body}

                        </div>

                    </Panel>

                </Row>

            </Container>

        </div>

    )

}

