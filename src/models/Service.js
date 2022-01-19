import i18n from '~locale/locale';

export default class Service {
    constructor(id, image) {
        this.id = id;
        this.name = i18n.t(`services.${id}`);
        this.image = image;
    }
}
