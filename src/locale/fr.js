export default {
    'translation': {
        appInformation: {
            'title': "Renseignements sur l'application",
            'intro': `Cette appli est votre guide pour les terrains de camping, la vie sauvage, et les lieux d’intérêt culturel et historique qui sont accessibles par le réseau routier du Yukon. Découvrez l’histoire naturelle et culturelle qui vous entoure.`,
            locationServices: {
                title: "Géolocalisation",
                questions: {
                    q1: `Pourquoi l’application cherche-t-elle à me localiser?`,
                    a1: `L’application utilise la localisation fournie par votre appareil pour vous donner des résultats utiles, comme les lieux situés à proximité.`
                        + `L'application ne conserve pas la localisation en mémoire; elle n’est utilisée que dans votre appareil. Vous pouvez activer la localisation dans l’application ou sur votre appareil.`,
                    q2: `Je ne souhaite pas activer la géolocalisation.`,
                    a2: `Pas de problème! Vous pouvez quand même faire une recherche et utiliser les filtres. Cependant, vous ne pourrez pas naviguer jusqu’à ces lieux ni voir ceux qui sont situés à proximité.`,
                },
            },
            mobileData: {
                title: 'Données mobiles',
                content: 'Si votre appareil est connecté à Internet, il utilisera les données mobiles pour mettre l’application à jour, au besoin.',
                questions: {
                    q1: 'Puis-je utiliser l\'application hors ligne?',
                    a1: `Absolument. Vous pouvez télécharger les cartes sur votre appareil si vous y autorisez l’application.`,
                    q2: 'À quelle fréquence l’application est-elle mise à jour?',
                    a2: 'L’application est mise à jour périodiquement, lorsque de nouvelles données sont disponibles, par exemple :\n\n' +
                        '\u2022 Nouveaux lieux\n' +
                        '\u2022 Services relatifs à des lieux existants\n' +
                        '\u2022 Itinéraires\n' +
                        '\u2022 Données cartographiques\n\n',
                },
            },
            privacyPolicy: {
                title: 'Politique de confidentialité',
                content: `Le gouvernement du Yukon s'engage à protéger vos renseignements personnels. La collecte, l'utilisation, la communication, la conservation et l'élimination des renseignements recueillis par les propriétés en ligne du gouvernement du Yukon, comme ses sites Web, se font conformément à la Loi sur l'accès à l'information et la protection de la vie privée et à la Loi sur les archives.\n\n`
                    + `Cet énoncé vise à vous informer des renseignements personnels qui peuvent être recueillis quand vous interagissez avec le gouvernement du Yukon en ligne.`
                ,
            },
            termsConditions: {
                title: 'Conditions',
                questions: {
                    q1: 'Avis de non-responsabilité',
                    a1: 'L\'information est distribuée telle quelle et ne présente aucune garantie exprimée ni implicite. L’information peut être utilisée à la condition qu’il soit formellement entendu que ni le gouvernement, ni ses ministres, employés ou agents ne seront responsables des pertes ou des dommages de quelque nature que ce soit qui pourraient résulter de l’utilisation de l\'information contenue dans l\'application ou sur les sites externes vers lesquels mènent les liens.',
                    q2: 'Avis de confidentialité',
                    a2: `Le gouvernement du Yukon s’engage à protéger vos renseignements personnels. La collecte, l’utilisation, la communication, la conservation et l’élimination des renseignements recueillis à partir des ressources en ligne du gouvernement du Yukon, comme les sites Web et les applications mobiles, sont faites en conformité avec la Loi sur l’accès à l’information et la protection des renseignements personnels et la Loi sur les archives.`,
                    q3: 'Collecte de renseignements personnels',
                    a3: 'La collecte de renseignements personnels à partir des sites Web du gouvernement est effectuée conformément au paragraphe 29c) de la Loi sur l’accès à l’information et la protection de la vie privée aux fins indiquées ci-dessous. \n',
                    q3List: {
                        q1: '1. Communiquer avec le ministère du Tourisme et de la Culture du gouvernement du Yukon',
                        a1: 'Si vous choisissez d’envoyer une demande de renseignements ou des commentaires généraux par courriel à partir de l’application mobile, vos renseignements personnels pourraient être utilisés pour vous répondre.\n' +
                            'Les courriels et autres méthodes électroniques utilisées pour communiquer avec le gouvernement du Yukon ne sont pas protégés, à moins d’indication contraire, clairement énoncée. Il est donc recommandé de ne pas transmettre de renseignements personnels de nature délicate par ces moyens.',
                        q2: '2. Fichier de journalisation',
                        a2: 'Nous recueillons les informations transmises par votre appareil quand vous utilisez l\'application.',
                        a3: 'Le fichier de journalisation contient des informations comme :',
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

        appIntroduction: {
            title: 'Introduction de l\'application'
        },

        favorites: {
            addedToFavorites: 'Coup de cœur ajouté!',
            noFavorites: 'Vous n\'avez pas encore ajouté de coup de cœur.',
        },

        intro: {
            one: {
                title: 'Où allons-nous?',
                text: 'Faites une recherche par route, par région ou à proximité.'
            },
            two: {
                title: 'Choisir un site',
                text: 'Explorez plus de 280 lieux du Yukon, même hors ligne.'
            },
            three: {
                title: 'Mes coups de cœur',
                text: 'Faites une liste de vos coups de cœur ou de voyages à faire.'
            },
            four: {
                title: 'Permissions',
                text_1: 'L\'application pourrait vous demander d\'autoriser l\'accès à certaines fonctions.',
                text_2: 'Activez la géolocalisation pour voir les sites situés à proximité et savoir comment vous y rendre. Vous pouvez modifier vos préférences sur votre appareil.'
            },
            start: 'Allons-y'
        },

        // NAVIGATION
        navigation: {
            header: {
                filters: 'Filtres',
                list: 'Liste',
                map: 'Carte'
            },
            footer: {
                search: 'Recherche',
                explore: 'Virées en voiture',
                helpfulInfo: 'Infos pratiques'
            }
        },

        // SITE DETAILS
        siteDetails: {
            siteTypes: {
                title: 'Type de site'
            },
            sectionInfo: {
                title: 'Informations',
                warning: 'Attention :'
            },
            sectionDescription: {
                title: 'Description'
            },
            sectionDirections: {
                title: 'Itinéraire',
                highway: 'Route',
                highwayKm: 'Borne kilométrique',
                secondaryRoad: 'Route secondaire',
                secondaryRoadKm: 'Borne kilométrique',
                GPS: 'GPS coordinates',
                siteDirections: 'Itinéraire'
            },
            sectionHelpfulLinks: {
                title: 'Liens utiles',
                getCampingPermit: 'Permis de camping',
                rulesSafety: 'Règles et mesures de sécurité',
                guideToCamping: 'Guide du camping au Yukon',
                map: 'Carte (terrains de camping et aires de loisirs)'
            },
            sectionBooking: {
                title: 'Vous voulez réserver ce magnifique emplacement?',
                text: 'Pour faire une réservation, allez à la page Virée en voiture au Yukon sur yukon.ca. Merci!',
                linkLabel: 'Yukon.ca/en/road-trip-app',
                extra: '<p style="color: white">Besoin d\'aide? Des questions? Écrivez à ' +
                    '<a href="mailto:heritage.planning@gov.yk.ca">heritage.planning@gov.yk.ca</a> ou ' +
                    'appelez au <a href="tel:867-667-5386">867-667-5386</a>, ou au <a href="tel:1-800-661-0408">1-800-661-0408</a>, ' +
                    'poste 5386 (sans frais au Yukon).</p>'
            },
            sectionSupport: {
                title: 'Support the App!',
                text: 'Your support of the Yukon Road Trip app helps promote our beautiful province. Please help us by sharing this site on social media so others can discover the beauty of the Yukon!',
                shareButton: 'Share this site on social media'
            },
            nearBySites: 'Sites à proximité',
        },

        // FILTERS
        filters: {
            by: 'Filtrer par',
            siteTypes: 'Type de site',
            siteTypeTitle: 'Filtrer par type de site',
            regions: 'Région',
            regionTitle: 'Filtrer par région',
            highways: 'Route',
            highwayTitle: 'Filtrer par route',
            nearMe: 'À proximité',
            myFavorites: 'Coups de cœur',
            notifications: {
                reset: 'Filtres réinitialisés',
                applied: 'Filtres appliqués'
            },
            resetFilter: 'Réinitialiser les filtres',
            applyFilters: 'Appliquer les filtres',
        },
        filterRegions: {
            campbell: 'Campbell',
            klondike: 'Klondike',
            kluane: 'Kluane',
            northYukon: 'Nord',
            silverTrail: 'Silver Trail',
            southernLake: 'Lac du Sud',
            watsonLake: 'Watson Lake',
            whitehorse: 'Whitehorse',
        },
        filterTypes: {
            camping: 'Camping',
            recreation: 'Loisirs',
            wildlifeLandscape: 'Faune et paysages',
            historyCulture: 'Histoire et culture',
        },
        filterHighways: {
            alaska: "Route de l'Alaska",
            klondike: 'Route du Klondike',
            haines: 'Route de Haines',
            robertCampbell: 'Route Robert-Campbell',
            dempster: 'Route Dempster',
            canol: 'Route Canol',
            atlin: 'Route d\'Atlin',
            tagish: 'Route de Tagish',
            topOfTheWorld: 'Route Top of the World',
            nahanniRange: 'Chemin Nahanni Range',
            silverTrail: 'Route Silver Trail'
        },
        currentConditions: {
            title: 'Conditions actuelles',
            campground: {
                title: 'Mises en garde et fermetures de camping',
                description: `Pour de l'information sur les terrains de camping, dont les cartes, les fermetures et les mises en garde, allez au <a href="https://yukon.ca/fr/find-campground-or-recreation-site">yukon.ca</a>.`,
            },
            highway: {
                title: 'État des routes',
                description: `Avant de prendre la route, vérifiez les conditions routières, les mises en garde et les avis de fermetures de routes au <a href="http://511yukon.ca/fr/index.html">511yukon.ca</a>.`
            },
            fireReport: {
                title: 'Rapports sur les incendies',
                description: `Consultez les rapports d’enquête sur les incendies et les avis de sécurité publique au <a href="https://yukon.ca/fr/situations-durgence-et-securite/informations-en-situation-durgence/rapports-denquete-sur-les">yukon.ca</a>.`,
            },
        },
        /* First Nation Page content */
        firstNation: {
            title: 'Premières nations du Yukon',
            sharing: {
                title: 'Attachement profond et spirituel au territoire ancestral',
                description: `Le Yukon est un territoire où vivent un grand nombre de Premières nations qui ont un héritage politique, culturel et linguistique qui leur est propre. Ces groupes ont en commun un attachement profond et spirituel à leur territoire ancestral. Durant votre exploration du Yukon, veuillez respecter le caractère sacré du territoire à l’origine du mode de vie des Autochtones. Renseignez-vous au <a href="https://yukon.ca/fr/about-yukon-first-nations">Yukon.ca</a>, au <a href="https://mappingtheway.ca/">Mapping the Way</a> et sur le site Web officiel de chaque Première nation.`,
            },
        },
        /* Wilderness Travel Tips Page content */
        travelTips: {
            title: 'Se déplacer en nature',
            section: {
                title: 'Conseils pour observer la faune sans danger près de la route',
                stop: '<strong>ARRÊTEZ-VOUS</strong> seulement si vous pouvez le faire en toute sécurité, c’est-à-dire après avoir vérifié la circulation et vous être assuré que votre véhicule est bien visible.',
                look: '<strong>OBSERVEZ</strong> sans sortir de votre véhicule. Utilisez des jumelles ou un objectif à focale variable pour voir de plus près.',
                leave: '<strong>REPARTEZ</strong> dans un délai d’une minute pour garantir la sécurité des animaux. Les animaux qui s’habituent aux humains risquent de se faire tuer.',
            },
            data: {
                title1: 'Préservation du patrimoine historique',
                content_italicized1: 'Le patrimoine historique du Yukon',
                content1: ' est protégé par la Loi sur le patrimoine historique. Ne retirez jamais un artéfact d’un lieu archéologique ou historique. Les artéfacts appartiennent aux Yukonnais, et le gouvernement du Yukon en est le dépositaire. Pour signaler une découverte, appelez ',
                contacts1: {
                    name1: 'Archéologie Yukon par téléphone au 867-667-5983',
                    // contact1: '867-667-5983',
                    name2: 'ou au 1-800-661-0408, poste 5983 (sans frais au Yukon)',
                    // contact2: '1-800-661-0408',
                },
                title2: 'Règles de sécurité à suivre dans la nature',
                content2: `Avant de partir à la découverte d’un sentier, renseignez-vous sur le secteur et ayez un plan. Au Yukon, de nombreux sentiers ont une longueur de plusieurs centaines de kilomètres.`,
                url2: 'https://yukon.ca/fr/plein-air-faune-et-flore/securite-en-milieu-sauvage/se-deplacer-en-toute-securite-dans-la-nature',
                url_text2: 'Consultez le site pour obtenir d’autres conseils sur le tourisme d’aventure.'
            }
        },

        /* No result */
        noResult: {
            title: 'Aucun résultat',
            content: `<ul>
                    <li>Vos critères sont peut-être trop précis. Essayez une recherche plus générale.</li>
                    <li>Vérifiez qu'il n'y a pas de faute dans les mots-clés.</li>
                    <li>Des questions? Besoin d'aide? Écrivez à <a href="mailto:heritage.planning@gov.yk.ca">heritage.planning@gov.yk.ca</a> ou appelez au <a href="tel:1-800-661-0408">1-800-661-0408</a>, poste 5386 (sans frais au Yukon).</li>
                </ul>`
        },

        /* Search */
        searchBox: {
            placeholder: 'Recherche par mot-clé',
        },

        backButton: {
            label: 'Retour'
        }
    },
}
