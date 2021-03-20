const panelList = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panelList.forEach(panel => panel.addEventListener('click', toggleOpen));
panelList.forEach(panel => panel.addEventListener('transitionend', toggleActive));
