import React from 'react'
import { mapStateToProps, mapDispatchToProps } from './redux/actionCreator'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


//路由
// import router from './router/router'

//布局组件
import BaseLayout from './component/layout/BaseLayout'

import './App.css'


//组件
import Login from './pages/Login'
import { useEffect } from 'react'

function _App(props) {
    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        console.log(userAgentInfo);

        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    useEffect(() => {
        // if (!IsPC()) {
        //     new VConsole()
        // }
        props.getIsPc(IsPC())
        if (localStorage.getItem('loginInfo')) {
            if (Object.keys(JSON.parse(localStorage.getItem('loginInfo')))[0]) {
                props.getInfo(JSON.parse(localStorage.getItem('loginInfo')))
            }
        }else{
            props.getInfo({})
        }
    }, [props.IsPC])
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/' exact component={BaseLayout} ></Route>
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(_App)
