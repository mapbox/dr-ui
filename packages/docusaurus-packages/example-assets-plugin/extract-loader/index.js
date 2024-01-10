// a scaled-down version of `extract-loader`, which is no longer maintained
// and included dependencies on and older version of babel-core

const vm = require('vm');

const extractLoader = async function (src) {
  // create a new node vm to evaluate the script
  const script = new vm.Script(src, {
    displayErrors: true
  });

  const sandbox = {
    module: {}
  };

  script.runInNewContext(sandbox);

  const extractedContent = sandbox.module.exports;

  return extractedContent;
};

module.exports = extractLoader;
