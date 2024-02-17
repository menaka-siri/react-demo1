interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger'; // '?' indicates that a property is optional
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary"}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
