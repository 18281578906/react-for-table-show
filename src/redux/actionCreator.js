// import { } from '../api/api'


export const mapStateToProps = (state, ownProps) => {
    return {
        num: state.num,
        tabStatus: state.tabStatus,//tab路由状态
        info: state.info,
        isPc: state.isPc,
    }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => {
            dispatch({ type: 'ADD' })
        },
        getInfo: (data) => {  // 保存用户信息
            dispatch({ type: 'INFO', data })
        },
        getIsPc: (bool) => {
            dispatch({ type: 'ISPC', bool })
        },
        activeTab: (index) => {  //tab路由状态
            dispatch({ type: 'TAB', index: index })
        },
    }
}

