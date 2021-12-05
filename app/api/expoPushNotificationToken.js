import client from "./client";

const endpoint = "/expo-push-notification-token";

export const sendPushNotificationToken = (token) =>
  client.post(endpoint, { token });
