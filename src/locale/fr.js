export default {
    'translation': {
        appInformation: {
            'title': "Renseignements sur l'application",
            'intro': `Cette appli est votre guide sur les terrains de camping, la vie sauvage ainsi que les lieux d’intérêt culturel et historique qui sont accessibles par le réseau routier du Yukon. Explorez les sites par route ou par région ou bien recherchez un site à proximité. Découvrez l’histoire naturelle et culturelle qui vous entoure.`,
            locationServices: {
                title: "Géolocalisation",
                questions: {
                    q1: `Pourquoi l’application cherche-t-elle à me localiser?`,
                    a1: `L’application utilise la localisation fournie par votre appareil pour vous donner des résultats utiles, comme des lieux situés à proximité.\n Cette application ne conserve pas la localisation en mémoire. La localisation n’est utilisée que dans votre appareil. Vous pouvez activer la localisation dans l’application ou sur votre appareil.`,
                    q2: `Je ne souhaite pas activer l’option de localisation.`,
                    a2: `Aucun problème! Vous pouvez quand même rechercher et filtrer des lieux. Cependant, vous ne pourrez pas naviguer jusqu’à ces lieux ou voir les lieux situés à proximité dans l’application. Si votre appareil est connecté à Internet, il utilisera les données mobiles pour mettre l’application à jour, au besoin.`,
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
                content: `Le gouvernement du Yukon s'engage à protéger votre vie privée. La collecte, l'utilisation, la divulgation, la conservation et l'élimination des informations recueillies via les propriétés en ligne du gouvernement du Yukon, telles que nos sites Web, se font conformément à la Loi sur l'accès à l'information et la protection de la vie privée et à la Loi sur les archives.`,
            },
            termsConditions: {
                title: 'Termes et conditions',
                questions: {
                    q1: 'Avis de non responsabilité',
                    a1: 'Ces renseignements sont distribués « tels quels » et ne présentent aucune garantie exprimée ou implicite. L’information peut être utilisée à la condition qu’il soit formellement entendu que ni le gouvernement, ni ses ministres, employés ou agents ne seront responsables des pertes ou des dommages de quelque nature que ce soit qui pourraient résulter de l’utilisation des renseignements fournis dans cette application ou sur les sites externes pour lesquels elle offre des liens.',
                    q2: 'Avis de confidentialité',
                    a2: `Le gouvernement du Yukon s’engage à protéger vos renseignements personnels. La collecte, l’utilisation, la divulgation, la conservation et l’élimination de l’information recueillie à partir des ressources en ligne du gouvernement du Yukon telles que les sites Web et les applications mobiles sont faits en conformité avec la Loi sur l’accès à l’information et la protection des renseignements personnels et la Loi sur les archives.\n\n Le présent avis de confidentialité a pour objet de vous faire savoir quels renseignements personnels pourraient être recueillis lorsque vous utilisez cette application.`,
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
            myFavorites: 'Coups de cœur'
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
                leave: '<strong>REPARTEZ</strong> dans un délai d’une minute pour garantir la sécurité des animaux. Les animaux qui s\'habituent aux humains risquent de se faire tuer.',
            },
            data: {
                title1: 'Préservation du patrimoine historique',
                content_italicized1: 'La Loi sur le patrimoine historique',
                content1: ' garantit la préservation du patrimoine historique du Yukon. Ne déplacez jamais un artéfact d’un lieu archéologique ou historique. Pour signaler une découverte, contactez ',
                contacts1: {
                    name1: 'Archéologie Yukon par téléphone au 867-667-5983',
                    // contact1: '867-667-5983',
                    name2: 'ou au 1-800-661-0408, poste 5983 (sans frais au Yukon)',
                    // contact2: '1-800-661-0408',
                },
                title2: 'Règles de sécurité à suivre dans la nature',
                content2: `Avant de partir à la découverte d’un sentier, renseignez-vous sur le secteur et faites-vous un plan. Au Yukon, de nombreux sentiers ont une longueur de plusieurs centaines de kilomètres.`,
                url2: 'https://yukon.ca/fr/plein-air-faune-et-flore/securite-en-milieu-sauvage/se-deplacer-en-toute-securite-dans-la-nature',
                url_text2: 'Consultez le site pour obtenir d’autres conseils sur le tourisme d’aventure.'
            }
        },

        backButton: {
            label: 'Retour'
        }
    },
}
