# Visualtests
Visual Testing using percy to add it under testcafe tests.

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Bhumi/visualtests)

# Things to install:
    brew install yarn
    npm install -g typescript
    yarn init
    yarn add testcafe --dev
# Check the versions:
    tsc --version
    yarn --version

Command to run tests in local:
    yarn percy exec -- testcafe chrome:headless src/test
    yarn testcafe chrome,ff,safari src/test/test.ts --debug-mode
    yarn testcafe chrome src/test/test.ts --debug-mode
    yarn testcafe chrome src/test/test.ts -L