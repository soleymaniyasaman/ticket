import React, { useContext, useEffect, useState } from 'react'

import { Form, Table } from 'react-bootstrap'

import { Link } from 'react-router-dom';

import { ADDTICKETTING } from '../../navigation/CONSTANTS';

import HistoryLayout from '../../components/hisory-layout';

import { MainContext } from '../../context/main-context';

import add from '../../assets/vector/auth/Group1841.svg';

import check from '../../assets/vector/check_circle-24px.svg';

import notCheck from '../../assets/vector/not_check_circle-24px.svg';

import profilePic from "../../assets/vector/profilepicture.svg";

import dot from '../../assets/vector/dot.svg';

import PopUp from '../../components/popUp';

import { timeToStr } from '../../components/utils/utils';

import PaginationComponent from '../../components/pagination';

import cancel from '../../assets/vector/cancel-24px.svg'

export default function Ticketing() {

    const mainContext = useContext(MainContext);

    const [ticketId, setTicketId] = useState();

    const [currentPage, setCurrentPage] = useState(0);

    const [dataLength, setDataLength] = useState();

    const [modalOpen, setModalOpen] = useState(false);

    const [ticketItem, setTicketItem] = useState()

    const [ticketReplyItem, setTicketReplyItem] = useState([])

    const [text, setText] = useState();


    //data 

    let c = [{
        admin_reply: true,
        body: "yep",
        category: null,
        created_at: "2021-12-07T08:37:57.167751+03:30",
        id: 46,
        is_read: true,
        media_id: null,
        priority: "low",
        state: "open",
        title: null,
        updated_at: null,
        user: {
            author: 'admin'
        }
    }, {
        admin_reply: true,
        body: "nope",
        category: null,
        created_at: "2021-12-07T09:06:04.149402+03:30",
        id: 47,
        is_read: true,
        media_id: 1,
        priority: "low",
        state: "open",
        title: null,
        updated_at: null,
        user: {
            author: 'admin'

        }
    }, {
        admin_reply: true,
        body: "string",
        category: null,
        created_at: "2021-12-07T10:23:18.400000+03:30",
        id: 48,
        is_read: true,
        media_id: 0,
        priority: "low",
        state: "open",
        title: null,
        updated_at: "2021-12-07T10:23:42.440291+03:30",
        user: {
            author: 'admin'
        }
    }]

    // get list of tickets
    const ticketList = () => {
        setDataLength(mainContext.ticketList.length);
    }

    //close ticket
    const closeTicket = () => {
        setModalOpen(false);
    };



    useEffect(() => {

        ticketList()

    }, []);


    // get ticket's info which is clicked on 

    const ticketItems = () => {

        // Find the selected ticket by its ID
        const selectedTicket = mainContext.ticketList.find((ticket) => ticket.id === ticketId);

        // If the selected ticket exists and its is_read property is false
        if (selectedTicket && !selectedTicket.is_read) {
            // Update the is_read property to true
            const updatedTicket = { ...selectedTicket, is_read: true };

            // Find the index of the selected ticket in the ticketList array
            const selectedIndex = mainContext.ticketList.findIndex((ticket) => ticket.id === ticketId);

            // Create a new array with the updated ticket at the selected index
            const updatedTicketList = [
                ...mainContext.ticketList.slice(0, selectedIndex),
                updatedTicket,
                ...mainContext.ticketList.slice(selectedIndex + 1),
            ];

            // Update the ticketList state with the updated array
            mainContext.setTicketList(updatedTicketList);
        }
        setTicketItem(selectedTicket)

        if (selectedTicket?.admin_reply) {

            setTicketReplyItem(c)

        } else if (!selectedTicket?.admin_reply) {
            setTicketReplyItem()

        }
    }



    //post reply text

    const ReplyTicket = (text) => {
        setTicketReplyItem((prev) => [...prev, {
            admin_reply: true,
            body: text,
            category: null,
            created_at: "2021-12-07T10:23:18.400000+03:30",
            id: 48,
            is_read: true,
            media_id: 0,
            priority: "low",
            state: "open",
            title: null,
            updated_at: new Date().toISOString(),
            user: {
                author: 'user'
            }
        }])
        setText()

    }

    useEffect(() => {

        ticketItems()

    }, [ticketId, modalOpen]);





    //popup detail

    const popUpBody = <div className=" p-3">

        {ticketItem ?

            <div dir="rtl" className="align-items-end d-flex p-3">

                <div>

                    <div className="align-items-start d-flex">

                        <img alt="" src={profilePic} className="ps-2" />

                        <p className="m-0">{'none register'}</p>

                    </div>

                    <p className="m-0 mt-n1">{timeToStr(ticketItem.created_at, "HH:mm  -   jYYYY/jMM/jDD")}</p>

                    <div className="input-group-text rounded-3">

                        <p className="m-1">

                            {ticketItem.body}

                        </p>

                    </div>

                </div>

            </div>

            : null}

        {ticketReplyItem ?

            ticketReplyItem.map((item, index) => {

                return (

                    <>
                        {item.user.author === 'admin' ?
                            <div key={index} className="align-items-end d-flex p-3">

                                <div>

                                    <div className="align-items-start d-flex">

                                        <img alt="" src={profilePic} className="ps-2" />

                                        <p className="m-0">Admin</p>

                                    </div>

                                    <p className="m-0 mt-n1">{timeToStr(item.created_at, "HH:mm  -   jYYYY/jMM/jDD")}</p>

                                    <div className="input-group-text rounded-3">

                                        <p className="m-1">

                                            {item.body}

                                        </p>

                                    </div>

                                </div>

                            </div>
                            :
                            <div dir="rtl" className="align-items-start d-flex p-3">

                                <div>

                                    <div className="align-items-start d-flex">

                                        <img alt="" src={profilePic} className="pl-2" />

                                        <p className="m-0">None register</p>

                                    </div>

                                    <p className="m-0 mt-n1">{timeToStr(item.created_at, "HH:mm  -   jYYYY/jMM/jDD")}</p>

                                    <div className="input-group-text rounded-3">

                                        <p className="m-1">

                                            {item.body}

                                        </p>

                                    </div>

                                </div>

                            </div>
                        }

                    </>

                )

            })

            :

            null

        }

        <hr />

        <div className="align-items-start justify-content-end d-flex p-3">

            <Form className="w-100">

                <Form.Group className="d-flex mb-3 " controlId="exampleForm.ControlTextarea1">

                    <Form.Label className="form-label me-2" style={{ whiteSpace: 'nowrap' }}>Send Message</Form.Label>

                    <Form.Text as="textarea" rows={3} value={text} className=" text-right rounded-2 w-100" onChange={(e) => setText(e.target.value)} />

                </Form.Group>

            </Form>

        </div>

    </div>



    const body = <>


        <div className="d-flex justify-content-end ms-0 mb-4">

            <Link to={ADDTICKETTING}>

                <button id="btn-add-cart" className="bg-light btn rounded-pill text-success py-1 ms-0">Add Ticket<img alt="" src={add} className="ms-2 h-75 me-2" /></button>

            </Link>

        </div>

        {modalOpen ?

            <PopUp

                show={modalOpen}

                onHide={() => setModalOpen(false)}

                size="lg"

                popUpHead={"See Message"}

                popUpBody={popUpBody}

                headerStyle="justify-content-between"

                onClose={closeTicket}

                onCloseText={'Are you sure you want to close the ticket? It is not possible to answer again after closing the ticket'}

                onAccept={() => {

                    return (

                        ReplyTicket(text)

                    )

                }

                }

                onAcceptText={'Send Ticket'}
                onConfirmClose={() => {
                    // Remove the closed ticket from the ticket list
                    const updatedTicketList = mainContext.ticketList.filter((ticket) => ticket.id !== ticketId);
                    mainContext.setTicketList(updatedTicketList);
                }}

            /> : null

        }

        {

            <PaginationComponent total={dataLength} data={mainContext.ticketList ? mainContext.ticketList : null} itemsPerPage={10} currentPage={currentPage} setCurrentPage={setCurrentPage}>

                <Table responsive="sm" className="tableTicket" >

                    <thead>

                        <tr>

                            <th>Ticket Title</th>

                            <th>Send Time </th>

                            <th>Status</th>

                            <th>Detail</th>

                        </tr>

                    </thead>

                    <tbody>

                        {mainContext.ticketList?.length ?

                            mainContext.ticketList.map((item, index) => {

                                return (
                                    <tr key={index}>

                                        <td className={item.is_read ? 'text-muted' : 'text-light'}>

                                            {!item.is_read ? <img alt="" src={dot} /> : null}

                                            {item.title}

                                        </td>

                                        <td className={item.is_read ? 'text-muted' : 'text-light'}>

                                            {item.created_at ? timeToStr(item.created_at, "HH:mm  -   jYYYY/jMM/jDD") : ""}

                                        </td>

                                        <td className={item.is_read ? 'text-muted' : 'text-light'}>
                                            {item.state && item.state === "open" ?

                                                item.admin_reply === true ?

                                                    <>

                                                        <img alt="" src={check} className='ms-1' />

                                                        Answered

                                                    </> :

                                                    <>

                                                        <img alt="" src={notCheck} className='ms-1' />

                                                        Pending

                                                    </>

                                                :

                                                item.state && item.state === "close" ?
                                                    <>

                                                        <img alt="" src={cancel} className='ms-1' />

                                                        Closed

                                                    </>
                                                    :
                                                    null

                                            }

                                        </td>

                                        <td>

                                            <Link
                                                className="btn btn-purple w-50"
                                                onClick={() => {
                                                    item.id && setTicketId(item.id);
                                                    console.log("id", ticketId);
                                                    setModalOpen(true)
                                                }}
                                                to={'#'}>
                                                Detail
                                            </Link>

                                        </td>

                                    </tr>

                                )

                            }) : <tr>

                                <td colSpan={4}>

                                    There is not any Ticket

                                </td>

                            </tr>

                        }

                    </tbody>

                </Table>

            </PaginationComponent>

        }

    </>;



    return (

        <HistoryLayout

            title="Tickets"

            panelTitle="Tickets"

            body={body}

        />

    )

}

