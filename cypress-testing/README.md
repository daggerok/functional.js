# cypress-testing

_install cypress_

```bash
npm install cypress -ED
```

_open it_

```bash
./node_modules/.bin/cypress install
./node_modules/.bin/cypress open
# or $(npm bin)/cypress open
# or npx cypress open
```

_added npm scripts:_

```bash
npm run cypress-install
npm run cypress-open
```

_press 'OK, got it!'_

_cleanup_

```bash
$(npm bin)/cypress cache path
$(npm bin)/cypress cache clear
```

_links_

* [Testing Your App](https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-1-Start-your-server)
* [Using Docker](https://docs.cypress.io/examples/examples/docker.html#Images)
