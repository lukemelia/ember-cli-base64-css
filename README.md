## ember-cli-base64-css

An Ember Addon to convert asset urls to base64 strings

### Install
``` sh
ember install ember-cli-base64-css
```

### Usage
Example with default options in your Ember CLI `ember-cli-build.js`.

```js
var app = new EmberApp(defaults, {
   base64CSS: {
    enabled: true
  , fontPath: 'public'
  , imagePath: 'public'
  , maxFileSize: 4096 // larger files will be left untouched
  , extensions: ['css']
  , fileTypes: ['png', 'jpg', 'jpeg', 'gif', 'svg']
  }
});
```

If you are fine with the default options, there is no need to configure anything in `ember-cli-build.js`.


