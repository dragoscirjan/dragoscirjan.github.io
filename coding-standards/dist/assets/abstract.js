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

                if (!$dv.find('h6').length) {
                  $dv.addClass('flex');
                }
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
                var $dv = $('<div role="tabpanel" class="tab-pane example-pane flex" id="li-item-' + liItemCount++ + '"></div>');
                var $d = null;
                var count = 0;

                $li.find('a').html(this.innerHTML.replace(/\s*TODO\s*/, ''));

                while (count < 50) {
                  $d = $d && $d.length ? $d.next() : $(this).next();
                  if (!$d || $d.prop('tagName') === 'H6') {
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
//# sourceMappingURL=data:application/json;base64,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QUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMzQyxDQUFDLENBQUM7O0FBRUgsYUFBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDdEMsa0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixrQkFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQy9CLHFCQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2VBQzVCOztBQUVELGtCQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQzs7QUFFSCxhQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUUsTUFBTSxFQUFFO0FBQ3BELGVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEUsQ0FBQyxDQUFDO1dBQ0o7OztlQTNGVSxTQUFTIiwiZmlsZSI6ImFzc2V0cy9hYnN0cmFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0ICogYXMgaGxqcyBmcm9tICdpc2FnYWxhZXYvaGlnaGxpZ2h0LmpzL3NyYy9oaWdobGlnaHQnO1xuaW1wb3J0ICogYXMgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xuLy8gaW1wb3J0ICdpc2FnYWxhZXYvaGlnaGxpZ2h0LmpzL3NyYy9sYW5ndWFnZXMvamF2YXNjcmlwdCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuXG4gIGF0dGFjaGVkKCkge1xuICAgIGxldCBsaUl0ZW1Db3VudCA9IDE7XG5cbiAgICAvLyBXaXRoaW4gLmxhbmctZXggZWxlbWVudHNcbiAgICAvLyBjcmVhdGUgdGFicyBmcm9tIGg1IGVsZW1lbnRzLCBhbmQgdGhlIGNvbnRlbnQgYWZ0ZXIgaXRcbiAgICAkKCcubGFuZy1leCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgbGV0ICR1bCA9ICQoJzx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+PC91bD4nKTtcbiAgICAgIGxldCAkZGl2ID0gJCgnPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+PC9kaXY+Jyk7XG4gICAgICAvLyBsZXQgbGlGaXJzdEl0ZW0gPSBsaUl0ZW1Db3VudDtcbiAgICAgICR0aGlzLmZpbmQoJ2g1JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0ICRsaSA9ICQoYDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNsaS1pdGVtLSR7bGlJdGVtQ291bnR9XCIgYXJpYS1jb250cm9scz1cImxpLWl0ZW0tJHtsaUl0ZW1Db3VudH1cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj48L2E+PC9saT5gKTtcbiAgICAgICAgbGV0ICRkdiA9ICQoYDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBleGFtcGxlLXBhbmVcIiBpZD1cImxpLWl0ZW0tJHtsaUl0ZW1Db3VudCsrfVwiPjwvZGl2PmApO1xuICAgICAgICBsZXQgJGQgPSBudWxsO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgICRsaS5maW5kKCdhJykuaHRtbCh0aGlzLmlubmVySFRNTC5yZXBsYWNlKC9cXHMqVE9ET1xccyovLCAnJykpO1xuXG4gICAgICAgIHdoaWxlIChjb3VudCA8IDUwKSB7XG4gICAgICAgICAgJGQgPSAoJGQgJiYgJGQubGVuZ3RoKSA/ICRkLm5leHQoKSA6ICQodGhpcykubmV4dCgpO1xuICAgICAgICAgIGlmICghJGQgfHwgJGQucHJvcCgndGFnTmFtZScpID09PSAnSDUnKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgJGR2LmFwcGVuZCgkZCk7XG4gICAgICAgICAgY291bnQgKys7XG4gICAgICAgIH1cbiAgICAgICAgJHVsLmFwcGVuZCgkbGkpO1xuICAgICAgICAkZGl2LmFwcGVuZCgkZHYpO1xuXG4gICAgICAgIGlmICghJGR2LmZpbmQoJ2g2JykubGVuZ3RoKSB7XG4gICAgICAgICAgJGR2LmFkZENsYXNzKCdmbGV4Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkdGhpcy5odG1sKCcnKS5hcHBlbmQoJHVsKS5hcHBlbmQoJGRpdik7XG4gICAgICAkdWwuZmluZCgnbGk6Zmlyc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkZGl2LmZpbmQoJ2RpdjpmaXJzdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIFdpdGhpbiAubGFuZy1leCBlbGVtZW50c1xuICAgIC8vIGNyZWF0ZSB0YWJzIGZyb20gaDUgZWxlbWVudHMsIGFuZCB0aGUgY29udGVudCBhZnRlciBpdFxuICAgICQoJy5sYW5nLWV4IC5leGFtcGxlLXBhbmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGxldCAkdWwgPSAkKCc8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPjwvdWw+Jyk7XG4gICAgICBsZXQgJGRpdiA9ICQoJzxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPjwvZGl2PicpO1xuXG4gICAgICBpZiAoJHRoaXMuZmluZCgnaDYnKS5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGxldCBsaUZpcnN0SXRlbSA9IGxpSXRlbUNvdW50O1xuICAgICAgJHRoaXMuZmluZCgnaDYnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgJGxpID0gJChgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI2xpLWl0ZW0tJHtsaUl0ZW1Db3VudH1cIiBhcmlhLWNvbnRyb2xzPVwibGktaXRlbS0ke2xpSXRlbUNvdW50fVwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPjwvYT48L2xpPmApO1xuICAgICAgICBsZXQgJGR2ID0gJChgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGV4YW1wbGUtcGFuZSBmbGV4XCIgaWQ9XCJsaS1pdGVtLSR7bGlJdGVtQ291bnQrK31cIj48L2Rpdj5gKTtcbiAgICAgICAgbGV0ICRkID0gbnVsbDtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICAkbGkuZmluZCgnYScpLmh0bWwodGhpcy5pbm5lckhUTUwucmVwbGFjZSgvXFxzKlRPRE9cXHMqLywgJycpKTtcblxuICAgICAgICB3aGlsZSAoY291bnQgPCA1MCkge1xuICAgICAgICAgICRkID0gKCRkICYmICRkLmxlbmd0aCkgPyAkZC5uZXh0KCkgOiAkKHRoaXMpLm5leHQoKTtcbiAgICAgICAgICBpZiAoISRkIHx8ICRkLnByb3AoJ3RhZ05hbWUnKSA9PT0gJ0g2Jykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgICRkdi5hcHBlbmQoJGQpO1xuICAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICB9XG5cbiAgICAgICAgJHVsLmFwcGVuZCgkbGkpO1xuICAgICAgICAkZGl2LmFwcGVuZCgkZHYpO1xuICAgICAgfSk7XG5cbiAgICAgICR0aGlzLmh0bWwoJycpLmFwcGVuZCgkdWwpLmFwcGVuZCgkZGl2KTtcbiAgICAgICR1bC5maW5kKCdsaTpmaXJzdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICRkaXYuZmluZCgnZGl2OmZpcnN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgncHJlID4gY29kZScpLmVhY2goZnVuY3Rpb24oaSwgYmxvY2spIHtcbiAgICAgIGxldCAkY29kZSA9ICQoYmxvY2spO1xuICAgICAgaWYgKCRjb2RlLmhhc0NsYXNzKCdsYW5nLWNmbWwnKSkge1xuICAgICAgICAkY29kZS5hZGRDbGFzcygnbGFuZy14bWwnKTtcbiAgICAgIH1cblxuICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayhibG9jayk7XG4gICAgfSk7XG5cbiAgICAkKCcubmF2LXRhYnNbcm9sZT10YWJsaXN0XScpLmVhY2goZnVuY3Rpb24oaSwgbmF2dGFiKSB7XG4gICAgICAkKG5hdnRhYikuZmluZCgnYScpLm5vdCgnLmRpc2FibGVkJykuZmlsdGVyKCc6Zmlyc3QnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
