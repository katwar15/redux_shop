import { idText } from "typescript";
import { useAppDispatch } from "../../app/hooks";
import { removeNotification } from "./alertsSlice";

export interface AlertProps {
  type: string;
  message: string;
  id: string;
}

export function Alert(props: AlertProps) {
  const dispatch = useAppDispatch();

  const getClassType = (type: string): string => {
    switch (type) {
      case "success":
        return "alert-success";
      case "info":
        return "alert-info";
      case "warning":
        return "alert-warning";
      case "error":
        return "alert-danger";
      default:
        return "alert-dark";
    }
  };

  const handleRemoveClick = (id: string) => {
    dispatch(removeNotification({ id }));
  };

  return (
    <div className={"alert alert-dismissible " + getClassType(props.type)}>
      <strong>{props.message} </strong>
      <button
        onClick={() => handleRemoveClick(props.id)}
        type="button"
        className="btn-close"
      ></button>
    </div>
  );
}
