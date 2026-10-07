// Real Immerse content (article, podcast dialogue, culture note) at A2 level.
export type ImmItem = { type: 'Article' | 'Podcast' | 'Culture'; title: string; duration: string; level: string; text: string; englishTitle: string };
const A = (title: string, englishTitle: string, text: string): ImmItem => ({ type: 'Article', title, duration: '3 min', level: 'A2', text, englishTitle });
const P = (title: string, englishTitle: string, text: string): ImmItem => ({ type: 'Podcast', title, duration: '5 min', level: 'A2', text, englishTitle });
const C = (title: string, englishTitle: string, text: string): ImmItem => ({ type: 'Culture', title, duration: '2 min', level: 'A2', text, englishTitle });

export const IMMERSE_1: Record<string, ImmItem[]> = {
  ja: [
    A('京都の一日', 'A Day in Kyoto', '京都は日本の古い町です。先週の日曜日、私は金閣寺と清水寺を見に行きました。とても天気がよかったので、たくさん歩きました。昼ごはんに小さい店でおそばを食べました。おそばはとてもおいしかったです。夜は友だちと一緒に町を散歩しました。京都の夜は静かできれいです。すばらしい旅行でした。'),
    P('市場でシャツを買う', 'Buying a Shirt at the Market', 'A：すみません、この青いシャツはいくらですか。\nB：三千円です。\nA：ちょっと高いですね。安くなりますか。\nB：このズボンも買えば、四千円にします。\nA：いいですね。試着室はどこですか。\nB：後ろの右側です。サイズは何ですか。\nA：Mサイズです。\nB：どうぞ。気に入るといいですね。'),
    C('お茶の時間', 'Tea Time', '日本ではお茶は大切な文化です。朝ごはんにも、友だちが来たときにも、お茶を出します。お客さんが来ると、まず「お茶をどうぞ」と言います。お茶をいただくときは、両手でカップを持つのが丁寧です。茶道では、お茶をいれる動きにも意味があります。お茶は、心を落ち着かせる時間をくれます。'),
  ],
  ko: [
    A('서울에서의 하루', 'A Day in Seoul', '서울은 한국의 수도입니다. 지난 일요일에 저는 경복궁과 남산타워에 갔습니다. 날씨가 아주 좋아서 많이 걸었습니다. 점심에는 작은 식당에서 비빔밥을 먹었습니다. 비빔밥은 정말 맛있었습니다. 저녁에는 친구와 한강을 산책했습니다. 서울의 밤은 밝고 아름답습니다. 정말 좋은 여행이었습니다.'),
    P('시장에서 옷 사기', 'Buying Clothes at the Market', 'A: 안녕하세요! 이 파란 셔츠는 얼마예요?\nB: 안녕하세요. 이만 원이에요.\nA: 조금 비싸네요. 깎아 주실 수 있어요?\nB: 이 바지도 같이 사시면 삼만 원에 드릴게요.\nA: 좋아요. 탈의실은 어디예요?\nB: 뒤쪽 오른편에 있어요. 어떤 사이즈가 필요하세요?\nA: 중간 사이즈요.\nB: 여기 있어요. 마음에 드셨으면 좋겠어요!'),
    C('한국의 인사 문화', 'Korean Greetings', '한국에서는 나이가 많은 사람에게 존댓말을 씁니다. 인사할 때는 고개를 숙입니다. 식사 전에는 "잘 먹겠습니다"라고 말하고, 식사 후에는 "잘 먹었습니다"라고 말합니다. 어른이 먼저 숟가락을 든 다음에 먹기 시작합니다. 이런 작은 예절은 존경과 정을 보여 줍니다.'),
  ],
  de: [
    A('Ein Tag in Berlin', 'A Day in Berlin', 'Berlin ist die Hauptstadt von Deutschland. Letzten Sonntag habe ich das Brandenburger Tor und den Reichstag besucht. Das Wetter war sehr schön, deshalb bin ich viel gelaufen. Zum Mittagessen habe ich in einem kleinen Café eine Currywurst gegessen. Sie war sehr lecker. Am Abend habe ich mit Freunden einen Spaziergang an der Spree gemacht. Es war eine tolle Reise!'),
    P('Kleidung auf dem Markt', 'Buying Clothes at the Market', 'A: Guten Tag! Was kostet dieses blaue Hemd?\nB: Guten Tag. Es kostet zwanzig Euro.\nA: Das ist ein bisschen teuer. Gibt es einen Rabatt?\nB: Wenn Sie auch diese Hose nehmen, bekommen Sie beides für dreißig Euro.\nA: Gut. Wo ist die Umkleidekabine?\nB: Hinten rechts. Welche Größe brauchen Sie?\nA: Ich brauche Größe M.\nB: Bitte schön. Ich hoffe, es passt!'),
    C('Pünktlichkeit', 'Punctuality', 'In Deutschland ist Pünktlichkeit sehr wichtig. Wenn man um acht Uhr verabredet ist, kommt man um acht Uhr, nicht später. Bei einem Treffen mit Freunden sagt man Bescheid, wenn man sich verspätet. Auch Züge und Busse sollen pünktlich fahren. Pünktlich zu sein zeigt Respekt für die Zeit der anderen.'),
  ],
  it: [
    A('Un giorno a Roma', 'A Day in Rome', 'Roma è la capitale d’Italia. Domenica scorsa sono andato a vedere il Colosseo e la Fontana di Trevi. Faceva molto caldo, così ho bevuto un’acqua fresca. A pranzo ho mangiato la pasta in una piccola trattoria. La carbonara era buonissima. La sera ho fatto una passeggiata con gli amici. Che bella gita!'),
    P('Comprare vestiti al mercato', 'Buying Clothes at the Market', 'A: Buongiorno! Quanto costa questa camicia blu?\nB: Buongiorno. Costa venti euro.\nA: È un po’ cara. C’è uno sconto?\nB: Se prende anche questi pantaloni, vi faccio trenta euro per tutto.\nA: Va bene. Dov’è il camerino?\nB: In fondo a destra. Che taglia cerca?\nA: Mi serve una taglia media.\nB: Ecco a lei. Spero che le piaccia!'),
    C('Il caffè al bar', 'Coffee at the Bar', 'In Italia il caffè si beve spesso al bancone, in piedi, in pochi minuti. Si dice “un caffè, per favore” e si paga alla cassa. Il cappuccino si beve solo la mattina: dopo pranzo gli italiani preferiscono un espresso. Il bar è anche un luogo dove si incontrano gli amici e si parla di calcio.'),
  ],
  zh: [
    A('北京的一天', 'A Day in Beijing', '北京是中国的首都。上个星期天，我去参观了故宫和天安门广场。天气很好，所以我走了很多路。中午我在一家小饭馆吃了北京烤鸭，非常好吃。晚上我和朋友一起在湖边散步。北京的夜晚很安静，也很漂亮。这是一次很棒的旅行！'),
    P('在市场买衣服', 'Buying Clothes at the Market', 'A：你好！这件蓝色的衬衫多少钱？\nB：你好。一百块。\nA：有点儿贵。可以便宜一点吗？\nB：如果你再买这条裤子，两件一百五十块。\nA：好的。试衣间在哪儿？\nB：在后面右边。你穿什么号？\nA：我穿中号。\nB：给你。希望你喜欢！'),
    C('茶文化', 'Tea Culture', '在中国，茶不只是饮料，也是一种生活方式。客人来了，主人先请他喝茶。倒茶时，杯子不能倒得太满。喝茶的人会用手指轻轻敲桌子，表示谢谢。不同的地方有不同的茶，比如北方喜欢花茶，南方喜欢绿茶。喝茶的时候，大家可以慢慢聊天。'),
  ],
  ar: [
    A('يوم في القاهرة', 'A Day in Cairo', 'القاهرة هي عاصمة مصر. يوم الأحد الماضي ذهبت لزيارة الأهرامات والمتحف المصري. كان الجو حارًا جدًا، فشربت الكثير من الماء. في الغداء أكلت الكشري في مطعم صغير، وكان لذيذًا. في المساء تمشيت مع أصدقائي على نهر النيل. كانت رحلة رائعة!'),
    P('شراء الملابس في السوق', 'Buying Clothes at the Market', 'أ: مرحبًا! كم سعر هذا القميص الأزرق؟\nب: مرحبًا. سعره مئة جنيه.\nأ: إنه غالٍ قليلًا. هل يوجد خصم؟\nب: إذا اشتريت هذا البنطلون أيضًا، أعطيك الاثنين بمئة وخمسين.\nأ: حسنًا. أين غرفة القياس؟\nب: في الخلف على اليمين. ما هو مقاسك؟\nأ: أحتاج مقاسًا متوسطًا.\nب: تفضل. أتمنى أن يعجبك!'),
    C('الضيافة العربية', 'Arab Hospitality', 'الضيافة جزء مهم من الثقافة العربية. عندما يزورك ضيف، تقدّم له القهوة أو الشاي أولًا، ثم الطعام. من المعيب أن يخرج الضيف من البيت جائعًا. يقول الناس: "أهلًا وسهلًا" لكل من يدخل بيتهم. الكرم يُظهر الاحترام والمحبة.'),
  ],
  ru: [
    A('День в Москве', 'A Day in Moscow', 'Москва — столица России. В прошлое воскресенье я ходил на Красную площадь и в парк Горького. Погода была очень хорошая, поэтому я много гулял. На обед я съел борщ в маленьком кафе. Он был очень вкусный. Вечером я гулял с друзьями по набережной. Это была замечательная поездка!'),
    P('Покупка одежды на рынке', 'Buying Clothes at the Market', 'А: Здравствуйте! Сколько стоит эта синяя рубашка?\nБ: Здравствуйте. Она стоит тысячу рублей.\nА: Немного дорого. Можно скидку?\nБ: Если возьмёте ещё и эти брюки, отдам обе вещи за полторы тысячи.\nА: Хорошо. Где примерочная?\nБ: Сзади справа. Какой размер вам нужен?\nА: Мне нужен средний.\nБ: Вот, пожалуйста. Надеюсь, вам понравится!'),
    C('Чай и гостеприимство', 'Tea and Hospitality', 'В России гостей всегда встречают чаем. На столе появляются варенье, конфеты и пирожки. Чай пьют из самовара или из чайника, не торопясь. Когда приходишь в гости, принято снимать обувь у двери. Хозяева стараются накормить гостя как можно лучше. Гостеприимство для русских — это знак уважения.'),
  ],
  tr: [
    A('İstanbul’da Bir Gün', 'A Day in Istanbul', 'İstanbul Türkiye’nin en büyük şehridir. Geçen pazar Ayasofya’yı ve Topkapı Sarayı’nı gezdim. Hava çok güzeldi, bu yüzden çok yürüdüm. Öğle yemeğinde küçük bir lokantada köfte yedim. Çok lezzetliydi. Akşam arkadaşlarımla Boğaz’da vapura bindim. Harika bir geziydi!'),
    P('Pazarda Kıyafet Almak', 'Buying Clothes at the Market', 'A: Merhaba! Bu mavi gömlek kaç lira?\nB: Merhaba. Yüz lira.\nA: Biraz pahalı. İndirim yapar mısınız?\nB: Bu pantolonu da alırsanız ikisini yüz elli liraya vereyim.\nA: Olur. Deneme kabini nerede?\nB: Arkada, sağda. Hangi bedeni arıyorsunuz?\nA: Orta beden lazım.\nB: Buyurun. Umarım beğenirsiniz!'),
    C('Türk Çayı', 'Turkish Tea', 'Türkiye’de çay günün her saatinde içilir. Çay küçük, ince belli bardaklarda servis edilir. Misafir geldiğinde ilk iş çay ikram etmektir. Esnaf da müşterisine çay ikram eder. Çay içerken insanlar sohbet eder, dertleşir. Çay bir içecekten fazlasıdır: dostluğun sembolüdür.'),
  ],
  vi: [
    A('Một ngày ở Hà Nội', 'A Day in Hanoi', 'Hà Nội là thủ đô của Việt Nam. Chủ nhật tuần trước, tôi đi thăm Văn Miếu và Hồ Hoàn Kiếm. Trời nắng đẹp nên tôi đi bộ rất nhiều. Buổi trưa tôi ăn phở ở một quán nhỏ. Phở rất ngon. Buổi tối tôi đi dạo với bạn bên hồ. Đó là một chuyến đi tuyệt vời!'),
    P('Mua quần áo ở chợ', 'Buying Clothes at the Market', 'A: Chào chị! Cái áo sơ mi xanh này giá bao nhiêu?\nB: Chào anh. Hai trăm nghìn đồng.\nA: Hơi đắt. Chị bớt được không?\nB: Nếu anh mua thêm cái quần này, tôi bán cả hai cái ba trăm nghìn.\nA: Được. Phòng thử đồ ở đâu?\nB: Ở phía sau, bên phải. Anh mặc size nào?\nA: Tôi mặc size M.\nB: Đây ạ. Mong anh thích!'),
    C('Văn hóa cà phê', 'Coffee Culture', 'Ở Việt Nam, cà phê là một phần của cuộc sống. Người ta thường uống cà phê sữa đá vào buổi sáng, ngồi trên ghế nhựa nhỏ bên đường. Cà phê phin được pha chậm, từng giọt một. Mọi người ngồi lâu, trò chuyện với bạn bè. Uống cà phê không chỉ để tỉnh táo mà còn để gặp gỡ.'),
  ],
  nl: [
    A('Een dag in Amsterdam', 'A Day in Amsterdam', 'Amsterdam is de hoofdstad van Nederland. Afgelopen zondag bezocht ik het Rijksmuseum en het Vondelpark. Het weer was mooi, dus ik heb veel gefietst. Bij de lunch at ik een broodje kaas in een klein café. Het was erg lekker. ’s Avonds maakte ik met vrienden een boottocht door de grachten. Wat een fijne dag!'),
    P('Kleren kopen op de markt', 'Buying Clothes at the Market', 'A: Goedemorgen! Hoeveel kost dit blauwe overhemd?\nB: Goedemorgen. Het kost twintig euro.\nA: Dat is een beetje duur. Is er korting?\nB: Als u ook deze broek neemt, krijgt u allebei voor dertig euro.\nA: Goed. Waar is de paskamer?\nB: Achterin, aan de rechterkant. Welke maat zoekt u?\nA: Ik heb maat M nodig.\nB: Alstublieft. Ik hoop dat het past!'),
    C('Fietsen in Nederland', 'Cycling in the Netherlands', 'In Nederland fietst bijna iedereen. Kinderen fietsen naar school, ouders fietsen naar hun werk. Er zijn overal aparte fietspaden. Bij regen trekt men gewoon een regenjas aan en fietst door. Een fiets is niet alleen vervoer, maar ook een manier om vrienden te ontmoeten.'),
  ],
  pl: [
    A('Dzień w Krakowie', 'A Day in Kraków', 'Kraków to piękne miasto w Polsce. W zeszłą niedzielę zwiedzałem Wawel i Rynek Główny. Pogoda była ładna, więc dużo chodziłem. Na obiad zjadłem pierogi w małej restauracji. Były bardzo smaczne. Wieczorem spacerowałem z przyjaciółmi nad Wisłą. To była wspaniała wycieczka!'),
    P('Zakup ubrań na targu', 'Buying Clothes at the Market', 'A: Dzień dobry! Ile kosztuje ta niebieska koszula?\nB: Dzień dobry. Sto złotych.\nA: Trochę drogo. Czy jest zniżka?\nB: Jeśli weźmie pan jeszcze te spodnie, dam obie rzeczy za sto pięćdziesiąt.\nA: Dobrze. Gdzie jest przymierzalnia?\nB: Z tyłu po prawej. Jaki rozmiar pan szuka?\nA: Potrzebuję rozmiaru M.\nB: Proszę bardzo. Mam nadzieję, że się spodoba!'),
    C('Gościnność po polsku', 'Polish Hospitality', 'W Polsce gość jest bardzo ważny. Przy wejściu gospodarze często mówią: „Proszę wejść, czuj się jak u siebie”. Na stole pojawia się herbata, ciasto i obiad. Odmówienie jedzenia może zasmucić gospodarzy. Na święta, np. Wigilię, przy stole zostaje puste miejsce dla niespodziewanego gościa.'),
  ],
  id: [
    A('Sehari di Yogyakarta', 'A Day in Yogyakarta', 'Yogyakarta adalah kota budaya di Indonesia. Hari Minggu lalu saya mengunjungi Candi Borobudur dan Keraton. Cuacanya cerah, jadi saya banyak berjalan kaki. Saat makan siang saya makan gudeg di warung kecil. Rasanya sangat enak. Malam harinya saya berjalan-jalan dengan teman di Jalan Malioboro. Perjalanan yang menyenangkan!'),
    P('Membeli baju di pasar', 'Buying Clothes at the Market', 'A: Selamat pagi! Berapa harga kemeja biru ini?\nB: Selamat pagi. Seratus ribu rupiah.\nA: Agak mahal. Bisa kurang?\nB: Kalau Anda beli celana ini juga, dua-duanya seratus lima puluh ribu.\nA: Baik. Di mana ruang ganti?\nB: Di belakang, sebelah kanan. Ukuran berapa?\nA: Saya butuh ukuran M.\nB: Ini, silakan. Semoga suka!'),
    C('Budaya Gotong Royong', 'The Culture of Mutual Help', 'Di Indonesia, gotong royong berarti bekerja bersama-sama. Warga satu desa membersihkan jalan atau membangun rumah bersama. Tidak ada yang dibayar; semua saling membantu. Setelah selesai, mereka makan bersama. Gotong royong menunjukkan bahwa orang lebih kuat jika bersatu.'),
  ],
  th: [
    A('หนึ่งวันในกรุงเทพฯ', 'A Day in Bangkok', 'กรุงเทพฯ เป็นเมืองหลวงของประเทศไทย วันอาทิตย์ที่แล้วฉันไปเที่ยววัดพระแก้วและพระบรมมหาราชวัง อากาศร้อนมาก ฉันจึงดื่มน้ำเยอะ ตอนเที่ยงฉันกินผัดไทยที่ร้านเล็ก ๆ อร่อยมาก ตอนเย็นฉันเดินเล่นกับเพื่อนริมแม่น้ำเจ้าพระยา เป็นการเดินทางที่ยอดเยี่ยม'),
    P('ซื้อเสื้อผ้าที่ตลาด', 'Buying Clothes at the Market', 'ก: สวัสดีค่ะ เสื้อเชิ้ตสีฟ้าตัวนี้ราคาเท่าไรคะ\nข: สวัสดีครับ ห้าร้อยบาทครับ\nก: แพงไปหน่อยค่ะ ลดได้ไหมคะ\nข: ถ้าซื้อกางเกงตัวนี้ด้วย ผมให้สองตัวเจ็ดร้อยบาทครับ\nก: ตกลงค่ะ ห้องลองเสื้ออยู่ที่ไหนคะ\nข: อยู่ข้างหลังทางขวาครับ ใส่ไซซ์อะไรครับ\nก: ไซซ์ M ค่ะ\nข: เชิญครับ หวังว่าคุณจะชอบ'),
    C('การไหว้', 'The Wai Greeting', 'คนไทยทักทายกันด้วยการไหว้ โดยยกมือสองข้างประนมไว้ที่หน้าอก แล้วก้มศีรษะเล็กน้อย ยิ่งยกมือสูง ยิ่งแสดงความเคารพมาก เรามักไหว้ผู้ใหญ่ก่อน และพูดว่า "สวัสดี" การไหว้แสดงถึงความสุภาพและความเป็นมิตร'),
  ],
  el: [
    A('Μια μέρα στην Αθήνα', 'A Day in Athens', 'Η Αθήνα είναι η πρωτεύουσα της Ελλάδας. Την περασμένη Κυριακή επισκέφτηκα την Ακρόπολη και την Πλάκα. Ο καιρός ήταν όμορφος, γι’ αυτό περπάτησα πολύ. Το μεσημέρι έφαγα σουβλάκι σε μια μικρή ταβέρνα. Ήταν πολύ νόστιμο. Το βράδυ έκανα βόλτα με φίλους. Τι υπέροχη εκδρομή!'),
    P('Αγορά ρούχων στη λαϊκή', 'Buying Clothes at the Market', 'Α: Καλημέρα! Πόσο κάνει αυτό το μπλε πουκάμισο;\nΒ: Καλημέρα. Κάνει είκοσι ευρώ.\nΑ: Είναι λίγο ακριβό. Υπάρχει έκπτωση;\nΒ: Αν πάρετε και αυτό το παντελόνι, σας τα δίνω και τα δύο τριάντα ευρώ.\nΑ: Εντάξει. Πού είναι το δοκιμαστήριο;\nΒ: Πίσω δεξιά. Τι μέγεθος θέλετε;\nΑ: Θέλω μέσο μέγεθος.\nΒ: Ορίστε. Ελπίζω να σας αρέσει!'),
    C('Η ελληνική φιλοξενία', 'Greek Hospitality', 'Στην Ελλάδα η φιλοξενία είναι ιερή. Όταν έρχεται επισκέπτης, του προσφέρουν γλυκό του κουταλιού και ένα ποτήρι νερό. Οι οικοδεσπότες επιμένουν να φάει κανείς κι άλλο. Η λέξη «ξένος» σημαίνει και «φιλοξενούμενος» και «ξένος». Η καλή υποδοχή δείχνει σεβασμό.'),
  ],
  uk: [
    A('День у Києві', 'A Day in Kyiv', 'Київ — столиця України. Минулої неділі я ходив до Софійського собору і на Хрещатик. Погода була гарна, тому я багато гуляв. На обід я з’їв борщ у маленькому кафе. Він був дуже смачний. Увечері я гуляв з друзями вздовж Дніпра. Це була чудова подорож!'),
    P('Купівля одягу на ринку', 'Buying Clothes at the Market', 'А: Добрий день! Скільки коштує ця синя сорочка?\nБ: Добрий день. Вона коштує п’ятсот гривень.\nА: Трохи дорого. Чи є знижка?\nБ: Якщо ви візьмете ще й ці штани, віддам обидві речі за сімсот гривень.\nА: Добре. Де примірочна?\nБ: Позаду праворуч. Який розмір вам потрібен?\nА: Мені потрібен середній розмір.\nБ: Ось, будь ласка. Сподіваюся, вам сподобається!'),
    C('Вишиванка', 'The Embroidered Shirt', 'Вишиванка — це українська сорочка з візерунками. Кожен регіон має свої кольори й орнаменти. Люди одягають вишиванки на свята, весілля й у День вишиванки. Візерунок передає від мами до доньки. Вишиванка — це знак любові до своєї землі та історії.'),
  ],
  sw: [
    A('Siku Moja Nairobi', 'A Day in Nairobi', 'Nairobi ni mji mkuu wa Kenya. Jumapili iliyopita nilitembelea Hifadhi ya Taifa ya Nairobi na Makumbusho ya Taifa. Hali ya hewa ilikuwa nzuri, kwa hiyo nilitembea sana. Mchana nilikula nyama choma kwenye mkahawa mdogo. Ilikuwa tamu sana. Jioni nilitembea na marafiki. Ilikuwa safari nzuri!'),
    P('Kununua Nguo Sokoni', 'Buying Clothes at the Market', 'A: Habari za asubuhi! Shati hili la buluu ni shilingi ngapi?\nB: Nzuri. Ni shilingi elfu moja.\nA: Ni ghali kidogo. Unaweza kupunguza?\nB: Ukinunua na suruali hii, nitakupa vyote kwa elfu moja na mia tano.\nA: Sawa. Chumba cha kujaribu kiko wapi?\nB: Nyuma upande wa kulia. Unavaa saizi gani?\nA: Navaa saizi ya kati.\nB: Karibu. Natumaini utalipenda!'),
    C('Ukarimu wa Waswahili', 'Swahili Hospitality', 'Katika utamaduni wa Kiswahili, mgeni ni baraka. Mgeni akifika, huambiwa "Karibu!" na hupewa chai au maji. Wenyeji hujitahidi kumpa chakula bora. Mgeni hapaswi kuondoka bila kula. Ukarimu huu unaonyesha heshima na upendo kwa watu wote.'),
  ],
};
