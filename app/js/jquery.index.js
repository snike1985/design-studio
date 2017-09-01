"use strict";
( function(){

    $(function(){

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

        $('.show').each( function() {
            new Show( $(this) );
        } );

        $('.showing-text').each( function() {
            new ShowingText( $(this) );
        } );

        $('.tabs').each( function() {
            new Tabs( $(this) );
        } );

        $('.testimonials').each( function() {
            new Testimonials( $(this) );
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

                    if( ( _window.scrollTop() + windowH*0.7 ) > topPos && !curItem.hasClass( 'is-show' ) ){

                        curItem.addClass( 'is-show' );
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

    var Tabs = function(obj) {

        //private properties
        var _obj = obj,
            _tabsControlsWrap = _obj.find('.tabs__controls'),
            _tabsControlsWrapLeft = _tabsControlsWrap.offset().left,
            _tabsControls = _tabsControlsWrap.find('.tabs__controls-item'),
            _activeControl = _tabsControlsWrap.find('.active'),
            _tabsSlider = _obj.find('.tabs__controls-slider'),
            _tabsContentWrap = _obj.find('.tabs__content'),
            _tabsContent = _tabsContentWrap.find('.tabs__content-item');

        //private methods
        var _addEvents = function() {

                _tabsControls.on({
                    'click': function () {
                        var activeElem = $(this);

                        if ( !activeElem.hasClass('active') ) {
                            _tabsControls.removeClass('active');
                            activeElem.addClass('active');
                            _sliding(activeElem);
                        }

                    }
                });

                $(window).on({
                    'resize': function () {
                        _tabsControlsWrapLeft = _tabsControlsWrap.offset().left;
                        _sliding(_tabsControlsWrap.find('.active'));
                    }
                });
            },
            _checkActiveControl = function() {
                if ( _activeControl.length > 0 ) {
                    if ( _activeControl.length > 1 ) {
                        _activeControl.removeClass('active');
                        _activeControl.eq(0).addClass('active');
                    }
                } else {
                    _activeControl = _tabsControls.eq(0);
                    _activeControl.addClass('active');
                }
                _sliding(_activeControl);

            },
            _sliding = function(elem) {
                _tabsSlider.css({
                    'width': elem.outerWidth(),
                    'left': (elem.offset().left - _tabsControlsWrapLeft) + 'px'
                });
                _showActiveContent(elem.index());
            },
            _showActiveContent = function(activeIndex) {
                _tabsContent.removeClass('active');
                _tabsContent.eq(activeIndex - 1).addClass('active');
                _tabsContentWrap.css({ 'height': _tabsContent.eq(activeIndex - 1).outerHeight() + 'px' });
            },
            _init = function() {
                _addEvents();
                _checkActiveControl();
            };

        //public properties

        //public methods

        _init();
    };

    var Testimonials = function(obj) {

        //private properties
        var _obj = obj,
            _slider = _obj.find('.swiper-container'),
            _pagination = _obj.find('.swiper-pagination'),
            _swiper = null;

        //private methods
        var _addEvents = function() {

                // _tabsControls.on({
                //     'click': function () {
                //
                //     }
                // });

                $(window).on({
                    'resize': function () {

                    }
                });
            },
            _initSlider = function() {
                _swiper = new Swiper(_slider, {
                    pagination: _pagination,
                    effect: 'coverflow',
                    centeredSlides: true,
                    loop: true,
                    slidesPerView: 'auto',
                    coverflow: {
                        rotate: 0,
                        stretch: 500,
                        depth: 5,
                        modifier: 1,
                        slideShadows : false
                    }
                });

            },
            _sliding = function() {

            },
            _showActiveContent = function() {

            },
            _init = function() {
                _addEvents();
                _initSlider();
            };

        //public properties

        //public methods

        _init();
    };

} )();