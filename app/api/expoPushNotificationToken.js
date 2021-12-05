import client from "./client";

const endpoint = "/expo-push-notification-token";

export const sendPushNotificationToken = (token, email) =>
  client.post(endpoint, { token, email });
