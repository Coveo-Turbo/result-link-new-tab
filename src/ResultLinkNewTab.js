const Coveo = require('coveo-search-ui');

module.exports = function ResultLinkNewTab(searchInterface) {
    const searchInterfaces = searchInterface ? [searchInterface] : document.querySelectorAll('.CoveoSearchInterface');
    searchInterfaces.forEach(searchInterface => {
        searchInterface.addEventListener(Coveo.InitializationEvents.beforeInitialization, function (e, args) {   
            Coveo.options(e.target, {
                ResultLink: {
                    alwaysOpenInNewWindow: true
                }
            });
        });
    });
    
}