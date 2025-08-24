lt = ['a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
     'u', 'v', 'w', 'x', 'y', 'z'];

crs=['yellow','orange','lime','olive','pink','lightgray','gray',
    'cyan','red','darkred','black','darkgreen','tomato',
    'lightgreen','lightcyan','magenta','mediumpurple',
    'orchid','turquoise','darksalmon']

function ig(a){return document.getElementById(a)}
function ie(a){return document.createElement(a)}
function ii(a,b){a.id=b}
function ic(a,b){a.classList.add(b)}
function it(a,b){a.textContent=b}
function ap(a,b){a.appendChild(b)}


function mt(a,b){return Math.floor(Math.random()*a)+b}

function al(a){alert(a)}
function cn(a){console.log(a)}

function ft(a){
    for(let i=0;i<a.length;i++)cn(a[i])
}

function c0(a,b){a.style.backgroundColor=b}
function c1(a,b){a.style.color=b}
function cm(a,b){a.style.margin=b+'px'}
function cp(a,b){a.style.padding=b}
function cf(a,b){a.style.font=b}
function cr(a,b){a.style.border=b}
function cpx(a,b){
    a.style.width=b+'px'
    a.style.height=b+'px'
}
function cbr(a,b){a.style.borderRadius=b+'px'}
function cmg(a,b){a.style.margin= b+'px'}

function dpn(a){a.style.display='none'}
function dpb(a){a.style.display='block'}
function dpi(a){a.style.display='inline'}

function sorte(a){
    a.sort(()=>Math.random()-.5)
}