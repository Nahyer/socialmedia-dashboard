var isLight = false;
let bg = document.querySelector("body");
let span = document.querySelectorAll("span");
let crd = document.querySelectorAll(".card");
let pg = document.querySelectorAll(".page");
let pt = document.querySelectorAll(".o-num");
let srm = document.querySelector(".srn-mode");
let dk = document.querySelector("#dk");
let ltimage = document.createElement("div");
let h2 = document.querySelector("h2");
let num = document.querySelectorAll(".num");
let tc = document.querySelector("#tc");
let Gh = document.querySelector(".yt");

// if(isLight===true){
  
//   console.log(isLight)
//   pg.forEach((p) => {
//     p.addEventListener("mouseover", function () {
//       p.style.backgroundColor = "hsl(227, 17%, 49%)";
//     });

//     p.addEventListener("mouseout", function () {
//       p.style.backgroundColor = "hsl(228, 28%, 20%)";
//     });
//   });
// }else{
//   p.removeEventListener("mouseover", function () {
//     p.style.backgroundColor = "hsl(227, 17%, 49%)";
//   });

//   p.removeEventListener("mouseout", function () {
//     p.style.backgroundColor = "hsl(228, 28%, 20%)";
//   });
// }

function dkTheme() {
  
  if (isLight === false) {
    console.log(isLight);
    dk.remove();
    ltimage.innerHTML = `<img id="dk" 
                        onclick="dkTheme()" 
                        src="./images/switch-on-svgrepo-com.svg" 
                        alt="">`;

    srm.appendChild(ltimage);
    bg.style.backgroundColor = "hsl(230, 17%, 14%)";
    bg.style.color = "hsl(0, 0%, 100%)";
    pg.forEach((p) => {
      p.style.backgroundColor = "hsl(228, 28%, 20%)";
      
    });

    span.forEach((s) => {
      s.style.color = "hsl(228, 34%, 66%)";
    });
    crd.forEach((c) => {
      c.style.backgroundColor = "hsl(228, 28%, 20%)";

    });

    num.forEach((n) => {
      n.style.color = "white";
    });
    pt.forEach((t) => {
      t.style.color = "white";
    });
    h2.style.color = "white";
    isLight = true;
    console.log(isLight);
  } else {
    console.log(isLight);
    dk.remove();
    ltimage.innerHTML = `<img id="dk" 
                        onclick="dkTheme()" 
                        src="./images/switch-off-svgrepo-com.svg" 
                        alt="">`;

    srm.appendChild(ltimage);
    bg.removeAttribute("style");
    bg.removeAttribute("style");
    pg.forEach((p) => {
      p.removeAttribute("style");
    });
    span.forEach((s) => {
      s.removeAttribute("style");
    });
    crd.forEach((c) => {
      c.removeAttribute("style");
      c.removeEventListener("mouseover", function () {
        c.style.backgroundColor = "hsl(227, 17%, 49%)";
      });
      c.removeEventListener("mouseout", function () {
        c.style.backgroundColor = "hsl(228, 28%, 20%)";
      });
    });
    num.forEach((n) => {
      n.removeAttribute("style");
    });
    pt.forEach((t) => {
      t.removeAttribute("style");
    });
    h2.removeAttribute("style");
    isLight = false;
  }
}



window.addEventListener("load", getFollowersCount);
const userId = "819991206673037";
const accessToken =
  "EAAPqk3yMwBkBO4bsuLpkprOBKq3JouPoGHkcrt6mUG5nHAQMO4H4RPYaHdZAIfG7SQfyQmPPdH8EvKtcxHQesHmweQB93jJI1bN4ML3qvLT47LJBeCZCrxLDrDAR7AicHXOhNYFUFZClz2UWj9i3y9aAAyHDnf34NUfFzVlDg5LA9piQoPCeYHVubeDrGzGskQPEjZClwY6F06hjN94wuerZBM27tDeL05rWoRmD8BsY2uGvxRrNUMQZDZD";
// let
let previousCount = 0;

async function getFollowersCount() {
  try{
    const response = await fetch(`https://graph.facebook.com/me?fields=id,name&access_token=${accessToken}`);
    const data = await response.json();
    
      console.log(data);
      // const currentCount = data.name;
      // console.log(`Current follower count: ${currentCount}`);

      // if (currentCount > previousCount) {
      //     console.log('Follower count is trending up');
      // } else if (currentCount < previousCount) {
      //     console.log('Follower count is trending down');
      // } else {
      //     console.log('Follower count is stable');
      // }

      // previousCount = currentCount;

      //update from api
      // let tcount= 0;
      // tc.innerHTML =`Total Followers: 23,004`;
      // num.forEach((n)=>{
      //     n.innerHTML =`toff: ${tcount}`;
      // });

      // console.log(`update ${tcount}` );
    
  }catch(error){
      console.error("Error fetching follower count:", error);
    };
}

async function callGitHubAPI() {
    try {
      const responce= await fetch('https://api.github.com/users/nahyer');
      const data = await responce.json();
      console.log(data);
      const followers = Gh.querySelector("p.num");
      const useName = Gh.querySelector("span");
      useName.innerHTML = `@${data.login}`;
      if(data.followers != null){
        followers.innerHTML = `${data.followers}`;
      }
      


        

    } catch (error) {
        console.error("Error calling GitHub API:", error);
    }
}

callGitHubAPI();
