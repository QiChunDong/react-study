
const listData = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'}
]
function List() {
    return (
        <div>
            <div>列表循环</div>
            <ul>
                {listData.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}
export default List;