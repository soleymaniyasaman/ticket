import React, { useContext } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { useRouteMatch } from 'react-router-dom'

// import Panel from '../../../../components/shared/panel'

import { AuthContext } from '../../context/auth-context'

// import { DASHBOARD, TICKETING } from '../../navigation/CONSTANS'

import './history-layout.scss'



export default function HistoryLayout(props) {

    const authContext = useContext(AuthContext);

    // let matchDashboardOrder = useRouteMatch(DASHBOARD);

    // let matchTicket = useRouteMatch(TICKETING);



    return (

        <div id="histoy__section" style={{ marginTop: "70px" }}>

            {props.popUp}

            <Container style={{ maxWidth: "97%" }}>

                <Row>

                    <p className="fa-1x">{props.title}</p>

                </Row>

                <Row>

                    {/* <Panel title={props.panelTitle} className={props.className} className_container={props.className_container}> */}

                    <div id="histoy__section-filter" className={"mr-auto d-flex row justify-content-between"}>



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

                    <div className="h-100" style={{ height: '' }}>

                        {props.body}

                    </div>

                    {/* </Panel> */}

                </Row>

            </Container>

        </div>

    )

}

