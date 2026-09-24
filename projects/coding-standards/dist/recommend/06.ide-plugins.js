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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC8wNi5pZGUtcGx1Z2lucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBTWEsU0FBUzs7Ozs7Ozs7OztpQ0FMZCxTQUFTOzs7QUFLSixlQUFTO2tCQUFULFNBQVM7O2lCQUFULFNBQVM7Z0NBQVQsU0FBUzs7cUNBQVQsU0FBUzs7O2VBQVQsU0FBUztTQUFTLFFBQVEiLCJmaWxlIjoicmVjb21tZW5kLzA2LmlkZS1wbHVnaW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0NvbXBvbmVudCBhcyBBYnN0cmFjdH0gZnJvbSAnYXNzZXRzL2Fic3RyYWN0JztcblxuLyoqXG4gKiBPdmVyaWV3IENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3QgeyAgfVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
