import { CraftVillage, Artisan } from '../types';

export const CRAFT_VILLAGES: CraftVillage[] = [
  {
    id: 'bat-trang',
    name: 'Làng Gốm Bát Tràng',
    location: 'Xã Bát Tràng, Huyện Gia Lâm',
    district: 'Gia Lâm',
    province: 'Hà Nội',
    foundedYear: 'Thế kỷ XIV (thời nhà Lý - Trần, khoảng năm 1352)',
    patriarch: 'Hứa Vĩnh Kiều, Đào Trí Tiến, Lưu Phương Tú (Ba vị Tiền hiền khởi thủy nghề)',
    heritageRecognition: 'Di sản Văn hóa Phi vật thể Quốc gia (Quyết định số 296/QĐ-BVHTTDL)',
    shortDescription: 'Cái nôi gốm sứ nghìn năm ven sông Hồng, nổi tiếng với kỹ thuật vuốt tay điêu luyện, dòng men tro tự nhiên, men rạn tam thái và men lam phục dựng thời Lê - Mạc.',
    fullHistory: 'Theo sử sách, sau khi vua Lý Thái Tổ dời đô về Thăng Long năm 1010, nhiều thợ gốm vùng Bồ Bát (Ninh Bình) đã di cư ra vùng tả ngạn sông Hồng lập nghiệp nhờ có đất sét trắng cao lanh màu mỡ và giao thông thủy bộ thuận lợi. Qua nhiều triều đại Trần, Lê, Mạc, gốm Bát Tràng đã xuất khẩu sang Nhật Bản, các nước Đông Nam Á và châu Âu. Ngày nay, Bát Tràng vẫn giữ vững cốt cách thủ công truyền thống kết hợp tinh hoa sáng tạo đương đại.',
    uniqueness: 'Chất đất sét dẻo quánh chịu nhiệt cao trên 1.250°C; kỹ nghệ chế tác men rạn cổ; xương gốm dày dặn chắc khỏe; khi gõ vào phát ra âm thanh trong trẻo ngân vang như tiếng chuông đồng.',
    coordinates: {
      lat: 20.9782,
      lng: 105.9125,
    },
    heroImage: '/src/assets/images/hero_craft_village_banner_1794324392181.jpg',
    craftCategory: 'Gốm sứ & Đất nung',
    activeHouseholds: 1100,
    activeArtisansCount: 42,
    soundscapeDescription: 'Tiếng bàn xoay gốm vù vù nhẹ đều, giọt nước vỗ đất sét, tiếng chổi quét men trên cốt mộc và tiếng gõ lanh canh kiểm tra âm thanh gốm chín.',
    steps: [
      {
        id: 'bt-step-1',
        stepNumber: 1,
        stageName: 'Chuẩn bị cốt liệu',
        title: 'Khai thác & Chọn lọc đất sét trắng - Cao lanh',
        subtitle: 'Lọc tạp chất bằng hệ thống bể lắng truyền thống 4 tầng',
        duration: '72 giờ lắng lọc',
        rawMaterials: ['Đất sét trắng Trúc Thôn', 'Cao lanh chịu nhiệt', 'Nước phù sa sông Hồng'],
        keyTools: ['Bể đánh (bể thau)', 'Bể lắng', 'Bể phơi đất', 'Thước đo tỷ trọng'],
        technicalSecret: 'Đất mộc phải được ủ trong hầm tối tối thiểu 30 ngày để khử bọt khí và tăng độ dẻo đàn hồi, thợ già gọi là "ngâm đất cho ngấu".',
        instructions: [
          'Hòa tan đất thô vào bể đánh cùng nước sạch để đất rã đều thành dạng bùn lỏng.',
          'Dẫn dung dịch bùn qua hệ thống màng lọc mịn sang bể lắng nhằm loại bỏ hoàn toàn sạn sỏi và rác hữu cơ.',
          'Múc bùn mịn chuyển lên bể phơi nắng tự nhiên cho đến khi đất đạt độ ẩm dẻo quánh chuẩn mực (khoảng 22% độ ẩm).',
          'Đưa đất vào buồng ủ bảo quản ẩm kín để tăng sinh độ liên kết keo tụ tự nhiên.'
        ],
        caution: 'Nếu còn sót hạt sạn nhỏ li ti, khi nung nhiệt độ cao đất sẽ bị nổ nứt hoặc phồng rộp làm vỡ toàn bộ lô sản phẩm.',
      },
      {
        id: 'bt-step-2',
        stepNumber: 2,
        stageName: 'Tạo hình nghệ thuật',
        title: 'Vuốt tay trên bàn xoay & Đúc khuôn thạch cao',
        subtitle: 'Thổi hồn dáng gốm qua bàn tay cảm nhận nhịp xoay',
        duration: '15 - 45 phút / sản phẩm',
        rawMaterials: ['Cục đất sét dẻo đã ngấu', 'Nước bôi trơn bề mặt'],
        keyTools: ['Bàn xoay thủ công (bàn vuốt đạp chân hoặc bàn điện cơ)', 'Dây cắt chỉ đồng', 'Que gạt gọt dáng', 'Miếng da cừu miết miệng'],
        technicalSecret: 'Lực ấn của lòng bàn tay và ngón cái phải giữ đều nhịp thở theo tốc độ bàn xoay để độ dày của thân gốm từ đáy lên miệng đồng đều tuyệt đối.',
        instructions: [
          'Đặt quả đất chính giữa tâm bàn xoay, dùng lực đập dính chặt vào mâm xoay.',
          'Đạp chân tạo đà xoay hoặc chỉnh tốc độ vòng quay ổn định.',
          'Dùng hai bàn tay nén và kéo đất lên theo phương thẳng đứng rồi ấn hạ xuống nhiều lần để định tâm.',
          'Khoét rỗng tâm đất, nâng cao dần thành gốm, uốn eo thon hoặc nở bụng theo dáng phác thảo.',
          'Dùng miếng da ướt miết láng mép miệng bình và dùng dây cước cắt rời đáy phôi khỏi mặt bàn xoay.'
        ],
        caution: 'Lệch tâm chỉ 1 milimet sẽ khiến sản phẩm bị méo vặn khi phơi khô và co ngót lệch hướng trong lò nung.',
      },
      {
        id: 'bt-step-3',
        stepNumber: 3,
        stageName: 'Phơi mộc & Sửa tỉa',
        title: 'Tiện gọt mộc & Phơi sấy tự nhiên',
        subtitle: 'Sửa đường nét tinh xảo khi gốm ở trạng thái "độ cứng da thuộc"',
        duration: '24 - 48 giờ tùy độ ẩm thời tiết',
        rawMaterials: ['Phôi gốm mộc', 'Bột đất mịn làm keo kết dính tai quai'],
        keyTools: ['Bàn tiện mộc', 'Dao gọt bằng thép non', 'Bút lông dọn bụi đất'],
        technicalSecret: 'Phơi gốm phải phơi trong bóng râm thoáng gió tự nhiên, tuyệt đối không mang phơi nắng gắt đột ngột để tránh cong vênh.',
        instructions: [
          'Theo dõi phôi gốm khô tự nhiên đến độ cứng vừa vặn (sờ tay không dính nhưng bấm móng tay còn hơi hằn).',
          'Đặt mộc lên bàn tiện, dùng dao gọt tiện bớt phần đất thừa ở đáy và thành để bình nhẹ thanh thoát.',
          'Gắn các chi tiết nổi như quai bình, tai thú, hoa văn đắp nổi bằng hồ đất dẻo (hồ dán gốm).',
          'Rà soát bề mặt, dùng giấy ráp mịn đánh bóng nhẹ nhàng các vết ráp gồ ghề.'
        ],
        caution: 'Nếu gắn quai khi độ ẩm giữa quai và thân chênh lệch nhau quá lớn, mối nối sẽ nứt toác khi khô.',
      },
      {
        id: 'bt-step-4',
        stepNumber: 4,
        stageName: 'Trang trí hoa văn',
        title: 'Vẽ họa tiết dưới men (Lam cổ, Rồng Phượng, Hoa Sen)',
        subtitle: 'Bút pháp thủy mặc trên nền mộc hút nước cực nhanh',
        duration: '1 - 4 giờ / tác phẩm',
        rawMaterials: ['Ôxít côban (màu lam)', 'Ôxít sắt (màu nâu)', 'Ôxít đồng (màu lục/đỏ huyết)', 'Nước kiềm tự nhiên'],
        keyTools: ['Bút lông thỏ mềm', 'Bút tỉa nét tơ', 'Mực màu khoáng chất'],
        technicalSecret: 'Bột màu lam quét lên phôi đất mộc hút màu ngay tức khắc, người thợ vẽ một nét là dứt khoát không có cơ hội tẩy sửa lần hai.',
        instructions: [
          'Vẽ phác thảo đường viền cơ bản bằng chì mềm hoặc chấm màu định vị bố cục.',
          'Dùng bút lông ngậm no màu khoáng lướt uyển chuyển tạo các dải mây, cánh sen, sóng nước hoặc vảy rồng.',
          'Tỉa nét chi tiết bằng bút đầu kim để tạo chiều sâu và độ tương phản sáng tối.',
          'Thổi sạch mọi bụi màu thừa bám quanh thân trước khi chuyển sang công đoạn phủ men.'
        ],
        caution: 'Màu vẽ trước khi nung có màu xám xịt hoặc nâu nhạt, nghệ nhân phải thuộc lòng độ biến hóa sắc độ trong lửa để pha chế chính xác.',
      },
      {
        id: 'bt-step-5',
        stepNumber: 5,
        stageName: 'Pha chế & Tráng men',
        title: 'Phủ lớp áo men truyền thống (Men tro nếp, Men rạn, Men lam)',
        subtitle: 'Hòa quyện tinh hoa tro vỏ trấu nếp và đất sét Bát Tràng',
        duration: '10 - 20 giây nhúng phủ / 12 giờ khô men',
        rawMaterials: ['Tro trấu nếp cái hoa vàng', 'Đá thạch anh nghiền mịn', 'Cao lanh tinh luyện', 'Vôi vỏ sò'],
        keyTools: ['Thùng quấy men cơ học', 'Thau men lớn', 'Kẹp sắt nhúng men', 'Bình phun nén khí'],
        technicalSecret: 'Bí quyết men rạn cổ Bát Tràng nằm ở việc tạo ra sự chênh lệch độ giãn nở nhiệt giữa xương gốm và lớp thủy tinh thể bề mặt, sau đó dùng nước trà xanh hay mực tàu vuốt qua để đường rạn hiện hình vảy cá đều tăm tắp.',
        instructions: [
          'Nghiền mịn các hợp chất khoáng trong cối đá tối thiểu 48 tiếng để men đạt độ nhuyễn tơi không lắng cặn.',
          'Dùng kỹ thuật dội men hoặc nhúng ngập phôi vào thau men trong vòng 3 đến 5 giây thật dứt khoát.',
          'Cạo sạch lớp men dính ở vòng chân đáy sản phẩm để khi nung gốm không bị dính chảy vào tấm kê lò.',
          'Để khô ráo hoàn toàn trong phòng sạch cách ly bụi bẩn.'
        ],
        caution: 'Lớp men phủ quá dày sẽ bị chảy đọng giọt; phủ quá mỏng sẽ lộ xương đất và mất đi độ bóng sâu của ngọc gốm.',
      },
      {
        id: 'bt-step-6',
        stepNumber: 6,
        stageName: 'Hóa thần trong lửa',
        title: 'Nung luyện nhiệt độ cao & Kiểm tra thành phẩm',
        subtitle: 'Thăng hoa ở 1.250°C - 1.300°C trong lò khí hiện đại hoặc lò bầu cổ',
        duration: '24 giờ nung + 36 giờ hạ nhiệt tự nhiên',
        rawMaterials: ['Khí hóa lỏng (LPG sạch)', 'Bao nung chịu nhiệt (bao samốt)'],
        keyTools: ['Lò con thoi cách nhiệt', 'Cặp nhiệt điện hiển thị số', 'Mắt thăm lửa truyền thống'],
        technicalSecret: 'Khâu hạ nhiệt quyết định linh hồn màu men: lò phải nguội dần đều trong buồng kín suốt 1,5 ngày đêm, nếu mở cửa lò sớm khi gốm chưa nguội sẽ bị sốc nhiệt gây nứt vỡ tan tành.',
        instructions: [
          'Xếp sản phẩm vào lò theo nguyên tắc nặng dưới nhẹ trên, khoảng cách giữa các phôi cách nhau tối thiểu 2cm.',
          'Tăng nhiệt độ từ từ qua các giai đoạn sấy khô (100°C - 300°C), đốt cháy hữu cơ (600°C) và khử oxy hóa (950°C - 1.200°C).',
          'Đạt đỉnh 1.280°C thì giữ nhiệt độ ổn định (ngâm nhiệt) trong 2 đến 3 tiếng để men chảy láng bóng.',
          'Tắt lửa, niêm phong cửa lò chờ nguội tự nhiên về dưới 50°C.',
          'Ra lò, lau sạch, dùng que gỗ gõ nhẹ thẩm âm tiếng vang và tuyển lựa tiêu chuẩn chất lượng cao nhất.'
        ],
        caution: 'Chỉ cần biến động nhiệt 15°C ở thời điểm ngâm men sẽ làm màu men lam biến thành xám đen hoặc men rạn không bung lưới.',
      }
    ],
    products: [
      {
        id: 'p-bt-01',
        villageId: 'bat-trang',
        name: 'Lục Bình Men Rạn Đắp Nổi Tứ Linh',
        category: 'Gốm phong thủy & thờ tự',
        craftEra: 'Mẫu thức phỏng cổ triều Mạc (Thế kỷ XVI)',
        dimensions: 'Cao 165 cm x Đường kính bụng 48 cm',
        material: 'Đất sét trắng cao lanh, Men rạn cổ tro trấu, Men lam côban',
        craftingTechniques: ['Vuốt tay chia 3 đoạn ghép mộng', 'Đắp nổi phù điêu Long - Lân - Quy - Phụng', 'Chấm men tam thái', 'Nung nhiệt độ 1.280°C'],
        culturalMeaning: 'Biểu trưng cho sự vững chãi, hội tụ vượng khí tài lộc và che chở bình an cho gia tộc qua nhiều thế hệ.',
        craftingTime: '45 ngày công nghệ nhân',
        imageUrl: '/src/assets/images/craft_bat_trang_pottery_1794324392056.jpg',
        artisanCredit: 'Nghệ nhân Nhân dân Trần Độ',
        description: 'Tác phẩm đỉnh cao kết hợp kỹ thuật men rạn ngà sâu thẳm cùng các chi tiết vảy rồng, móng lân đắp thủ công từng chi tiết li ti sắc sảo.'
      },
      {
        id: 'p-bt-02',
        villageId: 'bat-trang',
        name: 'Đỉnh Hương Men Lam Phục Dựng Thế Kỷ XVII',
        category: 'Đồ thờ pháp bảo',
        craftEra: 'Phục dựng theo nguyên mẫu thời Hậu Lê',
        dimensions: 'Cao 58 cm x Rộng 42 cm',
        material: 'Gốm xương bán sứ, Men lam ngọc Bát Tràng',
        craftingTechniques: ['Gọt tỉa đường nét góc cạnh', 'Vẽ nét tơ mực lam khoáng', 'Thấu quang viền mép'],
        culturalMeaning: 'Nơi kết nối linh thiêng giữa tổ tiên và con cháu, thể hiện đạo hiếu uống nước nhớ nguồn.',
        craftingTime: '28 ngày',
        imageUrl: '/src/assets/images/craft_bat_trang_pottery_1794324392056.jpg',
        artisanCredit: 'Nghệ nhân Ưu tú Tô Thanh Sơn',
        description: 'Tác phẩm được phục chế thành công sau 12 năm nghiên cứu công thức men lam thất truyền thời Lê Trung Hưng.'
      },
      {
        id: 'p-bt-03',
        villageId: 'bat-trang',
        name: 'Bộ Ấm Trà Tử Sa Hoàng Thổ Bát Tràng',
        category: 'Trà cụ cung đình',
        craftEra: 'Đương đại kết hợp truyền thống',
        dimensions: 'Ấm dung tích 240ml, 6 chén 45ml',
        material: 'Đất phù sa sông Hồng phong hóa & khoáng sa tự nhiên',
        craftingTechniques: ['Không tráng men lòng trong', 'Nung hỏa biến', 'Đánh bóng thủ công bằng ngọc thạch'],
        culturalMeaning: 'Dưỡng trà lâu năm càng thơm đượm, hấp thu tinh túy trà khí tạo hương vị thanh tao.',
        craftingTime: '15 ngày',
        imageUrl: '/src/assets/images/craft_bat_trang_pottery_1794324392056.jpg',
        artisanCredit: 'Nghệ nhân Bàn tay vàng Vương Mạnh Tuấn',
        description: 'Đất nung có độ xốp vi mô lưu giữ hương trà hoàn hảo, nắp ấm khít khao kín khí dốc 90 độ không rơi nắp.'
      }
    ]
  },
  {
    id: 'van-phuc',
    name: 'Làng Lụa Vạn Phúc',
    location: 'Phường Vạn Phúc, Quận Hà Đông',
    district: 'Hà Đông',
    province: 'Hà Nội',
    foundedYear: 'Hơn 1.000 năm (khoảng năm 866 thời Tiền Lê)',
    patriarch: 'Bà A Lã Thị Nương (Người con gái đức hạnh truyền dạy nghề dệt the lụa)',
    heritageRecognition: 'Di sản Văn hóa Phi vật thể Quốc gia (Bộ VHTTDL công nhận năm 2023)',
    shortDescription: 'Thủ phủ tơ lụa trứ danh Việt Nam, nổi tiếng nhất với Lụa Vân mềm mại mát rượi, hoa văn chìm nổi tinh tế như mây bay bổng.',
    fullHistory: 'Lụa Vạn Phúc từng là cống phẩm thượng hạng tiến cung cho các bậc vua chúa triều Nguyễn và được giới thiệu tại các kỳ đấu xảo hội chợ quốc tế Marseille (1931) và Paris. Khác với tơ tằm công nghiệp, lụa Vạn Phúc 100% sợi tơ tự nhiên, đông ấm hè mát, chạm vào da nhẹ tựa làn gió thoảng.',
    uniqueness: 'Hoa văn dệt chìm phức tạp đòi hỏi kỹ thuật mắc cửi thủ công tinh xảo; sợi tơ tằm óng ả bắt sáng đa chiều; độ bền dai qua hàng chục năm không phai sắc.',
    coordinates: {
      lat: 20.9789,
      lng: 105.7725,
    },
    heroImage: '/src/assets/images/craft_van_phuc_silk_1794324393429.jpg',
    craftCategory: 'Dệt & Thêu lụa truyền thống',
    activeHouseholds: 450,
    activeArtisansCount: 28,
    soundscapeDescription: 'Tiếng khung dệt gỗ xập xình rộn ràng khắp ngõ xóm, tiếng thoi đưa vèo vạt lướt nhanh và tiếng xào xạc luộc kén tơ óng ả.',
    steps: [
      {
        id: 'vp-step-1',
        stepNumber: 1,
        stageName: 'Ươm tơ & Quay suốt',
        title: 'Kéo kén chọn tơ tằm hảo hạng',
        subtitle: 'Chắt lọc những sợi tơ vàng, tơ trắng nõn nà đều sợi',
        duration: '12 giờ quay sợi',
        rawMaterials: ['Kén tằm dâu tằm tự nhiên', 'Nước suối nguồn ấm'],
        keyTools: ['Nồi luộc kén đồng', 'Bàn ươm tơ guồng gỗ', 'Ống suốt tre'],
        technicalSecret: 'Nhiệt độ nước luộc kén phải giữ ở 80-85°C để tan chất keo sê-ri-xin vừa đủ mà không làm giòn sợi tơ.',
        instructions: [
          'Thả kén tằm vào nồi nước ấm để làm mềm keo tơ tự nhiên.',
          'Dùng đóa chổi tre tìm mối tơ đầu kén, chập 8-10 sợi tơ kén thành một tao tơ bền bỉ.',
          'Quay guồng kéo tơ đều tay cuộn vào búp sợi tơ sống.',
          'Phân loại sợi tơ dọc và tơ ngang theo độ mảnh và độ dai.'
        ],
        caution: 'Lửa nước quá sôi sẽ làm sợi tơ bị nhão đứt và bết dính không thể luồn qua go dệt.',
      },
      {
        id: 'vp-step-2',
        stepNumber: 2,
        stageName: 'Mắc cửi & Vào khổ',
        title: 'Mắc cửi hoa văn và cài đặt go khung dệt',
        subtitle: 'Bố trí hàng nghìn sợi tơ dọc theo sơ đồ hoa văn dệt',
        duration: '3 - 5 ngày chuẩn bị cửi',
        rawMaterials: ['Sợi tơ dọc đã hồ nếp', 'Thẻ hoa văn đục lỗ gỗ'],
        keyTools: ['Khung cửi mắc sợi', 'Lược dệt đồng', 'Hệ thống quả rọi cân bằng lực'],
        technicalSecret: 'Mỗi khung cửi dệt Lụa Vân đòi hỏi thợ lành nghề luồn từng sợi tơ qua mắt go thủ công, chỉ sai một sợi cả khúc vải hoa sẽ hỏng mẫu.',
        instructions: [
          'Chải hồ gạo nếp pha loãng lên sợi tơ để sợi cứng cáp, trơn bóng không bị xơ cọ xát.',
          'Mắc sợi lên trục cửi với mật độ 120 sợi/cm đảm bảo độ khít dày dặn của mặt vải.',
          'Xỏ từng tao tơ qua răng lược đập và mắt go điều khiển hoa văn.',
          'Cân chỉnh đối trọng quả dọi để độ căng sợi đồng đều từ mép trái sang mép phải.'
        ],
        caution: 'Độ căng sợi không đều sẽ làm lụa dệt ra bị bùng biên (mép vải chùng gợn sóng).',
      },
      {
        id: 'vp-step-3',
        stepNumber: 3,
        stageName: 'Dệt lụa trên khung gỗ',
        title: 'Vận hành khung cửi nhịp nhàng chân đạp tay quăng thoi',
        subtitle: 'Dệt hoa văn chìm nổi tinh tế đặc trưng Lụa Vân',
        duration: '3 - 4 mét vải / ngày',
        rawMaterials: ['Sợi tơ tằm tơ tằm nõn'],
        keyTools: ['Khung cửi gỗ lim cổ truyền', 'Con thoi gỗ tiện chuốt sáp ong', 'Cần gạt hoa'],
        technicalSecret: 'Chân đạp nhịp dứt khoát, tay quăng con thoi chuẩn xác khi mở họng sợi, tay kéo lược nén sợi phải cùng một lực đều đặn thì lụa mới phẳng lì tơ mịn.',
        instructions: [
          'Ngồi thẳng lưng trên ghế cửi, chân đạp pedal nâng hạ lá go theo nhịp bài bản.',
          'Quăng thoi tơ ngang xuyên qua khe sợi dọc với tốc độ nhịp nhàng.',
          'Kéo lược nén sợi dệt chắc vào hàng dệt trước đó.',
          'Theo dõi tỉ mỉ từng milimet đường hoa nổi để phát hiện ngay sợi tơ đứt và nối lại kịp thời.'
        ],
        caution: 'Nếu dừng nghỉ giữa chừng quá lâu mà không xả bớt lực căng, chỗ dừng sẽ tạo vệt hằn trên khổ lụa.',
      },
      {
        id: 'vp-step-4',
        stepNumber: 4,
        stageName: 'Luộc tẩy & Nhuộm thảo mộc',
        title: 'Nhuộm màu tự nhiên từ củ nâu, lá bàng, hoàng đằng',
        subtitle: 'Tôn vinh sắc thái thiên nhiên thân thiện với làn da',
        duration: '8 giờ đun nhuộm & hãm màu',
        rawMaterials: ['Lụa mộc nguyên bản', 'Củ nâu rừng', 'Lá trầu không', 'Vỏ cây sú vẹt', 'Phèn chua tự nhiên'],
        keyTools: ['Chảo nhuộm bằng gang lớn', 'Sào tre vắt lụa', 'Bể nước giặt xả'],
        technicalSecret: 'Dùng nước giếng khơi ngọt lành Vạn Phúc để giặt lụa giúp sợi tơ mềm mượt và giữ màu thảo mộc bền chặt hàng chục năm.',
        instructions: [
          'Luộc lụa trong nước ấm có xà phòng dầu cọ tự nhiên để tẩy sạch lớp keo sê-ri-xin còn lại.',
          'Chiết xuất nước màu từ thảo mộc đun sôi kỹ rồi lọc trong.',
          'Nhúng lụa đảo đều tay liên tục trong nồi nhuộm ở nhiệt độ 60°C.',
          'Hãm màu bằng nước phèn chua pha loãng để cố định sắc tố trên sợi tơ.',
          'Xả lại nhiều lần bằng nước sạch mát lạnh và vắt nhẹ bằng tay.'
        ],
        caution: 'Vắt lụa bằng cách xoắn vặn mạnh sẽ làm gãy nếp tơ tằm tự nhiên không thể là phẳng.',
      },
      {
        id: 'vp-step-5',
        stepNumber: 5,
        stageName: 'Phơi & Hoàn thiện',
        title: 'Phơi lụa trong gió & Cuộn cây gắn tem chứng nhận',
        subtitle: 'Lụa bay trong gió mát rượi giữ trọn hương vị đất trời',
        duration: '4 - 6 giờ hong gió',
        rawMaterials: ['Khúc lụa đã nhuộm màu'],
        keyTools: ['Dây phơi sợi đay', 'Trục cuộn gỗ cuốn lụa', 'Bàn là hơi nước'],
        technicalSecret: 'Không phơi lụa dưới nắng gắt buổi trưa; chỉ phơi đón gió nhẹ buổi sớm hoặc dưới bóng râm có mái che để màu không bị giòn bay sắc.',
        instructions: [
          'Căng lụa thẳng thớm trên các dàn phơi bằng tre thoáng khí.',
          'Kiểm tra độ khô vừa tới của lụa (còn độ ẩm tự nhiên khoảng 8%).',
          'Là phẳng nhẹ bằng hơi nước ấm để thớ vải tơ tằm nằm phẳng mượt mà.',
          'Cuộn chặt tay vào ống lõi gỗ tròn và dán tem xuất xứ làng nghề Vạn Phúc.'
        ],
        caution: 'Nắng chiếu trực tiếp quá gắt sẽ làm mất đi độ bóng óng ánh đặc trưng của tơ tằm thượng phẩm.',
      }
    ],
    products: [
      {
        id: 'p-vp-01',
        villageId: 'van-phuc',
        name: 'Tấm Lụa Vân Cung Đình Hoa Cúc Dây',
        category: 'Lụa tơ tằm cao cấp',
        craftEra: 'Mẫu thức phỏng cổ Triều Nguyễn',
        dimensions: 'Khổ rộng 90 cm x Dài 15 mét',
        material: '100% sợi tơ tằm dâu tự nhiên',
        craftingTechniques: ['Mắc cửi hoa kép', 'Kỹ thuật dệt Lụa Vân vân chìm hoa nổi', 'Nhuộm màu thảo mộc thiên nhiên'],
        culturalMeaning: 'Hoa cúc dây biểu trưng cho sự trường thọ, thanh khiết và cốt cách quyền quý nhã nhặn.',
        craftingTime: '20 ngày',
        imageUrl: '/src/assets/images/craft_van_phuc_silk_1794324393429.jpg',
        artisanCredit: 'Nghệ nhân Ưu tú Đỗ Văn Hiển',
        description: 'Tấm lụa Vân khi nhìn nghiêng dưới ánh sáng mặt trời sẽ thấy các đóa hoa cúc lấp lánh ẩn hiện mờ ảo như mây bay bổng trên bầu trời.'
      },
      {
        id: 'p-vp-02',
        villageId: 'van-phuc',
        name: 'Khăn Quàng Lụa Tơ Tằm Dệt Tay Tự Nhiên',
        category: 'Thời trang di sản',
        craftEra: 'Đương đại',
        dimensions: 'Rộng 65 cm x Dài 180 cm',
        material: 'Tơ nõn tằm dâu',
        craftingTechniques: ['Se tơ đôi', 'Dệt trơn viền lược', 'Nhuộm vỏ củ nâu tự nhiên'],
        culturalMeaning: 'Sợi ấm êm dịu gửi trao nghĩa tình quê hương mộc mạc và thanh lịch xứ Kinh Kỳ.',
        craftingTime: '5 ngày',
        imageUrl: '/src/assets/images/craft_van_phuc_silk_1794324393429.jpg',
        artisanCredit: 'Nghệ nhân Phạm Khắc Hà',
        description: 'Khăn nhẹ chỉ 60 gram nhưng có khả năng giữ nhiệt kỳ diệu vào mùa đông và mát dịu thoáng khí giữa trưa hè oi ả.'
      }
    ]
  },
  {
    id: 'dong-ho',
    name: 'Làng Tranh Dân Gian Đông Hồ',
    location: 'Xã Song Hồ, Thị xã Thuận Thành',
    district: 'Thuận Thành',
    province: 'Bắc Ninh',
    foundedYear: 'Hơn 400 năm (Thế kỷ XVII thời Hậu Lê)',
    patriarch: 'Các bậc Tiền hiền dòng họ Nguyễn Đăng, họ Trần, họ Vương vùng đất Kinh Bắc',
    heritageRecognition: 'Di sản Văn hóa Phi vật thể Quốc gia (Đang trình UNESCO ghi danh Di sản cần bảo vệ khẩn cấp)',
    shortDescription: 'Dòng tranh dân gian thuần khiết mang hồn cốt dân tộc, in từ ván gỗ thị trên giấy điệp óng ánh vỏ sò và màu sắc từ cây cỏ cỏ quê hương.',
    fullHistory: 'Làng Đông Hồ nằm nép mình bên dòng sông Đuống thơ mộng. Hàng trăm năm qua, cứ mỗi độ Tết đến xuân về, chợ tranh Đông Hồ họp rộn rã đón người dân khắp vùng đồng bằng Bắc Bộ về mua tranh cầu may mắn, ấm no. Tranh Đông Hồ phản ánh chân thực đời sống nông nghiệp thanh bình, ước vọng bình dị và tính trào phúng sâu sắc của người Việt.',
    uniqueness: 'Giấy dó quét bột sò điệp óng ánh lấp lánh như xà cừ; hoàn toàn dùng màu sắc tự nhiên từ hoa hòe, lá chàm, than rơm, sỏi son; mỗi màu in một bản khắc gỗ riêng biệt.',
    coordinates: {
      lat: 21.0667,
      lng: 106.0833,
    },
    heroImage: '/src/assets/images/craft_dong_ho_woodblock_1794324393538.jpg',
    craftCategory: 'Khắc gỗ & Đồ họa thủ công dân gian',
    activeHouseholds: 25,
    activeArtisansCount: 8,
    soundscapeDescription: 'Tiếng đục đẽo ván gỗ lách cách êm tai, tiếng cọ lá thông quét bột điệp sột soạt trên mặt giấy dó và tiếng baren miết đều mặt tranh.',
    steps: [
      {
        id: 'dh-step-1',
        stepNumber: 1,
        stageName: 'Chế tạo giấy điệp',
        title: 'Quét bột vỏ sò điệp lên giấy Dó truyền thống',
        subtitle: 'Tạo nên nền giấy lấp lánh hạt ngọc xà cừ của sông biển',
        duration: '2 ngày nghiền & quét phơi',
        rawMaterials: ['Vỏ sò điệp biển vùng Bạch Long Vĩ', 'Hồ nếp nấu chín dẻo', 'Giấy dó Quảng Bạ'],
        keyTools: ['Cối đá giã vỏ điệp', 'Chổi thét (chổi quét làm bằng lá thông)', 'Dây phơi giấy tre'],
        technicalSecret: 'Đường quét của chổi lá thông phải kéo dài một mạch từ trên xuống dưới để tạo thành các thớ gân nổi li ti bắt sáng lóng lánh độc nhất vô nhị.',
        instructions: [
          'Rửa sạch vỏ sò điệp, nung nhẹ rồi giã trong cối đá thành bột mịn lấp lánh.',
          'Nấu bột nếp với nước tinh khiết thành hồ dán dẻo trong suốt.',
          'Hòa bột điệp vào nước hồ nếp theo tỷ lệ vàng gia truyền.',
          'Trải tờ giấy dó lên mặt ván nhẵn, nhúng chổi thét quét một đường dứt khoát trên mặt giấy.',
          'Treo phơi từng tờ trong gió nhẹ cho khô hẳn trước khi in.'
        ],
        caution: 'Hồ nếp nấu chưa chín kỹ sẽ làm giấy điệp bị mốc meo và bong tróc sau vài tuần bảo quản.',
      },
      {
        id: 'dh-step-2',
        stepNumber: 2,
        stageName: 'Pha chế sắc màu thảo mộc',
        title: 'Chế tạo 5 hệ màu ngũ hành từ cỏ cây hoa lá',
        subtitle: 'Sắc màu không bao giờ phai bạc dưới ánh sáng thời gian',
        duration: '4 - 6 giờ chiết xuất',
        rawMaterials: ['Màu vàng hoa hòe sao vàng', 'Màu đỏ sỏi son đồi núi', 'Màu đen than lá tre rơm nếp', 'Màu xanh lá chàm rừng', 'Màu trắng vỏ điệp'],
        keyTools: ['Cối đá nghiền khoáng', 'Vải màn lọc bột màu', 'Bát sứ đựng màu'],
        technicalSecret: 'Than đen đốt từ lá tre già ủ kín trong chum vại đem lại sắc đen huyền bí, sâu thẳm mà không có bất kỳ loại mực công nghiệp nào sánh được.',
        instructions: [
          'Rang cánh hoa hòe nở hé ngả vàng đậm rồi ninh sôi cô đặc lấy nước màu vàng rực.',
          'Đốt lá tre khô thành than trong nồi kín, tán nhỏ thành bột đen tuyền mịn màng.',
          'Nghiền sỏi son nhặt từ lòng suối đất đỏ tạo màu đỏ son nồng ấm.',
          'Ủ lá chàm lên men tự nhiên lấy sắc xanh biếc hòa dịu.',
          'Hòa mỗi loại bột màu với một lượng hồ nếp vừa đủ để giữ độ bám dính trên giấy điệp.'
        ],
        caution: 'Màu quá đặc sẽ làm vón cục bít kín đường rãnh ván khắc; màu quá loãng sẽ lem nhòe giấy dó.',
      },
      {
        id: 'dh-step-3',
        stepNumber: 3,
        stageName: 'Khắc ván gỗ',
        title: 'Đục chạm ván in nét và ván in màu trên gỗ thị',
        subtitle: 'Đường nét mộc mạc mà chứa chan sinh khí truyền đời',
        duration: '15 - 30 ngày / bộ ván tranh',
        rawMaterials: ['Gỗ thị già không cong vênh mối mọt', 'Sáp ong bảo dưỡng'],
        keyTools: ['Bộ dao bộ chàng đục 18 món', 'Đá mài bùn mịn', 'Kính lúp thợ khắc'],
        technicalSecret: 'Gỗ thị có thớ mịn màng thớ dọc ngang đều như nhau, khi khắc dao lia hướng nào cũng không bị xơ tưa gỗ.',
        instructions: [
          'Vẽ phác họa mẫu tranh tỉ mỉ lên giấy mỏng bằng mực nho.',
          'Dán mặt vẽ úp sấp lên thớ gỗ thị đã được bào phẳng nhẵn như gương.',
          'Dùng dao khắc mũi nhọn khoét sâu các mảng không cần in để nổi bật đường viền nét chữ.',
          'Mỗi bức tranh phải khắc từ 4 đến 5 ván gỗ riêng biệt: 1 ván in nét đen và 3-4 ván in từng màu sắc riêng.'
        ],
        caution: 'Chỉ cần một nhát dao sẩy tay phạm vào đường nét chính là phải bỏ toàn bộ khối gỗ khắc lại từ đầu.',
      },
      {
        id: 'dh-step-4',
        stepNumber: 4,
        stageName: 'In ấn tranh từng màu',
        title: 'In tuần tự các mảng màu và in dập nét đen cuối cùng',
        subtitle: 'Thao tác áp ván, dập baren nhịp nhàng như múa',
        duration: '10 phút / bức tranh hoàn chỉnh',
        rawMaterials: ['Giấy điệp đã phơi khô', 'Hệ màu tự nhiên đã pha'],
        keyTools: ['Bàn in tranh bằng gỗ thấp', 'Xơ mướp khô quét màu', 'Baren (tay xoa ép tranh) bọc vải thô'],
        technicalSecret: 'Quy tắc bất di bất dịch của nghệ nhân Đông Hồ: in màu đỏ trước, màu vàng tiếp theo, màu xanh sau đó và cuối cùng mới in ván nét đen để gom toàn bộ bức tranh lại.',
        instructions: [
          'Dùng xơ mướp phết một lớp màu vừa đủ đều khắp mặt ván in.',
          'Căn chỉnh cẩn thận tờ giấy điệp úp chuẩn xác vào các chốt cữ của ván gỗ.',
          'Dùng baren xoa đều nhẹ nhàng mặt sau tờ giấy để màu ngấm sâu vào từng thớ điệp.',
          'Bóc nhẹ tờ tranh ra, hong khô ráo hoàn toàn trước khi in tiếp ván màu kế tiếp.',
          'In ván nét đen sau cùng để khóa viền và hoàn tất sinh khí cho bức họa.'
        ],
        caution: 'Lệch cữ dù nửa milimet cũng làm mắt mũi nhân vật hay đường nét con giống bị lệch lạc méo mó.',
      }
    ],
    products: [
      {
        id: 'p-dh-01',
        villageId: 'dong-ho',
        name: 'Tranh Đám Cưới Chuột (Khắc Gỗ Cổ Bản)',
        category: 'Tranh trào phúng & chúc phúc',
        craftEra: 'Bản khắc cổ thế kỷ XVIII',
        dimensions: 'Rộng 37 cm x Dài 26 cm',
        material: 'Giấy điệp truyền thống, Màu thực vật tự nhiên, Mực than lá tre',
        craftingTechniques: ['Khắc tay gỗ thị', 'In 4 bản màu tự nhiên', 'Ép bằng xơ mướp baren'],
        culturalMeaning: 'Bức tranh trào phúng châm biếm sâu cay thói tham nhũng của quan lại xưa, đồng thời thể hiện nét ứng xử mềm dẻo khôn khéo của người dân lao động để mưu cầu hòa bình hạnh phúc.',
        craftingTime: '3 ngày in ấn & phơi mộc',
        imageUrl: '/src/assets/images/craft_dong_ho_woodblock_1794324393538.jpg',
        artisanCredit: 'Nghệ nhân Nhân dân Nguyễn Đăng Chế',
        description: 'Bản in thủ công từ ván gỗ thị nguyên khối niên đại hơn 100 năm được bảo quản nghiêm ngặt tại gia tộc họ Nguyễn Đăng.'
      },
      {
        id: 'p-dh-02',
        villageId: 'dong-ho',
        name: 'Tranh Vinh Hoa - Phú Quý (Bộ Đôi Em Bé Ôm Gà & Ôm Vịt)',
        category: 'Tranh tết chúc phúc',
        craftEra: 'Truyền thống Kinh Bắc',
        dimensions: 'Rộng 28 cm x Dài 38 cm mỗi bức',
        material: 'Giấy dó quét điệp lấp lánh',
        craftingTechniques: ['In mộc bản 5 màu ngũ hành'],
        culturalMeaning: 'Cầu chúc gia đình sinh con ngoan ngoãn, tài năng đức độ, gia môn vinh hiển hưng thịnh dài lâu.',
        craftingTime: '4 ngày hoàn thiện',
        imageUrl: '/src/assets/images/craft_dong_ho_woodblock_1794324393538.jpg',
        artisanCredit: 'Nghệ nhân Ưu tú Nguyễn Thị Oanh',
        description: 'Từng vệt chổi quét điệp lấp lánh nâng đỡ nét vẽ bụ bẫm của bé thơ và những cánh hoa cúc hoa sen bung nở sắc xuân.'
      }
    ]
  },
  {
    id: 'non-chuong',
    name: 'Làng Nón Chuông',
    location: 'Xã Phương Trung, Huyện Thanh Oai',
    district: 'Thanh Oai',
    province: 'Hà Nội',
    foundedYear: 'Hơn 300 năm (Thời chúa Trịnh)',
    patriarch: 'Các bậc cao niên dòng họ Nguyễn, họ Phạm vùng Thanh Oai',
    heritageRecognition: 'Làng nghề truyền thống tiêu biểu Thủ đô Hà Nội',
    shortDescription: 'Cái nôi của những chiếc nón lá trắng nõn, nón quai thao trang nhã che nghiêng nụ cười thiếu nữ Việt Nam qua bao thế hệ.',
    fullHistory: 'Làng Chuông nép mình bên dòng sông Đáy hiền hòa. Từ xa xưa, nón Chuông đã nức tiếng gần xa vì độ bền, đường kim mũi chỉ đều tăm tắp 16 lớp vành tre chuốt mịn. Chiếc nón không chỉ che nắng che mưa mà còn là biểu tượng thanh cao của tà áo dài phụ nữ Việt.',
    uniqueness: 'Nón có đúng 16 vành tre chuốt tròn trĩnh; lá cọ lấy từ rừng đồi Quảng Bình được vò cát và ủi nóng phẳng lì; đường kim khâu bằng sợi cước trong suốt khéo léo giấu mũi kim.',
    coordinates: {
      lat: 20.8521,
      lng: 105.7482,
    },
    heroImage: '/src/assets/images/hero_craft_village_banner_1794324392181.jpg',
    craftCategory: 'Đan lát & Thủ công mỹ nghệ lá',
    activeHouseholds: 800,
    activeArtisansCount: 15,
    soundscapeDescription: 'Tiếng cạo lá sột soạt, tiếng kéo cắt cọ tanh tách và tiếng kim khâu rút sợi chỉ nhịp nhàng qua từng vành nón tre.',
    steps: [
      {
        id: 'nc-step-1',
        stepNumber: 1,
        stageName: 'Xử lý lá cọ',
        title: 'Vò cát và là phẳng lá cọ non',
        subtitle: 'Lá phải trắng ngà nõn nà không rách mép gân',
        duration: '2 ngày chuẩn bị lá',
        rawMaterials: ['Lá cọ non tuyển chọn', 'Cát mịn sạch'],
        keyTools: ['Bó cát vò lá', 'Lưỡi cày gang đốt nóng làm bàn là', 'Giẻ ẩm'],
        technicalSecret: 'Miết lá qua lưỡi cày gang ấm lửa phải kéo đều tay, nếu quá nóng lá sẽ bị giòn cháy, nếu nguội lá không thẳng nếp.',
        instructions: [
          'Lá cọ tươi mua về được vò trong cát sạch cho mềm dai thớ gân.',
          'Phơi lá sương đêm và nắng dịu 2 ngày để lá chuyển sang màu trắng ngà thanh nhã.',
          'Dùng miếng giẻ ẩm miết lá trên mặt lưỡi cày gang ấm nóng để là phẳng phiu từng phiến lá.'
        ],
        caution: 'Lá còn ẩm ướt khi may nón sẽ bị ố vàng mốc đen sau thời gian ngắn sử dụng.',
      },
      {
        id: 'nc-step-2',
        stepNumber: 2,
        stageName: 'Chuốt vành nón',
        title: 'Uốn 16 lớp vành tre tròn trịa',
        subtitle: 'Số 16 tượng trưng cho nét đẹp trăng tròn tuổi đôi mươi',
        duration: '1 ngày chuốt nứa',
        rawMaterials: ['Tre nứa già dẻo dai', 'Dây buộc'],
        keyTools: ['Dao chuốt vành bén ngọt', 'Khuôn nón gỗ hình chóp nón'],
        technicalSecret: '16 vành tre phải được chuốt nhỏ dần từ vành đáy (vành 1) đến chóp nón (vành 16), đường kính và chu vi chuẩn mực không méo lệch.',
        instructions: [
          'Chẻ nứa thành những nan mỏng đều tăm tắp.',
          'Chuốt nhẵn bóng không để lại dằm xước tay.',
          'Uốn tròn các nan tre và nối mép bằng chỉ dù bền chắc.',
          'Xếp 16 vành vào các rãnh chuẩn của khuôn nón gỗ lim.'
        ],
        caution: 'Vành tre không tròn sẽ làm nón bị vặn vẹo hình elip không giữ được dáng chóp cân đối.',
      },
      {
        id: 'nc-step-3',
        stepNumber: 3,
        stageName: 'Khâu nón',
        title: 'Chằm lá và luồn kim may từng mũi chỉ giấu mối',
        subtitle: 'Mũi kim đều đặn 3 mũi/cm thẳng hàng tăm tắp',
        duration: '4 - 5 giờ / chiếc nón',
        rawMaterials: ['Lá cọ phẳng', 'Sợi cước trong suốt', 'Mo tre lót lòng nón'],
        keyTools: ['Kim khâu dài mảnh', 'Đê sắt bảo vệ ngón tay'],
        technicalSecret: 'Giữa hai lớp lá cọ phải có một lớp mo tre mỏng để nón vừa nhẹ vừa cứng cáp chống chịu được mưa gió dông bão.',
        instructions: [
          'Xếp lớp lá thứ nhất quanh khuôn nón.',
          'Chèn lớp mo tre mỏng cách nhiệt và chống thấm nước ở giữa.',
          'Xếp lớp lá thứ hai đều mép che phủ kín khít.',
          'Dùng kim khâu chỉ cước chằm từng mũi kim từ vành trên cùng xuống vành dưới đáy.',
          'Cắt tỉa gọn gàng phần lá thừa ở vành chân nón và viền nẹp vải màu trang nhã.'
        ],
        caution: 'Lực rút kim quá mạnh sẽ làm rách toạc lá cọ mỏng manh; rút lỏng nón sẽ xộc xệch bung vành.',
      }
    ],
    products: [
      {
        id: 'p-nc-01',
        villageId: 'non-chuong',
        name: 'Nón Quai Thao Cổ Phục Làng Chuông',
        category: 'Nón truyền thống lễ hội',
        craftEra: 'Phục dựng mẫu cổ quan họ Kinh Bắc',
        dimensions: 'Đường kính 75 cm, Mặt phẳng tròn vành dẹt',
        material: 'Lá cọ trắng, Tre cật già, Dải quai thao tơ tằm dệt nhuộm thủ công',
        craftingTechniques: ['Chằm nón ba lớp', 'Bện quai thao tết nút hoa sen', 'Thêu hoa văn chìm'],
        culturalMeaning: 'Nét duyên quan họ trao gửi tâm tình trong những ngày hội xuân đầu năm.',
        craftingTime: '6 ngày',
        imageUrl: '/src/assets/images/hero_craft_village_banner_1794324392181.jpg',
        artisanCredit: 'Nghệ nhân Tạ Thu Hương',
        description: 'Chiếc nón quai thao với dải thao tơ tằm buông rủ tha thướt là điểm nhấn tuyệt mỹ của di sản quan họ Bắc Ninh.'
      }
    ]
  }
];

