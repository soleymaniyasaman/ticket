import React, { createContext, useState } from 'react';

// import useToken from '../useToken';

// import { getTokenObject, RefreshToken } from '../utils/utils';

// const tokens = getTokenObject()

export const AuthContext = createContext();

const MyProvider = ({ children }) => {

  const [isMobile, setIsMobile] = useState(false);

  const [nationalCode, setNationalCode] = useState();

  const [profileInfo, setProfileInfo] = useState();

  const [mobile, setMobile] = useState();

  const [otp, setOtp] = useState();

  // const { token, setToken } = useToken();

  //level

  const [currentLevel, setCurrentLevel] = useState();

  // const [tokenExpirationTime, setTokenExpirationTime] = useState();

  const [wallet, setWallet] = useState();

  // open sell wallet cash

  const [openSellCoinCash, setOpenSellCoinCash] = useState();

  // open buy wallet cash

  const [openBuyUsdtCash, setOpenBuyUsdtCash] = useState();

  const [openBuyIrrCash, setOpenBuyIrrCash] = useState();

  // whole wallet

  const [walletUsdtCash, setWalletUsdtCash] = useState();

  const [walletIrrCash, setWalletIrrCash] = useState();

  const [walletBtcCash, setWalletBtcCash] = useState();

  const [walletEthCash, setWalletEthCash] = useState();

  const [walletId, setWalletId] = useState();

  //wallet toggle state

  const [toggleWalletPrice, setToggleWalletPrice] = useState(false);

  const [toggleWaletIrrValue, setToggleWaletIrrValue] = useState(false);

  const [usdtIrr, setUsdtIrr] = useState();

  const [priceUpdate, setPriceUpdate] = useState();

  const [originWallet, setOriginWallet] = useState("irr");

  const [sellData, setSellData] = useState([]);

  const [sellDataVolume, setSellDataVolume] = useState([]);

  const [sellCreate, setSellCreate] = useState(true);

  const [buyCreate, setBuyCreate] = useState(false);

  const [buyData, setBuyData] = useState([]);

  const [buyDataVolume, setBuyDataVolume] = useState([]);

  const [buyDataLength, setBuyDataLength] = useState([]);

  const [sellDataLength, setSellDataLength] = useState([]);

  const [tradeData, setTradeData] = useState();

  const [tradeDataSell, setTradeDataSell] = useState();

  const [tradeDataBuy, setTradeDataBuy] = useState();

  const [myTradeData, setMyTradeData] = useState();

  const [myOrderData, setMyOrderData] = useState([]);

  const [myBtcOrderData, setMyBtcOrderData] = useState();

  const [orderCreate, setOrderCreate] = useState();

  const [orderUpdate, setOrderUpdate] = useState();

  const [orderDelete, setOrderDelete] = useState();

  const [transactionData, setTransactionData] = useState();

  const [widthdrawData, setWidthdrawData] = useState();

  const [paymentData, setPaymentData] = useState();

  const [coinPaymentData, setCoinPaymentData] = useState();

  const [tradeCreate, setTradeCreate] = useState(false);

  const [depositAmount, setDepositAmount] = useState();

  const [filterValue, setFilterValue] = useState();

  const [active, setActive] = useState({

    stepp_one: false,

    stepp_two: false,

    stepp_three: false,

    stepp_four: false

  });

  const [btcUsd, setBtcUsd] = useState();

  const [usdIrr, setUsdIrr] = useState();

  const [ethUsd, setEthUsd] = useState();

  const [ltcUsd, setLtcUsd] = useState();

  const [ticketList, setTicketList] = useState();

  const [socketData, setSocketData] = useState({

    ethUsd: "",

    usdIrr: "",

    btcUsd: "",

    ltcUsd: "",

    bchUsd: ""

  });

  const [popUpShow, setPopUpShow] = useState(false);

  const [filterPopUpShow, setFilterPopUpShow] = useState(false);

  const [rowId, setRowId] = useState();

  //message

  const [messageUnreadCount, setMessageUnreadCount] = useState(false);

  //coins Name

  const [coinsName, setCoinsName] = useState([]);

  //2fa login auth

  const [showToggleGoogleAuth, setShowToggleGoogleAuth] = useState(false);

  const [showBoxes, setShowBoxes] = useState(true);

  const [showMessage, setShowMessage] = useState(false);

  const [showGoogleAuth, setShowGoogleAuth] = useState(false);

  const [showApproveGoogleAuth, setShowApproveGoogleAuth] = useState(false);

  const [tokenChain, setTokenChain] = useState("trx");

  const [configData, setConfigData] = useState();

  // const [isLoggedIn, setIsLoggedIn] = useState(Boolean(RefreshToken()))

  const isLoggedIn = true;

  const logout = () => {

    // setToken(null);

    // setTokenExpirationTime(null);

    localStorage.removeItem("userData");

  }

  return (

    <AuthContext.Provider value={{

      isLoggedIn,

      isMobile,

      setIsMobile,

      // token,

      // setToken,

      logout,

      nationalCode,

      setNationalCode,

      profileInfo,

      setProfileInfo,

      mobile,

      setMobile,

      otp,

      setOtp,

      wallet,

      setWallet,



      currentLevel,

      setCurrentLevel,

      //open sell walllet

      openSellCoinCash,

      setOpenSellCoinCash,

      //open buy wallet

      openBuyUsdtCash,

      setOpenBuyUsdtCash,

      openBuyIrrCash,

      setOpenBuyIrrCash,

      //whole

      walletUsdtCash,

      setWalletUsdtCash,

      walletEthCash,

      setWalletEthCash,

      walletBtcCash,

      setWalletBtcCash,

      walletIrrCash,

      setWalletIrrCash,

      walletId,

      setWalletId,

      //wallet toggle

      toggleWalletPrice,

      setToggleWalletPrice,

      toggleWaletIrrValue,

      setToggleWaletIrrValue,

      usdtIrr,

      setUsdtIrr,

      priceUpdate,

      setPriceUpdate,

      originWallet,

      setOriginWallet,

      sellData,

      setSellData,

      sellDataVolume,

      setSellDataVolume,

      buyData,

      setBuyData,

      buyDataVolume,

      setBuyDataVolume,

      buyDataLength,

      setBuyDataLength,

      sellDataLength,

      setSellDataLength,

      tradeData,

      setTradeData,

      tradeDataSell,

      setTradeDataSell,

      tradeDataBuy,

      setTradeDataBuy,

      myTradeData,

      setMyTradeData,

      myOrderData,

      setMyOrderData,

      myBtcOrderData,

      setMyBtcOrderData,

      orderCreate,

      setOrderCreate,

      orderUpdate,

      setOrderUpdate,

      orderDelete,

      setOrderDelete,

      tradeCreate,

      setTradeCreate,

      sellCreate,

      setSellCreate,

      buyCreate,

      setBuyCreate,

      active,

      setActive,

      depositAmount,

      setDepositAmount,

      filterValue,

      setFilterValue,

      transactionData,

      setTransactionData,

      paymentData,

      setPaymentData,

      coinPaymentData,

      setCoinPaymentData,

      widthdrawData,

      setWidthdrawData,

      btcUsd,

      setBtcUsd,

      usdIrr,

      setUsdIrr,

      ethUsd,

      setEthUsd,

      ltcUsd,

      setLtcUsd,

      ticketList,

      setTicketList,

      socketData,

      setSocketData,

      popUpShow,

      setPopUpShow,

      filterPopUpShow,

      setFilterPopUpShow,

      rowId,

      setRowId,

      //messag

      messageUnreadCount,

      setMessageUnreadCount,

      coinsName,

      setCoinsName,

      showToggleGoogleAuth,

      setShowToggleGoogleAuth,

      showBoxes,

      setShowBoxes,

      showMessage,

      setShowMessage,

      showGoogleAuth,

      setShowGoogleAuth,

      showApproveGoogleAuth,

      setShowApproveGoogleAuth,

      tokenChain,

      setTokenChain,

      configData,

      setConfigData

    }} >

      {children}

    </AuthContext.Provider>

  );

}



export default MyProvider;



// export const AuthContext = React.createContext({

//     isLoggedIn: token ? true : false,

//     token: null,

//     login: () => {},

//     logout: () => {}

// });

