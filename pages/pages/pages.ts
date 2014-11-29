(() => {
    WinJS.UI.Pages.define('pages/pages/pages.html', {
        ready: function (element, options) {
            // Render the page control via a call to WinJS.UI.Pages.render. This lets
            // you render a page control by referencing it via url.
            var renderHost = $('.renderingPageControls-renderedControl')[0];
            WinJS.UI.Pages.render("pages/pages/samplePageControl.html", renderHost).done(() => {
                var bindData = WinJS.Binding.as({
                    controlText: 'This control created by calling WinJS.UI.Pages.render'
                });

                // Data bind to the child tree to set the control text
                WinJS.Binding.processAll(renderHost, bindData);

                $(renderHost).find('.samplePageControl-button').on('click', function() {
                    bindData.controlText = 'button clicked.';
                });

                // Event handler for when the toggle control switches
                $(renderHost).find('.samplePageControl-toggle').on('change', function() {
                    var toggleControl = this.winControl;
                    bindData.controlText = 'toggle is now ' + toggleControl.checked;
                });
            });

            return this;
        }
    });
})();