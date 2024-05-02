function showOnly(content) {
    var elements = document.querySelectorAll(".content");
    var toShow = null;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.id !== content)
            element.classList.add("hide");
        else
            toShow = element;
    }
    if (!toShow) toShow = element[0];
    toShow.classList.remove("hide");
    location.hash = '#' + toShow.id;
    document.querySelector('.header')?.scrollIntoView(true);
}
function show(content) {
    showOnly(content);
}
document.addEventListener("DOMContentLoaded", function () {
    try {
        const years = document.querySelectorAll('.year');
        for (var i = 0; i < years.length; i++) {
            var year = years[i];
            year.textContent = "2016 - " + new Date().getFullYear().toString();
        }
        var navlinks = document.querySelectorAll(".nav-link");
        for (var i = 0; i < navlinks.length; i++) {
            var navlink = navlinks[i];
            navlink.addEventListener("click", function (event) {
                event.preventDefault();
                var target = event.target;
                5;
                var content = target.dataset["target"];
                show(content);
            });
        }
        var directors = document.querySelectorAll(".director");
        for (var i = 0; i < directors.length; i++) {
            var director = directors[i];
            director.textContent = "Click here";
            director.addEventListener("click", function (event) {
                var target = event.target;
                show("directions-content");
            });
        }
        const hash = location.hash.replace('#', '');
        show(hash || "home-content");
    }
    catch (e) {
        debugger;
    }
});
