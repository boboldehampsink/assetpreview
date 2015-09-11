/**
 * Asset Preview Plugin.
 *
 * Preview Assets in the CP.
 *
 * @author    Bob Olde Hampsink <b.oldehampsink@itmundi.nl>
 * @copyright Copyright (c) 2015, Itmundi
 * @license   http://buildwithcraft.com/license Craft License Agreement
 *
 * @link      http://github.com/boboldehampsink
 */

// Inject jQuery and wait for it to be ready
(function($) {
  $(function() {

    // Keep state
    var state = 0;

    // Trigger on keydown
    $('.elements').on('keydown', '*', function(e) {

      // Listen for space
      if (e.which == 32) {
        e.stopPropagation();
        var assetFields = [];

        // Select the element and check if it's a asset field element
        var thisAsset = $(this).find('.element.hasthumb');

        // If it's not a asset field element, it's a element in assets element index
        if (!thisAsset.hasClass('hasthumb')) {

          // Select the element in asset element index
          thisAsset = $(this).closest('.element.hasthumb');
        }

        // Toggle
        if (state) {
          // Close all boxes
          $.fancybox.close();
          state = 0;
        }else {

          // Build array of asset fields
          assetFields = [];
          $(this).parent().find('.element.hasthumb').each(function(index) {
            assetFields.push({
              href: $(this).data('url'),
              title: $(this).data('label'),
            });
          });

          // Create object for this asset
          var thisAssetFieldUrl = thisAsset.data('url');

          // Find the index of this asset in assetFields array
          var thisAssetIndex = 0;
          var len = assetFields.length;
          for (var i = 0; i < len; ++i) {
            if (i in assetFields) {
              var s = assetFields[i];
              if (s.href == thisAssetFieldUrl) {
                thisAssetIndex = i;
              }
            }
          }

          // Open fancybox
          $.fancybox.open(assetFields, {
            index: thisAssetIndex,
            keys: {close: [32]},
            afterShow:  function() {
              $('.fancybox-close').one('click', function() {
                state = 0;
              });
            },
          });

          state = 1;
        }
      }
    }).on('mouseover', function() {

      // Add explaining hover text
      $('.element.hasthumb').attr('title', Craft.t('Select and press space to preview'));
    });
  });
})(jQuery);
