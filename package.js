Package.describe({
  name: 'sinda:fancybox',
  summary: 'FancyBox created to use with Meteor',
  version: '1.0.0',
  git: 'https://github.com/Sindis/fancybox'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('./fancyBox/blank.gif','client');
  api.addFiles('./fancyBox/fancybox_loading.gif','client');
  api.addFiles('./fancyBox/fancybox_loading@2x.gif','client');
  api.addFiles('./fancyBox/fancybox_overlay.png','client');
  api.addFiles('./fancyBox/fancybox_sprite.png','client');
  api.addFiles('./fancyBox/fancybox_sprite@2x.png','client');
  api.addFiles('./fancyBox/helpers/fancybox_buttons.png','client');
  api.addFiles('./fancyBox/jquery.fancybox.css','client');
  api.addFiles('./fancyBox/helpers/jquery.fancybox-buttons.css','client');
  api.addFiles('./fancyBox/helpers/jquery.fancybox-thumbs.css','client');
  api.addFiles('./fancyBox/jquery.fancybox.js','client');
  api.addFiles('./fancyBox/helpers/jquery.fancybox-buttons.js','client');
  api.addFiles('./fancyBox/helpers/jquery.fancybox-media.js','client');
  api.addFiles('./fancyBox/helpers/jquery.fancybox-thumbs.js','client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sinda:fancybox');
  api.addFiles('sinda:fancybox-tests.js');
});
