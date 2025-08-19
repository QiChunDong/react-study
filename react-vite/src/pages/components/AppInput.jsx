function AppInput(props) {
  // 默认的参数事props，但是呢，这里的props是可以在函数里直接解构，也可以此处解构，也可不解构，props.xxx调用
  const { className, type = "text", setState } = props;
  return (
    <input
      className={className}
      type={type}
      value={props.value}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export default AppInput;
