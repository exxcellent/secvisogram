const { spawn } = require('child_process')

const flavor = process.argv.slice(2).shift()

const command = [
  'npx electron-mocha',
  ...(flavor === 'coverage' ? [] : ['-r @babel/register']),
  '-u tdd --script ./vendor/first/cvsscalc31.js --script ./vendor/first/cvsscalc30.js --renderer',
  ...(flavor === 'coverage'
    ? ['coverage-run/tests/index.js']
    : ['tests/index.js']),
]

spawn(command.join(' '), {
  env: {
    ...process.env,
    ...(flavor === 'coverage'
      ? {}
      : {
          BABEL_ENV: 'test',
        }),
  },
  stdio: 'inherit',
  shell: true,
}).on('exit', (code) => {
  process.exit(code ?? 0)
})
