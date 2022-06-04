

import React, { useState } from 'react';

import styled from 'styled-components';

import SubMenu from './SubMenu';

import { IconContext } from 'react-icons/lib';

import './menu.scss';

import company_logo_white from '../../assets/vector/company_logo/moj_exchange(white).svg'

import IconClose from '../../assets/vector/dashboard/dashboard-24px.svg'

import marketIcon from '../../assets/vector/drawer/deactive/toll-24px.svg';

import marketIconActive from '../../assets/vector/drawer/active/toll-24px.svg';

import IconCloseViolet from '../../assets/vector/dashboard/Path 476.svg'

import dashboardIcon from '../../assets/vector/drawer/deactive/dashboard-1.svg';

import dashboardIconActive from '../../assets/vector/drawer/active/dashboard-1.svg';

import { TICKETING } from '../../navigation/CONSTANS';

import wallet from '../../assets/vector/drawer/deactive/account_balance_wallet-24px.svg'

import walletActive from '../../assets/vector/drawer/active/account_balance_wallet-24px.svg'

import listAltIcon from '../../assets/vector/drawer/deactive/account_balance_wallet-1.svg';

import listAltIconActive from '../../assets/vector/drawer/active/account_balance_wallet-1.svg';


const SidebarData = [

  {

    elementNo: 0,

    title: "Dashboard",

    icon: dashboardIcon,

    activeIcon: dashboardIconActive,

    link: TICKETING,

    iconClosed: <img alt="" src={IconClose} />,

    iconOpened: <img alt="" src={IconClose} />,

    iconleft: <img alt="" src={IconClose} />,

    iconleftViolet: <img alt="" src={IconCloseViolet} />,

  },

  {

    elementNo: 1,

    title: "Wallet",

    icon: wallet,

    activeIcon: walletActive,

    link: TICKETING,

    iconClosed: <img alt="" src={IconClose} />,

    iconOpened: <img alt="" src={IconClose} />,

    iconleft: <img alt="" src={IconClose} />,

    iconleftViolet: <img alt="" src={IconCloseViolet} />,


  },

  {

    elementNo: 2,

    title: "My Orders",

    icon: listAltIcon,

    activeIcon: listAltIconActive,

    link: TICKETING,

    iconClosed: <img alt="" src={IconClose} />,

    iconOpened: <img alt="" src={IconClose} />,

    iconleft: <img alt="" src={IconClose} />,

    iconleftViolet: <img alt="" src={IconCloseViolet} />,


  }
]
const SidebarWrap = styled.div`

width: 100%;

height: 100%;

z-index: 500;

overflow-y: scroll;

::-webkit-scrollbar{

  display: none

};

`;



const SidebarNav = styled.nav`

  background: #172B46  0% 0% no-repeat padding-box;

  width: 12.8vw;

  height: 100vh;

  display: flex;

  justify-content: center;

  position: fixed;

  top: 0;

  z-index: 500;

  transition: 350ms;

  direction: rtl;

  text-align: right;

  overflow: hidden;

  transform: ${props => props.transform};

  @media (max-width: 576px) {

    width: 80%;

    right: -1.4rem;

  }



`;

const SidebarBrand = styled.div`

height: 70px;

width: 100%;

padding: 0;

display:flex;

justify-content: center;

align-items:center;

margin: auto;

padding: auto;

color:${props => props.color};

background:${props => props.background};

`;

const DashboardMenu = ({ open, setOpen }) => {

  const [list, setList] = useState({

    elementNo: 3,

    title: 'Markets',

    icon: marketIcon,

    activeIcon: marketIconActive,

    iconClosed: <img alt="" src={IconClose} />,

    iconOpened: <img alt="" src={IconClose} />,

    subNav: []
  });

  return (

    < >

      <IconContext.Provider value={{ color: '#fff' }} >

        <SidebarNav transform={null}>

          <SidebarWrap>

            <SidebarBrand color={'#fff'}

              background={'#7E94FF 0% 0% no-repeat padding-box'}

            >
              <img alt="" src={company_logo_white} />

            </SidebarBrand>

            {SidebarData.map((item, index) => {

              if (item.title === 'Markets') {

                return <SubMenu item={list} key={index} open={open} setOpen={setOpen} className="sidebarList" />;

              } else {

                return <SubMenu item={item} key={index} open={open} setOpen={setOpen} className="sidebarList" />;

              }


            })}

          </SidebarWrap>

        </SidebarNav>

      </IconContext.Provider>

    </>

  );

};



export default DashboardMenu;
