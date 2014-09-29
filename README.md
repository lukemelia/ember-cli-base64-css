## ember-cli-base64-css

An Ember Addon to convert image paths to base64 strings

### Install
``` sh
npm install --save-dev ember-cli-base64-css
```

### Usage
Example with default options in your Ember CLI `Brocfile.js`.

```js
var app = new EmberApp({
   base64CSS: {
    enabled: true
  , imagePath: 'public'
  , maxFileSize: 4096 // larger files will be left untouched
  , extensions: ['css']
  , fileTypes: ['png', 'jpg', 'jpeg', 'gif', 'svg']
  }
});
```

If you are fine with the default options, there is no need to configure anything in `Brocfile.js`.


