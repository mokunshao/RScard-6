!function(){
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

    window.addEventListener('scroll',function(){
        findClosest();
    })

    let li = document.querySelectorAll("nav > ul > li")
    for(let i = 0; i<li.length;i++){
        li[i].onmouseenter=function(x){
            x.currentTarget.classList.add("active");
        } 
        li[i].onmouseleave=function(x){
            x.currentTarget.classList.remove("active");
        } 
    }
}.call()