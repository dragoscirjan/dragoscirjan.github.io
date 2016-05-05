System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Coding Standars';
            config.map([{ route: ['', 'overview'], name: 'overview', moduleId: 'overview', nav: true, title: 'Overview' }, { route: 'formating', name: 'formating', moduleId: 'formating', nav: true, title: 'File Formating' }, { route: 'naming', name: 'naming', moduleId: 'naming', nav: true, title: 'Naming Convetions' }, { route: 'style', name: 'style', moduleId: 'style', nav: true, title: 'Coding Style' }, { route: 'style-html', name: 'style-html', moduleId: 'style-html', nav: true, title: 'Coding Style (HTML)' }, { route: 'recommend', name: 'recommend', moduleId: 'recommend', nav: true, title: 'Recommended Tools' }]);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);

      '';
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7QUFDakMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFLLFFBQVEsRUFBRSxVQUFVLEVBQUssR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQ3ZHLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBTyxJQUFJLEVBQUUsV0FBVyxFQUFJLFFBQVEsRUFBRSxXQUFXLEVBQUksR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsRUFDN0csRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLElBQUksRUFBRSxRQUFRLEVBQU8sUUFBUSxFQUFFLFFBQVEsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxFQUNoSCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVcsSUFBSSxFQUFFLE9BQU8sRUFBUSxRQUFRLEVBQUUsT0FBTyxFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxFQUMzRyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQU0sSUFBSSxFQUFFLFlBQVksRUFBRyxRQUFRLEVBQUUsWUFBWSxFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLEVBQ2xILEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBTyxJQUFJLEVBQUUsV0FBVyxFQUFJLFFBQVEsRUFBRSxXQUFXLEVBQUksR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsQ0FDakgsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBYlUsR0FBRzs7Ozs7QUFlaEIsU0FBRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0NvZGluZyBTdGFuZGFycyc7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICdvdmVydmlldyddLCBuYW1lOiAnb3ZlcnZpZXcnLCAgICBtb2R1bGVJZDogJ292ZXJ2aWV3JywgICAgbmF2OiB0cnVlLCB0aXRsZTogJ092ZXJ2aWV3JyB9LFxuICAgICAgeyByb3V0ZTogJ2Zvcm1hdGluZycsICAgICAgbmFtZTogJ2Zvcm1hdGluZycsICAgbW9kdWxlSWQ6ICdmb3JtYXRpbmcnLCAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdGaWxlIEZvcm1hdGluZycgfSxcbiAgICAgIHsgcm91dGU6ICduYW1pbmcnLCAgICAgICAgIG5hbWU6ICduYW1pbmcnLCAgICAgIG1vZHVsZUlkOiAnbmFtaW5nJywgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnTmFtaW5nIENvbnZldGlvbnMnIH0sXG4gICAgICB7IHJvdXRlOiAnc3R5bGUnLCAgICAgICAgICBuYW1lOiAnc3R5bGUnLCAgICAgICBtb2R1bGVJZDogJ3N0eWxlJywgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0NvZGluZyBTdHlsZScgfSxcbiAgICAgIHsgcm91dGU6ICdzdHlsZS1odG1sJywgICAgIG5hbWU6ICdzdHlsZS1odG1sJywgIG1vZHVsZUlkOiAnc3R5bGUtaHRtbCcsICBuYXY6IHRydWUsIHRpdGxlOiAnQ29kaW5nIFN0eWxlIChIVE1MKScgfSxcbiAgICAgIHsgcm91dGU6ICdyZWNvbW1lbmQnLCAgICAgIG5hbWU6ICdyZWNvbW1lbmQnLCAgIG1vZHVsZUlkOiAncmVjb21tZW5kJywgICBuYXY6IHRydWUsIHRpdGxlOiAnUmVjb21tZW5kZWQgVG9vbHMnIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG5gYCJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
