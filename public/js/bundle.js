System.register("A", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function f(x) { return x + 1; }
    exports_1("f", f);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("B", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function g(x) { return x * 2; }
    exports_2("g", g);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app", ["A", "B"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var A, B;
    return {
        setters: [
            function (A_1) {
                A = A_1;
            },
            function (B_1) {
                B = B_1;
            }
        ],
        execute: function () {
            console.log(A.f(10));
            console.log(B.g(10));
        }
    };
});
//# sourceMappingURL=bundle.js.map