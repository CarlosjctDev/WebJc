
document.addEventListener("DOMContentLoaded", function () {
    init();
});

const init = () => {
    initTippys()
}

const initTippys = () => {
    let tippy_config = {
        trigger: 'mouseenter',
        allowHTML: true,
        placement: 'bottom',
        interactive: true,
        maxWidth: "auto",
        popperOptions: {
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'flip',
                    options: {
                        fallbackPlacements: ['bottom', 'left'],
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        altAxis: true,
                        tether: false,
                    },
                },
            ],
        },
    };
    tippy('[data-tippy-content]', tippy_config);
}