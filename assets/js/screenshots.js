(function() {
    var items = [];

    var init = function(gallerySelector, clickFunction) {
        var gallery = document.querySelector(gallerySelector),
            figures = gallery.getElementsByTagName('figure');
        for (var i = 0; i < figures.length; i++) {
            figures[i].setAttribute('data-pid', i);
            var linkEl = figures[i].children[0],
                size = linkEl.getAttribute('data-size').split('x'),
                thumbEl = linkEl.children[0],
                captionEl = figures[i].children[1];

            var item = {
                el: figures[i],
                src: linkEl.href,
                msrc: thumbEl.src,
                w: size[0],
                h: size[1],
            };

            if (captionEl && captionEl.tagName.toUpperCase() === 'FIGCAPTION')
                item.title = captionEl.innerHTML;

            items.push(item);
        }

        gallery.onclick = clickFunction;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    var openPS = function(e) {
        e = e || window.event;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var figureEl = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!figureEl) {
            return;
        }

        var options = {
              history: false,
              closeOnScroll: false,
              shareEl: false,

              getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
              },
            };

            options.index = parseInt(figureEl.getAttribute('data-pid'), 10);

            if (isNaN(options.index))
                return;

            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var ps = new PhotoSwipe(document.querySelector('.pswp'), PhotoSwipeUI_Default, items, options);
            ps.init();
      };

      init('.screenshots', openPS);
})();
