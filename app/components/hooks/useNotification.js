import React, { useEffect, useState, useRef } from "react";
import * as Notifications from "expo-notifications";
import { sendPushNotificationToken } from "../../api/expoPushNotificationToken";
import useAuth from "./useAuth";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
function useNotification(onNotificationRecieved, onNotificationClicked) {
  const { user } = useAuth();

  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const registerForPushNotifications = async () => {
    let token;
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    sendPushNotificationToken(token, user?.email);
    console.log(token);
  };
  useEffect(() => {
    registerForPushNotifications();
    if (onNotificationRecieved)
      notificationListener.current =
        Notifications.addNotificationReceivedListener(onNotificationRecieved);

    if (onNotificationClicked)
      responseListener.current =
        Notifications.addNotificationResponseReceivedListener(
          onNotificationClicked
        );

    return () => {
      if (onNotificationRecieved)
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      if (onNotificationClicked)
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
}

export default useNotification;
