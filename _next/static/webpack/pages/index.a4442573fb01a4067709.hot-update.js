self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AboutMe/AboutMe.js":
/*!*******************************************!*\
  !*** ./src/components/AboutMe/AboutMe.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutMeStyles */ "./src/components/AboutMe/AboutMeStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Jesh\\Documents\\Coding\\Portfolio\\src\\components\\AboutMe\\AboutMe.js",
    _this = undefined,
    _s = $RefreshSig$();





var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.AboutMeData.length;

var AboutMe = function AboutMe() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: 'smooth'
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.AboutMeData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.AboutMeData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "I'm currently exploring topics of computer science and applying skills that I've learned in college to make small projects while I search for a job to start my career in the field of computer sciences. I mainly like to make games, but I'm using this time of exploration to learn new things, such as front-end development like creating this portfolio site, or more areas of Linux. Computers have always fascinated me, and whether that means building computers, messing with laptops, tinkering with Linux, or helping others with their tech support problems, I'm always game to work with technology and computers."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "Here's a timeline of my experience and history so far in my life!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.AboutMeData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
              index: index,
              id: "carousel__item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
                children: [item.year, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                  width: "208",
                  height: "6",
                  viewBox: "0 0 208 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                    fill: "url(#paint0_linear)",
                    "fill-opacity": "0.33"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                      id: "paint0_linear",
                      x1: "-4.30412e-10",
                      y1: "0.5",
                      x2: "208",
                      y2: "0.500295",
                      gradientUnits: "userSpaceOnUse",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        "stop-color": "white"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        "stop-color": "white",
                        "stop-opacity": "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 17
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.AboutMeData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AboutMeStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(AboutMe, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = AboutMe;
/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

var _c;

$RefreshReg$(_c, "AboutMe");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWJvdXRNZS9BYm91dE1lLmpzIl0sIm5hbWVzIjpbIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwiQWJvdXRNZURhdGEiLCJBYm91dE1lIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiaGFuZGxlQ2xpY2siLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsImluZGV4Iiwicm91bmQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msb0VBQTdCOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLCtDQUFRLENBQUMsQ0FBRCxDQUR4QjtBQUFBLE1BQ2JDLFVBRGE7QUFBQSxNQUNEQyxhQURDOztBQUVwQixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM3QixXQUFPRCxJQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRCxVQUFJLEVBQUpBLElBQUY7QUFBUUUsY0FBUSxFQUFFO0FBQWxCLEtBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDNUJELEtBQUMsQ0FBQ0UsY0FBRjs7QUFFQSxRQUFJVixXQUFXLENBQUNXLE9BQWhCLEVBQXlCO0FBQ3ZCLFVBQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdkLFdBQVcsQ0FBQ1csT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FBbEMsSUFBeUNOLENBQUMsR0FBR2Qsb0VBQTdDLENBQVgsQ0FBbkI7QUFFQU8sWUFBTSxDQUFDRixXQUFXLENBQUNXLE9BQWIsRUFBc0JDLFVBQXRCLENBQU47QUFDRDtBQUNGLEdBUkQ7O0FBVUEsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJaEIsV0FBVyxDQUFDVyxPQUFoQixFQUF5QjtBQUN2QixVQUFNTSxLQUFLLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFZbEIsV0FBVyxDQUFDVyxPQUFaLENBQW9CQyxVQUFwQixJQUFrQ1osV0FBVyxDQUFDVyxPQUFaLENBQW9CSSxXQUFwQixHQUFrQyxHQUFwRSxDQUFELEdBQTZFcEIsb0VBQXhGLENBQWQ7QUFFQUksbUJBQWEsQ0FBQ2tCLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FORCxDQWxCb0IsQ0EwQnBCO0FBQ0E7OztBQUNBRSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCbEIsWUFBTSxDQUFDRixXQUFXLENBQUNXLE9BQWIsRUFBc0IsQ0FBdEIsQ0FBTjtBQUNELEtBRkQ7O0FBSUFVLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NGLFlBQWxDO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxrRUFBRDtBQUFjLFVBQUksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQU1FLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFVRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBYUUsOERBQUMsNkRBQUQ7QUFBbUIsU0FBRyxFQUFFcEIsV0FBeEI7QUFBcUMsY0FBUSxFQUFFZ0IsWUFBL0M7QUFBQSw2QkFDRTtBQUFBLGtCQUNHckIsaUVBQUEsQ0FBZ0IsVUFBQzRCLElBQUQsRUFBT04sS0FBUDtBQUFBLDhCQUNmLDhEQUFDLG9FQUFEO0FBQXNDLHFCQUFPQSxLQUFLLEtBQUt2QixvQkFBb0IsR0FBRyxDQUE5RTtBQUFBLG1DQUNFLDhEQUFDLHdEQUFEO0FBQ0UsbUJBQUssRUFBRXVCLEtBRFQ7QUFFRSxnQkFBRSwyQkFBb0JBLEtBQXBCLENBRko7QUFHRSxvQkFBTSxFQUFFbkIsVUFIVjtBQUlFLHFCQUFPLEVBQUUsaUJBQUNVLENBQUQ7QUFBQSx1QkFBT0QsV0FBVyxDQUFDQyxDQUFELEVBQUlTLEtBQUosQ0FBbEI7QUFBQSxlQUpYO0FBQUEsc0NBTUEsOERBQUMsNkRBQUQ7QUFBQSwyQkFDR00sSUFBSSxDQUFDQyxJQURSLGVBRUUsOERBQUMsMkRBQUQ7QUFDSSx1QkFBSyxFQUFDLEtBRFY7QUFFSSx3QkFBTSxFQUFDLEdBRlg7QUFHSSx5QkFBTyxFQUFDLFdBSFo7QUFJSSxzQkFBSSxFQUFDLE1BSlQ7QUFLSSx1QkFBSyxFQUFDLDRCQUxWO0FBQUEsMENBTUk7QUFDRSxpQ0FBVSxTQURaO0FBRUUsaUNBQVUsU0FGWjtBQUdFLHFCQUFDLEVBQUMsMkpBSEo7QUFJRSx3QkFBSSxFQUFDLHFCQUpQO0FBS0Usb0NBQWE7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5KLGVBYUk7QUFBQSwyQ0FDRTtBQUNFLHdCQUFFLEVBQUMsZUFETDtBQUVFLHdCQUFFLEVBQUMsY0FGTDtBQUdFLHdCQUFFLEVBQUMsS0FITDtBQUlFLHdCQUFFLEVBQUMsS0FKTDtBQUtFLHdCQUFFLEVBQUMsVUFMTDtBQU1FLG1DQUFhLEVBQUMsZ0JBTmhCO0FBQUEsOENBT0U7QUFBTSxzQ0FBVztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBGLGVBUUU7QUFDRSw4QkFBTSxFQUFDLFNBRFQ7QUFFRSxzQ0FBVyxPQUZiO0FBR0Usd0NBQWE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOQSxlQXVDQSw4REFBQyw0REFBRDtBQUFBLDBCQUFtQkQsSUFBSSxDQUFDRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUErQlIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQWhCO0FBREg7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUE4REUsOERBQUMsMkRBQUQ7QUFBQSxnQkFDR3RCLGlFQUFBLENBQWdCLFVBQUM0QixJQUFELEVBQU9OLEtBQVA7QUFBQSw0QkFDZiw4REFBQywwREFBRDtBQUVFLGVBQUssRUFBRUEsS0FGVDtBQUdFLGdCQUFNLEVBQUVuQixVQUhWO0FBSUUsaUJBQU8sRUFBRSxpQkFBQ1UsQ0FBRDtBQUFBLG1CQUFPRCxXQUFXLENBQUNDLENBQUQsRUFBSVMsS0FBSixDQUFsQjtBQUFBLFdBSlg7QUFLRSxjQUFJLEVBQUMsUUFMUDtBQUFBLGlDQU9FLDhEQUFDLDZEQUFEO0FBQW1CLGtCQUFNLEVBQUVuQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEYsV0FDT21CLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThFRCxDQWxIRDs7R0FBTXJCLE87O0tBQUFBLE87QUFvSE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTQ0NDI1NzNmYjAxYTQwNjc3MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbEJ1dHRvbiwgQ2Fyb3VzZWxCdXR0b25Eb3QsIENhcm91c2VsQnV0dG9ucywgQ2Fyb3VzZWxDb250YWluZXIsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxJdGVtSW1nLCBDYXJvdXNlbEl0ZW1UZXh0LCBDYXJvdXNlbEl0ZW1UaXRsZSwgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIH0gZnJvbSAnLi9BYm91dE1lU3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEFib3V0TWVEYXRhIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IEFib3V0TWVEYXRhLmxlbmd0aDtcclxuXHJcbmNvbnN0IEFib3V0TWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcclxuICAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIEFib3V0TWVEYXRhLmxlbmd0aCkpO1xyXG4gICAgICBcclxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLyAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICogQWJvdXRNZURhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxyXG4gIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgXHJcbiAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICBJJ20gY3VycmVudGx5IGV4cGxvcmluZyB0b3BpY3Mgb2YgY29tcHV0ZXIgc2NpZW5jZSBhbmQgYXBwbHlpbmcgc2tpbGxzIHRoYXQgSSd2ZSBsZWFybmVkIGluIGNvbGxlZ2UgdG8gbWFrZSBzbWFsbCBwcm9qZWN0cyB3aGlsZSBJIHNlYXJjaCBmb3IgYSBqb2IgdG8gc3RhcnQgbXkgY2FyZWVyIGluIHRoZSBmaWVsZCBvZiBjb21wdXRlciBzY2llbmNlcy4gSSBtYWlubHkgbGlrZSB0byBtYWtlIGdhbWVzLCBidXQgSSdtIHVzaW5nIHRoaXMgdGltZSBvZiBleHBsb3JhdGlvbiB0byBsZWFybiBuZXcgdGhpbmdzLCBzdWNoIGFzIGZyb250LWVuZCBkZXZlbG9wbWVudCBsaWtlIGNyZWF0aW5nIHRoaXMgcG9ydGZvbGlvIHNpdGUsIG9yIG1vcmUgYXJlYXMgb2YgTGludXguIENvbXB1dGVycyBoYXZlIGFsd2F5cyBmYXNjaW5hdGVkIG1lLCBhbmQgd2hldGhlciB0aGF0IG1lYW5zIGJ1aWxkaW5nIGNvbXB1dGVycywgbWVzc2luZyB3aXRoIGxhcHRvcHMsIHRpbmtlcmluZyB3aXRoIExpbnV4LCBvciBoZWxwaW5nIG90aGVycyB3aXRoIHRoZWlyIHRlY2ggc3VwcG9ydCBwcm9ibGVtcywgSSdtIGFsd2F5cyBnYW1lIHRvIHdvcmsgd2l0aCB0ZWNobm9sb2d5IGFuZCBjb21wdXRlcnMuXHJcbiAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8U2VjdGlvblRleHQ+XHJcbiAgICAgICAgSGVyZSdzIGEgdGltZWxpbmUgb2YgbXkgZXhwZXJpZW5jZSBhbmQgaGlzdG9yeSBzbyBmYXIgaW4gbXkgbGlmZSFcclxuICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7QWJvdXRNZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIGtleT17aW5kZXh9IGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfT5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXHJcbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnllYXJ9XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjAuMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMjA4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1UaXRsZT5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS50ZXh0fTwvQ2Fyb3VzZWxJdGVtVGV4dD5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cclxuICAgICAgPENhcm91c2VsQnV0dG9ucz5cclxuICAgICAgICB7QWJvdXRNZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcm91c2VsQnV0dG9uIFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRNZTsiXSwic291cmNlUm9vdCI6IiJ9