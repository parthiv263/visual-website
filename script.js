pannellum.viewer("panorama", {
    "type": "cubemap",
    "cubeMap": [
        "images/pz.jpg",
        "images/px.jpg",
        "images/nz.jpg",
        "images/nx.jpg",
        "images/py.jpg",
        "images/ny.jpg"
    ],
    "autoLoad": true,
    "autoRotate": -2,
    "showControls": false
});


setTimeout(function () {
    document.getElementById('topText').classList.add('fade-in');
    document.getElementById('centerText').classList.add('fade-in');
}, 3000);


setTimeout(function () {
    document.getElementById('centerText').classList.remove('fade-in');
}, 7000);
