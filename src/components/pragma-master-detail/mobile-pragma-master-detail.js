export class MasterDetailMobile {
    touchStartHandler;
    touchEndHandler;
    touchMoveHandler;
    detailSlot;

    get isDetailVisible() {
        return this._isDetailVisible;
    };

    set isDetailVisible(value) {
        this._isDetailVisible = value;

        this.detailSlot.style.transition = "transform 0.2s ease-out";
        this.detailSlot.style.transform = this.tranlateFunctions[+ value];
        this.containerX = this.translateOrigins[+ value];
    }

    constructor() {
        const container = document.querySelector(".master-detail");
        const masterSlot = document.querySelector('.md-master');
        const detailSlot = document.querySelector('.md-detail');

        this.container = container;
        this.detailSlot = detailSlot;

        container.style.display = "block";
        container.style.width = "100%";
        container.style.height = "100%";

        masterSlot.style.display = "block";
        masterSlot.style.width = "100%";
        masterSlot.style.height = "100%";

        detailSlot.style.position = "absolute";
        detailSlot.style.top = 0;
        detailSlot.style.width = "100%";
        detailSlot.style.height = "100%";
        detailSlot.style.willChange = "transform";
        detailSlot.style.transform = "translate(100%, 0)";

        this.touchStartHandler = this.touchStart.bind(this);
        this.touchEndHandler = this.touchEnd.bind(this);
        this.touchMoveHandler = this.touchMove.bind(this);

        this.origionalBoundingRect = detailSlot.getBoundingClientRect();
        this.containerX = this.origionalBoundingRect.left;

        this.container.addEventListener("touchstart", this.touchStartHandler);
        this.container.addEventListener("touchend", this.touchEndHandler);
        this.container.addEventListener("touchmove", this.touchMoveHandler);

        this.tranlateFunctions = [
            "translateX(100%)",
            "translateX(0)"
        ];

        this.translateOrigins = [
            this.origionalBoundingRect.left,
            0
        ];

        this.isDetailVisible = false;
    }

    dispose() {
        this.container.removeEventListener("touchstart", this.touchStartHandler);
        this.container.removeEventListener("touchend", this.touchEndHandler);
        this.container.removeEventListener("touchmove", this.touchMoveHandler);
        this.container = null;
        this.detailSlot = null;
    }

    touchStart(event) {
        this.isDragging = true;
        this.startX = event.touches[0].pageX;
        this.detailSlot.style.transition = "";
    }

    touchEnd(event) {
        this.isDragging = false;
        this.openOrCloseFromOffset();
    }

    touchMove(event) {
        if (!this.isDragging) {
            return;
        }

        event.preventDefault();

        const currentX = event.touches[0].pageX;
        this.offsetX = currentX - this.startX;

        let translateX = this.containerX + this.offsetX;


        if (translateX < 0) {
            translateX = 0;
        }
        else if (translateX > this.origionalBoundingRect.left) {
            translateX = this.origionalBoundingRect.left;
        }

        this.detailSlot.style.transform = `translateX(${translateX}px)`;
    }

    openOrCloseFromOffset() {
        if (!this.isDetailVisible && this.offsetX < -7) {
            this.isDetailVisible = true;
        }
        else if (this.isDetailVisible && this.offsetX > 7) {
            this.isDetailVisible = false;
        }
    }
}