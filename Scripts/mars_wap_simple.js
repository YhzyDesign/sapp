/* NEW MARS FOR VIP [FOR APPVIPSHOP] 2014-06-05 17:24 */
!
function() {
	window.T0 = (new Date).getTime(), window.Mar = function() {}, Mar.Cookie = {
		get: function(a) {
			var b, c = document.cookie,
				d = c.indexOf(a + "=");
			return -1 !== d ? (d += a.length + 1, b = c.indexOf(";", d), unescape(c.substring(d, -1 === b ? c.length : b))) : void 0
		},
		set: function(a, b, c) {
			var d = -1 !== document.domain.toLowerCase().indexOf(".vipshop.com") ? "vipshop" : -1 !== document.domain.toLowerCase().indexOf(".appvipshop.com") ? "appvipshop" : "vip";
			0 === c ? document.cookie = a + "=" + escape(b) + ";path=/;domain=." + d + ".com" : (date = new Date, date.setTime(date.getTime() + 24 * c * 3600 * 1e3), document.cookie = a + "=" + escape(b) + ";expires=" + date.toGMTString() + ";path=/;domain=." + d + ".com")
		},
		del: function(a, b) {
			document.cookie = a + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=/;" + (b ? "domain=" + b : "")
		}
	}, Mar.guid = function() {
		for (var a = 0, b = []; 8 > a;) b.push((65536 * (1 + Math.random()) | 0).toString(16).substring(1)), a++;
		return b.join("").toUpperCase()
	}, Mar.guid2 = function() {
		function a() {
			return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
		}
		return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
	}, Mar.rand = function(a) {
		var b = "0123456789abcdef",
			c = "",
			d = 0;
		for (a = a || 32; a > d; d++) c += b.charAt(Math.ceil(1e8 * Math.random()) % b.length);
		return c
	}, Mar.IE = function() {
		for (var a = 3, b = document.createElement("DIV"), c = b.getElementsByTagName("I"); b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->", c[0];);
		return a > 4 ? a : 0
	}, Mar.browser = function() {
		var a = navigator.userAgent.toLowerCase(),
			b = Mar.IE();
		return {
			ie: b && ["ie", b],
			firefox: a.match(/firefox\/([\d.]+)/),
			chrome: a.match(/chrome\/([\d.]+)/),
			opera: a.match(/opera.([\d.]+)/),
			safari: window.openDatabase ? a.match(/version\/([\d.]+)/) : void 0
		}
	}, Mar.protocal = function() {
		return -1 !== document.location.href.toLowerCase().indexOf("https://") ? "https://" : "http://"
	}, Mar.stringify = function(a) {
		if (window.JSON && window.JSON.stringify) return window.JSON.stringify(a);
		var b, c, d, e = [],
			f = typeof a,
			g = 0;
		if ("string" === f) return '"' + a + '"';
		if ("undefined" === f || "boolean" === f || "number" === f || null === a) return a;
		if ("[object Array]" == Object.prototype.toString.call(a)) {
			for (b = a.length, e.push("["); b > g; g++) e.push(Mar.stringify(a[g]) + ",");
			e.push("]")
		} else {
			e.push("{");
			for (c in a) a.hasOwnProperty(c) && e.push('"' + c + '":' + Mar.stringify(a[c]) + ",");
			d = e.length - 1, e[d] = e[d].replace(/,$/, ""), e.push("}")
		}
		return e.join("")
	}, Mar.Request = function(a, b) {
		var c = Mar.Base,
			d = Mar.Biz();
		a = Mar.protocal() + ("mar." + (-1 !== document.domain.toLowerCase().indexOf(".vipshop.com") ? "vipshop" : -1 !== document.domain.toLowerCase().indexOf(".appvipshop.com") ? "appvipshop" : "vip") + ".com") + a + "&mars_cid=" + d.cid + "&mars_sid=" + d.sid + "&pi=" + d.pid + "&mars_vid=" + d.vid + "&lvm_id=" + d.lvmId + "&mars_var=" + d.mvar + "&lg=" + d.isLog + "&wh=" + d.wh + "&in=" + d.newbie + "&sn=" + d.orderId + "&url=" + c.url + "&sr=" + c.res + "&rf=" + c.ref + "&bw=" + c.cw + "&bh=" + c.ch + "&sc=" + c.col + "&bv=" + c.nav + "&ce=" + c.ce + "&vs=&title=" + c.title + "&tab_page_id=" + d.pageId + "&vip_qe=" + d.vip_qe + "&vip_qt=" + d.vip_qt + "&vip_xe=" + d.vip_xe + "&vip_xt=" + d.vip_xt, b && (a += "&wap_ln=" + d.wapln + "&wap_vs=" + d.wapvs + "&wap_pwh=" + d.wappwh + "&wap_wh=" + d.wapwh + "&wap_id=" + d.wapid + "&wap_from=" + d.wapfrom + "&cps_u=" + d.cpsu + "&m_vipruid=" + d.ruid), a += "&r=" + Math.random();
		var e = new Image(1, 1);
		return e.onload = e.onerror = e.onabort = function() {
			e.onload = e.onerror = e.onabort = null, e = null
		}, e.src = a, Mar
	};
	var a;
	Mar.Base = {}, a = Mar.Base, a.local = document.location, a.domain = document.domain, a.docEle = document.documentElement, a.context = "css1compat" === document.compatMode.toLowerCase() ? document.body : a.docEle, a.monitor = window.screen, a.href = a.local.href, a.url = escape(a.href), a.pn = a.local.pathname.toLowerCase(), a.hn = a.local.hostname.toLowerCase(), a.ref = escape(document.referrer), a.cw = a.docEle.clientWidth, a.ch = a.docEle.clientHeight, a.res = a.monitor.width + "*" + a.monitor.height, a.col = a.monitor.colorDepth, a.w = a.context.width, a.h = a.context.height, a.nav = escape(navigator.userAgent.toLowerCase()), a.ce = navigator.cookieEnabled ? 1 : 0, a.title = escape(document.title)
}(), function() {
	Mar.Biz = function() {
		var a = Mar.Cookie,
			b = a.get,
			c = a.set,
			d = a.del,
			e = 0,
			f = 0,
			g = b("mars_cid") || b("cookie_id"),
			h = b("mars_pid") || b("page_id"),
			i = b("mars_sid") || Mar.rand(),
			j = b("visit_id") || Mar.guid(),
			k = window.mars_var ? Mar.stringify(window.mars_var) : "-",
			l = b("WAP[p_wh]"),
			m = b("WAP[auth]") || b("login_username"),
			n = b("WAP[revision]"),
			o = b("WAP[p_wh]"),
			p = b("warehouse"),
			q = b("WAP_ID"),
			r = b("WAP[from]"),
			s = b("cps_u"),
			t = b("m_vipruid");
		return m && (e = 1), (!g || 32 !== (g + "").length && 46 !== (g + "").length) && (g = (new Date).getTime() + "_" + Mar.rand(), f = 1), h = h || 0, h++, d("cookie_id"), d("page_id"), c("mars_pid", h, 732), c("mars_cid", g, 732), c("mars_sid", i, 0), c("visit_id", j, .5 / 24), {
			cid: g,
			pid: h,
			sid: i,
			vid: j,
			wh: l,
			mvar: k,
			wapln: m,
			wapvs: n,
			wappwh: o,
			wapwh: p,
			wapid: q,
			wapfrom: r,
			cpsu: s,
			ruid: t,
			newbie: f,
			isLog: e
		}
	}, Mar.PV = function() {
		var a = Mar.Cookie.get;
		return Mar.Request("/w?br_pos=" + a("m_br_pos") + "&pr_pos=" + a("m_pr_pos"), !0), Mar
	}
}(), function() {
	Mar.Seed = function() {
		function a(a) {
			return /.*\.\w*$/.test(a) ? -1 !== $.inArray(a.match(/\.(\w*)$/i)[1], ["rar", "zip", "exe", "doc", "ppt", "xls", "docx", "xlsx", "pptx", "sisx", "apk"]) ? "download" : "" : ""
		}
		function b() {
			var b, d, e, f = $(this),
				g = this.tagName.toLowerCase();
			"a" === g ? (b = f.attr("href"), e = c[g + (b ? a(b.toLowerCase()) : "")]) : (b = f.attr("type"), d = c[g + (b ? b.toLowerCase() : "")], e = d ? d : g), Mar.Seed.request(e, "click", f.attr("mars_sead"), f.attr("data_mars"))
		}
		var c = {
			inputbutton: "button",
			inputsubmit: "button",
			inputtext: "inputText",
			inputinput: "inputText",
			inputradio: "radio",
			inputcheckbox: "checkbox",
			adownload: "download",
			a: "link",
			span: "span",
			button: "button"
		};
		return $("body").delegate("[mars_sead]:not(select)", "click", function(a) {
			b.call(this, a)
		}).delegate("select[mars_sead]", "change", function() {
			Mar.Seed.request("select", "change", $(this).attr("mars_sead"))
		}), Mar
	}, Mar.Seed.request = function(a, b, c, d) {
		var e = (new Date).getTime() - window.T0;
		Mar.Request("/b?at=" + e + "&et=" + a + "&ed=" + b + "&one=" + encodeURIComponent(c) + "&data_mars=" + (d || ""), !0)
	}
}(), function() {
	Mar.IndexPosition = function() {
		return $("body").delegate("[mars_br_pos]", "click", function() {
			var a = $(this),
				b = a.attr("mars_br_pos"),
				c = b.match(/\_\d*\_/)[0],
				d = Mar.Cookie.get("m_br_pos"),
				e = new RegExp("\\w*" + c + "\\d*");
			d ? -1 !== d.indexOf(c) ? d = d.replace(d.match(e), "").replace(/^\,|\,$/g, "").replace(/\,\,/g, ",") + "," + b : d += "," + b : d = b, d.split(",").length > 20 && (d = d.substring(d.indexOf(",") + 1, d.length)), Mar.Cookie.set("m_br_pos", d.replace(/^,/, ""), 1)
		}), $("body").delegate("[mars_pr_pos]", "click", function() {
			var a = $(this),
				b = a.attr("mars_pr_pos"),
				c = b.match(/\_\d*\_/)[0],
				d = Mar.Cookie.get("m_pr_pos"),
				e = new RegExp("\\w*" + c + "\\d*");
			d ? -1 !== d.indexOf(c) ? d = d.replace(d.match(e), "").replace(/^\,|\,$/g, "").replace(/\,\,/g, ",") + "," + b : d += "," + b : d = b, d.split(",").length > 20 && (d = d.substring(d.indexOf(",") + 1, d.length)), Mar.Cookie.set("m_pr_pos", d.replace(/^,/, ""), 1)
		}), Mar
	}
}(), function() {
	Mar.PV().Seed().IndexPosition()
}();