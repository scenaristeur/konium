let conf = {
  name: "booklice",
  url: "http://scenaristeur.github.io/booklice"
}
let Crawler = require('../plugins/crawler')
let crawler = new Crawler()
driver = crawler.driver
require('../plugins/hooks')

describe(conf.name, async function(){
  this.timeout(10000)

  it("booklice home", async function(){
    await driver.get(conf.url)
    console.log ("conf.url")
  })


})
