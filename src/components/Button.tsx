interface Props {
  text: string;
  onClickedBtn: (btnName: string) => void;
}

const Button = ({ text, onClickedBtn }: Props) => {
  return (
    <div
      className="button btn-primary"
      onClick={() => {
        onClickedBtn(text);
      }}
    >
      {text}
    </div>
  );
};

export default Button;
