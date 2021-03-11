export default {
    'translation': {
        // Actions
        'actionNext': 'SUITE',
        'actionApply': 'Appliquer',
        'actionClearAll': 'Tout effacer',

        'notifications': {
            'permissionsRequest': 'Vous devez accorder des autorisations d\'emplacement pour bénéficier d\'une expérience complète.',
            'onFiltersUpdate': 'Les filtres ont été mis à jour',
            'onFiltersClear': 'Les filtres ont été effacés',
            'onAddToMySites': 'Ajoutée! Pour voir tous vos sites, appuyez sur le coeur ci-dessous',
            'networkNotAvailable': "Le réseau n'est pas disponible"
        },
        'footerTabs': {
            'whereTo': 'Filtrer par',
            'siteType': 'Type de site',
            'more': 'Plus'
        },
        'siteTabs': {
            'directions': 'Itinéraire',
            'map_view': 'Carte',
            'share': 'Partager',
            'mySites': 'Favoris'
        },
        'listingTypes': {
            'map': 'CARTE',
            'list': 'LISTE'
        },
        'siteTypes': {
            'filterTitle': 'Choisissez un type de site',
            'camping': 'Camping',
            'wildlife': `Nature et paysages`,
            'recreation': 'Vous êtes prêt?',
            'history': `Histoire et culture`,
        },
        'common': {
            'loadMoreDefault': 'Charger plus',
            'noItemsDefault': 'Pas d\'objet'
        },
        'location': {
            'distanceToSiteInKM': "{{distance}} km d'ici",
            'distanceToSiteInM': "{{distance}} m d'ici",
            'distanceReached': 'Vous êtes sur place',
            'noLocationData': "Impossible d'accéder aux données de localisation"
        },

        // WHERETO STACK
        // Choose location
        'chooseLocation': {
            title: 'Choisir un lieu',
            nearMe: 'À proximité',
            byHighway: 'Sur ma route',
            byRegion: 'Par région',
            mySites: 'Mes lieux préférés'
        },
        // Choose highway
        'chooseHighway': {
            title: 'Choisir une route',
        },
        // Choose region
        'chooseRegion': {
            title: 'Choisir une région'
        },
        'listingTitle': 'Listing',
        // LISTING STACK
        'listContainer': {
            moreSites: 'Plus de sites',
            noSitesFound: 'Aucun site trouvé',
            noFavouritesFound: 'Aucun favori ou "mes sites" n\'ont encore été choisis'
        },
        'siteDetails': {
            nearBySites: 'Site à proximité'
        },
        // SEARCH STACk
        'search': {
            'placeholder': 'Chercher',
            'noRecentQueries': 'Aucune requête récente',
            'noMatchesFound': 'Aucun résultat'
        },
        // MORE STACK
        'more': {
            'title': 'Plus',
        },
        'currentConditions': {
            'title': 'Conditions actuelles'
        },
        'traditionalTerritories': {
            'title': 'Premiéres nations du yukon'
        },
        'travelTrips': {
            'title': 'Se déplacer dans la nature'
        },
        'appInformation': {
            'title': "Renseignements sur l'application",
            'intro': `Cette appli est votre guide sur les terrains de camping, la vie sauvage ainsi que les lieux d’intérêt culturel et historique qui sont accessibles par le réseau routier du Yukon. Explorez les sites par route ou par région ou bien recherchez un site à proximité. Découvrez l’histoire naturelle et culturelle qui vous entoure.`,
            locationServices: {
                title: "Géolocalisation",
                questions: {
                    q1: 'Pourquoi l’application cherche-t-elle à me localiser?',
                    a1: "L’application utilise la localisation fournie par votre appareil pour vous donner des résultats utiles, comme des lieux situés à proximité. \n" +
                        "Cette application ne conserve pas la localisation en mémoire. La localisation n’est utilisée que dans votre appareil. Vous pouvez activer la localisation dans l’application ou sur votre appareil.",
                    q2: 'Je ne souhaite pas activer l’option de localisation.',
                    a2: 'Aucun problème! Vous pouvez quand même rechercher et filtrer des lieux. Cependant, vous ne pourrez ' +
                        'pas naviguer jusqu’à ces lieux ou voir les lieux situés à proximité dans l’application. \n\n' +
                        'Si votre appareil est connecté à Internet, il utilisera les données mobiles pour mettre l’application à jour, ' +
                        'au besoin.',
                },
            },
            mobileData: {
                title: 'Données mobiles',
                content: 'Si votre appareil est connecté à Internet, il utilisera les données mobiles pour mettre l’application à jour, au besoin.',
                questions: {
                    q1: 'Puis-je utiliser l\'application hors ligne?',
                    a1: `L’application fonctionne entièrement hors ligne. Les cartes se téléchargent sur votre appareil si vous autorisez l’application à le faire.`,
                    q2: 'Quand les données de l’application sont-elles mises à jour?',
                    a2: 'L’application est mise à jour périodiquement lorsque de nouvelles données sont disponibles, par exemple :\n\n' +
                        '\u2022 Nouveaux lieux\n' +
                        '\u2022 Services relatifs à des lieux existants\n' +
                        '\u2022 Itinéraires\n' +
                        '\u2022 Détails sur les cartes\n\n',
                },
            },
            privacyPolicy: {
                title: 'Politique de confidentialité',
                content: 'Le gouvernement du Yukon s\'engage à protéger votre vie privée. La collecte, l\'utilisation, la divulgation, la conservation et l\'élimination des informations recueillies via les propriétés en ligne du gouvernement du Yukon, telles que nos sites Web, se font conformément à la Loi sur l\'accès à l\'information et la protection de la vie privée et à la Loi sur les archives.\n\n' +
                         'Le but de cette déclaration de confidentialité est de vous informer des renseignements personnels qui peuvent être recueillis auprès de vous lorsque vous interagissez avec le gouvernement du Yukon en ligne.',
            },
            termsConditions: {
                title: 'Termes et conditions',
                questions: {
                    q1: 'Avis de non responsabilité',
                    a1: 'Ces renseignements sont distribués « tels quels » et ne présentent aucune garantie exprimée ou implicite. L’information peut être utilisée à la condition qu’il soit formellement entendu que ni le gouvernement, ni ses ministres, employés ou agents ne seront responsables des pertes ou des dommages de quelque nature que ce soit qui pourraient résulter de l’utilisation des renseignements fournis dans cette application ou sur les sites externes pour lesquels elle offre des liens.',
                    q2: 'Avis de confidentialité',
                    a2: 'Le gouvernement du Yukon s’engage à protéger vos renseignements personnels. La collecte, l’utilisation, la divulgation, la conservation et l’élimination de l’information recueillie à partir des ressources en ligne du gouvernement du Yukon telles que les sites Web et les applications mobiles sont faits en conformité avec la Loi sur l’accès à l’information et la protection des renseignements personnels et la Loi sur les archives.\n \n' +
                        'Le présent avis de confidentialité a pour objet de vous faire savoir quels renseignements personnels pourraient être recueillis lorsque vous utilisez cette application.',
                    q3: 'Collecte de renseignements personnels',
                    a3: 'La collecte de renseignements personnels recueillis à partir des sites Web du gouvernement est effectuée conformément au paragraphe 29c) de la Loi sur l’accès à l’information et la protection de la vie privée aux fins indiquées ci-après: \n',
                    q3List: {
                        q1: '1. Communiquer avec le ministère du Tourisme et de la Culture, gouvernement du Yukon',
                        a1: 'Si vous choisissez d’envoyer par courriel une demande de renseignements ou des commentaires généraux sur l’application mobile, vos renseignements personnels peuvent être utilisés pour répondre à votre courriel.\n' +
                            'Les courriels et autres méthodes électroniques utilisées pour communiquer avec le gouvernement du Yukon ne sont pas protégés, à moins d’indication contraire, clairement énoncée. Il est donc recommandé de ne pas transmettre de renseignements personnels de nature délicate par ces moyens.',
                        q2: '2. Fichier de journalisation',
                        a2: 'Nous recueillons les informations que votre appareil envoie lorsque vous utilisez notre application mobile (« fichier de journalisation »).',
                        a3: 'Le fichier de journalisation contient des informations telles que :',
                        q3items: {
                            first: 'l’adresse de protocole Internet (adresse IP) de votre ordinateur,',
                            second: 'la date et l’heure de la demande.',
                        }
                    },
                    q4: 'Renseignements :',
                    a4: 'Pour toute question, veuillez contacter la Section des lieux d’intérêt historique, ministère du Tourisme et de la Culture, gouvernement du Yukon.\n',
                },
            }
        },

        // FILTERS
        filters: {
            siteType: 'Site type',
            region: 'Region',
            highway: 'Highway',
            nearMe: 'Near me',
            myFavorites: 'My favorites'
        },
        filterRegions: {
            campbell: 'Campbell',
            klondike: 'Klondike',
            kluane: 'Kluane',
            northYukon: 'Nord et Arctique',
            silverTrail: 'Silver Trail',
            southernLake: 'Lac du Sud',
            watsonLake: 'Watson Lake',
            whitehorse: 'Whitehorse',
        },
        filterTypes: {
            camping: 'Camping',
            recreation: 'Vous êtes prêt?',
            wildlifeLandscape: 'Nature et paysages',
            historyCulture: 'Histoire et culture',
        },
        filterHighways: {
            alaska: 'Route de l’Alaska',
            klondike: 'Route du Klondike',
            haines: 'Route de Haines',
            robertCampbell: 'Route Campbell',
            dempster: 'Route Dempster',
            canol: 'Route Canol',
            atlin: 'Route d’Atlin',
            tagish: 'Route de Tagish',
            topOfTheWorld: 'Route Top of the World',
            nahanniRange: 'Route Nahanni Range',
            silverTrail: 'Route Silver Trail'
        },
    },
}
