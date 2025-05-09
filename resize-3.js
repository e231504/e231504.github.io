function a() {
    if (window.innerHeight<window.innerWidth) {
        $('a').className = 'thirda';
        $('b').className = 'thirdb';
        $('c').className = 'thirdc';
        $('0').style.height = '90vh';
    } else {
        $('a').className = 'full';
        $('b').className = 'full';
        $('c').className = 'full';
        $('0').style.height = 'auto';
    }
}

window.addEventListener('resize', () => {
    a();
});

a();