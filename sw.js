const staticCacheName = 'rest-rev--static-v9';
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
		'/css/styles2.css',
		'/css/layout.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(function(cache) {
			console.log('creating cache');
			return cache.addAll(cacheFiles);
		})
		.catch(function() {
			console.log('Fail caching files');
		})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			//Start removing old cache
			return Promise.all(
				cacheNames.filter(function(name) {
					return name.startsWith(staticCacheName.substring(0,8)) && name != staticCacheName;
				})
				.map(function(name) {
					return caches.delete(name);
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event){
	event.waitUntil(
		caches.match(event.request)
		.then(function(response){
			if(response) {
				console.log('Cache found');
				return response;
			} else {
				console.log('Need to create new cach entry');
				fetch(event.request)
				.then(function(newResponse){
					caches.open(staticCacheName)
					.then(function(cache) {
						cache.put(event.request, newResponse);
					});

					return newResponse;
				});
			}

		})
	);
});
