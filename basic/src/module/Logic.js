const isLogin = true;
function Logic() {
    return (
        <div>
            <div>====条件渲染====</div>
            {/* 逻辑与 && */}
            { isLogin && <div>逻辑与 &&： this is a span </div>}
            {/* 三元运算 */}
            { isLogin ? <div>三元： true</div> : <div>三元： false</div> }
            {/* if(isLogin) {
                <div>if: true</div>
            } else {
                <div>if: false</div>
            } */}
        </div>
    )
}

export default Logic;