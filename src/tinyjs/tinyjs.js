/**
 * tinyjs is a micro library to query and
 * manipulate of Document Object Model
 *
 * @author Mickaël Andrieu <andrieu.travail@gmail.com>
 * Started in 2015, under MIT licence
 */
define('tinyjs', ['require'], function (require) {
    'use strict';

    return {
        get: function(selector) {
            var selectorType = 'querySelectorAll';

            if (selector.indexOf('#') === 0) {
                selectorType = 'getElementById';
                selector = selector.substr(1, selector.length);
            }

            return document[selectorType](selector);
        },
        create: function(contentElement) {
            return document.createElement(element);
        },
        createAfter: function(id, contentElement) {
            return document.getElementById(id)
                .insertAdjacentHTML('afterend', contentElement)
            ;
        },
        createBefore: function(id, contentElement) {
            return document.getElementById(id)
                .insertAdjacentHTML('beforebegin', contentElement)
            ;
        },
        prependTo: function(parentId, contentElement) {
            return document.getElementById(parentId)
                .insertAdjacentHTML('afterbegin', contentElement)
            ;
        },
        appendTo: function(parentId, contentElement) {
            return document.getElementById(parentId)
                .insertAdjacentHTML('beforeend', contentElement)
            ;
        }

    };
});
