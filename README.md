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

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/result-link-new-tab@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Include the component in your template as follows:

Add the following execution to your code once the page has initialized:

```html
<script>
    CoveoResultLinkNewTab()        
</script>
```

If the component is being bundled amongst other components, it will be available on the Coveo object.

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
