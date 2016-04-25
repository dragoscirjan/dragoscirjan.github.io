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

          this.heading = 'Recommended Tools';
        }

        _createClass(Component, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['', 'overview'], name: 'rec-overview', moduleId: 'recommend/00.overview', nav: true, title: 'Overview' }, { route: ['ide'], name: 'rec-ide', moduleId: 'recommend/05.ide', nav: true, title: 'IDEs' }, { route: ['ide-plugins'], name: 'rec-ide-plugins', moduleId: 'recommend/06.ide-plugins', nav: true, title: 'IDEs / Plugins' }, { route: ['fwk'], name: 'rec-fwk', moduleId: 'recommend/10.fwk', nav: true, title: 'Frameworks' }, { route: ['fwk-ut'], name: 'rec-fwk-ut', moduleId: 'recommend/11.fwk-ut', nav: true, title: 'Frameworks / Unit Testing' }, { route: ['ci'], name: 'rec-ci', moduleId: 'recommend/20.ci', nav: true, title: 'Continious Integration' }, { route: ['design'], name: 'rec-design', moduleId: 'recommend/30.design', nav: true, title: 'Design' }, { route: ['design-repo'], name: 'rec-design-repo', moduleId: 'recommend/31.design-repo', nav: true, title: 'Design / Image Repository' }]);

            this.router = router;
          }
        }]);

        return Component;
      })();

      _export('Component', Component);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29tbWVuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFJYyxTQUFTOzs7Ozs7Ozs7QUFBVCxlQUFTO2lCQUFULFNBQVM7Z0NBQVQsU0FBUzs7ZUFNcEIsT0FBTyxHQUFHLG1CQUFtQjs7O3FCQU5sQixTQUFTOztpQkFRTCx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQzlCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUcsSUFBSSxFQUFFLGNBQWMsRUFBTSxRQUFRLEVBQUUsdUJBQXVCLEVBQU0sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQzNILEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQVksSUFBSSxFQUFFLFNBQVMsRUFBVyxRQUFRLEVBQUUsa0JBQWtCLEVBQVcsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3ZILEVBQUUsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUksSUFBSSxFQUFFLGlCQUFpQixFQUFHLFFBQVEsRUFBRSwwQkFBMEIsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxFQUNqSSxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFZLElBQUksRUFBRSxTQUFTLEVBQVcsUUFBUSxFQUFFLGtCQUFrQixFQUFXLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUM3SCxFQUFFLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFTLElBQUksRUFBRSxZQUFZLEVBQVEsUUFBUSxFQUFFLHFCQUFxQixFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLEVBQzVJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQWEsSUFBSSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsaUJBQWlCLEVBQVksR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsd0JBQXdCLEVBQUUsRUFDekksRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBUyxJQUFJLEVBQUUsWUFBWSxFQUFRLFFBQVEsRUFBRSxxQkFBcUIsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFDekgsRUFBRSxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBSSxJQUFJLEVBQUUsaUJBQWlCLEVBQUcsUUFBUSxFQUFFLDBCQUEwQixFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLDJCQUEyQixFQUFFLENBQzdJLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQXJCVSxTQUFTIiwiZmlsZSI6InJlY29tbWVuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBPdmVyaWV3IENvbXBvbmVudFxuICovXG4gZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG5cbiAgIC8qKlxuICAgICogUGFnZSBIZWFkaW5nXG4gICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICovXG4gICBoZWFkaW5nID0gJ1JlY29tbWVuZGVkIFRvb2xzJztcblxuICAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgIGNvbmZpZy5tYXAoW1xuICAgICAgIHsgcm91dGU6IFsnJywgJ292ZXJ2aWV3J10sICBuYW1lOiAncmVjLW92ZXJ2aWV3JywgICAgIG1vZHVsZUlkOiAncmVjb21tZW5kLzAwLm92ZXJ2aWV3JywgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdPdmVydmlldycgfSxcbiAgICAgICB7IHJvdXRlOiBbJ2lkZSddLCAgICAgICAgICAgbmFtZTogJ3JlYy1pZGUnLCAgICAgICAgICBtb2R1bGVJZDogJ3JlY29tbWVuZC8wNS5pZGUnLCAgICAgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnSURFcycgfSxcbiAgICAgICB7IHJvdXRlOiBbJ2lkZS1wbHVnaW5zJ10sICAgbmFtZTogJ3JlYy1pZGUtcGx1Z2lucycsICBtb2R1bGVJZDogJ3JlY29tbWVuZC8wNi5pZGUtcGx1Z2lucycsICBuYXY6IHRydWUsIHRpdGxlOiAnSURFcyAvIFBsdWdpbnMnIH0sXG4gICAgICAgeyByb3V0ZTogWydmd2snXSwgICAgICAgICAgIG5hbWU6ICdyZWMtZndrJywgICAgICAgICAgbW9kdWxlSWQ6ICdyZWNvbW1lbmQvMTAuZndrJywgICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0ZyYW1ld29ya3MnIH0sXG4gICAgICAgeyByb3V0ZTogWydmd2stdXQnXSwgICAgICAgIG5hbWU6ICdyZWMtZndrLXV0JywgICAgICAgbW9kdWxlSWQ6ICdyZWNvbW1lbmQvMTEuZndrLXV0JywgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0ZyYW1ld29ya3MgLyBVbml0IFRlc3RpbmcnIH0sXG4gICAgICAgeyByb3V0ZTogWydjaSddLCAgICAgICAgICAgIG5hbWU6ICdyZWMtY2knLCAgICAgICAgICAgbW9kdWxlSWQ6ICdyZWNvbW1lbmQvMjAuY2knLCAgICAgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0NvbnRpbmlvdXMgSW50ZWdyYXRpb24nIH0sXG4gICAgICAgeyByb3V0ZTogWydkZXNpZ24nXSwgICAgICAgIG5hbWU6ICdyZWMtZGVzaWduJywgICAgICAgbW9kdWxlSWQ6ICdyZWNvbW1lbmQvMzAuZGVzaWduJywgICAgICAgbmF2OiB0cnVlLCB0aXRsZTogJ0Rlc2lnbicgfSxcbiAgICAgICB7IHJvdXRlOiBbJ2Rlc2lnbi1yZXBvJ10sICAgbmFtZTogJ3JlYy1kZXNpZ24tcmVwbycsICBtb2R1bGVJZDogJ3JlY29tbWVuZC8zMS5kZXNpZ24tcmVwbycsICBuYXY6IHRydWUsIHRpdGxlOiAnRGVzaWduIC8gSW1hZ2UgUmVwb3NpdG9yeScgfVxuICAgICBdKTtcblxuICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgIH1cbiB9XG4vLyBcImlzYWdhbGFldi9oaWdobGlnaHQuanNcIjogXCJnaXRodWI6aXNhZ2FsYWV2L2hpZ2hsaWdodC5qc0A5LjIuMFwiLFxcICBcXFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
