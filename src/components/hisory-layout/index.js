import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Panel from '../panel'
import './history-layout.scss'


export default function HistoryLayout(props) {

    return (

        <div id="history__section" style={{ marginTop: "70px" }}>
            {/* {props.popUp} */}
            <Container style={{ maxWidth: "97%" }}>
                <Row>
                    <p className="fa-1x">{props.title}</p>
                </Row>
                <Row>
                    <Panel title={props.panelTitle} className={props.className} className_container={props.className_container}>
                        <div className="h-100 w-100">
                            {props.body}
                        </div>
                    </Panel>
                </Row>
            </Container>
        </div>

    )

}

