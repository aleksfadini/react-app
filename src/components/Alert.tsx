import { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  //   const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <div
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
}

export default Alert;
