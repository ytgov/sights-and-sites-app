import i18n from '~locale/locale';
import Service from '~app/models/Service';

export const ServiceNames = {
    BEACH: 'beach',
    BOAT_LAUNCH: 'boat_launch',
    OUTHOUSE: 'outhouse',
    OUTHOUSE_ACCESSIBLE: 'outhouse_accessible',
    PLAYGROUND: 'playground',
    TRAIL: 'trail',
}

// beach, boat_launch, outhouse, outhouse_accessible, playground, trail
export const getServiceFromString = (id) => {
    switch (id) {
        case ServiceNames.BEACH:
            return new Service(
                id,
                require('./images/services/beach.png'),
            );
        case ServiceNames.BOAT_LAUNCH:
            return new Service(
                id,
                require('./images/services/boat_launch.png'),
            );
        case ServiceNames.OUTHOUSE:
            return new Service(
                id,
                require('./images/services/outhouse.png'),
            );
        case ServiceNames.OUTHOUSE_ACCESSIBLE:
            return new Service(
                id,
                require('./images/services/outhouse_accessible.png'),
            );
        case ServiceNames.PLAYGROUND:
            return new Service(
                id,
                require('./images/services/playground.png'),
            );
        case ServiceNames.TRAIL:
            return new Service(
                id,
                require('./images/services/trail.png'),
            );
    }

}
