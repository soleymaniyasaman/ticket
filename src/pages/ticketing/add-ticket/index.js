import React, { useState, useEffect } from 'react';

import { Field, Formik } from 'formik';

import { Col, Row } from 'react-bootstrap';

import { TICKETING } from '../../../navigation/CONSTANS';

import { Link } from 'react-router-dom';

import { FormItem, Select } from 'formik-antd';

import '../style.scss';

import HistoryLayout from '../../../components/hisory-layout';





export default function AddTicket(props) {

    //ticket category state

    const [categoryOption, setCategoryOption] = useState()



    // submit

    const submitTicket = (values) => {

    }

    //ticket category

    const category = () => {

        setCategoryOption()

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

                    <Col sm={6} className="ps-0">

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

                    <Col sm={6} className="ps-0">

                    </Col>

                    <Col sm={6} className="ps-0">

                        <div className="form-group row">

                            <label className="col-sm-2 col-form-label">عنوان</label>

                            <div className="col-sm-10">

                                <Field name="title" className="form-control h-75 mb-3" placeholder="عنوان تیکت را وارد کنید" />

                            </div>

                        </div>

                    </Col>

                    <Col sm={6} className="ps-0">

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

                <Row className="justify-content-end mb-5 me-sm-5 pe-0">

                    <button type="button" className="btn btn-cancele d-flex justify-content-around px-5">

                        <Link to={TICKETING} className="text-danger text-decoration-none">

                            انصراف

                        </Link>

                    </button>

                    <button type="submit" className="btn btn-purple me-5 w-auto"

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

            body={body}

        />

    );

}