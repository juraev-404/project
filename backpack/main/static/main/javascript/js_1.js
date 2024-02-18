var imgs = document.getElementById('slide');
var i = 1;
var indecator_4 = document.getElementById('indecator_4');
var indecator_1 = document.getElementById('indecator_1');

function start() {
    timerId = setInterval(slide, 3000,);
    timerId2 = setInterval(txt_slde, 3000)
}

function slide() {
    if(i < 4) {
        i++;
    }
    else {
        i = 1;
        indecator_4.style.background = '#ffffff33'
    }
    imgs.src = 'static/main/images/' + i + '.png';
    var indecator = document.getElementById('indecator_' + i);
    var unindecator = document.getElementById('indecator_' + (i-1));
        indecator.style.background = 'white';
        unindecator.style.background = '#ffffff33';    
}

function right() {
    if(i < 4) {
        i++
    }
    else {
        i = 1
        indecator_4.style.background = '#ffffff33'
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
        i = 4
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

function alll() {
    const elements = document.getElementsByClassName('frl');
    for (let el = 0; el < elements.length; el++){
        const element = elements[el]
            element.style.display = 'flex';
    }

    document.getElementById('pole_1').style.display = 'flex';
    document.getElementById('pole_2').style.display = 'none';
    document.getElementById('pole_3').style.display = 'none';
    document.getElementById('pole_4').style.display = 'none';
    document.getElementById('pole_5').style.display = 'none';
    document.getElementById('pole_6').style.display = 'none';

    document.getElementById('pole_1_2').style.display = 'flex';
    document.getElementById('pole_2_2').style.display = 'none';
    document.getElementById('pole_3_2').style.display = 'none';
    document.getElementById('pole_4_2').style.display = 'none';
    document.getElementById('pole_5_2').style.display = 'none';
    document.getElementById('pole_6_2').style.display = 'none';

    var physics = document.getElementById('physics')
    var algebra = document.getElementById('algebra')
    var all = document.getElementById('all')
    var geometry = document.getElementById('geometry')
    var chemrstry = document.getElementById('chemrstry')
    var search = document.getElementById('search_block')
        physics.style.borderBottomLeftRadius = '0';
        physics.style.borderBottomRightRadius = '0';
        physics.style.background = 'white';
        physics.style.color = '#000';
        algebra.style.borderBottomLeftRadius = '15px';
        algebra.style.borderBottomRightRadius = '0';
        algebra.style.background = 'white';
        algebra.style.color = '#000';
        all.style.background = 'transparent';
        all.style.color = 'white';
        all.style.boxShadow = 'none';
        geometry.style.borderBottomRightRadius = '0';
        geometry.style.borderBottomLeftRadius = '0';
        geometry.style.background = 'white';
        geometry.style.color = '#000';
        chemrstry.style.borderBottomLeftRadius = '0';
        chemrstry.style.borderBottomRightRadius = '0';
        chemrstry.style.background = 'white';
        chemrstry.style.color = '#000';
        search.style.borderBottomLeftRadius = '0';
        search.style.background = 'white';
        search.style.color = '#000';
}

function algebra() {
    const elements = document.getElementsByClassName('frl');
    for (let el = 0; el < elements.length; el++){
        const element = elements[el]
            element.style.display = 'flex';
    }

    document.getElementById('pole_1').style.display = 'none';
    document.getElementById('pole_2').style.display = 'flex';
    document.getElementById('pole_3').style.display = 'none';
    document.getElementById('pole_4').style.display = 'none';
    document.getElementById('pole_5').style.display = 'none';
    document.getElementById('pole_6').style.display = 'none';
    
    document.getElementById('pole_1_2').style.display = 'none';
    document.getElementById('pole_2_2').style.display = 'flex';
    document.getElementById('pole_3_2').style.display = 'none';
    document.getElementById('pole_4_2').style.display = 'none';
    document.getElementById('pole_5_2').style.display = 'none';
    document.getElementById('pole_6_2').style.display = 'none';

    var physics = document.getElementById('physics')
    var algebra = document.getElementById('algebra')
    var all = document.getElementById('all')
    var geometry = document.getElementById('geometry')
    var chemrstry = document.getElementById('chemrstry')
    var search = document.getElementById('search_block')
        all.style.borderBottomRightRadius = '15px';
        all.style.background = 'white';
        all.style.color = '#000';
        algebra.style.background = 'transparent';
        algebra.style.color = 'white';
        algebra.style.boxShadow = 'none';
        geometry.style.borderBottomRightRadius = '0';
        geometry.style.borderBottomLeftRadius = '15px';
        geometry.style.background = 'white';
        geometry.style.color = '#000';
        physics.style.borderBottomLeftRadius = '0';
        physics.style.borderBottomRightRadius = '0';
        physics.style.background = 'white';
        physics.style.color = '#000';
        chemrstry.style.borderBottomLeftRadius = '0';
        chemrstry.style.borderBottomRightRadius = '0';
        chemrstry.style.background = 'white';
        chemrstry.style.color = '#000';
        search.style.borderBottomLeftRadius = '0';
        search.style.background = 'white';
        search.style.color = '#000';
}
// chemrstry search
function geometry() {
    const elements = document.getElementsByClassName('frl');
    for (let el = 0; el < elements.length; el++){
        const element = elements[el]
            element.style.display = 'flex';
    }

    document.getElementById('pole_1').style.display = 'none';
    document.getElementById('pole_2').style.display = 'none';
    document.getElementById('pole_3').style.display = 'flex';
    document.getElementById('pole_4').style.display = 'none';
    document.getElementById('pole_5').style.display = 'none';
    document.getElementById('pole_6').style.display = 'none';

    document.getElementById('pole_1_2').style.display = 'none';
    document.getElementById('pole_2_2').style.display = 'none';
    document.getElementById('pole_3_2').style.display = 'flex';
    document.getElementById('pole_4_2').style.display = 'none';
    document.getElementById('pole_5_2').style.display = 'none';
    document.getElementById('pole_6_2').style.display = 'none';

    var physics = document.getElementById('physics')
    var algebra = document.getElementById('algebra')
    var all = document.getElementById('all')
    var geometry = document.getElementById('geometry')
    var chemrstry = document.getElementById('chemrstry')
    var search = document.getElementById('search_block')
        algebra.style.borderBottomLeftRadius = '0';
        algebra.style.borderBottomRightRadius = '15px';
        algebra.style.background = 'white';
        algebra.style.color = '#000';
        all.style.background = 'white';
        all.style.color = '#000';
        all.style.borderBottomRightRadius = '0';
        geometry.style.boxShadow = 'none';
        geometry.style.borderBottomRightRadius = '0';
        geometry.style.borderBottomLeftRadius = '0';
        geometry.style.background = 'transparent';
        geometry.style.color = '#fff';
        physics.style.borderBottomLeftRadius = '15px';
        physics.style.borderBottomRightRadius = '0';
        physics.style.background = 'white';
        physics.style.color = '#000';
        chemrstry.style.borderBottomLeftRadius = '0';
        chemrstry.style.borderBottomRightRadius = '0';
        chemrstry.style.background = 'white';
        chemrstry.style.color = '#000';
        search.style.borderBottomLeftRadius = '0';
        search.style.background = 'white';
        search.style.color = '#000';
}

function physics() {
    const elements = document.getElementsByClassName('frl');
    for (let el = 0; el < elements.length; el++){
        const element = elements[el]
            element.style.display = 'flex';
    }

    document.getElementById('pole_1').style.display = 'none';
    document.getElementById('pole_2').style.display = 'none';
    document.getElementById('pole_3').style.display = 'none';
    document.getElementById('pole_4').style.display = 'flex';
    document.getElementById('pole_5').style.display = 'none';
    document.getElementById('pole_6').style.display = 'none';
    
    document.getElementById('pole_1_2').style.display = 'none';
    document.getElementById('pole_2_2').style.display = 'none';
    document.getElementById('pole_3_2').style.display = 'none';
    document.getElementById('pole_4_2').style.display = 'flex';
    document.getElementById('pole_5_2').style.display = 'none';
    document.getElementById('pole_6_2').style.display = 'none';

    var physics = document.getElementById('physics')
    var algebra = document.getElementById('algebra')
    var all = document.getElementById('all')
    var geometry = document.getElementById('geometry')
    var chemrstry = document.getElementById('chemrstry')
        var search = document.getElementById('search_block')
        algebra.style.borderBottomLeftRadius = '0';
        algebra.style.borderBottomRightRadius = '0';
        algebra.style.background = 'white';
        algebra.style.color = '#000';
        all.style.background = 'white';
        all.style.color = '#000';
        all.style.borderBottomRightRadius = '0';
        physics.style.boxShadow = 'none';
        geometry.style.borderBottomRightRadius = '15px';
        geometry.style.borderBottomLeftRadius = '0';
        geometry.style.background = 'white';
        geometry.style.color = '#000';
        physics.style.borderBottomLeftRadius = '0';
        physics.style.borderBottomRightRadius = '0';
        physics.style.background = 'transparent';
        physics.style.color = '#fff';
        chemrstry.style.borderBottomLeftRadius = '15px';
        chemrstry.style.borderBottomRightRadius = '0';
        chemrstry.style.background = 'white';
        chemrstry.style.color = '#000';
        search.style.borderBottomLeftRadius = '0';
        search.style.background = 'white';
        search.style.color = '#000';
}

function chemrstry() {
    const elements = document.getElementsByClassName('frl');
    for (let el = 0; el < elements.length; el++){
        const element = elements[el]
            element.style.display = 'flex';
    }

    document.getElementById('pole_1').style.display = 'none';
    document.getElementById('pole_2').style.display = 'none';
    document.getElementById('pole_3').style.display = 'none';
    document.getElementById('pole_4').style.display = 'none';
    document.getElementById('pole_5').style.display = 'flex';
    document.getElementById('pole_6').style.display = 'none';
    document.getElementById('pole_2').hidden = 'false'


    document.getElementById('pole_1_2').style.display = 'none';
    document.getElementById('pole_2_2').style.display = 'none';
    document.getElementById('pole_3_2').style.display = 'none';
    document.getElementById('pole_4_2').style.display = 'none';
    document.getElementById('pole_5_2').style.display = 'flex';
    document.getElementById('pole_6_2').style.display = 'none';

    var physics = document.getElementById('physics')
    var algebra = document.getElementById('algebra')
    var all = document.getElementById('all')
    var geometry = document.getElementById('geometry')
    var chemrstry = document.getElementById('chemrstry')
    var search = document.getElementById('search_block')
        algebra.style.borderBottomLeftRadius = '0';
        algebra.style.borderBottomRightRadius = '0';
        algebra.style.background = 'white';
        algebra.style.color = '#000';
        all.style.background = 'white';
        all.style.color = '#000';
        all.style.borderBottomRightRadius = '0';
        chemrstry.style.boxShadow = 'none';
        geometry.style.borderBottomRightRadius = '0';
        geometry.style.borderBottomLeftRadius = '0';
        geometry.style.background = 'white';
        geometry.style.color = '#000';
        physics.style.borderBottomLeftRadius = '0';
        physics.style.borderBottomRightRadius = '15px';
        physics.style.background = 'white';
        physics.style.color = '#000';
        chemrstry.style.borderBottomLeftRadius = '0';
        chemrstry.style.borderBottomRightRadius = '0';
        chemrstry.style.background = 'transparent';
        chemrstry.style.color = '#fff';
        search.style.borderBottomLeftRadius = '15px';
        search.style.background = 'white';
        search.style.color = '#000';
}

function search() {
    document.getElementById('pole_1').style.display = 'none';
    document.getElementById('pole_2').style.display = 'none';
    document.getElementById('pole_3').style.display = 'none';
    document.getElementById('pole_4').style.display = 'none';
    document.getElementById('pole_5').style.display = 'none';
    document.getElementById('pole_6').style.display = 'flex';

    document.getElementById('pole_1_2').style.display = 'none';
    document.getElementById('pole_2_2').style.display = 'none';
    document.getElementById('pole_3_2').style.display = 'none';
    document.getElementById('pole_4_2').style.display = 'none';
    document.getElementById('pole_5_2').style.display = 'none';
    document.getElementById('pole_6_2').style.display = 'flex';

    var physics = document.getElementById('physics')
    var algebra = document.getElementById('algebra')
    var all = document.getElementById('all')
    var geometry = document.getElementById('geometry')
    var chemrstry = document.getElementById('chemrstry')
    var search = document.getElementById('search_block')
        algebra.style.borderBottomLeftRadius = '0';
        algebra.style.borderBottomRightRadius = '0';
        algebra.style.background = 'white';
        algebra.style.color = '#000';
        all.style.background = 'white';
        all.style.color = '#000';
        all.style.borderBottomRightRadius = '0';
        search.style.boxShadow = 'none';
        geometry.style.borderBottomRightRadius = '0';
        geometry.style.borderBottomLeftRadius = '0';
        geometry.style.background = 'white';
        geometry.style.color = '#000';
        physics.style.borderBottomLeftRadius = '0';
        physics.style.borderBottomRightRadius = '0';
        physics.style.background = 'white';
        physics.style.color = '#000';
        chemrstry.style.borderBottomLeftRadius = '0';
        chemrstry.style.borderBottomRightRadius = '15px';
        chemrstry.style.background = 'white';
        chemrstry.style.color = '#000';
        search.style.borderBottomLeftRadius = '0';
        search.style.background = 'transparent';
        search.style.color = '#fff';
}

function find() {
    var word = document.getElementById('pole').value;
    const elements = document.getElementsByClassName('frl');
    const frl_2 = document.getElementsByClassName('frl_2');
    
    for (let el = 0; el < elements.length; el++){
        const element = elements[el]
        const name = frl_2[el].textContent
        var name_2 = name.toLowerCase()

        if(word != name){
            element.style.display = 'none';
        }
        if(name.includes(word) || name_2.includes(word)){
            element.style.display = 'flex';
            element.style.minWidth = '160px';
        } 
    }
}