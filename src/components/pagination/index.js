import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";

import "./pagination.scss";



function PaginationComponent(props) {

  const [pageNumberLimit, setpageNumberLimit] = useState(3);

  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);

  const [minPageNumberLimit, setminPageNumberLimit] = useState(-1);

  const pages = [];

  for (let i = 1; i <= Math.ceil(props.total / props.itemsPerPage); i++) {

    pages.push(i);

  }

  const handleClick = (event) => {

    props.setcurrentPage(Number(event.target.id));

  };



  const renderPageNumbers = pages.map((number) => {

    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {

      return (

        <li

          key={number}

          id={number}

          onClick={handleClick}

          className={props.currentPage === number ? "active" : null}

        >

          {number}

        </li>

      );

    } else {

      return null

    }

  });



  const handleNextbtn = () => {

    props.setcurrentPage(props.currentPage + 1);



    if (props.currentPage + 1 > maxPageNumberLimit) {

      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);

      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);

    }

  };



  const handlePrevbtn = () => {

    props.setcurrentPage(props.currentPage - 1);



    if ((props.currentPage - 1) % pageNumberLimit === 0) {

      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);

      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);

    }

  };



  let pageIncrementBtn = null;

  if (pages.length > maxPageNumberLimit) {

    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;

  }



  let pageDecrementBtn = null;

  if (minPageNumberLimit >= 1) {

    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;

  }


  return (

    <>

      {props.children}

      <ul className="pageNumbers" style={{ display: props.display }}>

        <li>

          <button

            onClick={handlePrevbtn}

            disabled={props.currentPage === pages[0] ? true : false}

          >

            <FontAwesomeIcon icon={faAngleRight} color="#7E94FF" />

          </button>

        </li>

        {pageDecrementBtn}

        {renderPageNumbers}

        {pageIncrementBtn}

        <li>

          <button

            onClick={handleNextbtn}

            disabled={props.currentPage === pages[pages.length - 1] ? true : false}

          >

            <FontAwesomeIcon icon={faAngleLeft} color="#7E94FF" />

          </button>

        </li>

      </ul>



    </>

  );

}



export default PaginationComponent;
