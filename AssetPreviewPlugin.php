<?php

namespace Craft;

/**
 * Asset Preview Plugin.
 *
 * Preview Assets in the CP.
 *
 * @author    Bob Olde Hampsink <b.oldehampsink@itmundi.nl>
 * @copyright Copyright (c) 2015, Itmundi
 * @license   MIT
 *
 * @link      http://github.com/boboldehampsink
 */
class AssetPreviewPlugin extends BasePlugin
{
    /**
     * Get plugin name.
     *
     * @return string
     */
    public function getName()
    {
        return Craft::t('Asset Preview');
    }

    /**
     * Get plugin version.
     *
     * @return string
     */
    public function getVersion()
    {
        return '0.3.2';
    }

    /**
     * Get plugin developer.
     *
     * @return string
     */
    public function getDeveloper()
    {
        return 'Bob Olde Hampsink';
    }

    /**
     * Get plugin developer url.
     *
     * @return string
     */
    public function getDeveloperUrl()
    {
        return 'http://github.com/boboldehampsink';
    }

    /**
     * Inject resources in CP.
     */
    public function init()
    {
        // Only appear for logged in users in the CP
        if (!craft()->isConsole() && craft()->userSession->isLoggedIn() && craft()->request->isCpRequest()) {

            // Inject translatable string
            craft()->templates->includeTranslations('Select and press space to preview');

            // Include fancybox library files
            craft()->templates->includeCssResource('assetpreview/lib/fancybox/source/jquery.fancybox.css');
            craft()->templates->includeJsResource('assetpreview/lib/fancybox/source/jquery.fancybox.pack.js');

            // Include the assetpreview script
            craft()->templates->includeJsResource('assetpreview/js/assetpreview.js');
        }
    }
}
