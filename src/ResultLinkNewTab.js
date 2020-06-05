const Coveo = require('coveo-search-ui');

module.exports = function ResultLinkNewTab(searchInterface) {
    searchInterface = searchInterface || document.querySelector('.CoveoSearchInterface');
    searchInterface.addEventListener(Coveo.InitializationEvents.beforeInitialization, function (e, args) {
        const root = document.querySelector("#search");
    
        Coveo.options(root, {
            ResultLink: {
                alwaysOpenInNewWindow: true
            }
        });
    });
}