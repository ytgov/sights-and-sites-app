# Yukon Road Trip Mobile Application

A React Native mobile application for Android and iOS developed by 247labs (subcontracted through Aasman) in 2019-20.


## Repository History

The `eservices/android-apk-build` branch was made at last commit by the original 247labs developer (f6c77d8d, 2019-09-25).
Sometime after that point, the second developer added large files which perhaps don't belong under source control.


## Missing Large Files

The following files were deleted from this repository to meet GitHub's filesize limits.
The originals are still in the
[YG eServices GitLab master repository](http://eserv-prd-scm01.ynet.gov.yk.ca/mobile/driving-app/yukon-react-native-mobile-app)
(VPN and explicit vendor access required).

- ./android/app/build/intermediates/module_bundle/release/buildReleasePreBundle/out/base.zip
- ./android/.gradle/6.5/executionHistory/executionHistory.bin


## Release Build process
### Prerequisite:
- Android Studio v4.1.2
- OpenJDK Binaries v11 (Hotspot) (get here)[https://adoptopenjdk.net/]
- Android SDK (bundled with with Android Studio instal)

### Set environment variables
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

### Setup Local Env
#### Clone this repos
`git clone git clone https://github.com/ytgov/yukon-road-trip.git`

#### Install dependencies
From `yukon-roadtrip-app`, run `npm install`

### Generate the Application keystore
this key will be used by Google to sign you app releases. Once uploaded, this key cannot be changed. 
From `/android/app/`, run: `keytool -genkey -v -keystore release.keystore -alias releasekey -keyalg RSA -keysize 2048 -validity 10000`
You will be prompted to choose a password. Store it safely.

### Generate Upload key
This key will be used to sign your builds locally. This one can be invalidated and recreated if necessary (but not without Google support). Same as previous step, store the password safely.
From `/android/app/`, run: `keytool -genkey -v -keystore upload.keystore -alias upload -keyalg RSA -keysize 2048 -validity 10000`
From `/android/app/`, run: `keytool -export -rfc -keystore upload.keystore -alias upload -file upload_certificate.pem`

### Set keystore password as gradle env variables
In `android/gradle.properties`, set the values of `MYAPP_UPLOAD_STORE_PASSWORD` and `MYAPP_UPLOAD_KEY_PASSWORD` to the password you chose at the previous step.

### Build
#### Start the Reeact-native Android server
In a separate terminal: 
From `/`, run `npx react-native run-android`
Keep it running during the next step

#### run the build script
From `/android/`, run `./gradlew bundleRelease`

### Test your build
### Launch the Android simulator
From `/`, run `emulator -avd <avd_name>` where `<avd_name>` is the name of the Android Virtual device you want to test on. The list is available in `Android Studio -> Tools -> AVD Manager`

### Launch the app
From `/`, run `npx react-native run-android --variant=release`

## App publishing process
### Create a new app
Open the Google Play Console and create a new application.

### Create a production release
Click on "Release" -> "Production" -> "Create new release". ⚠️ Stop before clicking on "Continue" under "Play App Signing"

### Configure Play App Signing
Click on "Manage preferences", select the option "Export and upload a key from a java keystore" and follow the instructions on screen:

- 1 and 2 using the release Application keystore you generated earlier (release.keystore)

- Upload the upload certificate created earlier (upload_certificate.pem).

### Upload your app bundle
click on "Upload" and upload the .abb file located at `android/app/build/outputs/bundle/release/app-release.abb`

### Complete version details
Fil the fields and submit the form.


## Useful references
[React Native build process](https://reactnative.dev/docs/signed-apk-android)
