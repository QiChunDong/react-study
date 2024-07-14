import List from './module/List'
import Logic from './module/Logic'
import If from './module/If'
import Event from './module/Event'
import UseStateCase from './module/UseStateCase'
const count = 100
function getNmae() {
  return "传递一个函数调用" 
}
function App() {
  return (
    <div className="App">
      hello world1111
      {/* 使用引号传递字符串  */}
      {'使用引号传递字符串'}
      {/* 传递一个变量count */}
      {count}
      {/* 传递一个函数的调用 */}
      {getNmae()}
      {/* 可以使用js的对象 */}
      {new  Date().getTime()}
      {/* js对象 */}
      <div style={{color: 'red'}}>this is a test</div>
      <List />
      <Logic />
      <If />
      <Event />
      <UseStateCase />
    </div>
  );
}

export default App;
