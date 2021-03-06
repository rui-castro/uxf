(function(jQuery) {
    jQuery.fn.uxwiki = function(message, options) {
        // the default values for the wiki
        var defaults = {};

        // sets the default options value
        var options = options ? options : {};

        // constructs the options
        var options = jQuery.extend(defaults, options);

        // sets the jquery matched object
        var matchedObject = this;

        // creates the various regular expressions for substitution
        var newlineRegex = RegExp("\\\\n", "g");
        var boldStartRegex = RegExp("\\[", "g");
        var boldEndRegex = RegExp("\\]", "g");

        /**
         * Initializer of the plugin, runs the necessary functions to initialize
         * the structures.
         */
        var initialize = function() {
            _appendHtml();
            _registerHandlers();
        };

        /**
         * Creates the necessary html for the component.
         */
        var _appendHtml = function() {

        };

        /**
         * Registers the event handlers for the created objects.
         */
        var _registerHandlers = function() {
        };

        var _process = function(message) {
            // replaces the various message items
            var message = message.replace(newlineRegex, "<br/>");
            var message = message.replace(boldStartRegex, "<b>");
            var message = message.replace(boldEndRegex, "</b>");

            // returns the (processed) message
            return message;
        };

        // initializes the plugin
        initialize();

        // processes the message
        var message = _process(message);

        // returns the (processed) message
        return message;
    };
})(jQuery);
