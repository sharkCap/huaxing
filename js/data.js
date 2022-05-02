let list = [];

function getList(type) {
  let str = '';

  if (!type) {
    $('.zy-list h2').html('产品中心');

    list = [];

    list.push(
      {
        title: '金刚石研磨膏',
        image: './img/company.jpg',
        info: [
          {
            subTitle: '产品介绍',
            image: './img/company.jpg',
            info: '金刚石研磨膏是用金刚石微粉和相应的配剂精细配制的一种研磨抛光材料，适用于硬质合金、陶瓷、宝石、磁性材料以及模具、量具、刃具等高硬度材料加工和修磨。具有研磨效率高，加工表面质量好，使用方便等特点。'
          },

          {
            subTitle: '包装',
            info: '管装、袋装、盒装'
          },
          {
            subTitle: '规格',
            info: '5g、10g、30g、100g 等'
          },
          {
            info: '可根据用户要求定制，可提供立方氮化硼研磨膏'
          }
        ]
      },
      {
        title: '钻石砂轮',
        image: './img/zuanshi.jpg',
        info: [
          {
            subTitle: '平行陶瓷金刚石砂轮',
            image: './img/zuanshi.jpg',
            info: '广泛应用于钻石的加工，适用钻石的打磨抛光，具有金刚石和陶瓷结合剂的共同特点'
          },

          {
            subTitle: '特点',
            info: '与普通刚玉、碳化硅磨具相比，它的磨削力强，磨削时温度比较低，磨具磨损比较小；可以适应各种冷却液的作用；磨削时磨具的形状保持性好，磨出工件的精度高；磨具内有较多的气孔，磨削时有利于排屑和散热，不易堵塞、不易烧伤工件；磨具的自锐性比较好，修整间隔的时间长，修整比较容易。因此陶瓷结合剂金刚石磨具在国外一些发达国家的使用日益增多。'
          },

          {
            subTitle: '常用的粒度：',
            info: 'D20 D40 D60 325/400'
          }
        ]
      },
      {
        title: '金刚石/CBN陶瓷研磨盘',
        image: './img/mopan.jpg',
        info: [
          {
            subTitle: '介绍',
            image: './img/mopan.jpg',
            info: '主要用于研磨零件的平面，适用硬脆材料，加工黑色金属，铸铁，粉末冶金，硬质合金等 。可以广泛用于液压气动元件，液压马达部件，汽车燃油泵部件，制冷压缩机零部 部件、油嘴零件、发动机零部件，高精密轴承滚柱及套圈，密封件，活塞环，硬质合金刀片等产品的双面研磨加工。'
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
