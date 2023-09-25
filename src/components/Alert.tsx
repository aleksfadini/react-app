import { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert ? (
        <div
          className="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          {children}{" "}
          <div className="btn btn-close" data-bs-dismiss="alert"></div>
        </div>
      ) : null}
    </>
  );
}

export default Alert;
