if (Meteor.isClient) {

    Template.flot.rendered = function () {
        // Flot
        var d1 = [];
        for (var i = 0; i <= 20; i += 1)
            d1.push([i, parseInt(32 + (Math.random() * 35))]);
        var d2 = [];
        for (var i = 0; i <= 20; i += 1)
            d2.push([i, parseInt(32 + (Math.random() * 55))]);
        var d3 = [];
        for (var i = 0; i <= 10; i += 1)
            d3.push([i, parseInt(31 + (Math.random() * 7))]);

        var ds = new Array();

        ds.push({label: "Clicks per month", data: d1, bars: {show: !0, barWidth: .2, order: 1, lineWidth: 2}});
        ds.push({label: "Referalls per month", data: d2, bars: {show: !0, barWidth: .2, order: 2}});
        ds.push({label: "Downloads per month", data: d3, bars: {show: !0, barWidth: .2, order: 3}});

        if ($("#flot-2").length > 0) {
            var o = [], u = [];
            for (var n = 0; n < 14; n += .5) {
                o.push([n, Math.sin(n)]);
                u.push([n, Math.cos(n)])
            }
            var a = $.plot($("#flot-2"), [
                {data: o, label: "sin(x)"},
                {data: u, label: "cos(x)"}
            ], {series: {lines: {show: !0}, points: {show: !0}}, grid: {hoverable: !0, clickable: !0}, yaxis: {min: -1.2, max: 1.2}})
        }
        if ($("#flot-5").length > 0) {
            var f = [], l = Math.floor(Math.random() * 4) + 2;
            for (var n = 0; n < l; n++)f[n] = {label: "Series" + (n + 1), data: Math.floor(Math.random() * 100) + 1};
            $.plot($("#flot-5"), f, {series: {pie: {show: !0}}});
            $.plot($("#flot-6"), f, {series: {pie: {show: !0, radius: 1, label: {show: !0, radius: 1, formatter: function (e, t) {
                return'<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + e + "<br/>" + Math.round(t.percent) + "%</div>"
            }, background: {opacity: .8}}}}, legend: {show: !1}});
            $.plot($("#flot-7"), f, {series: {pie: {show: !0, radius: 1, label: {show: !0, radius: .75, formatter: function (e, t) {
                return'<div style="font-size:8pt;text-align:center;padding:2px;color:white;">' + e + "<br/>" + Math.round(t.percent) + "%</div>"
            }, background: {opacity: .5}}}}, legend: {show: !1}});
            $.plot($("#flot-8"), f, {series: {pie: {innerRadius: .5, show: !0}}})
        }
        if ($("#flot-4").length > 0) {
            var t = [];
            for (var n = 0; n <= 10; n += 1)t.push([n, parseInt(Math.random() * 30)]);
            var r = [];
            for (var n = 0; n <= 10; n += 1)r.push([n, parseInt(Math.random() * 30)]);
            var i = [];
            for (var n = 0; n <= 10; n += 1)i.push([n, parseInt(Math.random() * 30)]);
            var c = 0, h = !0, p = !1, d = !1;

            function v() {
                $.plot($("#flot-4"), [t, r, i], {series: {stack: c, lines: {show: p, fill: !0, steps: d}, bars: {show: h, barWidth: .6}}})
            }

            v();
            $(".stackControls input").click(function (e) {
                e.preventDefault();
                c = $(this).val() == "With stacking" ? !0 : null;
                v()
            });
            $(".graphControls input").click(function (e) {
                e.preventDefault();
                h = $(this).val().indexOf("Bars") != -1;
                p = $(this).val().indexOf("Lines") != -1;
                d = $(this).val().indexOf("steps") != -1;
                v()
            })
        }
        if ($("#flot-3").length > 0) {
            var f = [], m = 300;

            function g() {
                f.length > 0 && (f = f.slice(1));
                while (f.length < m) {
                    var e = f.length > 0 ? f[f.length - 1] : 50, t = e + Math.random() * 10 - 5;
                    t < 0 && (t = 0);
                    t > 100 && (t = 100);
                    f.push(t)
                }
                var n = [];
                for (var r = 0; r < f.length; ++r)n.push([r, f[r]]);
                return n
            }

            var y = 30;
            $("#updateInterval").val(y).change(function () {
                var e = $(this).val();
                if (e && !isNaN(+e)) {
                    y = +e;
                    y < 1 && (y = 1);
                    y > 2e3 && (y = 2e3);
                    $(this).val("" + y)
                }
            });
            var b = {series: {shadowSize: 0}, yaxis: {min: 0, max: 100}, xaxis: {show: !1}}, a = $.plot($("#flot-3"), [g()], b);

            function w() {
                a.setData([g()]);
                a.draw();
                setTimeout(w, y)
            }

            w()
        }
        if ($("#flot-1").length > 0) {
            var E = [];
            for (var n = 0; n < Math.PI * 2; n += .25)E.push([n, Math.sin(n)]);
            var S = [];
            for (var n = 0; n < Math.PI * 2; n += .25)S.push([n, Math.cos(n)]);
            var x = [];
            for (var n = 0; n < Math.PI * 2; n += .1)x.push([n, Math.tan(n)]);
            $.plot($("#flot-1"), [
                {label: "sin(x)", data: E},
                {label: "cos(x)", data: S},
                {label: "tan(x)", data: x}
            ], {series: {lines: {show: !0}, points: {show: !0}}, xaxis: {ticks: [0, [Math.PI / 2, "Ï€/2"], [Math.PI, "Ï€"], [Math.PI * 3 / 2, "3Ï€/2"], [Math.PI * 2, "2Ï€"]]}, yaxis: {ticks: 10, min: -2, max: 2}, grid: {backgroundColor: {colors: ["#fff", "#fff"]}}})
        }
    };
}
