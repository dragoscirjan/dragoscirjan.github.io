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

          this.heading = 'Coding Style (HTML/CSS)';
        }

        _createClass(Component, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['', 'specificity'], name: 'csh-specificity', moduleId: 'style-html/05.specificity', nav: true, title: 'Specificity' }, { route: 'formatting', name: 'csh-formatting', moduleId: 'style-html/10.formatting', nav: true, title: 'Formatting' }, { route: 'strings', name: 'csh-strings', moduleId: 'style-html/15.strings', nav: true, title: 'Strings' }, { route: 'arrays', name: 'csh-arrays', moduleId: 'style-html/20.arrays', nav: true, title: 'Arrays' }, { route: 'classes', name: 'csh-classes', moduleId: 'style-html/45.classes', nav: true, title: 'Classes' }, { route: 'methods', name: 'csh-class-methods', moduleId: 'style-html/50.class-methods', nav: true, title: 'Functions & Methods' }, { route: 'inline-documentation', name: 'csh-inline-documentation', moduleId: 'style-html/80.inline-documentation', nav: true, title: 'Inline Documentation' }]);

            this.router = router;
          }
        }]);

        return Component;
      })();

      _export('Component', Component);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLWh0bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BSWMsU0FBUzs7Ozs7Ozs7O0FBQVQsZUFBUztpQkFBVCxTQUFTO2dDQUFULFNBQVM7O2VBTXBCLE9BQU8sR0FBRyx5QkFBeUI7OztxQkFOeEIsU0FBUzs7aUJBUUwseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUM5QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUVULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFHLElBQUksRUFBRSxpQkFBaUIsRUFBTyxRQUFRLEVBQUUsMkJBQTJCLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQzFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBTyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUssUUFBUSxFQUFFLDBCQUEwQixFQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUNoSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWtCLElBQUksRUFBRSxhQUFhLEVBQWdCLFFBQVEsRUFBRSx1QkFBdUIsRUFBZ0IsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQ3JKLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBbUIsSUFBSSxFQUFFLFlBQVksRUFBaUIsUUFBUSxFQUFFLHNCQUFzQixFQUFpQixHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFFcEosRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFrQixJQUFJLEVBQUUsYUFBYSxFQUFnQixRQUFRLEVBQUUsdUJBQXVCLEVBQWdCLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUNySixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWtCLElBQUksRUFBRSxtQkFBbUIsRUFBVSxRQUFRLEVBQUUsNkJBQTZCLEVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsRUFDakssRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUssSUFBSSxFQUFFLDBCQUEwQixFQUFHLFFBQVEsRUFBRSxvQ0FBb0MsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxDQUNuSyxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUF0QlUsU0FBUyIsImZpbGUiOiJzdHlsZS1odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIE92ZXJpZXcgQ29tcG9uZW50XG4gKi9cbiBleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgLyoqXG4gICAgKiBQYWdlIEhlYWRpbmdcbiAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgKi9cbiAgIGhlYWRpbmcgPSAnQ29kaW5nIFN0eWxlIChIVE1ML0NTUyknO1xuXG4gICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICAgY29uZmlnLm1hcChbXG4gICAgICAgLy8geyByb3V0ZTogWycnLCAnb3ZlcnZpZXcnXSwgICAgICAgIG5hbWU6ICdjc2gtb3ZlcnZpZXcnLCAgICAgICAgICAgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzAwLm92ZXJ2aWV3JywgICAgICAgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdPdmVydmlldycgfSxcbiAgICAgICB7IHJvdXRlOiBbJycsICdzcGVjaWZpY2l0eSddLCAgbmFtZTogJ2NzaC1zcGVjaWZpY2l0eScsICAgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzA1LnNwZWNpZmljaXR5JywgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnU3BlY2lmaWNpdHknIH0sXG4gICAgICAgeyByb3V0ZTogJ2Zvcm1hdHRpbmcnLCAgICAgIG5hbWU6ICdjc2gtZm9ybWF0dGluZycsICAgIG1vZHVsZUlkOiAnc3R5bGUtaHRtbC8xMC5mb3JtYXR0aW5nJywgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0Zvcm1hdHRpbmcnIH0sXG4gICAgICAgeyByb3V0ZTogJ3N0cmluZ3MnLCAgICAgICAgICAgICAgICAgbmFtZTogJ2NzaC1zdHJpbmdzJywgICAgICAgICAgICAgICBtb2R1bGVJZDogJ3N0eWxlLWh0bWwvMTUuc3RyaW5ncycsICAgICAgICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ1N0cmluZ3MnIH0sXG4gICAgICAgeyByb3V0ZTogJ2FycmF5cycsICAgICAgICAgICAgICAgICAgbmFtZTogJ2NzaC1hcnJheXMnLCAgICAgICAgICAgICAgICBtb2R1bGVJZDogJ3N0eWxlLWh0bWwvMjAuYXJyYXlzJywgICAgICAgICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0FycmF5cycgfSxcbiAgICAgICAvLyB7IHJvdXRlOiAnZnVuY3Rpb25zJywgICAgICAgICAgICAgICBuYW1lOiAnY3NoLWZ1bmN0aW9ucycsICAgICAgICAgICAgIG1vZHVsZUlkOiAnc3R5bGUtaHRtbC80MC5mdW5jdGlvbnMnLCAgICAgICAgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnRnVuY3Rpb25zJyB9LFxuICAgICAgIHsgcm91dGU6ICdjbGFzc2VzJywgICAgICAgICAgICAgICAgIG5hbWU6ICdjc2gtY2xhc3NlcycsICAgICAgICAgICAgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzQ1LmNsYXNzZXMnLCAgICAgICAgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdDbGFzc2VzJyB9LFxuICAgICAgIHsgcm91dGU6ICdtZXRob2RzJywgICAgICAgICAgICAgICAgIG5hbWU6ICdjc2gtY2xhc3MtbWV0aG9kcycsICAgICAgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzUwLmNsYXNzLW1ldGhvZHMnLCAgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdGdW5jdGlvbnMgJiBNZXRob2RzJyB9LFxuICAgICAgIHsgcm91dGU6ICdpbmxpbmUtZG9jdW1lbnRhdGlvbicsICAgIG5hbWU6ICdjc2gtaW5saW5lLWRvY3VtZW50YXRpb24nLCAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzgwLmlubGluZS1kb2N1bWVudGF0aW9uJywgIG5hdjogdHJ1ZSwgdGl0bGU6ICdJbmxpbmUgRG9jdW1lbnRhdGlvbicgfVxuICAgICBdKTtcblxuICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgIH1cbiB9XG4vLyBcImlzYWdhbGFldi9oaWdobGlnaHQuanNcIjogXCJnaXRodWI6aXNhZ2FsYWV2L2hpZ2hsaWdodC5qc0A5LjIuMFwiLFxcICBcXFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
