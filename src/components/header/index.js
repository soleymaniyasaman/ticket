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

            <Navbar collapseOnSelect expand variant="dark" style={{ height: "70px" }}>

                <Nav >

                    <Nav.Link href={'/'} >

                        <img src={Home} alt='' className="me-1 w-auto" />

                        صفحه اصلی

                    </Nav.Link>

                    <Nav.Item>

                        <Nav.Link href={'/ticket'}>

                            <img alt="" src={email} />

                            تیکت

                        </Nav.Link>

                    </Nav.Item>

                    <Nav.Link href={'/'}>

                        <img alt="" src={bell} />

                        پیام ها

                    </Nav.Link>

                </Nav>

            </Navbar>

        </div>

    )

}



