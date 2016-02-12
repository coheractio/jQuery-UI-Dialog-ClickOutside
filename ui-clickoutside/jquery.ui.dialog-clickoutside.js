/* jQuery UI dialog clickoutside */

/*
The MIT License (MIT)

Copyright (c) 2013 - AGENCE WEB COHERACTIO

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

$.widget( 'ui.dialog', $.ui.dialog, {
    options: {
        // Determine if clicking outside the dialog shall close it
        clickOutside: false,
        // Element (id or class) that triggers the dialog opening 
        clickOutsideTrigger: ''
    },
      open: function() {
          var clickOutsideTriggerEl = $( this.options.clickOutsideTrigger ),
              that = this;
            if (this.options.clickOutside){
                  // Add document wide click handler for the current dialog namespace
                  $(document).on( 'click.ui.dialogClickOutside' + that.eventNamespace, function(event){
                      var $target = $(event.target);
                      if ( $target.closest($(clickOutsideTriggerEl)).length === 0 &&
                           $target.closest($(that.uiDialog)).length === 0){
                        that.close();
                      }
                  });
            }
            // Invoke parent open method
            this._super();
      },
      close: function() {
        // Remove document wide click handler for the current dialog
        $(document).off( 'click.ui.dialogClickOutside' + this.eventNamespace );
        // Invoke parent close method 
        this._super();
      },  
});