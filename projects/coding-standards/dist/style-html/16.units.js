System.register(['assets/abstract'], function (_export) {
  'use strict';

  var Abstract, Component;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_assetsAbstract) {
      Abstract = _assetsAbstract.Component;
    }],
    execute: function () {
      Component = (function (_Abstract) {
        _inherits(Component, _Abstract);

        function Component() {
          _classCallCheck(this, Component);

          _get(Object.getPrototypeOf(Component.prototype), 'constructor', this).apply(this, arguments);
        }

        return Component;
      })(Abstract);

      _export('Component', Component);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLWh0bWwvMTYudW5pdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQU1hLFNBQVM7Ozs7Ozs7Ozs7aUNBTGQsU0FBUzs7O0FBS0osZUFBUztrQkFBVCxTQUFTOztpQkFBVCxTQUFTO2dDQUFULFNBQVM7O3FDQUFULFNBQVM7OztlQUFULFNBQVM7U0FBUyxRQUFRIiwiZmlsZSI6InN0eWxlLWh0bWwvMTYudW5pdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtDb21wb25lbnQgYXMgQWJzdHJhY3R9IGZyb20gJ2Fzc2V0cy9hYnN0cmFjdCc7XHJcblxyXG4vKipcclxuICogT3ZlcmlldyBDb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdCB7ICB9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
