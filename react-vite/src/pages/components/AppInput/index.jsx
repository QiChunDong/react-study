function AppInput({ value, className, type = "text", setState }) {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={(e) => setState(e.target.value)}
    />
  );
}

export default AppInput;
