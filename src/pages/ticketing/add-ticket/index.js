import React, { useContext } from 'react';
import { Field, Formik, Form } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { TICKETING } from '../../../navigation/CONSTANTS';
import { Link, useNavigate } from 'react-router-dom';
import '../style.scss';
import HistoryLayout from '../../../components/hisory-layout';
import CustomSelect from '../../../components/utils/customSelect';
import { MainContext } from '../../../context/main-context';
import { v4 as uuidv4 } from 'uuid';





export default function AddTicket(props) {

    const mainContext = useContext(MainContext);
    let navigate = useNavigate()

    //ticket category state
    const categoryOption = [
        { label: "Billing and Payments", value: "billing" },
        { label: "Technical Support", value: "technical" },
        { label: "Account Assistance", value: "account" },
        { label: "Feature Request", value: "feature" },
        { label: "Bug Report", value: "bug" },
        { label: "General Inquiry", value: "general" },
        { label: "Feedback and Suggestions", value: "feedback" },
        { label: "Troubleshooting", value: "troubleshooting" },
        { label: "Request for Assistance", value: "assistance" }]



    const validate = (values) => {
        const errors = {}
        if (!values.subject) {
            errors.subject = "Topic is required"
        }
        if (!values.text) {
            errors.text = "Ticket's text is required"
        }
        return errors
    }

    // submit
    const submitTicket = (values) => {
        let newTicket = {

            "title": values.title,
            "body": values.text,
            "category_id": values.subject,
            "created_at": new Date().toISOString(), // Add created_at property with current date and time
            "is_read": false,
            "state": 'open',
            "admin_reply": false,
            "id": uuidv4(), // Generate a random ID

        }
        const newTicketList = [...mainContext.ticketList, newTicket]
        mainContext.setTicketList(newTicketList)
        navigate(TICKETING)
    }

    //ticket category
    const body = <Formik

        initialValues={{
            subject: "",
            title: "",
            text: ""
        }}
        validate={(values) => validate(values)}
        onSubmit={(values) => submitTicket(values)}
    >

        {({ values, setFieldValue, errors }) => (

            <Form >
                <Row className='px-4'>
                    <Col sm={6} className="ps-0">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Topic</label>
                            <div className="col-sm-10">
                                <CustomSelect
                                    options={categoryOption}
                                    value={values.subject}
                                    onChange={value => setFieldValue('subject', value.value)}
                                />
                                {errors?.subject ? <div className='error'>{errors.subject}</div> : null}
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} className="ps-0">
                    </Col>
                    <Col sm={6} className="ps-0">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">title</label>
                            <div className="col-sm-10">
                                <Field name="title" className="form-control h-75 mb-3" placeholder="Enter ticket's title" />
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} className="ps-0">
                    </Col>
                    <Col sm={12} className="ps-0">
                        <div className="form-group row">
                            <label className="col-sm-1 col-form-label">Ticket's text</label>
                            <div className="col-sm-10">
                                <Field as="textarea" name="text" rows="7" className="form-control h-75 mb-3 p-3" placeholder="Enter ticket's text" />
                                {errors?.text ? <div className='error'>{errors.text}</div> : null}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-end mb-5 me-sm-5 pe-0">
                    <Link to={TICKETING} className="btn btn-cancel d-flex justify-content-around px-5">
                        Cancel
                    </Link>
                    <button type="submit" className="btn btn-purple me-5 w-auto"
                    >
                        Send Ticket
                    </button>
                </Row>
            </Form>
        )}
    </Formik >

    return (
        <HistoryLayout
            title="Tickets"
            panelTitle="Add Ticket"
            body={body}
        />
    );
}