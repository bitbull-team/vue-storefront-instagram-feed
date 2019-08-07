# Instagram Feed for Vue storefront

Module for [Vue storefront](https://github.com/DivanteLtd/vue-storefront) that displays last photos from an Instagram account.

## Configuration

Configure widget in your config/local.json

```
  "instagram": {
      "token": "XXXXXX",
      "channel": "@channelname",
      "count": 3
    }

```


## For Vue StoreFront 1.9

Since extensions will be soon deprecated, we now use this widget as a module.
Register the module in your **modules/index.ts** file
 
``` 
  ...
  import { InstagramFeed } from './extension-instagram-feed' 
  ....

  export const registerModules: VueStorefrontModule[] = [
    ...
    InstagramFeed
  ]

``` 

Include component in the desired page or component.

```
  import instagramStream from 'src/modules/extension-instagram-feed/components/stream'
```

```
  components: {
    ...
    instagramStream
  }
  
```  

```  
 <instagram-stream />
```  


## For previous versions of Vue StoreFront (< 1.9)
*NB: Please use this widget [release 1.0.0](https://github.com/bitbull-team/vue-storefront-instagram-feed/releases/tag/1.0.0)*

Include component in the desired page or component.

```
  import instagramStream from 'src/extensions/instagram-feed/components/stream'
```

```
  components: {
    ...
    instagramStream
  }
  
```  

```  
 <instagram-stream />
```  
 
 Register the extension 
 
``` 
   extensionList.push(require('@vue-storefront/extension-instagram-feed/index.js'))
``` 

Et voilà!




Licence
-------

From [Bitbull](https://www.bitbull.it/) with love

[OSL - Open Software Licence 3.0](http://opensource.org/licenses/osl-3.0.php)
