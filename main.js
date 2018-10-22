
        // 载入动画延迟
        // setTimeout(
        //     function(){welcome.classList.remove("active");},
        //     1500
        // )

        // 添加 offset 类
        let specialTags = document.querySelectorAll('[data-x]');
        for(let i=0;i<specialTags.length;i++){
            specialTags[i].classList.add("offset")
        }


        function findClosest(){
            let specialTags = document.querySelectorAll('[data-x]');
            let minIndex = 0;
            for(let i=1;i<specialTags.length;i++){
                if ( Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)) {
                    minIndex=i
                }
            }

            specialTags[minIndex].classList.remove("offset")
       
            let id = specialTags[minIndex].id;
            let a = document.querySelector("a[href='#"+id+"']");
            let $li =a.parentNode;
            let liList =$li.parentNode.children;
            for (let i =0;i<liList.length;i++){
                liList[i].classList.remove("highLight")
            }
            $li.classList.add("highLight");
        }


        setTimeout(function(){
            findClosest();
        },1000) 


        window.onscroll=function(){
            if(window.scrollY>0){
                topNavBar.classList.add("sticky");
            }else{
                topNavBar.classList.remove("sticky");
            }

            findClosest();
        }



        let li = document.querySelectorAll("nav > ul > li")
        for(let i = 0; i<li.length;i++){
             li[i].onmouseenter=function(x){
                x.currentTarget.classList.add("active");
             } 
             li[i].onmouseleave=function(x){
                x.currentTarget.classList.remove("active");
             } 
        }

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
                var coords = {y: currentTop };
                var tween = new TWEEN.Tween(coords)
                .to({ y:targetTop }, 1000) 
                .easing(TWEEN.Easing.Quadratic.InOut) 
                .onUpdate(function() { 
                    window.scrollTo(currentTop,coords.y)
                })
                .start(); 

            }
        }

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })