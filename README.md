# tutorial-js-playwright-selenium
[![build workflow](https://github.com/Xray-App/tutorial-js-playwright-selenium/actions/workflows/node.js.yml/badge.svg)](https://github.com/Xray-App/tutorial-js-playwright-selenium/actions/workflows/node.js.yml)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FXray-App%2Ftutorial-js-playwright-selenium.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FXray-App%2Ftutorial-js-playwright-selenium?ref=badge_shield)
[![license](https://img.shields.io/badge/License-BSD%203--Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/xray/community)

## Overview
Code that support the tutorial [Testing web applications using Playwright](https://docs.getxray.app/display/XRAYCLOUD/Testing+web+applications+using+Playwright) showcasing the integratoin between [Xray Test Management](https://www.getxray.app/) on Jira and NUnit.

The test automation code implements a basic [Playwright test](https://github.com/microsoft/playwright-test)

## Prerequisites
In order to run this tutorial you need to have Nodejs and install the playwrighttest runner.
```
npm i -D @playwright/test
```

## Running
Tests can be executed locally with the following command
```
npx folio -p browserName=chromium --reporter=junit,line --test-match=login.spec.ts
```

## Submitting results to Jira

Results can be submitted to Jira so that they can be shared with the team and their impacts be easily analysed.
This can be achieved using [Xray Test Management](https://www.getxray.app/) as shown in further detail in this [tutorial](https://docs.getxray.app/display/XRAYCLOUD/Testing+web+applications+using+Playwright).

## Contact

Any questions related with this code, please raise issues in this GitHub project. Feel free to contribute and submit PR's.
For Xray specific questions, please contact [Xray's support team](https://jira.xpand-it.com/servicedesk/customer/portal/2).

## References

- [Playwrighttest](https://github.com/microsoft/playwright-test/blob/master/README.md)
- [Playwright](https://playwright.dev/)
- [How Xray processes NUnit XML reports](https://docs.getxray.app/display/XRAYCLOUD/Taking+advantage+of+NUnit+XML+reports)


## LICENSE

[BSD 3-Clause](LICENSE)