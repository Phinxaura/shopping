// public/firebase-messaging-sw.js
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAb6CDbGshrLG1bMJntsH27OTWjRWkcFwA",
  authDomain: "shop-ui-notification.firebaseapp.com",
  projectId: "shop-ui-notification",
  storageBucket: "shop-ui-notification.firebasestorage.app",
  messagingSenderId: "17907474436",
  appId: "1:17907474436:web:d40161e686e4eb94aa1551",
  measurementId: "G-2PHWVW7PQH"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/vite.svg' // Or your own icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
