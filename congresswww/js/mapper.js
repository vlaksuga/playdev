if('content' in document.createElement('template')) {
    var t = document.querySelector('#memberList');
    var place = document.querySelector('ul.list');
    var dummydata = [{"memberpkey":1,"version":21,"membername":"강기윤","party":"국민의힘","committee":"보건복지위원회","district":"경남 창원시성산구","sex":0,"level":2,"kind":0},
    {"memberpkey":2,"version":21,"membername":"강대식","party":"국민의힘","committee":"국방위원회","district":"대구 동구을","sex":0,"level":1,"kind":0},
    {"memberpkey":3,"version":21,"membername":"강득구","party":"더불어민주당","committee":"교육위원회","district":"경기 안양시만안구","sex":0,"level":1,"kind":0},
    {"memberpkey":4,"version":21,"membername":"강민국","party":"국민의힘","committee":"정무위원회","district":"경남 진주시을","sex":0,"level":1,"kind":0},
    {"memberpkey":5,"version":21,"membername":"강민정","party":"열린민주당","committee":"교육위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":6,"version":21,"membername":"강병원","party":"더불어민주당","committee":"보건복지위원회","district":"서울 은평구을","sex":0,"level":2,"kind":0},
    {"memberpkey":7,"version":21,"membername":"강선우","party":"더불어민주당","committee":"보건복지위원회","district":"서울 강서구갑","sex":1,"level":1,"kind":0},
    {"memberpkey":8,"version":21,"membername":"강은미","party":"정의당","committee":"환경노동위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":9,"version":21,"membername":"강준현","party":"더불어민주당","committee":"국토교통위원회","district":"세종특별자치시을","sex":0,"level":1,"kind":0},
    {"memberpkey":10,"version":21,"membername":"강훈식","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"충남 아산시을","sex":0,"level":2,"kind":0},
    {"memberpkey":11,"version":21,"membername":"고민정","party":"더불어민주당","committee":"보건복지위원회","district":"서울 광진구을","sex":1,"level":1,"kind":0},
    {"memberpkey":12,"version":21,"membername":"고영인","party":"더불어민주당","committee":"보건복지위원회","district":"경기 안산시단원구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":13,"version":21,"membername":"고용진","party":"더불어민주당","committee":"기획재정위원회","district":"서울 노원구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":14,"version":21,"membername":"곽상도","party":"국민의힘","committee":"교육위원회","district":"대구 중구남구","sex":0,"level":2,"kind":0},
    {"memberpkey":15,"version":21,"membername":"구자근","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"경북 구미시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":16,"version":21,"membername":"권명호","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"울산 동구","sex":0,"level":1,"kind":0},
    {"memberpkey":17,"version":21,"membername":"권성동","party":"국민의힘","committee":"법제사법위원회","district":"강원 강릉시","sex":0,"level":4,"kind":0},
    {"memberpkey":18,"version":21,"membername":"권영세","party":"국민의힘","committee":"환경노동위원회","district":"서울 용산구","sex":0,"level":4,"kind":0},
    {"memberpkey":19,"version":21,"membername":"권은희","party":"국민의당","committee":"정무위원회","district":"비례대표","sex":1,"level":3,"kind":1},
    {"memberpkey":20,"version":21,"membername":"권인숙","party":"더불어민주당","committee":"교육위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":21,"version":21,"membername":"권칠승","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"경기 화성시병","sex":0,"level":2,"kind":0},
    {"memberpkey":22,"version":21,"membername":"기동민","party":"더불어민주당","committee":"국방위원회","district":"서울 성북구을","sex":0,"level":2,"kind":0},
    {"memberpkey":23,"version":21,"membername":"김경만","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":24,"version":21,"membername":"김경협","party":"더불어민주당","committee":"기획재정위원회","district":"경기 부천시갑","sex":0,"level":3,"kind":0},
    {"memberpkey":25,"version":21,"membername":"김교흥","party":"더불어민주당","committee":"국토교통위원회","district":"인천 서구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":26,"version":21,"membername":"김기현","party":"국민의힘","committee":"외교통일위원회","district":"울산 남구을","sex":0,"level":4,"kind":0},
    {"memberpkey":27,"version":21,"membername":"김남국","party":"더불어민주당","committee":"법제사법위원회","district":"경기 안산시단원구을","sex":0,"level":1,"kind":0},
    {"memberpkey":28,"version":21,"membername":"김도읍","party":"국민의힘","committee":"행정안전위원회","district":"부산 북구강서구을","sex":0,"level":3,"kind":0},
    {"memberpkey":29,"version":21,"membername":"김두관","party":"더불어민주당","committee":"기획재정위원회","district":"경남 양산시을","sex":0,"level":2,"kind":0},
    {"memberpkey":30,"version":21,"membername":"김미애","party":"국민의힘","committee":"보건복지위원회","district":"부산 해운대구을","sex":1,"level":1,"kind":0},
    {"memberpkey":31,"version":21,"membername":"김민기","party":"더불어민주당","committee":"국방위원회","district":"경기 용인시을","sex":0,"level":3,"kind":0},
    {"memberpkey":32,"version":21,"membername":"김민석","party":"더불어민주당","committee":"보건복지위원회","district":"서울 영등포구을","sex":0,"level":3,"kind":0},
    {"memberpkey":33,"version":21,"membername":"김민철","party":"더불어민주당","committee":"행정안전위원회","district":"경기 의정부시을","sex":0,"level":1,"kind":0},
    {"memberpkey":34,"version":21,"membername":"김병기","party":"더불어민주당","committee":"국방위원회","district":"서울 동작구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":35,"version":21,"membername":"김병욱","party":"더불어민주당","committee":"정무위원회","district":"경기 성남시분당구을","sex":0,"level":2,"kind":0},
    {"memberpkey":36,"version":21,"membername":"김병욱","party":"국민의힘","committee":"교육위원회","district":"경북 포항시남구울릉군","sex":0,"level":1,"kind":0},
    {"memberpkey":37,"version":21,"membername":"김병주","party":"더불어민주당","committee":"국방위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":38,"version":21,"membername":"김상훈","party":"국민의힘","committee":"국토교통위원회","district":"대구 서구","sex":0,"level":3,"kind":0},
    {"memberpkey":39,"version":21,"membername":"김상희","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"경기 부천시병","sex":1,"level":4,"kind":0},
    {"memberpkey":40,"version":21,"membername":"김석기","party":"국민의힘","committee":"외교통일위원회","district":"경북 경주시","sex":0,"level":2,"kind":0},
    {"memberpkey":41,"version":21,"membername":"김선교","party":"국민의힘","committee":"농림축산식품해양수산위원회","district":"경기 여주시양평군","sex":0,"level":1,"kind":0},
    {"memberpkey":42,"version":21,"membername":"김성원","party":"국민의힘","committee":"환경노동위원회","district":"경기 동두천시연천군","sex":0,"level":2,"kind":0},
    {"memberpkey":43,"version":21,"membername":"김성주","party":"더불어민주당","committee":"보건복지위원회","district":"전북 전주시병","sex":0,"level":2,"kind":0},
    {"memberpkey":44,"version":21,"membername":"김성환","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"서울 노원구병","sex":0,"level":2,"kind":0},
    {"memberpkey":45,"version":21,"membername":"김수흥","party":"더불어민주당","committee":"기획재정위원회","district":"전북 익산시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":46,"version":21,"membername":"김승남","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"전남 고흥군보성군장흥군강진군","sex":0,"level":2,"kind":0},
    {"memberpkey":47,"version":21,"membername":"김승수","party":"국민의힘","committee":"문화체육관광위원회","district":"대구 북구을","sex":0,"level":1,"kind":0},
    {"memberpkey":48,"version":21,"membername":"김승원","party":"더불어민주당","committee":"문화체육관광위원회","district":"경기 수원시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":49,"version":21,"membername":"김영배","party":"더불어민주당","committee":"법제사법위원회","district":"서울 성북구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":50,"version":21,"membername":"김영식","party":"국민의힘","committee":"과학기술정보방송통신위원회","district":"경북 구미시을","sex":0,"level":1,"kind":0},
    {"memberpkey":51,"version":21,"membername":"김영주","party":"더불어민주당","committee":"외교통일위원회","district":"서울 영등포구갑","sex":1,"level":4,"kind":0},
    {"memberpkey":52,"version":21,"membername":"김영진","party":"더불어민주당","committee":"기획재정위원회","district":"경기 수원시병","sex":0,"level":2,"kind":0},
    {"memberpkey":53,"version":21,"membername":"김영호","party":"더불어민주당","committee":"외교통일위원회","district":"서울 서대문구을","sex":0,"level":2,"kind":0},
    {"memberpkey":54,"version":21,"membername":"김예지","party":"국민의힘","committee":"문화체육관광위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":55,"version":21,"membername":"김용민","party":"더불어민주당","committee":"법제사법위원회","district":"경기 남양주시병","sex":0,"level":1,"kind":0},
    {"memberpkey":56,"version":21,"membername":"김용판","party":"국민의힘","committee":"행정안전위원회","district":"대구 달서구병","sex":0,"level":1,"kind":0},
    {"memberpkey":57,"version":21,"membername":"김웅","party":"국민의힘","committee":"환경노동위원회","district":"서울 송파구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":58,"version":21,"membername":"김원이","party":"더불어민주당","committee":"보건복지위원회","district":"전남 목포시","sex":0,"level":1,"kind":0},
    {"memberpkey":59,"version":21,"membername":"김윤덕","party":"더불어민주당","committee":"국토교통위원회","district":"전북 전주시갑","sex":0,"level":2,"kind":0},
    {"memberpkey":60,"version":21,"membername":"김은혜","party":"국민의힘","committee":"국토교통위원회","district":"경기 성남시분당구갑","sex":1,"level":1,"kind":0},
    {"memberpkey":61,"version":21,"membername":"김의겸","party":"열린민주당","committee":"문화체육관광위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":62,"version":21,"membername":"김정재","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"경북 포항시북구","sex":1,"level":2,"kind":0},
    {"memberpkey":63,"version":21,"membername":"김정호","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"경남 김해시을","sex":0,"level":2,"kind":0},
    {"memberpkey":64,"version":21,"membername":"김종민","party":"더불어민주당","committee":"법제사법위원회","district":"충남 논산시계룡시금산군","sex":0,"level":2,"kind":0},
    {"memberpkey":65,"version":21,"membername":"김주영","party":"더불어민주당","committee":"기획재정위원회","district":"경기 김포시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":66,"version":21,"membername":"김진표","party":"더불어민주당","committee":"국방위원회","district":"경기 수원시무","sex":0,"level":5,"kind":0},
    {"memberpkey":67,"version":21,"membername":"김철민","party":"더불어민주당","committee":"교육위원회","district":"경기 안산시상록구을","sex":0,"level":2,"kind":0},
    {"memberpkey":68,"version":21,"membername":"김태년","party":"더불어민주당","committee":"외교통일위원회","district":"경기 성남시수정구","sex":0,"level":4,"kind":0},
    {"memberpkey":69,"version":21,"membername":"김태호","party":"국민의힘","committee":"외교통일위원회","district":"경남 산청군함양군거창군합천군","sex":0,"level":3,"kind":0},
    {"memberpkey":70,"version":21,"membername":"김태흠","party":"국민의힘","committee":"기획재정위원회","district":"충남 보령시서천군","sex":0,"level":3,"kind":0},
    {"memberpkey":71,"version":21,"membername":"김한정","party":"더불어민주당","committee":"정무위원회","district":"경기 남양주시을","sex":0,"level":2,"kind":0},
    {"memberpkey":72,"version":21,"membername":"김형동","party":"국민의힘","committee":"행정안전위원회","district":"경북 안동시예천군","sex":0,"level":1,"kind":0},
    {"memberpkey":73,"version":21,"membername":"김홍걸","party":"무소속","committee":"외교통일위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":74,"version":21,"membername":"김회재","party":"더불어민주당","committee":"국토교통위원회","district":"전남 여수시을","sex":0,"level":1,"kind":0},
    {"memberpkey":75,"version":21,"membername":"김희곤","party":"국민의힘","committee":"정무위원회","district":"부산 동래구","sex":0,"level":1,"kind":0},
    {"memberpkey":76,"version":21,"membername":"김희국","party":"국민의힘","committee":"국토교통위원회","district":"경북 군위군의성군청송군영덕군","sex":0,"level":2,"kind":0},
    {"memberpkey":77,"version":21,"membername":"남인순","party":"더불어민주당","committee":"보건복지위원회","district":"서울 송파구병","sex":1,"level":3,"kind":0},
    {"memberpkey":78,"version":21,"membername":"노웅래","party":"더불어민주당","committee":"환경노동위원회","district":"서울 마포구갑","sex":0,"level":4,"kind":0},
    {"memberpkey":79,"version":21,"membername":"도종환","party":"더불어민주당","committee":"문화체육관광위원회","district":"충북 청주시흥덕구","sex":0,"level":3,"kind":0},
    {"memberpkey":80,"version":21,"membername":"류성걸","party":"국민의힘","committee":"기획재정위원회","district":"대구 동구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":81,"version":21,"membername":"류호정","party":"정의당","committee":"산업통상자원중소벤처기업위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":82,"version":21,"membername":"맹성규","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"인천 남동구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":83,"version":21,"membername":"문정복","party":"더불어민주당","committee":"국토교통위원회","district":"경기 시흥시갑","sex":1,"level":1,"kind":0},
    {"memberpkey":84,"version":21,"membername":"문진석","party":"더불어민주당","committee":"국토교통위원회","district":"충남 천안시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":85,"version":21,"membername":"민병덕","party":"더불어민주당","committee":"정무위원회","district":"경기 안양시동안구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":86,"version":21,"membername":"민형배","party":"더불어민주당","committee":"정무위원회","district":"광주 광산구을","sex":0,"level":1,"kind":0},
    {"memberpkey":87,"version":21,"membername":"민홍철","party":"더불어민주당","committee":"국방위원회","district":"경남 김해시갑","sex":0,"level":3,"kind":0},
    {"memberpkey":88,"version":21,"membername":"박광온","party":"더불어민주당","committee":"정무위원회","district":"경기 수원시정","sex":0,"level":3,"kind":0},
    {"memberpkey":89,"version":21,"membername":"박대수","party":"국민의힘","committee":"환경노동위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":90,"version":21,"membername":"박대출","party":"국민의힘","committee":"과학기술정보방송통신위원회","district":"경남 진주시갑","sex":0,"level":3,"kind":0},
    {"memberpkey":91,"version":21,"membername":"박덕흠","party":"무소속","committee":"농림축산식품해양수산위원회","district":"충북 보은군옥천군영동군괴산군","sex":0,"level":3,"kind":0},
    {"memberpkey":92,"version":21,"membername":"박범계","party":"더불어민주당","committee":"환경노동위원회","district":"대전 서구을","sex":0,"level":3,"kind":0},
    {"memberpkey":93,"version":21,"membername":"박병석","party":"무소속","committee":"외교통일위원회","district":"대전 서구갑","sex":0,"level":6,"kind":0},
    {"memberpkey":94,"version":21,"membername":"박상혁","party":"더불어민주당","committee":"국토교통위원회","district":"경기 김포시을","sex":0,"level":1,"kind":0},
    {"memberpkey":95,"version":21,"membername":"박성민","party":"국민의힘","committee":"국토교통위원회","district":"울산 중구","sex":0,"level":1,"kind":0},
    {"memberpkey":96,"version":21,"membername":"박성준","party":"더불어민주당","committee":"법제사법위원회","district":"서울 중구성동구을","sex":0,"level":1,"kind":0},
    {"memberpkey":97,"version":21,"membername":"박성중","party":"국민의힘","committee":"과학기술정보방송통신위원회","district":"서울 서초구을","sex":0,"level":2,"kind":0},
    {"memberpkey":98,"version":21,"membername":"박수영","party":"국민의힘","committee":"정무위원회","district":"부산 남구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":99,"version":21,"membername":"박영순","party":"더불어민주당","committee":"국토교통위원회","district":"대전 대덕구","sex":0,"level":1,"kind":0},
    {"memberpkey":100,"version":21,"membername":"박완수","party":"국민의힘","committee":"행정안전위원회","district":"경남 창원시의창구","sex":0,"level":2,"kind":0},
    {"memberpkey":101,"version":21,"membername":"박완주","party":"더불어민주당","committee":"행정안전위원회","district":"충남 천안시을","sex":0,"level":3,"kind":0},
    {"memberpkey":102,"version":21,"membername":"박용진","party":"더불어민주당","committee":"정무위원회","district":"서울 강북구을","sex":0,"level":2,"kind":0},
    {"memberpkey":103,"version":21,"membername":"박재호","party":"더불어민주당","committee":"행정안전위원회","district":"부산 남구을","sex":0,"level":2,"kind":0},
    {"memberpkey":104,"version":21,"membername":"박정","party":"더불어민주당","committee":"문화체육관광위원회","district":"경기 파주시을","sex":0,"level":2,"kind":0},
    {"memberpkey":105,"version":21,"membername":"박주민","party":"더불어민주당","committee":"법제사법위원회","district":"서울 은평구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":106,"version":21,"membername":"박진","party":"국민의힘","committee":"외교통일위원회","district":"서울 강남구을","sex":0,"level":4,"kind":0},
    {"memberpkey":107,"version":21,"membername":"박찬대","party":"더불어민주당","committee":"교육위원회","district":"인천 연수구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":108,"version":21,"membername":"박형수","party":"국민의힘","committee":"기획재정위원회","district":"경북 영주시영양군봉화군울진군","sex":0,"level":1,"kind":0},
    {"memberpkey":109,"version":21,"membername":"박홍근","party":"더불어민주당","committee":"기획재정위원회","district":"서울 중랑구을","sex":0,"level":3,"kind":0},
    {"memberpkey":110,"version":21,"membername":"배준영","party":"국민의힘","committee":"교육위원회","district":"인천 중구강화군옹진군","sex":0,"level":1,"kind":0},
    {"memberpkey":111,"version":21,"membername":"배진교","party":"정의당","committee":"정무위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":112,"version":21,"membername":"배현진","party":"국민의힘","committee":"문화체육관광위원회","district":"서울 송파구을","sex":1,"level":1,"kind":0},
    {"memberpkey":113,"version":21,"membername":"백종헌","party":"국민의힘","committee":"보건복지위원회","district":"부산 금정구","sex":0,"level":1,"kind":0},
    {"memberpkey":114,"version":21,"membername":"백혜련","party":"더불어민주당","committee":"행정안전위원회","district":"경기 수원시을","sex":1,"level":2,"kind":0},
    {"memberpkey":115,"version":21,"membername":"변재일","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"충북 청주시청원구","sex":0,"level":5,"kind":0},
    {"memberpkey":116,"version":21,"membername":"서동용","party":"더불어민주당","committee":"교육위원회","district":"전남 순천시광양시곡성군구례군을","sex":0,"level":1,"kind":0},
    {"memberpkey":117,"version":21,"membername":"서범수","party":"국민의힘","committee":"행정안전위원회","district":"울산 울주군","sex":0,"level":1,"kind":0},
    {"memberpkey":118,"version":21,"membername":"서병수","party":"국민의힘","committee":"기획재정위원회","district":"부산 부산진구갑","sex":0,"level":5,"kind":0},
    {"memberpkey":119,"version":21,"membername":"서삼석","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"전남 영암군무안군신안군","sex":0,"level":2,"kind":0},
    {"memberpkey":120,"version":21,"membername":"서영교","party":"더불어민주당","committee":"행정안전위원회","district":"서울 중랑구갑","sex":1,"level":3,"kind":0},
    {"memberpkey":121,"version":21,"membername":"서영석","party":"더불어민주당","committee":"보건복지위원회","district":"경기 부천시정","sex":0,"level":1,"kind":0},
    {"memberpkey":122,"version":21,"membername":"서일준","party":"국민의힘","committee":"기획재정위원회","district":"경남 거제시","sex":0,"level":1,"kind":0},
    {"memberpkey":123,"version":21,"membername":"서정숙","party":"국민의힘","committee":"보건복지위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":124,"version":21,"membername":"설훈","party":"더불어민주당","committee":"국방위원회","district":"경기 부천시을","sex":0,"level":5,"kind":0},
    {"memberpkey":125,"version":21,"membername":"성일종","party":"국민의힘","committee":"국방위원회","district":"충남 서산시태안군","sex":0,"level":2,"kind":0},
    {"memberpkey":126,"version":21,"membername":"소병철","party":"더불어민주당","committee":"법제사법위원회","district":"전남 순천시광양시곡성군구례군갑","sex":0,"level":1,"kind":0},
    {"memberpkey":127,"version":21,"membername":"소병훈","party":"더불어민주당","committee":"국토교통위원회","district":"경기 광주시갑","sex":0,"level":2,"kind":0},
    {"memberpkey":128,"version":21,"membername":"송갑석","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"광주 서구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":129,"version":21,"membername":"송기헌","party":"더불어민주당","committee":"법제사법위원회","district":"강원 원주시을","sex":0,"level":2,"kind":0},
    {"memberpkey":130,"version":21,"membername":"송석준","party":"국민의힘","committee":"국토교통위원회","district":"경기 이천시","sex":0,"level":2,"kind":0},
    {"memberpkey":131,"version":21,"membername":"송언석","party":"무소속","committee":"국토교통위원회","district":"경북 김천시","sex":0,"level":2,"kind":0},
    {"memberpkey":132,"version":21,"membername":"송영길","party":"더불어민주당","committee":"외교통일위원회","district":"인천 계양구을","sex":0,"level":5,"kind":0},
    {"memberpkey":133,"version":21,"membername":"송옥주","party":"더불어민주당","committee":"환경노동위원회","district":"경기 화성시갑","sex":1,"level":2,"kind":0},
    {"memberpkey":134,"version":21,"membername":"송재호","party":"더불어민주당","committee":"정무위원회","district":"제주 제주시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":135,"version":21,"membername":"신동근","party":"더불어민주당","committee":"국토교통위원회","district":"인천 서구을","sex":0,"level":2,"kind":0},
    {"memberpkey":136,"version":21,"membername":"신영대","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"전북 군산시","sex":0,"level":1,"kind":0},
    {"memberpkey":137,"version":21,"membername":"신원식","party":"국민의힘","committee":"국방위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":138,"version":21,"membername":"신정훈","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"전남 나주시화순군","sex":0,"level":2,"kind":0},
    {"memberpkey":139,"version":21,"membername":"신현영","party":"더불어민주당","committee":"보건복지위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":140,"version":21,"membername":"심상정","party":"정의당","committee":"국토교통위원회","district":"경기 고양시갑","sex":1,"level":4,"kind":0},
    {"memberpkey":141,"version":21,"membername":"안규백","party":"더불어민주당","committee":"국방위원회","district":"서울 동대문구갑","sex":0,"level":4,"kind":0},
    {"memberpkey":142,"version":21,"membername":"안민석","party":"더불어민주당","committee":"외교통일위원회","district":"경기 오산시","sex":0,"level":5,"kind":0},
    {"memberpkey":143,"version":21,"membername":"안병길","party":"국민의힘","committee":"농림축산식품해양수산위원회","district":"부산 서구동구","sex":0,"level":1,"kind":0},
    {"memberpkey":144,"version":21,"membername":"안호영","party":"더불어민주당","committee":"환경노동위원회","district":"전북 완주군진안군무주군장수군","sex":0,"level":2,"kind":0},
    {"memberpkey":145,"version":21,"membername":"양경숙","party":"더불어민주당","committee":"기획재정위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":146,"version":21,"membername":"양금희","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"대구 북구갑","sex":1,"level":1,"kind":0},
    {"memberpkey":147,"version":21,"membername":"양기대","party":"더불어민주당","committee":"행정안전위원회","district":"경기 광명시을","sex":0,"level":1,"kind":0},
    {"memberpkey":148,"version":21,"membername":"양이원영","party":"무소속","committee":"산업통상자원중소벤처기업위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":149,"version":21,"membername":"양정숙","party":"무소속","committee":"과학기술정보방송통신위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":150,"version":21,"membername":"양향자","party":"더불어민주당","committee":"기획재정위원회","district":"광주 서구을","sex":1,"level":1,"kind":0},
    {"memberpkey":151,"version":21,"membername":"어기구","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"충남 당진시","sex":0,"level":2,"kind":0},
    {"memberpkey":152,"version":21,"membername":"엄태영","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"충북 제천시단양군","sex":0,"level":1,"kind":0},
    {"memberpkey":153,"version":21,"membername":"오기형","party":"더불어민주당","committee":"정무위원회","district":"서울 도봉구을","sex":0,"level":1,"kind":0},
    {"memberpkey":154,"version":21,"membername":"오영환","party":"더불어민주당","committee":"행정안전위원회","district":"경기 의정부시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":155,"version":21,"membername":"오영훈","party":"더불어민주당","committee":"행정안전위원회","district":"제주 제주시을","sex":0,"level":2,"kind":0},
    {"memberpkey":156,"version":21,"membername":"용혜인","party":"기본소득당","committee":"기획재정위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":157,"version":21,"membername":"우상호","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"서울 서대문구갑","sex":0,"level":4,"kind":0},
    {"memberpkey":158,"version":21,"membername":"우원식","party":"더불어민주당","committee":"기획재정위원회","district":"서울 노원구을","sex":0,"level":4,"kind":0},
    {"memberpkey":159,"version":21,"membername":"위성곤","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"제주 서귀포시","sex":0,"level":2,"kind":0},
    {"memberpkey":160,"version":21,"membername":"유경준","party":"국민의힘","committee":"기획재정위원회","district":"서울 강남구병","sex":0,"level":1,"kind":0},
    {"memberpkey":161,"version":21,"membername":"유기홍","party":"더불어민주당","committee":"교육위원회","district":"서울 관악구갑","sex":0,"level":3,"kind":0},
    {"memberpkey":162,"version":21,"membername":"유동수","party":"더불어민주당","committee":"정무위원회","district":"인천 계양구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":163,"version":21,"membername":"유상범","party":"국민의힘","committee":"법제사법위원회","district":"강원 홍천군횡성군영월군평창군","sex":0,"level":1,"kind":0},
    {"memberpkey":164,"version":21,"membername":"유의동","party":"국민의힘","committee":"정무위원회","district":"경기 평택시을","sex":0,"level":3,"kind":0},
    {"memberpkey":165,"version":21,"membername":"유정주","party":"더불어민주당","committee":"문화체육관광위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":166,"version":21,"membername":"윤건영","party":"더불어민주당","committee":"외교통일위원회","district":"서울 구로구을","sex":0,"level":1,"kind":0},
    {"memberpkey":167,"version":21,"membername":"윤관석","party":"더불어민주당","committee":"정무위원회","district":"인천 남동구을","sex":0,"level":3,"kind":0},
    {"memberpkey":168,"version":21,"membername":"윤두현","party":"국민의힘","committee":"정무위원회","district":"경북 경산시","sex":0,"level":1,"kind":0},
    {"memberpkey":169,"version":21,"membername":"윤미향","party":"무소속","committee":"환경노동위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":170,"version":21,"membername":"윤상현","party":"무소속","committee":"문화체육관광위원회","district":"인천 동구미추홀구을","sex":0,"level":4,"kind":0},
    {"memberpkey":171,"version":21,"membername":"윤영덕","party":"더불어민주당","committee":"교육위원회","district":"광주 동구남구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":172,"version":21,"membername":"윤영석","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"경남 양산시갑","sex":0,"level":3,"kind":0},
    {"memberpkey":173,"version":21,"membername":"윤영찬","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"경기 성남시중원구","sex":0,"level":1,"kind":0},
    {"memberpkey":174,"version":21,"membername":"윤재갑","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"전남 해남군완도군진도군","sex":0,"level":1,"kind":0},
    {"memberpkey":175,"version":21,"membername":"윤재옥","party":"국민의힘","committee":"정무위원회","district":"대구 달서구을","sex":0,"level":3,"kind":0},
    {"memberpkey":176,"version":21,"membername":"윤주경","party":"국민의힘","committee":"정무위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":177,"version":21,"membername":"윤준병","party":"더불어민주당","committee":"환경노동위원회","district":"전북 정읍시고창군","sex":0,"level":1,"kind":0},
    {"memberpkey":178,"version":21,"membername":"윤창현","party":"국민의힘","committee":"정무위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":179,"version":21,"membername":"윤한홍","party":"국민의힘","committee":"법제사법위원회","district":"경남 창원시마산회원구","sex":0,"level":2,"kind":0},
    {"memberpkey":180,"version":21,"membername":"윤호중","party":"더불어민주당","committee":"법제사법위원회","district":"경기 구리시","sex":0,"level":4,"kind":0},
    {"memberpkey":181,"version":21,"membername":"윤후덕","party":"더불어민주당","committee":"기획재정위원회","district":"경기 파주시갑","sex":0,"level":3,"kind":0},
    {"memberpkey":182,"version":21,"membername":"윤희숙","party":"국민의힘","committee":"기획재정위원회","district":"서울 서초구갑","sex":1,"level":1,"kind":0},
    {"memberpkey":183,"version":21,"membername":"이개호","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"전남 담양군함평군영광군장성군","sex":0,"level":3,"kind":0},
    {"memberpkey":184,"version":21,"membername":"이광재","party":"더불어민주당","committee":"기획재정위원회","district":"강원 원주시갑","sex":0,"level":3,"kind":0},
    {"memberpkey":185,"version":21,"membername":"이규민","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"경기 안성시","sex":0,"level":1,"kind":0},
    {"memberpkey":186,"version":21,"membername":"이낙연","party":"더불어민주당","committee":"외교통일위원회","district":"서울 종로구","sex":0,"level":5,"kind":0},
    {"memberpkey":187,"version":21,"membername":"이달곤","party":"국민의힘","committee":"문화체육관광위원회","district":"경남 창원시진해구","sex":0,"level":2,"kind":0},
    {"memberpkey":188,"version":21,"membername":"이동주","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":189,"version":21,"membername":"이만희","party":"국민의힘","committee":"농림축산식품해양수산위원회","district":"경북 영천시청도군","sex":0,"level":2,"kind":0},
    {"memberpkey":190,"version":21,"membername":"이명수","party":"국민의힘","committee":"행정안전위원회","district":"충남 아산시갑","sex":0,"level":4,"kind":0},
    {"memberpkey":191,"version":21,"membername":"이병훈","party":"더불어민주당","committee":"문화체육관광위원회","district":"광주 동구남구을","sex":0,"level":1,"kind":0},
    {"memberpkey":192,"version":21,"membername":"이상민","party":"더불어민주당","committee":"외교통일위원회","district":"대전 유성구을","sex":0,"level":5,"kind":0},
    {"memberpkey":193,"version":21,"membername":"이상직","party":"무소속","committee":"국방위원회","district":"전북 전주시을","sex":0,"level":2,"kind":0},
    {"memberpkey":194,"version":21,"membername":"이상헌","party":"더불어민주당","committee":"문화체육관광위원회","district":"울산 북구","sex":0,"level":2,"kind":0},
    {"memberpkey":195,"version":21,"membername":"이성만","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"인천 부평구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":196,"version":21,"membername":"이소영","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"경기 의왕시과천시","sex":1,"level":1,"kind":0},
    {"memberpkey":197,"version":21,"membername":"이수진","party":"더불어민주당","committee":"환경노동위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":198,"version":21,"membername":"이수진","party":"더불어민주당","committee":"법제사법위원회","district":"서울 동작구을","sex":1,"level":1,"kind":0},
    {"memberpkey":199,"version":21,"membername":"이양수","party":"국민의힘","committee":"농림축산식품해양수산위원회","district":"강원 속초시인제군고성군양양군","sex":0,"level":2,"kind":0},
    {"memberpkey":200,"version":21,"membername":"이영","party":"국민의힘","committee":"행정안전위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":201,"version":21,"membername":"이용","party":"국민의힘","committee":"문화체육관광위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":202,"version":21,"membername":"이용빈","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"광주 광산구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":203,"version":21,"membername":"이용선","party":"더불어민주당","committee":"외교통일위원회","district":"서울 양천구을","sex":0,"level":1,"kind":0},
    {"memberpkey":204,"version":21,"membername":"이용우","party":"더불어민주당","committee":"정무위원회","district":"경기 고양시정","sex":0,"level":1,"kind":0},
    {"memberpkey":205,"version":21,"membername":"이용호","party":"무소속","committee":"보건복지위원회","district":"전북 남원시임실군순창군","sex":0,"level":2,"kind":0},
    {"memberpkey":206,"version":21,"membername":"이원욱","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"경기 화성시을","sex":0,"level":3,"kind":0},
    {"memberpkey":207,"version":21,"membername":"이원택","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"전북 김제시부안군","sex":0,"level":1,"kind":0},
    {"memberpkey":208,"version":21,"membername":"이은주","party":"정의당","committee":"행정안전위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":209,"version":21,"membername":"이인영","party":"더불어민주당","committee":"기획재정위원회","district":"서울 구로구갑","sex":0,"level":4,"kind":0},
    {"memberpkey":210,"version":21,"membername":"이장섭","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"충북 청주시서원구","sex":0,"level":1,"kind":0},
    {"memberpkey":211,"version":21,"membername":"이재정","party":"더불어민주당","committee":"외교통일위원회","district":"경기 안양시동안구을","sex":1,"level":2,"kind":0},
    {"memberpkey":212,"version":21,"membername":"이정문","party":"더불어민주당","committee":"정무위원회","district":"충남 천안시병","sex":0,"level":1,"kind":0},
    {"memberpkey":213,"version":21,"membername":"이종배","party":"국민의힘","committee":"국토교통위원회","district":"충북 충주시","sex":0,"level":3,"kind":0},
    {"memberpkey":214,"version":21,"membername":"이종성","party":"국민의힘","committee":"보건복지위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":215,"version":21,"membername":"이주환","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"부산 연제구","sex":0,"level":1,"kind":0},
    {"memberpkey":216,"version":21,"membername":"이채익","party":"국민의힘","committee":"국방위원회","district":"울산 남구갑","sex":0,"level":3,"kind":0},
    {"memberpkey":217,"version":21,"membername":"이철규","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"강원 동해시태백시삼척시정선군","sex":0,"level":2,"kind":0},
    {"memberpkey":218,"version":21,"membername":"이탄희","party":"더불어민주당","committee":"교육위원회","district":"경기 용인시정","sex":0,"level":1,"kind":0},
    {"memberpkey":219,"version":21,"membername":"이태규","party":"국민의당","committee":"외교통일위원회","district":"비례대표","sex":0,"level":2,"kind":1},
    {"memberpkey":220,"version":21,"membername":"이학영","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"경기 군포시","sex":0,"level":3,"kind":0},
    {"memberpkey":221,"version":21,"membername":"이해식","party":"더불어민주당","committee":"행정안전위원회","district":"서울 강동구을","sex":0,"level":1,"kind":0},
    {"memberpkey":222,"version":21,"membername":"이헌승","party":"국민의힘","committee":"국토교통위원회","district":"부산 부산진구을","sex":0,"level":3,"kind":0},
    {"memberpkey":223,"version":21,"membername":"이형석","party":"더불어민주당","committee":"행정안전위원회","district":"광주 북구을","sex":0,"level":1,"kind":0},
    {"memberpkey":224,"version":21,"membername":"인재근","party":"더불어민주당","committee":"보건복지위원회","district":"서울 도봉구갑","sex":1,"level":3,"kind":0},
    {"memberpkey":225,"version":21,"membername":"임오경","party":"더불어민주당","committee":"문화체육관광위원회","district":"경기 광명시갑","sex":1,"level":1,"kind":0},
    {"memberpkey":226,"version":21,"membername":"임이자","party":"국민의힘","committee":"환경노동위원회","district":"경북 상주시문경시 ","sex":1,"level":2,"kind":0},
    {"memberpkey":227,"version":21,"membername":"임종성","party":"더불어민주당","committee":"환경노동위원회","district":"경기 광주시을","sex":0,"level":2,"kind":0},
    {"memberpkey":228,"version":21,"membername":"임호선","party":"더불어민주당","committee":"행정안전위원회","district":"충북 증평군진천군음성군","sex":0,"level":1,"kind":0},
    {"memberpkey":229,"version":21,"membername":"장경태","party":"더불어민주당","committee":"국토교통위원회","district":"서울 동대문구을","sex":0,"level":1,"kind":0},
    {"memberpkey":230,"version":21,"membername":"장제원","party":"국민의힘","committee":"법제사법위원회","district":"부산 사상구","sex":0,"level":3,"kind":0},
    {"memberpkey":231,"version":21,"membername":"장철민","party":"더불어민주당","committee":"환경노동위원회","district":"대전 동구","sex":0,"level":1,"kind":0},
    {"memberpkey":232,"version":21,"membername":"장혜영","party":"정의당","committee":"기획재정위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":233,"version":21,"membername":"전봉민","party":"무소속","committee":"보건복지위원회","district":"부산 수영구","sex":0,"level":1,"kind":0},
    {"memberpkey":234,"version":21,"membername":"전용기","party":"더불어민주당","committee":"문화체육관광위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":235,"version":21,"membername":"전재수","party":"더불어민주당","committee":"정무위원회","district":"부산 북구강서구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":236,"version":21,"membername":"전주혜","party":"국민의힘","committee":"법제사법위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":237,"version":21,"membername":"전해철","party":"더불어민주당","committee":"외교통일위원회","district":"경기 안산시상록구갑","sex":0,"level":3,"kind":0},
    {"memberpkey":238,"version":21,"membername":"전혜숙","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"서울 광진구갑","sex":1,"level":3,"kind":0},
    {"memberpkey":239,"version":21,"membername":"정경희","party":"국민의힘","committee":"교육위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":240,"version":21,"membername":"정동만","party":"국민의힘","committee":"국토교통위원회","district":"부산 기장군","sex":0,"level":1,"kind":0},
    {"memberpkey":241,"version":21,"membername":"정성호","party":"더불어민주당","committee":"기획재정위원회","district":"경기 양주시","sex":0,"level":4,"kind":0},
    {"memberpkey":242,"version":21,"membername":"정운천","party":"국민의힘","committee":"농림축산식품해양수산위원회","district":"비례대표","sex":0,"level":2,"kind":1},
    {"memberpkey":243,"version":21,"membername":"정일영","party":"더불어민주당","committee":"기획재정위원회","district":"인천 연수구을","sex":0,"level":1,"kind":0},
    {"memberpkey":244,"version":21,"membername":"정점식","party":"국민의힘","committee":"농림축산식품해양수산위원회","district":"경남 통영시고성군","sex":0,"level":2,"kind":0},
    {"memberpkey":245,"version":21,"membername":"정정순","party":"더불어민주당","committee":"국토교통위원회","district":"충북 청주시상당구","sex":0,"level":1,"kind":0},
    {"memberpkey":246,"version":21,"membername":"정진석","party":"국민의힘","committee":"외교통일위원회","district":"충남 공주시부여군청양군","sex":0,"level":5,"kind":0},
    {"memberpkey":247,"version":21,"membername":"정찬민","party":"국민의힘","committee":"교육위원회","district":"경기 용인시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":248,"version":21,"membername":"정청래","party":"더불어민주당","committee":"교육위원회","district":"서울 마포구을","sex":0,"level":3,"kind":0},
    {"memberpkey":249,"version":21,"membername":"정춘숙","party":"더불어민주당","committee":"보건복지위원회","district":"경기 용인시병","sex":1,"level":2,"kind":0},
    {"memberpkey":250,"version":21,"membername":"정태호","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"서울 관악구을","sex":0,"level":1,"kind":0},
    {"memberpkey":251,"version":21,"membername":"정필모","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":252,"version":21,"membername":"정희용","party":"국민의힘","committee":"과학기술정보방송통신위원회","district":"경북 고령군성주군칠곡군","sex":0,"level":1,"kind":0},
    {"memberpkey":253,"version":21,"membername":"조경태","party":"국민의힘","committee":"교육위원회","district":"부산 사하구을","sex":0,"level":5,"kind":0},
    {"memberpkey":254,"version":21,"membername":"조명희","party":"국민의힘","committee":"보건복지위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":255,"version":21,"membername":"조수진","party":"국민의힘","committee":"법제사법위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":256,"version":21,"membername":"조승래","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"대전 유성구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":257,"version":21,"membername":"조오섭","party":"더불어민주당","committee":"국토교통위원회","district":"광주 북구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":258,"version":21,"membername":"조응천","party":"더불어민주당","committee":"국토교통위원회","district":"경기 남양주시갑","sex":0,"level":2,"kind":0},
    {"memberpkey":259,"version":21,"membername":"조정식","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"경기 시흥시을","sex":0,"level":5,"kind":0},
    {"memberpkey":260,"version":21,"membername":"조정훈","party":"시대전환","committee":"산업통상자원중소벤처기업위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":261,"version":21,"membername":"조태용","party":"국민의힘","committee":"외교통일위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":262,"version":21,"membername":"조해진","party":"국민의힘","committee":"기획재정위원회","district":"경남 밀양시의령군함안군창녕군","sex":0,"level":3,"kind":0},
    {"memberpkey":263,"version":21,"membername":"주철현","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"전남 여수시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":264,"version":21,"membername":"주호영","party":"국민의힘","committee":"과학기술정보방송통신위원회","district":"대구 수성구갑","sex":0,"level":5,"kind":0},
    {"memberpkey":265,"version":21,"membername":"지성호","party":"국민의힘","committee":"외교통일위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":266,"version":21,"membername":"진선미","party":"더불어민주당","committee":"국토교통위원회","district":"서울 강동구갑","sex":1,"level":3,"kind":0},
    {"memberpkey":267,"version":21,"membername":"진성준","party":"더불어민주당","committee":"국토교통위원회","district":"서울 강서구을","sex":0,"level":2,"kind":0},
    {"memberpkey":268,"version":21,"membername":"천준호","party":"더불어민주당","committee":"국토교통위원회","district":"서울 강북구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":269,"version":21,"membername":"최강욱","party":"열린민주당","committee":"법제사법위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":270,"version":21,"membername":"최기상","party":"더불어민주당","committee":"법제사법위원회","district":"서울 금천구","sex":0,"level":1,"kind":0},
    {"memberpkey":271,"version":21,"membername":"최승재","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"비례대표","sex":0,"level":1,"kind":1},
    {"memberpkey":272,"version":21,"membername":"최연숙","party":"국민의당","committee":"보건복지위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":273,"version":21,"membername":"최인호","party":"더불어민주당","committee":"농림축산식품해양수산위원회","district":"부산 사하구갑","sex":0,"level":2,"kind":0},
    {"memberpkey":274,"version":21,"membername":"최종윤","party":"더불어민주당","committee":"보건복지위원회","district":"경기 하남시","sex":0,"level":1,"kind":0},
    {"memberpkey":275,"version":21,"membername":"최춘식","party":"국민의힘","committee":"행정안전위원회","district":"경기 포천시가평군","sex":0,"level":1,"kind":0},
    {"memberpkey":276,"version":21,"membername":"최형두","party":"국민의힘","committee":"문화체육관광위원회","district":"경남 창원시마산합포구","sex":0,"level":1,"kind":0},
    {"memberpkey":277,"version":21,"membername":"최혜영","party":"더불어민주당","committee":"보건복지위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":278,"version":21,"membername":"추경호","party":"국민의힘","committee":"기획재정위원회","district":"대구 달성군","sex":0,"level":2,"kind":0},
    {"memberpkey":279,"version":21,"membername":"태영호","party":"국민의힘","committee":"외교통일위원회","district":"서울 강남구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":280,"version":21,"membername":"하영제","party":"국민의힘","committee":"국토교통위원회","district":"경남 사천시남해군하동군","sex":0,"level":1,"kind":0},
    {"memberpkey":281,"version":21,"membername":"하태경","party":"국민의힘","committee":"국방위원회","district":"부산 해운대구갑","sex":0,"level":3,"kind":0},
    {"memberpkey":282,"version":21,"membername":"한기호","party":"국민의힘","committee":"국방위원회","district":"강원 춘천시철원군화천군양구군을","sex":0,"level":3,"kind":0},
    {"memberpkey":283,"version":21,"membername":"한무경","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":284,"version":21,"membername":"한병도","party":"더불어민주당","committee":"행정안전위원회","district":"전북 익산시을 ","sex":0,"level":2,"kind":0},
    {"memberpkey":285,"version":21,"membername":"한정애","party":"더불어민주당","committee":"행정안전위원회","district":"서울 강서구병","sex":1,"level":3,"kind":0},
    {"memberpkey":286,"version":21,"membername":"한준호","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"경기 고양시을","sex":0,"level":1,"kind":0},
    {"memberpkey":287,"version":21,"membername":"허영","party":"더불어민주당","committee":"국토교통위원회","district":"강원 춘천시철원군화천군양구군갑","sex":0,"level":1,"kind":0},
    {"memberpkey":288,"version":21,"membername":"허은아","party":"국민의힘","committee":"과학기술정보방송통신위원회","district":"비례대표","sex":1,"level":1,"kind":1},
    {"memberpkey":289,"version":21,"membername":"허종식","party":"더불어민주당","committee":"보건복지위원회","district":"인천 동구미추홀구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":290,"version":21,"membername":"홍기원","party":"더불어민주당","committee":"국토교통위원회","district":"경기 평택시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":291,"version":21,"membername":"홍문표","party":"국민의힘","committee":"농림축산식품해양수산위원회","district":"충남 홍성군예산군","sex":0,"level":4,"kind":0},
    {"memberpkey":292,"version":21,"membername":"홍석준","party":"국민의힘","committee":"환경노동위원회","district":"대구 달서구갑","sex":0,"level":1,"kind":0},
    {"memberpkey":293,"version":21,"membername":"홍성국","party":"더불어민주당","committee":"정무위원회","district":"세종특별자치시갑","sex":0,"level":1,"kind":0},
    {"memberpkey":294,"version":21,"membername":"홍영표","party":"더불어민주당","committee":"국방위원회","district":"인천 부평구을","sex":0,"level":4,"kind":0},
    {"memberpkey":295,"version":21,"membername":"홍익표","party":"더불어민주당","committee":"과학기술정보방송통신위원회","district":"서울 중구성동구갑","sex":0,"level":3,"kind":0},
    {"memberpkey":296,"version":21,"membername":"홍정민","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"경기 고양시병","sex":1,"level":1,"kind":0},
    {"memberpkey":297,"version":21,"membername":"홍준표","party":"국민의힘","committee":"산업통상자원중소벤처기업위원회","district":"대구 수성구을","sex":0,"level":5,"kind":0},
    {"memberpkey":298,"version":21,"membername":"황보승희","party":"국민의힘","committee":"과학기술정보방송통신위원회","district":"부산 중구영도구","sex":1,"level":1,"kind":0},
    {"memberpkey":299,"version":21,"membername":"황운하","party":"더불어민주당","committee":"산업통상자원중소벤처기업위원회","district":"대전 중구","sex":0,"level":1,"kind":0},
    {"memberpkey":300,"version":21,"membername":"황희","party":"더불어민주당","committee":"국방위원회","district":"서울 양천구갑","sex":0,"level":2,"kind":0}]
    
    function showMember(member) {
        console.log(member)
    }

    function updateData(keyword) {
        /* data select */
        var sdata = []
        if(keyword) {
            sdata = dummydata
            .filter(item => {
                return (
                    item.membername.includes(keyword) ||
                    item.district.includes(keyword)
                );
            })
        } else {
            sdata = dummydata;
        }
        
        /* update selected data */
        for (let i=0; i<sdata.length; i++) {
            var clone = document.importNode(t.content, true);

            member = clone.querySelector('.member');
            member.addEventListener('click', function(){showMember(sdata[i])})
        
            mname = clone.querySelector('.name');
            mname.innerText = sdata[i].membername;
        
            img = clone.querySelector('img');
            img.onerror = function() { this.src = "../img/account_circle_black.svg" };
                // img.src = `../img/member/member_${dummydata[i].memberpkey}.jpg`; // local img src
            img.src = `https://chacha-image.s3.ap-northeast-2.amazonaws.com/member/member_${sdata[i].memberpkey}.jpg`;
                
            dname = clone.querySelector('.district');
            dname.innerText = sdata[i].district;
        
            place.appendChild(clone);
        };     
    }

    

    let search = document.querySelector('#search');
    let icon_search = document.querySelector('.iconSearch');
    let icon_close = document.querySelector('.closeBtn');
    let h = document.querySelector('header');

    function updateValue(e){
        while (place.hasChildNodes()) {
            place.removeChild(place.firstChild);
        }
        updateData(e.target.value);
    }

    if(search) {
        search.addEventListener('input', updateValue)

        if(icon_search) {
            icon_search.addEventListener('click', () => {
                h.classList.add('search');
                search.value = '';
                search.focus();
            })
            icon_close.addEventListener('click', () => {
                h.classList.remove('search');
                while (place.hasChildNodes()) {
                    place.removeChild(place.firstChild);
                }
                updateData();
            })
        }
    }

    

    updateData();
}