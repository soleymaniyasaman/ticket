import React, { useContext, useEffect, useState } from 'react'

import { Form, Table } from 'react-bootstrap'

import { Link } from 'react-router-dom';

import { ADDTICKETING } from '../../navigation/CONSTANS';

import HistoryLayout from '../../components/hisory-layout';

import { AuthContext } from '../../context/auth-context';

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

    const authContext = useContext(AuthContext);

    const [ticketId, setTicketId] = useState();

    const [currentPage, setcurrentPage] = useState(0);

    const [dataLength, setDataLength] = useState();

    const [modalOpen, setModalOpen] = useState(false);

    const [ticketItem, setTicketItem] = useState({
        body: "hi",
        created_at: "2021-12-08T15:50:13.150098+03:30",
        id: 56,
        is_read: true,
        media_id: 1,
        updated_at: null
    })

    const [ticketReplyItem, setTicketReplyItem] = useState([{
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
            Group: null,
            credentials: { created_at: null, updated_at: null, first_name: 'یاسمن', last_name: 'سلیمانی' },
            id: 6
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
            Group: null,
            credentials: { created_at: null, updated_at: null, first_name: 'یاسمن', last_name: 'سلیمانی' },
            id: 6
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
            Group: null,
            credentials: { created_at: '2021-10-26T10:57:48.429350+03:30', updated_at: null, first_name: 'اشکان', last_name: null },
            id: 8
        }
    }])

    const [text, setText] = useState();

    const [onCloseTicket, setOnCloseTicket] = useState(false);

    //data 
    let a = {
        items: [
            {
                admin_reply: false,
                body: "hi",
                category: { created_at: null, updated_at: null, title: "test", id: 1 },
                created_at: "2021-12-08T15:50:13.150098+03:30",
                id: 56,
                is_read: true,
                media_id: 1,
                priority: "high",
                state: "open",
                title: "ttteeeeesssstttt",
                updated_at: null,
                user: {
                    Group: null,
                    credentials: { created_at: null, updated_at: null, first_name: "یاسمن", last_name: "سلیمانی" },
                    id: 6
                }
            }
        ],
        total: 1
    }
    let b = {
        body: "hi",
        created_at: "2021-12-08T15:50:13.150098+03:30",
        id: 56,
        is_read: true,
        media_id: 1,
        updated_at: null
    }

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
            Group: null,
            credentials: { created_at: null, updated_at: null, first_name: 'یاسمن', last_name: 'سلیمانی' },
            id: 6
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
            Group: null,
            credentials: { created_at: null, updated_at: null, first_name: 'یاسمن', last_name: 'سلیمانی' },
            id: 6
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
            Group: null,
            credentials: { created_at: '2021-10-26T10:57:48.429350+03:30', updated_at: null, first_name: 'اشکان', last_name: null },
            id: 8
        }
    }]

    // get list of tickets
    const ticketList = () => {

        authContext.setTicketList(a.items)

        setDataLength(a.total)

    }

    //close ticket
    const closeTicket = () => {

        if (ticketId) {

            setOnCloseTicket(true)

            setModalOpen(false)

        }

    }



    useEffect(() => {

        ticketList()

    }, [onCloseTicket]);


    // get ticket's info who click on 

    const ticketItems = () => {

        setTicketItem(b)

    }

    //get replys of ticket who click on

    const replyItems = () => {

        if (ticketId) {

            setTicketReplyItem(c)

        }

    }



    //post reply text

    const ReplyTicket = () => {

        setModalOpen(false)

    }

    useEffect(() => {

        ticketItems()

        replyItems()

    }, [ticketId, modalOpen]);





    //popup detail

    const popUpBody = <div className=" p-3">

        {ticketItem ?

            <div dir="rtl" className="align-items-start d-flex p-3">

                <div>

                    <div className="align-items-start d-flex">

                        <img alt="" src={profilePic} className="ps-2" />

                        <p className="m-0">{'نامعلوم'}</p>

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

                        <div dir="rtl" className="align-items-start d-flex p-3">

                            <div>

                                <div className="align-items-start d-flex">

                                    <img alt="" src={profilePic} className="ps-2" />

                                    <p className="m-0">{'نامعلوم'}</p>

                                </div>

                                <p className="m-0 mt-n1">{timeToStr(item.created_at, "HH:mm  -   jYYYY/jMM/jDD")}</p>

                                <div className="input-group-text rounded-3">

                                    <p className="m-1">

                                        {item.body}

                                    </p>

                                </div>

                            </div>

                        </div>

                    </>

                )

            })

            :

            null

        }

        <hr />

        <div className="align-items-start justify-content-end d-flex p-3">

            <Form className="w-100">

                <Form.Group dir="rtl" className="d-flex mb-3 " controlId="exampleForm.ControlTextarea1">

                    <Form.Label className="form-label ms-2" style={{ whiteSpace: 'nowrap' }}>ارسال تیکت</Form.Label>

                    <Form.Text as="textarea" rows={3} className="input-group-text text-right rounded-2 w-100" onChange={e => setText(e.target.value)} />

                </Form.Group>

            </Form>

        </div>

    </div>



    const body = <>


        <div className="d-flex justify-content-end ms-0 mb-4">

            <Link to={ADDTICKETING}>

                <button id="btn-add-cart" className="bg-light btn rounded-pill text-success py-1 ms-0">ثبت تیکت جدید<img alt="" src={add} className="ms-2 h-75 me-2" /></button>

            </Link>

        </div>

        {modalOpen ?

            <PopUp

                show={modalOpen}

                onHide={() => setModalOpen(false)}

                size="lg"

                popUpHead={"مشاهده پیام"}

                popUpBody={popUpBody}

                headerStyle="justify-content-between"

                onClose={closeTicket}

                onCloseText={'آیا از بستن تیکت مطمئن هستید؟ بعد از بسته شدن تیکت امکان پاسخ مجدد وجود ندارد'}

                onAccept={() => {

                    return (

                        ReplyTicket(text)

                    )

                }

                }

                onAcceptText={'ارسال تیکت'}

            /> : null

        }

        {

            <PaginationComponent total={dataLength} data={authContext.ticketList ? authContext.ticketList : null} itemsPerPage={10} currentPage={currentPage} setcurrentPage={setcurrentPage}>

                <Table responsive="sm" className="tableTicket" >

                    <thead>

                        <tr>

                            <th>عنوان تیکت </th>

                            <th>زمان ارسال  </th>

                            <th>وضعیت</th>

                            <th>جزییات</th>

                        </tr>

                    </thead>

                    <tbody>

                        {authContext.ticketList?.length ?

                            authContext.ticketList.map((item, index) => {

                                return (
                                    <tr key={index}>

                                        <td className={item.is_read ? 'text-muted' : null}>

                                            {!item.is_read ? <img alt="" src={dot} /> : null}

                                            {item.title}

                                        </td>

                                        <td className={item.is_read ? 'text-muted' : null}>

                                            {timeToStr(item.created_at, "HH:mm  -   jYYYY/jMM/jDD")}

                                        </td>

                                        <td className={item.is_read ? 'text-muted' : null}>
                                            {item.state === "open" ?

                                                item.admin_reply === true ?

                                                    <>

                                                        <img alt="" src={check} className='ms-1' />

                                                        پاسخ داده شده

                                                    </> :

                                                    <>

                                                        <img alt="" src={notCheck} className='ms-1' />

                                                        در حال بررسی

                                                    </>

                                                :

                                                item.state === "close" ?
                                                    <>

                                                        <img alt="" src={cancel} className='ms-1' />

                                                        بسته شده

                                                    </>
                                                    :
                                                    null

                                            }

                                        </td>

                                        <td>

                                            <Link className="btn btn-purple w-50" onClick={() => {

                                                setTicketId(item.id);

                                                setModalOpen(true)

                                            }} to={'#'}>جزئیات</Link>

                                        </td>

                                    </tr>

                                )

                            }) : <tr>

                                <td colSpan={4}>

                                    تیکتی ثبت نشده است

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

            title="تیکت ها"

            panelTitle="تیکت ها"

            body={body}

        />

    )

}

