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

### Generate keystore
From `/android/app`, run: `$ sudo keytool -genkey -v -keystore release.keystore -alias releasekey -keyalg RSA -keysize 2048 -validity 10000`
You will be prompted to choose a password. Keep it for the next step. 

### Set keystore password as gradle env variables
In `android/gradle.properties`, set the values of `MYAPP_UPLOAD_STORE_PASSWORD` and `MYAPP_UPLOAD_KEY_PASSWORD` to the password you chose at the previous step.

### Build
From `/`, run `./gradlew bundleRelease`

### Test your build
### Launch the Android simulator
From `/`, run `emulator -avd <avd_name>` where `<avd_name>` is the name of the Android Virtual device you want to test on. The list is available in `Android Studio -> Tools -> AVD Manager`

### Launch the app
From `/`, run `npx react-native run-android --variant=release`

### Voilà
Your APK is located at `android/app/build/outputs/apk/release/app-release.apk`

## Useful references
[React Native build process](https://reactnative.dev/docs/signed-apk-android)
