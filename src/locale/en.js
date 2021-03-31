export default {
    'translation': {
        // Actions
        'actionNext': 'NEXT',
        'actionApply': 'Apply',
        'actionClearAll': 'Clear all',

        'notifications': {
            'permissionsRequest': 'You should grant location permissions to get the full experience',
            'onFiltersUpdate': 'Filters were updated',
            'onFiltersClear': 'Filters were cleared',
            'onAddToMySites': 'Added! To see all your sites, tap the heart below',
            'networkNotAvailable': 'Network is not available'
        },

        'footerTabs': {
            'whereTo': 'Filter by',
            'siteType': 'Site type',
            'more': 'More'
        },

        'siteTabs': {
            'directions': 'Directions',
            'map_view': 'Map View',
            'share': 'Share',
            'mySites': 'My Sites'
        },

        'listingTypes': {
            'map': 'MAP',
            'list': 'LIST'
        },

        'common': {
            'loadMoreDefault': 'Load more',
            'noItemsDefault': 'No items'
        },

        'location': {
            'distanceToSiteInKM': '{{distance}} km from here',
            'distanceToSiteInM': '{{distance}} m from here',
            'distanceReached': "You're at the spot",
            'noLocationData': 'Can not access location data'
        },

        // WHERETO STACK
        // Choose location
        'chooseLocation': {
            title: 'Choose a location',
            nearMe: 'Near me',
            byHighway: 'By highway',
            byRegion: 'By region',
            mySites: 'My sites'
        },
        // Choose highway
        'chooseHighway': {
            title: 'Choose a highway',
        },
        // Choose region
        'chooseRegion': {
            title: 'Choose a region'
        },
        'listingTitle': 'Listing',
        // LISTING STACK
        'listContainer': {
            moreSites: 'More sites',
            noSitesFound: 'No sites found',
            noFavouritesFound: 'No favourites or "my sites" have been chosen yet'
        },
        // 'siteDetails': {
        //     nearBySites: 'Nearby site'
        // },
        // SEARCH STACK
        'search': {
            'placeholder': 'Search',
            'noRecentQueries': 'No recent queries',
            'noMatchesFound': 'No matches found'
        },
        // MORE STACK
        'more': {
            'title': 'More',
        },
        appInformation: {
            title: 'App Information',
            onboarding: 'Introduction',
            intro: `The Yukon Road Trip app is your guide to Government of Yukon’s road accessible campgrounds, wildlife viewing, cultural and historical points of interest. Connect with the natural and cultural history that surrounds you.`,
            locationServices: {
                title: "Location Services",
                questions: {
                    q1: 'Why does the app want to access my location?',
                    a1: `The app uses the location provided by your device to show you helpful results, like nearby sites. This app does not store the location, it is only used within your device. You can enable location settings within the app or on your device.`,
                    q2: 'I don’t want to enable location services',
                    a2: 'No problem! You can still search and filter sites, however you will not be able to navigate to these sites or see nearby sites within the app.',
                },
            },
            mobileData: {
                title: 'Mobile Data',
                content: 'If your device is connected to the internet, it will use mobile data to update the app if required.',
                questions: {
                    q1: 'Can I use the app offline?',
                    a1: `The app functions entirely offline. The maps are downloaded to your device when you give the app permission to do so.`,
                    q2: 'When is the information in the app updated?',
                    a2: 'The app is updated periodically with new data when it becomes available. This includes:\n\n' +
                        '\u2022 New sites\n' +
                        '\u2022 Existing site services\n' +
                        '\u2022 Directions\n' +
                        '\u2022 Map details\n\n',
                },
            },
            privacyPolicy: {
                title: 'Privacy Policy',
                content: 'The Government of Yukon is committed to protecting your privacy. The collection, use, disclosure, retention, and disposal of information collected via Government of Yukon online properties, such as our websites is done in compliance with the Access to Information and Protection of Privacy Act and the Archives Act.\n\n' +
                         'The purpose of this privacy statement is to inform you of the personal information that may be collected from you when you interact with the Government of Yukon online.',
            },
            termsConditions: {
                title: 'Terms & Conditions',
                questions: {
                    q1: 'Disclaimer',
                    a1: 'This information is distributed "as is" and does not represent any expressed or implied warranties. Information may be used on the condition that it is formally understood that neither the government nor its ministers, employees or agents will be liable for loss or damage of any kind that may result from the use of the information provided in this application or on external sites to which it offers links.',
                    q2: 'Privacy Notice',
                    a2: 'The Government of Yukon is committed to protecting your personal information. The collection, use, disclosure, retention and disposal of information collected from Yukon government online resources such as websites and mobile applications is done in accordance with the access to information and the protection of personal information and the Archives Act. \n \n ' +
                        'The purpose of this privacy notice is to let you know what personal information may be collected while using this application.',
                    q3: 'Collection of personal information',
                    a3: 'The collection of personal information collected from government websites is carried out in accordance with section 29 (c) of the Access to Information and Protection of Privacy Act for the purposes indicated below: \n',
                    q3List: {
                        q1: '1. Contact the Department of Tourism and Culture, Government of Yukon',
                        a1: 'If you choose to email an inquiry or general feedback on the mobile app, your personal information may be used to respond to your email.\n' +
                            'E-mail and other electronic methods used to communicate with the Yukon government are not protected unless clearly stated otherwise. It is therefore recommended not to transmit sensitive personal information by these means.',
                        q2: '2. Log file',
                        a2: 'We collect the information that your device sends when you use our mobile application ("log file").',
                        a3: 'The log file contains information such as:',
                        q3items: {
                            first: 'The Internet Protocol address (IP address) of your computer,',
                            second: 'The date and time of the request.',
                        }
                    },
                    q4: 'Information:',
                    a4: 'If you have any questions, please contact the Places of Historic Interest Section, Department of Tourism and Culture, Government of Yukon.\n',
                    q4Links: {
                        url1: 'mailto:Heritage.planning@gov.yk.ca',
                        title1: 'Heritage.planning@gov.yk.ca',
                        url2: 'tel:1-867-667-5386',
                        title2: '1-867-667-5386',
                    }
                },
            }
        },

        favorites: {
            addedToFavorites: 'Site added to your favorites!',
            noFavorites: 'No favorites added yet.',
        },

        intro: {
            one: {
                title: 'Where to?',
                text: 'Explore by highway, by region or near you'
            },
            two: {
                title: 'Choose a site',
                text: 'Explore over 280 Yukon sites, even when you’re offline'
            },
            three: {
                title: 'My sites',
                text: 'Save your favourite sites or create a wish list for future trips'
            },
            four: {
                title: 'Permissions',
                text_1: 'Your device may ask you to grant permissions for the app.',
                text_2: 'Enable Location Services to show sites near you, and how to navigate to these sites. You can change your preferences on your device.'
            }
        },

        // NAVIGATION
        navigation: {
            header: {
                filters: 'Filters',
                list: 'List',
                map: 'Map'
            },
            footer: {
                search: 'Search',
                explore: 'Explore Road Trips',
                helpfulInfo: 'Helpful Info'
            }
        },

        // FILTERS
        filters: {
            by: 'Filter by',
            siteType: 'Site type',
            siteTypeTitle: 'Filter by site type',
            region: 'Region',
            regionTitle: 'Filter by region',
            highway: 'Highway',
            highwayTitle: 'Filter by highway',
            nearMe: 'Near me',
            myFavorites: 'My favorites'
        },
        regions: {
            campbell: 'Campbell',
            klondike: 'Klondike',
            kluane: 'Kluane',
            northYukon: 'North Yukon',
            silverTrail: 'Silver Trail',
            southernLake: 'Southern Lakes',
            watsonLake: 'Watson Lake',
            whitehorse: 'Whitehorse',
        },
        siteTypes: {
            camping: 'Camping',
            recreation: 'Recreation',
            wildlifeLandscape: 'Wildlife & landscape',
            historyCulture: 'History & culture',
        },
        highways: {
            alaska: 'Alaska Highway',
            klondike: 'Klondike Highway',
            haines: 'Haines Road',
            robertCampbell: 'Robert Campbell Highway',
            dempster: 'Dempster Highway',
            canol: 'Canol Road',
            atlin: 'Atlin Road',
            tagish: 'Tagish Road',
            topOfTheWorld: 'Top of the World Highway',
            nahanniRange: 'Nahanni Range Road',
            silverTrail: 'Silver Trail'
        },

        // SITE DETAILS
        siteDetails: {
            siteTypes: {
                title: 'Site type'
            },
            sectionInfo: {
                title: 'Information',
                warning: 'Warning:'
            },
            sectionDescription: {
                title: 'Description'
            },
            sectionDirections: {
                title: 'Directions',
                highway: 'Highway',
                highwayKm: 'Highway kilometre',
                secondaryRoad: 'Secondary road',
                secondaryRoadKm: 'Secondary road kilometre',
                GPS: 'GPS coordinates',
                siteDirections: 'Site directions'
            },
            sectionHelpfulLinks: {
                title: 'Helpful links',
                getCampingPermit: 'Get a camping permit',
                rulesSafety: 'Rules and safety',
                guideToCamping: 'Guide to camping in Yukon',
                map: 'Map (campgrounds & recreation sites)'
            },
            sectionBooking: {
                title: 'Are you interested in booking this beautiful site?',
                text: 'To book a site, please visit the Yukon Road Trip page on Yukon.ca to get more detailed information on the next steps needed to plan your trip. Thank you for your interest!',
                linkLabel: 'Yukon.ca/en/road-trip-app',
                extra: 'To book a site, please visit the Yukon Road Trip page on Yukon.ca to get more detailed information on the next steps needed to plan your trip. Thank you for your interest! \n' +
                    'For questions and support regarding \n' +
                    'this app, please feel free to email heritage.planning@gov.yk.ca or phone 867-667-5386, or toll free in Yukon 1-800-661-0408, extension 5386.'
            },
            sectionSupport: {
                title: 'Support the App!',
                text: 'Your support of the Yukon Road Trip app helps promote our beautiful province. Please help us by sharing this site on social media so others can discover the beauty of the Yukon!',
                shareButton: 'Share this site on social media'
            },
            nearBySites: 'Nearby Sites',
        },

        /* Current Conditions Page content */
        currentConditions: {
            title: 'Current Conditions',
            campground: {
                title: 'Campground closures and warning',
                description: `Information on Government of Yukon’s campgrounds, including campground maps, closures and public warnings, visit <a href="https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/find-campground-or-recreation-site">yukon.ca</a>.`,
            },
            highway: {
                title: 'Highway conditions',
                description: `Yukon’s highway reports on current road conditions, warnings and closures, visit <a href="http://511yukon.ca/en/index.html">511yukon.ca</a>`
            },
            fireReport: {
                title: 'Fire reports',
                description: `Current information on Yukon’s fire investigation reports and public safety notices, visit <a href="https://yukon.ca/en/emergencies-and-safety/emergency-updates/fire-investigation-reports-and-safety-notices">yukon.ca</a>`,
            },
        },
        /* First Nation Page content */
        firstNation: {
            title: 'First Nations in Yukon',
            sharing: {
                title: 'Sharing deep traditional and spiritual connections with the Yukon land',
                description: `Yukon is home to many First Nations with various political, cultural and linguistic backgrounds. These groups share deep traditional and spiritual connections to their ancestral lands. As you explore Yukon, please demonstrate respect for the sacred land that sustains Indigenous ways of life. More information is available at <a href="https://yukon.ca/en/about-yukon-first-nations">Yukon.ca</a>, <a href="https://mappingtheway.ca/">Mapping the Way</a> and at each Yukon First Nations official website.`,
            }
        },
        /* Wilderness Travel Tips Page content */
        travelTips: {
            title: 'Wilderness Travel Tips',
            section: {
                title: 'Tips for safe roadside wildlife viewing:',
                stop: '<p><strong>STOP</strong> only when it is safe to do so, checking for traffic and clear sightlines.</p>',
                look: '<p><strong>LOOK</strong> from the safety of your car. Use binoculars or a zoom lens for a closer look.</p>',
                leave: '<p><strong>LEAVE</strong> within one minute to keep wildlife safe. Animals that become too habituated to humans are at risk of being killed.</p>',
            },
            data:{
                title1: 'Protecting historic resources',
                content_italicized1: '',
                content1: 'Yukon’s historic resources are protected under the Historic Resources Act. Do no remove an artifact from an archaeological or historic site. Artifacts belong to all Yukoners and are held in the public trust. To report a find, contact',
                contacts1: {
                    name1: 'Yukon Archaeology',
                    contact1: '867-667-5983',
                    name2: 'Government of Yukon Toll-Free line',
                    contact2: '1-800-661-0408',
                },

                title2: 'More wilderness safety tips',
                content2: `Before exploring a trail be sure to learn about the area and make a plan. There are many trails that head off into Yukon’s wilderness for hundreds of kilometers.`,
                url2: 'https://yukon.ca/en/outdoor-recreation-and-wildlife/wilderness-safety/travel-safely-yukon-wilderness'
            }
        },

        /* No result */
        noResult: {
            title: 'No results were found',
            content: `<ul>
                    <li>Your search criteria may be too specific. Try a more generic search to narrow down the results</li>
                    <li>Ensure there are no spelling or grammatical mistakes</li>
                    <li>For questions and support, email <a href="mailto:heritage.planning@gov.yk.ca">heritage.planning@gov.yk.ca</a> or phone <a href="tel:867-667-5386">867-667-5386</a>, or toll free in Yukon <a href="tel:1-800-661-0408">1-800-661-0408</a>, extension 5386.</li>
                </ul>`
        },

        /* Search */
        searchBox: {
            placeholder: 'Search by keyword…',
        }
    },
}
