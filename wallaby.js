module.exports = function(wallaby) {
  return {
    files: ['src/index.js'],

    tests: ['__tests__/*test.js'],

    env: {
      type: 'node',
    },
    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
  };
};
