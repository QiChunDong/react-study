function AppButton({ children, onClick }) {
  return (
    <button className="btn" onClick={(e) => onClick(e)}>
      {children}
    </button>
  );
}

export default AppButton;
