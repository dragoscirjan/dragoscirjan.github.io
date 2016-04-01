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
                var $dv = $('<div role="tabpanel" class="tab-pane" id="li-item-' + liItemCount++ + '"></div>');
                var $d = null;
                var count = 0;

                if (!this.innerHTML.match(/TODO/)) {
                  $li.find('a').html(this.innerHTML);
                } else {
                  $li.find('a').addClass('disabled').attr('data-toggle', '').tooltip({
                    title: 'Content not available. Care to help designing it?'
                  }).html(this.innerHTML.replace(/\s*TODO\s*/, ''));
                }
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

              $this.html('');
              $this.append($ul);
              $this.append($div);

              $ul.find('li:first').addClass('active');
              $div.find('div:first').addClass('active');
            });

            $('pre > code').each(function (i, block) {
              console.log(block);
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
//# sourceMappingURL=data:application/json;base64,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QUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLGtCQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDL0IscUJBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7ZUFDNUI7O0FBRUQsa0JBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUIsQ0FBQyxDQUFDOztBQUVILGFBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRSxNQUFNLEVBQUU7QUFDcEQsZUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN4RSxDQUFDLENBQUM7V0FDSjs7O2VBN0RVLFNBQVMiLCJmaWxlIjoiYXNzZXRzL2Fic3RyYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBpbXBvcnQgKiBhcyBobGpzIGZyb20gJ2lzYWdhbGFldi9oaWdobGlnaHQuanMvc3JjL2hpZ2hsaWdodCc7XG5pbXBvcnQgKiBhcyBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcyc7XG4vLyBpbXBvcnQgJ2lzYWdhbGFldi9oaWdobGlnaHQuanMvc3JjL2xhbmd1YWdlcy9qYXZhc2NyaXB0JztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgbGV0IGxpSXRlbUNvdW50ID0gMTtcblxuICAgICQoJy5sYW5nLWV4JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBsZXQgJHVsID0gJCgnPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj48L3VsPicpO1xuICAgICAgbGV0ICRkaXYgPSAkKCc8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj48L2Rpdj4nKTtcbiAgICAgIC8vIGxldCBsaUZpcnN0SXRlbSA9IGxpSXRlbUNvdW50O1xuXG4gICAgICAkdGhpcy5maW5kKCdoNScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCAkbGkgPSAkKGA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjbGktaXRlbS0ke2xpSXRlbUNvdW50fVwiIGFyaWEtY29udHJvbHM9XCJsaS1pdGVtLSR7bGlJdGVtQ291bnR9XCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+PC9hPjwvbGk+YCk7XG4gICAgICAgIGxldCAkZHYgPSAkKGA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cImxpLWl0ZW0tJHtsaUl0ZW1Db3VudCsrfVwiPjwvZGl2PmApO1xuICAgICAgICBsZXQgJGQgPSBudWxsO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIGlmICghdGhpcy5pbm5lckhUTUwubWF0Y2goL1RPRE8vKSkge1xuICAgICAgICAgICRsaS5maW5kKCdhJykuaHRtbCh0aGlzLmlubmVySFRNTCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGxpLmZpbmQoJ2EnKVxuICAgICAgICAgIC5hZGRDbGFzcygnZGlzYWJsZWQnKVxuICAgICAgICAgIC5hdHRyKCdkYXRhLXRvZ2dsZScsICcnKVxuICAgICAgICAgIC50b29sdGlwKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29udGVudCBub3QgYXZhaWxhYmxlLiBDYXJlIHRvIGhlbHAgZGVzaWduaW5nIGl0PydcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5odG1sKHRoaXMuaW5uZXJIVE1MLnJlcGxhY2UoL1xccypUT0RPXFxzKi8sICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNvdW50IDwgNTApIHtcbiAgICAgICAgICAkZCA9ICgkZCAmJiAkZC5sZW5ndGgpID8gJGQubmV4dCgpIDogJCh0aGlzKS5uZXh0KCk7XG4gICAgICAgICAgaWYgKCEkZCB8fCAkZC5wcm9wKCd0YWdOYW1lJykgPT09ICdINScpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkZHYuYXBwZW5kKCRkKTtcbiAgICAgICAgICBjb3VudCArKztcbiAgICAgICAgfVxuICAgICAgICAkdWwuYXBwZW5kKCRsaSk7XG4gICAgICAgICRkaXYuYXBwZW5kKCRkdik7XG4gICAgICB9KTtcblxuICAgICAgJHRoaXMuaHRtbCgnJyk7XG4gICAgICAkdGhpcy5hcHBlbmQoJHVsKTtcbiAgICAgICR0aGlzLmFwcGVuZCgkZGl2KTtcblxuICAgICAgJHVsLmZpbmQoJ2xpOmZpcnN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJGRpdi5maW5kKCdkaXY6Zmlyc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKCdwcmUgPiBjb2RlJykuZWFjaChmdW5jdGlvbihpLCBibG9jaykge1xuICAgICAgY29uc29sZS5sb2coYmxvY2spO1xuICAgICAgbGV0ICRjb2RlID0gJChibG9jayk7XG4gICAgICBpZiAoJGNvZGUuaGFzQ2xhc3MoJ2xhbmctY2ZtbCcpKSB7XG4gICAgICAgICRjb2RlLmFkZENsYXNzKCdsYW5nLXhtbCcpO1xuICAgICAgfVxuXG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgICB9KTtcblxuICAgICQoJy5uYXYtdGFic1tyb2xlPXRhYmxpc3RdJykuZWFjaChmdW5jdGlvbihpLCBuYXZ0YWIpIHtcbiAgICAgICQobmF2dGFiKS5maW5kKCdhJykubm90KCcuZGlzYWJsZWQnKS5maWx0ZXIoJzpmaXJzdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
