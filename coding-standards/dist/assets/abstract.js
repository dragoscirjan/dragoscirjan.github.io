System.register(['highlight.js'], function (_export) {
  'use strict';

  var hljs, Component;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_highlightJs) {
      hljs = _highlightJs;
    }],
    execute: function () {
      Component = (function () {
        function Component() {
          _classCallCheck(this, Component);
        }

        _createClass(Component, [{
          key: 'attached',
          value: function attached() {
            var liItemCount = 1;

            $('.lang-ex').each(function () {
              var $this = $(this);
              var $ul = $('<ul class="nav nav-tabs" role="tablist"></ul>');
              var $div = $('<div class="tab-content"></div>');

              $this.find('h5').each(function () {
                var $li = $('<li role="presentation"><a href="#li-item-' + liItemCount + '" aria-controls="li-item-' + liItemCount + '" role="tab" data-toggle="tab"></a></li>');
                var $dv = $('<div role="tabpanel" class="tab-pane example-pane" id="li-item-' + liItemCount++ + '"></div>');
                var $d = null;
                var count = 0;

                $li.find('a').html(this.innerHTML.replace(/\s*TODO\s*/, ''));

                while (count < 50) {
                  $d = $d && $d.length ? $d.next() : $(this).next();
                  if (!$d || $d.prop('tagName') === 'H5') {
                    break;
                  }
                  $dv.append($d);
                  count++;
                }
                $ul.append($li);
                $div.append($dv);
              });

              $this.html('').append($ul).append($div);
              $ul.find('li:first').addClass('active');
              $div.find('div:first').addClass('active');
            });

            $('.lang-ex .example-pane').each(function () {
              var $this = $(this);
              var $ul = $('<ul class="nav nav-tabs" role="tablist"></ul>');
              var $div = $('<div class="tab-content"></div>');

              if ($this.find('h6').length == 0) {
                return;
              }

              $this.find('h6').each(function () {
                var $li = $('<li role="presentation"><a href="#li-item-' + liItemCount + '" aria-controls="li-item-' + liItemCount + '" role="tab" data-toggle="tab"></a></li>');
                var $dv = $('<div role="tabpanel" class="tab-pane" id="li-item-' + liItemCount++ + '"><div class="code-pane"></div></div>');
                var $d = null;
                var count = 0;

                $li.find('a').html(this.innerHTML.replace(/\s*TODO\s*/, ''));

                while (count < 50) {
                  $d = $d && $d.length ? $d.next() : $(this).next();
                  if (!$d || $d.prop('tagName') === 'H6') {
                    break;
                  }
                  $dv.find('.code-pane').append($d);
                  count++;
                }
                $ul.append($li);
                $div.append($dv);
              });

              $this.html('').append($ul).append($div);
              $ul.find('li:first').addClass('active');
              $div.find('div:first').addClass('active');
            });

            $('pre > code').each(function (i, block) {
              var $code = $(block);
              if ($code.hasClass('lang-cfml')) {
                $code.addClass('lang-xml');
              }

              hljs.highlightBlock(block);
            });

            $('.nav-tabs[role=tablist]').each(function (i, navtab) {
              $(navtab).find('a').not('.disabled').filter(':first').trigger('click');
            });
          }
        }]);

        return Component;
      })();

      _export('Component', Component);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDdEMsa0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixrQkFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQy9CLHFCQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2VBQzVCOztBQUVELGtCQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQzs7QUFFSCxhQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUUsTUFBTSxFQUFFO0FBQ3BELGVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEUsQ0FBQyxDQUFDO1dBQ0o7OztlQXRGVSxTQUFTIiwiZmlsZSI6ImFzc2V0cy9hYnN0cmFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0ICogYXMgaGxqcyBmcm9tICdpc2FnYWxhZXYvaGlnaGxpZ2h0LmpzL3NyYy9oaWdobGlnaHQnO1xuaW1wb3J0ICogYXMgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xuLy8gaW1wb3J0ICdpc2FnYWxhZXYvaGlnaGxpZ2h0LmpzL3NyYy9sYW5ndWFnZXMvamF2YXNjcmlwdCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuXG4gIGF0dGFjaGVkKCkge1xuICAgIGxldCBsaUl0ZW1Db3VudCA9IDE7XG5cbiAgICAvLyBXaXRoaW4gLmxhbmctZXggZWxlbWVudHNcbiAgICAvLyBjcmVhdGUgdGFicyBmcm9tIGg1IGVsZW1lbnRzLCBhbmQgdGhlIGNvbnRlbnQgYWZ0ZXIgaXRcbiAgICAkKCcubGFuZy1leCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgbGV0ICR1bCA9ICQoJzx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+PC91bD4nKTtcbiAgICAgIGxldCAkZGl2ID0gJCgnPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+PC9kaXY+Jyk7XG4gICAgICAvLyBsZXQgbGlGaXJzdEl0ZW0gPSBsaUl0ZW1Db3VudDtcbiAgICAgICR0aGlzLmZpbmQoJ2g1JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0ICRsaSA9ICQoYDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNsaS1pdGVtLSR7bGlJdGVtQ291bnR9XCIgYXJpYS1jb250cm9scz1cImxpLWl0ZW0tJHtsaUl0ZW1Db3VudH1cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj48L2E+PC9saT5gKTtcbiAgICAgICAgbGV0ICRkdiA9ICQoYDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBleGFtcGxlLXBhbmVcIiBpZD1cImxpLWl0ZW0tJHtsaUl0ZW1Db3VudCsrfVwiPjwvZGl2PmApO1xuICAgICAgICBsZXQgJGQgPSBudWxsO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgICRsaS5maW5kKCdhJykuaHRtbCh0aGlzLmlubmVySFRNTC5yZXBsYWNlKC9cXHMqVE9ET1xccyovLCAnJykpO1xuXG4gICAgICAgIHdoaWxlIChjb3VudCA8IDUwKSB7XG4gICAgICAgICAgJGQgPSAoJGQgJiYgJGQubGVuZ3RoKSA/ICRkLm5leHQoKSA6ICQodGhpcykubmV4dCgpO1xuICAgICAgICAgIGlmICghJGQgfHwgJGQucHJvcCgndGFnTmFtZScpID09PSAnSDUnKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgJGR2LmFwcGVuZCgkZCk7XG4gICAgICAgICAgY291bnQgKys7XG4gICAgICAgIH1cbiAgICAgICAgJHVsLmFwcGVuZCgkbGkpO1xuICAgICAgICAkZGl2LmFwcGVuZCgkZHYpO1xuICAgICAgfSk7XG5cbiAgICAgICR0aGlzLmh0bWwoJycpLmFwcGVuZCgkdWwpLmFwcGVuZCgkZGl2KTtcbiAgICAgICR1bC5maW5kKCdsaTpmaXJzdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICRkaXYuZmluZCgnZGl2OmZpcnN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gV2l0aGluIC5sYW5nLWV4IGVsZW1lbnRzXG4gICAgLy8gY3JlYXRlIHRhYnMgZnJvbSBoNSBlbGVtZW50cywgYW5kIHRoZSBjb250ZW50IGFmdGVyIGl0XG4gICAgJCgnLmxhbmctZXggLmV4YW1wbGUtcGFuZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgbGV0ICR1bCA9ICQoJzx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+PC91bD4nKTtcbiAgICAgIGxldCAkZGl2ID0gJCgnPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+PC9kaXY+Jyk7XG5cbiAgICAgIGlmICgkdGhpcy5maW5kKCdoNicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gbGV0IGxpRmlyc3RJdGVtID0gbGlJdGVtQ291bnQ7XG4gICAgICAkdGhpcy5maW5kKCdoNicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCAkbGkgPSAkKGA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjbGktaXRlbS0ke2xpSXRlbUNvdW50fVwiIGFyaWEtY29udHJvbHM9XCJsaS1pdGVtLSR7bGlJdGVtQ291bnR9XCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+PC9hPjwvbGk+YCk7XG4gICAgICAgIGxldCAkZHYgPSAkKGA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cImxpLWl0ZW0tJHtsaUl0ZW1Db3VudCsrfVwiPjxkaXYgY2xhc3M9XCJjb2RlLXBhbmVcIj48L2Rpdj48L2Rpdj5gKTtcbiAgICAgICAgbGV0ICRkID0gbnVsbDtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICAkbGkuZmluZCgnYScpLmh0bWwodGhpcy5pbm5lckhUTUwucmVwbGFjZSgvXFxzKlRPRE9cXHMqLywgJycpKTtcblxuICAgICAgICB3aGlsZSAoY291bnQgPCA1MCkge1xuICAgICAgICAgICRkID0gKCRkICYmICRkLmxlbmd0aCkgPyAkZC5uZXh0KCkgOiAkKHRoaXMpLm5leHQoKTtcbiAgICAgICAgICBpZiAoISRkIHx8ICRkLnByb3AoJ3RhZ05hbWUnKSA9PT0gJ0g2Jykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgICRkdi5maW5kKCcuY29kZS1wYW5lJykuYXBwZW5kKCRkKTtcbiAgICAgICAgICBjb3VudCArKztcbiAgICAgICAgfVxuICAgICAgICAkdWwuYXBwZW5kKCRsaSk7XG4gICAgICAgICRkaXYuYXBwZW5kKCRkdik7XG4gICAgICB9KTtcblxuICAgICAgJHRoaXMuaHRtbCgnJykuYXBwZW5kKCR1bCkuYXBwZW5kKCRkaXYpO1xuICAgICAgJHVsLmZpbmQoJ2xpOmZpcnN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJGRpdi5maW5kKCdkaXY6Zmlyc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCdwcmUgPiBjb2RlJykuZWFjaChmdW5jdGlvbihpLCBibG9jaykge1xuICAgICAgbGV0ICRjb2RlID0gJChibG9jayk7XG4gICAgICBpZiAoJGNvZGUuaGFzQ2xhc3MoJ2xhbmctY2ZtbCcpKSB7XG4gICAgICAgICRjb2RlLmFkZENsYXNzKCdsYW5nLXhtbCcpO1xuICAgICAgfVxuXG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICB9KTtcblxuICAgICQoJy5uYXYtdGFic1tyb2xlPXRhYmxpc3RdJykuZWFjaChmdW5jdGlvbihpLCBuYXZ0YWIpIHtcbiAgICAgICQobmF2dGFiKS5maW5kKCdhJykubm90KCcuZGlzYWJsZWQnKS5maWx0ZXIoJzpmaXJzdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
