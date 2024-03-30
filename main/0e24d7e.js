(window.webpackJsonp = window.webpackJsonp || []).push([[16, 4, 5], {
    233: function(t, e, i) {
        "use strict";
        i(183)("link", (function(t) {
            return function(e) {
                return t(this, "a", "href", e)
            }
        }
        ))
    },
    235: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return h
        }
        ));
        i(12),
        i(24),
        i(26),
        i(27),
        i(32),
        i(34);
        var s = i(16)
          , a = i(3)
          , n = i(4)
          , o = i(9)
          , r = i(8)
          , c = i(2)
          , l = i(232);
        i(0);
        function u(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, s)
            }
            return i
        }
        function d(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, s = Object(c.a)(t);
                if (e) {
                    var a = Object(c.a)(this).constructor;
                    i = Reflect.construct(s, arguments, a)
                } else
                    i = s.apply(this, arguments);
                return Object(r.a)(this, i)
            }
        }
        var h = function(t) {
            Object(o.a)(i, t);
            var e = d(i);
            function i() {
                return Object(a.a)(this, i),
                e.apply(this, arguments)
            }
            return Object(n.a)(i, [{
                key: "transformDelta",
                value: function(t) {
                    return this.options.multiplier && (t.y *= this.options.multiplier),
                    this.options.getDelta && this.options.getDelta(t),
                    this.options.lockDirection && (t[this.options.lockDirection] = 1e-12),
                    this.options.lock && (t.x = 1e-12,
                    t.y = 1e-12),
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? u(Object(i), !0).forEach((function(e) {
                                Object(s.a)(t, e, i[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                            }
                            ))
                        }
                        return t
                    }({}, t)
                }
            }, {
                key: "onRender",
                value: function(t) {}
            }]),
            i
        }(l.ScrollbarPlugin);
        h.pluginName = "disableScroll",
        h.defaultOptions = {
            direction: null
        }
    },
    241: function(t, e, i) {},
    242: function(t, e, i) {},
    243: function(t, e, i) {},
    244: function(t, e, i) {},
    252: function(t, e, i) {
        "use strict";
        i(241)
    },
    253: function(t, e, i) {
        "use strict";
        i(242)
    },
    254: function(t, e, i) {
        "use strict";
        i(243)
    },
    255: function(t, e, i) {
        "use strict";
        i(244)
    },
    261: function(t, e, i) {
        "use strict";
        i.r(e);
        i(21);
        var s = i(0)
          , a = i(7)
          , n = {
            components: {},
            props: {
                caseData: Object
            },
            data: function() {
                var t = !1;
                return this.caseData.header_video && this.caseData.header_video.url && (t = !0),
                {
                    isVideo: t,
                    isIn: !1,
                    overlayIn: !1,
                    isLoaded: !1,
                    isWide: s.k.width / s.k.height >= 1.6
                }
            },
            watch: {},
            created: function() {
                this._ready = Promise.create()
            },
            mounted: function() {
                this.isVideo && (s.i.add(this.tick),
                this.$refs.video.load()),
                this.$refs.bgImg.complete && this._ready.resolve(),
                s.k.addResize(this.setSize),
                this.setSize()
            },
            beforeDestroy: function() {
                this.isVideo && s.i.remove(this.tick),
                s.k.removeResize(this.setSize),
                this._inTl && this._inTl.kill()
            },
            methods: {
                animateIn: function(t) {
                    var e = this;
                    this._animated = !0;
                    var i = s.k.width <= 600 ? 300 : 400;
                    this._inTl = a.a.timeline({
                        delay: .3,
                        onComplete: function() {
                            e.isIn = !0
                        }
                    }),
                    t ? (a.a.set(this.$el, {
                        height: i,
                        opacity: 0
                    }),
                    this.overlayIn = !0,
                    this._inTl.to(this.$el, {
                        opacity: 1,
                        duration: .3,
                        ease: "linear"
                    }, 0).set(this.$el, {
                        scale: 1.1,
                        transformOrigin: "top"
                    }, 0).to(this.$el, {
                        scale: 1,
                        duration: .6,
                        ease: "cubic.out"
                    }, 0).add((function() {
                        e.enableVideo()
                    }
                    ), 1)) : (a.a.set(this.$el, {
                        height: s.k.height,
                        opacity: 1
                    }),
                    a.a.set(this.$refs.container, {
                        bottom: 0,
                        height: 0
                    }),
                    this._inTl.to(this.$refs.container, {
                        height: s.k.height,
                        duration: .6,
                        ease: "cubic.out"
                    }, 0).set(this.$refs.container, {
                        bottom: "auto",
                        top: 0,
                        height: s.k.height
                    }, .8).to(this.$refs.container, {
                        height: i,
                        duration: 1.3,
                        ease: "elastic.out(.2, .2)"
                    }, .8).add((function() {
                        e.overlayIn = !0
                    }
                    ), 0).add((function() {
                        e.enableVideo()
                    }
                    ), 2.2))
                },
                setSize: function() {
                    this.isWide = s.k.width / s.k.height > 1.6;
                    var t = s.k.width <= 600 ? 300 : 400;
                    this._animated && (a.a.killTweensOf(this.$el, {
                        height: !0
                    }),
                    a.a.set(this.$el, {
                        height: t
                    }, 1),
                    this.$refs.container && a.a.set(this.$refs.container, {
                        height: t
                    }, 1))
                },
                setBackground: function(t) {
                    this.$refs.bg.style.backgroundImage = "url(".concat(t, ")")
                },
                onLoad: function() {
                    this.canPlay = !0,
                    this.animatdInDone && this.enableVideo()
                },
                enableVideo: function() {
                    this.isVideo && (this.isLoaded || (this.isLoaded = !0,
                    this.$refs.video && this.shouldPlay && (this.$refs.video.play(),
                    this.isPlaying = !0)))
                },
                tick: function() {
                    var t = s.l.caseScrollY
                      , e = s.k.width <= 600 ? 300 : 400;
                    this.shouldPlay = t < e,
                    this.isLoaded && this.shouldPlay && !this.isPlaying ? (this.$refs.video.play(),
                    this.isPlaying = !0) : this.isLoaded && !this.shouldPlay && this.isPlaying && (this.$refs.video.pause(),
                    this.isPlaying = !1)
                },
                imgReady: function() {
                    this._ready && this._ready.resolve()
                },
                readyPromise: function() {
                    return this._ready
                }
            }
        }
          , o = (i(252),
        i(38))
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                class: ["case-hero", {
                    "case-hero--video": t.isLoaded,
                    "case-hero--narrow": !t.isWide,
                    "case-hero--wide": t.isWide,
                    "case-hero--in-completed": t.isIn
                }]
            }, [i("div", {
                ref: "container",
                staticClass: "case-hero__container"
            }, [i("img", {
                ref: "bgImg",
                staticClass: "case-hero__bg",
                attrs: {
                    src: t.caseData.header_image.url.split("?")[0],
                    alt: "header"
                },
                on: {
                    load: t.imgReady
                }
            }), t._v(" "), i("div", {
                ref: "overlay",
                class: ["case-hero__overlay", {
                    "case-hero__overlay--in": t.overlayIn
                }]
            }), t._v(" "), t.isVideo ? i("div", {
                ref: "videoC",
                staticClass: "case-hero__video"
            }, [i("video", {
                ref: "video",
                attrs: {
                    src: t.caseData.header_video.url,
                    preload: "",
                    loop: "",
                    muted: "",
                    playsinline: "",
                    "webkit-playsinline": ""
                },
                domProps: {
                    muted: !0
                },
                on: {
                    canplaythrough: t.onLoad
                }
            })]) : t._e()])])
        }
        ), [], !1, null, null, null);
        e.default = r.exports
    },
    262: function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i(0)
          , a = i(7)
          , n = {
            components: {},
            props: {
                caseData: Object
            },
            data: function() {
                return {}
            },
            watch: {},
            created: function() {},
            mounted: function() {
                this.prepareIn()
            },
            beforeDestroy: function() {
                clearTimeout(this._inTo),
                this.inTl && this.inTl.kill()
            },
            methods: {
                prepareIn: function() {
                    var t = .5
                      , e = this.$refs
                      , i = e.title
                      , n = e.type
                      , o = e.date
                      , r = e.desc
                      , c = new s.j(i,{
                        split: "words, chars"
                    })
                      , l = new s.j(n,{
                        split: "words"
                    })
                      , u = new s.j(r,{
                        split: "words"
                    })
                      , d = this.$refs.credits.querySelectorAll(".case-infos__credits-el")
                      , h = s.k.width <= 600
                      , f = h ? .6 : 0;
                    this.inTl = a.a.timeline({
                        paused: !0
                    }),
                    a.a.set(c.chars, {
                        opacity: 0,
                        x: 8
                    }),
                    a.a.set(l.words, {
                        opacity: 0
                    }),
                    a.a.set(o, {
                        opacity: 0
                    }),
                    a.a.set(this.$el, {
                        opacity: 1
                    }),
                    a.a.set(u.words, {
                        opacity: 0,
                        rotationX: 20,
                        x: 8
                    }),
                    d && d.length && (h ? a.a.set(d, {
                        opacity: 0,
                        rotationX: 20,
                        x: -5
                    }) : a.a.set(d, {
                        opacity: 0,
                        rotationX: 4,
                        x: 0
                    })),
                    this.inTl.to(c.chars, {
                        x: 0,
                        duration: 1,
                        ease: "cubic.out",
                        stagger: .05
                    }, t).to(c.chars, {
                        opacity: 1,
                        duration: 1,
                        ease: "expo.out",
                        stagger: .05
                    }, t).to(l.words, {
                        opacity: 1,
                        rotationX: 0,
                        duration: 1.7,
                        stagger: .07,
                        ease: "linear"
                    }, .7).to(o, {
                        opacity: 1,
                        duration: 1.2,
                        ease: "linear"
                    }, .9).to(u.words, {
                        opacity: 1,
                        duration: 1,
                        stagger: .02,
                        ease: "cubic.out"
                    }, 1).to(u.words, {
                        rotationX: 0,
                        x: 0,
                        y: 0,
                        ease: "cubic.out",
                        stagger: .02
                    }, 1),
                    d && d.length && this.inTl.to(d, {
                        opacity: 1,
                        duration: 1.4,
                        stagger: .15,
                        ease: "cubic.out"
                    }, 1.1 + f).to(d, {
                        rotationX: 0,
                        x: 0,
                        y: 0,
                        duration: 1.4,
                        ease: "cubic.out",
                        stagger: .15
                    }, 1.1 + f)
                },
                emitted: function() {
                    return !!this._emitted
                },
                animateIn: function(t) {
                    var e = this;
                    this._inTo = setTimeout((function() {
                        e.inTl.play()
                    }
                    ), t ? 300 : 700)
                },
                setSize: function() {}
            }
        }
          , o = (i(253),
        i(38))
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "case-infos"
            }, [i("div", {
                staticClass: "case-infos__head"
            }, [i("h1", {
                ref: "title",
                staticClass: "case-infos__title"
            }, [t._v("\n      " + t._s(t.$prismic.asText(t.caseData.title)) + "\n    ")]), t._v(" "), i("div", {
                ref: "type",
                staticClass: "case-infos__type"
            }, [t._v("\n      " + t._s(t.$prismic.asText(t.caseData.type)) + "\n    ")])]), t._v(" "), i("div", {
                ref: "line",
                staticClass: "case-infos__line case-line"
            }), t._v(" "), i("div", {
                staticClass: "case-infos__content"
            }, [i("div", {
                ref: "date",
                staticClass: "case-infos__date"
            }, [t._v("\n      " + t._s(t.$prismic.asText(t.caseData.date)) + "\n    ")]), t._v(" "), i("p", {
                ref: "desc",
                staticClass: "case-infos__desc"
            }, [t._v("\n      " + t._s(t.$prismic.asText(t.caseData.case_description)) + "\n    ")]), t._v(" "), i("div", {
                staticClass: "case-infos__credits-c"
            }, [i("ul", {
                ref: "credits",
                staticClass: "case-infos__credits"
            }, t._l(t.caseData.credits, (function(e, s) {
                return i("li", {
                    key: s,
                    staticClass: "case-infos__credits-el"
                }, [t._v("\n          " + t._s(t.$prismic.asText(e.name)) + "\n          " + t._s(t.$prismic.asText(e.role) ? " - " : "") + "\n          " + t._s(t.$prismic.asText(e.role)) + "\n        ")])
            }
            )), 0)])])])
        }
        ), [], !1, null, null, null);
        e.default = r.exports
    },
    263: function(t, e, i) {
        "use strict";
        i.r(e);
        i(229),
        i(233);
        var s = i(0)
          , a = i(7)
          , n = {
            components: {},
            props: {
                stubData: Object,
                index: Number
            },
            data: function() {
                var t = this.$prismic.asText(this.stubData.primary.description_1)
                  , e = this.$prismic.asText(this.stubData.primary.description_2);
                return {
                    desc1: t,
                    desc2: e,
                    hasLink: this.$prismic.asText(this.stubData.primary.cta_text) && this.stubData.primary.link.url,
                    type: "" === e ? "half" : "full"
                }
            },
            watch: {},
            created: function() {},
            mounted: function() {
                this.prepareTls()
            },
            beforeDestroy: function() {
                this.textTracker && this.textTracker.destroy(),
                this.ctaTracker && this.ctaTracker.destroy()
            },
            methods: {
                animateIn: function() {},
                track: function() {
                    var t = this;
                    this.textTracker = new s.n(this.$refs.texts,{
                        onlyOnce: !1,
                        offset: 150,
                        onViewportDownIn: function() {
                            t.textTl.restart()
                        },
                        onViewportDownOut: function() {
                            t.textTl.progress(0)
                        },
                        scrollTopGetter: function() {
                            return s.l.caseScrollY
                        }
                    }),
                    this.ctaTracker = new s.n(this.$refs.cta,{
                        onlyOnce: !1,
                        offset: 150,
                        onViewportDownIn: function() {
                            t.ctaTl.restart()
                        },
                        onViewportDownOut: function() {
                            t.ctaTl.progress(0),
                            t.ctaTl.pause()
                        },
                        scrollTopGetter: function() {
                            return s.l.caseScrollY
                        }
                    })
                },
                prepareTls: function() {
                    this.textTl = a.a.timeline({
                        paused: !0
                    }),
                    this.ctaTl = a.a.timeline({
                        paused: !0
                    });
                    var t = this.$refs
                      , e = t.text1
                      , i = t.text2
                      , n = t.cta
                      , o = t.arrow
                      , r = t.ctaText
                      , c = t.underline;
                    if (e) {
                        a.a.set(e, {
                            opacity: 0
                        });
                        var l = new s.j(e,{
                            type: "words"
                        });
                        this.textTl.set(e, {
                            opacity: 1
                        }, 0).set(l.words, {
                            opacity: 0,
                            rotationX: 100,
                            x: -5
                        }, 0).to(l.words, {
                            opacity: 1,
                            duration: 1,
                            stagger: .02,
                            ease: "cubic.out"
                        }, 0).to(l.words, {
                            rotationX: 0,
                            x: 0,
                            y: 0,
                            ease: "cubic.out",
                            stagger: .02
                        }, 0)
                    }
                    if (i) {
                        a.a.set(i, {
                            opacity: 0
                        });
                        var u = new s.j(i,{
                            type: "words"
                        });
                        this.textTl.set(i, {
                            opacity: 1
                        }, 0).set(u.words, {
                            opacity: 0,
                            rotationX: 100,
                            x: -5
                        }, 0).to(u.words, {
                            opacity: 1,
                            duration: 1.4,
                            stagger: .015,
                            ease: "cubic.out"
                        }, .4).to(u.words, {
                            rotationX: 0,
                            x: 0,
                            y: 0,
                            ease: "cubic.out",
                            stagger: .02
                        }, .4)
                    }
                    this.textTl.progress(0),
                    this.hasLink && (a.a.set(n, {
                        opacity: 0
                    }),
                    this.ctaSplit = new s.j(r,{
                        type: "chars"
                    }),
                    this.ctaTl.set(n, {
                        opacity: 1
                    }, 0).set(this.ctaSplit.chars, {
                        opacity: 0
                    }, 0).set(c, {
                        scaleX: 0,
                        transformOrigin: "left bottom"
                    }, 0).set(r, {
                        x: -10
                    }, 0).set(o, {
                        opacity: 0,
                        scaleY: 0,
                        scaleX: 0,
                        transformOrigin: "left",
                        x: -5
                    }, 0).to(o, {
                        opacity: 1,
                        duration: .3,
                        ease: "cubic.out"
                    }, 0).to(o, {
                        x: 0,
                        duration: .6,
                        ease: "cubic.out"
                    }, .2).to(o, {
                        scaleX: 1,
                        duration: .6,
                        ease: "elastic.out(1, 1)"
                    }, .2).to(o, {
                        scaleY: 1,
                        duration: 1,
                        ease: "elastic.out"
                    }, .3).to(r, {
                        x: 0,
                        duration: .7,
                        ease: "elastic.out(.7, .5)"
                    }, .5).to(this.ctaSplit.chars, {
                        opacity: 1,
                        duration: .7,
                        stagger: .01
                    }, .5).to(c, {
                        scaleX: 1,
                        ease: "elastic.out(.5, .5)"
                    }, .5))
                },
                setSize: function() {},
                onMouseEnter: function() {
                    var t = this;
                    if (!(s.b.isMobile && this.ctaTl.progress() > .99)) {
                        this.mouseIn = !0;
                        var e = this.$refs
                          , i = e.arrow
                          , n = e.underline
                          , o = e.ctaText;
                        a.a.killTweensOf([i, n, o]),
                        a.a.to(i, {
                            x: 3,
                            duration: .3,
                            ease: "cubic.out",
                            onComplete: function() {}
                        }),
                        a.a.to(o, {
                            x: 10,
                            duration: .3,
                            ease: "cubic.inOut"
                        }),
                        a.a.to(n, {
                            x: 15,
                            opacity: .2,
                            duration: .3,
                            ease: "cubic.inOut"
                        });
                        !function e(i) {
                            s.a.loopText(t.ctaSplit.chars, i, (function() {
                                t.mouseIn && e(!0)
                            }
                            ))
                        }()
                    }
                },
                onMouseLeave: function() {
                    if (this.mouseIn = !1,
                    !(s.b.isMobile && this.ctaTl.progress() > .99)) {
                        var t = this.$refs
                          , e = t.arrow
                          , i = t.underline
                          , n = t.ctaText;
                        a.a.killTweensOf([e, i, n]),
                        a.a.to(e, {
                            x: 0,
                            duration: .3,
                            ease: "cubic.out"
                        }),
                        a.a.to(n, {
                            x: 0,
                            duration: .2,
                            ease: "cubic.out"
                        }),
                        i && a.a.to(i, {
                            x: 0,
                            scaleY: 1,
                            skewX: 0,
                            opacity: 1,
                            duration: .15,
                            ease: "cubic.out"
                        }),
                        s.a.resetLoopText(this.ctaSplit.chars)
                    }
                }
            }
        }
          , o = (i(254),
        i(38))
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                class: ["case-text", "case-text--" + t.type]
            }, [i("div", {
                staticClass: "case-text__container"
            }, [i("div", {
                ref: "texts",
                staticClass: "case-text__texts"
            }, [t.desc1 ? i("p", {
                ref: "text1",
                staticClass: "case-text__desc case-text__desc--1"
            }, [t._v("\n        " + t._s(t.desc1) + "\n      ")]) : t._e(), t._v(" "), t.desc2 ? i("p", {
                ref: "text2",
                staticClass: "case-text__desc case-text__desc--2"
            }, [t._v("\n        " + t._s(t.desc2) + "\n      ")]) : t._e()]), t._v(" "), t.hasLink ? i("a", {
                ref: "cta",
                staticClass: "case-text__link",
                attrs: {
                    href: t.stubData.primary.link.url,
                    target: "_blank"
                },
                on: {
                    mouseenter: t.onMouseEnter,
                    mouseleave: t.onMouseLeave
                }
            }, [i("svg", {
                ref: "arrow",
                staticStyle: {
                    "enable-background": "new 0 0 267 176.1"
                },
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 267 176.1",
                    "xml:space": "preserve"
                }
            }, [i("path", {
                attrs: {
                    d: "M266,88.1l-11-9.5L165.8,2.1L135.6,21l61.2,52.5H2v29.2h194.8l-61.2,52.5l30.2,18.9L255,97.6L266,88.1z"
                }
            })]), t._v(" "), i("span", {
                ref: "ctaText",
                staticClass: "case-text__cta-text"
            }, [t._v(t._s(t.$prismic.asText(t.stubData.primary.cta_text)))]), t._v(" "), i("span", {
                ref: "underline",
                staticClass: "case-text__underline"
            })]) : t._e()])])
        }
        ), [], !1, null, null, null);
        e.default = r.exports
    },
    264: function(t, e, i) {
        "use strict";
        i.r(e);
        i(229);
        var s = i(0)
          , a = i(7)
          , n = {
            components: {},
            props: {
                itemData: Object,
                itemIndex: Number,
                index: Number
            },
            data: function() {
                var t = !1;
                return this.itemData.video_link && this.itemData.video_link.url && (t = !0),
                {
                    isVideo: t,
                    imageLoaded: !1,
                    isLoaded: !1
                }
            },
            watch: {},
            created: function() {},
            mounted: function() {
                this.prepareTls(),
                s.k.addResize(this.setSize),
                this.setSize(),
                this.$refs.image && this.$refs.image.complete && this.onImageLoad()
            },
            beforeDestroy: function() {
                this.videoTracker && this.videoTracker.destroy(),
                this.imageTracker && this.imageTracker.destroy(),
                s.k.removeResize(this.setSize)
            },
            methods: {
                onImageLoad: function() {
                    this.imageLoaded = !0,
                    this.$refs.image && (this.$refs.image.onload = null)
                },
                prepareTls: function() {
                    this.imageTl = a.a.timeline({
                        paused: !0
                    }),
                    this.imageTl.set(this.$el, {
                        y: s.k.width < 600 ? 0 : 50,
                        skewY: 0,
                        transformOrigin: "top"
                    }).to(this.$el, {
                        y: 0,
                        skewY: 0,
                        duration: 1.4,
                        ease: "cubic.out"
                    }, .1).to(this.$el, {
                        opacity: 1,
                        duration: .3,
                        ease: "linear"
                    }, .1),
                    this.imageTl.progress(0)
                },
                setSize: function() {
                    var t = this.itemData.image.dimensions
                      , e = t.width
                      , i = t.height
                      , s = this.$el.getBoundingClientRect();
                    this.$el.style.height = Math.floor(i / e * s.width) + "px"
                },
                onLoad: function() {
                    var t = this;
                    this.videoNeedsToPlay && this.$refs.video && this.$refs.video.play().then((function() {
                        t.isLoaded = !0
                    }
                    ))
                },
                onClick: function(t) {
                    t.preventDefault()
                },
                track: function() {
                    var t = this;
                    this.videoTracker = new s.n(this.$el,{
                        onlyOnce: !1,
                        onViewportIn: function() {
                            t.$refs.video && (t.$refs.video.play().then((function() {
                                t.isLoaded = !0
                            }
                            )),
                            t.videoNeedsToPlay = !0)
                        },
                        onViewportOut: function() {
                            t.$refs.video && (t.videoNeedsToPlay = !1,
                            t.$refs.video.pause())
                        },
                        scrollTopGetter: function() {
                            return s.l.caseScrollY
                        }
                    }),
                    this.imageTracker = new s.n(this.$el,{
                        onlyOnce: !1,
                        offset: 150,
                        onViewportDownIn: function() {
                            t.imageTl.restart()
                        },
                        onViewportDownOut: function() {
                            t.imageTl.progress(0)
                        },
                        scrollTopGetter: function() {
                            return s.l.caseScrollY
                        }
                    })
                }
            }
        }
          , o = (i(255),
        i(38))
          , r = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                class: ["case-media", t.isVideo ? "case-media--video" : "", {
                    "case-media--image-loaded": t.imageLoaded,
                    "case-media--video-loaded": t.isLoaded
                }],
                on: {
                    click: t.onClick
                }
            }, [i("img", {
                staticClass: "case-media__img preload",
                attrs: {
                    src: t.itemData.image.url.split("?")[0]
                },
                on: {
                    load: t.onImageLoad
                }
            }), t._v(" "), t.isVideo ? i("div", {
                staticClass: "case-media__video"
            }, [i("video", {
                ref: "video",
                attrs: {
                    src: t.itemData.video_link.url,
                    preload: "",
                    loop: "",
                    muted: "",
                    playsinline: "",
                    "webkit-playsinline": ""
                },
                domProps: {
                    muted: !0
                },
                on: {
                    canplaythrough: t.onLoad
                }
            })]) : t._e()])
        }
        ), [], !1, null, null, null);
        e.default = r.exports
    },
    272: function(t, e, i) {},
    278: function(t, e, i) {
        "use strict";
        i(272)
    },
    283: function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i(18)
          , a = (i(60),
        i(15),
        i(233),
        i(0))
          , n = i(45)
          , o = i(7)
          , r = i(232)
          , c = i.n(r)
          , l = i(235)
          , u = i(261)
          , d = i(262)
          , h = i(263)
          , f = i(264);
        c.a.use(l.a);
        var p = {
            components: {
                CaseHero: u.default,
                CaseInfos: d.default,
                CaseText: h.default,
                CaseMedia: f.default
            },
            transition: function(t, e) {
                return {
                    mode: "in-out",
                    enter: function(i, s) {
                        i.style.zIndex = 1,
                        "case" === e.name && "case-id" === t.name && a.c.emit("work-scene:leave", t),
                        s()
                    },
                    beforeLeave: function(t) {},
                    leave: function(e, i) {
                        e.style.zIndex = 0,
                        o.a.killTweensOf(e, {
                            opacity: !0,
                            autoAlpha: !0
                        }),
                        "case-id" === t.name ? a.k.width / a.k.height >= 1.6 ? (o.a.to(e, {
                            autoAlpha: 0,
                            duration: .4,
                            delay: .3
                        }),
                        setTimeout((function() {
                            i()
                        }
                        ), 1100)) : (o.a.to(e, {
                            autoAlpha: 0,
                            duration: .3,
                            ease: "linear"
                        }),
                        setTimeout((function() {
                            i()
                        }
                        ), 300)) : (o.a.to(e, {
                            autoAlpha: 0,
                            duration: .2,
                            ease: "linear"
                        }),
                        setTimeout((function() {
                            i()
                        }
                        ), 300))
                    }
                }
            },
            asyncData: function(t) {
                return Object(s.a)(regeneratorRuntime.mark((function e() {
                    var i, s;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t.$prismic,
                                t.error,
                                i = t.store,
                                e.next = 3,
                                i.dispatch("fetchCMS");
                            case 3:
                                return s = e.sent,
                                e.abrupt("return", s);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            data: function() {
                for (var t, e, i = {}, s = 0, a = this.$store.state.data.work, n = !1, o = 0, r = a.length; o < r; o++) {
                    var c = a[o];
                    if (c.uid === this.$route.params.id) {
                        s = o,
                        i = c,
                        n = !0;
                        break
                    }
                }
                if (!n)
                    for (var l = this.$store.state.data.otherWork, u = 0, d = l.length; u < d; u++) {
                        var h = l[u];
                        if (h.uid === this.$route.params.id) {
                            s = 0,
                            i = h;
                            break
                        }
                    }
                var f = 0;
                (a.length > 1 && (e = a[f = s + 1 < a.length ? s + 1 : 0]),
                a.length > 2) && (t = a[s - 1 >= 0 ? s - 1 : a.length - 1]);
                return {
                    isIn: !1,
                    caseData: i,
                    caseIndex: s,
                    prev: t,
                    nextIndex: f,
                    next: e
                }
            },
            head: function() {
                return {
                    title: "".concat(this.$prismic.asText(this.caseData.title), " | Jantana Hennard - Portfolio")
                }
            },
            watch: {},
            created: function() {
                this.lastScrollTop = 0
            },
            mounted: function() {
                var t = this;
                document.title = "".concat(this.$prismic.asText(this.caseData.title), " | Jantana Hennard - Portfolio"),
                a.l.lastProjectIndex = this.caseIndex,
                this.navState = null,
                this.setSize(),
                a.k.addResize(this.setSize),
                a.i.add(this.tick),
                this.prepareTls(),
                a.g.hiddenPromise.then((function() {
                    o.a.to(t.$refs.spinner, {
                        autoAlpha: 1,
                        duration: 1,
                        delay: .4
                    }),
                    n.a.scenes.change("work").then((function() {
                        var e = !1;
                        a.c.emit("work-scene:changed"),
                        t.$refs.hero.readyPromise().then((function() {
                            o.a.set(t.$el, {
                                opacity: 1
                            }),
                            o.a.killTweensOf(t.$refs.spinner),
                            o.a.to(t.$refs.spinner, {
                                autoAlpha: 0,
                                duration: .3
                            });
                            var i = a.k.width / a.k.height < 1.6;
                            t.animateIn(i),
                            t.$refs.infos.animateIn(i),
                            e && (a.c.emit("work-scene:reset", {
                                lines: t.$el.querySelectorAll(".case-line")
                            }),
                            a.c.emit("work-scene:animateLine", {
                                index: 0
                            })),
                            setTimeout((function() {
                                a.c.emit("work-scene:reset", {
                                    lines: t.$el.querySelectorAll(".case-line")
                                }),
                                e = !0,
                                setTimeout((function() {
                                    a.c.emit("work-scene:animateLine", {
                                        index: 0
                                    })
                                }
                                ), 300)
                            }
                            ), 1e3)
                        }
                        ))
                    }
                    ))
                }
                ))
            },
            beforeDestroy: function() {
                var t = this;
                this.footerTracker && this.footerTracker.destroy(),
                clearInterval(this.interval),
                clearTimeout(this._check),
                this._to && clearTimeout(this._to),
                this._inTo && clearTimeout(this._inTo),
                clearTimeout(this.scrollBarTo),
                a.k.removeResize(this.setSize),
                a.i.remove(this.tick),
                this.footerTl && this.footerTl.kill(),
                setTimeout((function() {
                    t.scrollBar && t.scrollBar.destroy()
                }
                ), 1e3)
            },
            methods: {
                prepareTls: function() {
                    this.footerTl = o.a.timeline({
                        paused: !0
                    }),
                    o.a.set(this.$refs.link, {
                        x: -30,
                        rotationX: 30,
                        opacity: 0
                    }),
                    this.footerTl.add((function() {
                        a.c.emit("work-scene:animateLine", {
                            index: 1
                        })
                    }
                    ), .1).to(this.$refs.link, {
                        opacity: 1,
                        x: 0,
                        rotationX: 0,
                        duration: 1,
                        ease: "cubic.easeOut"
                    }, .45),
                    this.ctaText = new a.j(this.$refs.ctaText,{
                        type: "words, chars",
                        reduceWhiteSpace: !1
                    }).chars
                },
                animateIn: function(t) {
                    var e = this;
                    this.isIn = !0,
                    this._inTo = setTimeout((function() {
                        e.initScrollBar(),
                        e._inTo = setTimeout((function() {
                            e.$refs.mediaText && e.$refs.mediaText.forEach((function(t) {
                                return t.track()
                            }
                            )),
                            e.$refs.medias && e.$refs.medias.forEach((function(t) {
                                return t.track()
                            }
                            )),
                            e.footerTracker = new a.n(e.$refs.line,{
                                onlyOnce: !1,
                                offset: 500,
                                onViewportDownIn: function() {
                                    e.footerTl.restart()
                                },
                                onViewportDownOut: function() {
                                    e.footerTl.progress(0)
                                },
                                scrollTopGetter: function() {
                                    return a.l.caseScrollY
                                }
                            })
                        }
                        ), 300)
                    }
                    ), t ? 1e3 : 1200),
                    this.$refs.hero.animateIn(t)
                },
                initScrollBar: function() {
                    var t, e = this;
                    this.scrollBar && (this.scrollBar.destroy(),
                    t = this.scrollBar.scrollTop),
                    this.scrollBar = c.a.init(this.$refs.wrapper, {
                        thumbMinSize: 100,
                        autoRender: !1,
                        plugins: {
                            disableScroll: {
                                lockDirection: "x"
                            }
                        }
                    }),
                    t && this.scrollBar.setPosition(0, t),
                    this.scrollBar.track.xAxis.element.remove(),
                    a.b.isMobile && this.scrollBar.track.yAxis.element.remove(),
                    a.l.caseScroll = this.scrollBar,
                    clearInterval(this.interval),
                    this.interval = setInterval((function() {
                        isNaN(e.scrollBar._momentum.y) && e.initScrollBar()
                    }
                    ), 200)
                },
                setSize: function() {},
                onTouchMove: function(t) {
                    "android" === a.b.os.name && t.preventDefault()
                },
                onNextEnter: function() {
                    var t = this;
                    if (!(a.b.isMobile && this.footerTl.progress() > .99)) {
                        this.mouseIn = !0;
                        var e = this.$refs
                          , i = e.arrow
                          , s = e.underline
                          , n = e.pName;
                        o.a.killTweensOf([i, s, n]),
                        o.a.to(i, {
                            x: 3,
                            duration: .3,
                            ease: "cubic.out"
                        }),
                        o.a.to(n, {
                            x: 10,
                            duration: .3,
                            ease: "cubic.inOut"
                        }),
                        o.a.to(s, {
                            x: 3,
                            opacity: .2,
                            duration: .3,
                            ease: "cubic.inOut"
                        });
                        !function e(i) {
                            a.a.loopText(t.ctaText, i, (function() {
                                t.mouseIn && e(!0)
                            }
                            ))
                        }()
                    }
                },
                onNextLeave: function() {
                    if (!(a.b.isMobile && this.footerTl.progress() > .99)) {
                        this.mouseIn = !1;
                        var t = this.$refs
                          , e = t.arrow
                          , i = t.underline
                          , s = t.pName;
                        e && (o.a.killTweensOf([e, i, s]),
                        o.a.to(e, {
                            x: 0,
                            duration: .3,
                            ease: "cubic.out"
                        }),
                        o.a.to(s, {
                            x: 0,
                            duration: .2,
                            ease: "cubic.out"
                        }),
                        i && o.a.to(i, {
                            x: 0,
                            scaleY: 1,
                            skewX: 0,
                            opacity: 1,
                            duration: .15,
                            ease: "cubic.out"
                        }),
                        a.a.resetLoopText(this.ctaText))
                    }
                },
                tick: function() {}
            }
        }
          , m = (i(278),
        i(38))
          , v = Object(m.a)(p, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                class: ["case", {
                    "case--is-in": t.isIn
                }],
                on: {
                    touchmove: t.onTouchMove
                }
            }, [i("div", {
                ref: "wrapper",
                staticClass: "case__wrapper"
            }, [i("case-hero", {
                ref: "hero",
                attrs: {
                    "case-data": t.caseData
                }
            }), t._v(" "), i("case-infos", {
                ref: "infos",
                attrs: {
                    "case-data": t.caseData
                }
            }), t._v(" "), i("div", {
                staticClass: "case__stubs"
            }, t._l(t.caseData.body, (function(e, s) {
                return i("div", {
                    key: s,
                    staticClass: "case__stub"
                }, ["description" === e.slice_type ? i("case-text", {
                    ref: "mediaText",
                    refInFor: !0,
                    attrs: {
                        index: s,
                        "stub-data": e
                    }
                }) : t._e(), t._v(" "), "media" === e.slice_type ? i("div", {
                    class: ["case__media-stub", "case__media-stub--" + e.items.length]
                }, t._l(e.items, (function(t, e) {
                    return i("case-media", {
                        key: e,
                        ref: "medias",
                        refInFor: !0,
                        attrs: {
                            "item-index": e,
                            index: s,
                            "item-data": t
                        }
                    })
                }
                )), 1) : t._e()], 1)
            }
            )), 0), t._v(" "), i("div", {
                ref: "footer",
                staticClass: "case__footer"
            }, [i("div", {
                ref: "line",
                staticClass: "case__line case-line"
            }), t._v(" "), i("div", {
                ref: "link",
                staticClass: "case__footer-link",
                on: {
                    mouseenter: t.onNextEnter,
                    mouseleave: t.onNextLeave
                }
            }, [i("NuxtLink", {
                attrs: {
                    to: "/case/" + t.next.uid
                }
            }, [i("svg", {
                ref: "arrow",
                staticStyle: {
                    "enable-background": "new 0 0 267 176.1"
                },
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 267 176.1",
                    "xml:space": "preserve"
                }
            }, [i("path", {
                attrs: {
                    d: "M266,88.1l-11-9.5L165.8,2.1L135.6,21l61.2,52.5H2v29.2h194.8l-61.2,52.5l30.2,18.9L255,97.6L266,88.1z"
                }
            })]), t._v(" "), i("span", [t._v("\n            Next Project:\n            "), i("span", {
                ref: "pName",
                staticClass: "case__footer-next-name"
            }, [i("span", {
                ref: "ctaText"
            }, [t._v(t._s(t.$prismic.asText(t.next.title)))]), t._v(" "), i("div", {
                ref: "underline",
                staticClass: "underline"
            })])])])], 1)])], 1), t._v(" "), i("div", {
                ref: "spinner",
                staticClass: "case__spinner"
            })])
        }
        ), [], !1, null, null, null);
        e.default = v.exports;
        installComponents(v, {
            CaseHero: i(261).default,
            CaseInfos: i(262).default,
            CaseText: i(263).default,
            CaseMedia: i(264).default
        })
    }
}]);
