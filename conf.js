// conf.js
// var HTTPSProxyAgent = require('https-proxy-agent');
// var sauceRestAgent = new HTTPSProxyAgent("http://<proxy>:<port>")

exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    // sauceAgent: sauceRestAgent,

    // webDriverProxy: 'http://<proxy>:<port>',

    //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    specs: ['specs/*spec.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        var caps = browser.getCapabilities()
    },

    capabilities: {
        browserName: 'firefox',
        version: 'latest',
        platform: 'OS X 10.10',
        name: "Oildex-Tests",
        shardTestFiles: true,
        maxInstances: 25
    },

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Sample Test in Sauce Labs");
    },

jasmineNodeOpts: {
    defaultTimeoutInterval: 1200000,
    showColors: true,
    isVerbose: true,
    includeStackTrace: true
}

}
