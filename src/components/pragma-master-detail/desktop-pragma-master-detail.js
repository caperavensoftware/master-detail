export class MasterDetailDesktop {
    constructor() {
        const container = document.querySelector(".master-detail");
        const masterSlot = document.querySelector('.md-master');
        const detailSlot = document.querySelector('.md-detail');

        container.style.display = "flex";
        container.style.width = "100%";
        container.style.height = "100%";

        masterSlot.style.width = "400px";
        detailSlot.style.flex = 1;
    }
}