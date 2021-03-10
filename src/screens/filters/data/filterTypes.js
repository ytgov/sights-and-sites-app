import i18n from '../../../locale/locale';

const filterTypes = [
    {
        label: i18n.t('filterTypes.camping'),
        icon: require('../images/type/camping.png'),
        background: require('../images/type/bg-type-camping.jpg')
    },
    {
        label: i18n.t('filterTypes.recreation'),
        icon: require('../images/type/recreation.png'),
        background: require('../images/type/bg-type-recreation.jpg')
    },
    {
        label: i18n.t('filterTypes.wildlifeLandscape'),
        icon: require('../images/type/wildlife.png'),
        background: require('../images/type/bg-type-wildlife.jpg')
    },
    {
        label: i18n.t('filterTypes.historyCulture'),
        icon: require('../images/type/history-culture.png'),
        background: require('../images/type/bg-type-history-culture.jpg')
    },
]

export default filterTypes;
