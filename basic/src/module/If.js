
let articleType = 2

function getArticleType(type) {
    if (type === 0) {
        return <div>无图模式</div>
    } else if (type === 1) {
        return <div>单图模式</div>
    } else if (type === 2) {
        return <div>三图模式</div>
    } else{
        return <div>未知模式</div>
    }
}

function If() {
    return (
        <div>
            <div>if条件判断</div>
            {/* 可以将条件判断放到函数中 */}
            {getArticleType(articleType)}
        </div>
    )
}

export default If