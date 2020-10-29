let initState = {
    num: 0,
    tabStatus: 0,
    info: {},
    isPc: 'init',
}


export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            state.num++
                break;
        case "TAB":
            state.tabStatus = action.index
            break;
        case 'INFO':
            state.info = action.data
            break;
        case 'ISPC':
            state.isPc = action.bool
            break;
        default:
            return state
    }
    return JSON.parse(JSON.stringify(state))
}