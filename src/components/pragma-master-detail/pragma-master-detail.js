import {customElement, inject} from 'aurelia-framework';
import {MasterDetailMobile} from './mobile-pragma-master-detail';
import {MasterDetailDesktop} from './desktop-pragma-master-detail';

@customElement('pragma-master-detail')
@inject(Element)
export class PragmaMasterDetail {
    element = null;
    mdController = null;

    get isDetailVisible() {
        return this.mdController.isDetailVisible || true;
    }

    set isDetailVisible(value) {
        this.mdController.isDetailVisible = value && isMobile;
    }

    isMobile() {
        return navigator.userAgent.indexOf("iPhone") > 0 ||
            navigator.userAgent.indexOf("iPad") > 0 ||
            navigator.userAgent.indexOf("Android") > 0 ||
            navigator.userAgent.indexOf("webOS") > 0 ||
            navigator.userAgent.indexOf("iPod") > 0 ||
            navigator.userAgent.indexOf("BlackBerry") > 0 ||
            navigator.userAgent.indexOf("Windows Phone") > 0;
    }
    
    constructor(element) {
        this.element = element;
    }

    attached() {
        if (this.isMobile()) {
            this.mdController = new MasterDetailMobile();
        }
        else {
            this.mdController = new MasterDetailDesktop();
        }
    }
}
