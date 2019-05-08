# karma tests

```bash
mkdir karma-parcel-starter
cd karma-parcel-starter
npm init -y
npm i -ED karma @types/node
./node_modules/.bin/karma init ./karma.conf.js
# jasmine
# no require.js
# Chrome
# test/**/*Spec.js
# no (for watch tests)
```

- update config (see [karma.conf.js](./karma.conf.js))
- add tests
- run karma with `npm t` command
- or right click on `karma.conf.js` file in idea -> create karma config

_links_

* [Karma and WebStorm](https://blog.jetbrains.com/webstorm/2013/10/running-javascript-tests-with-karma-in-webstorm-7/)
