const giftData = [
     { name: "Зеркальный фотоаппарат Canon EOS 6D Mark II Body черный", url: "https://www.dns-shop.ru/product/0000069528dbed20/zerkalnyj-fotoapparat-canon-eos-6d-mark-ii-body-cernyj/", image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/34d4535f1ce740f2cdf9ad610576e8e8/74cddf19c5b1d48939e7c2261f5070fb8bc5661c27a451d26f8aeef3a5c0b073.jpg.webp', price: 132499, gender: ["male"], category: ["camera", "electronics"] }, 
     { name: "Пневматический отбойный молоток Concorde CD-MP", url: "https://www.dns-shop.ru/product/000102b6f274aea0/pnevmaticeskij-otbojnyj-molotok-concorde-cd-mp/?ysclid=m4l1nf7hpu802184807", image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/969a25cce1b4deb652de524bb78f4bb9/8abdd2269faa9882fd833a1867067de0681371066d33d244525118d11655a7ca.jpg.webp', price: 2099, gender: ["male"], category: ["tools"] },
     { name: "Смартфон POCO F6 256 ГБ черный", url: "https://www.dns-shop.ru/product/00150eef006fd9cb/667-smartfon-poco-f6-256-gb-cernyj/", image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d3ad6605e6569ad5004c7858b3ba0a1f/fffb16b8b8c9845a31dc1201247834b5d27ea393eea9cc9c1786c2c22a62b97b.jpg.webp', price: 42999, gender: ["teen","male"], category: ["electronics"] },
     { name: "Кастрюля MercuryHaus Turno MC - 1680 1.7 л 16 см серебристый", url: "https://www.dns-shop.ru/product/0003f29dd9d37959/kastrula-mercuryhaus-turno-mc---1680-17-l-16-sm-serebristyj/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/2db004f3c4b6ef0276a7667a3820d3f7/a922dd545dac7f4ed66c22f19fb42f612e008d204b974fa3aa3df14916e22134.jpg.webp", price: 1550, gender: ["female"], category: ["tools"] },
     { name: "Выпрямитель для волос Redmond HS1718", url: "https://www.dns-shop.ru/product/00024f532fc693a1/vypramitel-dla-volos-redmond-hs1718/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/8ae9486d03f5c374c31535a32d17bf8e/17c548815c88be7d850405b06fdc11bc6e811e7b9eb33758a7af4a27a6d4f2b5.jpg.webp", price: 2199, gender: ["female"], category: ["electronics"] },
     { name: "Диск пильный Pit ACTW10 200T24", url: "https://www.dns-shop.ru/product/000268685a23a2ef/disk-pilnyj-pit-actw10-200t24/", image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/635e090a5cd4ead2eb781f68ad694f89/e740bac0ea2555c79d21d2d5ead99ae3241ca796d748d252e345ce6569e719d8.png.webp', price: 499, gender: ["male"], category: ["tools"] },
     { name: "Накладка DF для Apple iPhone", url: "https://www.dns-shop.ru/product/000181384954d21a/nakladka--df-dla-apple-iphone-16-prozracnyj/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/7db3636c8061b2ef39447492e82531f6/b2557b658bbb760348b31ab487e6d8fd6dc992a571f0e7f20ef5b9697ebf3409.jpg.webp", price: 299, category: ["electronics"] },
     { name: "Пилки для лобзика Ураган 159479 4_z02", url: "https://www.dns-shop.ru/product/000aa17a33bdc89d/pilki-dla-lobzika-uragan-159479-4_z02/", image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/cf5d20db061b64db4791b59f6227f8c9/76ef963cc83d5b8470b0daf44844ff21b97365d8c43404e13d86196cf2f99120.jpg.webp", price: 199, gender: ["male"], category: ["tools"] },
     { name: "Конструктор Знаток 320 схем", url: "https://www.dns-shop.ru/product/33c5a492acd33361/konstruktor-znatok-320-skhem/", image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/372086bf748507ead3d3d99bc447417e/da04a43052a7975752243705ea8b217e87819c9f488bf264e06129b1f89af286.jpg.webp", price: 6299, gender: ["teen"], category: ["electronics", "toys"] },
     { name: "Игра настольная Руммикуб: Без границ (мини)", url: "https://www.dns-shop.ru/product/6bfc254a29a93332/igra-nastolnaa-rummikub-bez-granic-mini/", image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/338c78859f942e75a6365477fad02a77/3f21e30d6280d5cda6825d171ae628424b8a95de8e7b5be2be37a188bd1df5c3.jpg.webp", price: 1499, gender: ["teen"], category: ["toys"] },
     { name: "Игра настольная 'Горыныч. жги!'", url: "https://www.dns-shop.ru/product/d08c41984069ed20/igra-nastolnaa-gorynyc-zgi/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/b8ca57c0a3d92385f6f1c3a0bd3362dc/a16b9d00163a70f7c1d099e7da0837d722d4a26168c6a604458dfc4427c839b7.jpg.webp", price: 1299, gender: ["teen"], category: ["toys"] },
     { name: "Детские часы Кнопка Жизни Aimoto Teen розовый", url: "https://www.dns-shop.ru/product/cc35461863c2ed20/detskie-casy-knopka-zizni-aimoto-teen-rozovyj/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/ac6356c6d8cef0921d1c8f610562c79d/261701e2eb78a54d6cadc4fffa93b4494a7b654dc35bf7509f863cb3ca64ebd1.jpg.webp", price: 4499, gender: ["teen"], category: ["toys","electronics"] },
     { name: "Детские часы Philips W6610 розовый", url: "https://www.dns-shop.ru/product/c8349330156ded20/detskie-casy-philips-w6610-rozovyj/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/951690b58d2b76f4e022bc55426a962f/8f496d6ab0b053aff3fa893b71fa6f83369921fc5d374cea7794f480bc82a5d1.jpg.webp", price: 5499, gender: ["teen"], category: ["toys","electronics"] },
     { name: "Фитнес-браслет Xiaomi Mi Smart Band 7", url: "https://www.dns-shop.ru/product/557bfea3ccfeed20/fitnes-braslet-xiaomi-mi-smart-band-7/", image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/653cf4cfb7d7f5b4a925decf561fc8bf/095b1ce49336291249c6db12e7b859ead737aadb6589c102712116c2d47337fa.png.webp", price: 3599, gender: ["teen"], category: ["toys"] },
     { name: "Игровая консоль PlayStation 4 Slim", url: "https://www.dns-shop.ru/product/d8f716e97ac1ed20/igrovaa-konsol-playstation-4-slim/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/2e00de8b4786143bcdfb6f8a5edbcc62/23ef531b89e6e0608e5ad56c97bf6fef5ef5f497ee9f4c6276e995ef2d00c494.jpg.webp", price: 42999, gender: ["teen","male"], category: ["toys","electronics"] },
     { name: "Игровая консоль PlayStation 5 Pro", url: "https://www.dns-shop.ru/product/5fa978af7f93d0a4/igrovaa-konsol-playstation-5-pro/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/fc529417cd5f3c0b77a0a2bb6c64b73b/7f8d3527a7ba71b54aa6cd905a1b7a3e91aa4674e97c39e2d922e1c16abdedb1.png.webp", price: 124999, gender: ["teen","male"], category: ["toys","electronics"] },
     { name: "Гриль Tefal Optigrill+ XL GC724D12 серебристый", url: "https://www.dns-shop.ru/product/dcd5609499923332/gril-tefal-optigrill-xl-gc724d12-serebristyj/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/19eb77ccd1ec42e4e56fdb2e6c27640c/db4a29bb198a263874cffcf64dfdfcdb91431bc0f0bb98e58776152e63a715ae.jpg.webp", price: 23999, gender: ["male"], category: ["electronics"] },
     { name: "Фен Dyson Supersonic HD07 синий/розовый", url: "https://www.dns-shop.ru/product/ee9cb09d9fb9ed20/fen-dyson-supersonic-hd07-sinijrozovyj/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/15e1d67a8c3e6a4ae143bcbaf309d9d2/bbd34dc567e0745e2d80ad91e3b3d0eaeb3605f036c6d2e1c19547f3f5de0103.png.webp", price: 49999, gender: ["female"], category: ["electronics"] },
     { name: "Смартфон Apple iPhone 16 Pro Max 256 ГБ бежевый", url: "https://www.dns-shop.ru/product/36556b356f27d0a4/69-smartfon-apple-iphone-16-pro-max-256-gb-bezevyj/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/0765718a0de075eeb7b70e870b0a4287/a571943317c536941223f6847b2cff2535f6f8d1b34c49ce598d8fdcae0573ac.jpg.webp", price: 179999, gender: ["female"], category: ["electronics"] },
     { name: "Смарт-часы Apple Watch Series 9 45mm", url: "https://www.dns-shop.ru/product/aee334d6529aed20/smart-casy-apple-watch-series-9-45mm/", image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/8c0cacdb324559ebbe7111d4e41cd08e/be2b403154d64a8a9a863d0b5b079855d160e90fea21761a804205964d1a0222.jpg.webp", price: 47999, gender: ["female"], category: ["electronics"] },
     { name: "11' Планшет Apple iPad Pro (M4) Wi-Fi 256 ГБ черный", url: "https://www.dns-shop.ru/product/9959f2820d09d21a/11-planset-apple-ipad-pro-m4-wi-fi-256-gb-cernyj/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/030e02ab655ce8f32f7c6cee9743cd36/e7dd3b323f32018ecda98ae10f440a43808b9bec8311f42b345483189b5eee39.jpg.webp", price: 119999, gender: ["female"], category: ["electronics"] },
     { name: "Электрическая зубная щетка Braun Oral-B Pro 3", url: "https://www.dns-shop.ru/product/890e0922d7f3d763/elektriceskaa-zubnaa-setka-braun-oral-b-pro-3d5055133-goluboj/", image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/1a2b3c66c896b288940e81b26523b74f/9eb0ba419ed1f868bf9d72327c1f48d95e459697eed30f2d7f4872cdcd66a961.jpg.webp", price: 6199, gender: ["female"], category: ["electronics"] },
     { name: "Дрель-шуруповерт CAT DX11", url: "https://www.dns-shop.ru/product/937e94c520d3ed20/drel-surupovert-cat-dx11-1-for-all-18v/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/4abdf0c60226d7be0bdabef7493ac795/85889f9b93ed835711232f2b793335661754ad86dbcefb5a55b01f0bd3f0b33e.jpg.webp", price: 15599, gender: ["male"], category: ["tools","electronics"] },
     { name: "Игра EA Sports FC 25 (PS5)", url: "https://www.dns-shop.ru/product/f4341eb670e1d0a4/igra-ea-sports-fc-25-ps5/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/f04d4e1a442498bf19c86bc0d09a9974/bebaf46c1d7d7ae2b2837dea5ae1e070a6aa704486bb7196c6a21ca32f8f65d3.png.webp", price: 8499, gender: ["male"], category: ["electronics"] },
     { name: "Смарт-часы Xiaomi Watch S3", url: "https://www.dns-shop.ru/product/08df6b15a082ed20/smart-casy-xiaomi-watch-s3/", image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/d9d6e15c178d02222a10ea7fc3120f00/6c195a1e30832d13f17c41f39edd936c40620d7221d2fe51f9116b83f26f9ddb.jpg.webp", price: 14999, gender: ["male"], category: ["tools","electronics"] },

    ];
function formatPrice(price) {
  return price.toLocaleString('ru-RU') + ' ₽';
}

function displayGifts(gifts) {
  const giftList = document.getElementById('giftList');
  giftList.innerHTML = '';

  if (gifts.length === 0) {
    giftList.innerHTML = "<li>Ничего не найдено</li>"
  } else {
    gifts.forEach(gift => {
      const listItem = document.createElement('li');
      listItem.classList.add('gift-item');
      listItem.innerHTML = `
                    <img src=${gift.image}>  <a href="${gift.url}">${gift.name}</a> - ${gift.price ? formatPrice(gift.price) : "Цена не указана"}
                  `;
      giftList.appendChild(listItem);
    });
  }
}

const questions = [
  {
    text: "Для кого подарок?",
    options: [
      { text: "Для мужчины", filter: gift => gift.gender?.includes("male") || !gift.gender },
      { text: "Для женщины", filter: gift => gift.gender?.includes("female") || !gift.gender },
      { text: "Для ребенка", filter: gift => gift.gender?.includes("teen") || !gift.gender },
      { text: "Не важно", filter: gift => true }
    ]
  },
  {
    text: "Какой бюджет?",
    options: [  
      { text: "До 5000 ₽", filter: gift => gift.price <= 5000 || !gift.price },
      { text: "От 5000 до 20000 ₽", filter: gift => gift.price > 5000 && gift.price <= 20000 || !gift.price },
      { text: "Свыше 20000 ₽", filter: gift => gift.price > 20000 || !gift.price },
      { text: "Не важно", filter: gift => true }
    ]
  },
  {
    text: "Какое хобби или увлечение у получателя?",
    options: [
      { text: "Фотография/видео", filter: gift => gift.category?.includes("camera") || !gift.category },
      { text: "Вещи", filter: gift => gift.category?.includes("tools") || !gift.category },
      { text: "Электроника/гаджеты", filter: gift => gift.category?.includes("electronics") || !gift.category },
      { text: "Детские товары", filter: gift => gift.category?.includes("toys") || !gift.category },
      { text: "Не знаю/разное", filter: gift => true }
    ]
  }
];

let currentQuestionIndex = 0;
let filteredGifts = [...giftData];

function showQuestion() {
  const questionArea = document.getElementById("questionArea");

  const currentQuestion = questions[currentQuestionIndex];
  questionArea.innerHTML = `<div class="question">${currentQuestion.text}</div><div class="options"></div>`;
  const optionsArea = questionArea.querySelector('.options');

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.className = "option-button";
    button.addEventListener("click", () => {
      filteredGifts = filteredGifts.filter(option.filter);
      nextQuestion();
    });
    optionsArea.appendChild(button);
  });
}

function nextQuestion() {
  const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
  const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
  filteredGifts = filteredGifts.filter(gift => (gift.price ?? 0) >= minPrice && (gift.price ?? Infinity) <= maxPrice);

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    document.getElementById("nextQuestion").disabled = true;
  } else {
    displayGifts(filteredGifts); 
    document.getElementById("questionArea").innerHTML = "";
    document.getElementById("nextQuestion").style.display = "none";
    currentQuestionIndex = 0;
  }
}


const searchTypeRadios = document.querySelectorAll('input[name="searchType"]');
searchTypeRadios.forEach(radio => {
  radio.addEventListener('change', () => {

    if (radio.id === 'questionSearch') {
      currentQuestionIndex = 0;
      filteredGifts = [...giftData];
      showQuestion();
      document.getElementById("giftList").innerHTML = ""; //Очищаем результаты предыдущего поиска
    } else {
      document.getElementById("questionArea").innerHTML = ""; //Убираем вопросы
      document.getElementById("giftList").innerHTML = ""; //Очищаем результаты поиска по вопросам
    }
  });
});

showQuestion();// Показываем первый вопрос при загрузке страницы, если выбран поиск по вопросам.
