"use client";

import { useNotificationStore } from "@/stores/notification.store";
import { NotificationProps } from "./notification.types";
import NotificationToast from "./notification-toast";

const Notifications: React.FC<NotificationProps> = () => {
  const notifications = useNotificationStore((state) => state.notifications);

  if (notifications.length < 1) return null;

  return (
    <div className="fixed flex flex-col-reverse bottom-3 right-3 gap-3">
      {notifications.map((n) => {
        return (
          <NotificationToast key={`notification-${n.id}`} notification={n} />
        );
      })}
    </div>
  );
};

export default Notifications;
