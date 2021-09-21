//section two
const li = document.getElementById("show-item-li");
const list = document.querySelector(".under-list-items");

li.addEventListener("mouseover", () => { 
    if (li) {
        list.style.visibility = "visible";
        list.style.opacity = "1";
    }
});

li.addEventListener("mouseout", () => { 
    if (li) {
        list.style.visibility = "hidden" 
        list.style.opacity = "0";
    }
});

//adapt nav-bar
const bar = document.querySelector(".li-item-bar-list");
const cross = document.querySelector(".li-item-cross-list");
const navBar = document.querySelector(".adapt-nav-list");

bar.addEventListener("click", () => {
    if (bar) {
        navBar.style.display = "block";
        navBar.style.visibility = "visible";
        navBar.style.opacity = "1";
        bar.style.display = "none";
        cross.style.display = "block";
    }
});

cross.addEventListener("click", () => {
    if (bar) {
        navBar.style.display = "none";
        navBar.style.visibility = "hidden";
        navBar.style.opacity = "0";
        bar.style.display = "block";
        cross.style.display = "none";
    }
});

const adaptLi = document.getElementById("adapt-show-item-li");
const adaptList = document.getElementById("adapt-under-list-items");

adaptLi.addEventListener("mouseover", () => {
    if (adaptLi) {
        adaptList.style.display = "block";
        adaptList.style.visibility = "visible";
        adaptList.style.opacity = "1";
    }
});

adaptLi.addEventListener("mouseout", () => {
    if (adaptLi) {
        adaptList.style.display = "none";
        adaptList.style.visibility = "hidden";
        adaptList.style.opacity = "0";
    }
});

//section head three
const underList = document.querySelector(".under-list");
const underListTwo = document.querySelector(".under-list-two");
const showUnderLi = document.querySelector(".show-under-li");
const showUnderLiTwo = document.querySelector(".show-under-li-two");

//Product
showUnderLi.addEventListener("mouseover", () => { 
    if (showUnderLi) {
        underList.style.visibility = "visible"; 
        underList.style.opacity = "1"; 
    }
});
showUnderLi.addEventListener("mouseout", () => { 
    if (showUnderLi) {
        underList.style.visibility = "hidden";
        underList.style.opacity = "0"; 
    } 
});

//Skins
showUnderLiTwo.addEventListener("mouseover", () => { 
    if (underListTwo) {
        underListTwo.style.visibility = "visible"; 
        underListTwo.style.opacity = "1"; 
    }
});
showUnderLiTwo.addEventListener("mouseout", () => { 
    if (showUnderLiTwo) {
        underListTwo.style.visibility = "hidden";
        underListTwo.style.opacity = "0"; 
    } 
});

//under-under list
const underUnderList = document.querySelector(".under-under-list");
const showUnderUnderList = document.querySelector(".show-under-under-list");

showUnderUnderList.addEventListener("mouseover", () => {
    if (showUnderUnderList) {
        underUnderList.style.display = "block";
    }
});

showUnderUnderList.addEventListener("mouseout", () => {
    if (showUnderUnderList) {
        underUnderList.style.display = "none";
    }
});

//Product and Skins
const PS = document.querySelectorAll(".show-adapt-li-bar");
const underLists = document.querySelectorAll(".hide-under-list");
const navBarMenu = document.querySelector(".li-list-item-bar");
const navListBar = document.querySelector(".adapt-nav-list-bar");
const crossBar = document.querySelector(".cross-bar");
const menu = document.querySelector(".menu-bar");

menu.addEventListener("click", () => { 
    if (menu) {
        navListBar.style.display = "block"; 
        crossBar.style.display = "block"; 
        menu.style.display = "none"; 
    }
});

// crossBar.addEventListener("click", () => { 
//     if (crossBar) {
//         navListBar.style.display = "none"; 
//         crossBar.style.display = "none"; 
//         menu.style.display = "block"; 
//     }
// });

//template for functions
function template(target, item1, item2, item3) {
    target.addEventListener("click", () => { 
        if (target) {
            item1.style.display = "none"; 
            item2.style.display = "none"; 
            item3.style.display = "block"; 
        }
    });
}

template(crossBar, navListBar, crossBar, menu);

for (let i = 0; i < PS.length; i++) {
    PS[i].addEventListener("mouseover", () => {
        if (PS[i]) {
            underLists[i].style.display = "block";
        }    
    });

    PS[i].addEventListener("mouseout", () => {
        if (PS[i]) {
            underLists[i].style.display = "none";
        }    
    });
}