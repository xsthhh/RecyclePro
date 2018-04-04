import React from 'react'
import Index from '../page/Layout.js'
import UserCount from '../page/UserCount.js'
import UserCombine from '../page/UserCombine.js'
import UserLocal from '../page/UserLocal.js'
import Collector from '../page/Collector.js'
import AllRecycle from '../page/AllRecycle.js'
import StationRecycle from '../page/StationRecycle.js'
import CheckOrder from '../page/CheckOrder.js'
import OrderSort from '../page/OrderSort.js'
import RecycleFee from '../page/RecycleFee.js'
import ConsumeFee from '../page/ConsumeFee.js'
import Knowledge from '../page/Knowledge.js'
import EduWork from '../page/EduWork.js'
import GiftGrant from '../page/GiftGrant.js'
import StuParticipation from '../page/StuParticipation.js'
import RemouldWork from '../page/RemouldWork.js'
import DonateAndSell from '../page/DonateAndSell.js'
import AppFocus from '../page/AppFocus.js'
import WorkShare from '../page/WorkShare.js'
import DonateClick from '../page/DonateClick.js'
import CheckFeedback from '../page/CheckFeedback.js'
import FeedbackSta from '../page/FeedbackSta.js'
import Account from '../page/Account.js'
import Limits from '../page/Limits.js'
import System from '../page/System.js'
import ElseSet from '../page/ElseSet.js'
import '../App.css'
import {Router,Route,hashHistory,browserHistory,IndexRedirect} from 'react-router'
class App extends React.Component{
    render(){
        return(
            
                <Router history={hashHistory}>
                    <Route path='/'>
                        <IndexRedirect to='/index'></IndexRedirect>
                        <Route path='/index' component={Index}>
                            <Route path='/index/user' component={UserCount}/>
                            <Route path='/index/usercom' component={UserCombine}/>
                            <Route path='/index/userlocal' component={UserLocal}/>
                            <Route path='/index/collector' component={Collector}/>
                            <Route path='/index/allrecycle' component={AllRecycle}/>
                            <Route path='/index/stationrecycle' component={StationRecycle}/>
                            <Route path='/index/checkorder' component={CheckOrder}/>
                            <Route path='/index/ordersort' component={OrderSort}/>
                            <Route path='/index/recyclefee' component={RecycleFee}/>
                            <Route path='/index/consumefee' component={ConsumeFee}/>
                            <Route path='/index/knowledge' component={Knowledge}/>
                            <Route path='/index/eduwork' component={EduWork}/>
                            <Route path='/index/giftgrant' component={GiftGrant}/>
                            <Route path='/index/stuparticipation' component={StuParticipation}/>
                            <Route path='/index/remouldwork' component={RemouldWork}/>
                            <Route path='/index/donateandsell' component={DonateAndSell}/>
                            <Route path='/index/appfocus' component={AppFocus}/>
                            <Route path='/index/workshare' component={WorkShare}/>
                            <Route path='/index/donateclick' component={DonateClick}/>
                            <Route path='/index/checkfeedback' component={CheckFeedback}/>
                            <Route path='/index/feedbacksta' component={FeedbackSta}/>
                            <Route path='/index/account' component={Account}/>
                            <Route path='/index/limits' component={Limits}/>
                            <Route path='/index/system' component={System}/>
                            <Route path='/index/elseset' component={ElseSet}/>
                        </Route>
                    </Route>
                </Router>
            
        )
    }
}

export default App