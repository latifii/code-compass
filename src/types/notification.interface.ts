export type NotificationType = "success" | "error" | "info" | "warning";

export interface Notification {
  id: string;
  duration?: number;
  message: string;
  type: NotificationType;
}
