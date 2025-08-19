function PasswordInput({ value, className, onChange }) {
  return (
    <input
      className={className}
      type="password"
      value={value}
      onChange={onChange}
    />
  );
}

export default PasswordInput;
