// Importar los scripts base de Firebase (Misma versión que tu index)
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Tu configuración original de Infinix
firebase.initializeApp({
    apiKey: "AIzaSyBInfWAR3Oz6uYUAgtzm8V3Nloq1VH9MOc",
    authDomain: "infinix-nacional.firebaseapp.com",
    projectId: "infinix-nacional",
    storageBucket: "infinix-nacional.firebasestorage.app",
    messagingSenderId: "705431633087",
    appId: "1:705431633087:web:2d5f184a63f85b79b51a0a"
});

const messaging = firebase.messaging();

// Este código atrapa la notificación cuando la App está CERRADA
messaging.onBackgroundMessage(function(payload) {
    console.log('Mensaje recibido en segundo plano: ', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'logo infinix.png', // Mostrará tu logo en la notificación
        badge: 'logo infinix.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});