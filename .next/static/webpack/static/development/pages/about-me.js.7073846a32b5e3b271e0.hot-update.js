webpackHotUpdate("static/development/pages/about-me.js",{

/***/ "./pages/about-me.js":
/*!***************************!*\
  !*** ./pages/about-me.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _components_NavContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavContainer */ "./components/NavContainer.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Head */ "./components/Head.js");
/* harmony import */ var _components_PostExcerptCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostExcerptCard */ "./components/PostExcerptCard.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../App.css */ "./App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_12__);














var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).call(this, props));
    _this.state = {
      titleOfPage: 'About Me'
    };
    return _this;
  } // Resolve promise and set initial props.


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Head__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_NavContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "w3-container w3-deep-orange content"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "w3-row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "w3-col"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "About me"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "w3-row"
      }, this.props.posts.map(function (page) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "w3-col l6 s12",
          key: page.id
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, page.title.rendered), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: page.content.rendered
          }
        }));
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('http://localhost:8888/codeformylife/wp-json/wp/v2/pages/?slug=about-me');

              case 2:
                response = _context.sent;
                return _context.abrupt("return", {
                  posts: response.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=about-me.js.7073846a32b5e3b271e0.hot-update.js.map