export const ARTISANS_DIRECTORY: Artisan[] = [
  {
    id: 'art-01',
    villageId: 'bat-trang',
    fullName: 'Trần Độ',
    title: 'Nghệ nhân Nhân dân',
    birthYear: 1957,
    craftField: 'Phục chế men gốm cổ Lý - Trần - Lê',
    yearsOfExperience: 52,
    consentVerified: true,
    consentCode: 'VB-CBTT/2024-NN-01',
    consentDate: '15/03/2024',
    bio: 'Được tôn vinh là "Vua phục chế men gốm cổ", Nghệ nhân Nhân dân Trần Độ đã dành hơn nửa thế kỷ tìm tòi và hồi sinh hơn 70 bài men cổ của cha ông thất truyền, đặc biệt là men ngọc thời Lý, men rạn thời Mạc và men lam thời Hậu Lê. Các tác phẩm của ông thường được chọn làm quà tặng ngoại giao cấp quốc gia cho các nguyên thủ thế giới.',
    workshopAddress: 'Xóm 2, Thôn Giang Cao, Xã Bát Tràng, Gia Lâm, Hà Nội',
    contactPhone: '0912 345 889',
    masterpieces: [
      'Bình gốm hoa nâu phục chế thời Trần (Trưng bày Bảo tàng Lịch sử Quốc gia)',
      'Lục bình men rạn đắp nổi Tứ linh (Quà tặng APEC 2017)',
      'Đỉnh hương men lam triều Mạc tại Hoàng thành Thăng Long'
    ],
    awards: [
      'Danh hiệu Nghệ nhân Nhân dân cấp Nhà nước (Năm 2016)',
      'Huân chương Lao động Hạng Ba',
      'Giải thưởng Tinh hoa Làng nghề Việt Nam'
    ],
    quote: 'Mỗi mẻ gốm ra lò là một lần nín thở trước lửa. Lửa dạy ta đức tính khiêm nhường, kiên nhẫn và nâng niu từng hạt phù sa của quê mẹ.',
    avatarUrl: '/src/assets/images/craft_bat_trang_pottery_1794324392056.jpg'
  },
  {
    id: 'art-02',
    villageId: 'bat-trang',
    fullName: 'Tô Thanh Sơn',
    title: 'Nghệ nhân Ưu tú',
    birthYear: 1961,
    craftField: 'Gốm vuốt tay độc bản & Hỏa biến',
    yearsOfExperience: 45,
    consentVerified: true,
    consentCode: 'VB-CBTT/2024-NN-02',
    consentDate: '22/04/2024',
    bio: 'Bậc thầy về kỹ thuật vuốt tay không dùng khuôn ép. Nghệ nhân Tô Thanh Sơn nổi tiếng với những tác phẩm gốm độc bản mang hơi thở đương đại nhưng đậm đà chất liệu gốm cội nguồn Bát Tràng. Ông là người tiên phong đưa kỹ thuật nung men hỏa biến đạt đến độ biểu cảm hội họa sâu sắc.',
    workshopAddress: 'Khu trung tâm Làng cổ Bát Tràng, Gia Lâm, Hà Nội',
    contactPhone: '0983 219 765',
    masterpieces: [
      'Bộ tác phẩm "Giọt thời gian" men ngọc hỏa biến',
      'Bình gốm dáng Sen Mùa Hạ',
      'Bộ trà cụ Thư Pháp độc bản'
    ],
    awards: [
      'Danh hiệu Nghệ nhân Ưu tú (Năm 2019)',
      'Cúp Vàng Bàn tay vàng Thủ công Mỹ nghệ Việt Nam'
    ],
    quote: 'Chiếc bàn xoay không đơn thuần là công cụ xoay đất, mà là chiếc cầu nối giữa tâm hồn người thợ với hình hài đất mẹ.',
    avatarUrl: '/src/assets/images/craft_bat_trang_pottery_1794324392056.jpg'
  },
  {
    id: 'art-03',
    villageId: 'bat-trang',
    fullName: 'Vương Mạnh Tuấn',
    title: 'Nghệ nhân Bàn tay vàng',
    birthYear: 1968,
    craftField: 'Nghiên cứu & Chế tác ấm Tử Sa Hoàng Thổ Việt',
    yearsOfExperience: 38,
    consentVerified: true,
    consentCode: 'VB-CBTT/2024-NN-03',
    consentDate: '10/05/2024',
    bio: 'Nghệ nhân Vương Mạnh Tuấn là người đã dày công nhiều năm tìm kiếm chất đất khoáng phù sa sông Hồng phong hóa để tạo nên dòng gốm Tử sa Hoàng thổ thuần Việt, có khả năng giữ nhiệt và hương trà tuyệt hảo không thua kém các dòng ấm danh tiếng thế giới.',
    workshopAddress: 'Thôn Bát Tràng, Xã Bát Tràng, Gia Lâm, Hà Nội',
    contactPhone: '0904 123 456',
    masterpieces: [
      'Bộ ấm trà Tử sa Thạch Lựu',
      'Ấm trà Quả Chuông đất đỏ Bát Tràng',
      'Tác phẩm "Hồn Trà Đại Việt"'
    ],
    awards: [
      'Chứng nhận Bàn tay vàng Ngành Gốm sứ',
      'Sản phẩm OCOP 5 sao Quốc gia'
    ],
    quote: 'Chất đất mẹ Việt Nam ẩn chứa tinh hoa diệu kỳ, người làm nghề chỉ cần đủ tình yêu và lòng kiên định là đất sẽ nở hoa.',
    avatarUrl: '/src/assets/images/craft_bat_trang_pottery_1794324392056.jpg'
  },
  {
    id: 'art-04',
    villageId: 'van-phuc',
    fullName: 'Đỗ Văn Hiển',
    title: 'Nghệ nhân Ưu tú',
    birthYear: 1954,
    craftField: 'Kỹ nghệ dệt Lụa Vân & Tơ tằm truyền thống',
    yearsOfExperience: 50,
    consentVerified: true,
    consentCode: 'VB-CBTT/2024-NN-04',
    consentDate: '05/01/2024',
    bio: 'Sinh ra trong một gia đình 4 đời theo nghề dệt tại Vạn Phúc, Nghệ nhân Đỗ Văn Hiển là người đã kiên trì gìn giữ và truyền dạy bí quyết dệt Lụa Vân – dòng lụa quý phái đòi hỏi kỹ thuật mắc cửi hoa văn cực kỳ tinh vi của ông cha.',
    workshopAddress: 'Số 28 Phố Lụa, Phường Vạn Phúc, Quận Hà Đông, Hà Nội',
    contactPhone: '0913 589 224',
    masterpieces: [
      'Tấm lụa Vân Cúc Dây dệt theo mẫu cổ bảo tàng',
      'Bộ lụa tơ tằm Cung đình phục chế trang phục thời Nguyễn',
      'Khăn lụa gấm The Vạn Phúc'
    ],
    awards: [
      'Nghệ nhân Ưu tú cấp Nhà nước (Năm 2020)',
      'Bằng khen của Bộ Nông nghiệp và PTNT về bảo tồn làng nghề'
    ],
    quote: 'Tiếng thoi dệt đã ngấm vào máu thịt từ thuở lọt lòng. Mỗi mét lụa mịn màng là một bài thơ viết bằng sợi tơ óng ả.',
    avatarUrl: '/src/assets/images/craft_van_phuc_silk_1794324393429.jpg'
  },
  {
    id: 'art-05',
    villageId: 'van-phuc',
    fullName: 'Phạm Khắc Hà',
    title: 'Nghệ nhân Làng nghề',
    birthYear: 1959,
    craftField: 'Chủ tịch Hiệp hội Làng nghề Dệt lụa Vạn Phúc - Bảo tồn & Đổi mới sáng tạo',
    yearsOfExperience: 42,
    consentVerified: true,
    consentCode: 'VB-CBTT/2024-NN-05',
    consentDate: '18/02/2024',
    bio: 'Với vai trò là người đứng đầu Hiệp hội Làng nghề Vạn Phúc, ông Phạm Khắc Hà vừa là người thợ tài hoa trực tiếp ngồi bên khung cửi, vừa là người kết nối các thế hệ nghệ nhân trẻ đưa lụa Vạn Phúc vươn xa trên thị trường quốc tế.',
    workshopAddress: 'Đường Vạn Phúc, Hà Đông, Hà Nội',
    contactPhone: '0979 456 123',
    masterpieces: [
      'Bộ sưu tập lụa màu tự nhiên từ thảo mộc Kinh Bắc',
      'Khăn lụa tơ tằm Song Hỷ',
      'Đề án số hóa mẫu hoa văn Lụa Vân cổ truyền'
    ],
    awards: [
      'Huy hiệu Vì sự nghiệp Phát triển Làng nghề Việt Nam',
      'Bằng khen Chủ tịch UBND Thành phố Hà Nội'
    ],
    quote: 'Muốn lụa sống được trong đời sống hôm nay, ta phải giữ bằng được cái gốc tinh khiết của tơ tằm rồi thổi vào đó hơi thở thời đại.',
    avatarUrl: '/src/assets/images/craft_van_phuc_silk_1794324393429.jpg'
  },
  {
    id: 'art-06',
    villageId: 'dong-ho',
    fullName: 'Nguyễn Đăng Chế',
    title: 'Nghệ nhân Nhân dân',
    birthYear: 1935,
    craftField: 'Lưu giữ & Khắc mộc bản tranh dân gian Đông Hồ',
    yearsOfExperience: 70,
    consentVerified: true,
    consentCode: 'VB-CBTT/2024-NN-06',
    consentDate: '02/03/2024',
    bio: 'Cây đại thụ của dòng tranh Đông Hồ. Trong những giai đoạn làng tranh đứng trước nguy cơ lụi tàn, ông đã bền bỉ đi khắp nơi thu mua, chuộc lại và bảo tồn hàng trăm bản khắc gỗ cổ có tuổi đời từ hàng thế kỷ của các cụ tổ tiên để lại.',
    workshopAddress: 'Thôn Đông Khê, Xã Song Hồ, Thị xã Thuận Thành, Bắc Ninh',
    contactPhone: '0222 3865 241',
    masterpieces: [
      'Bộ ván in cổ nguyên bản "Đám Cưới Chuột" thế kỷ XIX',
      'Tranh "Hứng Dừa" và "Đánh Ghen" bản khắc gỗ thị',
      'Bộ mộc bản Tứ Quý Xuân Hạ Thu Đông'
    ],
    awards: [
      'Nghệ nhân Nhân dân cấp Nhà nước',
      'Giải thưởng Văn hiến Thăng Long',
      'Huy chương Vì sự nghiệp Văn hóa Nghệ thuật Dân gian'
    ],
    quote: 'Tranh Đông Hồ là hồn quê Việt. Chừng nào trên bàn thờ ngày Tết còn treo bức tranh chúc phúc, chừng đó dân tộc ta còn cội nguồn.',
    avatarUrl: '/src/assets/images/craft_dong_ho_woodblock_1794324393538.jpg'
  },
  {
    id: 'art-07',
    villageId: 'dong-ho',
    fullName: 'Nguyễn Thị Oanh',
    title: 'Nghệ nhân Ưu tú',
    birthYear: 1960,
    craftField: 'Nghệ nhân nữ tiêu biểu - Pha màu thảo mộc & Kỹ thuật in tranh',
    yearsOfExperience: 48,
    consentVerified: true,
    consentCode: 'VB-CBTT/2024-NN-07',
    consentDate: '12/04/2024',
    bio: 'Con dâu trưởng của Nghệ nhân Nguyễn Đăng Chế, bà là người nắm giữ trọn vẹn bí quyết pha chế các sắc màu ngũ hành từ hoa hòe, tro rơm nếp và quét giấy điệp. Đôi tay bà thoăn thoắt ép baren in tranh chuẩn xác đến từng milimet.',
    workshopAddress: 'Trung tâm Bảo tồn Tranh Đông Hồ, Xã Song Hồ, Thuận Thành, Bắc Ninh',
    contactPhone: '0988 776 543',
    masterpieces: [
      'Tranh Vinh Hoa Phú Quý giấy điệp óng ánh',
      'Tranh Đàn Lợn Âm Dương màu tự nhiên',
      'Tranh Mục Đồng Thổi Sáo trên lưng trâu'
    ],
    awards: [
      'Nghệ nhân Ưu tú ngành Di sản Văn hóa Phi vật thể',
      'Giải thưởng Phụ nữ sáng tạo bảo tồn văn hóa truyền thống'
    ],
    quote: 'Mỗi vệt màu từ cây cỏ thiên nhiên mang theo linh khí của đất đai, quét lên giấy điệp tự nó phát sáng tấm lòng nhân hậu của người Việt.',
    avatarUrl: '/src/assets/images/craft_dong_ho_woodblock_1794324393538.jpg'
  },
  {
    id: 'art-08',
    villageId: 'non-chuong',
    fullName: 'Tạ Thu Hương',
    title: 'Nghệ nhân Bàn tay vàng',
    birthYear: 1968,
    craftField: 'Nón lá truyền thống, nón quai thao & nón nghệ thuật',
    yearsOfExperience: 40,
    consentVerified: true,
    consentCode: 'VB-CBTT/2024-NN-08',
    consentDate: '20/05/2024',
    bio: 'Người phụ nữ đưa chiếc nón làng Chuông vươn ra thế giới. Nghệ nhân Tạ Thu Hương đã sáng tạo thêm các dòng nón lá lụa, nón sen, nón thêu hoa văn phục vụ du lịch và ngoại giao văn hóa, tạo công ăn việc làm cho hàng trăm phụ nữ trong làng.',
    workshopAddress: 'Thôn Mã Lai, Xã Phương Trung, Thanh Oai, Hà Nội',
    contactPhone: '0982 147 896',
    masterpieces: [
      'Bộ nón Quai Thao phục dựng quan họ Kinh Bắc',
      'Nón lá sen thêu họa tiết Chùa Một Cột',
      'Nón lá 16 vành tre xuất khẩu các kỳ hội chợ Châu Âu'
    ],
    awards: [
      'Danh hiệu Bàn tay vàng Thủ công Mỹ nghệ',
      'Phụ nữ Thủ đô tiêu biểu'
    ],
    quote: 'Chiếc nón lá nhỏ bé nghiêng che nụ cười duyên dáng, là quốc hồn quốc túy không bao giờ có thể phai mờ.',
    avatarUrl: '/src/assets/images/hero_craft_village_banner_1794324392181.jpg'
  }
];
