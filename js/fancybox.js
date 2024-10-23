Fancybox.bind('[data-fancybox="mancuernas"], [data-fancybox="accesorios"], [data-fancybox="barras"], [data-fancybox="equipos"]', {
    contentClick: "toggleCover",
    Images: {
        Panzoom: {
            panMode: "mousemove",
            mouseMoveFactor: 1.1,
            mouseMoveFriction: 0.12,
        },
    },
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
            ],
            right: ["slideshow", "thumbs", "close"],
        },
    },
    Thumbs: {
        type: "classic",
    },
});