var imgs = document.getElementById('slide');
var i =1;
var indecator_6 = document.getElementById('indecator_6');
var indecator_1 = document.getElementById('indecator_1');

function start() {
    timerId = setInterval(slide, 1500,);
    timerId2 = setInterval(txt_slde, 8000)
}

function slide() {
    if(i < 6) {
        i++;
    }
    else {
        i = 1;
        indecator_6.style.background = '#ffffff33'
    }
    imgs.src = 'static/main/images/' + i + '.png';
    var indecator = document.getElementById('indecator_' + i);
    var unindecator = document.getElementById('indecator_' + (i-1));
        indecator.style.background = 'white';
        unindecator.style.background = '#ffffff33';    
}

function right() {
    if(i < 6) {
        i++
    }
    else {
        i = 1
        indecator_6.style.background = '#ffffff33'
    }
    imgs.src = 'static/main/images/' + i + '.png';
    var indecator = document.getElementById('indecator_' + i);
    var unindecator = document.getElementById('indecator_' + (i-1));
        indecator.style.background = 'white';
        unindecator.style.background = '#ffffff33';   
    clearInterval(timerId); 
}

function left() {
    if(i > 1) {
        i--
    }
    else {
        i = 6
        indecator_1.style.background = '#ffffff33'
    }
    imgs.src = 'static/main/images/' + i + '.png';
    var indecator = document.getElementById('indecator_' + i);
    var unindecator = document.getElementById('indecator_' + (i+1));
        indecator.style.background = 'white';
        unindecator.style.background = '#ffffff33';   
    clearInterval(timerId);  
}

let btn = document.getElementById('open');
btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX * 2 - rect.left;
    btn.style.setProperty('--x', x + 'deg');
})

u = 1
u2 = 0

function txt_slde() {
    if(u < 4) {
        u++;
        u2++;
            // formula.style.setProperty('--c', '#fff')
    }
    else {
        u = 1;
        u2 = 0
    }
    var formula = document.getElementById('block_14_' + u);
        formula.style.color = 'white'
    var formula2 = document.getElementById('block_13_' + u);
        formula2.style.color = 'white'
    var formula3 = document.getElementById('block_16_' + u);
        formula3.style.color = 'white'

    if(u == 1) {
        u2 = 4
    }
    else {
        u2 = u-1
    }
    var formula = document.getElementById('block_14_' + u2);
        formula.style.color = 'transparent'
    var formula2 = document.getElementById('block_13_' + u2);
        formula2.style.color = 'transparent'
    var formula3 = document.getElementById('block_16_' + u2);
        formula3.style.color = 'transparent'
    
}

