// require all `test/**/*.js`
const testsContext = require.context('./', true, /.+Spec.js\b/);

testsContext.keys().forEach(testsContext);
