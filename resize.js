function a() {
    if (window.innerHeight<window.innerWidth) {
        $('a').className = 'halfa';
        $('b').className = 'halfb';
        $('0').style.height = '90vh';
    } else {
        $('a').className = 'full';
        $('b').className = 'full';
        $('0').style.height = 'auto';
    }
}

window.addEventListener('resize', () => {
    a();
});

a();