# Instagram Feed for Vue storefront

Extension for [Vue storefront](https://github.com/DivanteLtd/vue-storefront) that displays last photos from an Instagram account.

#### Usage

Configure widget in your config/local.json

```
  "instagram": {
      "token": "XXXXXX",
      "channel": "@channelname",
      "count": 3
    }

```

Include component in the desired page or component

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
