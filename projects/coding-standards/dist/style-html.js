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
            config.map([{ route: ['', 'overview'], name: 'csh-overview', moduleId: 'style-html/00.overview', nav: false, title: 'Overview' }, { route: ['', 'specificity'], name: 'csh-specificity', moduleId: 'style-html/05.specificity', nav: true, title: 'Specificity' }, { route: 'formatting', name: 'csh-formatting', moduleId: 'style-html/10.formatting', nav: true, title: 'Formatting' }, { route: 'pseudo', name: 'csh-pseudo', moduleId: 'style-html/15.pseudo', nav: true, title: 'Pseudo Elements and Classes' }, { route: 'units', name: 'csh-arrays', moduleId: 'style-html/16.units', nav: true, title: 'Units' }, { route: 'nesting', name: 'csh-nesting', moduleId: 'style-html/20.nesting', nav: true, title: 'Nesting' }, { route: 'components', name: 'csh-components', moduleId: 'style-html/30.components', nav: true, title: 'Components' }, { route: 'utilities', name: 'csh-utilities', moduleId: 'style-html/40.utilities', nav: true, title: 'Utilities' }, { route: 'variables', name: 'csh-variables', moduleId: 'style-html/50.variables', nav: true, title: 'Variables &\ Mixins' }, { route: 'polyfills', name: 'csh-polyfills', moduleId: 'style-html/60.polyfills', nav: true, title: 'Polyfills' }]);

            this.router = router;
          }
        }]);

        return Component;
      })();

      _export('Component', Component);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLWh0bWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BSWMsU0FBUzs7Ozs7Ozs7O0FBQVQsZUFBUztpQkFBVCxTQUFTO2dDQUFULFNBQVM7O2VBTXBCLE9BQU8sR0FBRyx5QkFBeUI7OztxQkFOeEIsU0FBUzs7aUJBUUwseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUM5QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFNLElBQUksRUFBRSxjQUFjLEVBQU0sUUFBUSxFQUFFLHdCQUF3QixFQUFNLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUNoSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsRUFBRyxJQUFJLEVBQUUsaUJBQWlCLEVBQUcsUUFBUSxFQUFFLDJCQUEyQixFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUNsSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQVUsSUFBSSxFQUFFLGdCQUFnQixFQUFJLFFBQVEsRUFBRSwwQkFBMEIsRUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFDakksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFjLElBQUksRUFBRSxZQUFZLEVBQVEsUUFBUSxFQUFFLHNCQUFzQixFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFLEVBQ2xKLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZSxJQUFJLEVBQUUsWUFBWSxFQUFRLFFBQVEsRUFBRSxxQkFBcUIsRUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFDNUgsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFhLElBQUksRUFBRSxhQUFhLEVBQU8sUUFBUSxFQUFFLHVCQUF1QixFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUM5SCxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQVUsSUFBSSxFQUFFLGdCQUFnQixFQUFJLFFBQVEsRUFBRSwwQkFBMEIsRUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFDakksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFXLElBQUksRUFBRSxlQUFlLEVBQUssUUFBUSxFQUFFLHlCQUF5QixFQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUNoSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQVcsSUFBSSxFQUFFLGVBQWUsRUFBSyxRQUFRLEVBQUUseUJBQXlCLEVBQUssR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsRUFDMUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFXLElBQUksRUFBRSxlQUFlLEVBQUssUUFBUSxFQUFFLHlCQUF5QixFQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUVqSSxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUF4QlUsU0FBUyIsImZpbGUiOiJzdHlsZS1odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIE92ZXJpZXcgQ29tcG9uZW50XG4gKi9cbiBleHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcblxuICAgLyoqXG4gICAgKiBQYWdlIEhlYWRpbmdcbiAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgKi9cbiAgIGhlYWRpbmcgPSAnQ29kaW5nIFN0eWxlIChIVE1ML0NTUyknO1xuXG4gICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICAgY29uZmlnLm1hcChbXG4gICAgICAgeyByb3V0ZTogWycnLCAnb3ZlcnZpZXcnXSwgICAgIG5hbWU6ICdjc2gtb3ZlcnZpZXcnLCAgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzAwLm92ZXJ2aWV3JywgICAgIG5hdjogZmFsc2UsIHRpdGxlOiAnT3ZlcnZpZXcnIH0sXG4gICAgICAgeyByb3V0ZTogWycnLCAnc3BlY2lmaWNpdHknXSwgIG5hbWU6ICdjc2gtc3BlY2lmaWNpdHknLCAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzA1LnNwZWNpZmljaXR5JywgIG5hdjogdHJ1ZSwgdGl0bGU6ICdTcGVjaWZpY2l0eScgfSxcbiAgICAgICB7IHJvdXRlOiAnZm9ybWF0dGluZycsICAgICAgICAgbmFtZTogJ2NzaC1mb3JtYXR0aW5nJywgICBtb2R1bGVJZDogJ3N0eWxlLWh0bWwvMTAuZm9ybWF0dGluZycsICAgbmF2OiB0cnVlLCB0aXRsZTogJ0Zvcm1hdHRpbmcnIH0sXG4gICAgICAgeyByb3V0ZTogJ3BzZXVkbycsICAgICAgICAgICAgIG5hbWU6ICdjc2gtcHNldWRvJywgICAgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzE1LnBzZXVkbycsICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdQc2V1ZG8gRWxlbWVudHMgYW5kIENsYXNzZXMnIH0sXG4gICAgICAgeyByb3V0ZTogJ3VuaXRzJywgICAgICAgICAgICAgIG5hbWU6ICdjc2gtYXJyYXlzJywgICAgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzE2LnVuaXRzJywgICAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdVbml0cycgfSxcbiAgICAgICB7IHJvdXRlOiAnbmVzdGluZycsICAgICAgICAgICAgbmFtZTogJ2NzaC1uZXN0aW5nJywgICAgICBtb2R1bGVJZDogJ3N0eWxlLWh0bWwvMjAubmVzdGluZycsICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ05lc3RpbmcnIH0sXG4gICAgICAgeyByb3V0ZTogJ2NvbXBvbmVudHMnLCAgICAgICAgIG5hbWU6ICdjc2gtY29tcG9uZW50cycsICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzMwLmNvbXBvbmVudHMnLCAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdDb21wb25lbnRzJyB9LFxuICAgICAgIHsgcm91dGU6ICd1dGlsaXRpZXMnLCAgICAgICAgICBuYW1lOiAnY3NoLXV0aWxpdGllcycsICAgIG1vZHVsZUlkOiAnc3R5bGUtaHRtbC80MC51dGlsaXRpZXMnLCAgICBuYXY6IHRydWUsIHRpdGxlOiAnVXRpbGl0aWVzJyB9LFxuICAgICAgIHsgcm91dGU6ICd2YXJpYWJsZXMnLCAgICAgICAgICBuYW1lOiAnY3NoLXZhcmlhYmxlcycsICAgIG1vZHVsZUlkOiAnc3R5bGUtaHRtbC81MC52YXJpYWJsZXMnLCAgICBuYXY6IHRydWUsIHRpdGxlOiAnVmFyaWFibGVzICZcXCBNaXhpbnMnIH0sXG4gICAgICAgeyByb3V0ZTogJ3BvbHlmaWxscycsICAgICAgICAgIG5hbWU6ICdjc2gtcG9seWZpbGxzJywgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzYwLnBvbHlmaWxscycsICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdQb2x5ZmlsbHMnIH0sXG4gICAgICAvLyAgeyByb3V0ZTogJ2ZvbGRlcnMnLCAgICAgICAgICAgIG5hbWU6ICdjc2gtZm9sZGVycycsICAgICAgbW9kdWxlSWQ6ICdzdHlsZS1odG1sLzcwLmZvbGRlcnMnLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdGb2xkZXIgU3RydWN0dXJlJyB9XG4gICAgIF0pO1xuXG4gICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgfVxuIH1cbi8vIFwiaXNhZ2FsYWV2L2hpZ2hsaWdodC5qc1wiOiBcImdpdGh1Yjppc2FnYWxhZXYvaGlnaGxpZ2h0LmpzQDkuMi4wXCIsXFwgIFxcXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
