let cacheContent = "reactTemplate_V0.2";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheContent).then((cache) => {
            cache.addAll(["/bundle.js", "/index.html", "/"]);
        })
    );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    return response;
                }
                let reqUrl = event.request.clone();
                fetch(reqUrl);
            })
        );
    }
});