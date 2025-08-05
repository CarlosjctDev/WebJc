
document.addEventListener("DOMContentLoaded", function () {
    redirectEvent();
});

const redirectEvent = () => {
    const menu = document.getElementById("menu");
    if (!menu) return;

    document.querySelectorAll("a[data-route]").forEach((item) => {
        item.onclick = (e) => {
            e.preventDefault();

            const PATHNAME = window.location.pathname;
            const route = item.getAttribute("data-route");
            const routeSearch = item.getAttribute("data-route-complete");

            if(menu.matches(":popover-open")) menu.hidePopover();

            if (PATHNAME === route && routeSearch?.includes("#")) {
                window.location.href = routeSearch;
                return;
            }
            

            if(PATHNAME == route) return;

            window.location.href = routeSearch; 
        }
    })
}