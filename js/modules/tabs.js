'use strict';
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabs() {
        tabsContent.forEach(tab => {
            //tab.style.display = 'none';
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');
        });

        tabs.forEach(menuItem => {
            menuItem.classList.remove(activeClass);
        });
    }

    function showTabs(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    hideTabs();
    showTabs();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((items, i) => {
                if (target === items) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });
}

//module.exports = tabs;
export default tabs;






