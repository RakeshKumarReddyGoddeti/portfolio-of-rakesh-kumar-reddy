/* eslint-disable react/prop-types */
function Button({ children, className, onClick, style, type}) {
  return (
    <button onClick={onClick} className={className} style={style} type={type}>
      {children}
    </button>
  );
}

export default Button;