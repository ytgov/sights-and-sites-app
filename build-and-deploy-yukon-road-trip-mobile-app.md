# Build and deploy the Yukon Road Trip mobile application

This is not a procedure for the faint of heart.

You will need (all version numbers are reasonable minimums as of this writing):

- A fairly gutsy macOS computer, of at least 2015 vintage;
- A YG-supplied iPhone with Apple ID configured;
- macOS Catalina 10.15;
- Xcode 11.5;
- `npm` 6.14.5;
- `yarn` 1.22.4;
- `cocoapods` 1.93;
- [Android Studio](https://developer.android.com/studio) 4.0.1;
- access to the Government of Yukon's Google Play account;
- access to the Government of Yukon's Apple Developer and App Store Connect account; and
- the patience of Job.

## Deploy to the Apple iOS App Store

### 1. Prepare the source code
Clone the [Yukon Road Trip Mobile Application](http://eserv-prd-scm01.ynet.gov.yk.ca/mobile/driving-app/yukon-react-native-mobile-app) repository.
The original third-party developer's repository is at [Bitbucket](https://bitbucket.org/247Labs/yukon).

Pull the latest copy of the `master` branch.

### 2. Prepare React Native for the Xcode build

Navigate to the project root directory in a terminal.

If starting from scratch, run these commands:

    rm -fr node_modules
    yarn install
    cd ios
    pod install
    cd ..
    yarn start

If starting from an already-working build, just run this command:

    yarn start

Expect there to be some warnings but no errors.

Leave `yarn` running for the rest of the procedure.
A lot of diagnostic information will appear in the terminal while the app is running in the Xcode Simulator.

### 3. Build the project in Xcode

If re-starting after a version change or a fix for a broken build, clear out Xcode's various disk caches:

    rm -fr ~/Library/Developer/Xcode/DerivedData
    rm -fr "$(getconf DARWIN_USER_CACHE_DIR)org.llvm.clang.$USER/ModuleCache"

Start Xcode and open the `ios/yukon.xcworkspace` workspace from under the project root.

Press Command+Option+Shift+K to fully clean the build folder.

Choose a late model iPhone to build against (e.g., iPhone 11 Pro Max).

Under the General settings for the yukon target, change the Bundle Identifier to `ca.yk.gov.yukonroadtrip`.
Increment the Version number to at least one patch level above the previous successful App Store submission.
Change the target version of iOS as necessary: at present, 9.0.

Click the triangle toolbar build button.

Expect there to be many warnings but no errors.

The app will open in the Xcode Simulator if all is well.
The app will show a green "Loading" indicator bar until it is ready for use.

If running the Simulator after making a fix for a runtime problem, or want to test the app as if it were just installed, choose "Erase all content and settings" from the XCode Simulator's "Device" menu.
The virtual device will reboot and you'll have to stop and re-start the app in Xcode so that it appears.

You can manually set the device's location in the Xcode Simulator.
Choose "Location" from the "Features" menu and then choose "Custom Location".
A latitude of `62.229096` and a longitude of `-133.354807` will put you at the intersection of Campbell and Ladue in Faro just near the Campbell Region Interpretive Centre.

Once finished testing, stop the app in Xcode by clicking the square toolbar button.

### 4. Submit the app to the App Store

_Extra files for the store submission process are stored in the [Road Trip App Submission](http://eserv-prd-scm01.ynet.gov.yk.ca/mobile/driving-app/road-trip-app-submission) GitLab repository._
_These are not normally shared with third-party app developers unless they will assume managing the submission process on YG's behalf._

Please refer to [How To Submit Your App To the App Store: Using App Store Connect](https://codewithchris.com/submit-your-app-to-the-app-store/) for the general instructions for this step, which are also stored as `how-to-submit-your-app-to-the-app-store-2019.pdf` in the repository.

Make sure `yarn` is still running from step #2.

Log in to [App Store Connect](https://appstoreconnect.apple.com) and navigate to "My Apps".
Open the "Yukon Road Trip" app.
Under the "App Information" section , fill in any necessary sections, including screenshots, in both languages.
The `yukon-road-trip-app-store-submission-requirements.xlsx` records all app settings for both app stores.

Connect your iPhone to the Mac and follow the instructions in [How to Deploy your App on an iPhone ](https://codewithchris.com/deploy-your-app-on-an-iphone/), also stored as `how-to-deploy-your-app-on-an-iphone-2019.pdf`, to:

- register your Apple ID with Xcode;
- generate an Apple Development certificate;
- generate an Apple Distribution certificate (the article mentions an iOS Distribution certificate which apparently don't exist anymore);
- verify that the certificates have been created on the Apple Developer [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/certificates/list) page; and
- deploy the app to your iPhone.

Once those certificates are created, they can be reused so long as they haven't expired.

In Xcode, select "Generic iOS Device" from the list of target devices, or "schemes".
Choose "Archive" from "Product" and settle in for a few minutes' wait while your computer's fan serenades you.

Distribute the newly generated archive to the iOS App Store.
Accept the default App Store Connect distribution options and signing.
Upload the archive IPA file.
Settle in for another wait: up to an hour depending on your bandwidth.

Check for a confirmation email from the App store that the app has been successfully submitted and is ready for review.

Return to [App Store Connect](https://appstoreconnect.apple.com), jump through any remaining hoops, and click the "Submit for Review" button.

Pour a snifter of Château de Montifaud and light up a Laranja Reserva Toro.


## Deploy to the Google Play Android App Store

### Repository History

The `eservices/android-apk-build` branch was made at last commit by the original 247labs developer (f6c77d8d, 2019-09-25).
Sometime after that point, the second developer added large files which perhaps don't belong under source control.


### Missing Large Files

The following files were deleted from this repository to meet GitHub's filesize limits.
The originals are still in the
[YG eServices GitLab master repository](http://eserv-prd-scm01.ynet.gov.yk.ca/mobile/driving-app/yukon-react-native-mobile-app)
(VPN and explicit vendor access required).

- ./android/app/build/intermediates/module_bundle/release/buildReleasePreBundle/out/base.zip
- ./android/.gradle/6.5/executionHistory/executionHistory.bin


### Release Build process
#### Prerequisite:
- Android Studio v4.1.2 (maybe)
- OpenJDK Binaries v11 (Hotspot) (get here)[https://adoptopenjdk.net/]
- Android SDK (bundled with with Android Studio instal)

#### Set environment variables
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

#### Setup Local Env
##### Clone this repos
`git clone git clone https://github.com/ytgov/yukon-road-trip.git`

##### Install dependencies
From `yukon-roadtrip-app`, run `npm install`

#### Generate the Application keystore
this key will be used by Google to sign you app releases. Once uploaded, this key cannot be changed.
From `/android/app/`, run: `keytool -genkey -v -keystore release.keystore -alias releasekey -keyalg RSA -keysize 2048 -validity 10000`
The metadata fields values used are as follows:

    CN=Dave Rogers, OU=HPW ICT eServices, O=Government of Yukon, L=Whitehorse, ST=Yukon, C=CA

You will be prompted to choose a password. Store it safely.

#### Generate Upload key
This key will be used to sign your builds locally. This one can be invalidated and recreated if necessary (but not without Google support). Same as previous step, store the password safely.
From `/android/app/`, run: `keytool -genkey -v -keystore upload.keystore -alias upload -keyalg RSA -keysize 2048 -validity 10000`
From `/android/app/`, run: `keytool -export -rfc -keystore upload.keystore -alias upload -file upload_certificate.pem`

#### Set keystore password as gradle env variables
In `android/gradle.properties`, set the values of `MYAPP_UPLOAD_STORE_PASSWORD` and `MYAPP_UPLOAD_KEY_PASSWORD` to the password you chose at the previous step (Upload key).

So as not to add any passwords to the Git repository, these can instead be set in the
`~/.gradle/gradle.properties` file.

#### Build
##### Start the React-native Android server
*(not sure it's really necessary but the next step wasn't working before I did that)*

In a separate terminal:
From `/`, run `npx react-native run-android`
Keep it running during the next step

##### run the build script
From `/android/`, run `./gradlew bundleRelease`

#### Test your build
#### Launch the Android simulator
From `/`, run `emulator -avd <avd_name>` where `<avd_name>` is the name of the Android Virtual device you want to test on. The list is available in `Android Studio -> Tools -> AVD Manager`

#### Launch the app
From `/`, run `npx react-native run-android --variant=release`

### App publishing process
#### Create a new app
Open the Google Play Console and create a new application.

#### Create a production release
Click on "Release" -> "Production" -> "Create new release". ⚠️ Stop before clicking on "Continue" under "Play App Signing"

#### Configure Play App Signing
Click on "Manage preferences", select the option "Export and upload a key from a java keystore" and follow the instructions on screen:

- 1 and 2 using the release Application keystore you generated earlier (release.keystore)

- Upload the upload certificate created earlier (upload_certificate.pem).

#### Upload your app bundle
click on "Upload" and upload the .abb file located at `android/app/build/outputs/bundle/release/app-release.abb`

#### Complete version details
Fil the fields and submit the form.


### Useful references
[React Native build process](https://reactnative.dev/docs/signed-apk-android)