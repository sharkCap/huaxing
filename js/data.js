let list = [];

function getList(type) {
  let str = '';

  if (!type) {
    $('.zy-list h2').html('产品中心');

    list = [];

    list.push(
      {
        title: '首页产品1',
        image: './img/company.jpg',
        info: [
          {
            subTitle: '这是商品一的功能1',
            image: './img/panzi.jpg',
            info: '这是商品一的功能一的介绍'
          },

          {
            subTitle: '这是商品二的功能1',
            image: './img/company.jpg',
            info: '这是商品二的功能二的介绍'
          },

          {
            subTitle: '这是商品三的功能1',
            image: './img/company.jpg',
            info: '这是商品三的功能三的介绍'
          }
        ]
      },
      {
        title: '首页产品2',
        image: './img/company.jpg',
        info: [
          {
            subTitle: '这是商品一的功能1',
            image: './img/panzi.jpg',
            info: '这是商品一的功能一的介绍'
          },

          {
            subTitle: '这是商品二的功能1',
            image: './img/company.jpg',
            info: '这是商品二的功能二的介绍'
          },

          {
            subTitle: '这是商品三的功能1',
            image: './img/company.jpg',
            info: '这是商品三的功能三的介绍'
          }
        ]
      },
      {
        title: '首页产品3',
        image: './img/company.jpg',
        info: [
          {
            subTitle: '这是商品一的功能1',
            image: './img/panzi.jpg',
            info: '这是商品一的功能一的介绍'
          },

          {
            subTitle: '这是商品二的功能1',
            image: './img/company.jpg',
            info: '这是商品二的功能二的介绍'
          },

          {
            subTitle: '这是商品三的功能1',
            image: './img/company.jpg',
            info: '这是商品三的功能三的介绍'
          }
        ]
      }
    );
  }

  if (type == 1) {
    $('.zy-list h2').html('汽车行业');

    list = [];

    list.push(
      {
        title: '111商品一',
        info: '这是商品一的介绍',
        image: './img/panzi.jpg'
      },

      {
        title: '111商品二',
        info: '这是商品二的介绍',
        image: './img/panzi.jpg'
      },

      {
        title: '111商品三',
        info: '这是商品三的介绍',
        image: './img/panzi.jpg'
      }
    );
  }

  if (type == 2) {
    $('.zy-list h2').html('电子行业');

    list = [];

    list.push(
      {
        title: '222商品一',
        info: '这是商品一的介绍',
        image: './img/panzi.jpg'
      },

      {
        title: '222商品二',
        info: '这是商品二的介绍',
        image: './img/panzi.jpg'
      },

      {
        title: '222商品三',
        info: '这是商品三的介绍',
        image: './img/panzi.jpg'
      }
    );
  }

  console.log(list);

  list.forEach((item, index) => {
    str += ` <li data-id="${index}">
              <a href="javascript:;">
                <img src="${item.image}" alt="${item.title}"/> 
                <p>${item.title}</p> 
              </a>
            </li> `;
  });
  str += '<div class="clearfix"></div>';
  $('.product-list').html(str);
}

$('.product-list').on('click', 'li', function () {
  const id = $(this).data('id');

  localStorage.setItem('productInfo', JSON.stringify(list[id]));
  window.location.href = './detail.html';
});
