const item_data = [
  {
    'id':2,
    'name':'スプーン',
    'category':'マス釣り',
    'price':200,
    'text':'格安スプーンです!ロストを恐れずどこでも投げれます!',
    'brand':'スプーン',
    'new':true,
  },
  {
    'id':3,
    'name':'クランク',
    'category':'バス釣り',
    'price':800,
    'text':'ミドルレンジのクランクです！ボトムに当てて使うのに適しています',
    'brand':'クランク',
    'new':false,
  },
  {
    'id':4,
    'name':'ミノー',
    'category':'海釣り',
    'price':1200,
    'text':'海釣りでは定番のルアーです！海以外にも使えると噂も、、、',
    'brand':'ミノー',
    'new':true,
  },
  {
    'id':5,
    'name':'クランク',
    'category':'バス釣り',
    'price':300,
    'text':'あの有名ルアーに似ている形だが、果たして性能は、、、',
    'brand':'クランク',
    'new':true,
  },
  {
    'id':6,
    'name':'ミノー',
    'category':'海釣り',
    'price':900,
    'text':'海釣りでは定番のルアーです！海以外にも使えると噂も、、、',
    'brand':'ミノー',
    'new':false,
  },
  {
    'id':7,
    'name':'クランク',
    'category':'バス釣り',
    'price':900,
    'text':'膨張色のルアー、濁った場所でも実は効果があるらしい',
    'brand':'クランク',
    'new':false,
  },
  {
    'id':8,
    'name':'ミノー',
    'category':'海釣り',
    'price':700,
    'text':'定番のマッドホットタイガー！ボックスに一つは入れましょう！',
    'brand':'ミノー',
    'new':true,
  },
  {
    'id':9,
    'name':'クランク',
    'category':'バス釣り',
    'price':900,
    'text':'小粒だけどアピールは絶大！ビックバスを引き寄せます！',
    'brand':'クランク',
    'new':false,
  },
  {
    'id':10,
    'name':'クランク',
    'category':'バス釣り',
    'price':800,
    'text':'超派手なカラー！かなりのアピール力を持ったルアーです！',
    'brand':'クランク',
    'new':true,
  },
  {
    'id':11,
    'name':'クランク',
    'category':'バス釣り',
    'price':1200,
    'text':'ディープクランクです！かなりの深さまで潜ります！',
    'brand':'クランク',
    'new':false,
  },
  {
    'id':12,
    'name':'クランク',
    'category':'バス釣り',
    'price':1500,
    'text':'ディープクランクです！かなりの深さまで潜ります！',
    'brand':'クランク',
    'new':false,
  },
  {
    'id':13,
    'name':'バイブレーション',
    'category':'バス釣り',
    'price':700,
    'text':'圧倒的サウンドで、遠くにいるバスにもしっかりアピールします',
    'brand':'バイブレーション ',
    'new':true,
  },
  {
    'id':14,
    'name':'ミノー',
    'category':'海釣り',
    'price':600,
    'text':'遠投性能に優れており、遠くの魚にもしっかりアピールします',
    'brand':'ミノー',
    'new':true,
  },
  {
    'id':15,
    'name':'クランク',
    'category':'バス釣り',
    'price':1200,
    'text':'超派手なカラー！かなりのアピール力を持ったルアーです！',
    'brand':'クランク',
    'new':true,
  },
  {
    'id':16,
    'name':'クランク',
    'category':'バス釣り',
    'price':1800,
    'text':'水面直下を引いて、バスにアピールすることができます',
    'brand':'クランク',
    'new':false,
  },
  {
    'id':17,
    'name':'スプーン',
    'category':'マス釣り',
    'price':400,
    'text':'管理釣り場で定番のカラーです！一つは持っておきましょう',
    'brand':'スプーン',
    'new':true,
  },
  {
    'id':19,
    'name':'ミノー',
    'category':'海釣り',
    'price':600,
    'text':'かなりの深場まで潜り、深場の魚を刈りとります',
    'brand':'ミノー',
    'new':true,
  },
  {
    'id':21,
    'name':'ミノー',
    'category':'海釣り',
    'price':900,
    'text':'ナチュラル系の動きで、スレた魚にも効きます',
    'brand':'ミノー',
    'new':true,
  },
  {
    'id':22,
    'name':'メタルバイブ',
    'category':'海釣り',
    'price':500,
    'text':'スレた魚でも反応してしまう、リアくしションの釣りができます',
    'brand':'バイブレーション',
    'new':false,
  },
  {
    'id':23,
    'name':'スプーン',
    'category':'マス釣り',
    'price':300,
    'text':'管理釣り場で定番のカラーです！一つは持っておきましょう',
    'brand':'スプーン',
    'new':true,
  },
  {
    'id':24,
    'name':'メタルバイブ',
    'category':'海釣り',
    'price':700,
    'text':'超派手なカラー！かなりのアピール力を持ったルアーです！',
    'brand':'バイブレーション',
    'new':true,
  },
  {
    'id':25,
    'name':'ミノー',
    'category':'マス釣り',
    'price':600,
    'text':'管理釣り場や、ネイティブでも活躍するルアーです',
    'brand':'ミノー',
    'new':false,
  },
  {
    'id':26,
    'name':'バイブレーション',
    'category':'バス釣り',
    'price':800,
    'text':'超派手なカラー！かなりのアピール力を持ったルアーです！',
    'brand':'バイブレーション',
    'new':true,
  },
  {
    'id':27,
    'name':'ミノー',
    'category':'マス釣り',
    'price':600,
    'text':'管理釣り場や、ネイティブでも活躍するルアーです',
    'brand':'ミノー',
    'new':false,
  },
  {
    'id':28,
    'name':'ビッグベイト',
    'category':'バス釣り',
    'price':2800,
    'text':'巨大なルアーでアピール力抜群！ビッグバスをメロメロにします',
    'brand':'ビッグベイト',
    'new':true,
  },
  {
    'id':29,
    'name':'スピナー',
    'category':'マス釣り',
    'price':400,
    'text':'古くから使われている伝説的ルアーです',
    'brand':'スプーン',
    'new':true,
  },
  {
    'id':30,
    'name':'バイブレーション',
    'category':'バス釣り',
    'price':900,
    'text':'圧倒的サウンドで、遠くにいるバスにもしっかりアピールします',
    'brand':'バイブレーション',
    'new':false,
  },
  {
    'id':31,
    'name':'ミノー',
    'category':'マス釣り',
    'price':800,
    'text':'管理釣り場や、ネイティブでも活躍するルアーです',
    'brand':'ミノー',
    'new':true,
  },
  {
    'id':32,
    'name':'ミノー',
    'category':'マス釣り',
    'price':400,
    'text':'古くから使われている伝説的ルアーです',
    'brand':'ミノー',
    'new':true,
  },
  {
    'id':33,
    'name':'ビッグベイト',
    'category':'バス釣り',
    'price':3200,
    'text':'巨大なルアーでアピール力抜群！ビッグバスをメロメロにします',
    'brand':'ビッグベイト',
    'new':false,
  },
  {
    'id':34,
    'name':'スプーン',
    'category':'マス釣り',
    'price':400,
    'text':'管理釣り場では一つは絶対に持ってないとダメなルアーです',
    'brand':'スプーン',
    'new':true,
  },
  {
    'id':35,
    'name':'バイブレーション',
    'category':'バス釣り',
    'price':900,
    'text':'圧倒的サウンドで、遠くにいるバスにもしっかりアピールします',
    'brand':'バイブレーション',
    'new':false,
  },
  {
    'id':36,
    'name':'ビッグベイト',
    'category':'バス釣り',
    'price':3200,
    'text':'存在感抜群の大きさで、遠くの魚も引き寄せます',
    'brand':'ビッグベイト',
    'new':true,
  },
  {
    'id':37,
    'name':'ポッパー',
    'category':'バス釣り',
    'price':1200,
    'text':'圧倒的サウンドで、遠くにいるバスにもしっかりアピールします',
    'brand':'トップウォーター',
    'new':true,
  },
  {
    'id':38,
    'name':'クランク',
    'category':'バス釣り',
    'price':1000,
    'text':'有名メーカーのクランクです！',
    'brand':'クランク',
    'new':false,
  },
  {
    'id':40,
    'name':'ノイジー',
    'category':'バス釣り',
    'price':500,
    'text':'バスにはもちろん、ナマズにも使えます',
    'brand':'トップウォーター',
    'new':false,
  },
  {
    'id':41,
    'name':'シャッドワーム',
    'category':'バス釣り',
    'price':300,
    'text':'シャッドに似せたワームです',
    'brand':'ワーム',
    'new':true,
  },
  {
    'id':42,
    'name':'プロップ',
    'category':'バス釣り',
    'price':900,
    'text':'バスにはもちろん、ナマズにも使えます',
    'brand':'トップウォーター',
    'new':false,
  },
  {
    'id':43,
    'name':'ストレートワーム',
    'category':'バス釣り',
    'price':700,
    'text':'ノーシンカー、ジグヘッド、色んなリグに対応できます',
    'brand':'ワーム',
    'new':true,
  },
  {
    'id':44,
    'name':'ペンシルベイト',
    'category':'バス釣り',
    'price':900,
    'text':'バスにはもちろん、ナマズにも使えます',
    'brand':'トップウォーター',
    'new':false,
  },
  {
    'id':45,
    'name':'ポッパー',
    'category':'バス釣り',
    'price':900,
    'text':'バスにはもちろん、ナマズにも使えます',
    'brand':'トップウォーター',
    'new':true,
  },
  {
    'id':46,
    'name':'ポッパー',
    'category':'バス釣り',
    'price':1200,
    'text':'バスにはもちろん、ナマズにも使えます',
    'brand':'トップウォーター',
    'new':false,
  },
  {
    'id':47,
    'name':'ストレートワーム',
    'category':'バス釣り',
    'price':300,
    'text':'ノーシンカー、ジグヘッド、色んなリグに対応できます',
    'brand':'ワーム',
    'new':false,
  },
  {
    'id':48,
    'name':'バイブレーション',
    'category':'海釣り',
    'price':900,
    'text':'圧倒的サウンドで、遠くにいるバスにもしっかりアピールします',
    'brand':'バイブレーション',
    'new':false,
  },
  {
    'id':49,
    'name':'スピナーベイト',
    'category':'バス釣り',
    'price':900,
    'text':'ブレードをキラキラさせてバスにアピールします',
    'brand':'ワイヤーベイト',
    'new':true,
  },
  {
    'id':50,
    'name':'スピナーベイト',
    'category':'バス釣り',
    'price':900,
    'text':'ブレードをキラキラさせてバスにアピールします',
    'brand':'ワイヤーベイト',
    'new':false,
  },
  {
    'id':51,
    'name':'スピナーベイト',
    'category':'バス釣り',
    'price':900,
    'text':'ブレードをキラキラさせてバスにアピールします',
    'brand':'ワイヤーベイト',
    'new':false,
  },
  {
    'id':52,
    'name':'スピナーベイト',
    'category':'バス釣り',
    'price':900,
    'text':'ブレードをキラキラさせてバスにアピールします',
    'brand':'ワイヤーベイト',
    'new':false,
  },
]
