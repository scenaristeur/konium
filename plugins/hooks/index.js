before(async function() {
  this.timeout(10000)
  console.log("BEFORE")

  //  console.log("driver = ",driver)
  // runs once before the first test in this block
});

after(function() {
  this.timeout(10000)
  console.log("after")
  driver.quit()
  // runs once after the last test in this block
});

beforeEach(function() {
  this.timeout(10000)
  console.log("BEFORE each")
  // runs before each test in this block
});

afterEach(function() {
  this.timeout(10000)
  console.log("after each")
  // runs after each test in this block
});
