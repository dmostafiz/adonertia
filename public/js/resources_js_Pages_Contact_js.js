(self["webpackChunkadonertia"] = self["webpackChunkadonertia"] || []).push([["resources_js_Pages_Contact_js"],{

/***/ "./resources/js/Components/Layout/AppLayout.jsx":
/*!******************************************************!*\
  !*** ./resources/js/Components/Layout/AppLayout.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/Components/Layout/Footer.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./resources/js/Components/Layout/Header.jsx");



function AppLayout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: title
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__.default, null));
}

/***/ }),

/***/ "./resources/js/Components/Layout/Footer.jsx":
/*!***************************************************!*\
  !*** ./resources/js/Components/Layout/Footer.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
}

/***/ }),

/***/ "./resources/js/Components/Layout/Header.jsx":
/*!***************************************************!*\
  !*** ./resources/js/Components/Layout/Header.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");


function Header(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "bg-indigo-500 text-gray-100 px-10 py-5 flex items-center justify-between gap-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
    href: "/",
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: "text-gray-50 font-bold text-2xl"
  }, "Adonis & Inertia")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex items-center gap-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
    href: "/",
    className: ""
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
    href: "/about",
    className: ""
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
    href: "/contact",
    className: ""
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "flex items-center gap-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
    href: "/login",
    className: ""
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.InertiaLink, {
    href: "/register",
    className: ""
  }, "Register")));
}

/***/ }),

/***/ "./resources/js/Pages/Contact.js":
/*!***************************************!*\
  !*** ./resources/js/Pages/Contact.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var _Components_Layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout/AppLayout */ "./resources/js/Components/Layout/AppLayout.jsx");


function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Layout_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "Contact Page"
  });
}

/***/ })

}]);