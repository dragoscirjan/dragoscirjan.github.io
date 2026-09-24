System.register([], function (_export) {
    'use strict';

    return {
        setters: [],
        execute: function () {
            (function ($) {

                var liItemCount = 1;

                $('.lang-ex').each(function () {
                    var $this = $(this),
                        $ul = $('<ul class="nav nav-tabs" role="tablist"></ul>'),
                        $div = $('<div class="tab-content"></div>'),
                        liFirstItem = liItemCount;

                    $this.find('h5').each(function () {
                        var $li = $('<li role="presentation"><a href="#li-item-' + liItemCount + '" aria-controls="li-item-' + liItemCount + '" role="tab" data-toggle="tab"></a></li>'),
                            $dv = $('<div role="tabpanel" class="tab-pane" id="li-item-' + liItemCount++ + '"></div>'),
                            $d = null,
                            count = 0;

                        if (!this.innerHTML.match(/TODO/)) {
                            $li.find('a').html(this.innerHTML);
                        } else {
                            $li.find('a').addClass('disabled').attr('data-toggle', '').tooltip({
                                title: 'Content not available. Care to help designing it?'
                            }).html(this.innerHTML.replace(/\s*TODO\s*/, ''));
                        }
                        while (count < 50) {
                            $d = $d && $d.length ? $d.next() : $(this).next();
                            if (!$d || $d.prop('tagName') == 'H5') {
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
                    var $code = $(block);
                    if ($code.hasClass('lang-cfml')) {
                        $code.addClass('lang-xml');
                    }

                    hljs.highlightBlock(block);
                });

                $('.nav-tabs[role=tablist]').each(function (i, navtab) {
                    $(navtab).find('a').not('.disabled').filter(':first').trigger('click');
                });
            })(jQuery);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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LEVBQUU7QUFDN0IsNkJBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzlCOztBQUVELHdCQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5QixDQUFDLENBQUM7O0FBRUgsaUJBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUMsRUFBRSxNQUFNLEVBQUU7QUFDbEQscUJBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzFFLENBQUMsQ0FBQzthQUVOLENBQUEsQ0FBRSxNQUFNLENBQUMsQ0FBQyIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZnVuY3Rpb24oJCl7XG5cbiAgICB2YXIgbGlJdGVtQ291bnQgPSAxO1xuXG4gICAgJCgnLmxhbmctZXgnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAkdWwgPSAkKCc8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPjwvdWw+JyksXG4gICAgICAgICAgICAkZGl2ID0gJCgnPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+PC9kaXY+JyksXG4gICAgICAgICAgICBsaUZpcnN0SXRlbSA9IGxpSXRlbUNvdW50O1xuXG5cbiAgICAgICAgJHRoaXMuZmluZCgnaDUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgJGxpID0gJCgnPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI2xpLWl0ZW0tJyArIGxpSXRlbUNvdW50ICtcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGFyaWEtY29udHJvbHM9XCJsaS1pdGVtLScgKyBsaUl0ZW1Db3VudCArICdcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj48L2E+PC9saT4nKSxcbiAgICAgICAgICAgICAgICAkZHYgPSAkKCc8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cImxpLWl0ZW0tJyArIChsaUl0ZW1Db3VudCsrKSArICdcIj48L2Rpdj4nKSxcbiAgICAgICAgICAgICAgICAkZCA9IG51bGwsXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5uZXJIVE1MLm1hdGNoKC9UT0RPLykpIHtcbiAgICAgICAgICAgICAgICAkbGkuZmluZCgnYScpLmh0bWwodGhpcy5pbm5lckhUTUwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbGkuZmluZCgnYScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS10b2dnbGUnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnRvb2x0aXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb250ZW50IG5vdCBhdmFpbGFibGUuIENhcmUgdG8gaGVscCBkZXNpZ25pbmcgaXQ/J1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuaHRtbCh0aGlzLmlubmVySFRNTC5yZXBsYWNlKC9cXHMqVE9ET1xccyovLCAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGNvdW50IDwgNTApIHtcbiAgICAgICAgICAgICAgICAkZCA9ICgkZCAmJiAkZC5sZW5ndGgpID8gJGQubmV4dCgpIDogJCh0aGlzKS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCEkZCB8fCAkZC5wcm9wKCd0YWdOYW1lJykgPT0gJ0g1Jykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJGR2LmFwcGVuZCgkZCk7XG4gICAgICAgICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkdWwuYXBwZW5kKCRsaSk7XG4gICAgICAgICAgICAkZGl2LmFwcGVuZCgkZHYpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5odG1sKCcnKTtcbiAgICAgICAgJHRoaXMuYXBwZW5kKCR1bCk7XG4gICAgICAgICR0aGlzLmFwcGVuZCgkZGl2KTtcblxuICAgICAgICAkdWwuZmluZCgnbGk6Zmlyc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICRkaXYuZmluZCgnZGl2OmZpcnN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgncHJlID4gY29kZScpLmVhY2goZnVuY3Rpb24oaSwgYmxvY2spIHtcbiAgICAgICAgdmFyICRjb2RlID0gJChibG9jayk7XG4gICAgICAgIGlmICgkY29kZS5oYXNDbGFzcygnbGFuZy1jZm1sJykpIHtcbiAgICAgICAgICAgICRjb2RlLmFkZENsYXNzKCdsYW5nLXhtbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGxqcy5oaWdobGlnaHRCbG9jayhibG9jayk7XG4gICAgfSk7XG5cbiAgICAkKCcubmF2LXRhYnNbcm9sZT10YWJsaXN0XScpLmVhY2goZnVuY3Rpb24oaSwgbmF2dGFiKSB7XG4gICAgICAgICQobmF2dGFiKS5maW5kKCdhJykubm90KCcuZGlzYWJsZWQnKS5maWx0ZXIoJzpmaXJzdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
