import { useState } from "react";


function useStates() {
    let [count, setCount] = useState(0)
    
    function add() {
        setCount(count + 1)
        
        // 直接修改count是不会引发视图更新的
        count++
        console.log(count, 111);
    }

    const [obj, setObj] = useState({name: 'hh'})
    const updateName = () => {
        // 必须要用新对象覆盖，此处是解开之后覆盖值
        // obj.name = 'cc' 这样是不会更新视图的
        setObj({
            ...obj,
            name: 'cc'
        })
    }
    return (
        <div>
            <div>练习useState</div>
            <div>
                <button onClick={add}>{count}</button>
                <button onClick={updateName}>click form {obj.name}</button>
            </div>
        </div>
    )
}

export default useStates;