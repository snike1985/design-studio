"use strict";
( function(){

    $(function(){

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

        $('.showing-text').each( function() {
            new ShowingText( $(this) );
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

    var Show = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _window = $( window );

        //private methods
        var _onEvents = function () {
                _window.on({
                    scroll: function () {

                        _checkScroll();

                    }
                });
            },
            _checkScroll = function(){

                var windowH = _window.height();

                _obj.each(function () {

                    var curItem = $(this),
                        topPos = _obj.offset().top;

                    if( ( _window.scrollTop() + windowH*0.9 ) > topPos && !curItem.hasClass( 'animation' ) ){

                        curItem.addClass( 'animation' );
                    }
                })
            },
            _init = function () {
                _onEvents();
                _checkScroll();
            };

        //public properties

        //public methods

        _init();
    };

    var ShowingText = function(obj) {

        //private properties
        var _obj = obj,
            _window = $(window);

        //private methods
        var _addEvents = function() {

                _window.on({
                    scroll: function () {

                        _checkScroll();

                    }
                });
            },
            _checkScroll = function(){

                var windowH = _window.height();

                _obj.each(function () {

                    var curItem = $(this),
                        topPos = _obj.offset().top;

                    if( ( _window.scrollTop() + windowH*0.9 ) > topPos && !curItem.hasClass( 'is-show' ) ){

                        curItem.addClass( 'is-show' );
                    }
                })
            },
            _init = function() {
                _addEvents();
                _checkScroll();
            };

        //public properties

        //public methods

        _init();
    };

} )();