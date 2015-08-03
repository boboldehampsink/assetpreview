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

        // Build array of asset fields
        var assetFields = [];

        $('.element.hasthumb').each(function(index) {
            assetFields.push({
                href: $(this).data('url'),
                title: $(this).data('label')
            });
        });

        // Scan for asset fields
        $('.element.hasthumb').on('keydown', function(e) {

            // Listen for space bar
            if(e.which == 32) {

                // Toggle
                if(state) {

                    // Close all boxes
                    $.fancybox.close();
                } else {

                    // Create object for this asset
                    var thisAssetFieldUrl = $(this).data('url');

                    // Find the index of this asset in assetFields array
                    var thisAssetIndex = 0;

                    var i, s, len = assetFields.length;
                    for (i=0; i<len; ++i) {
                        if (i in assetFields) {
                            s = assetFields[i];
                            if (s.href == thisAssetFieldUrl) {
                                thisAssetIndex = i;
                            }
                        }
                    }

                    // Open fancybox
                    $.fancybox.open(assetFields, {index: thisAssetIndex,
                                                  keys: {close: [32]}});
                }

                // Change state
                state = !state;
            }
        });
    });
})(jQuery);
