!function(e) {
    function t(t) {
        for (var n, l, s = t[0], o = t[1], c = t[2], d = 0, m = []; d < s.length; d++)
            l = s[d],
            Object.prototype.hasOwnProperty.call(r, l) && r[l] && m.push(r[l][0]),
            r[l] = 0;
        for (n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        for (u && u(t); m.length; )
            m.shift()();
        return i.push.apply(i, c || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], n = !0, s = 1; s < a.length; s++) {
                var o = a[s];
                0 !== r[o] && (n = !1)
            }
            n && (i.splice(t--, 1),
            e = l(l.s = a[0]))
        }
        return e
    }
    var n = {}
      , r = {
        4: 0
    }
      , i = [];
    function l(t) {
        if (n[t])
            return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, l),
        a.l = !0,
        a.exports
    }
    l.m = e,
    l.c = n,
    l.d = function(e, t, a) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    l.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(e, t) {
        if (1 & t && (e = l(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (l.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                l.d(a, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return a
    }
    ,
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return l.d(t, "a", t),
        t
    }
    ,
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    l.p = "/public/";
    var s = window.webpackJsonp = window.webpackJsonp || []
      , o = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var c = 0; c < s.length; c++)
        t(s[c]);
    var u = o;
    i.push([174, 0]),
    a()
}({
    0: function(e, t) {
        e.exports = React
    },
    11: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n.a
        }),
        a.d(t, "e", function() {
            return i
        }),
        a.d(t, "d", function() {
            return l.a
        }),
        a.d(t, "b", function() {
            return o
        }),
        a.d(t, "c", function() {
            return d
        });
        a(85);
        var n = a(86)
          , r = function(e) {
            for (var t = [], a = (e = e.replace("?", "")).split("&"), n = 0, r = a.length; n < r; n++) {
                var i = a[n].split("=");
                t.push({
                    key: i[0],
                    value: i[1]
                })
            }
            return t
        }
          , i = {
            parseQueryString: r,
            updateQueryString: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var a = window.location.search
                  , n = r(a);
                e.forEach(function(e) {
                    n = n.filter(function(t) {
                        return t.key !== e.key
                    }).concat(e)
                });
                var i = function(e) {
                    var t = "?";
                    return e.forEach(function(e) {
                        0 !== e.key.length && null != e.value && 0 !== e.value.toString().length && ("?" !== t && (t += "&"),
                        t += e.key + "=" + e.value)
                    }),
                    t
                }(n);
                window.history.pushState(null, "", i)
            }
        }
          , l = a(44)
          , s = a(14)
          , o = a.n(s).a.create({
            headers: {
                "Content-Type": "application/json"
            }
        });
        o.interceptors.request.use(function(e) {
            return "undefined" != typeof window && (window.console.info("Axios request:", e.method + " " + e.url, e.params, e.data),
            e.url = c(e.url)),
            e
        });
        var c = function(e) {
            var t = u();
            if (-1 !== e.indexOf("{language}")) {
                if (t)
                    return e.replace("{language}", t);
                window.console.info("currentLanguage not initialized")
            }
            return e
        }
          , u = function() {
            return document.getElementsByTagName("html")[0].getAttribute("lang")
        }
          , d = function(e, t, a) {
            var n;
            return function() {
                var r = this
                  , i = arguments
                  , l = a && !n;
                clearTimeout(n),
                n = setTimeout(function() {
                    n = null,
                    a || e.apply(r, i)
                }, t),
                l && e.apply(r, i)
            }
        }
    },
    12: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return r
        });
        var n = [{
            key: 1,
            name: "mm"
        }, {
            key: 2,
            name: "m"
        }, {
            key: 3,
            name: "in"
        }, {
            key: 4,
            name: "ft"
        }, {
            key: 5,
            name: "yd"
        }, {
            key: 6,
            name: "cm"
        }]
          , r = {
            getArray: function() {
                return n
            }
        }
    },
    165: function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "a", function() {
                return d
            });
            var n, r = document.querySelector(".business-group-header__dropdown__select"), i = document.querySelectorAll("[data-main-menu-item]"), l = document.querySelector("#drawer-toggle"), s = function(e) {
                var t = e.currentTarget;
                t.options[t.selectedIndex].getAttribute("data-target-frame");
                window.location = e.currentTarget.value
            }, o = function() {
                e("body").toggleClass("hide-overflow")
            }, c = function(t) {
                var a = t.currentTarget;
                e(a).hasClass("hover") || (n = window.setTimeout(function() {
                    e(a).addClass("hover")
                }, 200))
            }, u = function() {
                clearTimeout(n),
                e("[data-main-menu-item]").removeClass("hover")
            }, d = {
                init: function() {
                    r && r.addEventListener("change", s),
                    l && l.addEventListener("change", o),
                    i && [].forEach.call(i, function(e) {
                        e.addEventListener("mouseover", c)
                    }),
                    i && [].forEach.call(i, function(e) {
                        e.addEventListener("mouseleave", u)
                    })
                }
            }
        }
        ).call(this, a(5))
    },
    166: function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "a", function() {
                return l
            });
            var n = e(".drawer")
              , r = function(t) {
                var a = e(t.currentTarget).parent();
                e(a).has(".main-menu__sub-navigation").length && (t.preventDefault(),
                e("[data-main-menu-item]").removeClass("item-active").addClass("item-hidden"),
                e(a).addClass("item-active"),
                n.addClass("drawer--active"))
            }
              , i = function(t) {
                t.preventDefault(),
                e("[data-main-menu-item]").removeClass("item-hidden").removeClass("item-active"),
                n.removeClass("drawer--active")
            }
              , l = {
                init: function() {
                    if ("querySelector"in document && "localStorage"in window && "addEventListener"in window) {
                        var e = document.querySelectorAll(".drawer .main-menu__link")
                          , t = document.querySelectorAll(".drawer .main-menu__sub-navigation__back");
                        [].forEach.call(e, function(e) {
                            e.addEventListener("click", r)
                        }),
                        [].forEach.call(t, function(e) {
                            e.addEventListener("click", i)
                        })
                    }
                }
            }
        }
        ).call(this, a(5))
    },
    167: function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "a", function() {
                return i
            });
            var n = e("[data-languages-facelift]")
              , r = function(e) {
                e.preventDefault(),
                n.toggleClass("languages--active")
            }
              , i = {
                init: function() {
                    if ("querySelector"in document && "localStorage"in window && "addEventListener"in window) {
                        var e = document.querySelectorAll(".languages__option__selected");
                        [].forEach.call(e, function(e) {
                            e.addEventListener("click", r)
                        })
                    }
                }
            }
        }
        ).call(this, a(5))
    },
    168: function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "a", function() {
                return i
            });
            var n = a(44)
              , r = function() {
                return e(".contact-page").length > 0
            }
              , i = {
                init: function() {
                    "undefined" != typeof $$epiforms && ($$epiforms(".EPiServerForms").on("formsSubmitted", function(t) {
                        r() && (console.log("A Contact page has been triggered"),
                        n.a.scrollTo(".contact-page__heading__title", 100)),
                        e(".contact-page-quote-request").length > 0 && e(".selection-cart-resultsmessage").html("<p>No Results</p>")
                    }),
                    $$epiforms(".Form__Element.FormSubmitButton").on("click", function(e) {
                        setTimeout(function() {
                            if (r() || "body" !== document.activeElement.id && "submit" !== document.activeElement.type) {
                                var e = document.body.getBoundingClientRect()
                                  , t = document.activeElement.getBoundingClientRect().top - e.top - 130;
                                window.scrollTo(0, t)
                            }
                        }, 100)
                    }))
                }
            }
        }
        ).call(this, a(5))
    },
    169: function(e, t, a) {
        "use strict";
        (function(e) {
            a.d(t, "a", function() {
                return n
            });
            var n = {
                init: function() {
                    var t = e(".EPiServerForms");
                    if (t.length) {
                        var a = t.find('input[type="file"]')
                          , n = t.find("button[data-print]");
                        a.each(function(t) {
                            var n = a[t].accept;
                            "" !== n && e(a[t]).siblings("label").append("<span>(" + n.split(",").join(", ") + ")</span>")
                        }),
                        n.click(function(e) {
                            e.preventDefault(),
                            window.print()
                        }),
                        t.on("formsStartSubmitting", function(e) {
                            t.find(".FormSubmitButton").attr("disabled", "")
                        }),
                        t.on("formsSubmitted", function(e) {
                            t.find(".FormSubmitButton").removeAttr("disabled")
                        })
                    }
                }
            }
        }
        ).call(this, a(5))
    },
    171: function(e, t, a) {
        "use strict";
        (function(e) {
            t.a = {
                init: function() {
                    var t = e("[data-login-widget]")
                      , a = e("[data-login-widget-toggle]");
                    t && a && (a.click(function(e) {
                        e.stopPropagation(),
                        t.toggleClass("visible")
                    }),
                    t.click(function(e) {
                        return e.stopPropagation()
                    }),
                    e(document).on("click", function() {
                        return t.removeClass("visible")
                    }))
                }
            }
        }
        ).call(this, a(5))
    },
    174: function(e, t, a) {
        e.exports = a(394)
    },
    21: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return r
        });
        var n = [{
            key: 1,
            name: "Stainless 300 Series",
            value: .2871
        }, {
            key: 2,
            name: "Stainless 400 Series",
            value: .283
        }, {
            key: 3,
            name: "Aluminum 3003",
            value: .099
        }, {
            key: 4,
            name: "Aluminum 5052",
            value: .097
        }, {
            key: 5,
            name: "Aluminum 6061",
            value: .098
        }, {
            key: 6,
            name: "Aluminum 6063",
            value: .097
        }]
          , r = {
            getDensity: function(e) {
                var t = n.find(function(t) {
                    return t.name === e
                });
                return t ? t.value : 0
            },
            getArray: function() {
                return n
            }
        }
    },
    26: function(e, t, a) {
        "use strict";
        var n = a(0)
          , r = a(21);
        t.a = function(e) {
            return n.createElement("main", null, n.createElement(n.Fragment, null, n.createElement("label", null, "Select Your Metal Type:"), n.createElement("br", null), n.createElement("select", {
                id: "metalType",
                name: "metalType",
                value: e.metalType,
                className: "calculator-theo__dropdown",
                onChange: e.handleMetalTypeChange
            }, r.a.getArray().map(function(e) {
                return n.createElement("option", {
                    key: e.key
                }, e.name)
            }))))
        }
    },
    360: function(e, t, a) {
        (function(t) {
            e.exports = t.Components = a(393)
        }
        ).call(this, a(152))
    },
    393: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, "SearchPage", function() {
            return o
        }),
        a.d(t, "ResultsPagination", function() {
            return c.a
        }),
        a.d(t, "LocationPage", function() {
            return E
        }),
        a.d(t, "Dropdown", function() {
            return y.a
        }),
        a.d(t, "NewsListingPage", function() {
            return N
        }),
        a.d(t, "SelectionCart", function() {
            return T
        }),
        a.d(t, "StockScreen", function() {
            return q
        }),
        a.d(t, "ProductsTable", function() {
            return B
        }),
        a.d(t, "ProductsTableItem", function() {
            return j
        }),
        a.d(t, "Calculators", function() {
            return W.a
        }),
        a.d(t, "CalculatorTheo", function() {
            return G.a
        }),
        a.d(t, "CalculatorCoilOD", function() {
            return H.a
        }),
        a.d(t, "CalculatorCoilLF", function() {
            return z.a
        });
        var n = a(2)
          , r = a(0)
          , i = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleKeyPress = function(e) {
                    "Enter" === e.key && a.handleQueryChange()
                }
                ,
                a.handleQueryChange = a.handleQueryChange.bind(a),
                a.handleKeyPress = a.handleKeyPress.bind(a),
                a.inputRef = r.createRef(),
                a.state = {
                    query: String(a.props.query || "")
                },
                a
            }
            return Object(n.b)(t, e),
            t.prototype.handleQueryChange = function() {
                this.props.doQuickSearch(this.inputRef.current.value)
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.backgroundImage
                  , a = e.searchTranslations;
                return r.createElement("div", {
                    className: "search-box",
                    style: {
                        backgroundImage: "url(" + t + ")"
                    }
                }, r.createElement("h2", {
                    className: "search-box__title"
                }, a.howCanWeHelpYou, "?"), r.createElement("div", {
                    className: "search-box__input-container"
                }, r.createElement("h5", {
                    className: "search-box__text"
                }, a.imLookingFor, ":"), r.createElement("input", {
                    className: "search-box__input",
                    type: "text",
                    placeholder: a.searchSomething.toUpperCase(),
                    id: "searchText",
                    ref: this.inputRef,
                    onKeyPress: this.handleKeyPress,
                    defaultValue: this.state.query
                }), r.createElement("button", {
                    className: "search-box__button",
                    type: "button",
                    onClick: this.handleQueryChange
                }, a.searchButton)))
            }
            ,
            t
        }(r.Component)
          , l = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return Object(n.b)(t, e),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , a = t.results
                  , n = t.itemSearchTrackId
                  , i = t.searchTranslations;
                return a.length ? r.createElement("div", {
                    className: "search-results"
                }, r.createElement("h3", {
                    className: "search-results__title"
                }, i.searchResults, ":"), a.map(function(t, a) {
                    return r.createElement("article", {
                        className: "search-result",
                        key: a
                    }, r.createElement("h4", {
                        className: "search-result__title"
                    }, t.title), r.createElement("p", {
                        className: "search-result__text"
                    }, t.text), r.createElement("a", {
                        className: "search-result__link",
                        href: t.url,
                        onClick: e.props.onClickTrack.bind(e, e.props.query, n, t.hitId, e.props.itemsPaging.page, e.props.ipAddress)
                    }, t.url))
                })) : r.createElement("p", null, i.noResults)
            }
            ,
            t
        }(r.Component)
          , s = a(11)
          , o = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.popStateChanged = function() {
                    var e = window.location.search
                      , t = s.e.parseQueryString(e).find(function(e) {
                        return "page" === e.key
                    });
                    t && t.value !== a.state.itemsPaging.page ? a.onPaginationChanged(t.value) : a.state.itemsPaging.page > 1 && a.onPaginationChanged(a.state.itemsPaging.page - 1)
                }
                ,
                a.onQueryStringChanged = function(e) {
                    s.e.updateQueryString({
                        key: "query",
                        value: e
                    }, {
                        key: "page",
                        value: 1
                    }),
                    a.doSearch(e, 1)
                }
                ,
                a.onPaginationChanged = function(e) {
                    var t = a.state.query;
                    e > 1 && s.e.updateQueryString({
                        key: "page",
                        value: e
                    }),
                    a.doSearch(String(t || ""), e)
                }
                ,
                a.state = {
                    query: a.props.query,
                    results: a.props.results,
                    itemsPaging: a.props.itemsPaging
                },
                a.track = a.track.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.componentDidMount = function() {
                window.onpopstate = this.popStateChanged
            }
            ,
            t.prototype.doSearch = function(e, t) {
                var a = this;
                this.setState({
                    query: e
                }),
                Object(s.b)("/{language}/api/search?query=" + e + "&page=" + t).then(function(e) {
                    a.setState({
                        itemsPaging: e.data.itemsPaging,
                        results: e.data.results
                    })
                }).then(function(e) {
                    return document.querySelector(".search__results").scrollIntoView({
                        behavior: "smooth"
                    })
                })
            }
            ,
            t.prototype.track = function(e, t, a, n, r) {
                s.b.post("/{language}/api/search/track", {
                    query: e,
                    trackId: t,
                    hitId: a,
                    position: n,
                    ipAddress: r
                })
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.backgroundImage
                  , a = e.searchTranslations;
                return r.createElement("section", {
                    className: "search"
                }, r.createElement("header", {
                    className: "search__header"
                }, r.createElement(i, Object(n.a)({}, this.props, {
                    query: this.state.query,
                    doQuickSearch: this.onQueryStringChanged,
                    backgroundImage: t,
                    searchTranslations: a
                }))), r.createElement("section", {
                    className: "search__results"
                }, r.createElement(l, Object(n.a)({}, this.props, {
                    query: this.state.query,
                    results: this.state.results,
                    onClickTrack: this.track
                }))), r.createElement("section", {
                    className: "search__pagination"
                }, r.createElement(s.a, Object(n.a)({}, this.state.itemsPaging, {
                    doPaginationSearch: this.onPaginationChanged
                }))))
            }
            ,
            t
        }(r.Component)
          , c = a(86)
          , u = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleQueryChange = function(e) {
                    var t = e.target.value;
                    a.setState({
                        locationsFilter: Object(n.a)(Object(n.a)({}, a.state.locationsFilter), {
                            address: t
                        })
                    })
                }
                ,
                a.onBusinessGroupSelectionChange = function(e) {
                    var t = e.target.value;
                    a.props.searchByBusinessGroup(t)
                }
                ,
                a.handleSubmit = function(e) {
                    a.props.searchByAddress(a.addressInputRef.current.value)
                }
                ,
                a.renderOption = function(e, t) {
                    return r.createElement("option", {
                        id: e.toString(),
                        value: e,
                        key: e
                    }, t)
                }
                ,
                a.renderOption = a.renderOption.bind(a),
                a.state = {
                    locationsFilter: {
                        address: a.props.locationsFilter.address,
                        businessGroup: a.props.locationsFilter.businessGroup
                    },
                    loaded: !1
                },
                a.addressInputRef = r.createRef(),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.formPreventDefault = function(e) {
                e.preventDefault()
            }
            ,
            t.prototype.onScriptLoad = function() {
                var e = this
                  , t = new window.google.maps.places.Autocomplete(document.getElementById("locations-autocomplete"),{
                    types: ["geocode"]
                });
                t.setFields(["formatted_address"]),
                t.addListener("place_changed", function() {
                    e.props.searchByAddress(e.addressInputRef.current.value)
                }),
                this.setState({
                    loaded: !0
                }),
                document.getElementById("location-filter__button").click()
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                e.locationsFilter !== this.props.locationsFilter && this.setState({
                    locationsFilter: this.props.locationsFilter
                })
            }
            ,
            t.prototype.componentWillReceiveProps = function(e) {
                !this.state.loaded && e.googleMapsScriptLoaded && this.onScriptLoad()
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = this.props.locationsFilter
                  , a = this.props
                  , n = a.backgroundImage
                  , i = a.locationTranslations
                  , l = a.businessGroups
                  , s = a.disableLocationFilter;
                return r.createElement("div", {
                    className: "location-filter",
                    style: {
                        backgroundImage: "url(" + n + ")"
                    }
                }, r.createElement("form", {
                    className: "location-filter__form",
                    onSubmit: this.formPreventDefault
                }, r.createElement("div", {
                    className: "location-filter__form-group"
                }, r.createElement("label", {
                    htmlFor: "businessGroups"
                }, i.searchByBusinessGroup), r.createElement("select", {
                    id: "businessGroups",
                    className: "location-filter__select",
                    onChange: this.onBusinessGroupSelectionChange,
                    value: t.businessGroup || ""
                }, this.renderOption("", i.allBusinessGroups), l.map(function(t) {
                    return e.renderOption(t.value, t.text)
                }))), r.createElement("div", {
                    className: "location-filter__form-group " + (s ? "hidden" : "")
                }, r.createElement("label", {
                    htmlFor: "locations-autocomplete"
                }, i.location), r.createElement("input", {
                    className: "location-filter__input",
                    type: "text",
                    placeholder: i.locationPlaceholder,
                    id: "locations-autocomplete",
                    ref: this.addressInputRef,
                    onChange: this.handleQueryChange,
                    value: this.state.locationsFilter.address
                })), r.createElement("button", {
                    type: "submit",
                    id: "location-filter__button",
                    className: "location-filter__button",
                    onClick: this.handleSubmit
                }, i.filterButton)))
            }
            ,
            t
        }(r.Component)
          , d = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.renderResult = function(e, t) {
                    return r.createElement("li", {
                        className: "location-results__item",
                        key: t
                    }, r.createElement("header", {
                        className: "location-results__item__heading"
                    }, e.heading), r.createElement("ul", {
                        className: "location-results__item__info"
                    }, r.createElement("li", null, e.street), r.createElement("li", null, e.city, ", ", e.region), r.createElement("li", null, e.zipCode), r.createElement("li", null, r.createElement("a", {
                        href: "tel:(" + e.phoneNumber + ")"
                    }, "t: ", e.phoneNumber))))
                }
                ,
                a.renderNoResult = function() {
                    var e = a.props.locationTranslations;
                    return r.createElement("li", {
                        className: "location-results__item"
                    }, r.createElement("header", {
                        className: "location-results__item__heading"
                    }, e.noOfficesFound, "."))
                }
                ,
                a.renderSelectedFilters = function() {
                    var e = a.props.locationsFilter;
                    if (e.address || e.businessGroup)
                        return r.createElement(r.Fragment, null, e.businessGroup ? r.createElement("span", {
                            className: "location-results__selected-filters__item business-group-item"
                        }, r.createElement("span", null, a.getBusinessGroupText(e.businessGroup))) : null, e.address ? r.createElement("span", {
                            className: "location-results__selected-filters__item"
                        }, r.createElement("span", {
                            className: "location-results__selected-filters__item-connector"
                        }, "in"), e.address) : null)
                }
                ,
                a.getBusinessGroupText = function(e) {
                    var t = a.props.businessGroups.find(function(t) {
                        return t.value.toString() === e
                    });
                    return t ? t.text : ""
                }
                ,
                a.renderResult = a.renderResult.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , a = t.offices
                  , n = t.locationTranslations
                  , i = t.locationsFilter;
                return r.createElement("div", {
                    className: "location-results"
                }, r.createElement("header", {
                    className: "location-results__heading"
                }, r.createElement("h2", {
                    className: "location-results__title"
                }, n.currentlyShowing)), r.createElement("div", {
                    className: "location-results__selected-filters"
                }, this.renderSelectedFilters(), i.businessGroup || i.address ? r.createElement("button", {
                    className: "location-results__clear-button",
                    type: "button",
                    onClick: this.props.handleClearFilter
                }, n.clearResults) : null), r.createElement("ul", {
                    className: "location-results__list"
                }, null === a || 0 === a.length ? this.renderNoResult() : a.map(function(t, a) {
                    return e.renderResult(t, a)
                })))
            }
            ,
            t
        }(r.Component)
          , m = a(162)
          , p = a.n(m)
          , h = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.centerMap = function(e) {
                    a.googleMap.panTo(new window.google.maps.LatLng(e.latitude,e.longitude))
                }
                ,
                a.state = {
                    loaded: !1
                },
                a.mapContainer = r.createRef(),
                a.onScriptLoad = a.onScriptLoad.bind(a),
                a.initCluster = a.initCluster.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.onScriptLoad = function() {
                var e = this.props
                  , t = e.offices
                  , a = e.defaultLocation
                  , n = window.document.createElement("div");
                n.className = "location-map__mapcontainer__map";
                var r = {
                    zoomControl: !0,
                    scrollwheel: !1,
                    center: new window.google.maps.LatLng(a.latitude,a.longitude)
                };
                this.googleMap = new window.google.maps.Map(n,r),
                this.mapContainer.current.innerHTML = "";
                var i = this.googleMap.getDiv();
                this.mapContainer.current.appendChild(i),
                this.initCluster(t),
                this.setBounds(t),
                this.setState({
                    loaded: !0
                })
            }
            ,
            t.prototype.componentWillReceiveProps = function(e) {
                this.markers && this.markers.map(function(e) {
                    return e.setMap(null)
                }),
                this.state.loaded && null !== this.props.offices && null !== e.offices && this.props.offices.length !== e.offices.length && (this.initCluster(e.offices),
                this.setBounds(e.offices),
                0 === e.offices.length && (e.selectedLocation ? this.centerMap(e.selectedLocation) : this.centerMap(e.defaultLocation))),
                !this.state.loaded && e.googleMapsScriptLoaded && this.onScriptLoad()
            }
            ,
            t.prototype.initCluster = function(e) {
                var t = this
                  , a = this.googleMap;
                this.markers = e.map(function(e) {
                    var n = new window.google.maps.LatLng(e.latitude,e.longitude)
                      , r = new window.google.maps.Marker({
                        position: n,
                        map: a
                    })
                      , i = new window.google.maps.InfoWindow({
                        content: t.getOfficeDataHtml(e)
                    });
                    return r.addListener("click", function() {
                        a.setCenter(n),
                        a.setZoom(17)
                    }),
                    r.addListener("mouseover", function() {
                        i.open(a, r)
                    }),
                    r.addListener("mouseout", function() {
                        i.close()
                    }),
                    r
                }),
                this.markerCluster && this.markerCluster.clearMarkers(),
                this.markers.length > 0 && (this.markerCluster = new p.a(a,this.markers,{
                    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
                }))
            }
            ,
            t.prototype.getOfficeDataHtml = function(e) {
                return '<div class="location-map__preview">\n         <h3 class="location-map__preview__heading">' + e.heading + '</h3>\n         <ul class="location-map__preview__info">\n            <li>' + e.street + ", " + e.city + "</li>\n            <li>" + e.region + '</li>\n            <li><a href="tel:' + e.phoneNumber + '">' + e.phoneNumber + "</a></li>\n         </ul>\n        </div>"
            }
            ,
            t.prototype.setBounds = function(e) {
                var t = this.getBounds(e);
                this.googleMap.fitBounds(t)
            }
            ,
            t.prototype.getBounds = function(e) {
                var t = new window.google.maps.LatLngBounds;
                e.map(function(e) {
                    var a = new window.google.maps.LatLng(e.latitude,e.longitude);
                    t.extend(a)
                });
                var a = t.getNorthEast().equals(t.getSouthWest()) ? .02 : .025
                  , n = new window.google.maps.LatLng(t.getNorthEast().lat() + a,t.getNorthEast().lng() + a)
                  , r = new window.google.maps.LatLng(t.getNorthEast().lat() - a,t.getNorthEast().lng() - a);
                return t.extend(n),
                t.extend(r),
                t
            }
            ,
            t.prototype.render = function() {
                return r.createElement("div", {
                    ref: this.mapContainer,
                    className: "location-map__mapcontainer"
                })
            }
            ,
            t
        }(r.Component);
        function g(e) {
            return e * Math.PI / 180
        }
        var _ = function(e, t, a) {
            var n = {
                latitude: e,
                longitude: t
            }
              , r = [];
            return a.map(function(e) {
                var t = {};
                t.latitude = e.latitude,
                t.longitude = e.longitude;
                var a = function(e, t) {
                    var a = g(e.longitude)
                      , n = g(e.latitude)
                      , r = g(t.longitude)
                      , i = g(t.latitude)
                      , l = i - n
                      , s = r - a
                      , o = Math.pow(Math.sin(l / 2), 2) + Math.cos(n) * Math.cos(i) * Math.pow(Math.sin(s / 2), 2);
                    return 2 * Math.asin(Math.sqrt(o)) * 6371 * 1e3
                }(n, t)
                  , i = Object.assign({}, e, {
                    distance: a
                });
                r.push(i)
            }),
            r.sort(function(e, t) {
                return e.distance - t.distance
            }),
            r
        }
          , f = a(14)
          , b = a.n(f);
        var v, E = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.promptUserGeolocation = function() {
                    a.props.disableLocationFilter || window.navigator.geolocation.getCurrentPosition(a.onBrowserUserGeolocationSuccess.bind(a), a.onUserGeolocationError.bind(a), {
                        enableHighAccuracy: !1,
                        timeout: 5e3,
                        maximumAge: 0
                    })
                }
                ,
                a.searchByBusinessGroup = function(e) {
                    a.setState({
                        locationsFilter: Object(n.a)(Object(n.a)({}, a.state.locationsFilter), {
                            businessGroup: e
                        })
                    }),
                    a.searchOffices(e, a.state.locationsFilter.address)
                }
                ,
                a.searchByAddress = function(e) {
                    a.setState({
                        locationsFilter: Object(n.a)(Object(n.a)({}, a.state.locationsFilter), {
                            address: e
                        })
                    }),
                    a.searchOffices(a.state.locationsFilter.businessGroup, e)
                }
                ,
                a.searchOffices = function(e, t, n) {
                    void 0 === n && (n = ".location-map"),
                    b.a.post("/api/locations", {
                        businessGroup: null !== e ? e : "",
                        address: null !== t ? t : "",
                        coordinates: {}
                    }).then(function(e) {
                        a.setState({
                            offices: _(e.data.selectedLocation.latitude, e.data.selectedLocation.longitude, e.data.offices),
                            selectedLocation: e.data.selectedLocation
                        }),
                        s.d.scrollTo(n, 300)
                    })
                }
                ,
                a.state = {
                    offices: a.props.offices,
                    selectedLocation: a.props.defaultLocation,
                    errorMessage: null,
                    locationsFilter: {
                        address: String(a.props.locationsFilter.address || ""),
                        businessGroup: a.props.locationsFilter.businessGroup
                    },
                    googleMapsScriptLoaded: !1
                },
                a.onUserGeolocationError = a.onUserGeolocationError.bind(a),
                a.promptUserGeolocation = a.promptUserGeolocation.bind(a),
                a.handleClearFilter = a.handleClearFilter.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.componentDidMount = function() {
                var e = this;
                (this.promptUserGeolocation(),
                window.google) ? this.setState({
                    googleMapsScriptLoaded: !0
                }) : function(e) {
                    var t = document.createElement("script");
                    t.type = "text/javascript",
                    t.src = "https://maps.google.com/maps/api/js?key=" + e + "&libraries=places";
                    var a = document.getElementsByTagName("script")[0];
                    return a.parentNode.insertBefore(t, a),
                    t
                }(this.props.googleMapsKey).addEventListener("load", function() {
                    e.setState({
                        googleMapsScriptLoaded: !0
                    })
                })
            }
            ,
            t.prototype.onBrowserUserGeolocationSuccess = function(e) {
                var t = this
                  , a = e.coords.latitude
                  , r = e.coords.longitude;
                b.a.post("/api/locations/coordinates", {
                    coordinates: {
                        latitude: a,
                        longitude: r
                    }
                }).then(function(e) {
                    t.setState({
                        offices: e.data.offices,
                        selectedLocation: e.data.selectedLocation,
                        locationsFilter: Object(n.a)(Object(n.a)({}, t.state.locationsFilter), {
                            address: e.data.selectedAddress
                        })
                    }),
                    s.d.scrollTo(".location-map", 300)
                })
            }
            ,
            t.prototype.onBrowserUserGeolocationError = function(e) {
                this.onUserGeolocationError(e.message)
            }
            ,
            t.prototype.handleClearFilter = function() {
                this.setState({
                    offices: this.props.offices,
                    locationsFilter: {
                        address: "",
                        businessGroup: ""
                    }
                }),
                this.searchOffices("", "", ".locations-page")
            }
            ,
            t.prototype.onUserGeolocationError = function(e) {
                this.setState({
                    errorMessage: e
                })
            }
            ,
            t.prototype.render = function() {
                var e = this.state
                  , t = e.offices
                  , a = e.selectedLocation
                  , i = e.locationsFilter
                  , l = e.googleMapsScriptLoaded;
                return r.createElement("section", {
                    className: "location"
                }, r.createElement(u, Object(n.a)({}, this.props, {
                    locationsFilter: i,
                    searchByAddress: this.searchByAddress,
                    searchByBusinessGroup: this.searchByBusinessGroup,
                    googleMapsScriptLoaded: l
                })), r.createElement("section", {
                    className: "location-map"
                }, r.createElement(h, Object(n.a)({}, this.props, {
                    offices: t,
                    selectedLocation: a,
                    googleMapsScriptLoaded: l
                }))), r.createElement("section", {
                    className: "locations-page__results"
                }, r.createElement(d, Object(n.a)({}, this.props, {
                    locationsFilter: this.state.locationsFilter,
                    handleClearFilter: this.handleClearFilter,
                    offices: this.state.offices
                }))))
            }
            ,
            t
        }(r.Component), y = a(85), C = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.renderFilter = function(e) {
                    return e.filterItems.map(function(e) {
                        return a.renderOption(e.value, e.label)
                    })
                }
                ,
                a.renderOption = function(e, t) {
                    return r.createElement("option", {
                        id: e,
                        value: e,
                        key: e
                    }, t)
                }
                ,
                a
            }
            return Object(n.b)(t, e),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , a = t.filters
                  , n = t.newsListingTranslations
                  , i = t.onSelectionChange
                  , l = t.filterTitle;
                return r.createElement("div", {
                    className: "news-listing__filter"
                }, r.createElement("h4", {
                    className: "news-listing__filter__title"
                }, l), r.createElement("select", {
                    "aria-label": "Filter by year",
                    className: "news-listing__select",
                    onChange: i,
                    value: this.props.query || ""
                }, this.renderOption("", n.allResults), a.map(function(t) {
                    return e.renderFilter(t)
                })))
            }
            ,
            t
        }(r.Component), k = a(71), N = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.popStateChanged = function() {
                    var e = window.location.search
                      , t = s.e.parseQueryString(e).find(function(e) {
                        return "page" === e.key
                    });
                    t && t.value !== a.state.itemsPaging.page ? a.onPaginationChanged(t.value) : a.state.itemsPaging.page > 1 && a.onPaginationChanged(a.state.itemsPaging.page - 1)
                }
                ,
                a.onSelectionChange = function(e) {
                    var t = e.target.value;
                    s.e.updateQueryString({
                        key: "year",
                        value: t
                    }, {
                        key: "page",
                        value: 1
                    }),
                    a.doSearch(t, 1)
                }
                ,
                a.onPaginationChanged = function(e) {
                    var t = a.state.query;
                    e > 1 && s.e.updateQueryString({
                        key: "page",
                        value: e
                    }),
                    a.doSearch(String(t || ""), e)
                }
                ,
                a.renderTopLinks = function(e) {
                    var t = a.props.topNewsHeading;
                    if (e)
                        return r.createElement("aside", {
                            className: "news-listing__top-news"
                        }, r.createElement("h5", {
                            className: "news-listing__top-news__title"
                        }, t), r.createElement("ul", null, e.map(function(e, t) {
                            var a = e.url
                              , n = e.text;
                            return r.createElement("li", {
                                key: t
                            }, r.createElement("a", {
                                href: a
                            }, n))
                        })))
                }
                ,
                a.state = {
                    query: a.props.query,
                    results: a.props.results,
                    itemsPaging: a.props.itemsPaging,
                    filters: a.props.filters
                },
                a.renderTopLinks = a.renderTopLinks.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.componentDidMount = function() {
                window.onpopstate = this.popStateChanged
            }
            ,
            t.prototype.doSearch = function(e, t) {
                var a = this;
                this.setState({
                    query: e
                });
                var n = window.location.pathname + "/getnewsresults";
                Object(s.b)(n + "?year=" + e + "&page=" + t).then(function(e) {
                    var t = JSON.parse(e.data);
                    a.setState({
                        itemsPaging: t.itemsPaging,
                        results: t.results,
                        filters: t.filters
                    }),
                    s.d.scrollTo("[data-news-listing]")
                })
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.heading
                  , a = e.topNewsLinks;
                return r.createElement("div", {
                    className: "news-listing__wrapper"
                }, r.createElement("div", {
                    "data-news-listing": "",
                    className: "news-listing__content"
                }, r.createElement("header", {
                    className: "news-listing__header"
                }, r.createElement("h1", {
                    className: "news-listing__title"
                }, t)), r.createElement(C, Object(n.a)({}, this.props, {
                    filters: this.state.filters,
                    query: this.state.query,
                    onSelectionChange: this.onSelectionChange
                })), r.createElement(k.a, Object(n.a)({}, this.props, {
                    results: this.state.results
                })), r.createElement("section", {
                    className: "search__pagination"
                }, r.createElement(s.a, Object(n.a)({}, this.state.itemsPaging, {
                    doPaginationSearch: this.onPaginationChanged
                })))), this.renderTopLinks(a))
            }
            ,
            t
        }(r.Component), w = [{
            name: "Aluminum",
            image: "/public/images/badge_aluminum.png"
        }, {
            name: "Carbon",
            image: "/public/images/badge_carbon.png"
        }, {
            name: "Carbon Plate",
            image: "/public/images/badge_carbon_plate.png"
        }, {
            name: "Cargon Steel",
            image: "/public/images/badge_carbon_steel.png"
        }, {
            name: "Fibreglass",
            image: "/public/images/badge_fibreglass.png"
        }, {
            name: "Industrial",
            image: "/public/images/badge_industrial.png"
        }, {
            name: "Plastic",
            image: "/public/images/badge_plastic.png"
        }, {
            name: "Red Metals",
            image: "/public/images/badge_red_metals.png"
        }, {
            name: "Stainless",
            image: "/public/images/badge_stainless_steel.png"
        }, {
            name: "Stainless Steel",
            image: "/public/images/badge_stainless_steel.png"
        }, {
            name: "Steel",
            image: "/public/images/badge_steel.png"
        }, {
            name: "Titanium",
            image: "/public/images/badge_titanium.png"
        }], S = {
            getData: function(e) {
                var t = w.find(function(t) {
                    return t.name === e
                });
                return t ? t.image : "/public/images/image-default.png"
            }
        }, T = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleSubmit = function(e) {
                    e.preventDefault()
                }
                ,
                a.handleQuantityChange = function(e, t) {
                    var n = a.state.results
                      , r = n.indexOf(e);
                    n[r] = e;
                    var i = n[r].code
                      , l = n[r].maxQty
                      , s = t;
                    if (1 === t ? s = n[r].qty + 1 : -1 === t && (s = 0 === n[r].qty ? 0 : n[r].qty - 1),
                    !(s > l || s <= 0)) {
                        n[r].qty = s;
                        try {
                            b.a.get("/api/cart/ChangeQuantity", {
                                params: {
                                    code: i,
                                    qty: s
                                }
                            }).then(function() {
                                a.getCartCount()
                            })
                        } catch (e) {
                            alert(e.message)
                        }
                    }
                }
                ,
                a.handleTextboxChange = function(e) {
                    e.persist();
                    var t = e.target.value;
                    if (Number(t)) {
                        t = parseInt(e.target.value);
                        var n = a.state.results;
                        if (!(t > n[e.target.id].maxQty || t <= 0)) {
                            n[e.target.id].qty = t;
                            var r = n[e.target.id].qty.toString()
                              , i = n[e.target.id].code;
                            try {
                                b.a.get("/api/cart/ChangeQuantity", {
                                    params: {
                                        code: i,
                                        qty: r
                                    }
                                }).then(function() {
                                    a.getCartCount()
                                })
                            } catch (e) {
                                alert(e.message)
                            }
                        }
                    }
                }
                ,
                a.state = {
                    results: a.props.results,
                    heading: a.props.heading,
                    quickView: a.props.quickView,
                    cartCount: "0",
                    catalogId: a.props.catalogId,
                    catalogCartTranslations: a.props.catalogCartTranslations
                },
                a.handleRemoveFromCart = a.handleRemoveFromCart.bind(a),
                a.handleQuantityChange = a.handleQuantityChange.bind(a),
                a.handleTextboxChange = a.handleTextboxChange.bind(a),
                a.getCartCount = a.getCartCount.bind(a),
                a.handleSubmit = a.handleSubmit.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.componentDidMount = function() {
                if ("undefined" != typeof window) {
                    "undefined" != typeof window && window;
                    this.getCartCount(),
                    window.addEventListener("change", this.getCartCount)
                }
            }
            ,
            t.prototype.componentWillUnmount = function() {
                "undefined" != typeof window && window.removeEventListener("change", this.getCartCount)
            }
            ,
            t.prototype.HelperWeightPerPiece = function(e, t, a) {
                if (null !== e && null !== t && null !== a) {
                    var n = parseInt(e) / t * a;
                    return r.createElement("span", null, "Weight: ", n.toFixed(0))
                }
                return ""
            }
            ,
            t.prototype.HelperGetTotalWeight = function(e) {
                var t = 0;
                return e.map(function(e, a) {
                    t += parseInt(e.weight) / e.maxQty * e.qty
                }),
                t.toFixed(0).toString()
            }
            ,
            t.prototype.handleRemoveFromCart = function(e) {
                var t = this
                  , a = this.state.results;
                try {
                    b.a.get("/api/cart/RemoveFromCart", {
                        params: {
                            code: e.code
                        }
                    }).then(function() {
                        var n = a.filter(function(t) {
                            return t.code !== e.code
                        });
                        t.setState({
                            results: n
                        }),
                        t.getCartCount()
                    })
                } catch (e) {
                    alert(e.message)
                }
            }
            ,
            t.prototype.getCartCount = function() {
                var e = this;
                try {
                    b.a.get("/api/cart/GetCartCount").then(function(t) {
                        e.setState({
                            cartCount: t.data
                        })
                    })
                } catch (e) {
                    alert("getcartcount - error")
                }
            }
            ,
            t.prototype.render = function() {
                var e = this.state.quickView
                  , t = this.props.catalogCartTranslations.noResults;
                return "0" === this.state.cartCount ? r.createElement("div", {
                    className: this.getWrapperClass(e)
                }, this.renderCloseButton(e), r.createElement("p", null, t)) : r.createElement("div", {
                    className: this.getWrapperClass(e)
                }, this.renderCloseButton(e), this.renderContent(e), this.renderQuoteButton(e))
            }
            ,
            t.prototype.renderContent = function(e) {
                var t = this
                  , a = this.state.results
                  , n = this.props.catalogCartTranslations
                  , i = n.tagNumber
                  , l = n.quickViewHeading;
                return r.createElement(r.Fragment, null, r.createElement("form", {
                    onSubmit: this.handleSubmit
                }, e ? r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "selection-cart__title"
                }, l), r.createElement("hr", null)) : null, a.map(function(e, a) {
                    return r.createElement("div", {
                        key: a,
                        className: "selection-cart__item"
                    }, r.createElement("div", {
                        className: "selection-cart__item__image"
                    }, r.createElement("img", {
                        className: "stock-page__family-image",
                        src: S.getData(e.family)
                    })), r.createElement("div", {
                        className: "selection-cart__item__detail"
                    }, r.createElement("span", {
                        className: "stock-page__text__bold"
                    }, e.displayName), r.createElement("span", {
                        className: "stock-page__text__point8rem"
                    }, i, ": ", r.createElement("span", {
                        className: "stock-page__text__bold"
                    }, e.code), r.createElement("br", null), t.HelperWeightPerPiece(e.weight, e.maxQty, e.qty))), r.createElement("div", {
                        className: "selection-cart__item__action"
                    }, t.renderQtyMinus(a, e, -1, "minus"), t.renderQuantityInput(a, e), t.renderQtyPlus(a, e, 1, "plus"), t.renderItemDelete(a, e, 0, "times")))
                }), this.renderTotals(a)))
            }
            ,
            t.prototype.renderQuantityInput = function(e, t) {
                var a = this.props.catalogCartTranslations.qty;
                return r.createElement("div", {
                    id: "qtydiv",
                    className: "selection-cart__item__textbox"
                }, r.createElement("span", {
                    className: "stock-page__text__point8rem"
                }, a), r.createElement("br", null), r.createElement("span", {
                    className: "stock-page__text__bold"
                }, r.createElement("input", {
                    className: "selection-cart__item__textbox__noborder",
                    type: "text",
                    id: e.toString(),
                    name: t.code,
                    onChange: this.handleTextboxChange,
                    value: t.qty
                })), r.createElement("span", {
                    className: "stock-page__text__size-point8rem  stock-page__text__gray"
                }, "(of ", t.maxQty, ")"))
            }
            ,
            t.prototype.renderCatalogName = function(e, t) {
                return r.createElement(r.Fragment, null, t ? null : r.createElement("span", {
                    className: "stock-page__text__size-point8rem stock-page__text__bold"
                }, e, r.createElement("br", null)))
            }
            ,
            t.prototype.renderQtyPlus = function(e, t, a, n) {
                var i = "selection-cart__button   selection-cart__button__" + n;
                return r.createElement(r.Fragment, null, t.maxQty === t.qty ? r.createElement("div", {
                    className: "stock-page__text__align-center"
                }, r.createElement("span", {
                    key: e,
                    className: "selection-cart__button   selection-cart__button__plusdim"
                })) : r.createElement("div", {
                    className: "stock-page__text__align-center"
                }, r.createElement("button", {
                    key: e,
                    className: i,
                    onClick: this.handleQuantityChange.bind(this, t, a)
                })))
            }
            ,
            t.prototype.renderQtyMinus = function(e, t, a, n) {
                var i = "selection-cart__button   selection-cart__button__" + n;
                return r.createElement(r.Fragment, null, 1 === t.qty ? r.createElement("div", {
                    className: "stock-page__text__align-center"
                }, r.createElement("span", {
                    key: e,
                    className: "selection-cart__button   selection-cart__button__minusdim"
                })) : r.createElement("div", {
                    className: "stock-page__text__align-center"
                }, r.createElement("button", {
                    key: e,
                    className: i,
                    onClick: this.handleQuantityChange.bind(this, t, a)
                })))
            }
            ,
            t.prototype.renderItemDelete = function(e, t, a, n) {
                var i = "selection-cart__button   selection-cart__button__" + n;
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "stock-page__text__align-center"
                }, r.createElement("button", {
                    key: e,
                    className: i,
                    onClick: this.handleRemoveFromCart.bind(this, t)
                })))
            }
            ,
            t.prototype.renderTotalCount = function(e) {
                var t = this.props.catalogCartTranslations.totalItems;
                return r.createElement(r.Fragment, null, e ? r.createElement("div", {
                    className: "selection-cart__footer"
                }, r.createElement("div", {
                    className: "selection-cart__footer__title"
                }, t, ": "), r.createElement("div", {
                    className: "selection-cart__footer__content"
                }, this.state.cartCount)) : null, ";")
            }
            ,
            t.prototype.renderTotals = function(e) {
                var t = this.props.catalogCartTranslations
                  , a = t.totalItems
                  , n = t.totalWeight;
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "selection-cart__footer"
                }, r.createElement("div", {
                    className: "selection-cart__footer__title"
                }, a, ": "), r.createElement("div", {
                    className: "selection-cart__footer__content"
                }, this.state.cartCount)), r.createElement("div", {
                    className: "selection-cart__footer"
                }, r.createElement("div", {
                    className: "selection-cart__footer__title"
                }, n, ": "), r.createElement("div", {
                    className: "selection-cart__footer__content"
                }, this.HelperGetTotalWeight(e))))
            }
            ,
            t.prototype.renderQuoteButton = function(e) {
                var t = this.props.catalogCartTranslations.sendQuote
                  , a = "/Quote-Request/Index?catId=" + this.state.catalogId;
                return r.createElement(r.Fragment, null, e ? r.createElement("div", {
                    className: "selection-cart__button__popup"
                }, r.createElement("span", {
                    className: "selection-cart__button__popup__container"
                }, r.createElement("a", {
                    href: a
                }, t))) : null)
            }
            ,
            t.prototype.renderCloseButton = function(e) {
                var t = this.props.catalogCartTranslations.close;
                return r.createElement(r.Fragment, null, e ? r.createElement("div", {
                    className: "selection-cart__button__popup"
                }, r.createElement("span", {
                    className: "selection-cart__button__popup__container"
                }, r.createElement("button", {
                    onClick: this.props.onPopupCloseClick.bind(this, this.state.cartCount, this.state)
                }, t))) : null)
            }
            ,
            t.prototype.getWrapperClass = function(e) {
                return e ? "quickview__wrapper" : ""
            }
            ,
            t
        }(r.Component), L = a(163), x = a.n(L), F = function(e) {
            var t = e.facet
              , a = e.minimum
              , i = e.maximum
              , l = e.handleFacetInputFilterClick
              , s = Object(r.useState)({
                min: {
                    value: "",
                    valid: !0
                },
                max: {
                    value: "",
                    valid: !0
                }
            })
              , o = s[0]
              , c = s[1]
              , u = function(e, t) {
                var a;
                c(Object(n.a)(Object(n.a)({}, o), ((a = {})[e] = {
                    value: t.currentTarget.value,
                    valid: !0
                },
                a)))
            }
              , d = function(e) {
                var t;
                return x()("stock-filter__check-textbox", ((t = {})["stock-filter__check-textbox--invalid"] = !o[e].valid,
                t))
            };
            return r.createElement("ul", null, r.createElement("li", {
                className: "stock-filter__query-links__header"
            }, t.displayName), r.createElement("li", {
                className: "stock-filter__query-links__node",
                key: t.name
            }, r.createElement("input", {
                type: "number",
                placeholder: a,
                className: d("min"),
                id: "txtMin" + t.displayName,
                value: o.min.value,
                onChange: u.bind(void 0, "min")
            }), " ", "to", " ", r.createElement("input", {
                type: "number",
                placeholder: i,
                className: d("max"),
                id: "txtMax" + t.name,
                value: o.max.value,
                onChange: u.bind(void 0, "max")
            }), r.createElement("button", {
                key: t.name,
                onClick: function() {
                    var e = Number(o.min.value)
                      , a = Number(o.max.value)
                      , r = !0
                      , i = !0;
                    (isNaN(e) || e < 0 || !isNaN(a) && e > a) && (r = !1),
                    (isNaN(a) || a < 0 || e > a) && (i = !1),
                    r && i && l(t.name + ":" + e + " - " + a),
                    c({
                        min: Object(n.a)(Object(n.a)({}, o.min), {
                            valid: r
                        }),
                        max: Object(n.a)(Object(n.a)({}, o.max), {
                            valid: i
                        })
                    })
                }
            }, r.createElement("img", {
                className: "stock-filter__check-button__image",
                src: "/public/images/check-circle.svg"
            }))))
        }, P = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.styles = {
                    color: "red"
                },
                a.handleFacetInputFilterClick = function(e) {
                    a.props.handleFilterClick("+", e, a.props.facetTermSelections)
                }
                ,
                a.renderRemoveFacetLinks = function(e, t) {
                    return r.createElement(r.Fragment, null, "" !== e.filterfor && null !== e.filterfor ? r.createElement("span", {
                        className: "stock-filter__remove-links__title"
                    }, e.displayName, r.createElement("br", null)) : null, e.links.map(function(e) {
                        if (e.selected)
                            return r.createElement(r.Fragment, {
                                key: e.text
                            }, r.createElement("button", {
                                key: e.text,
                                className: "stock-filter__clear-button",
                                onClick: a.props.handleFilterClick.bind(a, "-", e.label, t)
                            }, r.createElement("span", {
                                className: "stock-filter__clear-button__left"
                            }, e.text), r.createElement("span", {
                                className: "stock-filter__clear-button__right "
                            }, r.createElement("img", {
                                className: "stock-filter__clear-button__right__image",
                                src: "/public/images/times-circle-solid.svg"
                            }))))
                    }))
                }
                ,
                a.renderRemoveFacetInputs = function(e, t) {
                    return r.createElement(r.Fragment, null, "" !== e.filterfor && null !== e.filterfor ? r.createElement(r.Fragment, null, r.createElement("span", {
                        className: "stock-filter__remove-links__title"
                    }, e.displayName, r.createElement("br", null)), r.createElement("button", {
                        key: e.name,
                        className: "stock-filter__clear-button",
                        onClick: a.props.handleFilterClick.bind(a, "-", e.name + ":" + e.filterfor, t)
                    }, r.createElement("span", {
                        className: "stock-filter__clear-button__left"
                    }, a.helperFormatFacetInputText(e.filterfor)), r.createElement("span", {
                        className: "stock-filter__clear-button__right "
                    }, r.createElement("img", {
                        className: "stock-filter__clear-button__right__image",
                        src: "/public/images/times-circle-solid.svg"
                    })))) : null)
                }
                ,
                a.renderFacetLinks = function(e, t) {
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        onClick: a.toggleFacet.bind(a, e),
                        className: a.getFacetButton(e.isExpanded)
                    }, e.displayName), !0 === e.isExpanded ? r.createElement("ul", null, e.links.map(function(n) {
                        if (!n.selected)
                            return r.createElement("li", {
                                className: "stock-filter__query-links__node",
                                key: n.text
                            }, "_family" === e.name.toLowerCase() ? r.createElement(r.Fragment, null, r.createElement("img", {
                                src: S.getData(n.text),
                                width: "11",
                                height: "11"
                            }), " ") : null, r.createElement("button", {
                                className: "stock-filter__filter-button__node",
                                key: n.text,
                                onClick: a.props.handleFilterClick.bind(a, "+", n.label, t)
                            }, n.text), "  (", n.count, ")")
                    })) : null)
                }
                ,
                a.state = {
                    facetTerms: a.props.facetTerms,
                    facetTermSelections: a.props.facetTermSelections,
                    filterHitCount: "",
                    isResultFiltered: !1,
                    FacetExpandedCityName: !1,
                    FacetExpandedFamily: !1
                },
                a.toggleFacet = a.toggleFacet.bind(a),
                a.handleFacetInputFilterClick = a.handleFacetInputFilterClick.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.getFacetButton = function(e) {
                var t = "stock-filter__query-links__group";
                return !0 === e ? t + " stock-page__image__chevronUp_less " : t + " stock-page__image__chevronDown_more "
            }
            ,
            t.prototype.toggleFacet = function(e, t) {
                var a = this.state.facetTerms
                  , n = a.indexOf(e);
                a[n] = e,
                a[n].isExpanded = !e.isExpanded,
                this.setState({
                    facetTerms: a
                })
            }
            ,
            t.prototype.helperFormatFacetInputText = function(e) {
                return e.replace("~", "").replace("~", "").replace(";", "")
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , a = t.facetTerms
                  , n = t.facetTermSelections
                  , i = this.props.filterTranslations
                  , l = i.filters
                  , s = i.dimensions
                  , o = i.matches
                  , c = i.minimum
                  , u = i.maximum;
                return r.createElement(r.Fragment, null, !0 === this.props.isResultFiltered ? r.createElement("div", {
                    className: "stock-filter__header"
                }, r.createElement("div", {
                    className: "stock-filter__header__left"
                }, l), r.createElement("div", {
                    className: "stock-filter__header__right"
                }, r.createElement("button", {
                    onClick: this.props.handleClearFilterClick
                }, r.createElement("span", {
                    className: "stock-filter__clear-all"
                }, r.createElement("img", {
                    className: "stock-filter__clear-all__image",
                    src: "/public/images/times-circle-solid.svg"
                }))))) : null, r.createElement("div", {
                    className: "stock-filter__remove-links"
                }, a.map(function(t) {
                    return "TEXTBOX" === t.filterType ? r.createElement("div", {
                        key: t.name
                    }, e.renderRemoveFacetInputs(t, n)) : r.createElement("div", {
                        key: t.name
                    }, e.renderRemoveFacetLinks(t, n))
                })), r.createElement("div", {
                    className: "stock-filter__match-label"
                }, this.props.filterHitCount, " ", o), r.createElement("div", {
                    className: "stock-filter__query-links__group"
                }, s), r.createElement("div", {
                    className: "col-md-4"
                }, a.map(function(t) {
                    return "TEXTBOX" === t.filterType ? r.createElement("div", {
                        key: t.name
                    }, r.createElement(F, {
                        facet: t,
                        minimum: c,
                        maximum: u,
                        handleFacetInputFilterClick: e.handleFacetInputFilterClick
                    })) : null
                })), r.createElement("div", {
                    className: "col-md-4"
                }, a.map(function(t) {
                    return "FACET" === t.filterType ? r.createElement("div", {
                        key: t.name
                    }, e.renderFacetLinks(t, n)) : null
                })))
            }
            ,
            t
        }(r.Component), O = function(e) {
            var t = e.resultHitItem
              , a = e.resultHitTranslations
              , n = e.handleCustomAddToCart
              , i = Object(r.useState)(!1)
              , l = i[0]
              , s = i[1]
              , o = t._Al
              , c = t._B
              , u = t._C
              , d = t._Ca
              , m = t._Cq
              , p = t._Cr
              , h = t._li
              , g = t._Mn
              , _ = t._Mo
              , f = t._N
              , b = t._Nb
              , v = t._Ni
              , E = t._P
              , y = t._Pb
              , C = t._S
              , k = t._Si
              , N = t._Sn
              , w = t._Ta
              , T = t._Ti
              , L = t._V
              , x = t._Zr
              , F = t._Cu
              , P = t._O
              , O = t._Co
              , I = t._Sb
              , D = t._W
              , V = t.code
              , U = t._Tag
              , q = t._Weight
              , A = t._Family
              , M = t.selected
              , j = t._CityName
              , R = t._FormDetail
              , B = t._CatalogName
              , W = t._MinYieldPoint
              , G = t._YieldShortDesc
              , H = t._ActualLengthNum
              , z = t._ReportingBranch
              , Q = t._OrderedWidth1Num
              , K = t._TensileShortDesc
              , Y = t._ProductDescription
              , X = t._MinTensileStrength
              , $ = t._OrderedThicknessNum
              , J = t._TotalPiecesCountOrNumFeet
              , Z = t._MinElongationPercentage
              , ee = a.tag
              , te = a.form
              , ae = a.width
              , ne = a.length
              , re = a.weight
              , ie = a.yields
              , le = a.tensile
              , se = a.thickness
              , oe = a.addToCart
              , ce = a.inStockPc
              , ue = a.inStockPcs
              , de = a.elongation
              , me = a.addedToCart
              , pe = a.chemistriesAndMechanicals
              , he = "1" === J ? ce : ue
              , ge = function() {
                s(!l)
            }
              , _e = function(e, t) {
                return t && e ? r.createElement("li", {
                    className: "stock-hit__item__details__container"
                }, r.createElement("span", {
                    className: "stock-hit__item__details__container__label"
                }, e), r.createElement("span", {
                    className: "stock-hit__item__details__container__data"
                }, " ", t)) : null
            }
              , fe = function(e, t) {
                return t && e && "0" !== t ? _e(e, t) : null
            }
              , be = function(e, t, a) {
                return t && a && "0" !== t ? r.createElement("li", {
                    className: "stock-hit__item__details__container"
                }, r.createElement("span", {
                    className: "stock-hit__item__details__container__label"
                }, e), r.createElement("span", {
                    className: "stock-hit__item__details__container__data"
                }, t, " ", a)) : null
            };
            return r.createElement("div", {
                className: "stock-hit"
            }, r.createElement("header", {
                className: "stock-hit__header"
            }, r.createElement("div", null, r.createElement("img", {
                className: "stock-page__family-image",
                src: S.getData(t._Family)
            }), r.createElement("span", {
                className: "stock-hit__header__product"
            }, Y)), r.createElement("div", null, r.createElement("span", {
                className: "stock-hit__header__detail"
            }, r.createElement("span", {
                className: "stock-page__image__mapMarker"
            }, j)), r.createElement("span", {
                className: "stock-hit__header__detail"
            }, r.createElement("span", {
                className: "stock-page__image__checkMark"
            }, he.replace("_TOTALPIECES_", J.toString()))))), r.createElement("div", {
                className: "stock-hit__item"
            }, r.createElement("div", {
                className: "stock-hit__item__container"
            }, r.createElement("ul", {
                className: "stock-hit__item__details"
            }, _e(te, R), _e(ee, U), _e(se, $.toString()), _e(ae, Q.toString()), _e(ne, H.toString()), _e(re, q))), r.createElement("div", {
                className: "stock-hit__item__container__addtocart"
            }, M ? r.createElement("div", {
                key: V,
                className: "stock-hit__button__addedtocart"
            }, me) : r.createElement("button", {
                key: V,
                "data-prodcode": V,
                className: "stock-hit__button__addtocart",
                onClick: n.bind(void 0, V, Y, B, z, A, J, "1", q)
            }, oe))), r.createElement(r.Fragment, null, r.createElement("div", {
                className: "stock-hit__button__toggle"
            }, r.createElement("div", {
                id: l ? "less" : "more",
                onClick: ge,
                className: "stock-hit__button__toggle__" + (l ? "less" : "more")
            }, r.createElement("span", {
                className: "stock-page__image__chevron" + (l ? "Up_less" : "Down_more")
            }, pe))), l && r.createElement("div", {
                className: "stock-hit__item__container"
            }, r.createElement("ul", {
                className: "stock-hit__item__details"
            }, Array.from([["C", u], ["Mn", g], ["P", E], ["S", C], ["AL", o], ["Cr", p], ["Cq", m], ["Cu", F], ["O", P], ["Co", O], ["Sb", I], ["W", D], ["Ca", d], ["Mo", _], ["Nb", b], ["Ni", v], ["Si", k], ["Ti", T], ["V", L], ["B", c], ["li", h], ["N", f], ["Pb", y], ["Sn", N], ["Ta", w], ["Zr", x]]).map(function(e) {
                return fe(e[0], e[1])
            }), be(ie, W, G), be(le, X, K), fe(de, Z)))))
        }, I = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleCustomAddToCart = function(e, t, n, r, i, l, o, c) {
                    try {
                        s.b.get("/api/cart/CustomAddToCart", {
                            params: {
                                code: e,
                                name: t,
                                cat: n,
                                rpt: r,
                                fam: i,
                                maxqty: l,
                                qty: o,
                                wgt: c
                            }
                        }).then(function(t) {
                            a.handleGetCartCount(),
                            a.setState({
                                selectionCartProps: t.data
                            });
                            var n = a.props.resultHitItemProps.resultHitItem.find(function(t) {
                                return t.code === e
                            })
                              , r = a.props.resultHitItemProps
                              , i = r.resultHitItem.indexOf(n);
                            r[i] = n,
                            r[i].selected = !0,
                            a.setState({
                                resultHitItemProps: r
                            })
                        })
                    } catch (e) {
                        alert("newAddToCart - error")
                    }
                }
                ,
                a.renderPopup = function(e, t) {
                    return r.createElement(r.Fragment, null, t ? r.createElement(r.Fragment, null, r.createElement("div", {
                        id: "ModalDialog",
                        className: "stock-result__popup-overlay"
                    }, r.createElement("div", {
                        className: "stock-result__popup-window"
                    }, r.createElement(T, {
                        heading: e.heading,
                        quickView: e.quickView,
                        results: e.results,
                        cartCount: "0",
                        catalogId: a.state.catalogId,
                        catalogCartTranslations: e.catalogCartTranslations,
                        onPopupCloseClick: a.handlePopupCloseClick
                    })))) : null)
                }
                ,
                a.renderCartOptions = function(e, t) {
                    return "0" === e.toString() ? null : r.createElement("div", {
                        className: "stock-result__cart-button"
                    }, r.createElement("span", {
                        className: "stock-result__cart-button__container"
                    }, r.createElement("button", {
                        onClick: a.handlePopupToggle
                    }, e, " ", t)))
                }
                ,
                a.state = {
                    catalogId: a.props.catalogId,
                    resultHitItemProps: a.props.resultHitItemProps,
                    selectionCartProps: a.props.selectionCartProps,
                    resultsTranslations: a.props.resultsTranslations,
                    cartCount: a.props.cartCount,
                    popupOpen: a.props.popupOpen
                },
                a.handleClearCartCount = a.handleClearCartCount.bind(a),
                a.handleGetCartCount = a.handleGetCartCount.bind(a),
                a.handleGetCartContents = a.handleGetCartContents.bind(a),
                a.handlePopupToggle = a.handlePopupToggle.bind(a),
                a.handlePopupCloseClick = a.handlePopupCloseClick.bind(a),
                a.handleCustomAddToCart = a.handleCustomAddToCart.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.handlePopupToggle = function() {
                var e = !this.state.popupOpen;
                this.setState({
                    popupOpen: e
                })
            }
            ,
            t.prototype.handlePopupCloseClick = function(e, t) {
                var a = this;
                this.setState({
                    cartCount: e
                }),
                this.setState({
                    selectionCartProps: t
                });
                var n = this.props.resultHitItemProps
                  , r = this.props.resultHitItemProps.resultHitItem;
                r.map(function(e, n) {
                    var i = r.indexOf(e);
                    r[i] = e,
                    r[i].selected = a.ItemAlreadySelected(t, e.code)
                }),
                n.resultHitItem = r,
                this.setState({
                    resultHitItemProps: n
                }),
                this.handlePopupToggle()
            }
            ,
            t.prototype.componentDidMount = function() {
                if ("undefined" != typeof window) {
                    "undefined" != typeof window && window;
                    this.handleGetCartCount(),
                    this.handleGetCartContents(),
                    window.addEventListener("change", this.handleGetCartCount)
                }
            }
            ,
            t.prototype.componentWillUnmount = function() {
                "undefined" != typeof window && window.removeEventListener("change", this.handleGetCartCount)
            }
            ,
            t.prototype.handleGetCartCount = function() {
                var e = this;
                if ("undefined" != typeof window)
                    try {
                        s.b.get("/api/cart/GetCartCount").then(function(t) {
                            e.setState({
                                cartCount: JSON.parse(t.data)
                            }),
                            e.handleGetCartContents()
                        })
                    } catch (e) {
                        alert("getcartcount - error")
                    }
            }
            ,
            t.prototype.handleGetCartContents = function() {
                var e = this;
                if ("undefined" != typeof window)
                    try {
                        s.b.get("/api/cart/GetCartContents").then(function(t) {
                            e.setState({
                                selectionCartProps: t.data
                            })
                        })
                    } catch (e) {
                        alert("getcartcount - error")
                    }
            }
            ,
            t.prototype.handleClearCartCount = function() {
                var e = this;
                try {
                    s.b.get("/api/cart/ClearCart").then(function(t) {
                        e.setState({
                            cartCount: t.data
                        })
                    })
                } catch (e) {
                    alert("setCartCount - error")
                }
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = (this.state.catalogId,
                this.props.resultHitItemProps)
                  , a = this.state.selectionCartProps
                  , n = this.state.cartCount
                  , i = this.state.popupOpen
                  , l = this.state.resultsTranslations.itemsInCart;
                return r.createElement(r.Fragment, null, this.renderCartOptions(n, l), this.renderPopup(a, i), t.resultHitItem.map(function(a) {
                    return r.createElement(r.Fragment, {
                        key: a.code
                    }, r.createElement(O, {
                        resultHitItem: a,
                        resultHitTranslations: t.catalogResultHitTranslations,
                        handleCustomAddToCart: e.handleCustomAddToCart
                    }))
                }))
            }
            ,
            t.prototype.ItemAlreadySelected = function(e, t) {
                return null != e.results.find(function(e) {
                    return e.code === t
                })
            }
            ,
            t
        }(r.Component), D = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleKeyPress = function(e) {
                    "Enter" === e.key && a.handleQueryChange()
                }
                ,
                a.handleClearSearch = function() {
                    a.inputRef.current.value = "",
                    a.props.handleSearch(a.inputRef.current.value)
                }
                ,
                a.renderClearSearch = function(e) {
                    return r.createElement(r.Fragment, null, e ? r.createElement("button", {
                        onClick: a.handleClearSearch
                    }, r.createElement("span", {
                        className: "stock-search__content__clear"
                    }, r.createElement("img", {
                        className: "stock-search__content__clear-icon",
                        height: "20",
                        src: "/public/images/times-circle-solid.svg"
                    }))) : null)
                }
                ,
                a.handleQueryChange = a.handleQueryChange.bind(a),
                a.handleKeyPress = a.handleKeyPress.bind(a),
                a.inputRef = r.createRef(),
                a.state = {
                    searchTerm: a.props.searchTerm
                },
                a
            }
            return Object(n.b)(t, e),
            t.prototype.handleQueryChange = function() {
                this.props.handleSearch(this.inputRef.current.value)
            }
            ,
            t.prototype.render = function() {
                var e = this.props.searchTerm
                  , t = this.props.searchTranslations.hint;
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "stock-search"
                }, r.createElement("div", {
                    className: "stock-search__content"
                }, r.createElement("img", {
                    className: "stock-search__content__icon",
                    height: "20",
                    src: "/public/images/search.svg"
                }), r.createElement("input", {
                    className: "stock-search__content__input\n                                search-box__input",
                    type: "text",
                    placeholder: t,
                    id: "txtSearch",
                    ref: this.inputRef,
                    onKeyPress: this.handleKeyPress,
                    defaultValue: e
                }), this.renderClearSearch(e))))
            }
            ,
            t
        }(r.Component), V = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.maxItemNumbers = 5,
                a.rangeSide = Math.floor(a.maxItemNumbers / 2),
                a.handleClick = a.handleClick.bind(a),
                a.state = {
                    currentPage: a.props.currentPage,
                    filterHitCount: a.props.filterHitCount,
                    pageSize: a.props.pageSize
                },
                a
            }
            return Object(n.b)(t, e),
            t.prototype.handleClick = function(e) {
                var t = Number(e.currentTarget.id);
                this.props.handlePageChanged(t)
            }
            ,
            t.prototype.getNumberOfPages = function(e, t) {
                return Math.ceil(e / t)
            }
            ,
            t.prototype.generatePageNumbers = function(e, t) {
                for (var a = [], n = e; n <= t; n++)
                    a.push(n);
                return a
            }
            ,
            t.prototype.getClosest = function(e, t) {
                var a = 0
                  , n = 0;
                return e < this.maxItemNumbers ? (a = 2,
                n = Math.min(Math.max(this.maxItemNumbers, e + this.rangeSide), t - 1)) : t - e <= this.rangeSide ? (a = t - this.maxItemNumbers + 1,
                n = t - 1) : (a = e - this.rangeSide,
                n = Math.min(e + this.rangeSide, t - 1)),
                this.generatePageNumbers(a, n)
            }
            ,
            t.prototype.renderStartDots = function(e, t) {
                return e <= this.rangeSide + 1 || t <= this.maxItemNumbers ? null : r.createElement("li", {
                    className: "pagination__item",
                    key: "renderFirstDotsItems-dots"
                }, r.createElement("span", {
                    className: "pagination__item__dots"
                }, "..."))
            }
            ,
            t.prototype.renderEndDots = function(e, t) {
                return e > t - this.rangeSide - 1 || t <= this.maxItemNumbers ? null : r.createElement("li", {
                    className: "pagination__item",
                    key: "renderLastDotsItems-dots"
                }, r.createElement("span", {
                    className: "pagination__item__dots"
                }, "..."))
            }
            ,
            t.prototype.renderItem = function(e) {
                var t = this.props.currentPage === e ? " pagination__item__button--is-active" : "";
                return r.createElement("li", {
                    className: "pagination__item",
                    key: e
                }, r.createElement("button", {
                    onClick: this.handleClick,
                    className: "pagination__item__button " + t,
                    id: String(e)
                }, e))
            }
            ,
            t.prototype.renderSimple = function(e, t) {
                var a = this;
                return Array.from({
                    length: t
                }).map(function(e, t) {
                    return a.renderItem(t + 1)
                })
            }
            ,
            t.prototype.renderAdvanced = function(e, t) {
                var a = this
                  , n = this.getClosest(e, t);
                return r.createElement(r.Fragment, null, this.renderItem(1), this.renderStartDots(e, t), n.map(function(e) {
                    return a.renderItem(e)
                }), this.renderEndDots(e, t), this.renderItem(t))
            }
            ,
            t.prototype.renderNavigate = function(e, t) {
                var a = this.props.currentPage;
                if (!(e <= 1 || t && 1 === a || !t && a === e)) {
                    var n = 1
                      , i = t ? "item-arrow--left" : "item-arrow--right"
                      , l = this.props.pagingTranslations
                      , s = l.previous
                      , o = l.next;
                    return n = t ? a > 1 ? a - 1 : 1 : a < e ? a + 1 : e,
                    r.createElement("div", {
                        className: "pagination__item-arrow " + i,
                        id: String(n)
                    }, r.createElement("button", {
                        onClick: this.handleClick,
                        className: "pagination__item-arrow__button",
                        id: String(n)
                    }, r.createElement("span", {
                        className: "pagination__item-arrow__text"
                    }, t ? s : o)))
                }
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.filterHitCount
                  , a = e.pageSize
                  , n = e.currentPage;
                if (t <= 0 || a <= 0)
                    return null;
                var i = this.getNumberOfPages(t, a);
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "pagination"
                }, this.renderNavigate(i, !0), r.createElement("ul", {
                    className: "pagination__list"
                }, i <= this.maxItemNumbers ? this.renderSimple(n, i) : this.renderAdvanced(n, i)), this.renderNavigate(i, !1)))
            }
            ,
            t
        }(r.Component), U = a(44), q = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.DoFilter = function(e, t, n, r, i, l) {
                    var o = a.BuildIsExpandedString(a.state.facetTerms);
                    try {
                        s.b.get("/api/stock/DoFilter", {
                            params: {
                                fltCity: n.fltCity,
                                fltFamily: n.fltFamily,
                                fltForm: n.fltForm,
                                fltGrade: n.fltGrade,
                                fltProduction: n.fltProduction,
                                fltSpecification: n.fltSpecification,
                                fltThickness: n.fltThickness,
                                fltWidth: n.fltWidth,
                                fltLength: n.fltLength,
                                action: e,
                                filterText: t,
                                searchTerm: r || "",
                                currentPage: i,
                                catId: l,
                                strExpanded: o
                            }
                        }).then(function(e) {
                            a.setState({
                                searchTerm: e.data.searchTerm,
                                currentPage: e.data.currentPage,
                                facetTerms: e.data.facetTerms,
                                facetTermSelections: e.data.facetTermSelections,
                                searchResults: e.data.searchResults,
                                catalogId: e.data.catalogId
                            })
                        })
                    } catch (e) {
                        alert("Filter // DoFilter - error")
                    }
                }
                ,
                a.DoFilterClear = function(e, t, n) {
                    var r = a.BuildIsExpandedString(a.state.facetTerms);
                    try {
                        s.b.get("/api/stock/DoFilterClear", {
                            params: {
                                searchTerm: e || "",
                                currentPage: t,
                                catId: n,
                                strExpanded: r
                            }
                        }).then(function(e) {
                            a.setState({
                                searchTerm: e.data.searchTerm,
                                currentPage: e.data.currentPage,
                                facetTerms: e.data.facetTerms,
                                facetTermSelections: e.data.facetTermSelections,
                                searchResults: e.data.searchResults,
                                catalogId: e.data.catalogId
                            })
                        })
                    } catch (e) {
                        alert("Filter // HandleClearFiltersClick - error")
                    }
                }
                ,
                a.DoFilterPaging = function(e, t, n, r, i, l) {
                    var o = a.BuildIsExpandedString(a.state.facetTerms);
                    try {
                        s.b.get("/api/stock/DoFilterPaging", {
                            params: {
                                fltCity: n.fltCity,
                                fltFamily: n.fltFamily,
                                fltForm: n.fltForm,
                                fltGrade: n.fltGrade,
                                fltProduction: n.fltProduction,
                                fltSpecification: n.fltSpecification,
                                fltThickness: n.fltThickness,
                                fltWidth: n.fltWidth,
                                fltLength: n.fltLength,
                                action: e,
                                filterText: t,
                                searchTerm: r || "",
                                currentPage: i,
                                catId: l,
                                strExpanded: o
                            }
                        }).then(function(e) {
                            a.setState({
                                searchTerm: e.data.searchTerm,
                                currentPage: e.data.currentPage,
                                facetTerms: e.data.facetTerms,
                                facetTermSelections: e.data.facetTermSelections,
                                searchResults: e.data.searchResults,
                                catalogId: e.data.catalogId
                            })
                        })
                    } catch (e) {
                        alert("Filter // HandleClearFiltersClick - error")
                    }
                }
                ,
                a.handlePageChanged = function(e) {
                    a.DoFilter("", "", a.state.facetTermSelections, a.state.searchTerm, e, a.state.catalogId),
                    U.a.scrollTo(".stock-filter", 100)
                }
                ,
                a.handleSearch = function(e) {
                    a.DoFilter("", "", a.state.facetTermSelections, e, 1, a.state.catalogId),
                    U.a.scrollTo(".stock-filter", 100)
                }
                ,
                a.handleFilterClick = function(e, t, n) {
                    a.DoFilter(e, t, n, a.state.searchTerm, 1, a.state.catalogId),
                    U.a.scrollTo(".stock-filter", 100)
                }
                ,
                a.handleClearFilterClick = function() {
                    a.DoFilterClear(a.state.searchTerm, 1, a.state.catalogId),
                    U.a.scrollTo(".stock-filter", 100)
                }
                ,
                a.state = {
                    searchResults: a.props.searchResults,
                    facetTerms: a.props.facetTerms,
                    facetTermSelections: a.props.facetTermSelections,
                    searchTerm: a.props.searchTerm,
                    searchTranslations: a.props.catalogSearchTranslations,
                    pagingTranslations: a.props.catalogPagingTranslations,
                    filterTranslations: a.props.catalogFilterTranslations,
                    resultsTranslations: a.props.catalogResultsTranslations,
                    currentPage: a.props.currentPage,
                    totalPages: a.props.totalPages,
                    cartResults: a.props.cartResults,
                    catalogId: a.props.catalogId
                },
                a.handleFilterClick = a.handleFilterClick.bind(a),
                a.handleClearFilterClick = a.handleClearFilterClick.bind(a),
                a.handleSearch = a.handleSearch.bind(a),
                a.handlePageChanged = a.handlePageChanged.bind(a),
                a.DoFilter = a.DoFilter.bind(a),
                a.DoFilterClear = a.DoFilterClear.bind(a),
                a.DoFilterPaging = a.DoFilterPaging.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.BuildIsExpandedString = function(e) {
                var t = "fltFamily:0"
                  , a = "fltForm:0"
                  , n = "fltProduction:0"
                  , r = "fltGrade:0"
                  , i = "fltSpecification:0"
                  , l = "fltCity:0";
                return e.map(function(e) {
                    switch (e.name.toLowerCase()) {
                    case "_family":
                        t = "fltFamily:" + (!0 === e.isExpanded ? "1" : "0");
                    case "_formdetail":
                        a = "fltForm:" + (!0 === e.isExpanded ? "1" : "0");
                    case "_productreporting":
                        n = "fltProduction:" + (!0 === e.isExpanded ? "1" : "0");
                    case "_grade":
                        r = "fltGrade:" + (!0 === e.isExpanded ? "1" : "0");
                    case "_specification":
                        i = "fltSpecification:" + (!0 === e.isExpanded ? "1" : "0");
                    case "_cityname":
                        l = "fltCity:" + (!0 === e.isExpanded ? "1" : "0")
                    }
                }),
                t + "|" + a + "|" + n + "|" + r + "|" + i + "|" + l
            }
            ,
            t.prototype.render = function() {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "stock-page__wrapper"
                }, r.createElement("div", {
                    className: "stock-page__navigation"
                }, r.createElement(D, Object(n.a)({}, this.props, {
                    searchTerm: this.state.searchTerm,
                    searchTranslations: this.state.searchTranslations,
                    handleSearch: this.handleSearch
                })), r.createElement(P, {
                    facetTerms: this.state.facetTerms,
                    filterHitCount: this.state.searchResults.resultHitCount.toString(),
                    isResultFiltered: this.state.searchResults.isResultFiltered,
                    facetTermSelections: this.state.facetTermSelections,
                    filterTranslations: this.state.filterTranslations,
                    handleFilterClick: this.handleFilterClick,
                    handleClearFilterClick: this.handleClearFilterClick
                })), r.createElement("div", {
                    className: "stock-page__content"
                }, r.createElement(I, {
                    catalogId: this.state.catalogId,
                    resultHitItemProps: this.state.searchResults,
                    selectionCartProps: this.state.cartResults,
                    resultsTranslations: this.state.resultsTranslations,
                    cartCount: "0",
                    popupOpen: !1
                }), r.createElement(V, {
                    handlePageChanged: this.handlePageChanged,
                    filterHitCount: this.state.searchResults.resultHitCount,
                    pageSize: 10,
                    currentPage: this.state.currentPage,
                    pagingTranslations: this.state.pagingTranslations
                }))))
            }
            ,
            t
        }(r.Component), A = (a(117),
        a(397)), M = a(164);
        !function(e) {
            e.partNumber = "partNumber",
            e.capacity = "capacity",
            e.category = "category",
            e.diameter = "diameter",
            e.length = "length",
            e.price = "price",
            e.psi = "psi",
            e.weight = "weight",
            e.url = "url"
        }(v || (v = {}));
        var j = function(e) {
            var t = e.translations
              , a = e.productItem
              , n = e.selected
              , i = e.onSelect;
            return r.createElement("article", {
                className: "products-table-item"
            }, r.createElement("header", {
                className: "products-table-item__header"
            }, r.createElement("h2", {
                className: "products-table-item__heading"
            }, a.partNumber), r.createElement("button", {
                onClick: i,
                className: "products-table-item__select-btn " + (n ? "products-table-item__select-btn--selected" : "")
            }, n ? r.createElement(r.Fragment, null, r.createElement("span", {
                className: "products-table-item__select-btn--text-select"
            }, t.selected), r.createElement("span", {
                onClick: i,
                className: "products-table-item__select-btn--text-deselect"
            }, t.deselect)) : t.quoteForm)), r.createElement("div", {
                className: "products-table-item__content"
            }, Object.keys(a).map(function(e, n) {
                return function(e, n) {
                    return e === v.partNumber || e === v.url ? null : r.createElement("div", {
                        key: e + "-" + n,
                        className: "products-table-item__column"
                    }, r.createElement("label", {
                        className: "products-table-item__label"
                    }, t[e]), r.createElement("p", {
                        className: "products-table-item__value"
                    }, a[e] ? a[e] : "-"))
                }(e, n)
            })), r.createElement("a", {
                href: a.url,
                className: "products-table-item__see-more-link"
            }, t.seeMoreDetails, r.createElement("i", {
                className: "products-table-item__see-more-icon icon-chevron-circle-right-regular"
            })))
        }
          , R = function(e) {
            var t = e.colNumber;
            return r.createElement("article", {
                className: "products-table-item products-table-item--skeleton"
            }, r.createElement("header", {
                className: "products-table-item__header"
            }), r.createElement("div", {
                className: "products-table-item__content"
            }, Array.from({
                length: t
            }).map(function(e, t) {
                return r.createElement("div", {
                    key: t,
                    className: "products-table-item__column"
                }, r.createElement("label", {
                    className: "products-table-item__label"
                }), r.createElement("p", {
                    className: "products-table-item__value"
                }))
            })), r.createElement("p", {
                className: "products-table-item__see-more-link"
            }))
        }
          , B = function(e) {
            var t = e.translations
              , a = e.products
              , i = e.maxCount
              , l = e.requestQuoteUrl
              , s = e.pdfExportUrl
              , o = [{
                label: t.partNumber,
                value: v.partNumber
            }, {
                label: t.capacity,
                value: v.capacity
            }, {
                label: t.psi,
                value: v.psi
            }, {
                label: t.diameter,
                value: v.diameter
            }, {
                label: t.length,
                value: v.length
            }]
              , c = [{
                label: t.horizontal,
                value: "horizontal"
            }, {
                label: t.vertical,
                value: "vertical"
            }]
              , u = [{
                label: t.asc,
                value: "asc"
            }, {
                label: t.desc,
                value: "desc"
            }]
              , d = Object(r.useState)(a)
              , m = d[0]
              , p = d[1]
              , h = Object(r.useState)([])
              , g = h[0]
              , _ = h[1]
              , f = Object(r.useState)("")
              , E = f[0]
              , y = f[1]
              , C = Object(r.useState)(i)
              , k = C[0]
              , N = C[1]
              , w = Object(r.useState)(!1)
              , S = w[0]
              , T = w[1]
              , L = Object(r.useState)(!1)
              , x = L[0]
              , F = L[1]
              , P = Object(r.useState)({
                searchValue: "",
                orientation: "",
                sort: "",
                order: ""
            })
              , O = P[0]
              , I = P[1]
              , D = Object(r.useState)(!1)
              , V = D[0]
              , U = D[1]
              , q = Object(r.useRef)(null)
              , B = Object(A.a)(function() {
                var e = document.querySelector("body > header.header").clientHeight;
                q.current.style.top = e + "px"
            }, 200)[0];
            Object(r.useEffect)(function() {
                return window.onload = B,
                window.addEventListener("resize", B),
                function() {
                    window.onload = null,
                    window.removeEventListener("resize", B)
                }
            }, []);
            var W = Object(A.a)(function() {
                var e = O.searchValue ? a.filter(function(e) {
                    for (var t = 0, a = Object.keys(e); t < a.length; t++) {
                        var n = a[t];
                        if (e[n] && e[n].toString().toLowerCase().includes(O.searchValue.toLowerCase()))
                            return !0
                    }
                    return !1
                }) : a;
                O.orientation && (e = e.filter(function(e) {
                    return O.orientation === e.category.toLowerCase()
                })),
                O.sort && (e = e.sort(function(e, t) {
                    var a = O.sort
                      , n = parseInt(e[a], 10) ? parseInt(e[a], 10) : e[a]
                      , r = parseInt(t[a], 10) ? parseInt(t[a], 10) : t[a];
                    return n > r ? 1 : n < r ? -1 : 0
                }),
                "desc" === O.order && (e = e.reverse())),
                p(Object(n.c)(e)),
                _(Object(n.c)(e.slice(0, k))),
                F(!1)
            }, 500)[0]
              , G = Object(r.useRef)(null)
              , H = Object(M.a)({
                threshold: 0
            })
              , z = H[0]
              , Q = H[1];
            Object(r.useEffect)(function() {
                Q || T(!1)
            }, [Q]),
            Object(r.useEffect)(function() {
                a && (F(!0),
                W())
            }, [O, a]),
            Object(r.useEffect)(function() {
                a && W()
            }, [k]),
            Object(r.useEffect)(function() {
                if (G.current && S) {
                    var e = G.current.getBoundingClientRect().top;
                    e > 90 && window.scrollTo({
                        top: window.scrollY + e - 90,
                        behavior: "smooth"
                    })
                }
            }, [S]);
            var K = function(e, t) {
                var a, r = t.currentTarget ? t.currentTarget.value : t;
                I(Object(n.a)(Object(n.a)({}, O), ((a = {
                    order: O.sort ? O.order ? O.order : "asc" : ""
                })[e] = r,
                a)))
            }
              , Y = function(e) {
                y(e === E ? null : e)
            }
              , X = function() {
                T(!S)
            }
              , $ = function(e) {
                var a = e.searchProp
                  , n = e.label
                  , i = e.options
                  , l = e.placeholder
                  , s = e.selectableDefaultValue
                  , o = void 0 === s || s
                  , c = e.disabled
                  , u = void 0 !== c && c
                  , d = "select-" + function(e) {
                    return e.split(" ").join("").toLowerCase()
                }(n)
                  , m = l || t.select;
                return r.createElement("div", {
                    className: "products-table__sort-item"
                }, r.createElement("label", {
                    htmlFor: d,
                    className: "products-table__sort-label"
                }, n), r.createElement("select", {
                    disabled: u,
                    name: n,
                    id: d,
                    value: O[a] ? O[a] : "",
                    className: "products-table__sort-select",
                    onChange: K.bind(void 0, a)
                }, r.createElement("option", {
                    disabled: !u && !o,
                    key: "0-0",
                    value: ""
                }, m), i.map(function(e, t) {
                    return r.createElement("option", {
                        key: t + "-" + e.value,
                        value: e.value
                    }, e.label)
                })))
            }
              , J = function() {
                return r.createElement("div", {
                    className: "products-table__box products-table__box--quote-form"
                }, r.createElement("span", {
                    className: "products-table__quote-form-text"
                }, E || t.noItemsSelected, E && r.createElement("i", {
                    onClick: Y.bind(void 0, ""),
                    className: "icon-cancel-circled products-table__clear-selected-part"
                })), r.createElement("a", {
                    href: l + (E ? "?partNumber=" + E : ""),
                    className: "products-table__quote-form-btn"
                }, t.requestQuoteForm))
            }
              , Z = function() {
                U(!0),
                b()({
                    url: s,
                    method: "GET",
                    responseType: "blob"
                }).then(function(e) {
                    if (U(!1),
                    window.navigator && window.navigator.msSaveOrOpenBlob)
                        window.navigator.msSaveOrOpenBlob(e.data, "SPVGexport.pdf");
                    else {
                        var t = window.URL.createObjectURL(e.data)
                          , a = document.createElement("A");
                        a.href = t,
                        a.download = "SPVGexport.pdf",
                        a.target = "_blank",
                        document.body.appendChild(a),
                        a.click(),
                        document.body.removeChild(a)
                    }
                }, function(e) {
                    throw U(!1),
                    new Error(e)
                })
            };
            return r.createElement("section", {
                className: "products-table",
                id: "products-table"
            }, r.createElement(r.Fragment, null, r.createElement("div", {
                ref: q,
                className: "products-table__filters--desktop products-table__filters--sticky"
            }, r.createElement("div", {
                className: "products-table__box products-table__box--search"
            }, r.createElement("div", {
                className: "products-table__search"
            }, r.createElement("div", {
                className: "products-table__search-input"
            }, r.createElement("i", {
                className: "icon-search products-table__search-icon--desktop"
            }), r.createElement("input", {
                type: "text",
                placeholder: t.searchPlaceholder,
                value: O.searchValue,
                onChange: K.bind(void 0, "searchValue")
            }), O.searchValue && r.createElement("i", {
                onClick: K.bind(void 0, "searchValue", ""),
                className: "icon-cancel-circled products-table__clear-search-input"
            })))), s && r.createElement("div", {
                className: "products-table__box products-table__box--download"
            }, r.createElement("span", {
                className: "products-table__download-text"
            }, t.downloadAll), r.createElement("button", {
                onClick: Z,
                className: "products-table__download-btn"
            }, V ? r.createElement("i", {
                className: "icon-spinner anim-rotate"
            }) : "PDF")), J()), r.createElement("div", {
                className: "products-table__filters--desktop"
            }, r.createElement("div", {
                className: "products-table__box products-table__box--sort"
            }, $({
                searchProp: "orientation",
                label: t.orientation,
                options: c
            }), $({
                searchProp: "sort",
                label: t.sortBy,
                options: o
            }), $({
                searchProp: "order",
                label: t.orderBy,
                options: u,
                disabled: !O.sort,
                selectableDefaultValue: !1
            })))), function() {
                var e = function(e) {
                    var a = e.heading
                      , n = e.values
                      , i = e.activeValue
                      , l = e.disabled
                      , s = void 0 !== l && l
                      , o = e.disabledNoneValue
                      , c = void 0 !== o && o
                      , u = e.paramKey;
                    return r.createElement("div", {
                        className: "products-table__filter products-table__filter--order"
                    }, r.createElement("h5", {
                        className: "products-table__filter-heading"
                    }, a), r.createElement("ul", {
                        className: "products-table__filter-list"
                    }, r.createElement("li", {
                        key: 0,
                        className: "products-table__filter-item " + (c ? "products-table__filter-item--disabled" : ""),
                        onClick: K.bind(void 0, u, "")
                    }, i ? r.createElement("i", {
                        className: "icon-circle-empty"
                    }) : r.createElement("i", {
                        className: "icon-dot-circled"
                    }), t.none), n.map(function(e, t) {
                        return r.createElement("li", {
                            key: t,
                            className: "products-table__filter-item " + (s ? "products-table__filter-item--disabled" : ""),
                            onClick: K.bind(void 0, u, e.value)
                        }, i === e.value ? r.createElement("i", {
                            className: "icon-dot-circled"
                        }) : r.createElement("i", {
                            className: "icon-circle-empty"
                        }), e.label)
                    })))
                };
                return r.createElement(r.Fragment, null, r.createElement("section", {
                    ref: z,
                    className: "products-table__filters--mobile " + (S ? "products-table__filters--expanded" : "")
                }, r.createElement("div", {
                    ref: G
                }, J()), r.createElement("h3", {
                    onClick: X,
                    className: "products-table__filters-heading"
                }, t.filtersAndSearch, r.createElement("i", {
                    className: "products-table__expand-icon icon-chevron-circle-right-regular"
                })), r.createElement("div", {
                    className: "products-table__filters-container"
                }, e({
                    heading: t.orientation,
                    values: c,
                    activeValue: O.orientation,
                    paramKey: "orientation"
                }), e({
                    heading: t.sortBy,
                    values: o,
                    activeValue: O.sort,
                    paramKey: "sort"
                }), e({
                    heading: t.orderBy,
                    values: u,
                    activeValue: O.order,
                    disabled: !O.sort,
                    disabledNoneValue: !!O.sort,
                    paramKey: "order"
                }), r.createElement("div", {
                    className: "products-table__search--mobile"
                }, r.createElement("div", {
                    className: "products-table__search-input--mobile"
                }, r.createElement("input", {
                    type: "text",
                    value: O.searchValue,
                    placeholder: t.searchPlaceholder,
                    onChange: K.bind(void 0, "searchValue")
                }), O.searchValue && r.createElement("i", {
                    onClick: K.bind(void 0, "searchValue", ""),
                    className: "icon-cancel-circled products-table__clear-search-input"
                })), r.createElement("i", {
                    className: "icon-search products-table__search-icon--mobile"
                })), r.createElement("button", {
                    onClick: X,
                    className: "products-table__filters-btn"
                }, t.go), r.createElement("span", {
                    className: "products-table__close-filters",
                    onClick: X
                }, t.closeFilters))))
            }(), r.createElement("div", {
                className: "products-table__content"
            }, r.createElement("ul", {
                className: "products-table__list"
            }, x && r.createElement("li", {
                className: "products-table__list-item"
            }, r.createElement(R, {
                colNumber: 7
            })), !x && g.map(function(e, a) {
                return r.createElement("li", {
                    key: "list-item-" + a + "-" + e.partNumber,
                    className: "products-table__list-item"
                }, r.createElement(j, {
                    selected: e.partNumber === E,
                    onSelect: Y.bind(void 0, e.partNumber),
                    productItem: e,
                    translations: t
                }))
            })), !g.length && r.createElement("p", {
                className: "products-table__no-products-text"
            }, t.noProducts), m.length > g.length && r.createElement("button", {
                className: "products-table__load-more",
                onClick: function() {
                    N(k + i)
                }
            }, t.loadMore)))
        }
          , W = a(57)
          , G = a(43)
          , H = a(41)
          , z = a(42)
    },
    394: function(e, t, a) {
        "use strict";
        a.r(t);
        a(118);
        var n, r, i = a(11), l = "product-specifications__categories__list__item--active", s = "product-specifications__table", o = document.querySelectorAll(".product-specifications__categories__list__item"), c = document.querySelector("." + l), u = document.querySelectorAll("." + s), d = function(e) {
            [].forEach.call(u, function(t) {
                e.getAttribute("data-table-id") !== t.getAttribute("data-table-id") && t.classList.add("product-specifications__table--hidden")
            })
        }, m = function(e) {
            var t = e.currentTarget
              , a = t.getAttribute("data-table-id");
            [].forEach.call(o, function(e) {
                e.classList.contains(l) && e.classList.remove(l)
            }),
            t.classList.add(l);
            var n = document.querySelector("." + s + "[data-table-id = '" + a + "']");
            d(t),
            n.classList.remove("product-specifications__table--hidden"),
            i.d.scrollTo("[data-product-specifications]")
        }, p = function() {
            o.length > 0 && (d(c),
            [].forEach.call(o, function(e) {
                e.addEventListener("click", m)
            }))
        }, h = function(e) {
            var t = e.currentTarget.parentElement.querySelector(".employee__text-box")
              , a = e.currentTarget
              , n = t.querySelector(".employee__text-box__intro")
              , r = t.querySelector(".employee__text-box__full");
            t.classList.contains("text-box--expanded") ? (t.classList.remove("text-box--expanded"),
            a.innerText = a.getAttribute("data-read-more-text"),
            n.style.display = "block",
            r.style.display = "none") : (t.classList.add("text-box--expanded"),
            a.innerText = a.getAttribute("data-read-less-text"),
            n.style.display = "none",
            r.style.display = "block")
        }, g = function() {
            if ("querySelector"in document && "localStorage"in window && "addEventListener"in window) {
                var e = document.querySelectorAll(".employee__toggle-text");
                [].forEach.call(e, function(e) {
                    e.addEventListener("click", h)
                })
            }
        }, _ = a(165), f = a(166), b = a(167), v = document.querySelectorAll("[data-content-recommendations]"), E = function() {
            v.length > 0 && [].forEach.call(v, function(e) {
                var t = e.getAttribute("data-recommendations-request");
                t && function(e, t) {
                    var a = Object.keys(t).map(function(e) {
                        return e + "=" + t[e]
                    }).join("&");
                    "fetch"in window && window.fetch("/ContentRecommendationsBlock/RenderRecommendations?" + a).then(function(t) {
                        t.text().then(function(t) {
                            !function(e, t) {
                                e.innerHTML = t
                            }(e, t)
                        })
                    })
                }(e, JSON.parse(t))
            })
        }, y = a(2), C = [], k = function(e) {
            (C = Array.from(e).map(function(e, t) {
                var a = e.offsetWidth
                  , n = e.offsetHeight;
                return C[t] ? Object(y.a)(Object(y.a)({}, C[t]), {
                    outdated: C[t].width < a,
                    width: C[t].width < a ? a : C[t].width,
                    height: C[t].height < n ? n : C[t].height
                }) : {
                    el: e,
                    width: e.offsetWidth,
                    outdated: !0,
                    height: e.offsetHeight,
                    src: e.dataset.contentCardBannerImageSrc
                }
            })).forEach(function(e, t) {
                var a = e.el
                  , n = (e.width,
                e.height,
                e.src);
                e.outdated && (a.style.backgroundImage = "url(" + n + ")",
                C[t].outdated = !1)
            })
        }, N = function() {
            var e = document.querySelectorAll("[data-content-card-banner-image-src]")
              , t = Array.from(e).filter(function(e) {
                return e.dataset.contentCardBannerImageSrc
            });
            t.length && (k(t),
            window.addEventListener("resize", function(e, t, a) {
                var n;
                return void 0 === a && (a = !1),
                function() {
                    var r = this
                      , i = arguments
                      , l = a && !n;
                    clearTimeout(n),
                    n = setTimeout(function() {
                        n = null,
                        a || e.apply(r, i)
                    }, t),
                    l && e.apply(r, i)
                }
            }(function() {
                k(t)
            }, 1e3)))
        }, w = a(72), S = a(14), T = a.n(S), L = document.querySelectorAll("[data-track-click]"), x = document.querySelector("[data-track-page-view]"), F = function(e) {
            var t = e.currentTarget;
            if (t) {
                var a = t.getAttribute("data-track-event")
                  , n = t.getAttribute("data-track-section")
                  , r = x.getAttribute("data-page-language");
                T.a.post("/api/tracking/track-event", {
                    event: a,
                    pageUrl: window.location.href,
                    pageLanguage: r,
                    payload: {
                        section: n,
                        targetUrl: t.href,
                        targetName: t.text.trim()
                    }
                })
            }
        }, P = function() {
            L && [].forEach.call(L, function(e) {
                e.addEventListener("click", F)
            }),
            x && function() {
                var e = x.getAttribute("data-page-id")
                  , t = x.getAttribute("data-page-language");
                T.a.post("/api/tracking/track-page-view", {
                    event: event,
                    pageUrl: window.location.href,
                    pageId: e,
                    pageLanguage: t
                })
            }()
        }, O = a(168), I = document.querySelectorAll("[data-quick-search-form]"), D = function(e) {
            e.preventDefault();
            var t = e.currentTarget
              , a = t.querySelector("[data-quick-search-input]");
            return window.location.href = t.getAttribute("action") + "?query=" + a.value,
            !1
        }, V = function(e) {
            var t = e.currentTarget
              , a = t.querySelector("[data-quick-search-input]");
            t.querySelector("[data-quick-search-button]").removeAttribute("disabled"),
            a.focus()
        }, U = function() {
            I && [].forEach.call(I, function(e) {
                e.addEventListener("submit", D),
                e.addEventListener("mouseover", V)
            })
        }, q = a(169), A = a(170), M = function() {
            var e = document.querySelector("[data-drag-item]")
              , t = document.querySelector("[data-drag-item-container]");
            if (e && t) {
                var a, n, r, l, s = !1, o = 0, c = 0, u = function(t) {
                    "touchstart" === t.type ? (r = t.touches[0].clientX - o,
                    l = t.touches[0].clientY - c) : (r = t.clientX - o,
                    l = t.clientY - c),
                    t.target === e && (s = !0)
                }, d = function(e) {
                    r = a,
                    l = n,
                    s = !1
                }, m = function(a, n, r) {
                    o = a,
                    c = n,
                    r.style.transform = "translate3d(" + a + "px, " + n + "px, 0)";
                    var i = t.getBoundingClientRect()
                      , l = e.getBoundingClientRect()
                      , s = l.top - i.top
                      , u = l.left - i.left
                      , d = s / (t.clientHeight / 100)
                      , m = u / (t.clientWidth / 100);
                    document.querySelector("[data-copy-placement]").innerHTML = d.toFixed(0) + "x" + m.toFixed(0)
                };
                new A.ResizeObserver(Object(i.c)(function() {
                    var a = e.dataset.dragItem.split("x")
                      , n = a[0]
                      , r = a[1]
                      , i = t.getBoundingClientRect()
                      , l = i.width
                      , s = i.height
                      , o = e.getBoundingClientRect()
                      , c = r ? l / 100 * parseInt(r, 10) : l / 2 - o.width / 2
                      , u = n ? s / 100 * parseInt(n, 10) : s / 2 - o.height / 2;
                    m(c, u, e)
                }, 500, !1)).observe(t);
                var p = function(t) {
                    s && (t.preventDefault(),
                    "touchmove" === t.type ? (a = t.touches[0].clientX,
                    n = t.touches[0].clientY) : (a = t.clientX - r,
                    n = t.clientY - l),
                    o = a,
                    c = n,
                    m(a, n, e))
                };
                t.addEventListener("touchstart", u, !1),
                t.addEventListener("touchend", d, !1),
                t.addEventListener("touchmove", p, !1),
                t.addEventListener("mousedown", u, !1),
                t.addEventListener("mouseup", d, !1),
                t.addEventListener("mousemove", p, !1)
            }
        }, j = a(5), R = function() {
            var e = j("[data-banner-content]");
            if (e.length) {
                var t = e.data().bannerContent.split("x")
                  , a = t[0]
                  , n = t[1];
                e.css({
                    top: a + "%",
                    left: n + "%"
                })
            }
        }, B = document.querySelector(".dropdown-country-select"), W = function(e) {
            var t = e.currentTarget
              , a = t.options[t.selectedIndex];
            T()("/api/country/states?countryCode=" + a.value).then(function(e) {
                var t = e.data;
                if (n.selectedIndex = 0,
                n.disabled = !t.length,
                n.options.length)
                    for (; n.options.length > 1; )
                        n.remove(n.options.length - 1);
                for (var a = 0; a < t.length; a++) {
                    var r = t[a]
                      , i = document.createElement("option");
                    i.value = r.abbreviation,
                    i.text = r.name,
                    n.add(i)
                }
            }, function(e) {
                console.error(e)
            })
        }, G = function() {
            B && (r = B.getAttribute("data-target-state"),
            n = document.getElementById(r),
            B.addEventListener("change", W),
            n.disabled = 1 === n.options.length)
        }, H = a(171), z = "timeline__item--current", Q = "timeline__dot--current", K = document.querySelector(".timeline"), Y = document.querySelector(".timeline__list"), X = document.querySelectorAll(".timeline__item"), $ = document.querySelector(".timeline__button--prev"), J = document.querySelector(".timeline__button--next"), Z = document.querySelector(".timeline__button--view-more"), ee = Array.from(X), te = function(e, t) {
            e.classList.remove(z),
            t.classList.add(z)
        }, ae = function(e, t) {
            e.classList.remove(Q),
            t.classList.add(Q)
        }, ne = function(e) {
            0 === e ? ($.classList.add("disabled"),
            J.classList.remove("disabled")) : e === ee.length - 1 ? ($.classList.remove("disabled"),
            J.classList.add("disabled")) : ($.classList.remove("disabled"),
            J.classList.remove("disabled"))
        }, re = function() {
            null !== Z && Z.addEventListener("click", function(e) {
                K.classList.toggle("timeline--show")
            }),
            null !== J && J.addEventListener("click", function(e) {
                var t = Y.querySelector("." + z)
                  , a = t.nextElementSibling
                  , n = document.querySelector("." + Q)
                  , r = n.nextElementSibling
                  , i = ee.findIndex(function(e) {
                    return e === a
                });
                te(t, a),
                ae(n, r),
                ne(i)
            }),
            null !== $ && $.addEventListener("click", function(e) {
                var t = Y.querySelector("." + z)
                  , a = t.previousElementSibling
                  , n = document.querySelector("." + Q)
                  , r = n.previousElementSibling
                  , i = ee.findIndex(function(e) {
                    return e === a
                });
                te(t, a),
                ae(n, r),
                ne(i)
            }),
            null !== K && K.addEventListener("click", function(e) {
                var t = e.target.closest(".timeline__dot");
                if (t) {
                    var a = Y.querySelector("." + z)
                      , n = document.querySelector("." + Q)
                      , r = Number(t.getAttribute("data-id"))
                      , i = ee[r];
                    K.classList.remove("timeline--show"),
                    te(a, i),
                    ae(n, t),
                    ne(r)
                }
            })
        };
        a(360),
        p(),
        g(),
        _.a.init(),
        f.a.init(),
        b.a.init(),
        E(),
        N(),
        w.a.init(),
        P(),
        O.a.init(),
        U(),
        q.a.init(),
        M(),
        R(),
        G(),
        H.a.init(),
        re()
    },
    41: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return o
        });
        var n = a(2)
          , r = a(0)
          , i = a(26)
          , l = a(21)
          , s = a(12)
          , o = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleChange = function(e) {
                    var t, n;
                    e.persist();
                    var r = e.target
                      , i = r.name
                      , l = r.value
                      , s = r.type
                      , o = r.checked;
                    "checkbox" === s ? a.setState(((t = {})[i] = o,
                    t)) : a.setState(((n = {})[i] = l,
                    n)),
                    "resultUnit" === i && a.CalculateOuterDiameter(l)
                }
                ,
                a.handleMetalTypeChange = function(e) {
                    e.persist();
                    var t = e.target
                      , n = t.name
                      , r = t.value;
                    t.type,
                    t.checked;
                    "metalType" === n && a.setState({
                        metalType: r
                    })
                }
                ,
                a.handleCalculateOuterDiameter = function(e) {
                    var t = a.state.resultUnit;
                    a.CalculateOuterDiameter(t)
                }
                ,
                a.state = {
                    metalType: "Stainless 300 Series",
                    weightValue: 0,
                    weightUnit: "lbs",
                    innerDiameterValue: 0,
                    innerDiameterUnit: "in",
                    widthValue: 0,
                    widthUnit: "in",
                    result: 0,
                    resultUnit: "in",
                    resultPiw: 0
                },
                a.handleMetalTypeChange = a.handleMetalTypeChange.bind(a),
                a.handleChange = a.handleChange.bind(a),
                a.handleCalculateOuterDiameter = a.handleCalculateOuterDiameter.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.Validate = function() {
                var e = this.state
                  , t = e.weightValue
                  , a = e.innerDiameterValue
                  , n = e.widthValue;
                return 0 !== a && 0 !== n && 0 !== t || (alert("You must provide dimensions (Inner diameter/Width/Weight)"),
                !1)
            }
            ,
            t.prototype.normalizeDimLength = function(e, t) {
                return "cm" === t && (e /= 2.54),
                "m" === t && (e = 100 * e / 2.54),
                "mm" === t && (e = e / 10 / 2.54),
                "ft" === t && (e *= 12),
                "yd" === t && (e *= 36),
                e
            }
            ,
            t.prototype.normalizeDimWeight = function(e, t) {
                return "kg" === t && (e *= 2.2046),
                e
            }
            ,
            t.prototype.CalculateOuterDiameter = function(e) {
                var t = this.state
                  , a = t.metalType
                  , n = t.weightValue
                  , r = t.weightUnit
                  , i = t.innerDiameterValue
                  , s = t.innerDiameterUnit
                  , o = t.widthValue
                  , c = t.widthUnit;
                if (!1 !== this.Validate()) {
                    var u = this.normalizeDimLength(i, s)
                      , d = this.normalizeDimLength(o, c)
                      , m = this.normalizeDimWeight(n, r)
                      , p = l.a.getDensity(a)
                      , h = 2 * Math.sqrt(m / (Math.PI * d * p) + u / 2 * (u / 2))
                      , g = 0;
                    "in" === e && (g = Math.round(100 * h) / 100),
                    "ft" === e && (g = Math.round(.0833 * h * 100) / 100),
                    "mm" === e && (g = Math.round(25.4 * h * 100) / 100),
                    "m" === e && (g = Math.round(.0254 * h * 100) / 100),
                    "yd" === e && (g = Math.round(.0277 * h * 100) / 100),
                    "cm" === e && (g = Math.round(2.54 * h * 100) / 100);
                    var _ = Math.round(m / d * 100) / 100;
                    this.setState({
                        result: g
                    }),
                    this.setState({
                        resultPiw: _
                    })
                }
            }
            ,
            t.prototype.renderWeightInput = function() {
                return r.createElement(r.Fragment, null, r.createElement("label", null, "Enter Weight Information:"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 10,
                    name: "weightValue",
                    id: "weightValue",
                    className: "calculator-theo__check-ttextbox",
                    value: this.state.weightValue,
                    onChange: this.handleChange
                }), r.createElement("select", {
                    name: "weightUnit",
                    id: "weightUnit",
                    className: "calculator-theo__dropdown",
                    value: this.state.weightUnit,
                    onChange: this.handleChange
                }, r.createElement("option", null, "lbs"), r.createElement("option", null, "kg")))
            }
            ,
            t.prototype.renderInnerDiameterInput = function() {
                return r.createElement(r.Fragment, null, r.createElement("label", {
                    id: "innerDiameterLabel"
                }, "Inner Diameter (D):"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "innerDiameterValue",
                    id: "innerDiameterValue",
                    value: this.state.innerDiameterValue,
                    className: "calculator-theo__check-ttextbox",
                    onChange: this.handleChange
                }), r.createElement("select", {
                    name: "innerDiameterUnit",
                    id: "innerDiameterUnit",
                    className: "calculator-theo__dropdown",
                    value: this.state.innerDiameterUnit,
                    onChange: this.handleChange
                }, s.a.getArray().map(function(e) {
                    return r.createElement("option", {
                        key: e.key
                    }, e.name)
                })))
            }
            ,
            t.prototype.renderWidthInput = function() {
                return r.createElement(r.Fragment, null, r.createElement("label", {
                    id: "widthLabel"
                }, "Width (W):"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "widthValue",
                    id: "widthValue",
                    value: this.state.widthValue,
                    className: "calculator-theo__check-ttextbox",
                    onChange: this.handleChange
                }), r.createElement("select", {
                    name: "widthUnit",
                    id: "widthUnit",
                    className: "calculator-theo__dropdown",
                    value: this.state.widthUnit,
                    onChange: this.handleChange
                }, s.a.getArray().map(function(e) {
                    return r.createElement("option", {
                        key: e.key
                    }, e.name)
                })))
            }
            ,
            t.prototype.renderSubmitButton = function() {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "calculator-theo__content"
                }, r.createElement("div", {
                    className: "calculator-theo__button__popup"
                }, r.createElement("span", {
                    className: "calculator-theo__button__popup__container"
                }, r.createElement("button", {
                    onClick: this.handleCalculateOuterDiameter
                }, "Calculate")))))
            }
            ,
            t.prototype.renderDisclaimer = function() {
                return r.createElement("div", {
                    className: "calculator-theo__content__dataresults"
                }, r.createElement("b", null, "Theoretical OD Calculator Disclaimer"), r.createElement("br", null), "1) This OD calculator is a theoretical outer diameter calculator, not actual outer diameter calculator.", r.createElement("br", null), "2) Actual outer diameter may differ depending on tolerances, material and the manufacturer.", r.createElement("br", null), "3) Theoretical outer diameter is an estimation only.", r.createElement("br", null), "4) Any issues, please contact ", r.createElement("a", {
                    href: "mailto:corporate@samuel.com"
                }, "Corporate Marketing"), ".", r.createElement("br", null))
            }
            ,
            t.prototype.render = function() {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "calculator-theo__wrapper"
                }, r.createElement("div", {
                    className: "calculator-theo__content"
                }, r.createElement("div", {
                    className: "calculator-theo__content__datainput"
                }, r.createElement("fieldset", {
                    className: "calculator-theo__content__fieldset"
                }, r.createElement("legend", {
                    className: "calculator-theo__text__bold"
                }, "Coil - Outer Diameter (OD) Calculator"), r.createElement("div", {
                    className: "calculator-theo__content__colone"
                }, r.createElement(i.a, {
                    handleMetalTypeChange: this.handleMetalTypeChange,
                    metaType: this.state.metaType
                }), r.createElement("br", null), r.createElement("br", null), r.createElement("label", null, "Shape: Coil"), r.createElement("br", null), r.createElement("br", null), r.createElement("br", null), this.renderWeightInput(), r.createElement("br", null)), r.createElement("div", {
                    className: "calculator-theo__content__coltwo"
                }, r.createElement("label", {
                    id: "sizeInformationLabel"
                }, "Enter Size Information:"), r.createElement("br", null), this.renderInnerDiameterInput(), r.createElement("br", null), this.renderWidthInput(), r.createElement("br", null), r.createElement("br", null), this.renderSubmitButton()))), r.createElement("div", {
                    className: "calculator-theo__content__dataresults"
                }, r.createElement("fieldset", {
                    className: "calculator-theo__content__fieldset"
                }, r.createElement("legend", {
                    className: "calculator-theo__text__bold"
                }, "Results"), r.createElement("div", {
                    className: "calculator-theo__content__colone"
                }, r.createElement("label", null, "Outer diameter (OD):"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "result",
                    id: "result",
                    className: "calculator-theo__check-ttextbox",
                    readOnly: !0,
                    value: this.state.result
                }), r.createElement("select", {
                    name: "resultUnit",
                    id: "resultUnit",
                    className: "calculator-theo__dropdown",
                    value: this.state.resultUnit,
                    onChange: this.handleChange
                }, s.a.getArray().map(function(e) {
                    return r.createElement("option", {
                        key: e.key
                    }, e.name)
                }))), r.createElement("div", {
                    className: "calculator-theo__content__coltwo"
                }, r.createElement("label", null, "Pounds per inch of width (PIW):"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "resultPiw",
                    id: "resultPiw",
                    className: "calculator-theo__check-ttextbox",
                    readOnly: !0,
                    value: this.state.resultPiw
                })))), this.renderDisclaimer())))
            }
            ,
            t
        }(r.Component)
    },
    42: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return o
        });
        var n = a(2)
          , r = a(0)
          , i = a(26)
          , l = a(21)
          , s = a(12)
          , o = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleChange = function(e) {
                    var t, n;
                    e.persist();
                    var r = e.target
                      , i = r.name
                      , l = r.value
                      , s = r.type
                      , o = r.checked;
                    "checkbox" === s ? a.setState(((t = {})[i] = o,
                    t)) : a.setState(((n = {})[i] = l,
                    n)),
                    "resultUnit" === i && a.CalculateLinealFeet(l)
                }
                ,
                a.handleMetalTypeChange = function(e) {
                    e.persist();
                    var t = e.target
                      , n = t.name
                      , r = t.value;
                    t.type,
                    t.checked;
                    "metalType" === n && a.setState({
                        metalType: r
                    })
                }
                ,
                a.handleCalculateLinealFeet = function(e) {
                    var t = a.state.resultUnit;
                    a.CalculateLinealFeet(t)
                }
                ,
                a.state = {
                    metalType: "Stainless 300 Series",
                    weightValue: 0,
                    weightUnit: "lbs",
                    thicknessValue: 0,
                    thicknessUnit: "in",
                    widthValue: 0,
                    widthUnit: "in",
                    result: 0,
                    resultUnit: "ft"
                },
                a.handleMetalTypeChange = a.handleMetalTypeChange.bind(a),
                a.handleChange = a.handleChange.bind(a),
                a.handleCalculateLinealFeet = a.handleCalculateLinealFeet.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.Validate = function() {
                var e = this.state
                  , t = e.weightValue
                  , a = e.thicknessValue
                  , n = e.widthValue;
                return 0 !== a && 0 !== n && 0 !== t || (alert("You must provide dimensions (Thickness/Width/Weight)"),
                !1)
            }
            ,
            t.prototype.normalizeDimLength = function(e, t) {
                return "cm" === t && (e /= 2.54),
                "m" === t && (e = 100 * e / 2.54),
                "mm" === t && (e = e / 10 / 2.54),
                "ft" === t && (e *= 12),
                "yd" === t && (e *= 36),
                e
            }
            ,
            t.prototype.normalizeDimWeight = function(e, t) {
                return "kg" === t && (e *= 2.2046),
                e
            }
            ,
            t.prototype.CalculateLinealFeet = function(e) {
                var t = this.state
                  , a = t.metalType
                  , n = t.weightValue
                  , r = t.weightUnit
                  , i = t.thicknessValue
                  , s = t.thicknessUnit
                  , o = t.widthValue
                  , c = t.widthUnit;
                if (!1 !== this.Validate()) {
                    var u = this.normalizeDimLength(i, s)
                      , d = this.normalizeDimLength(o, c)
                      , m = this.normalizeDimWeight(n, r) / (l.a.getDensity(a) * u * d)
                      , p = 0;
                    "ft" === e && (p = Math.round(.0833 * m * 100) / 100),
                    "in" === e && (p = Math.round(100 * m) / 100),
                    "mm" === e && (p = Math.round(25.4 * m * 100) / 100),
                    "m" === e && (p = Math.round(.0254 * m * 100) / 100),
                    "yd" === e && (p = Math.round(.0277 * m * 100) / 100),
                    "cm" === e && (p = Math.round(2.54 * m * 100) / 100),
                    this.setState({
                        result: p
                    })
                }
            }
            ,
            t.prototype.renderWeightInput = function() {
                return r.createElement(r.Fragment, null, r.createElement("label", null, "Enter Weight Information:"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 10,
                    name: "weightValue",
                    id: "weightValue",
                    value: this.state.weightValue,
                    className: "calculator-theo__check-ttextbox",
                    onChange: this.handleChange
                }), r.createElement("select", {
                    name: "weightUnit",
                    id: "weightUnit",
                    className: "calculator-theo__dropdown",
                    value: this.state.weightUnit,
                    onChange: this.handleChange
                }, r.createElement("option", null, "lbs"), r.createElement("option", null, "kg")))
            }
            ,
            t.prototype.renderThicknessInput = function() {
                return r.createElement(r.Fragment, null, r.createElement("label", {
                    id: "thicknessLabel"
                }, "Thickness (T):"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "thicknessValue",
                    id: "thicknessValue",
                    value: this.state.thicknessValue,
                    className: "calculator-theo__check-ttextbox",
                    onChange: this.handleChange
                }), r.createElement("select", {
                    name: "thicknessUnit",
                    id: "thicknessUnit",
                    className: "calculator-theo__dropdown",
                    value: this.state.thicknessUnit,
                    onChange: this.handleChange
                }, s.a.getArray().map(function(e) {
                    return r.createElement("option", {
                        key: e.key
                    }, e.name)
                })))
            }
            ,
            t.prototype.renderWidthInput = function() {
                return r.createElement(r.Fragment, null, r.createElement("label", {
                    id: "widthLabel"
                }, "Width (W):"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "widthValue",
                    id: "widthValue",
                    value: this.state.widthValue,
                    className: "calculator-theo__check-ttextbox",
                    onChange: this.handleChange
                }), r.createElement("select", {
                    name: "widthUnit",
                    id: "widthUnit",
                    className: "calculator-theo__dropdown",
                    value: this.state.widthUnit,
                    onChange: this.handleChange
                }, s.a.getArray().map(function(e) {
                    return r.createElement("option", {
                        key: e.key
                    }, e.name)
                })))
            }
            ,
            t.prototype.renderSubmitButton = function() {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "calculator-theo__content"
                }, r.createElement("div", {
                    className: "calculator-theo__button__popup"
                }, r.createElement("span", {
                    className: "calculator-theo__button__popup__container"
                }, r.createElement("button", {
                    onClick: this.handleCalculateLinealFeet
                }, "Calculate")))))
            }
            ,
            t.prototype.renderDisclaimer = function() {
                return r.createElement("div", {
                    className: "calculator-theo__content__dataresults"
                }, r.createElement("b", null, "Theoretical Lineal Feet Calculator Disclaimer"), r.createElement("br", null), "1) This Lineal Feet calculator is a theoretical lineal feet calculator, not actual lineal feet calculator.", r.createElement("br", null), "2) Actual lineal feet may differ depending on tolerances, material and the manufacturer.", r.createElement("br", null), "3) Theoretical lineal feet is an estimation only.", r.createElement("br", null), "4) Any issues, please contact ", r.createElement("a", {
                    href: "mailto:corporate@samuel.com"
                }, "Corporate Marketing"), ".", r.createElement("br", null))
            }
            ,
            t.prototype.render = function() {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "calculator-theo__wrapper"
                }, r.createElement("div", {
                    className: "calculator-theo__content"
                }, r.createElement("div", {
                    className: "calculator-theo__content__datainput"
                }, r.createElement("fieldset", {
                    className: "calculator-theo__content__fieldset"
                }, r.createElement("legend", {
                    className: "calculator-theo__text__bold"
                }, "Coil - Lineal Feet Calculator"), r.createElement("div", {
                    className: "calculator-theo__content__colone"
                }, r.createElement(i.a, {
                    handleMetalTypeChange: this.handleMetalTypeChange,
                    metaType: this.state.metaType
                }), r.createElement("br", null), r.createElement("br", null), r.createElement("label", null, "Shape: Coil"), r.createElement("br", null), r.createElement("br", null), r.createElement("br", null), this.renderWeightInput(), r.createElement("br", null)), r.createElement("div", {
                    className: "calculator-theo__content__coltwo"
                }, r.createElement("label", {
                    id: "sizeInformationLabel"
                }, "Enter Size Information:"), r.createElement("br", null), this.renderThicknessInput(), r.createElement("br", null), this.renderWidthInput(), r.createElement("br", null), r.createElement("br", null), this.renderSubmitButton()))), r.createElement("div", {
                    className: "calculator-theo__content__dataresults"
                }, r.createElement("fieldset", {
                    className: "calculator-theo__content__fieldset"
                }, r.createElement("legend", {
                    className: "calculator-theo__text__bold"
                }, "Results"), r.createElement("div", {
                    className: "calculator-theo__content__colone"
                }, r.createElement("label", null, "Lineal Scale:"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "result",
                    id: "result",
                    className: "calculator-theo__check-ttextbox",
                    readOnly: !0,
                    value: this.state.result
                }), r.createElement("select", {
                    name: "resultUnit",
                    id: "resultUnit",
                    className: "calculator-theo__dropdown",
                    value: this.state.resultUnit,
                    onChange: this.handleChange
                }, s.a.getArray().map(function(e) {
                    return r.createElement("option", {
                        key: e.key
                    }, e.name)
                }))), r.createElement("br", null))), this.renderDisclaimer())))
            }
            ,
            t
        }(r.Component)
    },
    43: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return m
        });
        var n = a(2)
          , r = a(0)
          , i = a(26)
          , l = [{
            key: 1,
            name: "EmptyDefault",
            image: "/public/images/calc_default.png",
            description: "",
            dimLabel1: "",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 2,
            name: "Sheet",
            image: "/public/images/calc_sheet.gif",
            description: "Sheet",
            dimLabel1: "Thickness (T):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Width (W):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 3,
            name: "Plate",
            image: "/public/images/calc_plate.gif",
            description: "Plate",
            dimLabel1: "Thickness (T):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Width (W):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 4,
            name: "Square Or Flat Bar",
            image: "/public/images/calc_square_or_flatbar.gif",
            description: "Square Or Flat Bar",
            dimLabel1: "Thickness (T):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Width (W):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 5,
            name: "Circle",
            image: "/public/images/calc_disc.gif",
            description: "Circle",
            dimLabel1: "Diameter (d):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Thickness (t):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 6,
            name: "Ring",
            image: "/public/images/calc_ring.gif",
            description: "Ring",
            dimLabel1: "Outer Diameter (D' outer):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Inner Diameter (D):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Thickness (T):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 7,
            name: "Round Bar",
            image: "/public/images/calc_roundbar.gif",
            description: "Round Bar",
            dimLabel1: "Diameter (D):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 8,
            name: "Hexagon Bar",
            image: "/public/images/calc_hexbar.gif",
            description: "Hexagon Bar",
            dimLabel1: "Flat to flat distance (d):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 9,
            name: "Round Tubing",
            image: "/public/images/calc_roundtube.gif",
            description: "Round Tubing",
            dimLabel1: "Outer Diameter (D):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Wall Thickness (T):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 10,
            name: "Pipe",
            image: "/public/images/calc_pipe.gif",
            description: "Pipe",
            dimLabel1: "Outer Diameter (D):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Wall Thickness (T):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 11,
            name: "Square Tubing",
            image: "/public/images/calc_squaretube.gif",
            description: "Square Tubing",
            dimLabel1: "Outer Width (W):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Wall Thickness (T):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 12,
            name: "Coil",
            image: "/public/images/calc_coil.gif",
            description: "Coil",
            dimLabel1: "Outer Diameter (D'):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Inner Diameter (D):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 13,
            name: "Checkered Plate",
            image: "/public/images/calc_checkered.gif",
            description: "Checkered Plate",
            dimLabel1: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel2: "Width (W):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Thickness (T):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 14,
            name: "Tread Plate",
            image: "/public/images/calc_tread.gif",
            description: "Tread Plate",
            dimLabel1: "Length (L):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel2: "Width (W):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Thickness (T):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel4: "",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 15,
            name: "Angle",
            image: "/public/images/calc_angle.gif",
            description: "Angle",
            dimLabel1: "Width (W'):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Width (W):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Thickness (T):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "Length (L):",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 16,
            name: "Hollow Tubing",
            image: "/public/images/calc_hollowtubing.gif",
            description: "Hollow Tubing",
            dimLabel1: "Width (W'):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Height (H):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Thickness (T):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "Length (L):",
            dimValue4: 0,
            dimUnit4: "in"
        }, {
            key: 17,
            name: "Channel",
            image: "/public/images/calc_channel.gif",
            description: "Channel",
            dimLabel1: "Width (W'):",
            dimValue1: 0,
            dimUnit1: "in",
            dimLabel2: "Height (H):",
            dimValue2: 0,
            dimUnit2: "in",
            dimLabel3: "Thickness (T):",
            dimValue3: 0,
            dimUnit3: "in",
            dimLabel4: "Length (L):",
            dimValue4: 0,
            dimUnit4: "in"
        }]
          , s = {
            getImage: function(e) {
                var t = l.find(function(t) {
                    return t.name === e
                });
                return t ? t.image : "/public/images/calc_default.png"
            },
            getDescription: function(e) {
                var t = l.find(function(t) {
                    return t.name === e
                });
                return t ? t.description : ""
            },
            getData: function(e) {
                return l.find(function(t) {
                    return t.name === e
                })
            },
            getArray: function() {
                return l
            }
        };
        var o = function(e) {
            return r.createElement("main", null, r.createElement(r.Fragment, null, r.createElement("label", null, "Select Your Shape:"), r.createElement("br", null), r.createElement("select", {
                name: "shape",
                value: e.shape,
                onChange: e.handleShapeChange,
                className: "calculator-theo__dropdown"
            }, s.getArray().map(function(e) {
                return r.createElement("option", {
                    key: e.key
                }, e.description)
            }))))
        }
          , c = a(12);
        var u = function(e) {
            return r.createElement("main", null, r.createElement(r.Fragment, null, e.data.displayDimension1 || e.data.displayAllDimension ? r.createElement("div", null, !0 === e.data.displayDimension1 ? r.createElement("div", null, r.createElement("label", {
                id: "dimLabel1"
            }, e.data.dimLabel1), r.createElement("br", null)) : null, r.createElement("input", {
                type: "text",
                size: 16,
                name: "dimValue1",
                id: "dimValue1",
                className: "calculator-theo__check-ttextbox",
                value: e.data.dimValue1,
                onChange: e.handleChange
            }), r.createElement("select", {
                name: "dimUnit1",
                id: "dimUnit1",
                value: e.data.dimUnit1,
                className: "calculator-theo__dropdown",
                onChange: e.handleChange
            }, c.a.getArray().map(function(e) {
                return r.createElement("option", {
                    key: e.key
                }, e.name)
            }))) : null, e.data.displayDimension2 || e.data.displayAllDimension ? r.createElement("div", null, !0 === e.data.displayDimension2 ? r.createElement("div", null, r.createElement("label", {
                id: "dimLabel2"
            }, e.data.dimLabel2), r.createElement("br", null)) : null, r.createElement("input", {
                type: "text",
                size: 16,
                name: "dimValue2",
                id: "dimValue2",
                className: "calculator-theo__check-ttextbox",
                value: e.data.dimValue2,
                onChange: e.handleChange
            }), r.createElement("select", {
                name: "dimUnit2",
                id: "dimUnit2",
                value: e.data.dimUnit2,
                className: "calculator-theo__dropdown",
                onChange: e.handleChange
            }, c.a.getArray().map(function(e) {
                return r.createElement("option", {
                    key: e.key
                }, e.name)
            }))) : null, e.data.displayDimension3 || e.data.displayAllDimension ? r.createElement("div", null, !0 === e.data.displayDimension3 ? r.createElement("div", null, r.createElement("label", {
                id: "dimLabel3"
            }, e.data.dimLabel3), r.createElement("br", null)) : null, r.createElement("input", {
                type: "text",
                size: 16,
                name: "dimValue3",
                id: "dimValue3",
                className: "calculator-theo__check-ttextbox",
                value: e.data.dimValue3,
                onChange: e.handleChange
            }), r.createElement("select", {
                name: "dimUnit3",
                id: "dimUnit3",
                value: e.data.dimUnit3,
                className: "calculator-theo__dropdown",
                onChange: e.handleChange
            }, c.a.getArray().map(function(e) {
                return r.createElement("option", {
                    key: e.key
                }, e.name)
            }))) : null, e.data.displayDimension4 || e.data.displayAllDimension ? r.createElement("div", null, !0 === e.data.displayDimension4 ? r.createElement("div", null, r.createElement("label", {
                id: "dimLabel4"
            }, e.data.dimLabel4), r.createElement("br", null)) : null, r.createElement("input", {
                type: "text",
                size: 16,
                name: "dimValue4",
                id: "dimValue4",
                className: "calculator-theo__check-ttextbox",
                value: e.data.dimValue4,
                onChange: e.handleChange
            }), r.createElement("select", {
                name: "dimUnit4",
                id: "dimUnit4",
                value: e.data.dimUnit4,
                className: "calculator-theo__dropdown",
                onChange: e.handleChange
            }, c.a.getArray().map(function(e) {
                return r.createElement("option", {
                    key: e.key
                }, e.name)
            }))) : null))
        }
          , d = a(21)
          , m = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.handleChange = function(e) {
                    var t, n;
                    e.persist();
                    var r = e.target
                      , i = r.name
                      , l = r.value
                      , s = r.type
                      , o = r.checked;
                    "checkbox" === s ? a.setState(((t = {})[i] = o,
                    t)) : a.setState(((n = {})[i] = l,
                    n))
                }
                ,
                a.handleMetalTypeChange = function(e) {
                    e.persist();
                    var t = e.target
                      , n = t.name
                      , r = t.value;
                    t.type,
                    t.checked;
                    "metalType" === n && a.setState({
                        metalType: r
                    })
                }
                ,
                a.handleShapeChange = function(e) {
                    e.persist();
                    var t = e.target
                      , n = t.name
                      , r = t.value
                      , i = (t.type,
                    t.checked,
                    !1);
                    "shape" === n && (a.setState({
                        shape: r
                    }),
                    i = !0),
                    i && (a.setState({
                        displayAllDimension: !1
                    }),
                    a.configureToDisplayShapeDimensions(r))
                }
                ,
                a.CalculateTheoWeight = function(e) {
                    var t = a.state
                      , n = t.metalType
                      , r = t.shape
                      , i = t.noOfPieces
                      , l = t.dimValue1
                      , s = t.dimValue2
                      , o = t.dimValue3
                      , c = t.dimValue4
                      , u = t.dimUnit1
                      , m = t.dimUnit2
                      , p = t.dimUnit3
                      , h = t.dimUnit4
                      , g = a.state
                      , _ = g.resultLb
                      , f = g.resultKg;
                    if (a.Validate()) {
                        var b = a.getPlateUpGuage(l)
                          , v = a.normalizeDim(b, u)
                          , E = a.normalizeDim(l, u)
                          , y = a.normalizeDim(s, m)
                          , C = a.normalizeDim(o, p)
                          , k = a.normalizeDim(c, h)
                          , N = d.a.getDensity(n)
                          , w = 0;
                        switch (r) {
                        case "Sheet":
                            w = E * y * C * i * N;
                            break;
                        case "Plate":
                            w = v * y * C * i * N;
                            break;
                        case "Tread Plate":
                            w = (82e-5 / C + N) * E * y * C * i;
                            break;
                        case "Checkered Plate":
                            w = (.00205 / C + N) * E * y * C * i;
                            break;
                        case "Square Or Flat Bar":
                            w = E * y * C * i * N;
                            break;
                        case "Circle":
                            w = Math.PI * (E / 2) * (E / 2) * C * i * N;
                            break;
                        case "Ring":
                            w = Math.PI * (E / 2 * (E / 2) - y / 2 * (y / 2)) * C * i * N;
                            break;
                        case "Round Bar":
                            w = Math.PI * (E / 2) * (E / 2) * C * i * N;
                            break;
                        case "Hexagon Bar":
                            w = Math.sqrt(3) / 2 * E * E * C * i * N;
                            break;
                        case "Round Tubing":
                        case "Pipe":
                            w = Math.PI * (E / 2 * (E / 2) - (E - 2 * y) / 2 * ((E - 2 * y) / 2)) * C * i * N;
                            break;
                        case "Coil":
                            w = Math.PI * (E / 2 * (E / 2) - y / 2 * (y / 2)) * C * i * N;
                            break;
                        case "Square Tubing":
                            w = (E * E - (E - 2 * y) * (E - 2 * y)) * C * i * N;
                            break;
                        case "Angle":
                            w = ((y - C) * C + (E - C) * C + C * C) * k * i * N;
                            break;
                        case "Hollow Tubing":
                            w = (E * y - (y - 2 * C) * (E - 2 * C)) * k * i * N;
                            break;
                        case "Channel":
                            w = (2 * y * C + (E - 2 * C) * C) * k * i * N
                        }
                        _ = Math.round(100 * w) / 100,
                        f = Math.round(w / 2.2046 * 100) / 100,
                        a.setState({
                            resultKg: f
                        }),
                        a.setState({
                            resultLb: _
                        })
                    }
                }
                ,
                a.state = {
                    metalType: "Stainless 300 Series",
                    shape: "",
                    noOfPieces: 0,
                    displayAllDimension: !0,
                    displayDimension1: !1,
                    displayDimension2: !1,
                    displayDimension3: !1,
                    displayDimension4: !1,
                    dimLabel1: "",
                    dimValue1: 0,
                    dimUnit1: "in",
                    dimLabel2: "",
                    dimValue2: 0,
                    dimUnit2: "in",
                    dimLabel3: "",
                    dimValue3: 0,
                    dimUnit3: "in",
                    dimLabel4: "",
                    dimValue4: 0,
                    dimUnit4: "in",
                    resultLb: 0,
                    resultKg: 0
                },
                a.handleMetalTypeChange = a.handleMetalTypeChange.bind(a),
                a.handleShapeChange = a.handleShapeChange.bind(a),
                a.handleChange = a.handleChange.bind(a),
                a.CalculateTheoWeight = a.CalculateTheoWeight.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.getPlateUpGuage = function(e) {
                var t = parseFloat(e);
                return t >= .187 && t <= .374 ? t + .02 : t >= .375 && t <= .749 ? t + .024 : t >= .75 && t <= .999 ? t + .027 : t >= 1 && t <= 2 ? t + .032 : t >= 2.001 && t <= 2.999 ? t + .0425 : t >= 3 && t <= 3.999 ? t + .055 : t >= 4 && t <= 6 ? t + .07 : t
            }
            ,
            t.prototype.normalizeDim = function(e, t) {
                return "cm" === t && (e /= 2.54),
                "m" === t && (e = 100 * e / 2.54),
                "mm" === t && (e = e / 10 / 2.54),
                "ft" === t && (e *= 12),
                "yd" === t && (e *= 36),
                e
            }
            ,
            t.prototype.Validate = function() {
                var e = this.state
                  , t = (e.metalType,
                e.shape)
                  , a = (e.noOfPieces,
                e.dimValue1)
                  , n = e.dimValue2
                  , r = e.dimValue3;
                e.dimValue4,
                e.dimUnit1,
                e.dimUnit2,
                e.dimUnit3,
                e.dimUnit4;
                return "Round Bar" !== t && "Hexagon Bar" !== t || 0 !== a && 0 !== r ? "Flat" !== t && "Sheet" !== t && "Plate" !== t && "Tread Plate" !== t && "Checkered Plate" !== t || 0 !== a && 0 !== n && 0 !== r || (alert("You must provide dimensions (length/width/thickness)"),
                !1) : (alert("You must fill dimensions (diameter/length)"),
                !1)
            }
            ,
            t.prototype.writeToConsole = function(e, t) {}
            ,
            t.prototype.configureToDisplayShapeDimensions = function(e) {
                var t = s.getData(e);
                "" === e ? this.setState({
                    noOfPieces: 0
                }) : this.setState({
                    noOfPieces: 1
                }),
                this.setState({
                    displayDimension1: "" !== t.dimLabel1
                }),
                this.setState({
                    displayDimension2: "" !== t.dimLabel2
                }),
                this.setState({
                    displayDimension3: "" !== t.dimLabel3
                }),
                this.setState({
                    displayDimension4: "" !== t.dimLabel4
                }),
                this.setState({
                    dimLabel1: t.dimLabel1
                }),
                this.setState({
                    dimValue1: t.dimValue1
                }),
                this.setState({
                    dimUnit1: t.dimUnit1
                }),
                this.setState({
                    dimLabel2: t.dimLabel2
                }),
                this.setState({
                    dimValue2: t.dimValue2
                }),
                this.setState({
                    dimUnit2: t.dimUnit2
                }),
                this.setState({
                    dimLabel3: t.dimLabel3
                }),
                this.setState({
                    dimValue3: t.dimValue3
                }),
                this.setState({
                    dimUnit3: t.dimUnit3
                }),
                this.setState({
                    dimLabel4: t.dimLabel4
                }),
                this.setState({
                    dimValue4: t.dimValue4
                }),
                this.setState({
                    dimUnit4: t.dimUnit4
                }),
                this.setState({
                    resultLb: 0
                }),
                this.setState({
                    resultKg: 0
                })
            }
            ,
            t.prototype.renderAllDimensions = function() {
                return r.createElement(r.Fragment, null, r.createElement("label", null, "Enter Size Information:"), r.createElement("br", null), r.createElement("br", null), r.createElement(u, {
                    handleChange: this.handleChange,
                    data: this.state
                }))
            }
            ,
            t.prototype.renderSubmitButton = function() {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "calculator-theo__content"
                }, r.createElement("div", {
                    className: "calculator-theo__button__popup"
                }, r.createElement("span", {
                    className: "calculator-theo__button__popup__container"
                }, r.createElement("button", {
                    onClick: this.CalculateTheoWeight
                }, "Calculate")))))
            }
            ,
            t.prototype.renderInputNoOfPieces = function() {
                return r.createElement(r.Fragment, null, r.createElement("label", null, "Number of Pieces:"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 10,
                    name: "noOfPieces",
                    id: "noOfPieces",
                    className: "calculator-theo__check-ttextbox",
                    value: this.state.noOfPieces,
                    onChange: this.handleChange
                }), r.createElement("br", null))
            }
            ,
            t.prototype.renderDisclaimer = function() {
                return r.createElement("div", {
                    className: "calculator-theo__content__dataresults"
                }, r.createElement("b", null, "Theoretical Weight Calculator Disclaimer"), r.createElement("br", null), "1) This weight calculator is theoretical weight not actual weight.", r.createElement("br", null), "2) Actual weight may differ depending on tolerances, material and the manufacturer.", r.createElement("br", null), "3) Theoretical weight is an estimation only.", r.createElement("br", null), "4) Any issues, please contact ", r.createElement("a", {
                    href: "mailto:corporate@samuel.com"
                }, "Corporate Marketing"), ".", r.createElement("br", null))
            }
            ,
            t.prototype.render = function() {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "calculator-theo__wrapper"
                }, r.createElement("div", {
                    className: "calculator-theo__content"
                }, r.createElement("div", {
                    className: "calculator-theo__content__datainput"
                }, r.createElement("fieldset", {
                    className: "calculator-theo__content__fieldset"
                }, r.createElement("legend", {
                    className: "calculator-theo__text__bold"
                }, "Calculation Details"), r.createElement("div", {
                    className: "calculator-theo__content__colone"
                }, r.createElement(i.a, {
                    handleMetalTypeChange: this.handleMetalTypeChange,
                    metaType: this.state.metaType
                }), r.createElement(o, {
                    handleShapeChange: this.handleShapeChange,
                    shape: this.state.shape
                }), this.renderInputNoOfPieces(), r.createElement("br", null), this.renderAllDimensions()), r.createElement("div", {
                    id: "col_two",
                    className: "calculator-theo__content__coltwo"
                }, r.createElement("div", null, r.createElement("img", {
                    id: "imgSource",
                    src: s.getImage(this.state.shape)
                })), this.renderSubmitButton()))), r.createElement("div", {
                    className: "calculator-theo__content__dataresults"
                }, r.createElement("fieldset", {
                    className: "calculator-theo__content__fieldset"
                }, r.createElement("legend", {
                    className: "calculator-theo__text__bold"
                }, "Calculation Results"), r.createElement("div", {
                    className: "calculator-theo__content__colonecalc"
                }, r.createElement("label", null, "Approximate Weight in Pounds (lbs):"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "resultLb",
                    id: "resultLb",
                    className: "calculator-theo__check-ttextbox",
                    readOnly: !0,
                    value: this.state.resultLb
                })), r.createElement("div", {
                    className: "calculator-theo__content__coltwocalc"
                }, r.createElement("label", null, "Approximate Weight in Kilograms (kg):"), r.createElement("br", null), r.createElement("input", {
                    type: "text",
                    size: 16,
                    name: "resultKg",
                    id: "resultKg",
                    className: "calculator-theo__check-ttextbox",
                    readOnly: !0,
                    value: this.state.resultKg
                })))), this.renderDisclaimer())))
            }
            ,
            t
        }(r.Component)
    },
    44: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return n
        });
        var n = {
            scrollTo: function(e, t) {
                void 0 === t && (t = 100);
                var a = document.querySelector(e).offsetTop - t;
                window.scrollTo(0, a)
            }
        }
    },
    5: function(e, t) {
        e.exports = jQuery
    },
    57: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return c
        });
        var n = a(2)
          , r = a(0)
          , i = a(43)
          , l = a(41)
          , s = a(42)
          , o = a(20)
          , c = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return Object(n.b)(t, e),
            t.prototype.renderCalcTheo = function() {
                return r.createElement(r.Fragment, null, r.createElement(i.a, {
                    property: this.props.property
                }))
            }
            ,
            t.prototype.renderCalcCoilOD = function() {
                return r.createElement(r.Fragment, null, r.createElement(l.a, {
                    property: this.props.property
                }))
            }
            ,
            t.prototype.renderCalcCoilLF = function() {
                return r.createElement(r.Fragment, null, r.createElement(s.a, {
                    property: this.props.property
                }))
            }
            ,
            t.prototype.render = function() {
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "calculator-theo__wrapper"
                }, r.createElement("div", {
                    className: "calculator-theo__content"
                }, r.createElement("div", {
                    className: "calculator-theo__content__tab"
                }, r.createElement(o.d, null, r.createElement(o.b, null, r.createElement(o.a, null, "Weight Calculator"), r.createElement(o.a, null, "Coil - Outer Diameter Calculator"), r.createElement(o.a, null, "Coil - Lineal Feet Calculator")), r.createElement(o.c, null, this.renderCalcTheo()), r.createElement(o.c, null, this.renderCalcCoilOD()), r.createElement(o.c, null, this.renderCalcCoilLF()))))))
            }
            ,
            t
        }(r.Component)
    },
    71: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return s
        });
        var n = a(2)
          , r = a(0)
          , i = function(e, t) {
            var a = [];
            return t && t.width > 0 && a.push("width=" + t.width),
            t && t.height > 0 && a.push("height=" + t.height),
            t && t.quality > 0 && a.push("quality=" + t.quality),
            t && t.crop && a.push("mode=crop"),
            a.length > 0 && (e = -1 === e.indexOf("?") ? e + "?" + a.join("&") : "" + e + a.join("&")),
            e
        }
          , l = function(e, t, a, n, r) {
            return void 0 === n && (n = 0),
            i(e, {
                width: t,
                height: a,
                quality: n,
                crop: r
            })
        }
          , s = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return Object(n.b)(t, e),
            t.prototype.render = function() {
                var e = this.props
                  , t = e.results
                  , a = e.newsListingTranslations
                  , n = e.shouldOpenInNewTab;
                return t.length ? r.createElement("section", {
                    className: "news-listing-results"
                }, r.createElement("ol", {
                    className: "news-listing-results__list"
                }, t.map(function(e, t) {
                    return r.createElement("li", {
                        className: "news-listing-result",
                        key: t
                    }, r.createElement("a", {
                        className: "news-listing-result__link",
                        href: e.url,
                        target: n ? "_blank" : "_self"
                    }, r.createElement("figure", {
                        className: "news-listing-result__image"
                    }, r.createElement("img", {
                        src: l(e.image.url, 550, 0, 80, !1),
                        alt: e.image.altText
                    })), r.createElement("div", {
                        className: "news-listing-result__details"
                    }, r.createElement("h3", {
                        className: "news-listing-result__title"
                    }, e.heading), r.createElement("time", {
                        className: "news-listing-result__date",
                        dateTime: e.date
                    }, e.date), r.createElement("p", {
                        className: "news-listing-result__text"
                    }, e.introText))))
                }))) : r.createElement("p", null, a.noResults)
            }
            ,
            t
        }(r.Component)
    },
    72: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return r
        });
        var n = a(5)
          , r = {
            init: function() {
                var e = n(".header-image-carousel")
                  , t = e.attr("data-carousel-speed")
                  , a = e.attr("data-carousel-autospeed")
                  , r = "True" === e.attr("data-carousel-auto-play");
                e.slick({
                    dots: !1,
                    infinite: !0,
                    autoplay: r,
                    speed: t,
                    autoplaySpeed: a,
                    slidesToShow: 1,
                    adaptiveHeight: !0
                });
                var i = n(".header-video-carousel")
                  , l = i.attr("data-carousel-speed")
                  , s = i.attr("data-carousel-autospeed")
                  , o = "True" === i.attr("data-carousel-auto-play");
                i.slick({
                    dots: !1,
                    infinite: !0,
                    autoplay: o,
                    speed: l,
                    autoplaySpeed: s,
                    slidesToShow: 1,
                    adaptiveHeight: !1
                });
                var c = n(".featured-carousel")
                  , u = c.attr("data-carousel-speed")
                  , d = c.attr("data-carousel-autospeed")
                  , m = "True" === c.attr("data-carousel-auto-play");
                c.slick({
                    dots: !1,
                    infinite: !0,
                    autoplay: m,
                    speed: u,
                    autoplaySpeed: d,
                    slidesToShow: 1,
                    adaptiveHeight: !0,
                    responsive: [{
                        breakpoint: 1070,
                        settings: {
                            dots: !0,
                            prevArrow: !1,
                            nextArrow: !1
                        }
                    }]
                });
                var p = n(".careers-carousel")
                  , h = p.attr("data-carousel-speed")
                  , g = p.attr("data-carousel-autospeed")
                  , _ = "True" === p.attr("data-carousel-auto-play");
                p.slick({
                    dots: !1,
                    infinite: !0,
                    autoplay: _,
                    speed: h,
                    autoplaySpeed: g,
                    slidesToShow: 3,
                    adaptiveHeight: !0,
                    responsive: [{
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 1070,
                        settings: {
                            dots: !0,
                            prevArrow: !1,
                            nextArrow: !1
                        }
                    }, {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: !0,
                            prevArrow: !1,
                            nextArrow: !1
                        }
                    }]
                });
                var f = n(".standards-carousel")
                  , b = f.attr("data-carousel-speed")
                  , v = f.attr("data-carousel-autospeed")
                  , E = "True" === f.attr("data-carousel-auto-play");
                f.slick({
                    dots: !0,
                    infinite: !0,
                    autoplay: E,
                    speed: b,
                    autoplaySpeed: v,
                    slidesToShow: 7,
                    adaptiveHeight: !0,
                    responsive: [{
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 7
                        }
                    }, {
                        breakpoint: 1350,
                        settings: {
                            slidesToShow: 6
                        }
                    }, {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5
                        }
                    }, {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 4,
                            prevArrow: !1,
                            nextArrow: !1
                        }
                    }, {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 4,
                            prevArrow: !1,
                            nextArrow: !1
                        }
                    }, {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            prevArrow: !1,
                            nextArrow: !1
                        }
                    }, {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !0,
                            variableWidth: !0,
                            prevArrow: !1,
                            nextArrow: !1
                        }
                    }]
                });
                var y = n(".contacts-carousel")
                  , C = y.attr("data-carousel-speed")
                  , k = y.attr("data-carousel-autospeed")
                  , N = "False" != y.attr("data-carousel-auto-play");
                y.slick({
                    dots: !0,
                    infinite: !0,
                    autoplay: N,
                    speed: C,
                    autoplaySpeed: k,
                    slidesToShow: 5,
                    adaptiveHeight: !1,
                    responsive: [{
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 5
                        }
                    }, {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 4
                        }
                    }, {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 850,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !0
                        }
                    }]
                });
                var w = n(".contacts-carousel--single-item")
                  , S = w.attr("data-carousel-speed")
                  , T = w.attr("data-carousel-autospeed")
                  , L = "False" != w.attr("data-carousel-auto-play");
                w.slick({
                    dots: !0,
                    infinite: !0,
                    autoplay: L,
                    speed: S,
                    autoplaySpeed: T,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: !1,
                    responsive: [{
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 1
                        }
                    }, {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 1
                        }
                    }, {
                        breakpoint: 1070,
                        settings: {
                            slidesToShow: 1
                        }
                    }, {
                        breakpoint: 850,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: !1
                        }
                    }]
                });
                var x = n(".text-and-image-carousel")
                  , F = x.attr("data-carousel-speed")
                  , P = x.attr("data-carousel-autospeed")
                  , O = "True" === x.attr("data-carousel-auto-play");
                x.slick({
                    dots: !0,
                    infinite: !0,
                    autoplay: O,
                    speed: F,
                    autoplaySpeed: P,
                    slidesToShow: 1,
                    adaptiveHeight: !1
                })
            }
        }
    },
    85: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return l
        });
        var n = a(2)
          , r = a(0)
          , i = a(87)
          , l = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.listOptionSelected = function(e) {
                    a.props.redirectOnOptionClick || (a.setState({
                        listOpen: !1,
                        listOptionSelected: e
                    }),
                    a.props.onOptionSelect && a.props.onOptionSelect(e))
                }
                ,
                a.handleClick = function() {
                    a.setState(function(e) {
                        return {
                            listOpen: !e.listOpen
                        }
                    })
                }
                ,
                a.state = {
                    headerTitle: a.props.title,
                    listOpen: !1,
                    listOptionSelected: null
                },
                a
            }
            return Object(n.b)(t, e),
            t.prototype.render = function() {
                var e = this
                  , t = this.props
                  , a = t.styleClass
                  , n = t.arrowIconColor
                  , l = t.items
                  , s = t.redirectOnOptionClick
                  , o = this.state
                  , c = o.listOpen
                  , u = o.headerTitle
                  , d = o.listOptionSelected
                  , m = c ? "dropdown--active" : "";
                return r.createElement("div", {
                    className: "dropdown " + m + " " + a
                }, r.createElement("header", {
                    className: "dropdown__header",
                    onClick: this.handleClick
                }, r.createElement("h6", {
                    className: "dropdown__title"
                }, null !== d ? d.text : u), r.createElement("div", {
                    className: "dropdown__arrow-icon"
                }, r.createElement(i.a, {
                    name: "arrow",
                    width: "12",
                    fill: n
                }))), c && r.createElement("ul", {
                    className: "dropdown__list"
                }, l.map(function(t, a) {
                    return r.createElement("li", {
                        key: a,
                        className: "dropdown__item",
                        onClick: e.listOptionSelected.bind(e, t)
                    }, s ? r.createElement("a", {
                        href: t.value,
                        target: t.openInNewWindow ? "_blank" : ""
                    }, t.text) : t.text)
                })))
            }
            ,
            t
        }(r.Component)
    },
    86: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return l
        });
        var n = a(2)
          , r = a(0)
          , i = a(87)
          , l = function(e) {
            function t(t) {
                var a = e.call(this, t) || this;
                return a.maxItemNumbers = 5,
                a.rangeSide = Math.floor(a.maxItemNumbers / 2),
                a.handleClick = a.handleClick.bind(a),
                a
            }
            return Object(n.b)(t, e),
            t.prototype.handleClick = function(e) {
                var t = Number(e.currentTarget.id);
                this.props.paginationUrl ? window.location.href = this.props.paginationUrl + "&page=" + t : this.props.doPaginationSearch(t)
            }
            ,
            t.prototype.getNumberOfPages = function(e, t) {
                return Math.ceil(e / t)
            }
            ,
            t.prototype.generatePageNumbers = function(e, t) {
                for (var a = [], n = e; n <= t; n++)
                    a.push(n);
                return a
            }
            ,
            t.prototype.getClosest = function(e, t) {
                var a = 0
                  , n = 0;
                return e < this.maxItemNumbers ? (a = 2,
                n = Math.min(Math.max(this.maxItemNumbers, e + this.rangeSide), t - 1)) : t - e <= this.rangeSide ? (a = t - this.maxItemNumbers + 1,
                n = t - 1) : (a = e - this.rangeSide,
                n = Math.min(e + this.rangeSide, t - 1)),
                this.generatePageNumbers(a, n)
            }
            ,
            t.prototype.renderStartDots = function(e, t) {
                return e <= this.rangeSide + 1 || t <= this.maxItemNumbers ? null : r.createElement("li", {
                    className: "pagination__item",
                    key: "renderFirstDotsItems-dots"
                }, r.createElement("span", {
                    className: "pagination__item__dots"
                }, "..."))
            }
            ,
            t.prototype.renderEndDots = function(e, t) {
                return e > t - this.rangeSide - 1 || t <= this.maxItemNumbers ? null : r.createElement("li", {
                    className: "pagination__item",
                    key: "renderLastDotsItems-dots"
                }, r.createElement("span", {
                    className: "pagination__item__dots"
                }, "..."))
            }
            ,
            t.prototype.renderItem = function(e) {
                var t = this.props.page === e ? " pagination__item__button--is-active" : "";
                return r.createElement("li", {
                    className: "pagination__item",
                    key: e
                }, r.createElement("button", {
                    onClick: this.handleClick,
                    className: "pagination__item__button " + t,
                    id: String(e)
                }, e))
            }
            ,
            t.prototype.renderSimple = function(e, t) {
                var a = this;
                return Array.from({
                    length: t
                }).map(function(e, t) {
                    return a.renderItem(t + 1)
                })
            }
            ,
            t.prototype.renderAdvanced = function(e, t) {
                var a = this
                  , n = this.getClosest(e, t);
                return r.createElement(r.Fragment, null, this.renderItem(1), this.renderStartDots(e, t), n.map(function(e) {
                    return a.renderItem(e)
                }), this.renderEndDots(e, t), this.renderItem(t))
            }
            ,
            t.prototype.renderNavigate = function(e, t) {
                var a = this.props.page;
                if (!(e <= 1 || t && 1 === a || !t && a === e)) {
                    var n = 1
                      , l = t ? "item-arrow--left" : "item-arrow--right"
                      , s = t ? "arrow-icon arrow-icon--left" : "arrow-icon arrow-icon--right"
                      , o = this.props.paginationTranslations
                      , c = o.previous
                      , u = o.next;
                    return n = t ? a > 1 ? a - 1 : 1 : a < e ? a + 1 : e,
                    r.createElement("div", {
                        className: "pagination__item-arrow " + l,
                        id: String(n)
                    }, r.createElement("button", {
                        onClick: this.handleClick,
                        className: "pagination__item-arrow__button",
                        id: String(n)
                    }, r.createElement("span", {
                        className: s
                    }, r.createElement(i.a, {
                        name: "arrow",
                        width: "15",
                        fill: "#eb0028"
                    })), r.createElement("span", {
                        className: "pagination__item-arrow__text"
                    }, t ? c : u)))
                }
            }
            ,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.totalNumberOfItems
                  , a = e.pageSize
                  , n = e.page;
                if (t <= 0 || a <= 0)
                    return null;
                var i = this.getNumberOfPages(t, a);
                return r.createElement(r.Fragment, null, r.createElement("div", {
                    className: "pagination"
                }, this.renderNavigate(i, !0), r.createElement("ul", {
                    className: "pagination__list"
                }, i <= this.maxItemNumbers ? this.renderSimple(n, i) : this.renderAdvanced(n, i)), this.renderNavigate(i, !1)))
            }
            ,
            t
        }(r.Component)
    },
    87: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return i
        });
        var n = a(2)
          , r = a(0)
          , i = function(e) {
            var t = e.name
              , a = void 0 === t ? "" : t
              , i = e.style
              , l = void 0 === i ? {} : i
              , s = e.fill
              , o = void 0 === s ? "#000" : s
              , c = e.viewBox
              , u = void 0 === c ? "" : c
              , d = e.width
              , m = void 0 === d ? "100%" : d
              , p = e.className
              , h = void 0 === p ? "" : p
              , g = e.height
              , _ = void 0 === g ? "100%" : g;
            return r.createElement("svg", {
                width: m,
                style: l,
                height: _,
                className: h,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: u || function(e) {
                    switch (e) {
                    case "arrow":
                        return "0 0 306 306";
                    default:
                        return "0 0 100 100"
                    }
                }(a),
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, function(e, t) {
                switch (e) {
                case "arrow":
                    return r.createElement("polygon", Object(n.a)({}, t, {
                        points: "270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35"
                    }));
                default:
                    return r.createElement("path", null)
                }
            }(a, {
                fill: o
            }))
        }
    }
});
