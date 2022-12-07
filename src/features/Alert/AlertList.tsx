import { useAppSelector } from "../../app/hooks";
import { Alert } from "./Alert";
import { selectLast3Notifications } from "./alertsSlice";

export function AlertList() {
  const alerts = useAppSelector(selectLast3Notifications);

  return (
    <div>
      {alerts.map((alert) => (
        <Alert type={alert.type} id={alert.id} message={alert.message} />
      ))}
    </div>
  );
}
