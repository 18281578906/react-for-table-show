import React,{useEffect} from 'react';
import { Route, useHistory } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import Together from '../../pages/Together'
import MobileTogether from '../../pages/MobileTogether'
import './BaseLayout.scss'
//路由
import router from '../../router/router'
function _Layout(props) {
let history=useHistory()
// setTimeout(() => {
        if (!props.info) {
        console.log(history,props);
         history.push('/login')
    }
// }, 300);


    return (
        <div>
            { // 路由tab栏
                Object.values(router).map(e => {
                    return (
                        <Route path={e.url} exact component={e.page} key={e.url} />
                    )
                })
            }

            {/* <TabBar /> */}
            <div>
                {console.log(props.isPc)}
                {props.isPc !== 'init' ? <>{!props.isPc ?<MobileTogether /> : <Together /> }</> : null}
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(_Layout)