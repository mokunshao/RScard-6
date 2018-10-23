!function(){
    // Setup the animation loop.
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    let aTags = document.querySelectorAll("nav>ul>li>a")

    for(let i =0; i<aTags.length; i++){
        aTags[i].onclick = function(x){
            x.preventDefault();
            let a = x.currentTarget;
            let href = a.getAttribute("href");
            let element = document.querySelector(href)
            let top = element.offsetTop;
            let targetTop = top-80;
            let currentTop = window.scrollY;
            let s = targetTop-currentTop;
            
            // 方案一
            // window.scrollTo(currentTop,targetTop);
            
            // 方案二
            // let n =30; //多少个慢动作
            // let t=500/n; //多久搞一个慢动作
            // let ss =s/n; //一个慢动作的移动距离
            // let i =0;
            // let id=setInterval(()=>{
            //     if(i===n){
            //         window.clearInterval(id)
            //         return
            //     }
            //     i=i+1;
            //     window.scrollTo(currentTop,currentTop+ss*i)
            // },15)

            // 方案三
            let coords = {y: currentTop };
            let tween = new TWEEN.Tween(coords)
            .to({ y:targetTop }, 1000) 
            .easing(TWEEN.Easing.Quadratic.InOut) 
            .onUpdate(function() { 
                window.scrollTo(currentTop,coords.y)
            })
            .start(); 
        }
    }
}.call()