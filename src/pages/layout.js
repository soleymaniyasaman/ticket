import React from 'react'
import { Row } from 'react-bootstrap'
import DashboardHeader from '../components/header'
import DashboardMenu from '../components/menu'
import '../components/styles/_buttons.scss';
import '../components/styles/_colors.scss';
import '../components/styles/_collapse.scss';
import '../components/styles/_utils.scss';
import '../components/styles/_mixins.scss';
import '../components/styles/styles.scss';

export default function DashboardLayout(props) {

    const styles = {
        container: {
            backgroundColor: '#0A1930',
            color: '#fff',
            maxWidth: '1920px',
            width: '100%',
            margin: 'auto',
            maxHeight: '2500px',
            height: '100%'
        },
        header: {
            padding: 0,
            width: "87%",
        },
        menu: {
            padding: 0,
            width: "13%",
            height: '2170px'
        },
        children: {
            padding: '2rem 0px 0',
            textAlign: 'left',
            height: "100%",
            paddingBottom: '0px',
            marginInline: 'auto'
        }
    }

    return (
        <div style={styles.container}>
            <Row className="w-100 p-0 m-0">
                <div style={styles.menu}>
                    <DashboardMenu />
                </div>
                <div style={styles.header}>
                    <Row className="w-100 p-0 m-0">
                        <DashboardHeader />
                    </Row>
                    <Row style={styles.children}>
                        {props.children}
                    </Row>
                </div>
            </Row>
        </div>
    )
}
