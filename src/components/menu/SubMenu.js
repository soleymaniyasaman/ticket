import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './menu.scss'



const SidebarLink = styled(NavLink)`
  display: flex;
  color: #FFF;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;
  text-decoration: none;
  .activeImg{
    display: ${props => props.activeClick}!important;
  }
  .deactiveImg{
    display: ${props => props.deactiveCLick}!important;
  }
  &:hover {
    background: #293C55;
    border-left: 4px solid #7E94FF;
    cursor: pointer;
    color: #FFF;
    text-decoration: none;
    .activeImg{
      display: block!important;
    }
    .deactiveImg{
      display: none!important;
    }
  };
  &:active {
    background: #293C55!important;
    border-left: 4px solid #7E94FF;
    cursor: pointer;
    color: #FFF;
    text-decoration: none;
    };
`;


const SidebarLabel = styled.span`
  margin-right: 16px;
`;


const DropdownLink = styled(NavLink)`
background: #172B46  0% 0% no-repeat padding-box;
height: 60px;
padding-right: 3rem;
padding-left: 10px;
display: flex;
align-items: center;
text-decoration: none;
color: #FFF;
font-size: 18px;
&:hover {
  border-left: 4px solid #7E94FF;
  background: #293C55;
  cursor: pointer;
  color: #FFF;
  text-decoration: none;
}
&:active {
  border-left: 4px solid #7E94FF;
  background: #293C55;
  cursor: pointer;
  color: #FFF;
  text-decoration: none; 
}
@media (max-width: 992px) {
  padding-right: 1.5rem;
}
`;



const SubMenu = ({ item, open, setOpen }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav)
  };

  const handleClick = (props) => {

  }

  return (
    <>

      <SidebarLink
        id="sideBarLink"
        activeClick={(window.location.pathname + window.location.search) === item.link ? "block" : "none"}
        deactiveCLick={(window.location.pathname + window.location.search) === item.link ? "none" : "block"}
        activeClassName={item.link ? "is-active" : null}
        exact={false}
        to={item.link ? item.link : window.location}
        onClick={item.subNav ? showSubnav : handleClick} >
        <img id="icon" alt='' src={item.icon} className="deactiveImg" />
        <img id="icon" alt='' src={item.activeIcon} className="activeImg" />
        <SidebarLabel id="title">{item.title}</SidebarLabel>
        <div id="spanDown">
          {(window.location.pathname + window.location.search) === item.link ?
            item.iconleftViolet
            :
            item.subNav && subnav
              ? item.iconOpened
              : item.subNav
                ? item.iconClosed
                : item.iconleft}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink activeClassName={(window.location.pathname + window.location.search) === item.link ? "is-active" : null} to={item.link} key={index} onClick={handleClick}>
              <SidebarLabel id="title" style={{ opacity: 0.7 }}>{item.title}</SidebarLabel>
              <div>
                {(window.location.pathname + window.location.search) === item.link ?
                  item.iconleftViolet
                  : item.iconleft}
              </div>
            </DropdownLink>
          );
        })}

    </>
  );
};



export default SubMenu;
