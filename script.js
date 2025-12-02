pannellum.viewer("panorama", {
    "type": "cubemap",
    "cubeMap": [
        "images/pz.png",
        "images/px.png",
        "images/nz.png",
        "images/nx.png",
        "images/py.png",
        "images/ny.png"
    ],
    "autoLoad": true,
    "autoRotate": -2
});


setTimeout(function () {
    document.getElementById('topText').classList.add('fade-in');
    document.getElementById('centerText').classList.add('fade-in');
}, 3000);


setTimeout(function () {
    document.getElementById('centerText').classList.remove('fade-in');
}, 7000);
