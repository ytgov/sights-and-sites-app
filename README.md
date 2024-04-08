# Yukon Road Trip Mobile Application

![iOS build](https://github.com/ytgov/sights-and-sites-app/actions/workflows/build-ios.yml/badge.svg)
![Android build](https://github.com/ytgov/sights-and-sites-app/actions/workflows/build-android.yml/badge.svg)

A React Native mobile application for Android and iOS developed by 247labs (subcontracted through Aasman) in 2019-20.
The app was launched in the iOS App Store and Google Play store for the first time on February 1, 2021.


## Repository history

The `eservices/android-apk-build` branch was made at last commit by the original 247labs developer (f6c77d8d, 2019-09-25).
Sometime after that point, the second developer added large files which perhaps don't belong under source control.


## Build and deploy procedure

[Instructions for iOS and Android are attached](build-and-deploy-yukon-road-trip-mobile-app.md).

## Useful references

[React Native build process](https://reactnative.dev/docs/signed-apk-android)

## Security monitoring

Dependency vulnerability scanning was implemented with [GitLab Scheduled Pipeline](https://docs.gitlab.com/ee/ci/pipelines/schedules.html) and [Slack WebHooks](https://api.slack.com/messaging/webhooks). CI pipeline consists of multiple steps:
- dependency installation (`yarn install`)
- dependency vulnerability scan (based on `yarn audit`)
- Slack notification if at least 1 vulnerability was found (details are available in CI job `npm_audit`)

Scheduled pipeline preferences (interval, notification text, etc.) are available in project's menu **CI/CD -> Schedules**:

**Interval pattern**: 0 0 * * 1
**Cron timzone**: UTC
**Target branch**: v2
**Variables**:
- SLACK_HOOK_URL=`replace with your Slack Webhook URL`
- SLACK_HOOK_TEXT="Potential security vulnerabilities in dependencies were found. Please, check pipeline."
- SLACK_CHANNEL=`replace with your Slack channel name`

## Configure Mapbox

In order to run `pod install` successfully, add a new file `~/.netrc` with the following content: 

```
machine api.mapbox.com
login mapbox
password <MAPBOX_SECRET>
```
