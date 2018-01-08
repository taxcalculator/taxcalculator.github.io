! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}({
    "+BZz": function(t, e, n) {
        var r = n("VU/8")(n("YhJH"), n("Qpra"), !1, function(t) {
            n("jvFi")
        }, "data-v-7962b63f", null);
        t.exports = r.exports
    },
    "/tCJ": function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "col-sm-12 col-md-12 right-sidebar"
                }, [n("div", [n("div", {
                    staticClass: "deduction"
                }, [n("h5", {
                    staticClass: "col-title"
                }, [t._v("Buwanang Kontribusyon")]), n("br"), t._v(" "), "married" === t.$root.singleOrMarried ? n("h5", {
                    staticClass: "col-title income-title"
                }, [t._v("Income 1")]) : t._e(), t._v(" "), n("table", {
                    staticClass: "table table-hover deduction-sample"
                }, [n("tbody", [n("tr", [n("td", [t._v(t._s("single" === t.$root.singleOrMarried ? t.$root.results.sssOrGsis : t.$root.results.sssOrGsis2) + "\n              "), n("span", {
                    staticClass: "currency"
                }, [t._v(" " + t._s(t.$root.formatSign(t.$root.results.deductions.sss)) + " " + t._s(t.$root.results.deductions.sss.replace("-", "")))])])]), t._v(" "), n("tr", [n("td", [t._v("PhilHealth\n              "), n("span", {
                    staticClass: "currency"
                }, [t._v(t._s(t.$root.formatSign(t.$root.results.deductions.philHealth)) + " " + t._s(t.$root.results.deductions.philHealth.replace("-", "")))])])]), t._v(" "), n("tr", {
                    staticClass: "separation"
                }, [n("td", [t._v("Pagibig\n              "), n("span", {
                    staticClass: "currency"
                }, [t._v(" " + t._s(t.$root.formatSign(t.$root.results.deductions.pagIbigFund)) + " " + t._s(t.$root.results.deductions.pagIbigFund.replace("-", "")))])])])])])])]), t._v(" "), "married" === t.$root.singleOrMarried ? n("div", [n("div", {
                    staticClass: "deduction"
                }, [n("h5", {
                    staticClass: "col-title income-title"
                }, [t._v("Income 2")]), t._v(" "), n("table", {
                    staticClass: "table table-hover deduction-sample"
                }, [n("tbody", [n("tr", [n("td", [t._v(t._s(t.$root.results.sssOrGsis3) + "\n              "), n("span", {
                    staticClass: "currency"
                }, [t._v(" " + t._s(t.$root.formatSign(t.$root.results.deductions2.sss)) + " " + t._s(t.$root.results.deductions2.sss.replace("-", "")))])])]), t._v(" "), n("tr", [n("td", [t._v("PhilHealth\n              "), n("span", {
                    staticClass: "currency"
                }, [t._v(" " + t._s(t.$root.formatSign(t.$root.results.deductions2.philHealth)) + " " + t._s(t.$root.results.deductions2.philHealth.replace("-", "")))])])]), t._v(" "), n("tr", {
                    staticClass: "separation"
                }, [n("td", [t._v("Pagibig\n              "), n("span", {
                    staticClass: "currency"
                }, [t._v(" " + t._s(t.$root.formatSign(t.$root.results.deductions2.pagIbigFund)) + " " + t._s(t.$root.results.deductions2.pagIbigFund.replace("-", "")))])])])])])])]) : t._e()])
            },
            staticRenderFns: []
        }
    },
    0: function(t, e, n) {
        n("F1kH"), t.exports = n("KqWi")
    },
    "0/Yz": function(t, e, n) {
        var r = n("VU/8")(null, n("KD00"), !1, function(t) {
            n("8HuN")
        }, "data-v-711b68fd", null);
        t.exports = r.exports
    },
    "0PZG": function(t, e, n) {
        var r = n("VU/8")(null, n("J0yv"), !1, null, null, null);
        t.exports = r.exports
    },
    "162o": function(t, e, n) {
        var r = Function.prototype.apply;
        e.setTimeout = function() {
            return new o(r.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function() {
            return new o(r.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function(t) {
            t && t.close()
        };

        function o(t, e) {
            this._id = t, this._clearFn = e
        }
        o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n("mypn"), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
    },
    "21It": function(t, e, n) {
        "use strict";
        var r = n("FtD3");
        t.exports = function(t, e, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
        }
    },
    "2K2Z": function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".dependents[data-v-ab149812]{margin-bottom:2rem}", ""])
    },
    "4Irq": function(t, e, n) {
        var r = n("VU/8")(n("IT2j"), n("vbqv"), !1, function(t) {
            n("wO7Y")
        }, "data-v-2f10e2f4", null);
        t.exports = r.exports
    },
    "4LaN": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "Simplert",
            props: {
                useRadius: {
                    type: Boolean,
                    default: !0
                },
                useIcon: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    DEFAULT_TYPE: "info",
                    DEFAULT_BTN_CLOSE_TEXT: "Close",
                    DEFAULT_BTN_CONFIRM_TEXT: "Confirm",
                    INVALID_TYPE: "INVALID_TYPE",
                    showSimplert: !1,
                    title: "",
                    message: "",
                    type: this.DEFAULT_TYPE,
                    customClass: "",
                    customIconUrl: "",
                    onOpen: null,
                    customCloseBtnText: this.DEFAULT_BTN_CLOSE_TEXT,
                    customCloseBtnClass: "",
                    onClose: null,
                    useConfirmBtn: !1,
                    customConfirmBtnText: this.DEFAULT_BTN_CONFIRM_TEXT,
                    customConfirmBtnClass: "",
                    onConfirm: null,
                    disableOverlayClick: !1,
                    hideAllButton: !1,
                    showXclose: !1
                }
            },
            computed: {
                classSimplert: function() {
                    var t = this.customClass;
                    return this.showSimplert && (t = this.customClass + " simplert--shown"), t
                },
                classContent: function() {
                    var t = "";
                    return this.useRadius && (t = "simplert__content--radius"), t
                },
                classBtnClose: function() {
                    var t = "simplert__close";
                    return this.useRadius && (t = "simplert__close simplert__close--radius"), this.customCloseBtnClass && (t = this.customCloseBtnClass), t
                },
                classBtnConfirm: function() {
                    var t = "simplert__confirm";
                    return this.useRadius && (t = "simplert__confirm simplert__confirm--radius"), this.customConfirmBtnClass && (t = this.customConfirmBtnClass), t
                }
            },
            methods: {
                justCloseSimplert: function() {
                    this.showSimplert = !1
                },
                closeOverlay: function(t) {
                    t.target.className.indexOf("simplert--shown") > 0 && !this.disableOverlayClick && (this.showSimplert = !1)
                },
                whenConfirm: function(t) {
                    t.preventDefault(), this.showSimplert = !1, null !== this.onConfirm && this.onConfirm()
                },
                closeSimplert: function(t) {
                    t.preventDefault(), this.showSimplert = !1, null !== this.onClose && this.onClose()
                },
                openSimplert: function(t) {
                    void 0 !== t && (this.showSimplert = !0, this.title = t.title, void 0 !== t.message ? this.message = t.message : this.message = "", void 0 !== t.type ? this.type = t.type : this.type = this.DEFAULT_TYPE, void 0 !== t.customClass ? this.customClass = t.customClass : this.customClass = "", void 0 !== t.customIconUrl && "" !== t.customCloseBtnText ? (this.customIconUrl = t.customIconUrl, this.type = this.INVALID_TYPE) : this.customIconUrl = "", void 0 !== t.customCloseBtnText && "" !== t.customCloseBtnText ? this.customCloseBtnText = t.customCloseBtnText : this.customCloseBtnText = this.DEFAULT_BTN_CLOSE_TEXT, void 0 !== t.customCloseBtnClass ? this.customCloseBtnClass = t.customCloseBtnClass : this.customCloseBtnClass = "", void 0 !== t.onClose && null !== t.onClose ? this.onClose = t.onClose : this.onClose = null, void 0 !== t.useConfirmBtn ? this.useConfirmBtn = t.useConfirmBtn : this.useConfirmBtn = !1, void 0 !== t.customConfirmBtnText && "" !== t.customConfirmBtnText ? this.customConfirmBtnText = t.customConfirmBtnText : this.customConfirmBtnText = this.DEFAULT_BTN_CONFIRM_TEXT, void 0 !== t.customConfirmBtnClass ? this.customConfirmBtnClass = t.customConfirmBtnClass : this.customConfirmBtnClass = "", void 0 !== t.onConfirm && null !== t.onConfirm ? this.onConfirm = t.onConfirm : this.onConfirm = null, void 0 !== t.disableOverlayClick ? this.disableOverlayClick = t.disableOverlayClick : this.disableOverlayClick = !1, void 0 !== t.hideAllButton ? this.hideAllButton = t.hideAllButton : this.hideAllButton = !1, void 0 !== t.showXclose ? this.showXclose = t.showXclose : this.showXclose = !1, void 0 !== t.onOpen ? this.onOpen = t.onOpen : this.onOpen = null, null !== this.onOpen && this.onOpen())
                }
            }
        }
    },
    "4rIW": function(t, e, n) {
        var r = n("ET9U");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("d005e77e", r, !0)
    },
    "5Uzz": function(t, e, n) {
        var r = n("VU/8")(n("h/2W"), n("6T+k"), !1, function(t) {
            n("NDrm")
        }, null, null);
        t.exports = r.exports
    },
    "5VQ+": function(t, e, n) {
        "use strict";
        var r = n("cGG2");
        t.exports = function(t, e) {
            r.forEach(t, function(n, r) {
                r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
            })
        }
    },
    "5jDN": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = a(n("wapp")),
            o = a(n("RIzH")),
            i = a(n("BXwK")),
            s = a(n("0/Yz"));

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            components: {
                ComputationFormSingle: r.default,
                ComputationFormMarried: o.default,
                ComputationResultDeduction: i.default,
                ComputationResultOverall: s.default
            },
            computed: {
                singleIsDisabled: function() {
                    return !0 === this.$root.loading && "married" === this.$root.singleOrMarried
                },
                marriedIsDisabled: function() {
                    return !0 === this.$root.loading && "single" === this.$root.singleOrMarried
                }
            },
            methods: {
                switchForm: function(t) {
                    this.$root.loading || (this.$root.singleOrMarried = t)
                }
            }
        }
    },
    "6Muv": function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, "label[data-v-51aa6ba8]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.col-sm-12[data-v-51aa6ba8]{margin-bottom:1em}", ""])
    },
    "6T+k": function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "col-sm-12 col-md-6 right-content"
                }, [n("h2", {
                    staticClass: "text-capitalize"
                }, [t._v("Frequently Asked Questions")]), t._v(" "), n("div", {
                    staticClass: "col-sm-6 btndiv"
                }, [n("div", {
                    staticClass: "row"
                }, [n("button", {
                    staticClass: "col-sm-12 btn faq-btn faq1",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.answer("faq1")
                        }
                    }
                }, [t._v("\n                    Who will benefit from the adjustments in PIT?\n\t            ")]), t._v(" "), n("button", {
                    staticClass: "col-sm-12 btn faq-btn faq2",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.answer("faq2")
                        }
                    }
                }, [t._v("\n                    What about our bonuses and other benefits, will they be exempt from taxes?\n\t            ")]), t._v(" "), n("button", {
                    staticClass: "col-sm-12 btn faq-btn faq3",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.answer("faq3")
                        }
                    }
                }, [t._v("\n                    Why do we need to impose additional fuel excise tax?\n\t        \t")])])]), t._v(" "), n("div", {
                    staticClass: "col-sm-6 btndiv"
                }, [n("button", {
                    staticClass: "col-sm-12 btn faq-btn faq4",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.answer("faq4")
                        }
                    }
                }, [t._v("\n                Why can’t the VAT rate be lowered?\n\t        ")]), t._v(" "), n("button", {
                    staticClass: "col-sm-12 btn faq-btn faq5",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.answer("faq5")
                        }
                    }
                }, [n("p", {
                    staticClass: "apply-margin"
                }, [t._v("Why do we need to adjust auto excise?")])]), t._v(" "), n("button", {
                    staticClass: "col-sm-12 btn faq-btn faq6",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.answer("faq6")
                        }
                    }
                }, [t._v("\n                Why tax SSBs and not sugar broadly?\n\t    \t")])])])
            },
            staticRenderFns: []
        }
    },
    "7GwW": function(t, e, n) {
        "use strict";
        var r = n("cGG2"),
            o = n("21It"),
            i = n("DQCr"),
            s = n("oJlt"),
            a = n("GHBc"),
            l = n("FtD3"),
            c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n("thJu");
        t.exports = function(t) {
            return new Promise(function(e, u) {
                var f = t.data,
                    d = t.headers;
                r.isFormData(f) && delete d["Content-Type"];
                var p = new XMLHttpRequest,
                    h = "onreadystatechange",
                    m = !1;
                if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || a(t.url) || (p = new window.XDomainRequest, h = "onload", m = !0, p.onprogress = function() {}, p.ontimeout = function() {}), t.auth) {
                    var v = t.auth.username || "",
                        y = t.auth.password || "";
                    d.Authorization = "Basic " + c(v + ":" + y)
                }
                if (p.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), p.timeout = t.timeout, p[h] = function() {
                        if (p && (4 === p.readyState || m) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                            var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null,
                                r = {
                                    data: t.responseType && "text" !== t.responseType ? p.response : p.responseText,
                                    status: 1223 === p.status ? 204 : p.status,
                                    statusText: 1223 === p.status ? "No Content" : p.statusText,
                                    headers: n,
                                    config: t,
                                    request: p
                                };
                            o(e, u, r), p = null
                        }
                    }, p.onerror = function() {
                        u(l("Network Error", t, null, p)), p = null
                    }, p.ontimeout = function() {
                        u(l("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", p)), p = null
                    }, r.isStandardBrowserEnv()) {
                    var g = n("p1b6"),
                        _ = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? g.read(t.xsrfCookieName) : void 0;
                    _ && (d[t.xsrfHeaderName] = _)
                }
                if ("setRequestHeader" in p && r.forEach(d, function(t, e) {
                        void 0 === f && "content-type" === e.toLowerCase() ? delete d[e] : p.setRequestHeader(e, t)
                    }), t.withCredentials && (p.withCredentials = !0), t.responseType) try {
                    p.responseType = t.responseType
                } catch (e) {
                    if ("json" !== t.responseType) throw e
                }
                "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(t) {
                    p && (p.abort(), u(t), p = null)
                }), void 0 === f && (f = null), p.send(f)
            })
        }
    },
    "7uly": function(t, e, n) {
        var r = n("VU/8")(n("QSvx"), n("UVOT"), !1, null, null, null);
        t.exports = r.exports
    },
    "8HuN": function(t, e, n) {
        var r = n("gRGS");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("117add79", r, !0)
    },
    "8fVv": function(t, e, n) {
        var r = n("VU/8")(n("4LaN"), n("RUkT"), !1, null, null, null);
        t.exports = r.exports
    },
    "9NIR": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o = n("vkkg"),
            i = (r = o, r && r.__esModule ? r : {
                default: r
            });
        e.default = {
            props: {
                value: {
                    default: null
                },
                placeholder: {
                    default: "Monthly Gross Income"
                }
            },
            mounted: function() {
                this.formatValue()
            },
            computed: {
                isDisabled: function() {
                    return "Not Applicable" == this.value
                }
            },
            methods: {
                updateValue: function(t) {
                    var e = i.default.parse(t, this.value);
                    e.warning && (this.$refs.input.value = e.value), this.$emit("input", e.value)
                },
                formatValue: function() {
                    if ("" == this.$refs.input.value) return "";
                    this.$refs.input.value = "P " + i.default.format(this.value).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
                },
                unformatValue: function() {
                    if ("" == this.$refs.input.value) return "";
                    this.$refs.input.value = this.value.toFixed(2)
                }
            }
        }
    },
    "9jV6": function(t, e, n) {
        var r = n("eeHe");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("44b5579c", r, !0)
    },
    "9yL2": function(t, e, n) {
        var r = n("VU/8")(null, n("pkFI"), !1, null, null, null);
        t.exports = r.exports
    },
    Agmk: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "col-sm-12 col-md-4 full-width-tabs"
                }, [n("ul", {
                    staticClass: "nav nav-tabs"
                }, [n("li", {
                    staticClass: "single-or-married",
                    class: ["single" == t.$root.singleOrMarried ? "active" : ""],
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.switchForm("single")
                        }
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.$root.singleOrMarried,
                        expression: "$root.singleOrMarried"
                    }],
                    staticClass: "nod radio-btn",
                    attrs: {
                        type: "radio",
                        id: "single",
                        value: "single",
                        disabled: t.singleIsDisabled
                    },
                    domProps: {
                        checked: t._q(t.$root.singleOrMarried, "single")
                    },
                    on: {
                        change: function(e) {
                            t.$set(t.$root, "singleOrMarried", "single")
                        }
                    }
                }), t._v(" "), n("label", {
                    attrs: {
                        for: "single"
                    }
                }, [t._v(" Ikaw ba ay single?")])]), t._v(" "), n("li", {
                    staticClass: "single-or-married",
                    class: ["married" == t.$root.singleOrMarried ? "active" : ""],
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.switchForm("married")
                        }
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.$root.singleOrMarried,
                        expression: "$root.singleOrMarried"
                    }],
                    staticClass: "nod radio-btn",
                    attrs: {
                        type: "radio",
                        id: "kasal",
                        value: "married",
                        disabled: t.marriedIsDisabled
                    },
                    domProps: {
                        checked: t._q(t.$root.singleOrMarried, "married")
                    },
                    on: {
                        change: function(e) {
                            t.$set(t.$root, "singleOrMarried", "married")
                        }
                    }
                }), t._v(" "), n("label", {
                    attrs: {
                        for: "kasal"
                    }
                }, [t._v(" O kasal?")])])]), t._v(" "), n("div", {
                    staticClass: "tab-content form-tab"
                }, ["single" == t.$root.singleOrMarried ? n("ComputationFormSingle") : n("ComputationFormMarried")], 1), t._v(" "), n("ComputationResultDeduction"), t._v(" "), n("ComputationResultOverall")], 1)
            },
            staticRenderFns: []
        }
    },
    BXwK: function(t, e, n) {
        var r = n("VU/8")(null, n("/tCJ"), !1, function(t) {
            n("bmM8")
        }, "data-v-3fe25826", null);
        t.exports = r.exports
    },
    "Bve+": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = s(n("FxhJ")),
            o = s(n("CM4b")),
            i = s(n("Xk/1"));

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            components: {
                ComputationFormInputDependents: r.default,
                ComputationFormInputSectors: o.default,
                ComputationFormInputIncome: i.default
            },
            data: function() {
                return {
                    oldMonthlyIncome: 0,
                    oldMonthlyIncome2: 0,
                    form: {
                        dependents: 0,
                        monthlyIncome: "",
                        sector: "private",
                        monthlyIncome2: "",
                        sector2: "private"
                    }
                }
            },
            computed: {
                isDisabled: function() {
                    return !!("Not Applicable" == this.form.monthlyIncome && "Not Applicable" == this.form.monthlyIncome2 || this.$root.loading)
                }
            },
            watch: {
                "form.dependents": function(t) {
                    this.$root.resetResults()
                },
                "form.monthlyIncome": function(t) {
                    this.$root.resetResults()
                },
                "form.sector": function(t) {
                    var e = this;
                    this.$root.results.sssOrGsis2 = "government" === t ? "GSIS" : "SSS", "ofw" === t ? (this.$root.$refs.simplert.openSimplert({
                        title: "Tuloy pa rin ang exemption ng mga minimum wage earner at OFW sa Personal Income Tax"
                    }), this.oldMonthlyIncome = this.form.monthlyIncome, this.form.monthlyIncome = "Not Applicable") : "Not Applicable" == this.form.monthlyIncome && (this.form.monthlyIncome = this.oldMonthlyIncome, this.$nextTick(function() {
                        e.$refs.monthlyIncome.formatValue()
                    })), this.$root.resetResults()
                },
                "form.monthlyIncome2": function(t) {
                    this.$root.resetResults()
                },
                "form.sector2": function(t) {
                    var e = this;
                    this.$root.results.sssOrGsis3 = "government" === t ? "GSIS" : "SSS", "ofw" === t ? (this.$root.$refs.simplert.openSimplert({
                        title: "Tuloy pa rin ang exemption ng mga minimum wage earner at OFW sa Personal Income Tax"
                    }), this.oldMonthlyIncome2 = this.form.monthlyIncome2, this.form.monthlyIncome2 = "Not Applicable") : "Not Applicable" == this.form.monthlyIncome2 && (this.form.monthlyIncome2 = this.oldMonthlyIncome2, this.$nextTick(function() {
                        e.$refs.monthlyIncome2.formatValue()
                    })), this.$root.resetResults()
                }
            },
            methods: {
                validate: function() {
                    var t = this;
                    return parseFloat(this.form.monthlyIncome) < 31212121444400 && 0 != parseFloat(this.form.monthlyIncome) ? (this.$root.$refs.simplert.openSimplert({
                        title: "Gagi kahit anong gawin nyo rape parin abot nyo sa gobyerno."
                    }), this.$nextTick(function() {
                        return t.$root.$refs.simplert.$el.getElementsByTagName("button")[0].focus()
                    }), !1) : parseFloat(this.form.monthlyIncome2) < 300 && 0 != parseFloat(this.form.monthlyIncome2) ? (this.$root.$refs.simplert.openSimplert({
                        title: "Gagi kahit anong gawin nyo rape parin abot nyo sa gobyerno."
                    }), this.$nextTick(function() {
                        return t.$root.$refs.simplert.$el.getElementsByTagName("button")[0].focus()
                    }), !1) : 0 === parseFloat(this.form.monthlyIncome) && 0 === parseFloat(this.form.monthlyIncome2) ? (this.$root.$refs.simplert.openSimplert({
                        title: "Gagi kahit anong gawin nyo rape parin abot nyo sa gobyerno."
                    }), !1) : "" !== this.form.monthlyIncome && "" !== this.form.monthlyIncome2 || (this.$root.$refs.simplert.openSimplert({
                        title: "Gagi kahit anong gawin nyo rape parin abot nyo sa gobyerno."
                    }), !1)
                },
                submit: function() {
                    var t = this;
                    if (this.validate()) {
                        this.$refs.submit.focus(), this.$root.loading = !0;
                        var e = new FormData;
                        e.append("married", !0), e.append("jobsectormarried1", "private" === this.form.sector ? "p" : "government" === this.form.sector ? "g" : "ofw"), e.append("jobsectormarried2", "private" === this.form.sector2 ? "p" : "government" === this.form.sector2 ? "g" : "ofw"), e.append("incomemarried1", "ofw" === this.form.sector ? 0 : this.form.monthlyIncome), e.append("incomemarried2", "ofw" === this.form.sector2 ? 0 : this.form.monthlyIncome2), e.append("numofdependent", this.form.dependents), e.append("token2", document.head.querySelector('meta[name="token2"]').content), e.append("token3", document.head.querySelector('meta[name="token3"]').content), axios.post("/api.php", e).takeAtLeast(500).then(function(e) {
                            t.$nextTick(function() {
                                return t.$root.showResults(e.data)
                            })
                        }).catch(function(t) {
                            return window.location.reload()
                        })
                    }
                }
            }
        }
    },
    CM4b: function(t, e, n) {
        var r = n("VU/8")(n("qTqp"), n("cGBQ"), !1, null, null, null);
        t.exports = r.exports
    },
    DBrK: function(t, e, n) {
        var r = n("pgQl");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("0dae6c1a", r, !0)
    },
    DQCr: function(t, e, n) {
        "use strict";
        var r = n("cGG2");

        function o(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        t.exports = function(t, e, n) {
            if (!e) return t;
            var i;
            if (n) i = n(e);
            else if (r.isURLSearchParams(e)) i = e.toString();
            else {
                var s = [];
                r.forEach(e, function(t, e) {
                    null !== t && void 0 !== t && (r.isArray(t) && (e += "[]"), r.isArray(t) || (t = [t]), r.forEach(t, function(t) {
                        r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), s.push(o(e) + "=" + o(t))
                    }))
                }), i = s.join("&")
            }
            return i && (t += (-1 === t.indexOf("?") ? "?" : "&") + i), t
        }
    },
    DW4N: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "tab-pane singletab-pane active in",
                    attrs: {
                        id: "menu1"
                    }
                }, [n("form", {
                    on: {
                        submit: function(e) {
                            e.preventDefault(), t.submit(e)
                        }
                    }
                }, [n("ComputationFormInputDependents", {
                    on: {
                        "update:dependent": function(e) {
                            return t.form.dependents = e
                        }
                    }
                }), t._v(" "), n("ComputationFormInputIncome", {
                    ref: "monthlyIncome",
                    model: {
                        value: t.form.monthlyIncome,
                        callback: function(e) {
                            t.$set(t.form, "monthlyIncome", e)
                        },
                        expression: "form.monthlyIncome"
                    }
                }), t._v(" "), n("ComputationFormInputSectors", {
                    attrs: {
                        "sector-component-key": "sector"
                    },
                    on: {
                        sector: function(e) {
                            return t.form.sector = e
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }, [n("div", {
                    staticClass: "col-sm-12"
                }, [n("button", {
                    ref: "submit",
                    staticClass: "btn btn-yellow submitme col-sm-8 col-sm-offset-2",
                    attrs: {
                        type: "submit",
                        id: "submit",
                        disabled: "Not Applicable" === t.form.monthlyIncome || t.$root.loading
                    }
                }, [t._v("\n          Kalkulahin\n          "), t.$root.loading ? n("i", {
                    staticClass: "fa fa-spinner fa-spin fa-1x fa-fw"
                }) : t._e()])])])], 1)])
            },
            staticRenderFns: []
        }
    },
    DuR2: function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    ET9U: function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".modal[data-v-73cf0bf6]{display:block;background:rgba(0,0,0,.5)}.modal-content[data-v-73cf0bf6],.modal-dialog[data-v-73cf0bf6]{width:380px}.modal-header[data-v-73cf0bf6]{background-color:#471145;border-bottom:0}.modal-title[data-v-73cf0bf6]{font:15px/1.5 MetropolisBold;color:#fff}.form-control[data-v-73cf0bf6]{background-color:#f4f4f4;border-color:#c9c9c9}.close[data-v-73cf0bf6]{color:#e3dae3!important;opacity:1}.send[data-v-73cf0bf6]{width:50%;background-color:#fc0;color:#471248;display:inline-block;margin-top:5px;margin-bottom:8px}[data-v-73cf0bf6]::-webkit-input-placeholder{color:#582256}[data-v-73cf0bf6]::-moz-placeholder{color:#582256}[data-v-73cf0bf6]:-ms-input-placeholder{color:#582256}[data-v-73cf0bf6]:-moz-placeholder{color:#582256}button[data-v-73cf0bf6]:focus{outline:0}.help-block[data-v-73cf0bf6]{float:left;margin-top:0;margin-bottom:10px;color:red}", ""])
    },
    F1kH: function(t, e, n) {
        "use strict";
        var r = function() {
                return function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                        } catch (t) {
                            o = !0, i = t
                        } finally {
                            try {
                                !r && a.return && a.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            o = s(n("I3G/")),
            i = s(n("O6Gy"));

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        window.axios = n("mtWM"), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        var a = n("VK1f");
        o.default.use(a), Promise.delay = function(t) {
            return new Promise(function(e, n) {
                setTimeout(e, t)
            })
        }, Promise.prototype.takeAtLeast = function(t) {
            var e = this;
            return new Promise(function(n, o) {
                Promise.all([e, Promise.delay(t)]).then(function(t) {
                    var e = r(t, 1)[0];
                    n(e)
                }, o)
            })
        }, o.default.use(i.default);
        var l = n("bm7V");
        o.default.use(l, {
            container: "body",
            duration: 300,
            easing: "ease",
            offset: -100,
            cancelable: !0,
            onDone: !1,
            onCancel: !1,
            x: !1,
            y: !0
        }), o.default.component("goto-calculator-button", n("4Irq")), o.default.component("frequently-asked-questions", n("5Uzz")), o.default.component("simplert", n("8fVv")), o.default.component("nav-bar", n("M/24")), o.default.component("social-share-buttons", n("0PZG")), o.default.component("email-modal", n("oPGD")), o.default.component("computation", n("+BZz"));
        new o.default({
            el: "#app",
            data: {
                loading: !1,
                singleOrMarried: "single",
                showEmailModal: !1,
                sessionTimer: 0,
                results: {
                    sssOrGsis: "SSS",
                    sssOrGsis2: "SSS",
                    sssOrGsis3: "SSS",
                    combined: {
                        oldSystem: {
                            totalNetPay: "0.00",
                            totalDeduction: "0.00",
                            totalTakeHome: "0.00",
                            totalTaxDue: "0.00"
                        },
                        newSystem: {
                            totalNetPay: "0.00",
                            totalDeduction: "0.00",
                            totalTakeHome: "0.00",
                            totalTaxDue: "0.00"
                        },
                        totalTaxSavings: "0.00",
                        yearlyTotalTaxSavings: "0.00"
                    },
                    netChanges: {
                        pit: "0.00",
                        vat: "0.00",
                        oil: "0.00",
                        automobile: "0.00",
                        ssb: "0.00",
                        sin: "0.00",
                        inflationaryImpact: "0.00",
                        targetedCashTransfer: "0.00",
                        total: "0.00",
                        yearlyTotal: "0.00"
                    },
                    deductions: {
                        sss: "0.00",
                        philHealth: "0.00",
                        pagIbigFund: "0.00",
                        netPay: "0.00"
                    },
                    deductions2: {
                        sss: "0.00",
                        philHealth: "0.00",
                        pagIbigFund: "0.00",
                        netPay: "0.00"
                    },
                    totalSavings: "0.00",
                    yearlyTotalSavings: "0.00"
                }
            },
            mounted: function() {
                var t = this;
                setInterval(function() {
                    t.sessionTimer++
                }, 1e3)
            },
            watch: {
                singleOrMarried: function() {
                    this.resetResults()
                },
                sessionTimer: function(t) {
                    t >= 1680 && window.location.reload()
                }
            },
            methods: {
                showResults: function(t) {
                    var e = this;
                    this.results.combined.newSystem.totalNetPay = t.combined.totalNetPay.new.monthly, this.results.combined.newSystem.totalDeduction = t.combined.totalDeduction.new.monthly, this.results.combined.newSystem.totalTakeHome = t.combined.totalTakeHome.new.monthly, this.results.combined.oldSystem.totalNetPay = t.combined.totalNetPay.old.monthly, this.results.combined.oldSystem.totalDeduction = t.combined.totalDeduction.old.monthly, this.results.combined.oldSystem.totalTakeHome = t.combined.totalTakeHome.old.monthly, this.results.combined.totalTaxSavings = t.combined.totalTaxSavings.monthly, this.results.combined.yearlyTotalTaxSavings = t.combined.totalTaxSavings.annually, this.results.combined.newSystem.totalTaxDue = t.combined.totalTaxDue.new.monthly, this.results.combined.oldSystem.totalTaxDue = t.combined.totalTaxDue.old.monthly, this.results.netChanges.yearlyTotal = t.netChange.total.annually, Object.keys(t.netChange).forEach(function(n, r) {
                        e.results.netChanges[n] = t.netChange[n].monthly
                    }), "single" === this.singleOrMarried ? (this.results.deductions.sss = t.data1.benefits[this.results.sssOrGsis.toLowerCase()].monthly, this.results.deductions.philHealth = t.data1.benefits.philHealth.monthly, this.results.deductions.pagIbigFund = t.data1.benefits.pagIbigFund.monthly, this.results.deductions.netPay = t.data1.netPay.new.monthly, this.results.combined.newSystem.totalTaxDue = t.data1.taxDue.new.monthly, this.results.combined.oldSystem.totalTaxDue = t.data1.taxDue.old.monthly) : (this.results.deductions.sss = null != t.data2.benefits[this.results.sssOrGsis3.toLowerCase()] ? t.data2.benefits[this.results.sssOrGsis2.toLowerCase()].monthly : "0.00", this.results.deductions.philHealth = t.data2.benefits.philHealth.monthly, this.results.deductions.pagIbigFund = t.data2.benefits.pagIbigFund.monthly, this.results.deductions.netPay = t.data2.netPay.new.monthly, this.results.deductions2.sss = null != t.data3.benefits[this.results.sssOrGsis3.toLowerCase()] ? t.data3.benefits[this.results.sssOrGsis3.toLowerCase()].monthly : "0.00", this.results.deductions2.philHealth = t.data3.benefits.philHealth.monthly, this.results.deductions2.pagIbigFund = t.data3.benefits.pagIbigFund.monthly, this.results.deductions2.netPay = t.data3.netPay.new.monthly), this.results.totalSavings = t.totalSavings.monthly, this.results.yearlyTotalSavings = t.totalSavings.annually, this.$scrollTo(document.getElementById("combine-income"), 500, {
                        offset: -80
                    }), this.loading = !1
                },
                resetResults: function() {
                    var t = this;
                    this.results.combined.oldSystem.totalNetPay = "0.00", this.results.combined.oldSystem.totalDeduction = "0.00", this.results.combined.oldSystem.totalTakeHome = "0.00", this.results.combined.newSystem.totalNetPay = "0.00", this.results.combined.newSystem.totalDeduction = "0.00", this.results.combined.newSystem.totalTakeHome = "0.00", this.results.combined.totalTaxSavings = "0.00", this.results.combined.yearlyTotalTaxSavings = "0.00", this.results.combined.oldSystem.totalTaxDue = "0.00", this.results.combined.newSystem.totalTaxDue = "0.00", this.results.netChanges.yearlyTotal = "0.00", Object.keys(this.results.netChanges).forEach(function(e, n) {
                        t.results.netChanges[e] = "0.00"
                    }), Object.keys(this.results.deductions).forEach(function(e, n) {
                        t.results.deductions[e] = "0.00", t.results.deductions2[e] = "0.00"
                    }), this.results.totalSavings = "0.00", this.results.yearlyTotalSavings = "0.00"
                },
                formatSign: function(t) {
                    return t.includes("-") ? "- P" : "P"
                }
            }
        })
    },
    "FZ+f": function(t, e) {
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var n = function(t, e) {
                        var n = t[1] || "",
                            r = t[3];
                        if (!r) return n;
                        if (e && "function" == typeof btoa) {
                            var o = (s = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                                i = r.sources.map(function(t) {
                                    return "/*# sourceURL=" + r.sourceRoot + t + " */"
                                });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        var s;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var s = t[o];
                    "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
                }
            }, e
        }
    },
    FtD3: function(t, e, n) {
        "use strict";
        var r = n("t8qj");
        t.exports = function(t, e, n, o, i) {
            var s = new Error(t);
            return r(s, e, n, o, i)
        }
    },
    FxhJ: function(t, e, n) {
        var r = n("VU/8")(n("Zyre"), n("Tw+9"), !1, function(t) {
            n("zaWi")
        }, "data-v-ab149812", null);
        t.exports = r.exports
    },
    GDqE: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "form-group form2"
                }, [n("label", {
                    attrs: {
                        for: "income"
                    }
                }), t._v(" "), n("input", {
                    ref: "input",
                    staticClass: "form-control income incomesingleinput",
                    attrs: {
                        type: "text",
                        placeholder: t.placeholder,
                        maxlength: "16",
                        disabled: t.isDisabled
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: function(e) {
                            t.updateValue(e.target.value)
                        },
                        blur: t.formatValue,
                        focus: t.unformatValue
                    }
                })])
            },
            staticRenderFns: []
        }
    },
    GHBc: function(t, e, n) {
        "use strict";
        var r = n("cGG2");
        t.exports = r.isStandardBrowserEnv() ? function() {
            var t, e = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function o(t) {
                var r = t;
                return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }
            return t = o(window.location.href),
                function(e) {
                    var n = r.isString(e) ? o(e) : e;
                    return n.protocol === t.protocol && n.host === t.host
                }
        }() : function() {
            return !0
        }
    },
    GQwa: function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".currency[data-v-3fe25826]{font-size:13px!important}", ""])
    },
    "I3G/": function(t, e, n) {
        "use strict";
        (function(e, n) {
            var r = Object.freeze({});

            function o(t) {
                return void 0 === t || null === t
            }

            function i(t) {
                return void 0 !== t && null !== t
            }

            function s(t) {
                return !0 === t
            }

            function a(t) {
                return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
            }

            function l(t) {
                return null !== t && "object" == typeof t
            }
            var c = Object.prototype.toString;

            function u(t) {
                return "[object Object]" === c.call(t)
            }

            function f(t) {
                return "[object RegExp]" === c.call(t)
            }

            function d(t) {
                var e = parseFloat(String(t));
                return e >= 0 && Math.floor(e) === e && isFinite(t)
            }

            function p(t) {
                return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
            }

            function h(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e
            }

            function m(t, e) {
                for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
                return e ? function(t) {
                    return n[t.toLowerCase()]
                } : function(t) {
                    return n[t]
                }
            }
            var v = m("slot,component", !0),
                y = m("key,ref,slot,slot-scope,is");

            function g(t, e) {
                if (t.length) {
                    var n = t.indexOf(e);
                    if (n > -1) return t.splice(n, 1)
                }
            }
            var _ = Object.prototype.hasOwnProperty;

            function b(t, e) {
                return _.call(t, e)
            }

            function C(t) {
                var e = Object.create(null);
                return function(n) {
                    return e[n] || (e[n] = t(n))
                }
            }
            var w = /-(\w)/g,
                x = C(function(t) {
                    return t.replace(w, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                }),
                $ = C(function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }),
                S = /\B([A-Z])/g,
                k = C(function(t) {
                    return t.replace(S, "-$1").toLowerCase()
                });

            function T(t, e) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
                }
                return n._length = t.length, n
            }

            function O(t, e) {
                e = e || 0;
                for (var n = t.length - e, r = new Array(n); n--;) r[n] = t[n + e];
                return r
            }

            function A(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function I(t) {
                for (var e = {}, n = 0; n < t.length; n++) t[n] && A(e, t[n]);
                return e
            }

            function E(t, e, n) {}
            var N = function(t, e, n) {
                    return !1
                },
                j = function(t) {
                    return t
                };

            function M(t, e) {
                if (t === e) return !0;
                var n = l(t),
                    r = l(e);
                if (!n || !r) return !n && !r && String(t) === String(e);
                try {
                    var o = Array.isArray(t),
                        i = Array.isArray(e);
                    if (o && i) return t.length === e.length && t.every(function(t, n) {
                        return M(t, e[n])
                    });
                    if (o || i) return !1;
                    var s = Object.keys(t),
                        a = Object.keys(e);
                    return s.length === a.length && s.every(function(n) {
                        return M(t[n], e[n])
                    })
                } catch (t) {
                    return !1
                }
            }

            function D(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (M(t[n], e)) return n;
                return -1
            }

            function F(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t.apply(this, arguments))
                }
            }
            var P = "data-server-rendered",
                R = ["component", "directive", "filter"],
                L = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
                B = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: N,
                    isReservedAttr: N,
                    isUnknownElement: N,
                    getTagNamespace: E,
                    parsePlatformTagName: j,
                    mustUseProp: N,
                    _lifecycleHooks: L
                };

            function U(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e
            }

            function V(t, e, n, r) {
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                })
            }
            var q = /[^\w.$]/;
            var H = "__proto__" in {},
                G = "undefined" != typeof window,
                z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
                W = z && WXEnvironment.platform.toLowerCase(),
                K = G && window.navigator.userAgent.toLowerCase(),
                X = K && /msie|trident/.test(K),
                J = K && K.indexOf("msie 9.0") > 0,
                Z = K && K.indexOf("edge/") > 0,
                Y = K && K.indexOf("android") > 0 || "android" === W,
                Q = K && /iphone|ipad|ipod|ios/.test(K) || "ios" === W,
                tt = (K && /chrome\/\d+/.test(K), {}.watch),
                et = !1;
            if (G) try {
                var nt = {};
                Object.defineProperty(nt, "passive", {
                    get: function() {
                        et = !0
                    }
                }), window.addEventListener("test-passive", null, nt)
            } catch (t) {}
            var rt, ot = function() {
                    return void 0 === rt && (rt = !G && void 0 !== e && "server" === e.process.env.VUE_ENV), rt
                },
                it = G && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function st(t) {
                return "function" == typeof t && /native code/.test(t.toString())
            }
            var at, lt = "undefined" != typeof Symbol && st(Symbol) && "undefined" != typeof Reflect && st(Reflect.ownKeys);
            at = "undefined" != typeof Set && st(Set) ? Set : function() {
                function t() {
                    this.set = Object.create(null)
                }
                return t.prototype.has = function(t) {
                    return !0 === this.set[t]
                }, t.prototype.add = function(t) {
                    this.set[t] = !0
                }, t.prototype.clear = function() {
                    this.set = Object.create(null)
                }, t
            }();
            var ct = E,
                ut = 0,
                ft = function() {
                    this.id = ut++, this.subs = []
                };
            ft.prototype.addSub = function(t) {
                this.subs.push(t)
            }, ft.prototype.removeSub = function(t) {
                g(this.subs, t)
            }, ft.prototype.depend = function() {
                ft.target && ft.target.addDep(this)
            }, ft.prototype.notify = function() {
                for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update()
            }, ft.target = null;
            var dt = [];
            var pt = function(t, e, n, r, o, i, s, a) {
                    this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = o, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = a, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
                },
                ht = {
                    child: {
                        configurable: !0
                    }
                };
            ht.child.get = function() {
                return this.componentInstance
            }, Object.defineProperties(pt.prototype, ht);
            var mt = function(t) {
                void 0 === t && (t = "");
                var e = new pt;
                return e.text = t, e.isComment = !0, e
            };

            function vt(t) {
                return new pt(void 0, void 0, void 0, String(t))
            }

            function yt(t, e) {
                var n = t.componentOptions,
                    r = new pt(t.tag, t.data, t.children, t.text, t.elm, t.context, n, t.asyncFactory);
                return r.ns = t.ns, r.isStatic = t.isStatic, r.key = t.key, r.isComment = t.isComment, r.fnContext = t.fnContext, r.fnOptions = t.fnOptions, r.fnScopeId = t.fnScopeId, r.isCloned = !0, e && (t.children && (r.children = gt(t.children, !0)), n && n.children && (n.children = gt(n.children, !0))), r
            }

            function gt(t, e) {
                for (var n = t.length, r = new Array(n), o = 0; o < n; o++) r[o] = yt(t[o], e);
                return r
            }
            var _t = Array.prototype,
                bt = Object.create(_t);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
                var e = _t[t];
                V(bt, t, function() {
                    for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
                    var o, i = e.apply(this, n),
                        s = this.__ob__;
                    switch (t) {
                        case "push":
                        case "unshift":
                            o = n;
                            break;
                        case "splice":
                            o = n.slice(2)
                    }
                    return o && s.observeArray(o), s.dep.notify(), i
                })
            });
            var Ct = Object.getOwnPropertyNames(bt),
                wt = {
                    shouldConvert: !0
                },
                xt = function(t) {
                    if (this.value = t, this.dep = new ft, this.vmCount = 0, V(t, "__ob__", this), Array.isArray(t)) {
                        (H ? $t : St)(t, bt, Ct), this.observeArray(t)
                    } else this.walk(t)
                };
            xt.prototype.walk = function(t) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++) Tt(t, e[n], t[e[n]])
            }, xt.prototype.observeArray = function(t) {
                for (var e = 0, n = t.length; e < n; e++) kt(t[e])
            };

            function $t(t, e, n) {
                t.__proto__ = e
            }

            function St(t, e, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    V(t, i, e[i])
                }
            }

            function kt(t, e) {
                if (l(t) && !(t instanceof pt)) {
                    var n;
                    return b(t, "__ob__") && t.__ob__ instanceof xt ? n = t.__ob__ : wt.shouldConvert && !ot() && (Array.isArray(t) || u(t)) && Object.isExtensible(t) && !t._isVue && (n = new xt(t)), e && n && n.vmCount++, n
                }
            }

            function Tt(t, e, n, r, o) {
                var i = new ft,
                    s = Object.getOwnPropertyDescriptor(t, e);
                if (!s || !1 !== s.configurable) {
                    var a = s && s.get,
                        l = s && s.set,
                        c = !o && kt(n);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var e = a ? a.call(t) : n;
                            return ft.target && (i.depend(), c && (c.dep.depend(), Array.isArray(e) && function t(e) {
                                for (var n = void 0, r = 0, o = e.length; r < o; r++)(n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && t(n)
                            }(e))), e
                        },
                        set: function(e) {
                            var r = a ? a.call(t) : n;
                            e === r || e != e && r != r || (l ? l.call(t, e) : n = e, c = !o && kt(e), i.notify())
                        }
                    })
                }
            }

            function Ot(t, e, n) {
                if (Array.isArray(t) && d(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
                if (e in t && !(e in Object.prototype)) return t[e] = n, n;
                var r = t.__ob__;
                return t._isVue || r && r.vmCount ? n : r ? (Tt(r.value, e, n), r.dep.notify(), n) : (t[e] = n, n)
            }

            function At(t, e) {
                if (Array.isArray(t) && d(e)) t.splice(e, 1);
                else {
                    var n = t.__ob__;
                    t._isVue || n && n.vmCount || b(t, e) && (delete t[e], n && n.dep.notify())
                }
            }
            var It = B.optionMergeStrategies;

            function Et(t, e) {
                if (!e) return t;
                for (var n, r, o, i = Object.keys(e), s = 0; s < i.length; s++) r = t[n = i[s]], o = e[n], b(t, n) ? u(r) && u(o) && Et(r, o) : Ot(t, n, o);
                return t
            }

            function Nt(t, e, n) {
                return n ? function() {
                    var r = "function" == typeof e ? e.call(n, n) : e,
                        o = "function" == typeof t ? t.call(n, n) : t;
                    return r ? Et(r, o) : o
                } : e ? t ? function() {
                    return Et("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t)
                } : e : t
            }
            It.data = function(t, e, n) {
                return n ? Nt(t, e, n) : e && "function" != typeof e ? t : Nt(t, e)
            };

            function jt(t, e) {
                return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
            }
            L.forEach(function(t) {
                It[t] = jt
            });

            function Mt(t, e, n, r) {
                var o = Object.create(t || null);
                return e ? A(o, e) : o
            }
            R.forEach(function(t) {
                It[t + "s"] = Mt
            }), It.watch = function(t, e, n, r) {
                if (t === tt && (t = void 0), e === tt && (e = void 0), !e) return Object.create(t || null);
                if (!t) return e;
                var o = {};
                A(o, t);
                for (var i in e) {
                    var s = o[i],
                        a = e[i];
                    s && !Array.isArray(s) && (s = [s]), o[i] = s ? s.concat(a) : Array.isArray(a) ? a : [a]
                }
                return o
            }, It.props = It.methods = It.inject = It.computed = function(t, e, n, r) {
                if (!t) return e;
                var o = Object.create(null);
                return A(o, t), e && A(o, e), o
            }, It.provide = Nt;
            var Dt = function(t, e) {
                return void 0 === e ? t : e
            };

            function Ft(t, e, n) {
                "function" == typeof e && (e = e.options),
                    function(t, e) {
                        var n = t.props;
                        if (n) {
                            var r, o, i = {};
                            if (Array.isArray(n))
                                for (r = n.length; r--;) "string" == typeof(o = n[r]) && (i[x(o)] = {
                                    type: null
                                });
                            else if (u(n))
                                for (var s in n) o = n[s], i[x(s)] = u(o) ? o : {
                                    type: o
                                };
                            t.props = i
                        }
                    }(e),
                    function(t, e) {
                        var n = t.inject;
                        if (n) {
                            var r = t.inject = {};
                            if (Array.isArray(n))
                                for (var o = 0; o < n.length; o++) r[n[o]] = {
                                    from: n[o]
                                };
                            else if (u(n))
                                for (var i in n) {
                                    var s = n[i];
                                    r[i] = u(s) ? A({
                                        from: i
                                    }, s) : {
                                        from: s
                                    }
                                }
                        }
                    }(e),
                    function(t) {
                        var e = t.directives;
                        if (e)
                            for (var n in e) {
                                var r = e[n];
                                "function" == typeof r && (e[n] = {
                                    bind: r,
                                    update: r
                                })
                            }
                    }(e);
                var r = e.extends;
                if (r && (t = Ft(t, r, n)), e.mixins)
                    for (var o = 0, i = e.mixins.length; o < i; o++) t = Ft(t, e.mixins[o], n);
                var s, a = {};
                for (s in t) l(s);
                for (s in e) b(t, s) || l(s);

                function l(r) {
                    var o = It[r] || Dt;
                    a[r] = o(t[r], e[r], n, r)
                }
                return a
            }

            function Pt(t, e, n, r) {
                if ("string" == typeof n) {
                    var o = t[e];
                    if (b(o, n)) return o[n];
                    var i = x(n);
                    if (b(o, i)) return o[i];
                    var s = $(i);
                    if (b(o, s)) return o[s];
                    return o[n] || o[i] || o[s]
                }
            }

            function Rt(t, e, n, r) {
                var o = e[t],
                    i = !b(n, t),
                    s = n[t];
                if (Bt(Boolean, o.type) && (i && !b(o, "default") ? s = !1 : Bt(String, o.type) || "" !== s && s !== k(t) || (s = !0)), void 0 === s) {
                    s = function(t, e, n) {
                        if (!b(e, "default")) return;
                        var r = e.default;
                        0;
                        if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
                        return "function" == typeof r && "Function" !== Lt(e.type) ? r.call(t) : r
                    }(r, o, t);
                    var a = wt.shouldConvert;
                    wt.shouldConvert = !0, kt(s), wt.shouldConvert = a
                }
                return s
            }

            function Lt(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e ? e[1] : ""
            }

            function Bt(t, e) {
                if (!Array.isArray(e)) return Lt(e) === Lt(t);
                for (var n = 0, r = e.length; n < r; n++)
                    if (Lt(e[n]) === Lt(t)) return !0;
                return !1
            }

            function Ut(t, e, n) {
                if (e)
                    for (var r = e; r = r.$parent;) {
                        var o = r.$options.errorCaptured;
                        if (o)
                            for (var i = 0; i < o.length; i++) try {
                                if (!1 === o[i].call(r, t, e, n)) return
                            } catch (t) {
                                Vt(t, r, "errorCaptured hook")
                            }
                    }
                Vt(t, e, n)
            }

            function Vt(t, e, n) {
                if (B.errorHandler) try {
                    return B.errorHandler.call(null, t, e, n)
                } catch (t) {
                    qt(t, null, "config.errorHandler")
                }
                qt(t, e, n)
            }

            function qt(t, e, n) {
                if (!G && !z || "undefined" == typeof console) throw t;
                console.error(t)
            }
            var Ht = [],
                Gt = !1;

            function zt() {
                Gt = !1;
                var t = Ht.slice(0);
                Ht.length = 0;
                for (var e = 0; e < t.length; e++) t[e]()
            }
            var Wt, Kt, Xt = !1;
            if (void 0 !== n && st(n)) Kt = function() {
                n(zt)
            };
            else if ("undefined" == typeof MessageChannel || !st(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) Kt = function() {
                setTimeout(zt, 0)
            };
            else {
                var Jt = new MessageChannel,
                    Zt = Jt.port2;
                Jt.port1.onmessage = zt, Kt = function() {
                    Zt.postMessage(1)
                }
            }
            if ("undefined" != typeof Promise && st(Promise)) {
                var Yt = Promise.resolve();
                Wt = function() {
                    Yt.then(zt), Q && setTimeout(E)
                }
            } else Wt = Kt;

            function Qt(t, e) {
                var n;
                if (Ht.push(function() {
                        if (t) try {
                            t.call(e)
                        } catch (t) {
                            Ut(t, e, "nextTick")
                        } else n && n(e)
                    }), Gt || (Gt = !0, Xt ? Kt() : Wt()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                    n = t
                })
            }
            var te = new at;

            function ee(t) {
                ! function t(e, n) {
                    var r, o;
                    var i = Array.isArray(e);
                    if (!i && !l(e) || Object.isFrozen(e)) return;
                    if (e.__ob__) {
                        var s = e.__ob__.dep.id;
                        if (n.has(s)) return;
                        n.add(s)
                    }
                    if (i)
                        for (r = e.length; r--;) t(e[r], n);
                    else
                        for (o = Object.keys(e), r = o.length; r--;) t(e[o[r]], n)
                }(t, te), te.clear()
            }
            var ne = C(function(t) {
                var e = "&" === t.charAt(0),
                    n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                    r = "!" === (t = n ? t.slice(1) : t).charAt(0);
                return {
                    name: t = r ? t.slice(1) : t,
                    once: n,
                    capture: r,
                    passive: e
                }
            });

            function re(t) {
                function e() {
                    var t = arguments,
                        n = e.fns;
                    if (!Array.isArray(n)) return n.apply(null, arguments);
                    for (var r = n.slice(), o = 0; o < r.length; o++) r[o].apply(null, t)
                }
                return e.fns = t, e
            }

            function oe(t, e, n, r, i) {
                var s, a, l, c;
                for (s in t) a = t[s], l = e[s], c = ne(s), o(a) || (o(l) ? (o(a.fns) && (a = t[s] = re(a)), n(c.name, a, c.once, c.capture, c.passive, c.params)) : a !== l && (l.fns = a, t[s] = l));
                for (s in e) o(t[s]) && r((c = ne(s)).name, e[s], c.capture)
            }

            function ie(t, e, n) {
                t instanceof pt && (t = t.data.hook || (t.data.hook = {}));
                var r, a = t[e];

                function l() {
                    n.apply(this, arguments), g(r.fns, l)
                }
                o(a) ? r = re([l]) : i(a.fns) && s(a.merged) ? (r = a).fns.push(l) : r = re([a, l]), r.merged = !0, t[e] = r
            }

            function se(t, e, n, r, o) {
                if (i(e)) {
                    if (b(e, n)) return t[n] = e[n], o || delete e[n], !0;
                    if (b(e, r)) return t[n] = e[r], o || delete e[r], !0
                }
                return !1
            }

            function ae(t) {
                return a(t) ? [vt(t)] : Array.isArray(t) ? function t(e, n) {
                    var r = [];
                    var l, c, u, f;
                    for (l = 0; l < e.length; l++) o(c = e[l]) || "boolean" == typeof c || (u = r.length - 1, f = r[u], Array.isArray(c) ? c.length > 0 && (le((c = t(c, (n || "") + "_" + l))[0]) && le(f) && (r[u] = vt(f.text + c[0].text), c.shift()), r.push.apply(r, c)) : a(c) ? le(f) ? r[u] = vt(f.text + c) : "" !== c && r.push(vt(c)) : le(c) && le(f) ? r[u] = vt(f.text + c.text) : (s(e._isVList) && i(c.tag) && o(c.key) && i(n) && (c.key = "__vlist" + n + "_" + l + "__"), r.push(c)));
                    return r
                }(t) : void 0
            }

            function le(t) {
                return i(t) && i(t.text) && (e = t.isComment, !1 === e);
                var e
            }

            function ce(t, e) {
                return (t.__esModule || lt && "Module" === t[Symbol.toStringTag]) && (t = t.default), l(t) ? e.extend(t) : t
            }

            function ue(t) {
                return t.isComment && t.asyncFactory
            }

            function fe(t) {
                if (Array.isArray(t))
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (i(n) && (i(n.componentOptions) || ue(n))) return n
                    }
            }
            var de;

            function pe(t, e, n) {
                n ? de.$once(t, e) : de.$on(t, e)
            }

            function he(t, e) {
                de.$off(t, e)
            }

            function me(t, e, n) {
                de = t, oe(e, n || {}, pe, he), de = void 0
            }

            function ve(t, e) {
                var n = {};
                if (!t) return n;
                for (var r = 0, o = t.length; r < o; r++) {
                    var i = t[r],
                        s = i.data;
                    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, i.context !== e && i.fnContext !== e || !s || null == s.slot)(n.default || (n.default = [])).push(i);
                    else {
                        var a = s.slot,
                            l = n[a] || (n[a] = []);
                        "template" === i.tag ? l.push.apply(l, i.children || []) : l.push(i)
                    }
                }
                for (var c in n) n[c].every(ye) && delete n[c];
                return n
            }

            function ye(t) {
                return t.isComment && !t.asyncFactory || " " === t.text
            }

            function ge(t, e) {
                e = e || {};
                for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? ge(t[n], e) : e[t[n].key] = t[n].fn;
                return e
            }
            var _e = null;

            function be(t) {
                for (; t && (t = t.$parent);)
                    if (t._inactive) return !0;
                return !1
            }

            function Ce(t, e) {
                if (e) {
                    if (t._directInactive = !1, be(t)) return
                } else if (t._directInactive) return;
                if (t._inactive || null === t._inactive) {
                    t._inactive = !1;
                    for (var n = 0; n < t.$children.length; n++) Ce(t.$children[n]);
                    we(t, "activated")
                }
            }

            function we(t, e) {
                var n = t.$options[e];
                if (n)
                    for (var r = 0, o = n.length; r < o; r++) try {
                        n[r].call(t)
                    } catch (n) {
                        Ut(n, t, e + " hook")
                    }
                t._hasHookEvent && t.$emit("hook:" + e)
            }
            var xe = [],
                $e = [],
                Se = {},
                ke = !1,
                Te = !1,
                Oe = 0;

            function Ae() {
                Te = !0;
                var t, e;
                for (xe.sort(function(t, e) {
                        return t.id - e.id
                    }), Oe = 0; Oe < xe.length; Oe++) e = (t = xe[Oe]).id, Se[e] = null, t.run();
                var n = $e.slice(),
                    r = xe.slice();
                Oe = xe.length = $e.length = 0, Se = {}, ke = Te = !1,
                    function(t) {
                        for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Ce(t[e], !0)
                    }(n),
                    function(t) {
                        var e = t.length;
                        for (; e--;) {
                            var n = t[e],
                                r = n.vm;
                            r._watcher === n && r._isMounted && we(r, "updated")
                        }
                    }(r), it && B.devtools && it.emit("flush")
            }
            var Ie = 0,
                Ee = function(t, e, n, r, o) {
                    this.vm = t, o && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Ie, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new at, this.newDepIds = new at, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = function(t) {
                        if (!q.test(t)) {
                            var e = t.split(".");
                            return function(t) {
                                for (var n = 0; n < e.length; n++) {
                                    if (!t) return;
                                    t = t[e[n]]
                                }
                                return t
                            }
                        }
                    }(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get()
                };
            Ee.prototype.get = function() {
                t = this, ft.target && dt.push(ft.target), ft.target = t;
                var t, e, n = this.vm;
                try {
                    e = this.getter.call(n, n)
                } catch (t) {
                    if (!this.user) throw t;
                    Ut(t, n, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && ee(e), ft.target = dt.pop(), this.cleanupDeps()
                }
                return e
            }, Ee.prototype.addDep = function(t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
            }, Ee.prototype.cleanupDeps = function() {
                for (var t = this.deps.length; t--;) {
                    var e = this.deps[t];
                    this.newDepIds.has(e.id) || e.removeSub(this)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
            }, Ee.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                    var e = t.id;
                    if (null == Se[e]) {
                        if (Se[e] = !0, Te) {
                            for (var n = xe.length - 1; n > Oe && xe[n].id > t.id;) n--;
                            xe.splice(n + 1, 0, t)
                        } else xe.push(t);
                        ke || (ke = !0, Qt(Ae))
                    }
                }(this)
            }, Ee.prototype.run = function() {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || l(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) try {
                            this.cb.call(this.vm, t, e)
                        } catch (t) {
                            Ut(t, this.vm, 'callback for watcher "' + this.expression + '"')
                        } else this.cb.call(this.vm, t, e)
                    }
                }
            }, Ee.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1
            }, Ee.prototype.depend = function() {
                for (var t = this.deps.length; t--;) this.deps[t].depend()
            }, Ee.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || g(this.vm._watchers, this);
                    for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
                    this.active = !1
                }
            };
            var Ne = {
                enumerable: !0,
                configurable: !0,
                get: E,
                set: E
            };

            function je(t, e, n) {
                Ne.get = function() {
                    return this[e][n]
                }, Ne.set = function(t) {
                    this[e][n] = t
                }, Object.defineProperty(t, n, Ne)
            }

            function Me(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && function(t, e) {
                    var n = t.$options.propsData || {},
                        r = t._props = {},
                        o = t.$options._propKeys = [],
                        i = !t.$parent;
                    wt.shouldConvert = i;
                    var s = function(i) {
                        o.push(i);
                        var s = Rt(i, e, n, t);
                        Tt(r, i, s), i in t || je(t, "_props", i)
                    };
                    for (var a in e) s(a);
                    wt.shouldConvert = !0
                }(t, e.props), e.methods && function(t, e) {
                    t.$options.props;
                    for (var n in e) t[n] = null == e[n] ? E : T(e[n], t)
                }(t, e.methods), e.data ? function(t) {
                    var e = t.$options.data;
                    u(e = t._data = "function" == typeof e ? function(t, e) {
                        try {
                            return t.call(e, e)
                        } catch (t) {
                            return Ut(t, e, "data()"), {}
                        }
                    }(e, t) : e || {}) || (e = {});
                    var n = Object.keys(e),
                        r = t.$options.props,
                        o = (t.$options.methods, n.length);
                    for (; o--;) {
                        var i = n[o];
                        0, r && b(r, i) || U(i) || je(t, "_data", i)
                    }
                    kt(e, !0)
                }(t) : kt(t._data = {}, !0), e.computed && function(t, e) {
                    var n = t._computedWatchers = Object.create(null),
                        r = ot();
                    for (var o in e) {
                        var i = e[o],
                            s = "function" == typeof i ? i : i.get;
                        0, r || (n[o] = new Ee(t, s || E, E, De)), o in t || Fe(t, o, i)
                    }
                }(t, e.computed), e.watch && e.watch !== tt && function(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        if (Array.isArray(r))
                            for (var o = 0; o < r.length; o++) Re(t, n, r[o]);
                        else Re(t, n, r)
                    }
                }(t, e.watch)
            }
            var De = {
                lazy: !0
            };

            function Fe(t, e, n) {
                var r = !ot();
                "function" == typeof n ? (Ne.get = r ? Pe(e) : n, Ne.set = E) : (Ne.get = n.get ? r && !1 !== n.cache ? Pe(e) : n.get : E, Ne.set = n.set ? n.set : E), Object.defineProperty(t, e, Ne)
            }

            function Pe(t) {
                return function() {
                    var e = this._computedWatchers && this._computedWatchers[t];
                    if (e) return e.dirty && e.evaluate(), ft.target && e.depend(), e.value
                }
            }

            function Re(t, e, n, r) {
                return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r)
            }

            function Le(t, e) {
                if (t) {
                    for (var n = Object.create(null), r = lt ? Reflect.ownKeys(t).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }) : Object.keys(t), o = 0; o < r.length; o++) {
                        for (var i = r[o], s = t[i].from, a = e; a;) {
                            if (a._provided && s in a._provided) {
                                n[i] = a._provided[s];
                                break
                            }
                            a = a.$parent
                        }
                        if (!a)
                            if ("default" in t[i]) {
                                var l = t[i].default;
                                n[i] = "function" == typeof l ? l.call(e) : l
                            } else 0
                    }
                    return n
                }
            }

            function Be(t, e) {
                var n, r, o, s, a;
                if (Array.isArray(t) || "string" == typeof t)
                    for (n = new Array(t.length), r = 0, o = t.length; r < o; r++) n[r] = e(t[r], r);
                else if ("number" == typeof t)
                    for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
                else if (l(t))
                    for (s = Object.keys(t), n = new Array(s.length), r = 0, o = s.length; r < o; r++) a = s[r], n[r] = e(t[a], a, r);
                return i(n) && (n._isVList = !0), n
            }

            function Ue(t, e, n, r) {
                var o, i = this.$scopedSlots[t];
                if (i) n = n || {}, r && (n = A(A({}, r), n)), o = i(n) || e;
                else {
                    var s = this.$slots[t];
                    s && (s._rendered = !0), o = s || e
                }
                var a = n && n.slot;
                return a ? this.$createElement("template", {
                    slot: a
                }, o) : o
            }

            function Ve(t) {
                return Pt(this.$options, "filters", t) || j
            }

            function qe(t, e, n, r) {
                var o = B.keyCodes[e] || n;
                return o ? Array.isArray(o) ? -1 === o.indexOf(t) : o !== t : r ? k(r) !== e : void 0
            }

            function He(t, e, n, r, o) {
                if (n)
                    if (l(n)) {
                        Array.isArray(n) && (n = I(n));
                        var i, s = function(s) {
                            if ("class" === s || "style" === s || y(s)) i = t;
                            else {
                                var a = t.attrs && t.attrs.type;
                                i = r || B.mustUseProp(e, a, s) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                            }
                            if (!(s in i) && (i[s] = n[s], o)) {
                                (t.on || (t.on = {}))["update:" + s] = function(t) {
                                    n[s] = t
                                }
                            }
                        };
                        for (var a in n) s(a)
                    } else;
                return t
            }

            function Ge(t, e) {
                var n = this._staticTrees || (this._staticTrees = []),
                    r = n[t];
                return r && !e ? Array.isArray(r) ? gt(r) : yt(r) : (We(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), r)
            }

            function ze(t, e, n) {
                return We(t, "__once__" + e + (n ? "_" + n : ""), !0), t
            }

            function We(t, e, n) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && Ke(t[r], e + "_" + r, n);
                else Ke(t, e, n)
            }

            function Ke(t, e, n) {
                t.isStatic = !0, t.key = e, t.isOnce = n
            }

            function Xe(t, e) {
                if (e)
                    if (u(e)) {
                        var n = t.on = t.on ? A({}, t.on) : {};
                        for (var r in e) {
                            var o = n[r],
                                i = e[r];
                            n[r] = o ? [].concat(o, i) : i
                        }
                    } else;
                return t
            }

            function Je(t) {
                t._o = ze, t._n = h, t._s = p, t._l = Be, t._t = Ue, t._q = M, t._i = D, t._m = Ge, t._f = Ve, t._k = qe, t._b = He, t._v = vt, t._e = mt, t._u = ge, t._g = Xe
            }

            function Ze(t, e, n, o, i) {
                var a = i.options;
                this.data = t, this.props = e, this.children = n, this.parent = o, this.listeners = t.on || r, this.injections = Le(a.inject, o), this.slots = function() {
                    return ve(n, o)
                };
                var l = Object.create(o),
                    c = s(a._compiled),
                    u = !c;
                c && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || r), a._scopeId ? this._c = function(t, e, n, r) {
                    var i = sn(l, t, e, n, r, u);
                    return i && (i.fnScopeId = a._scopeId, i.fnContext = o), i
                } : this._c = function(t, e, n, r) {
                    return sn(l, t, e, n, r, u)
                }
            }
            Je(Ze.prototype);

            function Ye(t, e) {
                for (var n in e) t[x(n)] = e[n]
            }
            var Qe = {
                    init: function(t, e, n, r) {
                        if (!t.componentInstance || t.componentInstance._isDestroyed) {
                            (t.componentInstance = function(t, e, n, r) {
                                var o = {
                                        _isComponent: !0,
                                        parent: e,
                                        _parentVnode: t,
                                        _parentElm: n || null,
                                        _refElm: r || null
                                    },
                                    s = t.data.inlineTemplate;
                                i(s) && (o.render = s.render, o.staticRenderFns = s.staticRenderFns);
                                return new t.componentOptions.Ctor(o)
                            }(t, _e, n, r)).$mount(e ? t.elm : void 0, e)
                        } else if (t.data.keepAlive) {
                            var o = t;
                            Qe.prepatch(o, o)
                        }
                    },
                    prepatch: function(t, e) {
                        var n = e.componentOptions;
                        ! function(t, e, n, o, i) {
                            var s = !!(i || t.$options._renderChildren || o.data.scopedSlots || t.$scopedSlots !== r);
                            if (t.$options._parentVnode = o, t.$vnode = o, t._vnode && (t._vnode.parent = o), t.$options._renderChildren = i, t.$attrs = o.data && o.data.attrs || r, t.$listeners = n || r, e && t.$options.props) {
                                wt.shouldConvert = !1;
                                for (var a = t._props, l = t.$options._propKeys || [], c = 0; c < l.length; c++) {
                                    var u = l[c];
                                    a[u] = Rt(u, t.$options.props, e, t)
                                }
                                wt.shouldConvert = !0, t.$options.propsData = e
                            }
                            if (n) {
                                var f = t.$options._parentListeners;
                                t.$options._parentListeners = n, me(t, n, f)
                            }
                            s && (t.$slots = ve(i, o.context), t.$forceUpdate())
                        }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
                    },
                    insert: function(t) {
                        var e = t.context,
                            n = t.componentInstance;
                        n._isMounted || (n._isMounted = !0, we(n, "mounted")), t.data.keepAlive && (e._isMounted ? ((r = n)._inactive = !1, $e.push(r)) : Ce(n, !0));
                        var r
                    },
                    destroy: function(t) {
                        var e = t.componentInstance;
                        e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                            if (!(n && (e._directInactive = !0, be(e)) || e._inactive)) {
                                e._inactive = !0;
                                for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                                we(e, "deactivated")
                            }
                        }(e, !0) : e.$destroy())
                    }
                },
                tn = Object.keys(Qe);

            function en(t, e, n, a, c) {
                if (!o(t)) {
                    var u = n.$options._base;
                    if (l(t) && (t = u.extend(t)), "function" == typeof t) {
                        var f;
                        if (o(t.cid) && void 0 === (t = function(t, e, n) {
                                if (s(t.error) && i(t.errorComp)) return t.errorComp;
                                if (i(t.resolved)) return t.resolved;
                                if (s(t.loading) && i(t.loadingComp)) return t.loadingComp;
                                if (!i(t.contexts)) {
                                    var r = t.contexts = [n],
                                        a = !0,
                                        c = function() {
                                            for (var t = 0, e = r.length; t < e; t++) r[t].$forceUpdate()
                                        },
                                        u = F(function(n) {
                                            t.resolved = ce(n, e), a || c()
                                        }),
                                        f = F(function(e) {
                                            i(t.errorComp) && (t.error = !0, c())
                                        }),
                                        d = t(u, f);
                                    return l(d) && ("function" == typeof d.then ? o(t.resolved) && d.then(u, f) : i(d.component) && "function" == typeof d.component.then && (d.component.then(u, f), i(d.error) && (t.errorComp = ce(d.error, e)), i(d.loading) && (t.loadingComp = ce(d.loading, e), 0 === d.delay ? t.loading = !0 : setTimeout(function() {
                                        o(t.resolved) && o(t.error) && (t.loading = !0, c())
                                    }, d.delay || 200)), i(d.timeout) && setTimeout(function() {
                                        o(t.resolved) && f(null)
                                    }, d.timeout))), a = !1, t.loading ? t.loadingComp : t.resolved
                                }
                                t.contexts.push(n)
                            }(f = t, u, n))) return function(t, e, n, r, o) {
                            var i = mt();
                            return i.asyncFactory = t, i.asyncMeta = {
                                data: e,
                                context: n,
                                children: r,
                                tag: o
                            }, i
                        }(f, e, n, a, c);
                        e = e || {}, ln(t), i(e.model) && function(t, e) {
                            var n = t.model && t.model.prop || "value",
                                r = t.model && t.model.event || "input";
                            (e.props || (e.props = {}))[n] = e.model.value;
                            var o = e.on || (e.on = {});
                            i(o[r]) ? o[r] = [e.model.callback].concat(o[r]) : o[r] = e.model.callback
                        }(t.options, e);
                        var d = function(t, e, n) {
                            var r = e.options.props;
                            if (!o(r)) {
                                var s = {},
                                    a = t.attrs,
                                    l = t.props;
                                if (i(a) || i(l))
                                    for (var c in r) {
                                        var u = k(c);
                                        se(s, l, c, u, !0) || se(s, a, c, u, !1)
                                    }
                                return s
                            }
                        }(e, t);
                        if (s(t.options.functional)) return function(t, e, n, o, s) {
                            var a = t.options,
                                l = {},
                                c = a.props;
                            if (i(c))
                                for (var u in c) l[u] = Rt(u, c, e || r);
                            else i(n.attrs) && Ye(l, n.attrs), i(n.props) && Ye(l, n.props);
                            var f = new Ze(n, l, s, o, t),
                                d = a.render.call(null, f._c, f);
                            return d instanceof pt && (d.fnContext = o, d.fnOptions = a, n.slot && ((d.data || (d.data = {})).slot = n.slot)), d
                        }(t, d, e, n, a);
                        var p = e.on;
                        if (e.on = e.nativeOn, s(t.options.abstract)) {
                            var h = e.slot;
                            e = {}, h && (e.slot = h)
                        }! function(t) {
                            t.hook || (t.hook = {});
                            for (var e = 0; e < tn.length; e++) {
                                var n = tn[e],
                                    r = t.hook[n],
                                    o = Qe[n];
                                t.hook[n] = r ? nn(o, r) : o
                            }
                        }(e);
                        var m = t.options.name || c;
                        return new pt("vue-component-" + t.cid + (m ? "-" + m : ""), e, void 0, void 0, void 0, n, {
                            Ctor: t,
                            propsData: d,
                            listeners: p,
                            tag: c,
                            children: a
                        }, f)
                    }
                }
            }

            function nn(t, e) {
                return function(n, r, o, i) {
                    t(n, r, o, i), e(n, r, o, i)
                }
            }
            var rn = 1,
                on = 2;

            function sn(t, e, n, r, l, c) {
                return (Array.isArray(n) || a(n)) && (l = r, r = n, n = void 0), s(c) && (l = on),
                    function(t, e, n, r, a) {
                        if (i(n) && i(n.__ob__)) return mt();
                        i(n) && i(n.is) && (e = n.is);
                        if (!e) return mt();
                        0;
                        Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                            default: r[0]
                        }, r.length = 0);
                        a === on ? r = ae(r) : a === rn && (r = function(t) {
                            for (var e = 0; e < t.length; e++)
                                if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                            return t
                        }(r));
                        var l, c;
                        if ("string" == typeof e) {
                            var u;
                            c = t.$vnode && t.$vnode.ns || B.getTagNamespace(e), l = B.isReservedTag(e) ? new pt(B.parsePlatformTagName(e), n, r, void 0, void 0, t) : i(u = Pt(t.$options, "components", e)) ? en(u, n, t, r, e) : new pt(e, n, r, void 0, void 0, t)
                        } else l = en(e, n, t, r);
                        return i(l) ? (c && function t(e, n, r) {
                            e.ns = n;
                            "foreignObject" === e.tag && (n = void 0, r = !0);
                            if (i(e.children))
                                for (var a = 0, l = e.children.length; a < l; a++) {
                                    var c = e.children[a];
                                    i(c.tag) && (o(c.ns) || s(r)) && t(c, n, r)
                                }
                        }(l, c), l) : mt()
                    }(t, e, n, r, l)
            }
            var an = 0;

            function ln(t) {
                var e = t.options;
                if (t.super) {
                    var n = ln(t.super);
                    if (n !== t.superOptions) {
                        t.superOptions = n;
                        var r = function(t) {
                            var e, n = t.options,
                                r = t.extendOptions,
                                o = t.sealedOptions;
                            for (var i in n) n[i] !== o[i] && (e || (e = {}), e[i] = cn(n[i], r[i], o[i]));
                            return e
                        }(t);
                        r && A(t.extendOptions, r), (e = t.options = Ft(n, t.extendOptions)).name && (e.components[e.name] = t)
                    }
                }
                return e
            }

            function cn(t, e, n) {
                if (Array.isArray(t)) {
                    var r = [];
                    n = Array.isArray(n) ? n : [n], e = Array.isArray(e) ? e : [e];
                    for (var o = 0; o < t.length; o++)(e.indexOf(t[o]) >= 0 || n.indexOf(t[o]) < 0) && r.push(t[o]);
                    return r
                }
                return t
            }

            function un(t) {
                this._init(t)
            }
            un.prototype._init = function(t) {
                this._uid = an++, this._isVue = !0, t && t._isComponent ? function(t, e) {
                        var n = t.$options = Object.create(t.constructor.options),
                            r = e._parentVnode;
                        n.parent = e.parent, n._parentVnode = r, n._parentElm = e._parentElm, n._refElm = e._refElm;
                        var o = r.componentOptions;
                        n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
                    }(this, t) : this.$options = Ft(ln(this.constructor), t || {}, this), this._renderProxy = this, this._self = this,
                    function(t) {
                        var e = t.$options,
                            n = e.parent;
                        if (n && !e.abstract) {
                            for (; n.$options.abstract && n.$parent;) n = n.$parent;
                            n.$children.push(t)
                        }
                        t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
                    }(this),
                    function(t) {
                        t._events = Object.create(null), t._hasHookEvent = !1;
                        var e = t.$options._parentListeners;
                        e && me(t, e)
                    }(this),
                    function(t) {
                        t._vnode = null, t._staticTrees = null;
                        var e = t.$options,
                            n = t.$vnode = e._parentVnode,
                            o = n && n.context;
                        t.$slots = ve(e._renderChildren, o), t.$scopedSlots = r, t._c = function(e, n, r, o) {
                            return sn(t, e, n, r, o, !1)
                        }, t.$createElement = function(e, n, r, o) {
                            return sn(t, e, n, r, o, !0)
                        };
                        var i = n && n.data;
                        Tt(t, "$attrs", i && i.attrs || r, 0, !0), Tt(t, "$listeners", e._parentListeners || r, 0, !0)
                    }(this), we(this, "beforeCreate"),
                    function(t) {
                        var e = Le(t.$options.inject, t);
                        e && (wt.shouldConvert = !1, Object.keys(e).forEach(function(n) {
                            Tt(t, n, e[n])
                        }), wt.shouldConvert = !0)
                    }(this), Me(this),
                    function(t) {
                        var e = t.$options.provide;
                        e && (t._provided = "function" == typeof e ? e.call(t) : e)
                    }(this), we(this, "created"), this.$options.el && this.$mount(this.$options.el)
            };
            ! function(t) {
                var e = {};
                e.get = function() {
                    return this._data
                };
                var n = {};
                n.get = function() {
                    return this._props
                }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = Ot, t.prototype.$delete = At, t.prototype.$watch = function(t, e, n) {
                    if (u(e)) return Re(this, t, e, n);
                    (n = n || {}).user = !0;
                    var r = new Ee(this, t, e, n);
                    return n.immediate && e.call(this, r.value),
                        function() {
                            r.teardown()
                        }
                }
            }(un),
            function(t) {
                var e = /^hook:/;
                t.prototype.$on = function(t, n) {
                    if (Array.isArray(t))
                        for (var r = 0, o = t.length; r < o; r++) this.$on(t[r], n);
                    else(this._events[t] || (this._events[t] = [])).push(n), e.test(t) && (this._hasHookEvent = !0);
                    return this
                }, t.prototype.$once = function(t, e) {
                    var n = this;

                    function r() {
                        n.$off(t, r), e.apply(n, arguments)
                    }
                    return r.fn = e, n.$on(t, r), n
                }, t.prototype.$off = function(t, e) {
                    if (!arguments.length) return this._events = Object.create(null), this;
                    if (Array.isArray(t)) {
                        for (var n = 0, r = t.length; n < r; n++) this.$off(t[n], e);
                        return this
                    }
                    var o = this._events[t];
                    if (!o) return this;
                    if (!e) return this._events[t] = null, this;
                    if (e)
                        for (var i, s = o.length; s--;)
                            if ((i = o[s]) === e || i.fn === e) {
                                o.splice(s, 1);
                                break
                            }
                    return this
                }, t.prototype.$emit = function(t) {
                    var e = this._events[t];
                    if (e) {
                        e = e.length > 1 ? O(e) : e;
                        for (var n = O(arguments, 1), r = 0, o = e.length; r < o; r++) try {
                            e[r].apply(this, n)
                        } catch (e) {
                            Ut(e, this, 'event handler for "' + t + '"')
                        }
                    }
                    return this
                }
            }(un), (fn = un).prototype._update = function(t, e) {
                this._isMounted && we(this, "beforeUpdate");
                var n = this.$el,
                    r = this._vnode,
                    o = _e;
                _e = this, this._vnode = t, r ? this.$el = this.__patch__(r, t) : (this.$el = this.__patch__(this.$el, t, e, !1, this.$options._parentElm, this.$options._refElm), this.$options._parentElm = this.$options._refElm = null), _e = o, n && (n.__vue__ = null), this.$el && (this.$el.__vue__ = this), this.$vnode && this.$parent && this.$vnode === this.$parent._vnode && (this.$parent.$el = this.$el)
            }, fn.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update()
            }, fn.prototype.$destroy = function() {
                if (!this._isBeingDestroyed) {
                    we(this, "beforeDestroy"), this._isBeingDestroyed = !0;
                    var t = this.$parent;
                    !t || t._isBeingDestroyed || this.$options.abstract || g(t.$children, this), this._watcher && this._watcher.teardown();
                    for (var e = this._watchers.length; e--;) this._watchers[e].teardown();
                    this._data.__ob__ && this._data.__ob__.vmCount--, this._isDestroyed = !0, this.__patch__(this._vnode, null), we(this, "destroyed"), this.$off(), this.$el && (this.$el.__vue__ = null), this.$vnode && (this.$vnode.parent = null)
                }
            };
            var fn;
            Je((dn = un).prototype), dn.prototype.$nextTick = function(t) {
                return Qt(t, this)
            }, dn.prototype._render = function() {
                var t = this.$options,
                    e = t.render,
                    n = t._parentVnode;
                if (this._isMounted)
                    for (var o in this.$slots) {
                        var i = this.$slots[o];
                        (i._rendered || i[0] && i[0].elm) && (this.$slots[o] = gt(i, !0))
                    }
                this.$scopedSlots = n && n.data.scopedSlots || r, this.$vnode = n;
                var s;
                try {
                    s = e.call(this._renderProxy, this.$createElement)
                } catch (t) {
                    Ut(t, this, "render"), s = this._vnode
                }
                return s instanceof pt || (s = mt()), s.parent = n, s
            };
            var dn;

            function pn(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var n = this,
                        r = n.cid,
                        o = t._Ctor || (t._Ctor = {});
                    if (o[r]) return o[r];
                    var i = t.name || n.options.name;
                    var s = function(t) {
                        this._init(t)
                    };
                    return (s.prototype = Object.create(n.prototype)).constructor = s, s.cid = e++, s.options = Ft(n.options, t), s.super = n, s.options.props && function(t) {
                        var e = t.options.props;
                        for (var n in e) je(t.prototype, "_props", n)
                    }(s), s.options.computed && function(t) {
                        var e = t.options.computed;
                        for (var n in e) Fe(t.prototype, n, e[n])
                    }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, R.forEach(function(t) {
                        s[t] = n[t]
                    }), i && (s.options.components[i] = s), s.superOptions = n.options, s.extendOptions = t, s.sealedOptions = A({}, s.options), o[r] = s, s
                }
            }

            function hn(t) {
                return t && (t.Ctor.options.name || t.tag)
            }

            function mn(t, e) {
                return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!f(t) && t.test(e)
            }

            function vn(t, e) {
                var n = t.cache,
                    r = t.keys,
                    o = t._vnode;
                for (var i in n) {
                    var s = n[i];
                    if (s) {
                        var a = hn(s.componentOptions);
                        a && !e(a) && yn(n, i, r, o)
                    }
                }
            }

            function yn(t, e, n, r) {
                var o = t[e];
                !o || r && o.tag === r.tag || o.componentInstance.$destroy(), t[e] = null, g(n, e)
            }
            var gn = [String, RegExp, Array],
                _n = {
                    KeepAlive: {
                        name: "keep-alive",
                        abstract: !0,
                        props: {
                            include: gn,
                            exclude: gn,
                            max: [String, Number]
                        },
                        created: function() {
                            this.cache = Object.create(null), this.keys = []
                        },
                        destroyed: function() {
                            for (var t in this.cache) yn(this.cache, t, this.keys)
                        },
                        watch: {
                            include: function(t) {
                                vn(this, function(e) {
                                    return mn(t, e)
                                })
                            },
                            exclude: function(t) {
                                vn(this, function(e) {
                                    return !mn(t, e)
                                })
                            }
                        },
                        render: function() {
                            var t = this.$slots.default,
                                e = fe(t),
                                n = e && e.componentOptions;
                            if (n) {
                                var r = hn(n),
                                    o = this.include,
                                    i = this.exclude;
                                if (o && (!r || !mn(o, r)) || i && r && mn(i, r)) return e;
                                var s = this.cache,
                                    a = this.keys,
                                    l = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                                s[l] ? (e.componentInstance = s[l].componentInstance, g(a, l), a.push(l)) : (s[l] = e, a.push(l), this.max && a.length > parseInt(this.max) && yn(s, a[0], a, this._vnode)), e.data.keepAlive = !0
                            }
                            return e || t && t[0]
                        }
                    }
                };
            ! function(t) {
                var e = {};
                e.get = function() {
                    return B
                }, Object.defineProperty(t, "config", e), t.util = {
                    warn: ct,
                    extend: A,
                    mergeOptions: Ft,
                    defineReactive: Tt
                }, t.set = Ot, t.delete = At, t.nextTick = Qt, t.options = Object.create(null), R.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null)
                }), t.options._base = t, A(t.options.components, _n), t.use = function(t) {
                    var e = this._installedPlugins || (this._installedPlugins = []);
                    if (e.indexOf(t) > -1) return this;
                    var n = O(arguments, 1);
                    return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this
                }, t.mixin = function(t) {
                    return this.options = Ft(this.options, t), this
                }, pn(t), n = t, R.forEach(function(t) {
                    n[t] = function(e, n) {
                        return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                    }
                });
                var n
            }(un), Object.defineProperty(un.prototype, "$isServer", {
                get: ot
            }), Object.defineProperty(un.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }), un.version = "2.5.13";
            var bn = m("style,class"),
                Cn = m("input,textarea,option,select,progress"),
                wn = function(t, e, n) {
                    return "value" === n && Cn(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
                },
                xn = m("contenteditable,draggable,spellcheck"),
                $n = m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Sn = "http://www.w3.org/1999/xlink",
                kn = function(t) {
                    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
                },
                Tn = function(t) {
                    return kn(t) ? t.slice(6, t.length) : ""
                },
                On = function(t) {
                    return null == t || !1 === t
                };

            function An(t) {
                for (var e = t.data, n = t, r = t; i(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (e = In(r.data, e));
                for (; i(n = n.parent);) n && n.data && (e = In(e, n.data));
                return function(t, e) {
                    if (i(t) || i(e)) return En(t, Nn(e));
                    return ""
                }(e.staticClass, e.class)
            }

            function In(t, e) {
                return {
                    staticClass: En(t.staticClass, e.staticClass),
                    class: i(t.class) ? [t.class, e.class] : e.class
                }
            }

            function En(t, e) {
                return t ? e ? t + " " + e : t : e || ""
            }

            function Nn(t) {
                return Array.isArray(t) ? function(t) {
                    for (var e, n = "", r = 0, o = t.length; r < o; r++) i(e = Nn(t[r])) && "" !== e && (n && (n += " "), n += e);
                    return n
                }(t) : l(t) ? function(t) {
                    var e = "";
                    for (var n in t) t[n] && (e && (e += " "), e += n);
                    return e
                }(t) : "string" == typeof t ? t : ""
            }
            var jn = {
                    svg: "http://www.w3.org/2000/svg",
                    math: "http://www.w3.org/1998/Math/MathML"
                },
                Mn = m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                Dn = m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Fn = function(t) {
                    return Mn(t) || Dn(t)
                };

            function Pn(t) {
                return Dn(t) ? "svg" : "math" === t ? "math" : void 0
            }
            var Rn = Object.create(null);
            var Ln = m("text,number,password,search,email,tel,url");

            function Bn(t) {
                if ("string" == typeof t) {
                    var e = document.querySelector(t);
                    return e || document.createElement("div")
                }
                return t
            }
            var Un = Object.freeze({
                    createElement: function(t, e) {
                        var n = document.createElement(t);
                        return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
                    },
                    createElementNS: function(t, e) {
                        return document.createElementNS(jn[t], e)
                    },
                    createTextNode: function(t) {
                        return document.createTextNode(t)
                    },
                    createComment: function(t) {
                        return document.createComment(t)
                    },
                    insertBefore: function(t, e, n) {
                        t.insertBefore(e, n)
                    },
                    removeChild: function(t, e) {
                        t.removeChild(e)
                    },
                    appendChild: function(t, e) {
                        t.appendChild(e)
                    },
                    parentNode: function(t) {
                        return t.parentNode
                    },
                    nextSibling: function(t) {
                        return t.nextSibling
                    },
                    tagName: function(t) {
                        return t.tagName
                    },
                    setTextContent: function(t, e) {
                        t.textContent = e
                    },
                    setAttribute: function(t, e, n) {
                        t.setAttribute(e, n)
                    }
                }),
                Vn = {
                    create: function(t, e) {
                        qn(e)
                    },
                    update: function(t, e) {
                        t.data.ref !== e.data.ref && (qn(t, !0), qn(e))
                    },
                    destroy: function(t) {
                        qn(t, !0)
                    }
                };

            function qn(t, e) {
                var n = t.data.ref;
                if (n) {
                    var r = t.context,
                        o = t.componentInstance || t.elm,
                        i = r.$refs;
                    e ? Array.isArray(i[n]) ? g(i[n], o) : i[n] === o && (i[n] = void 0) : t.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(o) < 0 && i[n].push(o) : i[n] = [o] : i[n] = o
                }
            }
            var Hn = new pt("", {}, []),
                Gn = ["create", "activate", "update", "remove", "destroy"];

            function zn(t, e) {
                return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && i(t.data) === i(e.data) && function(t, e) {
                    if ("input" !== t.tag) return !0;
                    var n, r = i(n = t.data) && i(n = n.attrs) && n.type,
                        o = i(n = e.data) && i(n = n.attrs) && n.type;
                    return r === o || Ln(r) && Ln(o)
                }(t, e) || s(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && o(e.asyncFactory.error))
            }

            function Wn(t, e, n) {
                var r, o, s = {};
                for (r = e; r <= n; ++r) i(o = t[r].key) && (s[o] = r);
                return s
            }
            var Kn = {
                create: Xn,
                update: Xn,
                destroy: function(t) {
                    Xn(t, Hn)
                }
            };

            function Xn(t, e) {
                (t.data.directives || e.data.directives) && function(t, e) {
                    var n, r, o, i = t === Hn,
                        s = e === Hn,
                        a = Zn(t.data.directives, t.context),
                        l = Zn(e.data.directives, e.context),
                        c = [],
                        u = [];
                    for (n in l) r = a[n], o = l[n], r ? (o.oldValue = r.value, Yn(o, "update", e, t), o.def && o.def.componentUpdated && u.push(o)) : (Yn(o, "bind", e, t), o.def && o.def.inserted && c.push(o));
                    if (c.length) {
                        var f = function() {
                            for (var n = 0; n < c.length; n++) Yn(c[n], "inserted", e, t)
                        };
                        i ? ie(e, "insert", f) : f()
                    }
                    u.length && ie(e, "postpatch", function() {
                        for (var n = 0; n < u.length; n++) Yn(u[n], "componentUpdated", e, t)
                    });
                    if (!i)
                        for (n in a) l[n] || Yn(a[n], "unbind", t, t, s)
                }(t, e)
            }
            var Jn = Object.create(null);

            function Zn(t, e) {
                var n = Object.create(null);
                if (!t) return n;
                var r, o;
                for (r = 0; r < t.length; r++)(o = t[r]).modifiers || (o.modifiers = Jn), n[(i = o, i.rawName || i.name + "." + Object.keys(i.modifiers || {}).join("."))] = o, o.def = Pt(e.$options, "directives", o.name);
                var i;
                return n
            }

            function Yn(t, e, n, r, o) {
                var i = t.def && t.def[e];
                if (i) try {
                    i(n.elm, t, n, r, o)
                } catch (r) {
                    Ut(r, n.context, "directive " + t.name + " " + e + " hook")
                }
            }
            var Qn = [Vn, Kn];

            function tr(t, e) {
                var n = e.componentOptions;
                if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || o(t.data.attrs) && o(e.data.attrs))) {
                    var r, s, a = e.elm,
                        l = t.data.attrs || {},
                        c = e.data.attrs || {};
                    i(c.__ob__) && (c = e.data.attrs = A({}, c));
                    for (r in c) s = c[r], l[r] !== s && er(a, r, s);
                    (X || Z) && c.value !== l.value && er(a, "value", c.value);
                    for (r in l) o(c[r]) && (kn(r) ? a.removeAttributeNS(Sn, Tn(r)) : xn(r) || a.removeAttribute(r))
                }
            }

            function er(t, e, n) {
                if ($n(e)) On(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n));
                else if (xn(e)) t.setAttribute(e, On(n) || "false" === n ? "false" : "true");
                else if (kn(e)) On(n) ? t.removeAttributeNS(Sn, Tn(e)) : t.setAttributeNS(Sn, e, n);
                else if (On(n)) t.removeAttribute(e);
                else {
                    if (X && !J && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                        var r = function(e) {
                            e.stopImmediatePropagation(), t.removeEventListener("input", r)
                        };
                        t.addEventListener("input", r), t.__ieph = !0
                    }
                    t.setAttribute(e, n)
                }
            }
            var nr = {
                create: tr,
                update: tr
            };

            function rr(t, e) {
                var n = e.elm,
                    r = e.data,
                    s = t.data;
                if (!(o(r.staticClass) && o(r.class) && (o(s) || o(s.staticClass) && o(s.class)))) {
                    var a = An(e),
                        l = n._transitionClasses;
                    i(l) && (a = En(a, Nn(l))), a !== n._prevClass && (n.setAttribute("class", a), n._prevClass = a)
                }
            }
            var or = {
                    create: rr,
                    update: rr
                },
                ir = /[\w).+\-_$\]]/;

            function sr(t) {
                var e, n, r, o, i, s = !1,
                    a = !1,
                    l = !1,
                    c = !1,
                    u = 0,
                    f = 0,
                    d = 0,
                    p = 0;
                for (r = 0; r < t.length; r++)
                    if (n = e, e = t.charCodeAt(r), s) 39 === e && 92 !== n && (s = !1);
                    else if (a) 34 === e && 92 !== n && (a = !1);
                else if (l) 96 === e && 92 !== n && (l = !1);
                else if (c) 47 === e && 92 !== n && (c = !1);
                else if (124 !== e || 124 === t.charCodeAt(r + 1) || 124 === t.charCodeAt(r - 1) || u || f || d) {
                    switch (e) {
                        case 34:
                            a = !0;
                            break;
                        case 39:
                            s = !0;
                            break;
                        case 96:
                            l = !0;
                            break;
                        case 40:
                            d++;
                            break;
                        case 41:
                            d--;
                            break;
                        case 91:
                            f++;
                            break;
                        case 93:
                            f--;
                            break;
                        case 123:
                            u++;
                            break;
                        case 125:
                            u--
                    }
                    if (47 === e) {
                        for (var h = r - 1, m = void 0; h >= 0 && " " === (m = t.charAt(h)); h--);
                        m && ir.test(m) || (c = !0)
                    }
                } else void 0 === o ? (p = r + 1, o = t.slice(0, r).trim()) : v();
                void 0 === o ? o = t.slice(0, r).trim() : 0 !== p && v();

                function v() {
                    (i || (i = [])).push(t.slice(p, r).trim()), p = r + 1
                }
                if (i)
                    for (r = 0; r < i.length; r++) o = ar(o, i[r]);
                return o
            }

            function ar(t, e) {
                var n = e.indexOf("(");
                if (n < 0) return '_f("' + e + '")(' + t + ")";
                return '_f("' + e.slice(0, n) + '")(' + t + "," + e.slice(n + 1)
            }

            function lr(t) {
                console.error("[Vue compiler]: " + t)
            }

            function cr(t, e) {
                return t ? t.map(function(t) {
                    return t[e]
                }).filter(function(t) {
                    return t
                }) : []
            }

            function ur(t, e, n) {
                (t.props || (t.props = [])).push({
                    name: e,
                    value: n
                }), t.plain = !1
            }

            function fr(t, e, n) {
                (t.attrs || (t.attrs = [])).push({
                    name: e,
                    value: n
                }), t.plain = !1
            }

            function dr(t, e, n) {
                t.attrsMap[e] = n, t.attrsList.push({
                    name: e,
                    value: n
                })
            }

            function pr(t, e, n, o, i, s) {
                (o = o || r).capture && (delete o.capture, e = "!" + e), o.once && (delete o.once, e = "~" + e), o.passive && (delete o.passive, e = "&" + e), "click" === e && (o.right ? (e = "contextmenu", delete o.right) : o.middle && (e = "mouseup"));
                var a;
                o.native ? (delete o.native, a = t.nativeEvents || (t.nativeEvents = {})) : a = t.events || (t.events = {});
                var l = {
                    value: n
                };
                o !== r && (l.modifiers = o);
                var c = a[e];
                Array.isArray(c) ? i ? c.unshift(l) : c.push(l) : a[e] = c ? i ? [l, c] : [c, l] : l, t.plain = !1
            }

            function hr(t, e, n) {
                var r = mr(t, ":" + e) || mr(t, "v-bind:" + e);
                if (null != r) return sr(r);
                if (!1 !== n) {
                    var o = mr(t, e);
                    if (null != o) return JSON.stringify(o)
                }
            }

            function mr(t, e, n) {
                var r;
                if (null != (r = t.attrsMap[e]))
                    for (var o = t.attrsList, i = 0, s = o.length; i < s; i++)
                        if (o[i].name === e) {
                            o.splice(i, 1);
                            break
                        }
                return n && delete t.attrsMap[e], r
            }

            function vr(t, e, n) {
                var r = n || {},
                    o = r.number,
                    i = "$$v";
                r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"), o && (i = "_n(" + i + ")");
                var s = yr(e, i);
                t.model = {
                    value: "(" + e + ")",
                    expression: '"' + e + '"',
                    callback: "function ($$v) {" + s + "}"
                }
            }

            function yr(t, e) {
                var n = function(t) {
                    if (gr = t.length, t.indexOf("[") < 0 || t.lastIndexOf("]") < gr - 1) return (Cr = t.lastIndexOf(".")) > -1 ? {
                        exp: t.slice(0, Cr),
                        key: '"' + t.slice(Cr + 1) + '"'
                    } : {
                        exp: t,
                        key: null
                    };
                    _r = t, Cr = wr = xr = 0;
                    for (; !Sr();) kr(br = $r()) ? Or(br) : 91 === br && Tr(br);
                    return {
                        exp: t.slice(0, wr),
                        key: t.slice(wr + 1, xr)
                    }
                }(t);
                return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")"
            }
            var gr, _r, br, Cr, wr, xr;

            function $r() {
                return _r.charCodeAt(++Cr)
            }

            function Sr() {
                return Cr >= gr
            }

            function kr(t) {
                return 34 === t || 39 === t
            }

            function Tr(t) {
                var e = 1;
                for (wr = Cr; !Sr();)
                    if (kr(t = $r())) Or(t);
                    else if (91 === t && e++, 93 === t && e--, 0 === e) {
                    xr = Cr;
                    break
                }
            }

            function Or(t) {
                for (var e = t; !Sr() && (t = $r()) !== e;);
            }
            var Ar = "__r",
                Ir = "__c";
            var Er;

            function Nr(t, e, n, r, o) {
                e = (i = e)._withTask || (i._withTask = function() {
                    Xt = !0;
                    var t = i.apply(null, arguments);
                    return Xt = !1, t
                });
                var i;
                n && (e = function(t, e, n) {
                    var r = Er;
                    return function o() {
                        null !== t.apply(null, arguments) && jr(e, o, n, r)
                    }
                }(e, t, r)), Er.addEventListener(t, e, et ? {
                    capture: r,
                    passive: o
                } : r)
            }

            function jr(t, e, n, r) {
                (r || Er).removeEventListener(t, e._withTask || e, n)
            }

            function Mr(t, e) {
                if (!o(t.data.on) || !o(e.data.on)) {
                    var n = e.data.on || {},
                        r = t.data.on || {};
                    Er = e.elm,
                        function(t) {
                            if (i(t[Ar])) {
                                var e = X ? "change" : "input";
                                t[e] = [].concat(t[Ar], t[e] || []), delete t[Ar]
                            }
                            i(t[Ir]) && (t.change = [].concat(t[Ir], t.change || []), delete t[Ir])
                        }(n), oe(n, r, Nr, jr, e.context), Er = void 0
                }
            }
            var Dr = {
                create: Mr,
                update: Mr
            };

            function Fr(t, e) {
                if (!o(t.data.domProps) || !o(e.data.domProps)) {
                    var n, r, s = e.elm,
                        a = t.data.domProps || {},
                        l = e.data.domProps || {};
                    i(l.__ob__) && (l = e.data.domProps = A({}, l));
                    for (n in a) o(l[n]) && (s[n] = "");
                    for (n in l) {
                        if (r = l[n], "textContent" === n || "innerHTML" === n) {
                            if (e.children && (e.children.length = 0), r === a[n]) continue;
                            1 === s.childNodes.length && s.removeChild(s.childNodes[0])
                        }
                        if ("value" === n) {
                            s._value = r;
                            var c = o(r) ? "" : String(r);
                            f = c, (u = s).composing || "OPTION" !== u.tagName && ! function(t, e) {
                                var n = !0;
                                try {
                                    n = document.activeElement !== t
                                } catch (t) {}
                                return n && t.value !== e
                            }(u, f) && ! function(t, e) {
                                var n = t.value,
                                    r = t._vModifiers;
                                if (i(r)) {
                                    if (r.lazy) return !1;
                                    if (r.number) return h(n) !== h(e);
                                    if (r.trim) return n.trim() !== e.trim()
                                }
                                return n !== e
                            }(u, f) || (s.value = c)
                        } else s[n] = r
                    }
                    var u, f
                }
            }
            var Pr = {
                    create: Fr,
                    update: Fr
                },
                Rr = C(function(t) {
                    var e = {},
                        n = /:(.+)/;
                    return t.split(/;(?![^(]*\))/g).forEach(function(t) {
                        if (t) {
                            var r = t.split(n);
                            r.length > 1 && (e[r[0].trim()] = r[1].trim())
                        }
                    }), e
                });

            function Lr(t) {
                var e = Br(t.style);
                return t.staticStyle ? A(t.staticStyle, e) : e
            }

            function Br(t) {
                return Array.isArray(t) ? I(t) : "string" == typeof t ? Rr(t) : t
            }
            var Ur, Vr = /^--/,
                qr = /\s*!important$/,
                Hr = function(t, e, n) {
                    if (Vr.test(e)) t.style.setProperty(e, n);
                    else if (qr.test(n)) t.style.setProperty(e, n.replace(qr, ""), "important");
                    else {
                        var r = zr(e);
                        if (Array.isArray(n))
                            for (var o = 0, i = n.length; o < i; o++) t.style[r] = n[o];
                        else t.style[r] = n
                    }
                },
                Gr = ["Webkit", "Moz", "ms"],
                zr = C(function(t) {
                    if (Ur = Ur || document.createElement("div").style, "filter" !== (t = x(t)) && t in Ur) return t;
                    for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Gr.length; n++) {
                        var r = Gr[n] + e;
                        if (r in Ur) return r
                    }
                });

            function Wr(t, e) {
                var n = e.data,
                    r = t.data;
                if (!(o(n.staticStyle) && o(n.style) && o(r.staticStyle) && o(r.style))) {
                    var s, a, l = e.elm,
                        c = r.staticStyle,
                        u = r.normalizedStyle || r.style || {},
                        f = c || u,
                        d = Br(e.data.style) || {};
                    e.data.normalizedStyle = i(d.__ob__) ? A({}, d) : d;
                    var p = function(t, e) {
                        var n, r = {};
                        if (e)
                            for (var o = t; o.componentInstance;)(o = o.componentInstance._vnode) && o.data && (n = Lr(o.data)) && A(r, n);
                        (n = Lr(t.data)) && A(r, n);
                        for (var i = t; i = i.parent;) i.data && (n = Lr(i.data)) && A(r, n);
                        return r
                    }(e, !0);
                    for (a in f) o(p[a]) && Hr(l, a, "");
                    for (a in p)(s = p[a]) !== f[a] && Hr(l, a, null == s ? "" : s)
                }
            }
            var Kr = {
                create: Wr,
                update: Wr
            };

            function Xr(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                        return t.classList.add(e)
                    }) : t.classList.add(e);
                    else {
                        var n = " " + (t.getAttribute("class") || "") + " ";
                        n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                    }
            }

            function Jr(t, e) {
                if (e && (e = e.trim()))
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                        return t.classList.remove(e)
                    }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
                    else {
                        for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                        (n = n.trim()) ? t.setAttribute("class", n): t.removeAttribute("class")
                    }
            }

            function Zr(t) {
                if (t) {
                    if ("object" == typeof t) {
                        var e = {};
                        return !1 !== t.css && A(e, Yr(t.name || "v")), A(e, t), e
                    }
                    return "string" == typeof t ? Yr(t) : void 0
                }
            }
            var Yr = C(function(t) {
                    return {
                        enterClass: t + "-enter",
                        enterToClass: t + "-enter-to",
                        enterActiveClass: t + "-enter-active",
                        leaveClass: t + "-leave",
                        leaveToClass: t + "-leave-to",
                        leaveActiveClass: t + "-leave-active"
                    }
                }),
                Qr = G && !J,
                to = "transition",
                eo = "animation",
                no = "transition",
                ro = "transitionend",
                oo = "animation",
                io = "animationend";
            Qr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (no = "WebkitTransition", ro = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (oo = "WebkitAnimation", io = "webkitAnimationEnd"));
            var so = G ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
                return t()
            };

            function ao(t) {
                so(function() {
                    so(t)
                })
            }

            function lo(t, e) {
                var n = t._transitionClasses || (t._transitionClasses = []);
                n.indexOf(e) < 0 && (n.push(e), Xr(t, e))
            }

            function co(t, e) {
                t._transitionClasses && g(t._transitionClasses, e), Jr(t, e)
            }

            function uo(t, e, n) {
                var r = po(t, e),
                    o = r.type,
                    i = r.timeout,
                    s = r.propCount;
                if (!o) return n();
                var a = o === to ? ro : io,
                    l = 0,
                    c = function() {
                        t.removeEventListener(a, u), n()
                    },
                    u = function(e) {
                        e.target === t && ++l >= s && c()
                    };
                setTimeout(function() {
                    l < s && c()
                }, i + 1), t.addEventListener(a, u)
            }
            var fo = /\b(transform|all)(,|$)/;

            function po(t, e) {
                var n, r = window.getComputedStyle(t),
                    o = r[no + "Delay"].split(", "),
                    i = r[no + "Duration"].split(", "),
                    s = ho(o, i),
                    a = r[oo + "Delay"].split(", "),
                    l = r[oo + "Duration"].split(", "),
                    c = ho(a, l),
                    u = 0,
                    f = 0;
                e === to ? s > 0 && (n = to, u = s, f = i.length) : e === eo ? c > 0 && (n = eo, u = c, f = l.length) : f = (n = (u = Math.max(s, c)) > 0 ? s > c ? to : eo : null) ? n === to ? i.length : l.length : 0;
                return {
                    type: n,
                    timeout: u,
                    propCount: f,
                    hasTransform: n === to && fo.test(r[no + "Property"])
                }
            }

            function ho(t, e) {
                for (; t.length < e.length;) t = t.concat(t);
                return Math.max.apply(null, e.map(function(e, n) {
                    return mo(e) + mo(t[n])
                }))
            }

            function mo(t) {
                return 1e3 * Number(t.slice(0, -1))
            }

            function vo(t, e) {
                var n = t.elm;
                i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
                var r = Zr(t.data.transition);
                if (!o(r) && !i(n._enterCb) && 1 === n.nodeType) {
                    for (var s = r.css, a = r.type, c = r.enterClass, u = r.enterToClass, f = r.enterActiveClass, d = r.appearClass, p = r.appearToClass, m = r.appearActiveClass, v = r.beforeEnter, y = r.enter, g = r.afterEnter, _ = r.enterCancelled, b = r.beforeAppear, C = r.appear, w = r.afterAppear, x = r.appearCancelled, $ = r.duration, S = _e, k = _e.$vnode; k && k.parent;) S = (k = k.parent).context;
                    var T = !S._isMounted || !t.isRootInsert;
                    if (!T || C || "" === C) {
                        var O = T && d ? d : c,
                            A = T && m ? m : f,
                            I = T && p ? p : u,
                            E = T ? b || v : v,
                            N = T && "function" == typeof C ? C : y,
                            j = T ? w || g : g,
                            M = T ? x || _ : _,
                            D = h(l($) ? $.enter : $);
                        0;
                        var P = !1 !== s && !J,
                            R = _o(N),
                            L = n._enterCb = F(function() {
                                P && (co(n, I), co(n, A)), L.cancelled ? (P && co(n, O), M && M(n)) : j && j(n), n._enterCb = null
                            });
                        t.data.show || ie(t, "insert", function() {
                            var e = n.parentNode,
                                r = e && e._pending && e._pending[t.key];
                            r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), N && N(n, L)
                        }), E && E(n), P && (lo(n, O), lo(n, A), ao(function() {
                            lo(n, I), co(n, O), L.cancelled || R || (go(D) ? setTimeout(L, D) : uo(n, a, L))
                        })), t.data.show && (e && e(), N && N(n, L)), P || R || L()
                    }
                }
            }

            function yo(t, e) {
                var n = t.elm;
                i(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
                var r = Zr(t.data.transition);
                if (o(r) || 1 !== n.nodeType) return e();
                if (!i(n._leaveCb)) {
                    var s = r.css,
                        a = r.type,
                        c = r.leaveClass,
                        u = r.leaveToClass,
                        f = r.leaveActiveClass,
                        d = r.beforeLeave,
                        p = r.leave,
                        m = r.afterLeave,
                        v = r.leaveCancelled,
                        y = r.delayLeave,
                        g = r.duration,
                        _ = !1 !== s && !J,
                        b = _o(p),
                        C = h(l(g) ? g.leave : g);
                    0;
                    var w = n._leaveCb = F(function() {
                        n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), _ && (co(n, u), co(n, f)), w.cancelled ? (_ && co(n, c), v && v(n)) : (e(), m && m(n)), n._leaveCb = null
                    });
                    y ? y(x) : x()
                }

                function x() {
                    w.cancelled || (t.data.show || ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), d && d(n), _ && (lo(n, c), lo(n, f), ao(function() {
                        lo(n, u), co(n, c), w.cancelled || b || (go(C) ? setTimeout(w, C) : uo(n, a, w))
                    })), p && p(n, w), _ || b || w())
                }
            }

            function go(t) {
                return "number" == typeof t && !isNaN(t)
            }

            function _o(t) {
                if (o(t)) return !1;
                var e = t.fns;
                return i(e) ? _o(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1
            }

            function bo(t, e) {
                !0 !== e.data.show && vo(e)
            }
            var Co = function(t) {
                var e, n, r = {},
                    l = t.modules,
                    c = t.nodeOps;
                for (e = 0; e < Gn.length; ++e)
                    for (r[Gn[e]] = [], n = 0; n < l.length; ++n) i(l[n][Gn[e]]) && r[Gn[e]].push(l[n][Gn[e]]);

                function u(t) {
                    var e = c.parentNode(t);
                    i(e) && c.removeChild(e, t)
                }

                function f(t, e, n, o, a) {
                    if (t.isRootInsert = !a, ! function(t, e, n, o) {
                            var a = t.data;
                            if (i(a)) {
                                var l = i(t.componentInstance) && a.keepAlive;
                                if (i(a = a.hook) && i(a = a.init) && a(t, !1, n, o), i(t.componentInstance)) return d(t, e), s(l) && function(t, e, n, o) {
                                    for (var s, a = t; a.componentInstance;)
                                        if (a = a.componentInstance._vnode, i(s = a.data) && i(s = s.transition)) {
                                            for (s = 0; s < r.activate.length; ++s) r.activate[s](Hn, a);
                                            e.push(a);
                                            break
                                        }
                                    p(n, t.elm, o)
                                }(t, e, n, o), !0
                            }
                        }(t, e, n, o)) {
                        var l = t.data,
                            u = t.children,
                            f = t.tag;
                        i(f) ? (t.elm = t.ns ? c.createElementNS(t.ns, f) : c.createElement(f, t), g(t), h(t, u, e), i(l) && y(t, e), p(n, t.elm, o)) : s(t.isComment) ? (t.elm = c.createComment(t.text), p(n, t.elm, o)) : (t.elm = c.createTextNode(t.text), p(n, t.elm, o))
                    }
                }

                function d(t, e) {
                    i(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, v(t) ? (y(t, e), g(t)) : (qn(t), e.push(t))
                }

                function p(t, e, n) {
                    i(t) && (i(n) ? n.parentNode === t && c.insertBefore(t, e, n) : c.appendChild(t, e))
                }

                function h(t, e, n) {
                    if (Array.isArray(e))
                        for (var r = 0; r < e.length; ++r) f(e[r], n, t.elm, null, !0);
                    else a(t.text) && c.appendChild(t.elm, c.createTextNode(String(t.text)))
                }

                function v(t) {
                    for (; t.componentInstance;) t = t.componentInstance._vnode;
                    return i(t.tag)
                }

                function y(t, n) {
                    for (var o = 0; o < r.create.length; ++o) r.create[o](Hn, t);
                    i(e = t.data.hook) && (i(e.create) && e.create(Hn, t), i(e.insert) && n.push(t))
                }

                function g(t) {
                    var e;
                    if (i(e = t.fnScopeId)) c.setAttribute(t.elm, e, "");
                    else
                        for (var n = t; n;) i(e = n.context) && i(e = e.$options._scopeId) && c.setAttribute(t.elm, e, ""), n = n.parent;
                    i(e = _e) && e !== t.context && e !== t.fnContext && i(e = e.$options._scopeId) && c.setAttribute(t.elm, e, "")
                }

                function _(t, e, n, r, o, i) {
                    for (; r <= o; ++r) f(n[r], i, t, e)
                }

                function b(t) {
                    var e, n, o = t.data;
                    if (i(o))
                        for (i(e = o.hook) && i(e = e.destroy) && e(t), e = 0; e < r.destroy.length; ++e) r.destroy[e](t);
                    if (i(e = t.children))
                        for (n = 0; n < t.children.length; ++n) b(t.children[n])
                }

                function C(t, e, n, r) {
                    for (; n <= r; ++n) {
                        var o = e[n];
                        i(o) && (i(o.tag) ? (w(o), b(o)) : u(o.elm))
                    }
                }

                function w(t, e) {
                    if (i(e) || i(t.data)) {
                        var n, o = r.remove.length + 1;
                        for (i(e) ? e.listeners += o : e = function(t, e) {
                                function n() {
                                    0 == --n.listeners && u(t)
                                }
                                return n.listeners = e, n
                            }(t.elm, o), i(n = t.componentInstance) && i(n = n._vnode) && i(n.data) && w(n, e), n = 0; n < r.remove.length; ++n) r.remove[n](t, e);
                        i(n = t.data.hook) && i(n = n.remove) ? n(t, e) : e()
                    } else u(t.elm)
                }

                function x(t, e, n, r) {
                    for (var o = n; o < r; o++) {
                        var s = e[o];
                        if (i(s) && zn(t, s)) return o
                    }
                }

                function $(t, e, n, a) {
                    if (t !== e) {
                        var l = e.elm = t.elm;
                        if (s(t.isAsyncPlaceholder)) i(e.asyncFactory.resolved) ? T(t.elm, e, n) : e.isAsyncPlaceholder = !0;
                        else if (s(e.isStatic) && s(t.isStatic) && e.key === t.key && (s(e.isCloned) || s(e.isOnce))) e.componentInstance = t.componentInstance;
                        else {
                            var u, d = e.data;
                            i(d) && i(u = d.hook) && i(u = u.prepatch) && u(t, e);
                            var p = t.children,
                                h = e.children;
                            if (i(d) && v(e)) {
                                for (u = 0; u < r.update.length; ++u) r.update[u](t, e);
                                i(u = d.hook) && i(u = u.update) && u(t, e)
                            }
                            o(e.text) ? i(p) && i(h) ? p !== h && function(t, e, n, r, s) {
                                for (var a, l, u, d = 0, p = 0, h = e.length - 1, m = e[0], v = e[h], y = n.length - 1, g = n[0], b = n[y], w = !s; d <= h && p <= y;) o(m) ? m = e[++d] : o(v) ? v = e[--h] : zn(m, g) ? ($(m, g, r), m = e[++d], g = n[++p]) : zn(v, b) ? ($(v, b, r), v = e[--h], b = n[--y]) : zn(m, b) ? ($(m, b, r), w && c.insertBefore(t, m.elm, c.nextSibling(v.elm)), m = e[++d], b = n[--y]) : zn(v, g) ? ($(v, g, r), w && c.insertBefore(t, v.elm, m.elm), v = e[--h], g = n[++p]) : (o(a) && (a = Wn(e, d, h)), o(l = i(g.key) ? a[g.key] : x(g, e, d, h)) ? f(g, r, t, m.elm) : zn(u = e[l], g) ? ($(u, g, r), e[l] = void 0, w && c.insertBefore(t, u.elm, m.elm)) : f(g, r, t, m.elm), g = n[++p]);
                                d > h ? _(t, o(n[y + 1]) ? null : n[y + 1].elm, n, p, y, r) : p > y && C(0, e, d, h)
                            }(l, p, h, n, a) : i(h) ? (i(t.text) && c.setTextContent(l, ""), _(l, null, h, 0, h.length - 1, n)) : i(p) ? C(0, p, 0, p.length - 1) : i(t.text) && c.setTextContent(l, "") : t.text !== e.text && c.setTextContent(l, e.text), i(d) && i(u = d.hook) && i(u = u.postpatch) && u(t, e)
                        }
                    }
                }

                function S(t, e, n) {
                    if (s(n) && i(t.parent)) t.parent.data.pendingInsert = e;
                    else
                        for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r])
                }
                var k = m("attrs,class,staticClass,staticStyle,key");

                function T(t, e, n, r) {
                    var o, a = e.tag,
                        l = e.data,
                        c = e.children;
                    if (r = r || l && l.pre, e.elm = t, s(e.isComment) && i(e.asyncFactory)) return e.isAsyncPlaceholder = !0, !0;
                    if (i(l) && (i(o = l.hook) && i(o = o.init) && o(e, !0), i(o = e.componentInstance))) return d(e, n), !0;
                    if (i(a)) {
                        if (i(c))
                            if (t.hasChildNodes())
                                if (i(o = l) && i(o = o.domProps) && i(o = o.innerHTML)) {
                                    if (o !== t.innerHTML) return !1
                                } else {
                                    for (var u = !0, f = t.firstChild, p = 0; p < c.length; p++) {
                                        if (!f || !T(f, c[p], n, r)) {
                                            u = !1;
                                            break
                                        }
                                        f = f.nextSibling
                                    }
                                    if (!u || f) return !1
                                }
                        else h(e, c, n);
                        if (i(l)) {
                            var m = !1;
                            for (var v in l)
                                if (!k(v)) {
                                    m = !0, y(e, n);
                                    break
                                }!m && l.class && ee(l.class)
                        }
                    } else t.data !== e.text && (t.data = e.text);
                    return !0
                }
                return function(t, e, n, a, l, u) {
                    if (!o(e)) {
                        var d = !1,
                            p = [];
                        if (o(t)) d = !0, f(e, p, l, u);
                        else {
                            var h = i(t.nodeType);
                            if (!h && zn(t, e)) $(t, e, p, a);
                            else {
                                if (h) {
                                    if (1 === t.nodeType && t.hasAttribute(P) && (t.removeAttribute(P), n = !0), s(n) && T(t, e, p)) return S(e, p, !0), t;
                                    A = t, t = new pt(c.tagName(A).toLowerCase(), {}, [], void 0, A)
                                }
                                var m = t.elm,
                                    y = c.parentNode(m);
                                if (f(e, p, m._leaveCb ? null : y, c.nextSibling(m)), i(e.parent))
                                    for (var g = e.parent, _ = v(e); g;) {
                                        for (var w = 0; w < r.destroy.length; ++w) r.destroy[w](g);
                                        if (g.elm = e.elm, _) {
                                            for (var x = 0; x < r.create.length; ++x) r.create[x](Hn, g);
                                            var k = g.data.hook.insert;
                                            if (k.merged)
                                                for (var O = 1; O < k.fns.length; O++) k.fns[O]()
                                        } else qn(g);
                                        g = g.parent
                                    }
                                i(y) ? C(0, [t], 0, 0) : i(t.tag) && b(t)
                            }
                        }
                        var A;
                        return S(e, p, d), e.elm
                    }
                    i(t) && b(t)
                }
            }({
                nodeOps: Un,
                modules: [nr, or, Dr, Pr, Kr, G ? {
                    create: bo,
                    activate: bo,
                    remove: function(t, e) {
                        !0 !== t.data.show ? yo(t, e) : e()
                    }
                } : {}].concat(Qn)
            });
            J && document.addEventListener("selectionchange", function() {
                var t = document.activeElement;
                t && t.vmodel && Ao(t, "input")
            });
            var wo = {
                inserted: function(t, e, n, r) {
                    "select" === n.tag ? (r.elm && !r.elm._vOptions ? ie(n, "postpatch", function() {
                        wo.componentUpdated(t, e, n)
                    }) : xo(t, e, n.context), t._vOptions = [].map.call(t.options, ko)) : ("textarea" === n.tag || Ln(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("change", Oo), Y || (t.addEventListener("compositionstart", To), t.addEventListener("compositionend", Oo)), J && (t.vmodel = !0)))
                },
                componentUpdated: function(t, e, n) {
                    if ("select" === n.tag) {
                        xo(t, e, n.context);
                        var r = t._vOptions,
                            o = t._vOptions = [].map.call(t.options, ko);
                        if (o.some(function(t, e) {
                                return !M(t, r[e])
                            })) {
                            (t.multiple ? e.value.some(function(t) {
                                return So(t, o)
                            }) : e.value !== e.oldValue && So(e.value, o)) && Ao(t, "change")
                        }
                    }
                }
            };

            function xo(t, e, n) {
                $o(t, e, n), (X || Z) && setTimeout(function() {
                    $o(t, e, n)
                }, 0)
            }

            function $o(t, e, n) {
                var r = e.value,
                    o = t.multiple;
                if (!o || Array.isArray(r)) {
                    for (var i, s, a = 0, l = t.options.length; a < l; a++)
                        if (s = t.options[a], o) i = D(r, ko(s)) > -1, s.selected !== i && (s.selected = i);
                        else if (M(ko(s), r)) return void(t.selectedIndex !== a && (t.selectedIndex = a));
                    o || (t.selectedIndex = -1)
                }
            }

            function So(t, e) {
                return e.every(function(e) {
                    return !M(e, t)
                })
            }

            function ko(t) {
                return "_value" in t ? t._value : t.value
            }

            function To(t) {
                t.target.composing = !0
            }

            function Oo(t) {
                t.target.composing && (t.target.composing = !1, Ao(t.target, "input"))
            }

            function Ao(t, e) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(e, !0, !0), t.dispatchEvent(n)
            }

            function Io(t) {
                return !t.componentInstance || t.data && t.data.transition ? t : Io(t.componentInstance._vnode)
            }
            var Eo = {
                    model: wo,
                    show: {
                        bind: function(t, e, n) {
                            var r = e.value,
                                o = (n = Io(n)).data && n.data.transition,
                                i = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                            r && o ? (n.data.show = !0, vo(n, function() {
                                t.style.display = i
                            })) : t.style.display = r ? i : "none"
                        },
                        update: function(t, e, n) {
                            var r = e.value;
                            if (r !== e.oldValue) {
                                (n = Io(n)).data && n.data.transition ? (n.data.show = !0, r ? vo(n, function() {
                                    t.style.display = t.__vOriginalDisplay
                                }) : yo(n, function() {
                                    t.style.display = "none"
                                })) : t.style.display = r ? t.__vOriginalDisplay : "none"
                            }
                        },
                        unbind: function(t, e, n, r, o) {
                            o || (t.style.display = t.__vOriginalDisplay)
                        }
                    }
                },
                No = {
                    name: String,
                    appear: Boolean,
                    css: Boolean,
                    mode: String,
                    type: String,
                    enterClass: String,
                    leaveClass: String,
                    enterToClass: String,
                    leaveToClass: String,
                    enterActiveClass: String,
                    leaveActiveClass: String,
                    appearClass: String,
                    appearActiveClass: String,
                    appearToClass: String,
                    duration: [Number, String, Object]
                };

            function jo(t) {
                var e = t && t.componentOptions;
                return e && e.Ctor.options.abstract ? jo(fe(e.children)) : t
            }

            function Mo(t) {
                var e = {},
                    n = t.$options;
                for (var r in n.propsData) e[r] = t[r];
                var o = n._parentListeners;
                for (var i in o) e[x(i)] = o[i];
                return e
            }

            function Do(t, e) {
                if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                    props: e.componentOptions.propsData
                })
            }
            var Fo = {
                    name: "transition",
                    props: No,
                    abstract: !0,
                    render: function(t) {
                        var e = this,
                            n = this.$slots.default;
                        if (n && (n = n.filter(function(t) {
                                return t.tag || ue(t)
                            })).length) {
                            0;
                            var r = this.mode;
                            0;
                            var o = n[0];
                            if (function(t) {
                                    for (; t = t.parent;)
                                        if (t.data.transition) return !0
                                }(this.$vnode)) return o;
                            var i = jo(o);
                            if (!i) return o;
                            if (this._leaving) return Do(t, o);
                            var s = "__transition-" + this._uid + "-";
                            i.key = null == i.key ? i.isComment ? s + "comment" : s + i.tag : a(i.key) ? 0 === String(i.key).indexOf(s) ? i.key : s + i.key : i.key;
                            var l = (i.data || (i.data = {})).transition = Mo(this),
                                c = this._vnode,
                                u = jo(c);
                            if (i.data.directives && i.data.directives.some(function(t) {
                                    return "show" === t.name
                                }) && (i.data.show = !0), u && u.data && (h = i, m = u, m.key !== h.key || m.tag !== h.tag) && !ue(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                                var f = u.data.transition = A({}, l);
                                if ("out-in" === r) return this._leaving = !0, ie(f, "afterLeave", function() {
                                    e._leaving = !1, e.$forceUpdate()
                                }), Do(t, o);
                                if ("in-out" === r) {
                                    if (ue(i)) return c;
                                    var d, p = function() {
                                        d()
                                    };
                                    ie(l, "afterEnter", p), ie(l, "enterCancelled", p), ie(f, "delayLeave", function(t) {
                                        d = t
                                    })
                                }
                            }
                            var h, m;
                            return o
                        }
                    }
                },
                Po = A({
                    tag: String,
                    moveClass: String
                }, No);
            delete Po.mode;

            function Ro(t) {
                t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
            }

            function Lo(t) {
                t.data.newPos = t.elm.getBoundingClientRect()
            }

            function Bo(t) {
                var e = t.data.pos,
                    n = t.data.newPos,
                    r = e.left - n.left,
                    o = e.top - n.top;
                if (r || o) {
                    t.data.moved = !0;
                    var i = t.elm.style;
                    i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s"
                }
            }
            var Uo = {
                Transition: Fo,
                TransitionGroup: {
                    props: Po,
                    render: function(t) {
                        for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], s = Mo(this), a = 0; a < o.length; a++) {
                            var l = o[a];
                            if (l.tag)
                                if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) i.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = s;
                                else {}
                        }
                        if (r) {
                            for (var c = [], u = [], f = 0; f < r.length; f++) {
                                var d = r[f];
                                d.data.transition = s, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? c.push(d) : u.push(d)
                            }
                            this.kept = t(e, null, c), this.removed = u
                        }
                        return t(e, null, i)
                    },
                    beforeUpdate: function() {
                        this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
                    },
                    updated: function() {
                        var t = this.prevChildren,
                            e = this.moveClass || (this.name || "v") + "-move";
                        t.length && this.hasMove(t[0].elm, e) && (t.forEach(Ro), t.forEach(Lo), t.forEach(Bo), this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                            if (t.data.moved) {
                                var n = t.elm,
                                    r = n.style;
                                lo(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(ro, n._moveCb = function t(r) {
                                    r && !/transform$/.test(r.propertyName) || (n.removeEventListener(ro, t), n._moveCb = null, co(n, e))
                                })
                            }
                        }))
                    },
                    methods: {
                        hasMove: function(t, e) {
                            if (!Qr) return !1;
                            if (this._hasMove) return this._hasMove;
                            var n = t.cloneNode();
                            t._transitionClasses && t._transitionClasses.forEach(function(t) {
                                Jr(n, t)
                            }), Xr(n, e), n.style.display = "none", this.$el.appendChild(n);
                            var r = po(n);
                            return this.$el.removeChild(n), this._hasMove = r.hasTransform
                        }
                    }
                }
            };
            un.config.mustUseProp = wn, un.config.isReservedTag = Fn, un.config.isReservedAttr = bn, un.config.getTagNamespace = Pn, un.config.isUnknownElement = function(t) {
                if (!G) return !0;
                if (Fn(t)) return !1;
                if (t = t.toLowerCase(), null != Rn[t]) return Rn[t];
                var e = document.createElement(t);
                return t.indexOf("-") > -1 ? Rn[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Rn[t] = /HTMLUnknownElement/.test(e.toString())
            }, A(un.options.directives, Eo), A(un.options.components, Uo), un.prototype.__patch__ = G ? Co : E, un.prototype.$mount = function(t, e) {
                return t = t && G ? Bn(t) : void 0, r = t, o = e, (n = this).$el = r, n.$options.render || (n.$options.render = mt), we(n, "beforeMount"), new Ee(n, function() {
                    n._update(n._render(), o)
                }, E, null, !0), o = !1, null == n.$vnode && (n._isMounted = !0, we(n, "mounted")), n;
                var n, r, o
            }, un.nextTick(function() {
                B.devtools && it && it.emit("init", un)
            }, 0);
            var Vo = /\{\{((?:.|\n)+?)\}\}/g,
                qo = /[-.*+?^${}()|[\]\/\\]/g,
                Ho = C(function(t) {
                    var e = t[0].replace(qo, "\\$&"),
                        n = t[1].replace(qo, "\\$&");
                    return new RegExp(e + "((?:.|\\n)+?)" + n, "g")
                });

            function Go(t, e) {
                var n = e ? Ho(e) : Vo;
                if (n.test(t)) {
                    for (var r, o, i, s = [], a = [], l = n.lastIndex = 0; r = n.exec(t);) {
                        (o = r.index) > l && (a.push(i = t.slice(l, o)), s.push(JSON.stringify(i)));
                        var c = sr(r[1].trim());
                        s.push("_s(" + c + ")"), a.push({
                            "@binding": c
                        }), l = o + r[0].length
                    }
                    return l < t.length && (a.push(i = t.slice(l)), s.push(JSON.stringify(i))), {
                        expression: s.join("+"),
                        tokens: a
                    }
                }
            }
            var zo = {
                staticKeys: ["staticClass"],
                transformNode: function(t, e) {
                    e.warn;
                    var n = mr(t, "class");
                    n && (t.staticClass = JSON.stringify(n));
                    var r = hr(t, "class", !1);
                    r && (t.classBinding = r)
                },
                genData: function(t) {
                    var e = "";
                    return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e
                }
            };
            var Wo, Ko = {
                    staticKeys: ["staticStyle"],
                    transformNode: function(t, e) {
                        e.warn;
                        var n = mr(t, "style");
                        n && (t.staticStyle = JSON.stringify(Rr(n)));
                        var r = hr(t, "style", !1);
                        r && (t.styleBinding = r)
                    },
                    genData: function(t) {
                        var e = "";
                        return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e
                    }
                },
                Xo = function(t) {
                    return (Wo = Wo || document.createElement("div")).innerHTML = t, Wo.textContent
                },
                Jo = m("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
                Zo = m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
                Yo = m("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
                Qo = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
                ti = "[a-zA-Z_][\\w\\-\\.]*",
                ei = "((?:" + ti + "\\:)?" + ti + ")",
                ni = new RegExp("^<" + ei),
                ri = /^\s*(\/?)>/,
                oi = new RegExp("^<\\/" + ei + "[^>]*>"),
                ii = /^<!DOCTYPE [^>]+>/i,
                si = /^<!--/,
                ai = /^<!\[/,
                li = !1;
            "x".replace(/x(.)?/g, function(t, e) {
                li = "" === e
            });
            var ci = m("script,style,textarea", !0),
                ui = {},
                fi = {
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&amp;": "&",
                    "&#10;": "\n",
                    "&#9;": "\t"
                },
                di = /&(?:lt|gt|quot|amp);/g,
                pi = /&(?:lt|gt|quot|amp|#10|#9);/g,
                hi = m("pre,textarea", !0),
                mi = function(t, e) {
                    return t && hi(t) && "\n" === e[0]
                };

            function vi(t, e) {
                var n = e ? pi : di;
                return t.replace(n, function(t) {
                    return fi[t]
                })
            }
            var yi, gi, _i, bi, Ci, wi, xi, $i, Si = /^@|^v-on:/,
                ki = /^v-|^@|^:/,
                Ti = /(.*?)\s+(?:in|of)\s+(.*)/,
                Oi = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
                Ai = /^\(|\)$/g,
                Ii = /:(.*)$/,
                Ei = /^:|^v-bind:/,
                Ni = /\.[^.]+/g,
                ji = C(Xo);

            function Mi(t, e, n) {
                return {
                    type: 1,
                    tag: t,
                    attrsList: e,
                    attrsMap: function(t) {
                        for (var e = {}, n = 0, r = t.length; n < r; n++) e[t[n].name] = t[n].value;
                        return e
                    }(e),
                    parent: n,
                    children: []
                }
            }

            function Di(t, e) {
                yi = e.warn || lr, wi = e.isPreTag || N, xi = e.mustUseProp || N, $i = e.getTagNamespace || N, _i = cr(e.modules, "transformNode"), bi = cr(e.modules, "preTransformNode"), Ci = cr(e.modules, "postTransformNode"), gi = e.delimiters;
                var n, r, o = [],
                    i = !1 !== e.preserveWhitespace,
                    s = !1,
                    a = !1;

                function l(t) {
                    t.pre && (s = !1), wi(t.tag) && (a = !1);
                    for (var n = 0; n < Ci.length; n++) Ci[n](t, e)
                }
                return function(t, e) {
                    for (var n, r, o = [], i = e.expectHTML, s = e.isUnaryTag || N, a = e.canBeLeftOpenTag || N, l = 0; t;) {
                        if (n = t, r && ci(r)) {
                            var c = 0,
                                u = r.toLowerCase(),
                                f = ui[u] || (ui[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
                                d = t.replace(f, function(t, n, r) {
                                    return c = r.length, ci(u) || "noscript" === u || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), mi(u, n) && (n = n.slice(1)), e.chars && e.chars(n), ""
                                });
                            l += t.length - d.length, t = d, k(u, l - c, l)
                        } else {
                            var p = t.indexOf("<");
                            if (0 === p) {
                                if (si.test(t)) {
                                    var h = t.indexOf("--\x3e");
                                    if (h >= 0) {
                                        e.shouldKeepComment && e.comment(t.substring(4, h)), x(h + 3);
                                        continue
                                    }
                                }
                                if (ai.test(t)) {
                                    var m = t.indexOf("]>");
                                    if (m >= 0) {
                                        x(m + 2);
                                        continue
                                    }
                                }
                                var v = t.match(ii);
                                if (v) {
                                    x(v[0].length);
                                    continue
                                }
                                var y = t.match(oi);
                                if (y) {
                                    var g = l;
                                    x(y[0].length), k(y[1], g, l);
                                    continue
                                }
                                var _ = $();
                                if (_) {
                                    S(_), mi(r, t) && x(1);
                                    continue
                                }
                            }
                            var b = void 0,
                                C = void 0,
                                w = void 0;
                            if (p >= 0) {
                                for (C = t.slice(p); !(oi.test(C) || ni.test(C) || si.test(C) || ai.test(C) || (w = C.indexOf("<", 1)) < 0);) p += w, C = t.slice(p);
                                b = t.substring(0, p), x(p)
                            }
                            p < 0 && (b = t, t = ""), e.chars && b && e.chars(b)
                        }
                        if (t === n) {
                            e.chars && e.chars(t);
                            break
                        }
                    }
                    k();

                    function x(e) {
                        l += e, t = t.substring(e)
                    }

                    function $() {
                        var e = t.match(ni);
                        if (e) {
                            var n = {
                                tagName: e[1],
                                attrs: [],
                                start: l
                            };
                            x(e[0].length);
                            for (var r, o; !(r = t.match(ri)) && (o = t.match(Qo));) x(o[0].length), n.attrs.push(o);
                            if (r) return n.unarySlash = r[1], x(r[0].length), n.end = l, n
                        }
                    }

                    function S(t) {
                        var n = t.tagName,
                            l = t.unarySlash;
                        i && ("p" === r && Yo(n) && k(r), a(n) && r === n && k(n));
                        for (var c = s(n) || !!l, u = t.attrs.length, f = new Array(u), d = 0; d < u; d++) {
                            var p = t.attrs[d];
                            li && -1 === p[0].indexOf('""') && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);
                            var h = p[3] || p[4] || p[5] || "",
                                m = "a" === n && "href" === p[1] ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
                            f[d] = {
                                name: p[1],
                                value: vi(h, m)
                            }
                        }
                        c || (o.push({
                            tag: n,
                            lowerCasedTag: n.toLowerCase(),
                            attrs: f
                        }), r = n), e.start && e.start(n, f, c, t.start, t.end)
                    }

                    function k(t, n, i) {
                        var s, a;
                        if (null == n && (n = l), null == i && (i = l), t && (a = t.toLowerCase()), t)
                            for (s = o.length - 1; s >= 0 && o[s].lowerCasedTag !== a; s--);
                        else s = 0;
                        if (s >= 0) {
                            for (var c = o.length - 1; c >= s; c--) e.end && e.end(o[c].tag, n, i);
                            o.length = s, r = s && o[s - 1].tag
                        } else "br" === a ? e.start && e.start(t, [], !0, n, i) : "p" === a && (e.start && e.start(t, [], !1, n, i), e.end && e.end(t, n, i))
                    }
                }(t, {
                    warn: yi,
                    expectHTML: e.expectHTML,
                    isUnaryTag: e.isUnaryTag,
                    canBeLeftOpenTag: e.canBeLeftOpenTag,
                    shouldDecodeNewlines: e.shouldDecodeNewlines,
                    shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
                    shouldKeepComment: e.comments,
                    start: function(t, i, c) {
                        var u = r && r.ns || $i(t);
                        X && "svg" === u && (i = function(t) {
                            for (var e = [], n = 0; n < t.length; n++) {
                                var r = t[n];
                                Bi.test(r.name) || (r.name = r.name.replace(Ui, ""), e.push(r))
                            }
                            return e
                        }(i));
                        var f = Mi(t, i, r);
                        u && (f.ns = u), "style" !== (d = f).tag && ("script" !== d.tag || d.attrsMap.type && "text/javascript" !== d.attrsMap.type) || ot() || (f.forbidden = !0);
                        for (var d, p = 0; p < bi.length; p++) f = bi[p](f, e) || f;
                        s || (null != mr(h = f, "v-pre") && (h.pre = !0), f.pre && (s = !0));
                        var h;
                        wi(f.tag) && (a = !0), s ? function(t) {
                            var e = t.attrsList.length;
                            if (e)
                                for (var n = t.attrs = new Array(e), r = 0; r < e; r++) n[r] = {
                                    name: t.attrsList[r].name,
                                    value: JSON.stringify(t.attrsList[r].value)
                                };
                            else t.pre || (t.plain = !0)
                        }(f) : f.processed || (Pi(f), function(t) {
                            var e = mr(t, "v-if");
                            if (e) t.if = e, Ri(t, {
                                exp: e,
                                block: t
                            });
                            else {
                                null != mr(t, "v-else") && (t.else = !0);
                                var n = mr(t, "v-else-if");
                                n && (t.elseif = n)
                            }
                        }(f), null != mr(m = f, "v-once") && (m.once = !0), Fi(f, e));
                        var m;

                        function v(t) {
                            0
                        }
                        if (n ? o.length || n.if && (f.elseif || f.else) && (v(), Ri(n, {
                                exp: f.elseif,
                                block: f
                            })) : (n = f, v()), r && !f.forbidden)
                            if (f.elseif || f.else) ! function(t, e) {
                                var n = function(t) {
                                    var e = t.length;
                                    for (; e--;) {
                                        if (1 === t[e].type) return t[e];
                                        t.pop()
                                    }
                                }(e.children);
                                n && n.if && Ri(n, {
                                    exp: t.elseif,
                                    block: t
                                })
                            }(f, r);
                            else if (f.slotScope) {
                            r.plain = !1;
                            var y = f.slotTarget || '"default"';
                            (r.scopedSlots || (r.scopedSlots = {}))[y] = f
                        } else r.children.push(f), f.parent = r;
                        c ? l(f) : (r = f, o.push(f))
                    },
                    end: function() {
                        var t = o[o.length - 1],
                            e = t.children[t.children.length - 1];
                        e && 3 === e.type && " " === e.text && !a && t.children.pop(), o.length -= 1, r = o[o.length - 1], l(t)
                    },
                    chars: function(t) {
                        if (r && (!X || "textarea" !== r.tag || r.attrsMap.placeholder !== t)) {
                            var e, n = r.children;
                            if (t = a || t.trim() ? (e = r, "script" === e.tag || "style" === e.tag ? t : ji(t)) : i && n.length ? " " : "") {
                                var o;
                                !s && " " !== t && (o = Go(t, gi)) ? n.push({
                                    type: 2,
                                    expression: o.expression,
                                    tokens: o.tokens,
                                    text: t
                                }) : " " === t && n.length && " " === n[n.length - 1].text || n.push({
                                    type: 3,
                                    text: t
                                })
                            }
                        }
                    },
                    comment: function(t) {
                        r.children.push({
                            type: 3,
                            text: t,
                            isComment: !0
                        })
                    }
                }), n
            }

            function Fi(t, e) {
                ! function(t) {
                    var e = hr(t, "key");
                    e && (t.key = e)
                }(t), t.plain = !t.key && !t.attrsList.length,
                    function(t) {
                        var e = hr(t, "ref");
                        e && (t.ref = e, t.refInFor = function(t) {
                            var e = t;
                            for (; e;) {
                                if (void 0 !== e.for) return !0;
                                e = e.parent
                            }
                            return !1
                        }(t))
                    }(t),
                    function(t) {
                        if ("slot" === t.tag) t.slotName = hr(t, "name");
                        else {
                            var e;
                            "template" === t.tag ? (e = mr(t, "scope"), t.slotScope = e || mr(t, "slot-scope")) : (e = mr(t, "slot-scope")) && (t.slotScope = e);
                            var n = hr(t, "slot");
                            n && (t.slotTarget = '""' === n ? '"default"' : n, "template" === t.tag || t.slotScope || fr(t, "slot", n))
                        }
                    }(t),
                    function(t) {
                        var e;
                        (e = hr(t, "is")) && (t.component = e);
                        null != mr(t, "inline-template") && (t.inlineTemplate = !0)
                    }(t);
                for (var n = 0; n < _i.length; n++) t = _i[n](t, e) || t;
                ! function(t) {
                    var e, n, r, o, i, s, a, l = t.attrsList;
                    for (e = 0, n = l.length; e < n; e++)
                        if (r = o = l[e].name, i = l[e].value, ki.test(r))
                            if (t.hasBindings = !0, (s = Li(r)) && (r = r.replace(Ni, "")), Ei.test(r)) r = r.replace(Ei, ""), i = sr(i), a = !1, s && (s.prop && (a = !0, "innerHtml" === (r = x(r)) && (r = "innerHTML")), s.camel && (r = x(r)), s.sync && pr(t, "update:" + x(r), yr(i, "$event"))), a || !t.component && xi(t.tag, t.attrsMap.type, r) ? ur(t, r, i) : fr(t, r, i);
                            else if (Si.test(r)) r = r.replace(Si, ""), pr(t, r, i, s, !1);
                    else {
                        var c = (r = r.replace(ki, "")).match(Ii),
                            u = c && c[1];
                        u && (r = r.slice(0, -(u.length + 1))), d = r, p = o, h = i, m = u, v = s, ((f = t).directives || (f.directives = [])).push({
                            name: d,
                            rawName: p,
                            value: h,
                            arg: m,
                            modifiers: v
                        }), f.plain = !1
                    } else {
                        fr(t, r, JSON.stringify(i)), !t.component && "muted" === r && xi(t.tag, t.attrsMap.type, r) && ur(t, r, "true")
                    }
                    var f, d, p, h, m, v
                }(t)
            }

            function Pi(t) {
                var e;
                if (e = mr(t, "v-for")) {
                    var n = function(t) {
                        var e = t.match(Ti);
                        if (!e) return;
                        var n = {};
                        n.for = e[2].trim();
                        var r = e[1].trim().replace(Ai, ""),
                            o = r.match(Oi);
                        o ? (n.alias = r.replace(Oi, ""), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = r;
                        return n
                    }(e);
                    n && A(t, n)
                }
            }

            function Ri(t, e) {
                t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e)
            }

            function Li(t) {
                var e = t.match(Ni);
                if (e) {
                    var n = {};
                    return e.forEach(function(t) {
                        n[t.slice(1)] = !0
                    }), n
                }
            }
            var Bi = /^xmlns:NS\d+/,
                Ui = /^NS\d+:/;

            function Vi(t) {
                return Mi(t.tag, t.attrsList.slice(), t.parent)
            }
            var qi = [zo, Ko, {
                preTransformNode: function(t, e) {
                    if ("input" === t.tag) {
                        var n = t.attrsMap;
                        if (n["v-model"] && (n["v-bind:type"] || n[":type"])) {
                            var r = hr(t, "type"),
                                o = mr(t, "v-if", !0),
                                i = o ? "&&(" + o + ")" : "",
                                s = null != mr(t, "v-else", !0),
                                a = mr(t, "v-else-if", !0),
                                l = Vi(t);
                            Pi(l), dr(l, "type", "checkbox"), Fi(l, e), l.processed = !0, l.if = "(" + r + ")==='checkbox'" + i, Ri(l, {
                                exp: l.if,
                                block: l
                            });
                            var c = Vi(t);
                            mr(c, "v-for", !0), dr(c, "type", "radio"), Fi(c, e), Ri(l, {
                                exp: "(" + r + ")==='radio'" + i,
                                block: c
                            });
                            var u = Vi(t);
                            return mr(u, "v-for", !0), dr(u, ":type", r), Fi(u, e), Ri(l, {
                                exp: o,
                                block: u
                            }), s ? l.else = !0 : a && (l.elseif = a), l
                        }
                    }
                }
            }];
            var Hi, Gi, zi, Wi = {
                    expectHTML: !0,
                    modules: qi,
                    directives: {
                        model: function(t, e, n) {
                            n;
                            var r = e.value,
                                o = e.modifiers,
                                i = t.tag,
                                s = t.attrsMap.type;
                            if (t.component) return vr(t, r, o), !1;
                            if ("select" === i) ! function(t, e, n) {
                                var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                                r = r + " " + yr(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), pr(t, "change", r, null, !0)
                            }(t, r, o);
                            else if ("input" === i && "checkbox" === s) ! function(t, e, n) {
                                var r = n && n.number,
                                    o = hr(t, "value") || "null",
                                    i = hr(t, "true-value") || "true",
                                    s = hr(t, "false-value") || "false";
                                ur(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + o + ")>-1" + ("true" === i ? ":(" + e + ")" : ":_q(" + e + "," + i + ")")), pr(t, "change", "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + i + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + e + "=$$a.concat([$$v]))}else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + yr(e, "$$c") + "}", null, !0)
                            }(t, r, o);
                            else if ("input" === i && "radio" === s) ! function(t, e, n) {
                                var r = n && n.number,
                                    o = hr(t, "value") || "null";
                                ur(t, "checked", "_q(" + e + "," + (o = r ? "_n(" + o + ")" : o) + ")"), pr(t, "change", yr(e, o), null, !0)
                            }(t, r, o);
                            else if ("input" === i || "textarea" === i) ! function(t, e, n) {
                                var r = t.attrsMap.type,
                                    o = n || {},
                                    i = o.lazy,
                                    s = o.number,
                                    a = o.trim,
                                    l = !i && "range" !== r,
                                    c = i ? "change" : "range" === r ? Ar : "input",
                                    u = "$event.target.value";
                                a && (u = "$event.target.value.trim()"), s && (u = "_n(" + u + ")");
                                var f = yr(e, u);
                                l && (f = "if($event.target.composing)return;" + f), ur(t, "value", "(" + e + ")"), pr(t, c, f, null, !0), (a || s) && pr(t, "blur", "$forceUpdate()")
                            }(t, r, o);
                            else if (!B.isReservedTag(i)) return vr(t, r, o), !1;
                            return !0
                        },
                        text: function(t, e) {
                            e.value && ur(t, "textContent", "_s(" + e.value + ")")
                        },
                        html: function(t, e) {
                            e.value && ur(t, "innerHTML", "_s(" + e.value + ")")
                        }
                    },
                    isPreTag: function(t) {
                        return "pre" === t
                    },
                    isUnaryTag: Jo,
                    mustUseProp: wn,
                    canBeLeftOpenTag: Zo,
                    isReservedTag: Fn,
                    getTagNamespace: Pn,
                    staticKeys: (Hi = qi, Hi.reduce(function(t, e) {
                        return t.concat(e.staticKeys || [])
                    }, []).join(","))
                },
                Ki = C(function(t) {
                    return m("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""))
                });

            function Xi(t, e) {
                t && (Gi = Ki(e.staticKeys || ""), zi = e.isReservedTag || N, function t(e) {
                    e.static = function(t) {
                        if (2 === t.type) return !1;
                        if (3 === t.type) return !0;
                        return !(!t.pre && (t.hasBindings || t.if || t.for || v(t.tag) || !zi(t.tag) || function(t) {
                            for (; t.parent;) {
                                if ("template" !== (t = t.parent).tag) return !1;
                                if (t.for) return !0
                            }
                            return !1
                        }(t) || !Object.keys(t).every(Gi)))
                    }(e);
                    if (1 === e.type) {
                        if (!zi(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
                        for (var n = 0, r = e.children.length; n < r; n++) {
                            var o = e.children[n];
                            t(o), o.static || (e.static = !1)
                        }
                        if (e.ifConditions)
                            for (var i = 1, s = e.ifConditions.length; i < s; i++) {
                                var a = e.ifConditions[i].block;
                                t(a), a.static || (e.static = !1)
                            }
                    }
                }(t), function t(e, n) {
                    if (1 === e.type) {
                        if ((e.static || e.once) && (e.staticInFor = n), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
                        if (e.staticRoot = !1, e.children)
                            for (var r = 0, o = e.children.length; r < o; r++) t(e.children[r], n || !!e.for);
                        if (e.ifConditions)
                            for (var i = 1, s = e.ifConditions.length; i < s; i++) t(e.ifConditions[i].block, n)
                    }
                }(t, !1))
            }
            var Ji = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
                Zi = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
                Yi = {
                    esc: 27,
                    tab: 9,
                    enter: 13,
                    space: 32,
                    up: 38,
                    left: 37,
                    right: 39,
                    down: 40,
                    delete: [8, 46]
                },
                Qi = function(t) {
                    return "if(" + t + ")return null;"
                },
                ts = {
                    stop: "$event.stopPropagation();",
                    prevent: "$event.preventDefault();",
                    self: Qi("$event.target !== $event.currentTarget"),
                    ctrl: Qi("!$event.ctrlKey"),
                    shift: Qi("!$event.shiftKey"),
                    alt: Qi("!$event.altKey"),
                    meta: Qi("!$event.metaKey"),
                    left: Qi("'button' in $event && $event.button !== 0"),
                    middle: Qi("'button' in $event && $event.button !== 1"),
                    right: Qi("'button' in $event && $event.button !== 2")
                };

            function es(t, e, n) {
                var r = e ? "nativeOn:{" : "on:{";
                for (var o in t) r += '"' + o + '":' + ns(o, t[o]) + ",";
                return r.slice(0, -1) + "}"
            }

            function ns(t, e) {
                if (!e) return "function(){}";
                if (Array.isArray(e)) return "[" + e.map(function(e) {
                    return ns(t, e)
                }).join(",") + "]";
                var n = Zi.test(e.value),
                    r = Ji.test(e.value);
                if (e.modifiers) {
                    var o = "",
                        i = "",
                        s = [];
                    for (var a in e.modifiers)
                        if (ts[a]) i += ts[a], Yi[a] && s.push(a);
                        else if ("exact" === a) {
                        var l = e.modifiers;
                        i += Qi(["ctrl", "shift", "alt", "meta"].filter(function(t) {
                            return !l[t]
                        }).map(function(t) {
                            return "$event." + t + "Key"
                        }).join("||"))
                    } else s.push(a);
                    s.length && (o += (c = s, "if(!('button' in $event)&&" + c.map(rs).join("&&") + ")return null;")), i && (o += i);
                    return "function($event){" + o + (n ? e.value + "($event)" : r ? "(" + e.value + ")($event)" : e.value) + "}"
                }
                return n || r ? e.value : "function($event){" + e.value + "}";
                var c
            }

            function rs(t) {
                var e = parseInt(t, 10);
                if (e) return "$event.keyCode!==" + e;
                var n = Yi[t];
                return "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + ",$event.key)"
            }
            var os = {
                    on: function(t, e) {
                        t.wrapListeners = function(t) {
                            return "_g(" + t + "," + e.value + ")"
                        }
                    },
                    bind: function(t, e) {
                        t.wrapData = function(n) {
                            return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")"
                        }
                    },
                    cloak: E
                },
                is = function(t) {
                    this.options = t, this.warn = t.warn || lr, this.transforms = cr(t.modules, "transformCode"), this.dataGenFns = cr(t.modules, "genData"), this.directives = A(A({}, os), t.directives);
                    var e = t.isReservedTag || N;
                    this.maybeComponent = function(t) {
                        return !e(t.tag)
                    }, this.onceId = 0, this.staticRenderFns = []
                };

            function ss(t, e) {
                var n = new is(e);
                return {
                    render: "with(this){return " + (t ? as(t, n) : '_c("div")') + "}",
                    staticRenderFns: n.staticRenderFns
                }
            }

            function as(t, e) {
                if (t.staticRoot && !t.staticProcessed) return ls(t, e);
                if (t.once && !t.onceProcessed) return cs(t, e);
                if (t.for && !t.forProcessed) return function(t, e, n, r) {
                    var o = t.for,
                        i = t.alias,
                        s = t.iterator1 ? "," + t.iterator1 : "",
                        a = t.iterator2 ? "," + t.iterator2 : "";
                    0;
                    return t.forProcessed = !0, (r || "_l") + "((" + o + "),function(" + i + s + a + "){return " + (n || as)(t, e) + "})"
                }(t, e);
                if (t.if && !t.ifProcessed) return us(t, e);
                if ("template" !== t.tag || t.slotTarget) {
                    if ("slot" === t.tag) return function(t, e) {
                        var n = t.slotName || '"default"',
                            r = ps(t, e),
                            o = "_t(" + n + (r ? "," + r : ""),
                            i = t.attrs && "{" + t.attrs.map(function(t) {
                                return x(t.name) + ":" + t.value
                            }).join(",") + "}",
                            s = t.attrsMap["v-bind"];
                        !i && !s || r || (o += ",null");
                        i && (o += "," + i);
                        s && (o += (i ? "" : ",null") + "," + s);
                        return o + ")"
                    }(t, e);
                    var n;
                    if (t.component) n = function(t, e, n) {
                        var r = e.inlineTemplate ? null : ps(e, n, !0);
                        return "_c(" + t + "," + fs(e, n) + (r ? "," + r : "") + ")"
                    }(t.component, t, e);
                    else {
                        var r = t.plain ? void 0 : fs(t, e),
                            o = t.inlineTemplate ? null : ps(t, e, !0);
                        n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (o ? "," + o : "") + ")"
                    }
                    for (var i = 0; i < e.transforms.length; i++) n = e.transforms[i](t, n);
                    return n
                }
                return ps(t, e) || "void 0"
            }

            function ls(t, e) {
                return t.staticProcessed = !0, e.staticRenderFns.push("with(this){return " + as(t, e) + "}"), "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")"
            }

            function cs(t, e) {
                if (t.onceProcessed = !0, t.if && !t.ifProcessed) return us(t, e);
                if (t.staticInFor) {
                    for (var n = "", r = t.parent; r;) {
                        if (r.for) {
                            n = r.key;
                            break
                        }
                        r = r.parent
                    }
                    return n ? "_o(" + as(t, e) + "," + e.onceId++ + "," + n + ")" : as(t, e)
                }
                return ls(t, e)
            }

            function us(t, e, n, r) {
                return t.ifProcessed = !0,
                    function t(e, n, r, o) {
                        if (!e.length) return o || "_e()";
                        var i = e.shift();
                        return i.exp ? "(" + i.exp + ")?" + s(i.block) + ":" + t(e, n, r, o) : "" + s(i.block);

                        function s(t) {
                            return r ? r(t, n) : t.once ? cs(t, n) : as(t, n)
                        }
                    }(t.ifConditions.slice(), e, n, r)
            }

            function fs(t, e) {
                var n = "{",
                    r = function(t, e) {
                        var n = t.directives;
                        if (!n) return;
                        var r, o, i, s, a = "directives:[",
                            l = !1;
                        for (r = 0, o = n.length; r < o; r++) {
                            i = n[r], s = !0;
                            var c = e.directives[i.name];
                            c && (s = !!c(t, i, e.warn)), s && (l = !0, a += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
                        }
                        if (l) return a.slice(0, -1) + "]"
                    }(t, e);
                r && (n += r + ","), t.key && (n += "key:" + t.key + ","), t.ref && (n += "ref:" + t.ref + ","), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"' + t.tag + '",');
                for (var o = 0; o < e.dataGenFns.length; o++) n += e.dataGenFns[o](t);
                t.attrs && (n += "attrs:{" + vs(t.attrs) + "},"), t.props && (n += "domProps:{" + vs(t.props) + "},"), t.events && (n += es(t.events, !1, e.warn) + ","), t.nativeEvents && (n += es(t.nativeEvents, !0, e.warn) + ","), t.slotTarget && !t.slotScope && (n += "slot:" + t.slotTarget + ","), t.scopedSlots && (n += (i = t.scopedSlots, s = e, "scopedSlots:_u([" + Object.keys(i).map(function(t) {
                    return ds(t, i[t], s)
                }).join(",") + "]),"));
                var i, s;
                if (t.model && (n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"), t.inlineTemplate) {
                    var a = function(t, e) {
                        var n = t.children[0];
                        0;
                        if (1 === n.type) {
                            var r = ss(n, e.options);
                            return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(t) {
                                return "function(){" + t + "}"
                            }).join(",") + "]}"
                        }
                    }(t, e);
                    a && (n += a + ",")
                }
                return n = n.replace(/,$/, "") + "}", t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n
            }

            function ds(t, e, n) {
                if (e.for && !e.forProcessed) return function(t, e, n) {
                    var r = e.for,
                        o = e.alias,
                        i = e.iterator1 ? "," + e.iterator1 : "",
                        s = e.iterator2 ? "," + e.iterator2 : "";
                    return e.forProcessed = !0, "_l((" + r + "),function(" + o + i + s + "){return " + ds(t, e, n) + "})"
                }(t, e, n);
                return "{key:" + t + ",fn:" + ("function(" + String(e.slotScope) + "){return " + ("template" === e.tag ? e.if ? e.if+"?" + (ps(e, n) || "undefined") + ":undefined" : ps(e, n) || "undefined" : as(e, n)) + "}") + "}"
            }

            function ps(t, e, n, r, o) {
                var i = t.children;
                if (i.length) {
                    var s = i[0];
                    if (1 === i.length && s.for && "template" !== s.tag && "slot" !== s.tag) return (r || as)(s, e);
                    var a = n ? function(t, e) {
                            for (var n = 0, r = 0; r < t.length; r++) {
                                var o = t[r];
                                if (1 === o.type) {
                                    if (hs(o) || o.ifConditions && o.ifConditions.some(function(t) {
                                            return hs(t.block)
                                        })) {
                                        n = 2;
                                        break
                                    }(e(o) || o.ifConditions && o.ifConditions.some(function(t) {
                                        return e(t.block)
                                    })) && (n = 1)
                                }
                            }
                            return n
                        }(i, e.maybeComponent) : 0,
                        l = o || ms;
                    return "[" + i.map(function(t) {
                        return l(t, e)
                    }).join(",") + "]" + (a ? "," + a : "")
                }
            }

            function hs(t) {
                return void 0 !== t.for || "template" === t.tag || "slot" === t.tag
            }

            function ms(t, e) {
                return 1 === t.type ? as(t, e) : 3 === t.type && t.isComment ? (r = t, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = t).type ? n.expression : ys(JSON.stringify(n.text))) + ")";
                var n, r
            }

            function vs(t) {
                for (var e = "", n = 0; n < t.length; n++) {
                    var r = t[n];
                    e += '"' + r.name + '":' + ys(r.value) + ","
                }
                return e.slice(0, -1)
            }

            function ys(t) {
                return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
            }
            new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");

            function gs(t, e) {
                try {
                    return new Function(t)
                } catch (n) {
                    return e.push({
                        err: n,
                        code: t
                    }), E
                }
            }
            var _s, bs, Cs = (_s = function(t, e) {
                var n = Di(t.trim(), e);
                !1 !== e.optimize && Xi(n, e);
                var r = ss(n, e);
                return {
                    ast: n,
                    render: r.render,
                    staticRenderFns: r.staticRenderFns
                }
            }, function(t) {
                function e(e, n) {
                    var r = Object.create(t),
                        o = [],
                        i = [];
                    if (r.warn = function(t, e) {
                            (e ? i : o).push(t)
                        }, n) {
                        n.modules && (r.modules = (t.modules || []).concat(n.modules)), n.directives && (r.directives = A(Object.create(t.directives || null), n.directives));
                        for (var s in n) "modules" !== s && "directives" !== s && (r[s] = n[s])
                    }
                    var a = _s(e, r);
                    return a.errors = o, a.tips = i, a
                }
                return {
                    compile: e,
                    compileToFunctions: function(t) {
                        var e = Object.create(null);
                        return function(n, r, o) {
                            (r = A({}, r)).warn, delete r.warn;
                            var i = r.delimiters ? String(r.delimiters) + n : n;
                            if (e[i]) return e[i];
                            var s = t(n, r),
                                a = {},
                                l = [];
                            return a.render = gs(s.render, l), a.staticRenderFns = s.staticRenderFns.map(function(t) {
                                return gs(t, l)
                            }), e[i] = a
                        }
                    }(e)
                }
            })(Wi).compileToFunctions;

            function ws(t) {
                return (bs = bs || document.createElement("div")).innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>', bs.innerHTML.indexOf("&#10;") > 0
            }
            var xs = !!G && ws(!1),
                $s = !!G && ws(!0),
                Ss = C(function(t) {
                    var e = Bn(t);
                    return e && e.innerHTML
                }),
                ks = un.prototype.$mount;
            un.prototype.$mount = function(t, e) {
                if ((t = t && Bn(t)) === document.body || t === document.documentElement) return this;
                var n = this.$options;
                if (!n.render) {
                    var r = n.template;
                    if (r)
                        if ("string" == typeof r) "#" === r.charAt(0) && (r = Ss(r));
                        else {
                            if (!r.nodeType) return this;
                            r = r.innerHTML
                        }
                    else t && (r = function(t) {
                        if (t.outerHTML) return t.outerHTML;
                        var e = document.createElement("div");
                        return e.appendChild(t.cloneNode(!0)), e.innerHTML
                    }(t));
                    if (r) {
                        0;
                        var o = Cs(r, {
                                shouldDecodeNewlines: xs,
                                shouldDecodeNewlinesForHref: $s,
                                delimiters: n.delimiters,
                                comments: n.comments
                            }, this),
                            i = o.render,
                            s = o.staticRenderFns;
                        n.render = i, n.staticRenderFns = s
                    }
                }
                return ks.call(this, t, e)
            };
            un.compile = Cs, t.exports = un
        }).call(e, n("DuR2"), n("162o").setImmediate)
    },
    IT2j: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function() {
                return {
                    scrollValue: 0
                }
            },
            mounted: function() {
                window.addEventListener("scroll", this.scrolling)
            },
            computed: {
                isHidden: function() {
                    return !(this.scrollValue > 1e3)
                }
            },
            methods: {
                scrollToTop: function() {
                    document.getElementById("top-container").scrollIntoView({
                        behavior: "smooth"
                    })
                },
                scrolling: function(t) {
                    this.scrollValue = window.scrollY
                }
            }
        }
    },
    J0yv: function(t, e) {
        t.exports = {
            render: function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", [e("social-sharing", {
                    inlineTemplate: {
                        render: function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e("network", {
                                attrs: {
                                    network: "facebook"
                                }
                            }, [e("a", {
                                staticClass: "fb-container",
                                attrs: {
                                    href: "",
                                    onclick: "event.preventDefault()"
                                }
                            }, [e("div", {
                                staticClass: "icon fb"
                            }, [e("i", {
                                staticClass: "fa fa-facebook fa-2x",
                                attrs: {
                                    "aria-hidden": "true"
                                }
                            })])])])
                        },
                        staticRenderFns: []
                    }
                }), this._v(" "), e("social-sharing", {
                    attrs: {
                        title: "Tax Calculator",
                        description: "Alamin ang iyong bagong income tax",
                        hashtags: "DOF Taxcalculator, TRAIN",
                        "twitter-user": "DOF_PH"
                    },
                    inlineTemplate: {
                        render: function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e("network", {
                                attrs: {
                                    network: "twitter"
                                }
                            }, [e("a", {
                                staticClass: "twitter-container",
                                attrs: {
                                    href: "",
                                    onclick: "event.preventDefault()"
                                }
                            }, [e("div", {
                                staticClass: "icon twitter"
                            }, [e("i", {
                                staticClass: "fa fa-twitter fa-2x",
                                attrs: {
                                    "aria-hidden": "true"
                                }
                            })])])])
                        },
                        staticRenderFns: []
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    "JP+z": function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return t.apply(e, n)
            }
        }
    },
    KCLY: function(t, e, n) {
        "use strict";
        (function(e) {
            var r = n("cGG2"),
                o = n("5VQ+"),
                i = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function s(t, e) {
                !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }
            var a = {
                adapter: function() {
                    var t;
                    return "undefined" != typeof XMLHttpRequest ? t = n("7GwW") : void 0 !== e && (t = n("7GwW")), t
                }(),
                transformRequest: [function(t, e) {
                    return o(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (s(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (s(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                }],
                transformResponse: [function(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(t) {
                    return t >= 200 && t < 300
                }
            };
            a.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, r.forEach(["delete", "get", "head"], function(t) {
                a.headers[t] = {}
            }), r.forEach(["post", "put", "patch"], function(t) {
                a.headers[t] = r.merge(i)
            }), t.exports = a
        }).call(e, n("W2nU"))
    },
    KD00: function(t, e) {
        t.exports = {
            render: function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "col-sm-12 col-md-12 right-sidebar overall"
                }, [e("div", [e("div", {
                    staticClass: "deduction"
                }, [e("h5", {
                    staticClass: "col-title text-center overall-title"
                }, [this._v("Impact of additional taxes, cash transfer, and inflation")]), e("br"), this._v(" "), e("table", {
                    staticClass: "table table-hover deduction-sample"
                }, [e("tbody", [e("tr", [e("td", {
                    staticClass: "overall-text"
                }, [this._v("Tax Savings\n              "), e("span", {
                    staticClass: "currency"
                }, [this._v("\n                " + this._s(this.$root.formatSign(this.$root.results.combined.totalTaxSavings)) + " " + this._s(this.$root.results.combined.totalTaxSavings.replace("-", "")) + "\n              ")])])]), this._v(" "), e("tr", [e("td", {
                    staticClass: "overall-text"
                }, [this._v("- Additional Expenses\n              "), e("span", {
                    staticClass: "currency"
                }, [this._v("\n                " + this._s(this.$root.formatSign(this.$root.results.netChanges.total)) + " " + this._s(this.$root.results.netChanges.total.replace("-", "")) + "\n              ")])])])])])])]), this._v(" "), e("div", {
                    staticClass: "col-sm-12"
                }, [e("div", {
                    staticClass: "center-total total"
                }, [this._v("\n      Total Savings"), e("br"), this._v(" "), e("span", {
                    staticClass: "currency"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.totalSavings)) + " " + this._s(this.$root.results.totalSavings.replace("-", "")) + " ")])]), this._v(" "), e("div", {
                    staticClass: "col-sm-12 annually-total text-center"
                }, [this._v("\n      " + this._s(this.$root.formatSign(this.$root.results.yearlyTotalSavings)) + " " + this._s(this.$root.results.yearlyTotalSavings.replace("-", "")) + " / year\n    ")])])])
            },
            staticRenderFns: []
        }
    },
    KqWi: function(t, e) {},
    "M/24": function(t, e, n) {
        var r = n("VU/8")(n("vBG4"), n("SgIe"), !1, null, null, null);
        t.exports = r.exports
    },
    M5CQ: function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".scrolltocalc[data-v-2f10e2f4]{position:relative;padding:120px 0}.scrolltocalc a[data-v-2f10e2f4]{text-decoration:none;color:#915191}@media only screen and (min-width:768px){.scroll-mobile[data-v-2f10e2f4]{display:none}}@media only screen and (max-width:768px){.scrolltocalc[data-v-2f10e2f4]{display:none}.scroll-mobile[data-v-2f10e2f4]{padding:0;border:none;position:fixed;bottom:0;background-color:#93518d;width:300px;margin-bottom:1em;right:25%;left:50%;margin-left:-150px;z-index:100}.scroll-mobile[data-v-2f10e2f4]:focus{outline:0}}.text-uppercase[data-v-2f10e2f4]{margin:auto;padding:10px;font-size:16px!important}.text-uppercase i[data-v-2f10e2f4]{margin-left:2px;font-size:16px}", ""])
    },
    NDrm: function(t, e, n) {
        var r = n("lk0h");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("193474b2", r, !0)
    },
    O6Gy: function(t, e, n) {
        r = function(t) {
            return function(t) {
                function e(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
                }
                var n = {};
                return e.m = t, e.c = n, e.d = function(t, n, r) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, e.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return e.d(n, "a", n), n
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "", e(e.s = 0)
            }([function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(1),
                    o = function(t) {
                        t.component(r.a.name, r.a)
                    };
                r.a.install = o, e.default = r.a
            }, function(t, e, n) {
                "use strict";
                var r = n(3),
                    o = n(5),
                    i = n(2)(r.a, o.a, !1, null, null, null);
                e.a = i.exports
            }, function(t, e) {
                t.exports = function(t, e, n, r, o, i) {
                    var s, a = t = t || {},
                        l = typeof t.default;
                    "object" !== l && "function" !== l || (s = t, a = t.default);
                    var c = "function" == typeof a ? a.options : a;
                    e && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = o);
                    var u;
                    if (i ? (u = function(t) {
                            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i)
                        }, c._ssrRegister = u) : r && (u = r), u) {
                        var f = c.functional,
                            d = f ? c.render : c.beforeCreate;
                        f ? (c._injectStyles = u, c.render = function(t, e) {
                            return u.call(e), d(t, e)
                        }) : c.beforeCreate = d ? [].concat(d, u) : [u]
                    }
                    return {
                        esModule: s,
                        exports: a,
                        options: c
                    }
                }
            }, function(t, e, n) {
                "use strict";
                var r = n(4),
                    o = n.n(r);
                e.a = {
                    name: "VueNumeric",
                    props: {
                        currency: {
                            type: String,
                            default: "",
                            required: !1
                        },
                        max: {
                            type: Number,
                            default: Number.MAX_SAFE_INTEGER || 9007199254740991,
                            required: !1
                        },
                        min: {
                            type: Number,
                            default: Number.MIN_SAFE_INTEGER || -9007199254740991,
                            required: !1
                        },
                        minus: {
                            type: Boolean,
                            default: !1,
                            required: !1
                        },
                        placeholder: {
                            type: String,
                            default: "",
                            required: !1
                        },
                        emptyValue: {
                            type: [Number, String],
                            default: "",
                            required: !1
                        },
                        precision: {
                            type: Number,
                            default: 0,
                            required: !1
                        },
                        separator: {
                            type: String,
                            default: ",",
                            required: !1
                        },
                        value: {
                            type: [Number, String],
                            default: 0,
                            required: !0
                        },
                        readOnly: {
                            type: Boolean,
                            default: !1,
                            required: !1
                        },
                        readOnlyClass: {
                            type: String,
                            default: "",
                            required: !1
                        },
                        currencySymbolPosition: {
                            type: String,
                            default: "prefix",
                            required: !1
                        }
                    },
                    data: function() {
                        return {
                            amount: ""
                        }
                    },
                    computed: {
                        amountNumber: function() {
                            return this.unformat(this.amount)
                        },
                        valueNumber: function() {
                            return this.unformat(this.value)
                        },
                        decimalSeparator: function() {
                            return "," === this.separator ? "." : ","
                        },
                        thousandSeparator: function() {
                            return "." === this.separator ? "." : "space" === this.separator ? " " : ","
                        },
                        symbolPosition: function() {
                            return this.currency ? "suffix" === this.currencySymbolPosition ? "%v %s" : "%s %v" : "%v"
                        }
                    },
                    watch: {
                        valueNumber: function(t) {
                            this.$refs.numeric !== document.activeElement && (this.amount = this.format(t))
                        },
                        readOnly: function(t, e) {
                            var n = this;
                            !1 === e && !0 === t && this.$nextTick(function() {
                                n.$refs.readOnly.className = n.readOnlyClass
                            })
                        },
                        separator: function() {
                            this.process(this.valueNumber), this.amount = this.format(this.valueNumber)
                        },
                        currency: function() {
                            this.process(this.valueNumber), this.amount = this.format(this.valueNumber)
                        },
                        precision: function() {
                            this.process(this.valueNumber), this.amount = this.format(this.valueNumber)
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.placeholder || (this.process(this.valueNumber), this.amount = this.format(this.valueNumber), setTimeout(function() {
                            t.process(t.valueNumber), t.amount = t.format(t.valueNumber)
                        }, 500)), this.readOnly && (this.$refs.readOnly.className = this.readOnlyClass)
                    },
                    methods: {
                        onBlurHandler: function(t) {
                            this.$emit("blur", t), this.amount = this.format(this.valueNumber)
                        },
                        onFocusHandler: function(t) {
                            this.$emit("focus", t), 0 === this.valueNumber ? this.amount = null : this.amount = o.a.formatMoney(this.valueNumber, {
                                symbol: "",
                                format: "%v",
                                thousand: "",
                                decimal: this.decimalSeparator,
                                precision: Number(this.precision)
                            })
                        },
                        onInputHandler: function() {
                            this.process(this.amountNumber)
                        },
                        process: function(t) {
                            t >= this.max && this.update(this.max), t <= this.min && this.update(this.min), t > this.min && t < this.max && this.update(t), !this.minus && t < 0 && (this.min >= 0 ? this.update(this.min) : this.update(0))
                        },
                        update: function(t) {
                            this.$emit("input", Number(o.a.toFixed(t, this.precision)))
                        },
                        format: function(t) {
                            return o.a.formatMoney(t, {
                                symbol: this.currency,
                                format: this.symbolPosition,
                                precision: Number(this.precision),
                                decimal: this.decimalSeparator,
                                thousand: this.thousandSeparator
                            })
                        },
                        unformat: function(t) {
                            var e = "string" == typeof t && "" === t ? this.emptyValue : t;
                            return o.a.unformat(e, this.decimalSeparator)
                        }
                    }
                }
            }, function(e, n) {
                e.exports = t
            }, function(t, e, n) {
                "use strict";
                var r = {
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return t.readOnly ? n("span", {
                            ref: "readOnly"
                        }, [t._v(t._s(t.amount))]) : n("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.amount,
                                expression: "amount"
                            }],
                            ref: "numeric",
                            attrs: {
                                placeholder: t.placeholder,
                                type: "tel"
                            },
                            domProps: {
                                value: t.amount
                            },
                            on: {
                                blur: t.onBlurHandler,
                                input: [function(e) {
                                    e.target.composing || (t.amount = e.target.value)
                                }, t.onInputHandler],
                                focus: t.onFocusHandler
                            }
                        })
                    },
                    staticRenderFns: []
                };
                e.a = r
            }])
        }, t.exports = r(n("U0Mp"));
        var r
    },
    QSvx: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(n("Rov7")),
            o = i(n("9yL2"));
        i(n("BXwK"));

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            components: {
                ComputationResultIncome: r.default,
                ComputationResultNetChanges: o.default
            }
        }
    },
    Qpra: function(t, e) {
        t.exports = {
            render: function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "container"
                }, [e("ComputationForm"), this._v(" "), e("ComputationResult")], 1)
            },
            staticRenderFns: []
        }
    },
    RIzH: function(t, e, n) {
        var r = n("VU/8")(n("Bve+"), n("h4g3"), !1, function(t) {
            n("DBrK")
        }, "data-v-8b017508", null);
        t.exports = r.exports
    },
    RUkT: function(t, e) {
        t.exports = {
            render: function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "simplert",
                    class: this.classSimplert,
                    attrs: {
                        role: "modal"
                    },
                    on: {
                        click: this.closeOverlay
                    }
                }, [e("div", {
                    staticClass: "simplert__content",
                    class: this.classContent
                }, [e("div", {
                    staticClass: "simplert__header"
                }, [this.showXclose ? e("div", {
                    staticClass: "simplert__x",
                    on: {
                        click: this.justCloseSimplert
                    }
                }, [this._v("╳")]) : this._e(), this._v(" "), this.useIcon ? e("div", ["info" === this.type ? e("div", {
                    staticClass: "simplert__icon simplert__icon--info"
                }, [e("div", {
                    staticClass: "simplert__line simplert__line--info"
                }), this._v(" "), e("div", {
                    staticClass: "simplert__line simplert__line--info-2"
                })]) : this._e(), this._v(" "), "success" === this.type ? e("div", {
                    staticClass: "simplert__icon simplert__icon--success"
                }, [e("div", {
                    staticClass: "simplert__line simplert__line--success"
                }), this._v(" "), e("div", {
                    staticClass: "simplert__line simplert__line--success-2"
                })]) : this._e(), this._v(" "), "warning" === this.type ? e("div", {
                    staticClass: "simplert__icon simplert__icon--warning"
                }, [e("div", {
                    staticClass: "simplert__line simplert__line--warning"
                }), this._v(" "), e("div", {
                    staticClass: "simplert__line simplert__line--warning-2"
                })]) : this._e(), this._v(" "), "error" === this.type ? e("div", {
                    staticClass: "simplert__icon simplert__icon--error"
                }, [e("div", {
                    staticClass: "simplert__line simplert__line--error"
                }), this._v(" "), e("div", {
                    staticClass: "simplert__line simplert__line--error-2"
                })]) : this._e(), this._v(" "), "" !== this.customIconUrl ? e("div", {
                    staticClass: "simplert__icon"
                }, [e("img", {
                    attrs: {
                        src: this.customIconUrl
                    }
                })]) : this._e()]) : this._e(), this._v(" "), e("b", {
                    staticClass: "simplert__title"
                }, [this._v(this._s(this.title))])]), this._v(" "), this.message ? e("div", {
                    staticClass: "simplert__body"
                }, [e("div", {
                    domProps: {
                        innerHTML: this._s(this.message)
                    }
                })]) : this._e(), this._v(" "), e("div", {
                    staticClass: "simplert__footer"
                }, [this.useConfirmBtn && !this.hideAllButton ? e("button", {
                    class: this.classBtnConfirm,
                    on: {
                        click: this.whenConfirm
                    }
                }, [this._v("\n        " + this._s(this.customConfirmBtnText) + "\n      ")]) : this._e(), this._v(" "), this.hideAllButton ? this._e() : e("button", {
                    class: this.classBtnClose,
                    on: {
                        click: this.closeSimplert
                    }
                }, [this._v("\n        " + this._s(this.customCloseBtnText) + "\n      ")])])])])
            },
            staticRenderFns: []
        }
    },
    Re3r: function(t, e) {
        t.exports = function(t) {
            return null != t && (n(t) || (e = t, "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))) || !!t._isBuffer);
            var e
        };

        function n(t) {
            return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        }
    },
    Rov7: function(t, e, n) {
        var r = n("VU/8")(null, n("b/oM"), !1, null, null, null);
        t.exports = r.exports
    },
    SgIe: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "container",
                    attrs: {
                        id: "top-container"
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isScrolledDown,
                        expression: "isScrolledDown"
                    }],
                    staticClass: "fixed-header",
                    attrs: {
                        id: "head"
                    }
                }, [n("div", {
                    staticClass: "img-logo container"
                }, [n("a", {
                    attrs: {
                        href: ""
                    },
                    on: {
                        click: function(e) {
                            e.preventDefault(), t.scrollToTop(e)
                        }
                    }
                }, [n("img", {
                    staticClass: "logo-img",
                    attrs: {
                        src: "img//Logo-DOF-225.png",
                        alt: "DOF",
                        width: "180px"
                    }
                }), t._v(" "), t._m(0)]), t._v(" "), n("div", {
                    staticClass: "social-nav pull-right"
                }, [n("div", {
                    staticClass: "pull-left share"
                }, [t._v(" Share the tax calculator on  ")]), t._v(" "), n("social-share-buttons")], 1)])])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("h1", {
                    staticClass: "page-title"
                }, [this._v("Tax "), e("span", {
                    staticClass: "yellow"
                }, [this._v("Calculator")])])
            }]
        }
    },
    TNV1: function(t, e, n) {
        "use strict";
        var r = n("cGG2");
        t.exports = function(t, e, n) {
            return r.forEach(n, function(n) {
                t = n(t, e)
            }), t
        }
    },
    TjKS: function(t, e, n) {
        var r = n("6Muv");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("97c039ac", r, !0)
    },
    "Tw+9": function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "form-group dependents"
                }, [n("label", {
                    staticClass: "dependents-txt"
                }, [t._v("Dependents")]), t._v(" "), t._l(5, function(e) {
                    return [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.dependent,
                            expression: "dependent"
                        }],
                        key: "dependent-input" + e,
                        staticClass: "nod radio-btn",
                        attrs: {
                            type: "radio",
                            id: "s_depend_" + e,
                            disabled: t.$root.loading
                        },
                        domProps: {
                            value: e - 1,
                            checked: t._q(t.dependent, e - 1)
                        },
                        on: {
                            change: [function(n) {
                                t.dependent = e - 1
                            }, function(e) {
                                t.$emit("update:dependent", t.dependent)
                            }]
                        }
                    }), t._v(" "), n("label", {
                        key: "dependent-label" + e,
                        attrs: {
                            for: "s_depend_" + e
                        }
                    }, [t._v(" " + t._s(e - 1))])]
                })], 2)
            },
            staticRenderFns: []
        }
    },
    U0Mp: function(t, e, n) {
        (function(t) {
            "use strict";

            function e(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }
            var n = {
                symbol: "$",
                format: "%s%v",
                decimal: ".",
                thousand: ",",
                precision: 2,
                grouping: 3,
                stripZeros: !1,
                fallback: 0
            };

            function r(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? n.decimal : arguments[1],
                    o = arguments.length <= 2 || void 0 === arguments[2] ? n.fallback : arguments[2];
                if (Array.isArray(t)) return t.map(function(t) {
                    return r(t, e, o)
                });
                if ("number" == typeof t) return t;
                var i = new RegExp("[^0-9-(-)-" + e + "]", ["g"]),
                    s = ("" + t).replace(i, "").replace(e, ".").replace(/\(([-]*\d*[^)]?\d+)\)/g, "-$1").replace(/\((.*)\)/, ""),
                    a = (s.match(/-/g) || 2).length % 2,
                    l = parseFloat(s.replace(/-/g, "")) * (a ? -1 : 1);
                return isNaN(l) ? o : l
            }

            function o(t, e) {
                r = e, o = n.precision, r = Math.round(Math.abs(r)), e = isNaN(r) ? o : r;
                var r, o, i = Math.pow(10, e);
                return (Math.round((t + 1e-8) * i) / i).toFixed(e)
            }
            var i = e(function(t) {
                    var e = Object.prototype.hasOwnProperty,
                        n = Object.prototype.propertyIsEnumerable;
                    t.exports = Object.assign || function(t, r) {
                        for (var o, i, s = function(t) {
                                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                                return Object(t)
                            }(t), a = 1; a < arguments.length; a++) {
                            o = Object(arguments[a]);
                            for (var l in o) e.call(o, l) && (s[l] = o[l]);
                            if (Object.getOwnPropertySymbols) {
                                i = Object.getOwnPropertySymbols(o);
                                for (var c = 0; c < i.length; c++) n.call(o, i[c]) && (s[i[c]] = o[i[c]])
                            }
                        }
                        return s
                    }
                }),
                s = i && "object" == typeof i && "default" in i ? i.default : i;

            function a(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (Array.isArray(t)) return t.map(function(t) {
                    return a(t, e)
                });
                e = s({}, n, e);
                var r = t < 0 ? "-" : "",
                    i = parseInt(o(Math.abs(t), e.precision), 10) + "",
                    l = i.length > 3 ? i.length % 3 : 0,
                    c = r + (l ? i.substr(0, l) + e.thousand : "") + i.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + e.thousand) + (e.precision > 0 ? e.decimal + o(Math.abs(t), e.precision).split(".")[1] : "");
                return e.stripZeros ? function(t, e) {
                    var n = t.split(e),
                        r = n[0],
                        o = n[1].replace(/0+$/, "");
                    return o.length > 0 ? r + e + o : r
                }(c, e.decimal) : c
            }
            var l = e(function(t) {
                    var e = String.prototype.valueOf,
                        n = Object.prototype.toString,
                        r = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
                    t.exports = function(t) {
                        return "string" == typeof t || "object" == typeof t && (r ? function(t) {
                            try {
                                return e.call(t), !0
                            } catch (t) {
                                return !1
                            }
                        }(t) : "[object String]" === n.call(t))
                    }
                }),
                c = l && "object" == typeof l && "default" in l ? l.default : l;

            function u(t) {
                return c(t) && t.match("%v") ? {
                    pos: t,
                    neg: t.replace("-", "").replace("%v", "-%v"),
                    zero: t
                } : t
            }

            function f(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (Array.isArray(t)) return t.map(function(t) {
                    return f(t, e)
                });
                var r = u((e = s({}, n, e)).format);
                return (t > 0 ? r.pos : t < 0 ? r.neg : r.zero).replace("%s", e.symbol).replace("%v", a(Math.abs(t), e))
            }
            t.settings = n, t.unformat = r, t.toFixed = o, t.formatMoney = f, t.formatNumber = a, t.formatColumn = function t(e) {
                var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (!e) return [];
                var i = u((o = s({}, n, o)).format),
                    l = i.pos.indexOf("%s") < i.pos.indexOf("%v"),
                    f = 0;
                return e.map(function(e) {
                    if (Array.isArray(e)) return t(e, o);
                    var n = ((e = r(e, o.decimal)) > 0 ? i.pos : e < 0 ? i.neg : i.zero).replace("%s", o.symbol).replace("%v", a(Math.abs(e), o));
                    return n.length > f && (f = n.length), n
                }).map(function(t) {
                    return c(t) && t.length < f ? l ? t.replace(o.symbol, o.symbol + new Array(f - t.length + 1).join(" ")) : new Array(f - t.length + 1).join(" ") + t : t
                })
            }, t.format = f, t.parse = r
        })(e)
    },
    UVOT: function(t, e) {
        t.exports = {
            render: function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", [e("div", {
                    staticClass: "col-sm-12 col-md-6"
                }, [e("ComputationResultIncome"), this._v(" "), e("ComputationResultNetChanges")], 1)])
            },
            staticRenderFns: []
        }
    },
    VK1f: function(t, e, n) {
        "use strict";
        var r, o = (r = n("I3G/"), r && "object" == typeof r && "default" in r ? r.default : r),
            i = {
                functional: !0,
                props: {
                    network: {
                        type: String,
                        default: ""
                    }
                },
                render: function(t, e) {
                    var n = e.parent._data.baseNetworks[e.props.network];
                    return n ? t(e.parent.networkTag, {
                        staticClass: e.data.staticClass || null,
                        staticStyle: e.data.staticStyle || null,
                        class: e.data.class || null,
                        style: e.data.style || null,
                        attrs: {
                            id: e.data.attrs.id || null,
                            "data-link": "popup" === n.type ? "#share-" + e.props.network : e.parent.createSharingUrl(e.props.network),
                            "data-action": "popup" === n.type ? null : n.action
                        },
                        on: {
                            click: "popup" === n.type ? function() {
                                e.parent.share(e.props.network)
                            } : function() {
                                e.parent.touch(e.props.network)
                            }
                        }
                    }, e.children) : console.warn("Network " + e.props.network + " does not exist")
                }
            },
            s = {
                email: {
                    sharer: "mailto:?subject=@title&body=@url%0D%0A%0D%0A@description",
                    type: "direct"
                },
                facebook: {
                    sharer: "https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description&quote=@quote",
                    type: "popup"
                },
                googleplus: {
                    sharer: "https://plus.google.com/share?url=@url",
                    type: "popup"
                },
                line: {
                    sharer: "http://line.me/R/msg/text/?@description%0D%0A@url",
                    type: "popup"
                },
                linkedin: {
                    sharer: "https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description",
                    type: "popup"
                },
                odnoklassniki: {
                    sharer: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@description",
                    type: "popup"
                },
                pinterest: {
                    sharer: "https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title",
                    type: "popup"
                },
                reddit: {
                    sharer: "https://www.reddit.com/submit?url=@url&title=@title",
                    type: "popup"
                },
                skype: {
                    sharer: "https://web.skype.com/share?url=@description%0D%0A@url",
                    type: "popup"
                },
                telegram: {
                    sharer: "https://t.me/share/url?url=@url&text=@description",
                    type: "popup"
                },
                twitter: {
                    sharer: "https://twitter.com/intent/tweet?text=@title&url=@url&hashtags=@hashtags@twitteruser",
                    type: "popup"
                },
                viber: {
                    sharer: "viber://forward?text=@url @description",
                    type: "direct"
                },
                vk: {
                    sharer: "https://vk.com/share.php?url=@url&title=@title&description=@description&image=@media&noparse=true",
                    type: "popup"
                },
                weibo: {
                    sharer: "http://service.weibo.com/share/share.php?url=@url&title=@title",
                    type: "popup"
                },
                whatsapp: {
                    sharer: "whatsapp://send?text=@description%0D%0A@url",
                    type: "direct",
                    action: "share/whatsapp/share"
                },
                sms: {
                    sharer: "sms:?body=@url%20@description",
                    type: "direct"
                }
            },
            a = "undefined" != typeof window,
            l = a ? window : null,
            c = {
                props: {
                    url: {
                        type: String,
                        default: a ? window.location.href : ""
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    quote: {
                        type: String,
                        default: ""
                    },
                    hashtags: {
                        type: String,
                        default: ""
                    },
                    twitterUser: {
                        type: String,
                        default: ""
                    },
                    withCounts: {
                        type: [String, Boolean],
                        default: !1
                    },
                    googleKey: {
                        type: String,
                        default: void 0
                    },
                    media: {
                        type: String,
                        default: ""
                    },
                    networkTag: {
                        type: String,
                        default: "span"
                    },
                    networks: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        baseNetworks: s,
                        popup: {
                            status: !1,
                            resizable: !0,
                            toolbar: !1,
                            menubar: !1,
                            scrollbars: !1,
                            location: !1,
                            directories: !1,
                            width: 626,
                            height: 436,
                            top: 0,
                            left: 0,
                            window: void 0,
                            interval: null
                        }
                    }
                },
                methods: {
                    createSharingUrl: function(t) {
                        return this.baseNetworks[t].sharer.replace(/@url/g, encodeURIComponent(this.url)).replace(/@title/g, encodeURIComponent(this.title)).replace(/@description/g, encodeURIComponent(this.description)).replace(/@quote/g, encodeURIComponent(this.quote)).replace(/@hashtags/g, this.hashtags).replace(/@media/g, this.media).replace(/@twitteruser/g, this.twitterUser ? "&via=" + this.twitterUser : "")
                    },
                    share: function(t) {
                        this.openSharer(t, this.createSharingUrl(t)), this.$root.$emit("social_shares_open", t, this.url), this.$emit("open", t, this.url)
                    },
                    touch: function(t) {
                        window.open(this.createSharingUrl(t), "_self"), this.$root.$emit("social_shares_open", t, this.url), this.$emit("open", t, this.url)
                    },
                    openSharer: function(t, e) {
                        var n = this;
                        this.popup.window && this.popup.interval && (clearInterval(this.popup.interval), this.popup.window.close(), this.$root.$emit("social_shares_change", t, this.url), this.$emit("change", t, this.url)), this.popup.window = window.open(e, "sharer", "status=" + (this.popup.status ? "yes" : "no") + ",height=" + this.popup.height + ",width=" + this.popup.width + ",resizable=" + (this.popup.resizable ? "yes" : "no") + ",left=" + this.popup.left + ",top=" + this.popup.top + ",screenX=" + this.popup.left + ",screenY=" + this.popup.top + ",toolbar=" + (this.popup.toolbar ? "yes" : "no") + ",menubar=" + (this.popup.menubar ? "yes" : "no") + ",scrollbars=" + (this.popup.scrollbars ? "yes" : "no") + ",location=" + (this.popup.location ? "yes" : "no") + ",directories=" + (this.popup.directories ? "yes" : "no")), this.popup.window.focus(), this.popup.interval = setInterval(function() {
                            n.popup.window.closed && (clearInterval(n.popup.interval), n.popup.window = void 0, n.$root.$emit("social_shares_close", t, n.url), n.$emit("close", t, n.url))
                        }, 500)
                    }
                },
                beforeMount: function() {
                    this.baseNetworks = o.util.extend(this.baseNetworks, this.networks)
                },
                mounted: function() {
                    if (a) {
                        var t = void 0 !== l.screenLeft ? l.screenLeft : screen.left,
                            e = void 0 !== l.screenTop ? l.screenTop : screen.top,
                            n = l.innerWidth ? l.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                            r = l.innerHeight ? l.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
                        this.popup.left = n / 2 - this.popup.width / 2 + t, this.popup.top = r / 2 - this.popup.height / 2 + e
                    }
                },
                components: {
                    network: i
                }
            };
        c.version = "2.3.3", c.install = function(t) {
            t.component("social-sharing", c)
        }, "undefined" != typeof window && (window.SocialSharing = c), t.exports = c
    },
    VKik: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r, o = n("WEHx"),
            i = n("katO"),
            s = (r = i, r && r.__esModule ? r : {
                default: r
            });
        e.default = {
            mixins: [o.mixin],
            data: function() {
                return {
                    name: "",
                    email: "",
                    contactNumber: "",
                    message: "",
                    errors: new s.default
                }
            },
            methods: {
                closeEmailModal: function() {
                    this.$root.showEmailModal = !1
                },
                submit: function() {
                    var t = this,
                        e = new FormData;
                    e.append("name", this.name), e.append("email", this.email), e.append("contactNumber", this.contactNumber), e.append("message", this.message), e.append("sendEmail", !0), e.append("token4", document.head.querySelector('meta[name="token4"]').content), axios.post("/api.php", e).then(function(e) {
                        t.$root.$refs.simplert.openSimplert({
                            title: "Ang iyong mensahe ay naipasa na.",
                            type: "success"
                        }), t.$root.showEmailModal = !1, t.name = "", t.email = "", t.contactNumber = "", t.message = ""
                    }).catch(function(e) {
                        return t.errors.record(e.response.data.errors)
                    })
                }
            }
        }
    },
    "VU/8": function(t, e) {
        t.exports = function(t, e, n, r, o, i) {
            var s, a = t = t || {},
                l = typeof t.default;
            "object" !== l && "function" !== l || (s = t, a = t.default);
            var c = "function" == typeof a ? a.options : a;
            e && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = o);
            var u;
            if (i ? (u = function(t) {
                    (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i)
                }, c._ssrRegister = u) : r && (u = r), u) {
                var f = c.functional,
                    d = f ? c.render : c.beforeCreate;
                f ? (c._injectStyles = u, c.render = function(t, e) {
                    return u.call(e), d(t, e)
                }) : c.beforeCreate = d ? [].concat(d, u) : [u]
            }
            return {
                esModule: s,
                exports: a,
                options: c
            }
        }
    },
    W2nU: function(t, e) {
        var n, r, o = t.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                r = s
            }
        }();

        function a(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }
        var l, c = [],
            u = !1,
            f = -1;

        function d() {
            u && l && (u = !1, l.length ? c = l.concat(c) : f = -1, c.length && p())
        }

        function p() {
            if (!u) {
                var t = a(d);
                u = !0;
                for (var e = c.length; e;) {
                    for (l = c, c = []; ++f < e;) l && l[f].run();
                    f = -1, e = c.length
                }
                l = null, u = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }
        o.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new h(t, e)), 1 !== c.length || u || a(p)
        };

        function h(t, e) {
            this.fun = t, this.array = e
        }
        h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {};

        function m() {}
        o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(t) {
            return []
        }, o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    },
    WEHx: function(t, e, n) {
        "use strict";
        var r = n("I3G/");
        r = "default" in r ? r.default : r;
        /^2\./.test(r.version) || r.util.warn("VueClickaway 2.1.0 only supports Vue 2.x, and does not support Vue " + r.version);
        var o = "_vue_clickaway_handler";

        function i(t, e) {
            s(t);
            var n = e.value;
            if ("function" == typeof n) {
                var r = !1;
                setTimeout(function() {
                    r = !0
                }, 0), t[o] = function(e) {
                    if (r && !t.contains(e.target)) return n(e)
                }, document.documentElement.addEventListener("click", t[o], !1)
            }
        }

        function s(t) {
            document.documentElement.removeEventListener("click", t[o], !1), delete t[o]
        }
        var a = {
                bind: i,
                update: function(t, e) {
                    e.value !== e.oldValue && i(t, e)
                },
                unbind: s
            },
            l = {
                directives: {
                    onClickaway: a
                }
            };
        e.version = "2.1.0", e.directive = a, e.mixin = l
    },
    WeMc: function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".container[data-v-7962b63f]{padding:0}", ""])
    },
    "Xk/1": function(t, e, n) {
        var r = n("VU/8")(n("9NIR"), n("GDqE"), !1, null, null, null);
        t.exports = r.exports
    },
    XmWM: function(t, e, n) {
        "use strict";
        var r = n("KCLY"),
            o = n("cGG2"),
            i = n("fuGk"),
            s = n("xLtR");

        function a(t) {
            this.defaults = t, this.interceptors = {
                request: new i,
                response: new i
            }
        }
        a.prototype.request = function(t) {
            "string" == typeof t && (t = o.merge({
                url: arguments[0]
            }, arguments[1])), (t = o.merge(r, this.defaults, {
                method: "get"
            }, t)).method = t.method.toLowerCase();
            var e = [s, void 0],
                n = Promise.resolve(t);
            for (this.interceptors.request.forEach(function(t) {
                    e.unshift(t.fulfilled, t.rejected)
                }), this.interceptors.response.forEach(function(t) {
                    e.push(t.fulfilled, t.rejected)
                }); e.length;) n = n.then(e.shift(), e.shift());
            return n
        }, o.forEach(["delete", "get", "head", "options"], function(t) {
            a.prototype[t] = function(e, n) {
                return this.request(o.merge(n || {}, {
                    method: t,
                    url: e
                }))
            }
        }), o.forEach(["post", "put", "patch"], function(t) {
            a.prototype[t] = function(e, n, r) {
                return this.request(o.merge(r || {}, {
                    method: t,
                    url: e,
                    data: n
                }))
            }
        }), t.exports = a
    },
    YhJH: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(n("Ywi1")),
            o = i(n("7uly"));

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            components: {
                ComputationForm: r.default,
                ComputationResult: o.default
            }
        }
    },
    Ywi1: function(t, e, n) {
        var r = n("VU/8")(n("5jDN"), n("Agmk"), !1, function(t) {
            n("TjKS")
        }, "data-v-51aa6ba8", null);
        t.exports = r.exports
    },
    Zyre: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function() {
                return {
                    dependent: 0
                }
            }
        }
    },
    "b/oM": function(t, e) {
        t.exports = {
            render: function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "col-md-12 col-sm-12 combine-income",
                    attrs: {
                        id: "combine-income"
                    }
                }, [e("div", {
                    staticClass: "col-md-12"
                }, [e("h5", {
                    staticClass: "col-title"
                }, [this._v("Impact of lower " + this._s("married" === this.$root.singleOrMarried ? "combined " : "personal") + " income tax")])]), this._v(" "), e("div", {
                    staticClass: "col-md-6 col-sm-6"
                }, [this._m(0), this._v(" "), e("table", {
                    staticClass: "table table-hover income-sample new"
                }, [e("thead"), this._v(" "), e("tbody", [e("tr", {
                    staticClass: "tax-due"
                }, [e("td", {
                    staticClass: "caption lr"
                }, [this._v("Tax due")]), this._v(" "), e("td", {
                    staticClass: "separation vam"
                }, [e("span", {
                    staticClass: "currency"
                }, [e("span", [this._v(this._s(this.$root.formatSign(this.$root.results.combined.newSystem.totalTaxDue)) + " ")]), this._v(this._s(this.$root.results.combined.newSystem.totalTaxDue.replace("-", "")))])])]), this._v(" "), e("tr", [this._m(1), this._v(" "), e("td", {
                    staticClass: "vam"
                }, [e("span", {
                    staticClass: "currency"
                }, [e("span", [this._v(this._s(this.$root.formatSign(this.$root.results.combined.newSystem.totalNetPay)) + " ")]), this._v(" " + this._s(this.$root.results.combined.newSystem.totalNetPay.replace("-", "")))])])]), this._v(" "), e("tr", [this._m(2), this._v(" "), e("td", {
                    staticClass: "separation vam"
                }, [e("span", {
                    staticClass: "currency"
                }, [e("span", [this._v(this._s(this.$root.formatSign(this.$root.results.combined.newSystem.totalDeduction)) + " ")]), this._v(" " + this._s(this.$root.results.combined.newSystem.totalDeduction.replace("-", "")))])])]), this._v(" "), e("tr", [this._m(3), this._v(" "), e("td", {
                    staticClass: "vam"
                }, [e("span", {
                    staticClass: "currency"
                }, [e("span", [this._v(this._s(this.$root.formatSign(this.$root.results.combined.newSystem.totalTakeHome)) + " ")]), this._v(" " + this._s(this.$root.results.combined.newSystem.totalTakeHome.replace("-", "")))])])])])])]), this._v(" "), e("div", {
                    staticClass: "col-md-6 col-sm-6 ls"
                }, [this._m(4), this._v(" "), e("div", {
                    attrs: {
                        id: "old-income"
                    }
                }), this._v(" "), e("table", {
                    staticClass: "table table-hover income-sample"
                }, [e("thead"), this._v(" "), e("tbody", [e("tr", {
                    staticClass: "tax-due"
                }, [e("td", {
                    staticClass: "caption lr"
                }, [this._v("Tax due")]), this._v(" "), e("td", {
                    staticClass: "separation vam"
                }, [e("span", {
                    staticClass: "currency ils light"
                }, [e("span", [this._v(this._s(this.$root.formatSign(this.$root.results.combined.oldSystem.totalTaxDue)) + " ")]), this._v(this._s(this.$root.results.combined.oldSystem.totalTaxDue.replace("-", "")))])])]), this._v(" "), this._m(5), this._v(" "), e("td", {
                    staticClass: "vam"
                }, [e("span", {
                    staticClass: "currency ils light"
                }, [e("span", [this._v(this._s(this.$root.formatSign(this.$root.results.combined.oldSystem.totalNetPay)) + " ")]), this._v(" " + this._s(this.$root.results.combined.oldSystem.totalNetPay.replace("-", "")))])]), this._v(" "), e("tr", [this._m(6), this._v(" "), e("td", {
                    staticClass: "separation vam"
                }, [e("span", {
                    staticClass: "currency ils light"
                }, [e("span", [this._v(this._s(this.$root.formatSign(this.$root.results.combined.oldSystem.totalDeduction)) + " ")]), this._v(" " + this._s(this.$root.results.combined.oldSystem.totalDeduction.replace("-", "")))])])]), this._v(" "), e("tr", [this._m(7), this._v(" "), e("td", {
                    staticClass: "vam"
                }, [e("span", {
                    staticClass: "currency ils light"
                }, [e("span", [this._v(this._s(this.$root.formatSign(this.$root.results.combined.oldSystem.totalTakeHome)) + " ")]), this._v(" " + this._s(this.$root.results.combined.oldSystem.totalTakeHome.replace("-", "")))])])])])])]), this._v(" "), e("div", {
                    staticClass: "col-sm-12"
                }, [e("div", {
                    staticClass: "center-total total"
                }, [this._v("\n      Tax Savings "), e("span", {
                    staticClass: "currency tax-savings"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.combined.totalTaxSavings)) + " " + this._s(this.$root.results.combined.totalTaxSavings.replace("-", "")) + " / month")])])]), this._v(" "), e("br"), this._v(" "), e("div", {
                    staticClass: "col-sm-12 annual center-align"
                }, [this._v("\n    " + this._s(this.$root.formatSign(this.$root.results.combined.yearlyTotalTaxSavings)) + " " + this._s(this.$root.results.combined.yearlyTotalTaxSavings.replace("-", "")) + " / year\n  ")])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("p", {
                    staticClass: "col-text bs"
                }, [this._v("Bagong Sistema "), e("br"), this._v("(simula 2018)")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("td", {
                    staticClass: "caption lr"
                }, [this._v("Net pay"), e("br"), this._v("after tax")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("td", {
                    staticClass: "caption lr"
                }, [this._v("Total"), e("br"), this._v("contribution")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("td", {
                    staticClass: "caption lr"
                }, [this._v("Net take"), e("br"), this._v("home pay")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("p", {
                    staticClass: "col-text"
                }, [this._v("Lumang Sistema "), e("br"), this._v("(hanggang 2017)")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("td", {
                    staticClass: "caption lr"
                }, [this._v("Net pay"), e("br"), this._v("after tax")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("td", {
                    staticClass: "caption lr"
                }, [this._v("Total "), e("br"), this._v("contribution")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("td", {
                    staticClass: "caption lr"
                }, [this._v("Net take"), e("br"), this._v("home pay")])
            }]
        }
    },
    bm7V: function(t, e, n) {
        r = function() {
            "use strict";
            var t = 4,
                e = .001,
                n = 1e-7,
                r = 10,
                o = 11,
                i = 1 / (o - 1),
                s = "function" == typeof Float32Array;

            function a(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function l(t, e) {
                return 3 * e - 6 * t
            }

            function c(t) {
                return 3 * t
            }

            function u(t, e, n) {
                return ((a(e, n) * t + l(e, n)) * t + c(e)) * t
            }

            function f(t, e, n) {
                return 3 * a(e, n) * t * t + 2 * l(e, n) * t + c(e)
            }
            var d = function(a, l, c, d) {
                    if (!(0 <= a && a <= 1 && 0 <= c && c <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                    var p = s ? new Float32Array(o) : new Array(o);
                    if (a !== l || c !== d)
                        for (var h = 0; h < o; ++h) p[h] = u(h * i, a, c);

                    function m(s) {
                        for (var l = 0, d = 1, h = o - 1; d !== h && p[d] <= s; ++d) l += i;
                        var m = l + (s - p[--d]) / (p[d + 1] - p[d]) * i,
                            v = f(m, a, c);
                        return v >= e ? function(e, n, r, o) {
                            for (var i = 0; i < t; ++i) {
                                var s = f(n, r, o);
                                if (0 === s) return n;
                                n -= (u(n, r, o) - e) / s
                            }
                            return n
                        }(s, m, a, c) : 0 === v ? m : function(t, e, o, i, s) {
                            var a, l, c = 0;
                            do {
                                (a = u(l = e + (o - e) / 2, i, s) - t) > 0 ? o = l : e = l
                            } while (Math.abs(a) > n && ++c < r);
                            return l
                        }(s, l, l + i, a, c)
                    }
                    return function(t) {
                        return a === l && c === d ? t : 0 === t ? 0 : 1 === t ? 1 : u(m(t), l, d)
                    }
                },
                p = {
                    ease: [.25, .1, .25, 1],
                    linear: [0, 0, 1, 1],
                    "ease-in": [.42, 0, 1, 1],
                    "ease-out": [0, 0, .58, 1],
                    "ease-in-out": [.42, 0, .58, 1]
                },
                h = !1;
            try {
                var m = Object.defineProperty({}, "passive", {
                    get: function() {
                        h = !0
                    }
                });
                window.addEventListener("test", null, m)
            } catch (t) {}
            var v = {
                    $: function(t) {
                        return "string" != typeof t ? t : document.querySelector(t)
                    },
                    on: function(t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            passive: !1
                        };
                        e instanceof Array || (e = [e]);
                        for (var o = 0; o < e.length; o++) t.addEventListener(e[o], n, !!h && r)
                    },
                    off: function(t, e, n) {
                        e instanceof Array || (e = [e]);
                        for (var r = 0; r < e.length; r++) t.removeEventListener(e[r], n)
                    },
                    cumulativeOffset: function(t) {
                        var e = 0,
                            n = 0;
                        do {
                            e += t.offsetTop || 0, n += t.offsetLeft || 0, t = t.offsetParent
                        } while (t);
                        return {
                            top: e,
                            left: n
                        }
                    }
                },
                y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                g = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                },
                _ = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
                b = {
                    container: "body",
                    duration: 500,
                    easing: "ease",
                    offset: 0,
                    cancelable: !0,
                    onDone: !1,
                    onCancel: !1,
                    x: !1,
                    y: !0
                };

            function C(t) {
                b = g({}, b, t)
            }
            var w = function() {
                    var t = void 0,
                        e = void 0,
                        n = void 0,
                        r = void 0,
                        o = void 0,
                        i = void 0,
                        s = void 0,
                        a = void 0,
                        l = void 0,
                        c = void 0,
                        u = void 0,
                        f = void 0,
                        h = void 0,
                        m = void 0,
                        g = void 0,
                        C = void 0,
                        w = void 0,
                        x = void 0,
                        $ = function(t) {
                            i && (x = t, w = !0)
                        },
                        S = void 0,
                        k = void 0,
                        T = void 0,
                        O = void 0;

                    function A(t) {
                        if (w) return I();
                        k || (k = t), T = t - k, O = Math.min(T / n, 1), O = S(O), E(e, h + C * O, u + g * O), T < n ? window.requestAnimationFrame(A) : I()
                    }

                    function I() {
                        w || E(e, m, f), k = !1, v.off(e, _, $), w && a && a(x), !w && s && s()
                    }

                    function E(t, e, n) {
                        c && (t.scrollTop = e), l && (t.scrollLeft = n), "body" === t.tagName.toLowerCase() && (c && (document.documentElement.scrollTop = e), l && (document.documentElement.scrollLeft = n))
                    }
                    return function(k, T) {
                        var O = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if ("object" === (void 0 === T ? "undefined" : y(T)) ? O = T : "number" == typeof T && (O.duration = T), !(t = v.$(k))) return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + k);
                        e = v.$(O.container || b.container), n = O.duration || b.duration, r = O.easing || b.easing, o = O.offset || b.offset, i = O.hasOwnProperty("cancelable") ? !1 !== O.cancelable : b.cancelable, s = O.onDone || b.onDone, a = O.onCancel || b.onCancel, l = void 0 === O.x ? b.x : O.x, c = void 0 === O.y ? b.y : O.y;
                        var I = v.cumulativeOffset(e),
                            E = v.cumulativeOffset(t);
                        return "function" == typeof o && (o = o()), h = function(t) {
                            var e = t.scrollTop;
                            return "body" === t.tagName.toLowerCase() && (e = e || document.documentElement.scrollTop), e
                        }(e), m = E.top - I.top + o, u = function(t) {
                            var e = t.scrollLeft;
                            return "body" === t.tagName.toLowerCase() && (e = e || document.documentElement.scrollLeft), e
                        }(e), f = E.left - I.left + o, w = !1, C = m - h, g = f - u, "string" == typeof r && (r = p[r] || p.ease), S = d.apply(d, r), C || g ? (v.on(e, _, $, {
                            passive: !0
                        }), window.requestAnimationFrame(A), function() {
                            x = null, w = !0
                        }) : void 0
                    }
                }(),
                x = [];

            function $(t) {
                var e = function(t) {
                    for (var e = 0; e < x.length; ++e)
                        if (x[e].el === t) return x[e]
                }(t);
                return e || (x.push(e = {
                    el: t,
                    binding: {}
                }), e)
            }

            function S(t) {
                t.preventDefault();
                var e = $(this).binding;
                if ("string" == typeof e.value) return w(e.value);
                w(e.value.el || e.value.element, e.value)
            }
            var k = {
                    bind: function(t, e) {
                        $(t).binding = e, v.on(t, "click", S)
                    },
                    unbind: function(t) {
                        ! function(t) {
                            for (var e = 0; e < x.length; ++e)
                                if (x[e].el === t) return x.splice(e, 1), !0
                        }(t), v.off(t, "click", S)
                    },
                    update: function(t, e) {
                        $(t).binding = e
                    },
                    scrollTo: w,
                    bindings: x
                },
                T = function(t, e) {
                    e && C(e), t.directive("scroll-to", k), t.prototype.$scrollTo = k.scrollTo
                };
            return "undefined" != typeof window && window.Vue && (window.VueScrollTo = k, window.VueScrollTo.setDefaults = C, Vue.use(T)), k.install = T, k
        }, t.exports = r();
        var r
    },
    bmM8: function(t, e, n) {
        var r = n("GQwa");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("217586a5", r, !0)
    },
    cGBQ: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "col-sm-12 job-sector single"
                }, [n("div", {
                    staticClass: "form-group"
                }, [t._l(["private", "government", "ofw"], function(e, r) {
                    return n("div", {
                        key: r,
                        staticClass: "col-sm-4"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.sector,
                            expression: "sector"
                        }],
                        staticClass: "jssingle ch radio-btn",
                        attrs: {
                            type: "radio",
                            id: e + "-" + t.sectorComponentKey,
                            disabled: t.$root.loading
                        },
                        domProps: {
                            value: e,
                            checked: t._q(t.sector, e)
                        },
                        on: {
                            change: [function(n) {
                                t.sector = e
                            }, function(e) {
                                t.$emit(t.sectorComponentKey, t.sector)
                            }]
                        }
                    }), t._v(" "), n("label", {
                        attrs: {
                            for: e + "-" + t.sectorComponentKey
                        }
                    }, [t._v(" " + t._s(t._f("sectorName")(e)))])])
                }), t._v(" "), n("br")], 2)])
            },
            staticRenderFns: []
        }
    },
    cGG2: function(t, e, n) {
        "use strict";
        var r = n("JP+z"),
            o = n("Re3r"),
            i = Object.prototype.toString;

        function s(t) {
            return "[object Array]" === i.call(t)
        }

        function a(t) {
            return null !== t && "object" == typeof t
        }

        function l(t) {
            return "[object Function]" === i.call(t)
        }

        function c(t, e) {
            if (null !== t && void 0 !== t)
                if ("object" != typeof t && (t = [t]), s(t))
                    for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                else
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
        }
        t.exports = {
            isArray: s,
            isArrayBuffer: function(t) {
                return "[object ArrayBuffer]" === i.call(t)
            },
            isBuffer: o,
            isFormData: function(t) {
                return "undefined" != typeof FormData && t instanceof FormData
            },
            isArrayBufferView: function(t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isNumber: function(t) {
                return "number" == typeof t
            },
            isObject: a,
            isUndefined: function(t) {
                return void 0 === t
            },
            isDate: function(t) {
                return "[object Date]" === i.call(t)
            },
            isFile: function(t) {
                return "[object File]" === i.call(t)
            },
            isBlob: function(t) {
                return "[object Blob]" === i.call(t)
            },
            isFunction: l,
            isStream: function(t) {
                return a(t) && l(t.pipe)
            },
            isURLSearchParams: function(t) {
                return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            },
            forEach: c,
            merge: function t() {
                var e = {};

                function n(n, r) {
                    "object" == typeof e[r] && "object" == typeof n ? e[r] = t(e[r], n) : e[r] = n
                }
                for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
                return e
            },
            extend: function(t, e, n) {
                return c(e, function(e, o) {
                    t[o] = n && "function" == typeof e ? r(e, n) : e
                }), t
            },
            trim: function(t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    },
    cWxy: function(t, e, n) {
        "use strict";
        var r = n("dVOP");

        function o(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new Promise(function(t) {
                e = t
            });
            var n = this;
            t(function(t) {
                n.reason || (n.reason = new r(t), e(n.reason))
            })
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, o.source = function() {
            var t;
            return {
                token: new o(function(e) {
                    t = e
                }),
                cancel: t
            }
        }, t.exports = o
    },
    dIwP: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    },
    dVOP: function(t, e, n) {
        "use strict";

        function r(t) {
            this.message = t
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, t.exports = r
    },
    dlMH: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = s(n("FxhJ")),
            o = s(n("CM4b")),
            i = s(n("Xk/1"));

        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = {
            data: function() {
                return {
                    oldMonthlyIncome: 0,
                    form: {
                        dependents: 0,
                        monthlyIncome: "",
                        sector: "private"
                    }
                }
            },
            components: {
                ComputationFormInputDependents: r.default,
                ComputationFormInputSectors: o.default,
                ComputationFormInputIncome: i.default
            },
            watch: {
                "form.sector": function(t) {
                    var e = this;
                    this.$root.results.sssOrGsis = "government" === t ? "GSIS" : "SSS", "ofw" === t ? (this.$root.$refs.simplert.openSimplert({
                        title: "Tuloy pa rin ang exemption ng mga minimum wage earner at OFW sa Personal Income Tax"
                    }), this.oldMonthlyIncome = this.form.monthlyIncome, this.form.monthlyIncome = "Not Applicable") : "Not Applicable" == this.form.monthlyIncome && (this.form.monthlyIncome = this.oldMonthlyIncome, this.$nextTick(function() {
                        e.$refs.monthlyIncome.formatValue()
                    })), this.$root.resetResults()
                },
                "form.monthlyIncome": function(t) {
                    this.$root.resetResults()
                },
                "form.dependents": function(t) {
                    this.$root.resetResults()
                }
            },
            methods: {
                validate: function() {
                    var t = this;
                    return "" === this.form.monthlyIncome ? (this.$root.$refs.simplert.openSimplert({
                        title: "Gagi kahit anong gawin nyo rape parin abot nyo sa gobyerno."
                    }), this.$nextTick(function() {
                        return t.$root.$refs.simplert.$el.getElementsByTagName("button")[0].focus()
                    }), !1) : !(parseInt(this.form.monthlyIncome) < 300) || (this.$root.$refs.simplert.openSimplert({
                        title: "Gagi kahit anong gawin nyo rape parin abot nyo sa gobyerno."
                    }), this.$nextTick(function() {
                        return t.$root.$refs.simplert.$el.getElementsByTagName("button")[0].focus()
                    }), !1)
                },
                submit: function() {
                    var t = this;
                    if (this.validate()) {
                        this.$refs.submit.focus(), this.$root.loading = !0;
                        var e = new FormData;
                        e.append("jobsectorsingle", "private" === this.form.sector ? "p" : "government" === this.form.sector ? "g" : "ofw"), e.append("incomesingle", this.form.monthlyIncome), e.append("numofdependent", this.form.dependents), e.append("token1", document.head.querySelector('meta[name="token1"]').content), axios.post("/api.php", e).takeAtLeast(500).then(function(e) {
                            t.$nextTick(function() {
                                t.$root.showResults(e.data)
                            })
                        }).catch(function(t) {
                            return window.location.reload()
                        })
                    }
                }
            }
        }
    },
    eeHe: function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, "label[data-v-f772a45e]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""])
    },
    fuGk: function(t, e, n) {
        "use strict";
        var r = n("cGG2");

        function o() {
            this.handlers = []
        }
        o.prototype.use = function(t, e) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e
            }), this.handlers.length - 1
        }, o.prototype.eject = function(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }, o.prototype.forEach = function(t) {
            r.forEach(this.handlers, function(e) {
                null !== e && t(e)
            })
        }, t.exports = o
    },
    gRGS: function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".currency[data-v-711b68fd]{font-size:13px!important}", ""])
    },
    "h/2W": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            methods: {
                answer: function(t) {
                    switch (t) {
                        case "faq1":
                            var e = {
                                title: "Who will benefit from the adjustments in PIT?",
                                message: "The first 250,000 pesos of income will now be tax exempt. Overall, the adjustments in brackets and lower rates will increase the take-home pay of 99.9% of taxpayers. The richest 0.1% of taxpayers, meanwhile, will face a higher tax rate of 35%, maintaining the progressivity of the tax system."
                            };
                            break;
                        case "faq2":
                            e = {
                                title: "What about our bonuses and other benefits, will they be exempt from taxes?",
                                message: "Bonuses up to 90,000 pesos (increased from 82,000) will continue to be exempt from income tax. And, in line with simplifying the tax system, the current personal exemption and exemption for dependents are subsumed in the higher exemption threshold of 250,000 pesos. Also, de minimis benefits will continue to be exempt. Tax on fringe benefits, meanwhile, will be raised to 35% to align with the top marginal tax rate of the PIT."
                            };
                            break;
                        case "faq3":
                            e = {
                                title: "Why do we need to impose additional fuel excise tax?",
                                message: "Petroleum excise taxes have not been adjusted for 20 years since 1997. Inflation has eroded the value of these, thereby depressing revenue collection and limiting our ability to mitigate environmental and health impact of pollution and internalize the costs of climate change-induced calamities. In addition, raising the fuel excises will stop subsidizing the consumption of the rich who consume most of the fuels, and will generate more funds to support building infrastructure that will address congestion and raise productivity."
                            };
                            break;
                        case "faq4":
                            e = {
                                title: "Why can’t the VAT rate be lowered?",
                                message: "Currently, the Philippines has one of the highest VAT rates in the Southeast Asian region. These exemptions complicate our VAT system, make tax administration more difficult, and are source massive leakages. Addressing these leakages would allow us to reduce the VAT rate in the future. TRAIN has repealed 54 of these provisions, thereby making the VAT system fairer. Purchases of senior citizens and persons with disability continue to be exempted from the VAT."
                            };
                            break;
                        case "faq5":
                            e = {
                                title: "Why do we need to adjust auto excise?",
                                message: "TRAIN simplifies the automobile excise and encourages the use of more efficient and environment-friendly alternatives. Purely electric cars will now be exempt from automobile excise, and hybrid cars will be taxed 50% of the adjusted excise tax rates."
                            };
                            break;
                        case "faq6":
                            e = {
                                title: "Why tax SSBs and not sugar broadly?",
                                message: "The SSB excise tax, as a health measure, encourages individuals to make healthy choices to ensure a more productive population. SSBs contain empty calories and has little or no nutritional value. Consumers, however, are often unaware of the long-term health consequences of frequent SSB intake. These products are affordable and conveniently available in almost every corner making it easier for the public to purchase."
                            }
                    }
                    this.$root.$refs.simplert.openSimplert(e)
                }
            }
        }
    },
    h4g3: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "marriedForm",
                    staticClass: "row tab-pane fade active in",
                    attrs: {
                        id: "menu2"
                    }
                }, [n("form", {
                    on: {
                        submit: function(e) {
                            e.preventDefault(), t.submit(e)
                        }
                    }
                }, [n("ComputationFormInputDependents", {
                    on: {
                        "update:dependent": function(e) {
                            return t.form.dependents = e
                        }
                    }
                }), t._v(" "), n("ComputationFormInputIncome", {
                    ref: "monthlyIncome",
                    attrs: {
                        placeholder: "Monthly Gross Income mo"
                    },
                    model: {
                        value: t.form.monthlyIncome,
                        callback: function(e) {
                            t.$set(t.form, "monthlyIncome", e)
                        },
                        expression: "form.monthlyIncome"
                    }
                }), t._v(" "), n("ComputationFormInputSectors", {
                    attrs: {
                        "sector-component-key": "sector"
                    },
                    on: {
                        sector: function(e) {
                            return t.form.sector = e
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "income2"
                }, [n("ComputationFormInputIncome", {
                    ref: "monthlyIncome2",
                    attrs: {
                        placeholder: "Monthly Gross Income ng asawa mo"
                    },
                    model: {
                        value: t.form.monthlyIncome2,
                        callback: function(e) {
                            t.$set(t.form, "monthlyIncome2", e)
                        },
                        expression: "form.monthlyIncome2"
                    }
                }), t._v(" "), n("ComputationFormInputSectors", {
                    attrs: {
                        "sector-component-key": "sector2"
                    },
                    on: {
                        sector2: function(e) {
                            return t.form.sector2 = e
                        }
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "col-sm-12 btnCompute"
                }, [n("button", {
                    ref: "submit",
                    staticClass: "btn btn-yellow submitme col-sm-8 col-sm-offset-2",
                    attrs: {
                        type: "submit",
                        id: "submit",
                        disabled: t.isDisabled
                    }
                }, [t._v("\n        Kalkulahin\n        "), t.$root.loading ? n("i", {
                    staticClass: "fa fa-spinner fa-spin fa-1x fa-fw"
                }) : t._e()])])], 1)])
            },
            staticRenderFns: []
        }
    },
    jvFi: function(t, e, n) {
        var r = n("WeMc");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("4cfc15f6", r, !0)
    },
    katO: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }();
        var o = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.errors = {}
            }
            return r(t, [{
                key: "has",
                value: function(t) {
                    return this.errors.hasOwnProperty(t)
                }
            }, {
                key: "any",
                value: function() {
                    return Object.keys(this.errors).length > 0
                }
            }, {
                key: "get",
                value: function(t) {
                    if (this.errors[t]) return this.errors[t]
                }
            }, {
                key: "record",
                value: function(t) {
                    this.errors = t
                }
            }, {
                key: "clear",
                value: function(t) {
                    t ? delete this.errors[t] : this.errors = {}
                }
            }]), t
        }();
        e.default = o
    },
    lk0h: function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, ".apply-margin{margin:11px}.right-content{position:relative}", ""])
    },
    mtWM: function(t, e, n) {
        t.exports = n("tIFN")
    },
    mypn: function(t, e, n) {
        (function(t, e) {
            ! function(t, n) {
                "use strict";
                if (!t.setImmediate) {
                    var r, o = 1,
                        i = {},
                        s = !1,
                        a = t.document,
                        l = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    l = l && l.setTimeout ? l : t, "[object process]" === {}.toString.call(t.process) ? r = function(t) {
                        e.nextTick(function() {
                            u(t)
                        })
                    } : function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                n = t.onmessage;
                            return t.onmessage = function() {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? function() {
                        var e = "setImmediate$" + Math.random() + "$",
                            n = function(n) {
                                n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && u(+n.data.slice(e.length))
                            };
                        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), r = function(n) {
                            t.postMessage(e + n, "*")
                        }
                    }() : t.MessageChannel ? function() {
                        var t = new MessageChannel;
                        t.port1.onmessage = function(t) {
                            u(t.data)
                        }, r = function(e) {
                            t.port2.postMessage(e)
                        }
                    }() : a && "onreadystatechange" in a.createElement("script") ? function() {
                        var t = a.documentElement;
                        r = function(e) {
                            var n = a.createElement("script");
                            n.onreadystatechange = function() {
                                u(e), n.onreadystatechange = null, t.removeChild(n), n = null
                            }, t.appendChild(n)
                        }
                    }() : r = function(t) {
                        setTimeout(u, 0, t)
                    }, l.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var s = {
                            callback: t,
                            args: e
                        };
                        return i[o] = s, r(o), o++
                    }, l.clearImmediate = c
                }

                function c(t) {
                    delete i[t]
                }

                function u(t) {
                    if (s) setTimeout(u, 0, t);
                    else {
                        var e = i[t];
                        if (e) {
                            s = !0;
                            try {
                                ! function(t) {
                                    var e = t.callback,
                                        r = t.args;
                                    switch (r.length) {
                                        case 0:
                                            e();
                                            break;
                                        case 1:
                                            e(r[0]);
                                            break;
                                        case 2:
                                            e(r[0], r[1]);
                                            break;
                                        case 3:
                                            e(r[0], r[1], r[2]);
                                            break;
                                        default:
                                            e.apply(n, r)
                                    }
                                }(e)
                            } finally {
                                c(t), s = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(e, n("DuR2"), n("W2nU"))
    },
    nOBE: function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.$root.showEmailModal ? n("div", {
                    staticClass: "modal fade in",
                    attrs: {
                        id: "modal-email"
                    }
                }, [n("div", {
                    staticClass: "modal-dialog"
                }, [n("form", {
                    directives: [{
                        name: "on-clickaway",
                        rawName: "v-on-clickaway",
                        value: t.closeEmailModal,
                        expression: "closeEmailModal"
                    }],
                    on: {
                        submit: function(e) {
                            e.preventDefault(), t.submit(e)
                        },
                        keydown: function(e) {
                            t.errors.clear(e.target.name)
                        }
                    }
                }, [n("div", {
                    staticClass: "modal-content"
                }, [n("div", {
                    staticClass: "modal-header text-center"
                }, [n("span", {
                    staticClass: "modal-title"
                }, [t._v(" MAG-EMAIL ")]), t._v(" "), n("div", {
                    staticClass: "pull-right"
                }, [n("button", {
                    staticClass: "close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: t.closeEmailModal
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t×\n\t\t\t\t\t\t\t")])])]), t._v(" "), n("div", {
                    staticClass: "modal-body email-container"
                }, [n("div", {
                    staticClass: "form-group text-center",
                    class: {
                        "has-error": t.errors.has("name")
                    }
                }, [n("div", {
                    staticClass: "form-group",
                    class: {
                        "has-error": t.errors.has("name")
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.name,
                        expression: "name"
                    }],
                    staticClass: "form-control email-input",
                    attrs: {
                        type: "text",
                        name: "name",
                        placeholder: "Pangalan *",
                        tabindex: "1"
                    },
                    domProps: {
                        value: t.name
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.name = e.target.value)
                        }
                    }
                }), t._v(" "), n("span", {
                    staticClass: "help-block"
                }, [t._v(t._s(t.errors.get("name")))])]), t._v(" "), n("div", {
                    staticClass: "form-group",
                    class: {
                        "has-error": t.errors.has("email")
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.email,
                        expression: "email"
                    }],
                    staticClass: "form-control email-input",
                    attrs: {
                        type: "email",
                        name: "email",
                        placeholder: "Email Address *",
                        tabindex: "1"
                    },
                    domProps: {
                        value: t.email
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.email = e.target.value)
                        }
                    }
                }), t._v(" "), n("span", {
                    staticClass: "help-block"
                }, [t._v(t._s(t.errors.get("email")))])]), t._v(" "), n("div", {
                    staticClass: "form-group",
                    class: {
                        "has-error": t.errors.has("contactNumber")
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.contactNumber,
                        expression: "contactNumber"
                    }],
                    staticClass: "form-control email-input",
                    attrs: {
                        type: "text",
                        name: "contactNumber",
                        placeholder: "Contact Number",
                        tabindex: "1"
                    },
                    domProps: {
                        value: t.contactNumber
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.contactNumber = e.target.value)
                        }
                    }
                }), t._v(" "), n("span", {
                    staticClass: "help-block"
                }, [t._v(t._s(t.errors.get("contactNumber")))])]), t._v(" "), n("div", {
                    staticClass: "form-group",
                    class: {
                        "has-error": t.errors.has("message")
                    }
                }, [n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.message,
                        expression: "message"
                    }],
                    staticClass: "form-control email-message",
                    attrs: {
                        rows: "5",
                        name: "message",
                        tabindex: "1",
                        placeholder: "Komento o Suhetiyon *"
                    },
                    domProps: {
                        value: t.message
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.message = e.target.value)
                        }
                    }
                }), t._v(" "), n("span", {
                    staticClass: "help-block"
                }, [t._v(t._s(t.errors.get("message")))])]), t._v(" "), n("button", {
                    staticClass: "btn send",
                    attrs: {
                        type: "submit",
                        disabled: t.errors.any()
                    }
                }, [n("strong", [t._v("SUBMIT")])])])])])])])]) : t._e()
            },
            staticRenderFns: []
        }
    },
    oJlt: function(t, e, n) {
        "use strict";
        var r = n("cGG2"),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function(t) {
            var e, n, i, s = {};
            return t ? (r.forEach(t.split("\n"), function(t) {
                if (i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), e) {
                    if (s[e] && o.indexOf(e) >= 0) return;
                    s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n
                }
            }), s) : s
        }
    },
    oPGD: function(t, e, n) {
        var r = n("VU/8")(n("VKik"), n("nOBE"), !1, function(t) {
            n("4rIW")
        }, "data-v-73cf0bf6", null);
        t.exports = r.exports
    },
    p1b6: function(t, e, n) {
        "use strict";
        var r = n("cGG2");
        t.exports = r.isStandardBrowserEnv() ? {
            write: function(t, e, n, o, i, s) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove: function(t) {
                this.write(t, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    },
    pBtG: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return !(!t || !t.__CANCEL__)
        }
    },
    pgQl: function(t, e, n) {
        (t.exports = n("FZ+f")(!1)).push([t.i, "label[data-v-8b017508]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""])
    },
    pkFI: function(t, e) {
        t.exports = {
            render: function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "col-sm-12 tax-payable"
                }, [this._m(0), this._v(" "), e("div", {
                    staticClass: "col-sm-12 col-md-12 holder"
                }, [e("div", {
                    attrs: {
                        id: "taxpayable"
                    }
                }, [e("table", {
                    staticClass: "table table-responsive tax-sample"
                }, [e("thead"), this._v(" "), e("tbody", [e("tr", [e("td", {
                    staticClass: "col-sm-12"
                }, [e("div", {
                    staticClass: "col-xs-6 col-sm-6 col-md-6"
                }, [e("i", {
                    staticClass: "vat"
                }), this._v(" "), e("p", [e("span", {
                    staticClass: "caption"
                }, [this._v("VAT")]), this._v(" "), e("br"), this._v(" "), e("span", {
                    staticClass: "amount"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.netChanges.vat)) + " " + this._s(this.$root.results.netChanges.vat.replace("-", "")))])])]), this._v(" "), e("div", {
                    staticClass: "col-xs-6 col-sm-6 col-md-6"
                }, [e("i", {
                    staticClass: "oil"
                }), this._v(" "), e("p", [e("span", {
                    staticClass: "caption"
                }, [this._v("Oil")]), this._v(" "), e("br"), this._v(" "), e("span", {
                    staticClass: "amount"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.netChanges.oil)) + " " + this._s(this.$root.results.netChanges.oil.replace("-", "")))])])])])]), this._v(" "), e("tr", [e("td", {
                    staticClass: "col-sm-12"
                }, [e("div", {
                    staticClass: "col-xs-6 col-sm-6 col-md-6"
                }, [e("i", {
                    staticClass: "auto"
                }), this._v(" "), e("p", [e("span", {
                    staticClass: "caption"
                }, [this._v("Automobile")]), this._v(" "), e("br"), this._v(" "), e("span", {
                    staticClass: "amount"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.netChanges.automobile)) + " " + this._s(this.$root.results.netChanges.automobile.replace("-", "")))])])]), this._v(" "), e("div", {
                    staticClass: "col-xs-6 col-sm-6 col-md-6"
                }, [e("i", {
                    staticClass: "ssb"
                }), this._v(" "), e("p", [e("span", {
                    staticClass: "caption"
                }, [this._v("SSB")]), this._v(" "), e("br"), this._v(" "), e("span", {
                    staticClass: "amount"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.netChanges.ssb)) + " " + this._s(this.$root.results.netChanges.ssb.replace("-", "")))])])])])]), this._v(" "), e("tr", [e("td", {
                    staticClass: "col-sm-12"
                }, [e("div", {
                    staticClass: "col-xs-6 col-sm-6 col-md-6"
                }, [e("i", {
                    staticClass: "sin"
                }), this._v(" "), e("p", [e("span", {
                    staticClass: "caption"
                }, [this._v("SIN")]), this._v(" "), e("br"), this._v(" "), e("span", {
                    staticClass: "amount"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.netChanges.sin)) + " " + this._s(this.$root.results.netChanges.sin.replace("-", "")))])])]), this._v(" "), e("div", {
                    staticClass: "col-xs-6 col-sm-6 col-md-6"
                }, [e("i", {
                    staticClass: "inflationImpact"
                }), this._v(" "), e("p", [e("span", {
                    staticClass: "caption"
                }, [this._v("Inflationary Impact")]), this._v(" "), e("br"), this._v(" "), e("span", {
                    staticClass: "amount"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.netChanges.inflationaryImpact)) + " " + this._s(this.$root.results.netChanges.inflationaryImpact.replace("-", "")))])])])])]), this._v(" "), e("tr", [e("td", {
                    staticClass: "col-sm-12"
                }, [e("div", {
                    staticClass: "col-xs-6 col-sm-6 col-md-6"
                }, [e("i", {
                    staticClass: "targetedCash"
                }), this._v(" "), e("p", [this._m(1), this._v(" "), e("br"), this._v(" "), e("span", {
                    staticClass: "amount"
                }, [this._v(this._s(this.$root.formatSign(this.$root.results.netChanges.targetedCashTransfer)) + " " + this._s(this.$root.results.netChanges.targetedCashTransfer.replace("-", "")))])])])])]), this._v(" "), this._m(2), this._v(" "), this._m(3)])])])]), this._v(" "), e("div", {
                    staticClass: "col-sm-12"
                }, [e("div", {
                    staticClass: "center-total total"
                }, [this._v("\n      Additional Expenses "), e("br"), this._v(" "), e("span", {
                    staticClass: "currency"
                }, [this._v(" " + this._s(this.$root.formatSign(this.$root.results.netChanges.total)) + " " + this._s(this.$root.results.netChanges.total.replace("-", "")) + " / month ")])])]), this._v(" "), e("div", {
                    staticClass: "col-sm-12 annual-total"
                }, [this._v("\n    " + this._s(this.$root.formatSign(this.$root.results.netChanges.yearlyTotal)) + " " + this._s(this.$root.results.netChanges.yearlyTotal.replace("-", "")) + " / year\n  ")])])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "col-md-12"
                }, [e("h5", {
                    staticClass: "col-title"
                }, [this._v("Impact of additional excise and inflation")])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("span", {
                    staticClass: "caption"
                }, [this._v("Targeted"), e("br"), this._v(" Cash Transfer")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("tr", [e("td")])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("tr", [e("td"), this._v(" "), e("td", {
                    staticClass: "annual"
                })])
            }]
        }
    },
    pxG4: function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return function(e) {
                return t.apply(null, e)
            }
        }
    },
    qRfI: function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
        }
    },
    qTqp: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            props: ["sectorComponentKey"],
            data: function() {
                return {
                    sector: "private"
                }
            },
            filters: {
                sectorName: function(t) {
                    return "private" === t ? "Pribadong Kumpanya" : "government" === t ? "Gobyerno" : "OFW"
                }
            }
        }
    },
    rjj0: function(t, e, n) {
        var r = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var o = n("tTVk"),
            i = {},
            s = r && (document.head || document.getElementsByTagName("head")[0]),
            a = null,
            l = 0,
            c = !1,
            u = function() {},
            f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        t.exports = function(t, e, n) {
            c = n;
            var r = o(t, e);
            return d(r),
                function(e) {
                    for (var n = [], s = 0; s < r.length; s++) {
                        var a = r[s];
                        (l = i[a.id]).refs--, n.push(l)
                    }
                    e ? d(r = o(t, e)) : r = [];
                    for (s = 0; s < n.length; s++) {
                        var l;
                        if (0 === (l = n[s]).refs) {
                            for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                            delete i[l.id]
                        }
                    }
                }
        };

        function d(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e],
                    r = i[n.id];
                if (r) {
                    r.refs++;
                    for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
                    for (; o < n.parts.length; o++) r.parts.push(h(n.parts[o]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    var s = [];
                    for (o = 0; o < n.parts.length; o++) s.push(h(n.parts[o]));
                    i[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function p() {
            var t = document.createElement("style");
            return t.type = "text/css", s.appendChild(t), t
        }

        function h(t) {
            var e, n, r = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
            if (r) {
                if (c) return u;
                r.parentNode.removeChild(r)
            }
            if (f) {
                var o = l++;
                r = a || (a = p()), e = v.bind(null, r, o, !1), n = v.bind(null, r, o, !0)
            } else r = p(), e = function(t, e) {
                var n = e.css,
                    r = e.media,
                    o = e.sourceMap;
                r && t.setAttribute("media", r);
                o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                if (t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }.bind(null, r), n = function() {
                r.parentNode.removeChild(r)
            };
            return e(t),
                function(r) {
                    if (r) {
                        if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
                        e(t = r)
                    } else n()
                }
        }
        var m = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }();

        function v(t, e, n, r) {
            var o = n ? "" : r.css;
            if (t.styleSheet) t.styleSheet.cssText = m(e, o);
            else {
                var i = document.createTextNode(o),
                    s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i)
            }
        }
    },
    t8qj: function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n, r, o) {
            return t.config = e, n && (t.code = n), t.request = r, t.response = o, t
        }
    },
    tIFN: function(t, e, n) {
        "use strict";
        var r = n("cGG2"),
            o = n("JP+z"),
            i = n("XmWM"),
            s = n("KCLY");

        function a(t) {
            var e = new i(t),
                n = o(i.prototype.request, e);
            return r.extend(n, i.prototype, e), r.extend(n, e), n
        }
        var l = a(s);
        l.Axios = i, l.create = function(t) {
            return a(r.merge(s, t))
        }, l.Cancel = n("dVOP"), l.CancelToken = n("cWxy"), l.isCancel = n("pBtG"), l.all = function(t) {
            return Promise.all(t)
        }, l.spread = n("pxG4"), t.exports = l, t.exports.default = l
    },
    tTVk: function(t, e) {
        t.exports = function(t, e) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o],
                    s = i[0],
                    a = {
                        id: t + ":" + o,
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                r[s] ? r[s].parts.push(a) : n.push(r[s] = {
                    id: s,
                    parts: [a]
                })
            }
            return n
        }
    },
    thJu: function(t, e, n) {
        "use strict";
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function o() {
            this.message = "String contains an invalid character"
        }
        o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError";
        t.exports = function(t) {
            for (var e, n, i = String(t), s = "", a = 0, l = r; i.charAt(0 | a) || (l = "=", a % 1); s += l.charAt(63 & e >> 8 - a % 1 * 8)) {
                if ((n = i.charCodeAt(a += .75)) > 255) throw new o;
                e = e << 8 | n
            }
            return s
        }
    },
    vBG4: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            data: function() {
                return {
                    scrollValue: 0
                }
            },
            mounted: function() {
                window.addEventListener("scroll", this.scrolling)
            },
            computed: {
                isScrolledDown: function() {
                    return !(this.scrollValue < 10)
                }
            },
            methods: {
                scrollToTop: function() {
                    this.$scrollTo(document.getElementById("top-container"))
                },
                scrolling: function(t) {
                    this.scrollValue = window.scrollY
                }
            }
        }
    },
    vbqv: function(t, e) {
        t.exports = {
            render: function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "container scrolltocalc"
                }, [e("a", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: "#calculator",
                        expression: "'#calculator'"
                    }],
                    attrs: {
                        href: "#"
                    }
                }, [e("h2", {
                    staticClass: "text-uppercase"
                }, [this._v("Proceed to the calculator")]), this._v(" "), e("img", {
                    staticClass: "logo-img ",
                    attrs: {
                        src: "img//arrowdown.png",
                        alt: "arrow"
                    }
                })])]), this._v(" "), this.isHidden ? e("button", {
                    directives: [{
                        name: "scroll-to",
                        rawName: "v-scroll-to",
                        value: "#calculator",
                        expression: "'#calculator'"
                    }],
                    staticClass: "scroll-mobile text-center"
                }, [this._m(0)]) : this._e()])
            },
            staticRenderFns: [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("h2", {
                    staticClass: "text-uppercase"
                }, [this._v("\n            GO TO THE CALCULATOR\n            "), e("i", {
                    staticClass: "fa fa-angle-down"
                })])
            }]
        }
    },
    vkkg: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = {
            format: function(t) {
                return (Math.trunc(1e12 * t) / 1e12).toFixed(2)
            },
            parse: function(t, e) {
                var n = function(t) {
                        return {
                            value: t
                        }
                    },
                    o = function(e, n) {
                        return {
                            warning: e,
                            value: n,
                            attempt: t
                        }
                    },
                    i = function(e) {
                        return new o(t + " is not a valid dollar amount", e)
                    },
                    s = Number(t),
                    a = t.indexOf("."),
                    l = t.indexOf("e");
                if (isNaN(s)) return -1 === a && l > 0 && l === t.length - 1 && 0 !== Number(t.slice(0, l)) ? new n(e) : new i(e);
                var c = r.format(s),
                    u = Number(c);
                return u === s ? -1 !== l && l === t.length - 2 ? new function(e) {
                    return new o(t + " was automatically converted to " + e, e)
                }(s) : new n(s) : new i(s > u ? u : e)
            }
        };
        e.default = r
    },
    wO7Y: function(t, e, n) {
        var r = n("M5CQ");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("6c4e2f28", r, !0)
    },
    wapp: function(t, e, n) {
        var r = n("VU/8")(n("dlMH"), n("DW4N"), !1, function(t) {
            n("9jV6")
        }, "data-v-f772a45e", null);
        t.exports = r.exports
    },
    xLtR: function(t, e, n) {
        "use strict";
        var r = n("cGG2"),
            o = n("TNV1"),
            i = n("pBtG"),
            s = n("KCLY"),
            a = n("dIwP"),
            l = n("qRfI");

        function c(t) {
            t.cancelToken && t.cancelToken.throwIfRequested()
        }
        t.exports = function(t) {
            c(t), t.baseURL && !a(t.url) && (t.url = l(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
                delete t.headers[e]
            });
            return (t.adapter || s.adapter)(t).then(function(e) {
                return c(t), e.data = o(e.data, e.headers, t.transformResponse), e
            }, function(e) {
                return i(e) || (c(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
            })
        }
    },
    zaWi: function(t, e, n) {
        var r = n("2K2Z");
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n("rjj0")("3e9ce3b1", r, !0)
    }
});