const {Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox')

function crawler() {
  console.log('building')
  this.driver = this.driverFactory()
  this.headless= "true"

}

crawler.prototype.driverFactory = function() {
  let options = new firefox.Options()
  if(this.headless == "true"){
    const screen = {
      width: 1920,//1024
      height: 1080//768
    }
    options.headless().windowSize(screen)
  }

  console.log(options)
  let driver = new Builder()
  .usingServer('http://localhost:4444/wd/hub')
  .forBrowser('firefox')

  .setFirefoxOptions(new firefox.Options(options))
  //.withCapabilities({'bowserName': 'firefox', acceptSslCerts: true})
  .build();
  //your code inside this block
  //  console.log(driver)
  //  console.log('bluit')
  return driver
}





module.exports = crawler




//module1.js

// export function function1() {
//   console.log('f1')
// }
//
// export function function2() {
//   console.log('f2')
// }
//
// export default function1;
//
// And then:
//
// import defaultExport, { function1, function2 } from './module1'
//
// defaultExport();  // This calls function1
// function1();
// function2();
