import React, { useState, useEffect } from 'react';

import { Field, Formik } from 'formik';

import { Col, Row } from 'react-bootstrap';

import { TICKETING } from '../../../../navigation/CONSTANS';

import { Link, useHistory } from 'react-router-dom';

import HistoryLayout from '../../history/hisory-layout';

import { FormItem, Select } from 'formik-antd';

import { BASE_URL, IAM_APP } from '../../../../utils/constants';

import service from '../../../../services/service';

import '../style.scss';





export default function AddTicket(props) {

    let history = useHistory()

    //ticket category state

    const [categoryOption, setCategoryOption] = useState()



    // submit

    const submitTicket = (values) => {

        const submitTicketQuery = `${BASE_URL(IAM_APP)}/ticketing/`

        let payload = {

            "title": values.title,

            "body": values.body,

            "category_id": values.category_id,

            "priority": "high",

            "media_id": 1

        }

        service.post_api(submitTicketQuery, payload = payload)

            .then(resp => {

                history.push(TICKETING)

            })

    }

    //ticket category

    const category = () => {

        const levelListUrl = `${BASE_URL(IAM_APP)}/ticketing/category/`

        service.get_api(levelListUrl)

            .then(resp => {

                setCategoryOption(resp.data.result.items)

            })

    }

    useEffect(() => {

        category()

    }, []);

    const body = <Formik

        initialValues={{}}

        onSubmit={(values) => submitTicket(values)}

    >

        {({ handleSubmit }) => (

            <form onSubmit={handleSubmit} id="addTicket">

                <Row>

                    <Col sm={6} className="pl-0">

                        <div className="form-group row">

                            <label className="col-sm-2 col-form-label">موضوع</label>

                            <div className="col-sm-10">

                                <FormItem

                                    name="category_id"

                                >

                                    <Select

                                        name="category_id"

                                        className=" h-75 bg_input form-control"

                                        allowClear

                                        placeholder="موضوع تیکت را انتخاب کنید"

                                    >

                                        {categoryOption ? categoryOption.map((item, index) => {

                                            return <Select.Option key={index} class="dropdown-item" value={item.id} style={{ direction: 'rtl' }}>{item.title}</Select.Option>

                                        })

                                            :

                                            null

                                        }

                                    </Select>

                                </FormItem>

                            </div>

                        </div>

                    </Col>

                    <Col sm={6} className="pl-0">

                    </Col>

                    <Col sm={6} className="pl-0">

                        <div className="form-group row">

                            <label className="col-sm-2 col-form-label">عنوان</label>

                            <div className="col-sm-10">

                                <Field name="title" className="form-control h-75 mb-3" placeholder="عنوان تیکت را وارد کنید" />

                            </div>

                        </div>

                    </Col>

                    <Col sm={6} className="pl-0">

                    </Col>

                    <Col sm={12}>

                        <div className="form-group row">

                            <label className="col-sm-1 col-form-label">متن تیکت </label>

                            <div className="col-sm-10">

                                <Field as="textarea" name="text" rows="7" className="form-control h-75 mb-3 p-3" placeholder="متن تیکت را وارد کنید" />

                            </div>

                        </div>

                    </Col>

                </Row>

                <Row className="justify-content-end mb-5 ml-sm-5 pl-0">

                    <button type="button" className="btn btn-cancele d-flex justify-content-around px-5">

                        <Link to={TICKETING} className="text-danger text-decoration-none">

                            انصراف

                        </Link>

                    </button>

                    <button type="submit" className="btn btn-purple ml-5 w-auto"

                    >

                        ارسال تیکت

                    </button>

                </Row>

            </form>

        )}

    </Formik>

    return (

        <HistoryLayout

            title="تیکت ها"

            panelTitle="ثبت تیکت جدید"

            // filter={filter}

            body={body}

        />

    );

}