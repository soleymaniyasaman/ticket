import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './header.scss'
import email from '../../assets/vector/email.svg'
import Home from "../../assets/vector/home-24px.svg"
import { TICKETING } from '../../navigation/CONSTANTS';
import { NavLink } from 'react-router-dom';

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
                        <NavLink to={TICKETING}>
                            <img alt="" src={Home} />
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to={TICKETING}>
                            <img alt="" src={email} />
                            Tickets
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}



