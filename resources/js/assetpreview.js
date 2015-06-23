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

        // Scan for asset fields
        $('.element.hasthumb').on('keydown', function(e) {

            // Listen for space bar
            if(e.which == 32) {

                // Toggle
                if(state) {

                    // Close all boxes
                    $.fancybox.close();
                } else {

                    // Open fancybox
                    $.fancybox($(this), {
                        href: $(this).data('url'),
                        title: $(this).data('label')
                    });
                }

                // Change state
                state = !state;
            }
        });
    });
})(jQuery);
