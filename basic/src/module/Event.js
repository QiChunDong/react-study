function onClickNoParam() {
    console.log('no param');
}

function onClickDefaultParam(e) {
    console.log('default param: ', e);
}

function onClickCustomParam(param) {
    console.log('custom param: ', param);
}

function onClickAllParam(param, e) {
    console.log('all param: ', param, e);
}

function Event() {
    return (
        <div>
            <div>测试按钮事件</div>
            <div>
                {/* 不需要参数的  直接写时间函数就行 */}
                <button onClick={onClickNoParam}>无参数</button>
                {/* 使用默认时间参数的 直接写函数就行 */}
                <button onClick={onClickDefaultParam}>默认事件参数</button>
                {/* 如果要使用自定义参数，就必须要写成箭头函数 */}
                <button onClick={() => onClickCustomParam('app1')}>自定义参数</button>
                {/* 如果想要事件参数，通过箭头函数接受e再传递 */}
                <button onClick={(e) => onClickAllParam('app2', e)}>两个参数</button>
            </div>
        </div>
    )
}

export default Event