function a() {
    if (window.innerHeight<window.innerWidth) {
        $('a').className = 'thirda';
        $('b').className = 'thirdb';
        $('c').className = 'thirdc';
    } else {
        $('a').className = 'full';
        $('b').className = 'full';
        $('c').className = 'full';
    }
}

window.addEventListener('resize', () => {
    a();
});

a();