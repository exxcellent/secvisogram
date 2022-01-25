const TEST_CONFIG = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  compact: true,
}

module.exports = {
  env: {
    development: {
      presets: [
        ['@babel/preset-env', { modules: false, targets: { esmodules: true } }],
        '@babel/preset-react',
      ],
      compact: false,
    },
    coverage: {
      ...TEST_CONFIG,
      plugins: ['istanbul'],
    },
    test: TEST_CONFIG,
    production: {
      presets: [
        ['@babel/preset-env', { modules: false, targets: { esmodules: true } }],
        '@babel/preset-react',
      ],
      compact: true,
    },
  },
}
