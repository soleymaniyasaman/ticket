import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { LOGIN, ROOT, REGISTER, FORGOTPASSWORD, MARKETS, BARGAIN, REFERRAL, DASHBOARD, WALLET, MYORDERS, BRAGAINSHISTORY, DEPOSITSHISTORY, ORDERSHISTORY, TRANSACTIONSHISTORY, WITHDRAWSHISTORY, PROFILE, EXCHANGE, DEPOSIT_TO_WALLET, WITHDRAW_FROM_WALLET, WALLET_DETAIL, SETPASSWORD, VERIFY, AUTHORIZE, SUCCESS_DEPOSIT, FAILURE_DEPOSIT, RESULT_DEPOSIT, LOGINHISTORY, POLICIES, TICKETING, ADDTICKETING, MESSAGES, SETTING, BARGAINFACTORHISTORY, SCORE, CALLUS, ABOUTUS, FAQ, LOGIN2FASMS, LOGIN2FAEMAIL, LOGIN2FAAUTHENTICATOR, HELP, BARGAINFACTOR, COMMISSION } from './CONSTANS'



//layouts

import AuthenticationLayout from '../pages/authentication'

import UserSideLayout from '../pages/user-side/user-side-layout'

import DashboardLayout from '../pages/dashboard/layout'



//pages
import Ticketing from '../pages/dashboard/ticketing'


const RouterConfig = () => {

    return (

        <div className="routLayout">

            <Router>

                <ScrollToTop />

                <Switch>

                    <Route path='/auth/:path?' exact>

                        <AuthenticationLayout>

                            <Switch>

                                <Route path={LOGIN}>

                                    <Login />

                                </Route>

                                <Route path={LOGIN2FASMS}>

                                    <Sms2Fa />

                                </Route>

                                <Route path={LOGIN2FAEMAIL}>

                                    <Email2Fa />

                                </Route>

                                <Route path={LOGIN2FAAUTHENTICATOR}>

                                    <Authenticator2Fa />

                                </Route>

                                <Route path={REGISTER}>

                                    <Register />

                                </Route>

                                <Route path={VERIFY}>

                                    <Verify />

                                </Route>

                                <Route path={SETPASSWORD}>

                                    <SetPassword />

                                </Route>

                                <Route path={FORGOTPASSWORD}>

                                    <ForgotPassword />

                                </Route>

                            </Switch>

                        </AuthenticationLayout>

                    </Route>

                    <Route path='/panel/:path?/:path?' exact>

                        <DashboardLayout>

                            <Switch>

                                <Route exact path={DASHBOARD}>

                                    <Dashboard />

                                </Route>

                                <Route exact path={WALLET}>

                                    <Wallet />

                                </Route>

                                <Route exact path={WALLET_DETAIL}>

                                    <WalletDetail />

                                </Route>

                                <Route exact path={DEPOSIT_TO_WALLET}>

                                    <DepositToWallet />

                                </Route>

                                <Route exact path={RESULT_DEPOSIT}>

                                    < ResultDeposit />

                                </Route>

                                <Route exact path={WITHDRAW_FROM_WALLET}>

                                    <WithdrawFromWallet />

                                </Route>

                                <Route exact path={MYORDERS}>

                                    <MyOrders />

                                </Route>

                                <Route exact path={REFERRAL}>

                                    <Referral />

                                </Route>

                                <Route exact path={SETTING}>

                                    <Setting />

                                </Route>

                                <Route exact path={AUTHORIZE}>

                                    <Authorize />

                                </Route>

                                <Route exact path={PROFILE}>

                                    <Profile />

                                </Route>

                                <Route exact path={EXCHANGE}>

                                    <Exchange />

                                </Route>

                                <Route exact path={BRAGAINSHISTORY}>

                                    <BargainsHistory />

                                </Route>

                                <Route exact path={DEPOSITSHISTORY}>

                                    <DepositsHistory />

                                </Route>

                                <Route exact path={ORDERSHISTORY}>

                                    <OrdersHistory />

                                </Route>

                                <Route exact path={TRANSACTIONSHISTORY}>

                                    <TransactionsHistory />

                                </Route>

                                <Route exact path={WITHDRAWSHISTORY}>

                                    <WithdrawsHistory />

                                </Route>

                                <Route exact path={LOGINHISTORY}>

                                    <LoginHistory />

                                </Route>

                                <Route exact path={BARGAINFACTORHISTORY}>

                                    <BargainsFactorHistory />

                                </Route>

                                <Route exact path={BARGAINFACTOR}>

                                    <Factor />

                                </Route>

                                <Route path='/panel/ticket/:path?' exact >

                                    <Switch>

                                        <Route exact path={TICKETING}>

                                            <Ticketing />

                                        </Route>

                                        <Route exact path={ADDTICKETING}>

                                            <AddTicket />

                                        </Route>

                                    </Switch>

                                </Route>

                                <Route exact path={MESSAGES}>

                                    <Messages />

                                </Route>

                                <Route exact path={SCORE}>

                                    <Score />

                                </Route>

                            </Switch>

                        </DashboardLayout>

                    </Route>

                    <Route>

                        <UserSideLayout>

                            <Switch>

                                <Route exact path={MARKETS}>

                                    <Markets />

                                </Route>

                                <Route exact path={CALLUS}>

                                    <CallUs />

                                </Route>

                                <Route exact path={ABOUTUS}>

                                    <AboutUs />

                                </Route>

                                <Route exact path={HELP}>

                                    <Help />

                                </Route>

                                <Route exact path={BARGAIN}>

                                    <Bargain />

                                </Route>

                                <Route exact path={COMMISSION}>

                                    <Commission />

                                </Route>

                                <Route path={POLICIES}>

                                    <Policies />

                                </Route>

                                <Route path={FAQ}>

                                    <Faq_page />

                                </Route>

                                <Route exact path={ROOT}>

                                    <Home />

                                </Route>

                            </Switch>

                        </UserSideLayout>

                    </Route>

                    <Route path="*">

                        <NotFound />

                    </Route>

                </Switch>

            </Router>

        </div>

    )

}

export default RouterConfig;