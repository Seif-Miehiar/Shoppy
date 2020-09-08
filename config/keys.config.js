//  development or production
const LIVE = true;

if (LIVE) {
  module.exports = require("./prod")
} else {
  module.exports = require("./dev.config")
}