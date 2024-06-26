importScripts(
	'https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js'
);
importScripts(
	'https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js'
);

const firebaseConfig = {
	apiKey: 'AIzaSyBOCI6_DARbuH8FGvZaxIdhzQsy6zKZ9BE',
	authDomain: 'coba-coba-test-3bdc3.firebaseapp.com',
	databaseURL:
		'https://coba-coba-test-3bdc3-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'coba-coba-test-3bdc3',
	storageBucket: 'coba-coba-test-3bdc3.appspot.com',
	messagingSenderId: '973549112187',
	appId: '1:973549112187:web:db2cabc3adf6e0af274bde',
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function (payload) {
	if (payload && payload.data) {
		const notificationTitle = payload.data.title;
		const notificationOptions = {
			body: payload.data.body,
			icon: payload.data.icon,
			image: payload.data.image,
		};

		// Show the notification
		self.registration.showNotification(notificationTitle, notificationOptions);

		// Handle notification click
		self.addEventListener('notificationclick', function (event) {
			const clickedNotification = event.notification;
			clickedNotification.close();

			// Open the specified URL on notification click
			if (payload.data.click_action) {
				event.waitUntil(clients.openWindow(payload.data.click_action));
			}
		});
	}
});

messaging.onMessage((payload) => {
	console.log('Message received. ', payload);
	// ...
});

//handle notification click event
self.addEventListener('notificationclick', function (event) {
	const clickedNotification = event.notification;
	clickedNotification.close();

	// Open the specified URL on notification click
	if (payload.data.click_action) {
		event.waitUntil(clients.openWindow(payload.data.click_action));
	}
});


//handle notification close event


