(function (e) {
    function t(t) {
        for (var r, c, i = t[0], s = t[1], u = t[2], d = 0, l = []; d < i.length; d++) c = i[d], Object.prototype.hasOwnProperty.call(a, c) && a[c] && l.push(a[c][0]), a[c] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        f && f(t);
        while (l.length) l.shift()();
        return o.push.apply(o, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, c = 1; c < n.length; c++) {
                var i = n[c];
                0 !== a[i] && (r = !1)
            }
            r && (o.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var r = {},
        c = {
            app: 0
        },
        a = {
            app: 0
        },
        o = [];

    function i(e) {
        return s.p + "js/" + ({} [e] || e) + "." + {
            "chunk-3fbcdb4e": "1f8cac50",
            "chunk-5ddd9c87": "8724a766",
            "chunk-6decf1d3": "558ed71a",
            "chunk-76e08056": "09705369",
            "chunk-9c52731a": "b032d31b",
            "chunk-e4c2b18c": "6c822886"
        } [e] + ".js"
    }

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function (e) {
        var t = [],
            n = {
                "chunk-5ddd9c87": 1,
                "chunk-6decf1d3": 1,
                "chunk-76e08056": 1,
                "chunk-9c52731a": 1,
                "chunk-e4c2b18c": 1
            };
        c[e] ? t.push(c[e]) : 0 !== c[e] && n[e] && t.push(c[e] = new Promise((function (t, n) {
            for (var r = "css/" + ({} [e] || e) + "." + {
                    "chunk-3fbcdb4e": "31d6cfe0",
                    "chunk-5ddd9c87": "10105352",
                    "chunk-6decf1d3": "1291fc4f",
                    "chunk-76e08056": "6d447c54",
                    "chunk-9c52731a": "72e2b819",
                    "chunk-e4c2b18c": "447c5e00"
                } [e] + ".css", a = s.p + r, o = document.getElementsByTagName("link"), i = 0; i < o.length; i++) {
                var u = o[i],
                    d = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (d === r || d === a)) return t()
            }
            var l = document.getElementsByTagName("style");
            for (i = 0; i < l.length; i++) {
                u = l[i], d = u.getAttribute("data-href");
                if (d === r || d === a) return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet", f.type = "text/css", f.onload = t, f.onerror = function (t) {
                var r = t && t.target && t.target.src || a,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = r, delete c[e], f.parentNode.removeChild(f), n(o)
            }, f.href = a;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(f)
        })).then((function () {
            c[e] = 0
        })));
        var r = a[e];
        if (0 !== r)
            if (r) t.push(r[2]);
            else {
                var o = new Promise((function (t, n) {
                    r = a[e] = [t, n]
                }));
                t.push(r[2] = o);
                var u, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.src = i(e);
                var l = new Error;
                u = function (t) {
                    d.onerror = d.onload = null, clearTimeout(f);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                c = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")", l.name = "ChunkLoadError", l.type = r, l.request = c, n[1](l)
                        }
                        a[e] = void 0
                    }
                };
                var f = setTimeout((function () {
                    u({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = u, document.head.appendChild(d)
            } return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function (e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var l = 0; l < u.length; l++) t(u[l]);
    var f = d;
    o.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    },
    "01e1": function (e, t, n) {},
    "03a3": function (e, t, n) {
        "use strict";
        n("ae66")
    },
    "12c0": function (e, t, n) {},
    "14a0": function (e, t, n) {},
    "3b5d": function (e, t, n) {},
    "3ec8": function (e, t, n) {
        "use strict";
        n("cf1f")
    },
    "4cc9": function (e, t, n) {
        "use strict";
        n("d8e2")
    },
    5620: function (e, t, n) {
        "use strict";
        n("01e1")
    },
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("d3b7"), n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var r = n("7a23"),
            c = n("6c02"),
            a = Object(r["L"])("data-v-49f424ca");
        Object(r["v"])("data-v-49f424ca");
        var o = {
                class: "controls"
            },
            i = Object(r["h"])("Refresh"),
            s = Object(r["h"])("Login to Register as Coach"),
            u = Object(r["h"])("Register as Coach"),
            d = {
                key: 0
            },
            l = {
                key: 1
            },
            f = {
                key: 2
            };
        Object(r["t"])();
        var h = a((function (e, t, n, c, h, b) {
                var p = Object(r["A"])("base-dialog"),
                    j = Object(r["A"])("coach-filter"),
                    m = Object(r["A"])("base-button"),
                    O = Object(r["A"])("base-spinner"),
                    g = Object(r["A"])("coach-item"),
                    v = Object(r["A"])("base-card");
                return Object(r["s"])(), Object(r["f"])("div", null, [Object(r["i"])(p, {
                    show: !!h.error,
                    title: "An error occurred!",
                    onClose: b.handleError
                }, {
                    default: a((function () {
                        return [Object(r["i"])("p", null, Object(r["D"])(h.error), 1)]
                    })),
                    _: 1
                }, 8, ["show", "onClose"]), Object(r["i"])("section", null, [Object(r["i"])(j, {
                    onChangeFilter: b.setFilters
                }, null, 8, ["onChangeFilter"])]), Object(r["i"])("section", null, [Object(r["i"])(v, null, {
                    default: a((function () {
                        return [Object(r["i"])("div", o, [Object(r["i"])(m, {
                            mode: "outline",
                            onClick: t[1] || (t[1] = function (e) {
                                return b.loadCoaches(!0)
                            })
                        }, {
                            default: a((function () {
                                return [i]
                            })),
                            _: 1
                        }), b.isLoggedIn ? Object(r["g"])("", !0) : (Object(r["s"])(), Object(r["f"])(m, {
                            key: 0,
                            link: "",
                            to: "/auth?redirect=register"
                        }, {
                            default: a((function () {
                                return [s]
                            })),
                            _: 1
                        })), !b.isLoggedIn || b.isCoach || h.isLoading ? Object(r["g"])("", !0) : (Object(r["s"])(), Object(r["f"])(m, {
                            key: 1,
                            link: "",
                            to: "/register"
                        }, {
                            default: a((function () {
                                return [u]
                            })),
                            _: 1
                        }))]), h.isLoading ? (Object(r["s"])(), Object(r["f"])("div", d, [Object(r["i"])(O)])) : b.hasCoaches ? (Object(r["s"])(), Object(r["f"])("ul", l, [(Object(r["s"])(!0), Object(r["f"])(r["a"], null, Object(r["y"])(b.filteredCoaches, (function (e) {
                            return Object(r["s"])(), Object(r["f"])(g, {
                                key: e.id,
                                id: e.id,
                                "first-name": e.firstName,
                                "last-name": e.lastName,
                                rate: e.hourlyRate,
                                areas: e.areas
                            }, null, 8, ["id", "first-name", "last-name", "rate", "areas"])
                        })), 128))])) : (Object(r["s"])(), Object(r["f"])("h3", f, "No coaches found."))]
                    })),
                    _: 1
                })])])
            })),
            b = (n("4de4"), n("caad"), n("2532"), n("96cf"), n("1da1")),
            p = Object(r["L"])("data-v-6e5ce3ed");
        Object(r["v"])("data-v-6e5ce3ed");
        var j = {
                class: "actions"
            },
            m = Object(r["h"])("Contact"),
            O = Object(r["h"])("View Details");
        Object(r["t"])();
        var g = p((function (e, t, n, c, a, o) {
                var i = Object(r["A"])("base-badge"),
                    s = Object(r["A"])("base-button");
                return Object(r["s"])(), Object(r["f"])("li", null, [Object(r["i"])("h3", null, Object(r["D"])(o.fullName), 1), Object(r["i"])("h4", null, "$" + Object(r["D"])(n.rate) + "/hour", 1), Object(r["i"])("div", null, [(Object(r["s"])(!0), Object(r["f"])(r["a"], null, Object(r["y"])(n.areas, (function (e) {
                    return Object(r["s"])(), Object(r["f"])(i, {
                        key: e,
                        type: e,
                        title: e
                    }, null, 8, ["type", "title"])
                })), 128))]), Object(r["i"])("div", j, [Object(r["i"])(s, {
                    mode: "outline",
                    link: "",
                    to: o.coachContactLink
                }, {
                    default: p((function () {
                        return [m]
                    })),
                    _: 1
                }, 8, ["to"]), Object(r["i"])(s, {
                    link: "",
                    to: o.coachDetailsLink
                }, {
                    default: p((function () {
                        return [O]
                    })),
                    _: 1
                }, 8, ["to"])])])
            })),
            v = {
                props: ["id", "firstName", "lastName", "rate", "areas"],
                computed: {
                    fullName: function () {
                        return this.firstName + " " + this.lastName
                    },
                    coachContactLink: function () {
                        return this.$route.path + "/" + this.id + "/contact"
                    },
                    coachDetailsLink: function () {
                        return this.$route.path + "/" + this.id
                    }
                }
            };
        n("f6e9");
        v.render = g, v.__scopeId = "data-v-6e5ce3ed";
        var k = v,
            y = Object(r["L"])("data-v-5f5d50f2");
        Object(r["v"])("data-v-5f5d50f2");
        var w = Object(r["i"])("h2", null, "Find Your Coach", -1),
            I = {
                class: "filter-option"
            },
            C = Object(r["i"])("label", {
                for: "frontend"
            }, "Frontend", -1),
            L = {
                class: "filter-option"
            },
            A = Object(r["i"])("label", {
                for: "backend"
            }, "Backend", -1),
            _ = {
                class: "filter-option"
            },
            x = Object(r["i"])("label", {
                for: "career"
            }, "Career", -1);
        Object(r["t"])();
        var R = y((function (e, t, n, c, a, o) {
                var i = Object(r["A"])("base-card");
                return Object(r["s"])(), Object(r["f"])(i, null, {
                    default: y((function () {
                        return [w, Object(r["i"])("span", I, [Object(r["i"])("input", {
                            type: "checkbox",
                            id: "frontend",
                            checked: "",
                            onChange: t[1] || (t[1] = function () {
                                return o.setFilter && o.setFilter.apply(o, arguments)
                            })
                        }, null, 32), C]), Object(r["i"])("span", L, [Object(r["i"])("input", {
                            type: "checkbox",
                            id: "backend",
                            checked: "",
                            onChange: t[2] || (t[2] = function () {
                                return o.setFilter && o.setFilter.apply(o, arguments)
                            })
                        }, null, 32), A]), Object(r["i"])("span", _, [Object(r["i"])("input", {
                            type: "checkbox",
                            id: "career",
                            checked: "",
                            onChange: t[3] || (t[3] = function () {
                                return o.setFilter && o.setFilter.apply(o, arguments)
                            })
                        }, null, 32), x])]
                    })),
                    _: 1
                })
            })),
            F = n("ade3"),
            q = n("5530"),
            S = {
                emits: ["change-filter"],
                data: function () {
                    return {
                        filters: {
                            frontend: !0,
                            backend: !0,
                            career: !0
                        }
                    }
                },
                methods: {
                    setFilter: function (e) {
                        var t = e.target.id,
                            n = e.target.checked,
                            r = Object(q["a"])(Object(q["a"])({}, this.filters), {}, Object(F["a"])({}, t, n));
                        this.filters = r, this.$emit("change-filter", r)
                    }
                }
            };
        n("ffa3");
        S.render = R, S.__scopeId = "data-v-5f5d50f2";
        var N = S,
            E = {
                components: {
                    CoachItem: k,
                    CoachFilter: N
                },
                data: function () {
                    return {
                        isLoading: !1,
                        error: null,
                        activeFilters: {
                            frontend: !0,
                            backend: !0,
                            career: !0
                        }
                    }
                },
                computed: {
                    isLoggedIn: function () {
                        return this.$store.getters.isAuthenticated
                    },
                    isCoach: function () {
                        return this.$store.getters["coaches/isCoach"]
                    },
                    filteredCoaches: function () {
                        var e = this,
                            t = this.$store.getters["coaches/coaches"];
                        return t.filter((function (t) {
                            return !(!e.activeFilters.frontend || !t.areas.includes("frontend")) || (!(!e.activeFilters.backend || !t.areas.includes("backend")) || !(!e.activeFilters.career || !t.areas.includes("career")))
                        }))
                    },
                    hasCoaches: function () {
                        return !this.isLoading && this.$store.getters["coaches/hasCoaches"]
                    }
                },
                created: function () {
                    this.loadCoaches()
                },
                methods: {
                    setFilters: function (e) {
                        this.activeFilters = e
                    },
                    loadCoaches: function () {
                        var e = arguments,
                            t = this;
                        return Object(b["a"])(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return r = e.length > 0 && void 0 !== e[0] && e[0], t.isLoading = !0, n.prev = 2, n.next = 5, t.$store.dispatch("coaches/loadCoaches", {
                                            forceRefresh: r
                                        });
                                    case 5:
                                        n.next = 10;
                                        break;
                                    case 7:
                                        n.prev = 7, n.t0 = n["catch"](2), t.error = n.t0.message || "Something went wrong!";
                                    case 10:
                                        t.isLoading = !1;
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [2, 7]
                            ])
                        })))()
                    },
                    handleError: function () {
                        this.error = null
                    }
                }
            };
        n("ea68");
        E.render = h, E.__scopeId = "data-v-49f424ca";
        var T = E,
            P = Object(r["i"])("h2", null, "Page not found", -1),
            $ = Object(r["h"])(" This page could not be found - maybe check out all our "),
            D = Object(r["h"])("coaches"),
            U = Object(r["h"])(". ");

        function B(e, t) {
            var n = Object(r["A"])("router-link"),
                c = Object(r["A"])("base-card");
            return Object(r["s"])(), Object(r["f"])("section", null, [Object(r["i"])(c, null, {
                default: Object(r["I"])((function () {
                    return [P, Object(r["i"])("p", null, [$, Object(r["i"])(n, {
                        to: "/coaches"
                    }, {
                        default: Object(r["I"])((function () {
                            return [D]
                        })),
                        _: 1
                    }), U])]
                })),
                _: 1
            })])
        }
        const J = {};
        J.render = B;
        var z, M = J,
            K = n("5502"),
            G = {
                registerCoach: function (e, t) {
                    e.coaches.push(t)
                },
                setCoaches: function (e, t) {
                    e.coaches = t
                },
                setFetchTimestamp: function (e) {
                    e.lastFetch = (new Date).getTime()
                }
            },
            H = (n("a4d3"), n("e01a"), {
                registerCoach: function (e, t) {
                    return Object(b["a"])(regeneratorRuntime.mark((function n() {
                        var r, c, a, o;
                        return regeneratorRuntime.wrap((function (n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return r = e.rootGetters.userId, c = {
                                        firstName: t.first,
                                        lastName: t.last,
                                        description: t.desc,
                                        hourlyRate: t.rate,
                                        areas: t.areas
                                    }, a = e.rootGetters.token, n.next = 5, fetch("https://vue-demo-1c5df-default-rtdb.firebaseio.com/coaches/".concat(r, ".json?auth=") + a, {
                                        method: "PUT",
                                        body: JSON.stringify(c)
                                    });
                                case 5:
                                    o = n.sent, o.ok, e.commit("registerCoach", Object(q["a"])(Object(q["a"])({}, c), {}, {
                                        id: r
                                    }));
                                case 8:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                loadCoaches: function (e, t) {
                    return Object(b["a"])(regeneratorRuntime.mark((function n() {
                        var r, c, a, o, i, s;
                        return regeneratorRuntime.wrap((function (n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    if (t.forceRefresh || e.getters.shouldUpdate) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    return n.next = 4, fetch("https://vue-demo-1c5df-default-rtdb.firebaseio.com/coaches.json");
                                case 4:
                                    return r = n.sent, n.next = 7, r.json();
                                case 7:
                                    if (c = n.sent, r.ok) {
                                        n.next = 11;
                                        break
                                    }
                                    throw a = new Error(c.message || "Failed to fetch!"), a;
                                case 11:
                                    for (i in o = [], c) s = {
                                        id: i,
                                        firstName: c[i].firstName,
                                        lastName: c[i].lastName,
                                        description: c[i].description,
                                        hourlyRate: c[i].hourlyRate,
                                        areas: c[i].areas
                                    }, o.push(s);
                                    e.commit("setCoaches", o), e.commit("setFetchTimestamp");
                                case 15:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                }
            }),
            Z = (n("45fc"), {
                coaches: function (e) {
                    return e.coaches
                },
                hasCoaches: function (e) {
                    return e.coaches && e.coaches.length > 0
                },
                isCoach: function (e, t, n, r) {
                    var c = t.coaches,
                        a = r.userId;
                    return c.some((function (e) {
                        return e.id === a
                    }))
                },
                shouldUpdate: function (e) {
                    var t = e.lastFetch;
                    if (!t) return !0;
                    var n = (new Date).getTime();
                    return (n - t) / 1e3 > 60
                }
            }),
            V = {
                namespaced: !0,
                state: function () {
                    return {
                        lastFetch: null,
                        coaches: [{
                            id: "c1",
                            firstName: "Maximilian",
                            lastName: "Schwarzmüller",
                            areas: ["frontend", "backend", "career"],
                            description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                            hourlyRate: 30
                        }, {
                            id: "c2",
                            firstName: "Julie",
                            lastName: "Jones",
                            areas: ["frontend", "career"],
                            description: "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
                            hourlyRate: 30
                        }]
                    }
                },
                mutations: G,
                actions: H,
                getters: Z
            },
            W = {
                addRequest: function (e, t) {
                    e.requests.push(t)
                },
                setRequests: function (e, t) {
                    e.requests = t
                }
            },
            Y = (n("b0c0"), {
                contactCoach: function (e, t) {
                    return Object(b["a"])(regeneratorRuntime.mark((function n() {
                        var r, c, a, o;
                        return regeneratorRuntime.wrap((function (n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return r = {
                                        userEmail: t.email,
                                        message: t.message
                                    }, n.next = 3, fetch("https://vue-demo-1c5df-default-rtdb.firebaseio.com/requests/".concat(t.coachId, ".json"), {
                                        method: "POST",
                                        body: JSON.stringify(r)
                                    });
                                case 3:
                                    return c = n.sent, n.next = 6, c.json();
                                case 6:
                                    if (a = n.sent, c.ok) {
                                        n.next = 10;
                                        break
                                    }
                                    throw o = new Error(a.message || "Failed to send request."), o;
                                case 10:
                                    r.id = a.name, r.coachId = t.coachId, e.commit("addRequest", r);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                fetchRequests: function (e) {
                    return Object(b["a"])(regeneratorRuntime.mark((function t() {
                        var n, r, c, a, o, i, s, u;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.rootGetters.userId, r = e.rootGetters.token, t.next = 4, fetch("https://vue-demo-1c5df-default-rtdb.firebaseio.com/requests/".concat(n, ".json?auth=") + r);
                                case 4:
                                    return c = t.sent, t.next = 7, c.json();
                                case 7:
                                    if (a = t.sent, c.ok) {
                                        t.next = 11;
                                        break
                                    }
                                    throw o = new Error(a.message || "Failed to fetch requests."), o;
                                case 11:
                                    for (s in i = [], a) u = {
                                        id: s,
                                        coachId: n,
                                        userEmail: a[s].userEmail,
                                        message: a[s].message
                                    }, i.push(u);
                                    e.commit("setRequests", i);
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }),
            Q = {
                requests: function (e, t, n, r) {
                    var c = r.userId;
                    return e.requests.filter((function (e) {
                        return e.coachId === c
                    }))
                },
                hasRequests: function (e, t) {
                    return t.requests && t.requests.length > 0
                }
            },
            X = {
                namespaced: !0,
                state: function () {
                    return {
                        requests: []
                    }
                },
                mutations: W,
                actions: Y,
                getters: Q
            },
            ee = {
                setUser: function (e, t) {
                    e.token = t.token, e.userId = t.userId, e.didAutoLogout = !1
                },
                setAutoLogout: function (e) {
                    e.didAutoLogout = !0
                }
            },
            te = {
                login: function (e, t) {
                    return Object(b["a"])(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function (n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.dispatch("auth", Object(q["a"])(Object(q["a"])({}, t), {}, {
                                        mode: "login"
                                    })));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                signup: function (e, t) {
                    return Object(b["a"])(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function (n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", e.dispatch("auth", Object(q["a"])(Object(q["a"])({}, t), {}, {
                                        mode: "signup"
                                    })));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                auth: function (e, t) {
                    return Object(b["a"])(regeneratorRuntime.mark((function n() {
                        var r, c, a, o, i, s, u;
                        return regeneratorRuntime.wrap((function (n) {
                            while (1) switch (n.prev = n.next) {
                                case 0:
                                    return r = t.mode, c = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCwf1dc3KpVEPck-ZdLmHK6urt5FPBZNc", "signup" === r && (c = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCwf1dc3KpVEPck-ZdLmHK6urt5FPBZNc"), n.next = 5, fetch(c, {
                                        method: "POST",
                                        body: JSON.stringify({
                                            email: t.email,
                                            password: t.password,
                                            returnSecureToken: !0
                                        })
                                    });
                                case 5:
                                    return a = n.sent, n.next = 8, a.json();
                                case 8:
                                    if (o = n.sent, a.ok) {
                                        n.next = 12;
                                        break
                                    }
                                    throw i = new Error(o.message || "Failed to authenticate. Check your login data."), i;
                                case 12:
                                    s = 1e3 * +o.expiresIn, u = (new Date).getTime() + s, localStorage.setItem("token", o.idToken), localStorage.setItem("userId", o.localId), localStorage.setItem("tokenExpiration", u), z = setTimeout((function () {
                                        e.dispatch("autoLogout")
                                    }), s), e.commit("setUser", {
                                        token: o.idToken,
                                        userId: o.localId
                                    });
                                case 19:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                tryLogin: function (e) {
                    var t = localStorage.getItem("token"),
                        n = localStorage.getItem("userId"),
                        r = localStorage.getItem("tokenExpiration"),
                        c = +r - (new Date).getTime();
                    c < 0 || (z = setTimeout((function () {
                        e.dispatch("autoLogout")
                    }), c), t && n && e.commit("setUser", {
                        token: t,
                        userId: n
                    }))
                },
                logout: function (e) {
                    localStorage.removeItem("token"), localStorage.removeItem("userId"), localStorage.removeItem("tokenExpiration"), clearTimeout(z), e.commit("setUser", {
                        token: null,
                        userId: null
                    })
                },
                autoLogout: function (e) {
                    e.dispatch("logout"), e.commit("setAutoLogout")
                }
            },
            ne = {
                userId: function (e) {
                    return e.userId
                },
                token: function (e) {
                    return e.token
                },
                isAuthenticated: function (e) {
                    return !!e.token
                },
                didAutoLogout: function (e) {
                    return e.didAutoLogout
                }
            },
            re = {
                state: function () {
                    return {
                        userId: null,
                        token: null,
                        didAutoLogout: !1
                    }
                },
                mutations: ee,
                actions: te,
                getters: ne
            },
            ce = Object(K["a"])({
                modules: {
                    coaches: V,
                    requests: X,
                    auth: re
                }
            }),
            ae = ce,
            oe = Object(r["j"])((function () {
                return n.e("chunk-3fbcdb4e").then(n.bind(null, "591c"))
            })),
            ie = Object(r["j"])((function () {
                return n.e("chunk-e4c2b18c").then(n.bind(null, "f7b3"))
            })),
            se = Object(r["j"])((function () {
                return n.e("chunk-6decf1d3").then(n.bind(null, "a980"))
            })),
            ue = Object(r["j"])((function () {
                return n.e("chunk-9c52731a").then(n.bind(null, "416f"))
            })),
            de = Object(r["j"])((function () {
                return n.e("chunk-76e08056").then(n.bind(null, "212c"))
            })),
            le = Object(c["a"])({
                history: Object(c["b"])(),
                routes: [{
                    path: "/",
                    redirect: "/coaches"
                }, {
                    path: "/coaches",
                    component: T
                }, {
                    path: "/coaches/:id",
                    component: oe,
                    props: !0,
                    children: [{
                        path: "contact",
                        component: se
                    }]
                }, {
                    path: "/register",
                    component: ie,
                    meta: {
                        requiresAuth: !0
                    }
                }, {
                    path: "/requests",
                    component: ue,
                    meta: {
                        requiresAuth: !0
                    }
                }, {
                    path: "/auth",
                    component: de,
                    meta: {
                        requiresUnauth: !0
                    }
                }, {
                    path: "/:notFound(.*)",
                    component: M
                }]
            });
        le.beforeEach((function (e, t, n) {
            e.meta.requiresAuth && !ae.getters.isAuthenticated ? n("/auth") : e.meta.requiresUnauth && ae.getters.isAuthenticated ? n("/coaches") : n()
        }));
        var fe = le;

        function he(e, t, n, c, a, o) {
            var i = Object(r["A"])("the-header"),
                s = Object(r["A"])("router-view");
            return Object(r["s"])(), Object(r["f"])(r["a"], null, [Object(r["i"])(i), Object(r["i"])(s, null, {
                default: Object(r["I"])((function (e) {
                    return [Object(r["i"])(r["c"], {
                        name: "route",
                        mode: "out-in"
                    }, {
                        default: Object(r["I"])((function () {
                            return [(Object(r["s"])(), Object(r["f"])(Object(r["B"])(e.Component)))]
                        })),
                        _: 2
                    }, 1024)]
                })),
                _: 1
            })], 64)
        }
        n("ac1f"), n("5319");
        var be = Object(r["L"])("data-v-6a38bc36");
        Object(r["v"])("data-v-6a38bc36");
        var pe = Object(r["h"])("Find a Coach"),
            je = Object(r["h"])("All Coaches"),
            me = {
                key: 0
            },
            Oe = Object(r["h"])("Requests"),
            ge = {
                key: 1
            },
            ve = Object(r["h"])("Login"),
            ke = {
                key: 2
            },
            ye = Object(r["h"])("Logout");
        Object(r["t"])();
        var we = be((function (e, t, n, c, a, o) {
                var i = Object(r["A"])("router-link"),
                    s = Object(r["A"])("base-button");
                return Object(r["s"])(), Object(r["f"])("header", null, [Object(r["i"])("nav", null, [Object(r["i"])("h1", null, [Object(r["i"])(i, {
                    to: "/"
                }, {
                    default: be((function () {
                        return [pe]
                    })),
                    _: 1
                })]), Object(r["i"])("ul", null, [Object(r["i"])("li", null, [Object(r["i"])(i, {
                    to: "/coaches"
                }, {
                    default: be((function () {
                        return [je]
                    })),
                    _: 1
                })]), o.isLoggedIn ? (Object(r["s"])(), Object(r["f"])("li", me, [Object(r["i"])(i, {
                    to: "/requests"
                }, {
                    default: be((function () {
                        return [Oe]
                    })),
                    _: 1
                })])) : (Object(r["s"])(), Object(r["f"])("li", ge, [Object(r["i"])(i, {
                    to: "/auth"
                }, {
                    default: be((function () {
                        return [ve]
                    })),
                    _: 1
                })])), o.isLoggedIn ? (Object(r["s"])(), Object(r["f"])("li", ke, [Object(r["i"])(s, {
                    onClick: o.logout
                }, {
                    default: be((function () {
                        return [ye]
                    })),
                    _: 1
                }, 8, ["onClick"])])) : Object(r["g"])("", !0)])])])
            })),
            Ie = {
                computed: {
                    isLoggedIn: function () {
                        return this.$store.getters.isAuthenticated
                    }
                },
                methods: {
                    logout: function () {
                        this.$store.dispatch("logout"), this.$router.replace("/coaches")
                    }
                }
            };
        n("5620");
        Ie.render = we, Ie.__scopeId = "data-v-6a38bc36";
        var Ce = Ie,
            Le = {
                components: {
                    TheHeader: Ce
                },
                computed: {
                    didAutoLogout: function () {
                        return this.$store.getters.didAutoLogout
                    }
                },
                created: function () {
                    this.$store.dispatch("tryLogin")
                },
                watch: {
                    didAutoLogout: function (e, t) {
                        e && e !== t && this.$router.replace("/coaches")
                    }
                }
            };
        n("03a3");
        Le.render = he;
        var Ae = Le,
            _e = Object(r["L"])("data-v-1f9750d9");
        Object(r["v"])("data-v-1f9750d9");
        var xe = {
            class: "card"
        };
        Object(r["t"])();
        var Re = _e((function (e, t) {
            return Object(r["s"])(), Object(r["f"])("div", xe, [Object(r["z"])(e.$slots, "default")])
        }));
        n("4cc9");
        const Fe = {};
        Fe.render = Re, Fe.__scopeId = "data-v-1f9750d9";
        var qe = Fe,
            Se = (n("9911"), Object(r["L"])("data-v-2b151212")),
            Ne = Se((function (e, t, n, c, a, o) {
                var i = Object(r["A"])("router-link");
                return n.link ? (Object(r["s"])(), Object(r["f"])(i, {
                    key: 1,
                    to: n.to,
                    class: n.mode
                }, {
                    default: Se((function () {
                        return [Object(r["z"])(e.$slots, "default")]
                    })),
                    _: 3
                }, 8, ["to", "class"])) : (Object(r["s"])(), Object(r["f"])("button", {
                    key: 0,
                    class: n.mode
                }, [Object(r["z"])(e.$slots, "default")], 2))
            })),
            Ee = {
                props: {
                    mode: {
                        type: String,
                        required: !1,
                        default: null
                    },
                    link: {
                        type: Boolean,
                        required: !1,
                        default: !1
                    },
                    to: {
                        type: String,
                        required: !1,
                        default: "/"
                    }
                }
            };
        n("cf4d");
        Ee.render = Ne, Ee.__scopeId = "data-v-2b151212";
        var Te = Ee,
            Pe = Object(r["L"])("data-v-5de3df1c"),
            $e = Pe((function (e, t, n, c, a, o) {
                return Object(r["s"])(), Object(r["f"])("span", {
                    class: ["badge", n.type]
                }, Object(r["D"])(o.text), 3)
            })),
            De = {
                props: ["type", "title"],
                computed: {
                    text: function () {
                        return this.title.toUpperCase()
                    }
                }
            };
        n("b997");
        De.render = $e, De.__scopeId = "data-v-5de3df1c";
        var Ue = De,
            Be = Object(r["L"])("data-v-5147169a");
        Object(r["v"])("data-v-5147169a");
        var Je = {
                class: "spinner"
            },
            ze = Object(r["i"])("div", {
                class: "lds-roller"
            }, [Object(r["i"])("div"), Object(r["i"])("div"), Object(r["i"])("div"), Object(r["i"])("div"), Object(r["i"])("div"), Object(r["i"])("div"), Object(r["i"])("div"), Object(r["i"])("div")], -1);
        Object(r["t"])();
        var Me = Be((function (e, t) {
            return Object(r["s"])(), Object(r["f"])("div", Je, [ze])
        }));
        n("3ec8");
        const Ke = {};
        Ke.render = Me, Ke.__scopeId = "data-v-5147169a";
        var Ge = Ke,
            He = Object(r["j"])((function () {
                return n.e("chunk-5ddd9c87").then(n.bind(null, "ae92"))
            })),
            Ze = Object(r["e"])(Ae);
        Ze.use(fe), Ze.use(ae), Ze.component("base-card", qe), Ze.component("base-button", Te), Ze.component("base-badge", Ue), Ze.component("base-spinner", Ge), Ze.component("base-dialog", He), Ze.mount("#app")
    },
    "80b3": function (e, t, n) {},
    "9c3e": function (e, t, n) {},
    ae66: function (e, t, n) {},
    b997: function (e, t, n) {
        "use strict";
        n("9c3e")
    },
    cf1f: function (e, t, n) {},
    cf4d: function (e, t, n) {
        "use strict";
        n("3b5d")
    },
    d8e2: function (e, t, n) {},
    ea68: function (e, t, n) {
        "use strict";
        n("80b3")
    },
    f6e9: function (e, t, n) {
        "use strict";
        n("14a0")
    },
    ffa3: function (e, t, n) {
        "use strict";
        n("12c0")
    }
});
//# sourceMappingURL=app.c3b55b13.js.map