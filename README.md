# tutorial-js-playwright-selenium
[![build workflow](https://github.com/Xray-App/tutorial-js-playwright-selenium/actions/workflows/node.js.yml/badge.svg)](https://github.com/Xray-App/tutorial-js-playwright-selenium/actions/workflows/node.js.yml)
[![license](https://img.shields.io/badge/License-BSD%203--Clause-green.svg)](https://opensource.org/licenses/BSD-3-Clause)

## Overview
Code that support the tutorial [Testing web applications using Playwright](https://docs.getxray.app/display/XRAYCLOUD/Testing+web+applications+using+Playwright)

## Instalation
```
npm i -D @playwright/test
```

## Execution
```
npx folio -p browserName=chromium --reporter=junit,line --test-match=login.spec.ts
```