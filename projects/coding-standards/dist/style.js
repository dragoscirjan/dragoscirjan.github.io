System.register([], function (_export) {
  'use strict';

  var Component;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Component = (function () {
        function Component() {
          _classCallCheck(this, Component);

          this.heading = 'Coding Style';
        }

        _createClass(Component, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['', 'code-demarcation'], name: 'cs-code-demarcation', moduleId: 'style/05.code-demarcation', nav: true, title: 'Code Demarcation' }, { route: 'control-statements', name: 'cs-control-statements', moduleId: 'style/10.control-statements', nav: true, title: 'Control Statements' }, { route: 'strings', name: 'cs-strings', moduleId: 'style/15.strings', nav: true, title: 'Strings' }, { route: 'arrays', name: 'cs-arrays', moduleId: 'style/20.arrays', nav: true, title: 'Arrays' }, { route: 'classes', name: 'cs-classes', moduleId: 'style/45.classes', nav: true, title: 'Classes' }, { route: 'methods', name: 'cs-class-methods', moduleId: 'style/50.class-methods', nav: true, title: 'Functions & Methods' }, { route: 'inline-documentation', name: 'cs-inline-documentation', moduleId: 'style/80.inline-documentation', nav: true, title: 'Inline Documentation' }]);

            this.router = router;
          }
        }]);

        return Component;
      })();

      _export('Component', Component);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUljLFNBQVM7Ozs7Ozs7OztBQUFULGVBQVM7aUJBQVQsU0FBUztnQ0FBVCxTQUFTOztlQU1wQixPQUFPLEdBQUcsY0FBYzs7O3FCQU5iLFNBQVM7O2lCQVFMLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FFVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxFQUFHLElBQUksRUFBRSxxQkFBcUIsRUFBTyxRQUFRLEVBQUUsMkJBQTJCLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFFeEosRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQU8sSUFBSSxFQUFFLHVCQUF1QixFQUFLLFFBQVEsRUFBRSw2QkFBNkIsRUFBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUMxSixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWtCLElBQUksRUFBRSxZQUFZLEVBQWdCLFFBQVEsRUFBRSxrQkFBa0IsRUFBZ0IsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQy9JLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBbUIsSUFBSSxFQUFFLFdBQVcsRUFBaUIsUUFBUSxFQUFFLGlCQUFpQixFQUFpQixHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFFOUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFrQixJQUFJLEVBQUUsWUFBWSxFQUFnQixRQUFRLEVBQUUsa0JBQWtCLEVBQWdCLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUMvSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWtCLElBQUksRUFBRSxrQkFBa0IsRUFBVSxRQUFRLEVBQUUsd0JBQXdCLEVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsRUFDM0osRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUssSUFBSSxFQUFFLHlCQUF5QixFQUFHLFFBQVEsRUFBRSwrQkFBK0IsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxDQUM3SixDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUF2QlUsU0FBUyIsImZpbGUiOiJzdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBPdmVyaWV3IENvbXBvbmVudFxuICovXG4gZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG5cbiAgIC8qKlxuICAgICogUGFnZSBIZWFkaW5nXG4gICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICovXG4gICBoZWFkaW5nID0gJ0NvZGluZyBTdHlsZSc7XG5cbiAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xuICAgICBjb25maWcubWFwKFtcbiAgICAgICAvLyB7IHJvdXRlOiBbJycsICdvdmVydmlldyddLCAgICAgICAgbmFtZTogJ2NzLW92ZXJ2aWV3JywgICAgICAgICAgICAgIG1vZHVsZUlkOiAnc3R5bGUvMDAub3ZlcnZpZXcnLCAgICAgICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ092ZXJ2aWV3JyB9LFxuICAgICAgIHsgcm91dGU6IFsnJywgJ2NvZGUtZGVtYXJjYXRpb24nXSwgIG5hbWU6ICdjcy1jb2RlLWRlbWFyY2F0aW9uJywgICAgICBtb2R1bGVJZDogJ3N0eWxlLzA1LmNvZGUtZGVtYXJjYXRpb24nLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdDb2RlIERlbWFyY2F0aW9uJyB9LFxuICAgICAgIC8vIHsgcm91dGU6ICdjb2RlLWRlbWFyY2F0aW9uJywgICAgICAgIG5hbWU6ICdjcy1jb2RlLWRlbWFyY2F0aW9uJywgICAgICBtb2R1bGVJZDogJ3N0eWxlLzA1LmNvZGUtZGVtYXJjYXRpb24nLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdDb2RlIERlbWFyY2F0aW9uJyB9LFxuICAgICAgIHsgcm91dGU6ICdjb250cm9sLXN0YXRlbWVudHMnLCAgICAgIG5hbWU6ICdjcy1jb250cm9sLXN0YXRlbWVudHMnLCAgICBtb2R1bGVJZDogJ3N0eWxlLzEwLmNvbnRyb2wtc3RhdGVtZW50cycsICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdDb250cm9sIFN0YXRlbWVudHMnIH0sXG4gICAgICAgeyByb3V0ZTogJ3N0cmluZ3MnLCAgICAgICAgICAgICAgICAgbmFtZTogJ2NzLXN0cmluZ3MnLCAgICAgICAgICAgICAgIG1vZHVsZUlkOiAnc3R5bGUvMTUuc3RyaW5ncycsICAgICAgICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ1N0cmluZ3MnIH0sXG4gICAgICAgeyByb3V0ZTogJ2FycmF5cycsICAgICAgICAgICAgICAgICAgbmFtZTogJ2NzLWFycmF5cycsICAgICAgICAgICAgICAgIG1vZHVsZUlkOiAnc3R5bGUvMjAuYXJyYXlzJywgICAgICAgICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0FycmF5cycgfSxcbiAgICAgICAvLyB7IHJvdXRlOiAnZnVuY3Rpb25zJywgICAgICAgICAgICAgICBuYW1lOiAnY3MtZnVuY3Rpb25zJywgICAgICAgICAgICAgbW9kdWxlSWQ6ICdzdHlsZS80MC5mdW5jdGlvbnMnLCAgICAgICAgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnRnVuY3Rpb25zJyB9LFxuICAgICAgIHsgcm91dGU6ICdjbGFzc2VzJywgICAgICAgICAgICAgICAgIG5hbWU6ICdjcy1jbGFzc2VzJywgICAgICAgICAgICAgICBtb2R1bGVJZDogJ3N0eWxlLzQ1LmNsYXNzZXMnLCAgICAgICAgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdDbGFzc2VzJyB9LFxuICAgICAgIHsgcm91dGU6ICdtZXRob2RzJywgICAgICAgICAgICAgICAgIG5hbWU6ICdjcy1jbGFzcy1tZXRob2RzJywgICAgICAgICBtb2R1bGVJZDogJ3N0eWxlLzUwLmNsYXNzLW1ldGhvZHMnLCAgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdGdW5jdGlvbnMgJiBNZXRob2RzJyB9LFxuICAgICAgIHsgcm91dGU6ICdpbmxpbmUtZG9jdW1lbnRhdGlvbicsICAgIG5hbWU6ICdjcy1pbmxpbmUtZG9jdW1lbnRhdGlvbicsICBtb2R1bGVJZDogJ3N0eWxlLzgwLmlubGluZS1kb2N1bWVudGF0aW9uJywgIG5hdjogdHJ1ZSwgdGl0bGU6ICdJbmxpbmUgRG9jdW1lbnRhdGlvbicgfSBcbiAgICAgXSk7XG5cbiAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICB9XG4gfVxuLy8gXCJpc2FnYWxhZXYvaGlnaGxpZ2h0LmpzXCI6IFwiZ2l0aHViOmlzYWdhbGFldi9oaWdobGlnaHQuanNAOS4yLjBcIixcXCAgXFxcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
