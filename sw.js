const CACHE_NAME = 'fake-data-generator-v2';
const CACHE_URLS = [
    '.',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching core assets');
                return cache.addAll(CACHE_URLS);
            })
            .catch((err) => {
                console.error('[SW] Cache addAll failed:', err);
            })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version immediately
                const cachedResponse = response;
                
                // Fetch from network in background
                const fetchPromise = fetch(event.request)
                    .then((networkResponse) => {
                        // Update cache with fresh content
                        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        // Network failed, already have cached version
                    });
                
                // Return cached immediately or fetch if not cached
                return cachedResponse || fetchPromise;
            })
    );
});

// Background sync for offline data generation
self.addEventListener('sync', (event) => {
    if (event.tag === 'data-generation-sync') {
        event.waitUntil(
            // Sync any pending operations
            console.log('[SW] Background sync triggered')
        );
    }
});

// Push notification support
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'Notification from Fake Data Generator',
        icon: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 192 192\'%3E%3Crect fill=\'%236f42c1\' width=\'192\' height=\'192\' rx=\'20\'/%3E%3Ctext x=\'96\' y=\'130\' font-size=\'120\' text-anchor=\'middle\'%3E%F0%9F%8E%B2%3C/text%3E%3C/svg%3E',
        badge: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 192 192\'%3E%3Crect fill=\'%236f42c1\' width=\'192\' height=\'192\' rx=\'20\'/%3E%3Ctext x=\'96\' y=\'130\' font-size=\'120\' text-anchor=\'middle\'%3E%F0%9F%8E%B2%3C/text%3E%3C/svg%3E',
        vibrate: [100, 50, 100],
        data: {
            url: self.location.origin
        }
    };
    
    event.waitUntil(
        self.registration.showNotification('Fake Data Generator', options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});

// Message handling
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});
