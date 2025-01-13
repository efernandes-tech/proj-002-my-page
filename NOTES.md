# Notes

## Build:

-   https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-web-framework?tabs=bash&pivots=react

-   Create a static web app on Azure

```
az login

az account show

az account set --subscription "<SUBSCRIPTION_NAME_OR_ID>"

az group create -n proj-ii-my-page -l centralus --query "properties.provisioningState"

az staticwebapp create -n version-2 -g proj-ii-my-page --query "defaultHostname"
```

-   Configure for deployment

```
staticwebapp.config.json

{
    "navigationFallback": {
        "rewrite": "/index.html"
    }
}

npm install -D @azure/static-web-apps-cli

npx swa init

npx swa build

npx swa login --resource-group proj-ii-my-page --app-name version-2
```

-   Deploy your site to Azure

```
npx swa deploy --env production
```
