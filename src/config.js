/**
 * @file GLOBAL config for kComponent
 *
 * @author Leo Wang(leowang721@gmail.com)
 */

define(function (require) {

    /**
     * GLOBAL config for kComponent
     * @class component.config
     * @type {Object}
     */
    var config = {
        /**
         * @property {string} [LOADER_FILE_SUFFIX=component.html] file suffix for component.loader
         */
         LOADER_FILE_SUFFIX: 'component.html',

        /**
         * @property {string} [REGISTER_TAG=k-component] register tag name
         */
        REGISTER_TAG: 'k-component'
    };

    return config;
});
