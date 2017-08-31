"use strict";
( function(){

    $(function(){

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

    });

    var Menu = function(obj) {

        //private properties
        var _obj = obj,
            _btn = _obj.find( '.menu__btn' );

        //private methods
        var _addEvents = function() {

                _btn.on({
                    'click': function() {

                        _obj.toggleClass('open');
                    }
                });

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

} )();