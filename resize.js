function a() {
    if (window.innerHeight<window.innerWidth) {
        $('a').className = 'halfa';
        $('b').className = 'halfb';
    } else {
        $('a').className = 'full';
        $('b').className = 'full';
    }
}

window.addEventListener('resize', () => {
    a();
});

a();