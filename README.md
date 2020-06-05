# Result Link New Tab

The Result Link New Tab component sets the Coveo configuration to open all result links in a new tab.

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project.

```
npm i @coveops/result-link-new-tab
```

2. Use the Component or extend it

Typescript:

```javascript
import * as ResultLinkNewTab from '@coveops/result-link-new-tab';
```

Javascript

```javascript
const ResultLinkNewTab = require('@coveops/result-link-new-tab');
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * as ResultLinkNewTab from '@coveops/result-link-new-tab'
```

4. Include the component in your template as follows:

Add the following script if you're serving the component independently via a CDN:

```html
<script>
    CoveoResultLinkNewTab()        
</script>
```

Add the following script if you're serving the component from the project bundle using the `swapVar` utility:

```html
<script>
    Coveo.ResultLinkNewTab()        
</script>
```

Be sure to update the variables to have the relevant information.

## Contribute

1. Clone the project
2. Build the code base: `npm run build`
3. Update the test organization ID and API Token and configure your port on the `npm serve` script in the `package.json`: `--org-id <ORG_ID> --token <ORG_KEY> --port 8080`
4. Serve the sandbox for live development `npm run serve`