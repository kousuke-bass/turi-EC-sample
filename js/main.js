$(function(){
//初期値
const page_type =$('.contents').attr('id');
const param_value = location.search.substring(1).split('=')[1];//＝バス釣りとか、カテゴリー検索
const param_key = location.search.substring(1).split('=')[0];//=categoryとか、カテゴリー検索
const categorys=['バス釣り','マス釣り','海釣り'];
let more_count ={
  'brand':3, //３ずつ増えていく
  'items':3//4個ずつ増えていく
}



//データから受け取った物をHTML化（工場）
//オブジェクトをHTMLに変換
//返り血：html
function createDom(items,delate_btn_flg = null){
  let html_template='';
  let delate_dom='';
 if(delate_btn_flg){
delate_dom='<div class="cart-delate"><img src="./image/icon_delete.svg"></div>';
 }
  items.forEach(function(item,index){
    html_template+=`<li class="item" data-item-id="${item['id']}">
        <a href="item-html/index.html?id=${item['id']}">
          <div class="item-cap"><img src="item/${item['id']}.jpg" loading="lazy"></div>
          <div class="item-info">
            <h3 class="item-name">${item['name']}</h3>
            <h3 class="item-text">${item['text']}</h3>
            <div class="item-price">¥${item['price']}</div>
          </div>
        </a>
      ${delate_dom}
      </li>`;
  });
  return html_template;
}

//フリーワード検索
//検索機能　金額
function searchWordShow(){
  let result_text='';

//金額を選択した場合
  if(param_key == 'price'){
 result_text = `~${param_value}円`;
 $(`.price-select option[value="${param_value}"]`).prop('selected',true);
  }
  else{
      result_text=param_value;
  }
  //list.html?category=バス釣りこういうのが入る
  $('.result-text').text(decodeURI(result_text));
}

//NEWの物だけど返す
//categoryの中を区別して返す
//例　key=category, value=バス釣り
//カテゴリー検索
function getItemlist(key,value=null){
  const  search_value = value?value :param_value;//カテゴリー検索
　console.log(search_value);
  const freewords=['name','text'];//フリーワード検索

  const items=item_data.filter(function(item,index){
    switch(key){
    case 'brand'://ブランド検索
    case 'category':
     return item[key] == decodeURI(search_value);//カテゴリー検索
     break;

    case 'freeword'://フリーワード検索
    return freewords.find(function(freeword){
     return  item[freeword].indexOf(decodeURI(param_value)) !== -1;
    });
    break;

    case 'price'://検索機能　金額
    return item['price'] <= search_value;
    break;

    case 'new':
     return item['new']
     break;
  }
  });
  searchWordShow();//フリーワード検索
  return items;
}


//シャッフル(工場)
function pickUpShuffle(item_data){
  let items=[];
  let rand_check =[];
  for(let i = 0; i < 4; i++ ){
    //アイテムデータ36個の中でランダムに整数の値を出す
     let j = Math.floor(Math.random() * item_data.length);
     if(rand_check.indexOf(j) !== -1){
       i--;
       continue;
     }else{
       rand_check.push(j);
       //ランダムの中にどんどんデータを入れていく
       items.push(item_data[j]);
       //アイテムの中にどんどんデータを入れていく
     }
  }
  return items;
}

//もっと見る（工場）
function moreControl(el,num){
 const more_type =$(el).attr('data-more-btn');
 const target_list = $(`[data-more-list="${more_type}"]`);
 const max_count = target_list.find('li').length;
 more_count[more_type]+=num;
target_list.find(`li:lt(${more_count[more_type]})`).fadeIn();
if( more_count[more_type] >= max_count){
  $(el).hide();
}
}

//詳細画面の取得(工場)
function getItemSignal(){
return item_data.find(function(item){
   return item['id'] == param_value;
  });
}

//ストレージ１
function doneFlash(text){
  $('body').append(`<div class="flash">${text}</div>`);
  setTimeout(function(){
    location.reload();
  },2000);
}

//ストレージ１
//被ったら消す　被らなかったら追加
function storageControl(id,storage_type){
let storage_data = JSON.parse(localStorage.getItem(`ninco_${storage_type}`));
id = Number(id);//整数
if(storage_data == null){
  storage_data = [id];

}else{
//なんかデータが入っていた場合
//例　id=35が入っていたら消します　違うなら追加します
 if(storage_data.indexOf(id) !==-1){
   storage_data.splice(storage_data.indexOf(id),1);
 }else{
   storage_data.push(id);
 }
}
localStorage.setItem(`ninco_${storage_type}`,JSON.stringify(storage_data));
}

//ストレージ１
//配列が入っていたら、その配列を返しますよ
function storageSaveJudge(id,storage_type){
 let storage_data = JSON.parse(localStorage.getItem(`ninco_${storage_type}`));
 id = Number(id);
 if(storage_data !==null){
   return storage_data.indexOf(id) !==-1;
 }
}

//TOPSLIDER
  $('.top-slider').slick({
    arrows:true,
    autoplay:true,
    dots:true,
    speed:1500,
    easing:'swing',
    centerMode:true,
    centerPadding:'15%',
    infinite:true,
   prevArrow:'<div class="slide-btn prev-btn"></div>',
   nextArrow:'<div class="slide-btn next-btn"></div>',
   responsive:[{
     breakpoint:768,
     settings:{
       centerPadding:'0%',
       slidesToShow:1,
       slideToScroll:1,
       autoplay:true,
     }
   }
 ]
  });



//カラーの選択
$('.item-color-list li').on('click',function(){
  const select_color = $(this).text();

$(this).addClass('is-active');
$(this).siblings('li').removeClass('is-active');
$('.item-color-select span').text(select_color);
});

//レビューの選択
let review_num=0;
$('.review li').on('click',function(){
if(review_num === $('.review li').index(this)+1){
  $('.review li').removeClass('is-active');
  review_num=0;
}else{
  review_num=$('.review li').index(this)+1;
    $('.review li').removeClass('is-active');
    $(`.review li:lt('${review_num}')`).addClass('is-active');
}
});

//商品の説明文表示　アコーディオン
$('[data-accordion="trigger"]').on('click',function(){
  $(this).toggleClass('is-active');
  $(this).next().slideToggle();
});

//もっとみる
$('[data-more-btn="brand"]').on('click',function(){
moreControl($(this),5);
});

$('[data-more-btn="items"]').on('click',function(){
moreControl($(this),5);
});

$('.word-search').focus(function(){
  $(this).addClass('is-cursor');
}).blur(function(){
  $(this).removeClass('is-cursor');
})

//モーダル
$('.controls-cart').on('click',function(e){
  e.preventDefault();
 $('.modal-wrap').fadeToggle();
 $('.header-right,.controls').removeClass('is-active');

});

$('.modal-close, .modal-wrap').on('click',function(e){
$('.modal-wrap').fadeOut();
});

//カートに追加
$('.btn--cart').on('click',function(){
  const item_id = $(this).parents('.item-detail').attr('data-item-id')
  storageControl(item_id,'cart');
  if(storageSaveJudge(item_id,'cart')){
    doneFlash('カートに追加しました');
  }else{
    doneFlash('カートから外しました');
  }
});

//カートに入れたアイテムを生成
//カートの合計金額
const cart_strage=JSON.parse(localStorage.getItem('ninco_cart'));
if(cart_strage !==null){
  let cart_price = 0;
  const cart_items = item_data.filter(function(item){
    if(cart_strage.indexOf(item['id'])!==-1){
      cart_price += item['price'];
      return item;
    }
  });
  //カートの合計金額の出力
  $('.cart-total-price').text(cart_price+'円');
  //カートの合計点数の出力
  $('.cart-total-num, .cart-batch').text(cart_strage.length);

  if(cart_strage.length<=0){
    $('.cart-batch').hide();
  }
  $('#cart-list').append(createDom(cart_items, true));
}else{
  $('.cart-batch').hide();
}

//お気に入りに追加
$('.btn--fav').on('click',function(){
  const item_id = $(this).parents('.item-detail').attr('data-item-id')
//例　idが２が入ってないなら追加　２が入って入れば外します
  storageControl(item_id,'fav');
//例　idが２なら追加します　２じゃなければ外します
  if(storageSaveJudge(item_id,'fav')){
doneFlash('お気に入りに追加しました');
  }else{
  doneFlash('お気に入りから外しました');
  }
});





//カートからアイテムを削除
$('body').on('click','.cart-delate',function(){
  if(confirm('本当に解除していいですか？')){
    const item_id=$(this).parent('[data-item-id]').attr('data-item-id');
    storageControl(item_id,'cart');
    setTimeout(function(){
      location.reload();
    },200);
  }
});

//購入ボタンを押した時の処理
$('.btn--buy').on('click',function(){
if(confirm('購入していいですか？')){
  localStorage.removeItem('ninco_cart');
  alert('購入しました');
}
});

//お気に入りに入れたアイテムの生成
const fav_strage=JSON.parse(localStorage.getItem('ninco_fav'));
if(fav_strage !==null){
  const fav_items = item_data.filter(function(item){
    if(fav_strage.indexOf(item['id'])!==-1){
      return item;
    }
  });
  $('[data-item-list="fav"]').append(createDom(fav_items));

  //お気に入りのSLIDER
  const fav_slide_count=$(window).width()>=768?5:3;
  if(fav_items.length>fav_slide_count){
    $('[data-item-list="fav"]').slick({
      arrows:true,
      autoplay:true,
      dots:false,
      speed:1500,
      easing:'swing',
     slidesToShow:5,
     slidesToScroll:1,
     prevArrow:'<div class="slide-btn prev-btn"></div>',
     nextArrow:'<div class="slide-btn next-btn"></div>',
     responsive:[{
       breakpoint:768,
       settings:{
         centerPadding:'0%',
         slidesToShow:1,
         slideToScroll:1,
       }
     }
    ]
    });
}
}


//もしページタイプのIDがページインデックスなら
//c-sectionの中身（new.category,...の表示）
if(page_type == 'page-index'){
  let item_list_new = getItemlist('new');
  $('[data-item-list="new"]').append(createDom(item_list_new));
  categorys.forEach(function(category){
    let item_list_category = getItemlist('category',category);
    item_list_category=createDom(item_list_category);
  $(`[data-item-list="${category}"]`).append(item_list_category);
  })
}

//puckUPに詳細をcreateDom
let item_list_pickup =createDom(pickUpShuffle(item_data));
$('[data-item-list="pickup"]').append(item_list_pickup);


//カテゴリー検索
if(page_type == 'page-list'){
  const item_list=createDom(getItemlist(param_key));
  $('.sort-list').append(item_list);
  $('.price-select').on('change',function(){
    $('#price-form').submit();
  });
}

//詳細画面の取得
//拡大画像
if(page_type == 'page-detail'){
  const item_detail = getItemSignal();
  Object.keys(item_detail).forEach(function(key){
    console.log(key);
    $(`[data-item-parts="${key}"]`).text(item_detail[key]);
  });

//拡大画像
$('#data-image').attr('src',`./image/item/${item_detail['id']}.jpg`);
$('#data-image').attr('data-zoom-image', `./image/item/${item_detail['id']}_l.jpg`);

//NEWの取り外し
  if(!item_detail['new']){
    $('.new-label').remove();
  }

if(storageSaveJudge(item_detail['id'],'cart')){
  $('.btn--cart').addClass('is-storage');
}

if(storageSaveJudge(item_detail['id'],'fav')){
  $('.btn--fav').addClass('is-storage');
}
//ストレージ１
$('.item-detail').attr('data-item-id', item_detail['id']);
$('[data-zoom-image]').elevateZoom({
  zoomType : "inner",
  });
}

$('.menu-btn').on('click',function(){
  $('.menu-btn').toggleClass('is-active');

  let menu_text = $('.menu-btn').hasClass('is-active');
  if(menu_text){
    $('.menu-btn').text('CLOSE');
  }else{
    $('.menu-btn').text('MENU');
  }
  $('.header-right,.controls').toggleClass('is-active');
});


});


//スクロールした時の実装
$(window).on("scroll",function(){
//フェードイン
$('[data-fadeIn]').each(function(index,el){
  console.log($(window).scrollTop());
  if($(window).scrollTop()>($(el).offset().top-$(window).height())){
    $(el).addClass('is-over');
  }
});

//ころりん
if($(window).scrollTop()>300){
  $('.circle-banner').addClass('is-over');
}
else{
  $('.circle-banner').removeClass('is-over');

}


});



//ローディング
$(window).on("load",function(){
setTimeout(function(){
  $('.loader').fadeOut();
},600)

});
