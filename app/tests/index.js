import './bcpLanguageTagChecker'
import './Core'
import './SecvisogramPage'
import './sortObjectKeys'

suiteTeardown(function () {
  if (/** @type {any} */ (window).__coverage__) {
    console.log('Found coverage report, writing to .nyc_output/coverage.json')
    var path = require('path')
    var fs = require('fs')
    fs.writeFileSync(
      path.resolve(process.cwd(), '.nyc_output/coverage.json'),
      JSON.stringify(/** @type {any} */ (window).__coverage__)
    )
  }
})
