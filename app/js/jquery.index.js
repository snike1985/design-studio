"use strict";
( function(){

    $(function(){

        $('.contact-us').each( function() {
            new ContactUs( $(this) );
        } );

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

        $('.request').each( function() {
            new Request( $(this) );
        } );

        $('.site').each( function() {
            new Site( $(this) );
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

    var ContactUs = function(obj) {

        //private properties
        var _obj = obj,
            _form = _obj.find( '.contact-us__form' ),
            _submit = _obj.find( 'input[type=submit]' ),
            _btn = document.createElement('div');

        //private methods
        var _addEvents = function() {

                $('.contact-us__form .btn').on({
                    'click': function () {
                        _form.trigger('submit');
                    }
                });

            },
            _init = function() {
                _btn.className = 'btn';
                _btn.innerHTML = '<span>Send</span>';
                _submit.after(_btn);
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

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

    var Request = function(obj) {

        //private properties
        var _obj = obj,
            _btnOpen = $( '.request-btn' ),
            _btnClose = _obj.find( '.request__close' ),
            _range = _obj.find('input.wpcf7-range'),
        _curValue = document.createElement('div');

        //private methods
        var _addEvents = function() {

                _btnOpen.on({
                    'click': function() {

                        _obj.addClass('open');
                    }
                });

                _btnClose.on({
                    'click': function() {

                        _obj.removeClass('open');
                    }
                });

                _range.on({
                    'input': function() {
                        var currentValue = this.value;
                        _changeValue(currentValue);
                    }
                });

                _range.on({
                    'change': function() {
                        var currentValue = this.value;
                        _changeValue(currentValue);
                    }
                });

            },
            _changeValue = function (val) {
                _curValue.innerHTML = val.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
            },
            _init = function() {
                _curValue.className = 'request__range';
                _curValue.innerHTML = '';
                _range.after(_curValue);
                _changeValue(((_range.attr('max') - _range.attr('min'))/2).toString());
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var Site = function(obj) {

        //private properties
        var _self = this,
            _obj = obj,
            _window = $( window ),
            _canUseSmoothScroll = true;

        //private methods
        var _addEvents = function() {

                _window.on( {
                    'scroll': function() {

                        var scrollTop = $(window).scrollTop();

                        _move( scrollTop );

                    },
                    'load': function() {

                        var scrollTop = $(window).scrollTop();

                        _move( scrollTop );

                    },
                    'mousewheel': function( event ) {
                        if ( _canUseSmoothScroll ) {
                            event.preventDefault();

                            _siteScroll( event );

                        }
                    },
                    'DOMMouseScroll': function( event ) {
                        if ( _canUseSmoothScroll ) {
                            event.preventDefault();

                            _siteScroll( event );

                        }
                    }
                } );

            },
            _move = function( scrollTop ){

                $('.works__item').each( function (i) {
                    var elem = $(this),
                        koef = .05;

                    if ( i % 2 == 0 ) {
                        koef = -koef;
                    }

                    elem.css( {
                        '-webkit-transform': 'translate( 0px, ' + scrollTop * koef + 'px )',
                        'transform': 'translate( 0px, ' + scrollTop * koef + 'px )'
                    } );
                } );

                $('.works__title').each( function () {
                    var elem = $(this),
                        koef = .1;

                    elem.css( {
                        '-webkit-transform': 'translate( 0px, ' + scrollTop * koef + 'px )',
                        'transform': 'translate( 0px, ' + scrollTop * koef + 'px )'
                    } );
                } );

                $('.hero__gadgets').each( function () {
                    var elem = $(this),
                        koef = .2;

                    elem.css( {
                        '-webkit-transform': 'translate( 0px, ' + scrollTop * koef + 'px )',
                        'transform': 'translate( 0px, ' + scrollTop * koef + 'px )'
                    } );
                } );

                $('.hero__list').each( function () {
                    var elem = $(this),
                        koef = -.1;

                    elem.css( {
                        '-webkit-transform': 'translate( 0px, ' + scrollTop * koef + 'px )',
                        'transform': 'translate( 0px, ' + scrollTop * koef + 'px )'
                    } );
                } );

                $('.hero__layout').each( function () {
                    var elem = $(this),
                        koef = -.07;

                    elem.css( {
                        '-webkit-transform': 'translate( 0px, ' + scrollTop * koef + 'px )',
                        'transform': 'translate( 0px, ' + scrollTop * koef + 'px )'
                    } );
                } );

                $('.doing__head-list').each( function () {
                    var elem = $(this),
                        koefX = .04,
                        koefY = .07;

                    elem.css( {
                        '-webkit-transform': 'translate( ' + scrollTop * koefX + 'px, ' + scrollTop * koefY + 'px )',
                        'transform': 'translate( ' + scrollTop * koefX + 'px, ' + scrollTop * koefY + 'px )'
                    } );
                } );

                $('.circle').each( function () {
                    var elem = $(this),
                        koefX = .1,
                        koefY = .3;

                    elem.css( {
                        '-webkit-transform': 'translate( ' + scrollTop * koefX + 'px, ' + scrollTop * koefY + 'px )',
                        'transform': 'translate( ' + scrollTop * koefX + 'px, ' + scrollTop * koefY + 'px )'
                    } );
                } );

            },
            _siteScroll = function( event ) {
                var scrollTime = .5,
                    scrollDistance = 125,
                    delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3,
                    scrollTop = _window.scrollTop(),
                    finalScroll = scrollTop - parseInt( delta * scrollDistance );

                TweenMax.to( _window, scrollTime, {
                    scrollTo : { y: finalScroll, autoKill:true },
                    ease: Power1.easeOut,
                    overwrite: 5
                });
            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _addEvents();
            };

        //public properties

        //public methods
        _self.setCanUseScroll = function ( param ) {
            _canUseSmoothScroll = param;
        };

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
                    // slidesPerView: 3,
                    // paginationClickable: true,
                    // centeredSlides: true,
                    // grabCursor: true,
                    // // virtualTranslate: true,
                    // loop: true,
                    // // longSwipes: false,
                    // // followFinger: false,
                    // spaceBetween: -300
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    loop: true,
                    slidesPerView: 'auto',
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
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