import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './header.scss'
import email from '../../assets/vector/email.svg'
import bell from '../../assets/vector/bell.svg'
import Home from "../../assets/vector/home-24px.svg"

export default function DashboardHeader() {

    const styles = {
        DashboardHeader: {
            width: '87%'
        }
    }

    return (
        <div id="dashboard-header" style={styles.DashboardHeader}>
            <Navbar collapseOnSelect expand variant="dark">
                <Nav >
                    <Nav.Item>
                        <Nav.Link href={'/'} >
                            <img alt="" src={Home} />
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={'/ticket'}>
                            <img alt="" src={email} />
                            Tickets
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href={'/'}>
                            <img alt="" src={bell} />
                            Messages
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}



