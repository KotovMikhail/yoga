var prevArrow = '<svg class="slick-arrow slick-prev" width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75004 19.6559L20 35.6263V39.3118L0 19.6559L20 0V3.68545L3.75004 19.6559Z" fill="#CCCCCC"/></svg>';
var nextArrow = '<svg class="slick-arrow slick-next" width="20" height="40" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.25 19.6559L0 35.6263V39.3118L20 19.6559L0 0V3.68545L16.25 19.6559Z" fill="#CCCCCC"/></svg>';

$(document).on('click', '.accordion__item',
  function (evt) {

    var btn = $('.accordion__btn', this).parent();
    console.log(btn);
    var content = $('.accordion__content', this)[0];
    var frame = evt.target.closest('.youtubeframe');

    if (!frame && !btn.hasClass('is-open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      btn.addClass('is-open');
    } else {
      if (frame) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
        btn.removeClass('is-open');
      }
    }
  });

$(document).ready(function () {
  var widthScreen = $(window).width();
  var $healthyBackSlider = $('.healthy-back__slider');
  var $forWhoSlider = $('.for-who__slider');
  var $inventorySlider = $('.inventory__slider');
  var $bonusSlider = $('.bonus__slider');

  function showSliderScreen($widthScreen) {
    if ($widthScreen < '1024') {
      if (!$healthyBackSlider.hasClass('slick-initialized')) {
        $healthyBackSlider.slick({
          autoplay: false,
          arrows: true,
          nextArrow: nextArrow,
          prevArrow: prevArrow,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }

      if (!$forWhoSlider.hasClass('slick-initialized')) {
        $forWhoSlider.slick({
          autoplay: false,
          arrows: true,
          nextArrow: nextArrow,
          prevArrow: prevArrow,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }

      if (!$inventorySlider.hasClass('slick-initialized')) {
        $inventorySlider.slick({
          autoplay: false,
          arrows: true,
          nextArrow: nextArrow,
          prevArrow: prevArrow,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }

    } else {
      if ($healthyBackSlider.hasClass('slick-initialized')) {
        $healthyBackSlider.slick('unslick');
      }

      if ($forWhoSlider.hasClass('slick-initialized')) {
        $forWhoSlider.slick('unslick');
      }

      if ($inventorySlider.hasClass('slick-initialized')) {
        $inventorySlider.slick('unslick');
      }
    }

    if ($widthScreen < '768') {
      if (!$bonusSlider.hasClass('slick-initialized')) {
        $bonusSlider.slick({
          autoplay: false,
          arrows: true,
          nextArrow: nextArrow,
          prevArrow: prevArrow,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }
    } else {
      if ($bonusSlider.hasClass('slick-initialized')) {
        $bonusSlider.slick('unslick');
      }
    }
  }

  $(window).ready(showSliderScreen(widthScreen)).resize(function () {
    widthScreen = $(window).width();
    showSliderScreen(widthScreen);
  });
});

$(document).ready(function () {
  var $youtubeSlider = $('.youtube-slider');
  var $changesSlider = $('.changes-slider');
  var $reviewSlider = $('.review-slider');

  $youtubeSlider.slick({
    autoplay: false,
    arrows: true,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $changesSlider.slick({
    autoplay: false,
    arrows: true,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $reviewSlider.slick({
    autoplay: false,
    arrows: true,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  function findvideoAll() {
    var videoAll = document.querySelectorAll('.youtube-slider__video');

    for (var i = 0; i < videoAll.length; i++) {
      setupVideo(videoAll[i]);
    }
  }

  function setupVideo(video) {
    var link = video.querySelector('.youtube-slider__link');
    var media = video.querySelector('.youtube-slider__video-embed');
    var button = video.querySelector('.youtube-slider__button');
    var id = parseMediaURL(media);

    video.addEventListener('click', function () {
      var iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('youtube-slider__video--enabled');
  }

  function parseMediaURL(media) {
    var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    var url = media.src;
    var match = url.match(regexp);

    return match[1];
  }

  function createIframe(id) {
    var iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('youtube-slider__video-embed');

    return iframe;
  }

  function generateURL(id) {
    var query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }

  findvideoAll();
});


$(document).ready(function () {
  var CLASSES = {
    tabsJs: 'js-tabs',
    tabsItemJs: 'js-tabs-item',
    tabsContentJs: 'js-tabs-content',

    tabsItemActiveCss: 'tabs__item--active',
    tabsContentActiveCss: 'tabs__content--active',
  };

  function initializeTabs() {
    $(document).on('click', `.${CLASSES.tabsItemJs}`, itemClickHandler);

    function itemClickHandler(e) {
      const $item = $(this);

      const contentId = $item.data('content-id');

      const $tabs = $item.closest(`.${CLASSES.tabsJs}`);
      const $items = $tabs.find(`.${CLASSES.tabsItemJs}`);

      const $contents = $tabs.find(`.${CLASSES.tabsContentJs}`);
      const $content = $contents.filter(`[data-content-id="${contentId}"]`);

      $items.removeClass(`${CLASSES.tabsItemActiveCss}`);
      $contents.removeClass(`${CLASSES.tabsContentActiveCss}`);

      $item.addClass(`${CLASSES.tabsItemActiveCss}`);
      $content.addClass(`${CLASSES.tabsContentActiveCss}`);
    }
  }

  initializeTabs();
})
