var isLight = true;
let bg = document.querySelector('body');
let span = document.querySelectorAll('span');
let crd = document.querySelectorAll('.card');
let pg = document.querySelectorAll('.page');
let pt = document.querySelectorAll('.o-num');
let srm = document.querySelector('.srn-mode');
let dk = document.querySelector('#dk');
let ltimage= document.createElement('div');
let h2 = document.querySelector('h2');
let num = document.querySelectorAll('.num')


function dkTheme() {
    
    if(isLight){
        dk.remove();
        ltimage.innerHTML=`<img id="dk" 
                        onclick="lyTheme()" 
                        src="./images/switch-on-svgrepo-com.svg" 
                        alt="">`
       
        srm.appendChild(ltimage);
        bg.style.backgroundColor='hsl(230, 17%, 14%)';
        bg.style.color='hsl(0, 0%, 100%)';
        pg.forEach((p)=>{
            p.style.backgroundColor='hsl(228, 28%, 20%)';
        });
        span.forEach((s)=>{
            s.style.color='hsl(228, 34%, 66%)';
        });
        crd.forEach((c)=>{
            c.style.backgroundColor='hsl(228, 28%, 20%)';
        });
        num.forEach((n)=>{
            n.style.color='white';
        });
        pt.forEach((t)=>{
            t.style.color='white';
        });
        h2.style.color='white';
    }else{
        dk.remove();
        ltimage.innerHTML=`<img id="dk" 
                        onclick="dkTheme()" 
                        src="./images/switch-off-svgrepo-com.svg" 
                        alt="">`
       
        srm.appendChild(ltimage);
        bg.removeAttribute('style');
        bg.removeAttribute('style');
        pg.forEach((p)=>{
            p.removeAttribute('style');
        });
        span.forEach((s)=>{
            s.removeAttribute('style');
        });
        crd.forEach((c)=>{
            c.removeAttribute('style');
        });
        num.forEach((n)=>{
            n.removeAttribute('style');
        });
        pt.forEach((t)=>{
            t.removeAttribute('style');
        });
        h2.removeAttribute('style');
        isLight = true;
    }
}
function lyTheme(){
    isLight = false;
    dkTheme();
}

window.addEventListener('load', getFollowersCount);
const userId = '819991206673037';
const accessToken = 'EAAPqk3yMwBkBO5f4JWSsURhbcZB7GcmAN0wvWUZCNbRarOCei4ABZArnUS8JrAoRv3U91AOBfYZBqWZBKW3It59UZCVWqf8lilm0X3aIjTfugEJzhZASxRqwjDXKld5qGRMC8mUg3rElM9wZBbiEs0CC0HQTZAR4OstPRZAAS0ofOTa7j62ETL2WIZCUqrZBVfmVff0VWGbuyD6Y2YFnfUSU18OdypC4w6QdDBZBN40WbcDt0AFZBTSPlwb1sm6ZAsl3ZBXT5fsZD';

let previousCount = 0;

function getFollowersCount() {
    fetch(`https://graph.facebook.com/Cristiano&access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // const currentCount = data.summary.total_count;
            // console.log(`Current follower count: ${currentCount}`);

            // if (currentCount > previousCount) {
            //     console.log('Follower count is trending up');
            // } else if (currentCount < previousCount) {
            //     console.log('Follower count is trending down');
            // } else {
            //     console.log('Follower count is stable');
            // }

            // previousCount = currentCount;
        })
        .catch(error => {
            console.error('Error fetching follower count:', error);
        });
}
