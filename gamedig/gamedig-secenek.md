Sorgu Seçenekleri

Tipik

    type: string - Aşağıdaki oyun listesinde listelenen oyun kimliklerinden biri
    host: string - Oyun sunucusunun ana bilgisayar adı veya IP'si
    port: number (isteğe bağlı) - Oyun sunucusu için bağlantı portu veya sorgu portu. Bazı oyunlar ayrı bir "sorgu" bağlantı noktası kullanır. Oyun bağlantı noktasını belirtmek beklendiği gibi çalışmıyorsa, bunun yerine bu sorgu bağlantı noktasından geçmek işe yarayabilir. (varsayılan protokol varsayılan bağlantı noktasıdır)

ileri

    maxAttempts: number - Başarısızlık durumunda sunucuyu sorgulama girişimlerinin sayısı. (varsayılan 1)
    socketTimeout: number - Tek bir paketi beklemek için milisaniye. Bunu artırmanın, sunucu çevrimiçi olsa bile birçok sorgunun daha uzun sürmesine neden olacağına dikkat edin. (varsayılan 2000)
    tryTimeout: number - Sorgu denemesinin tamamı için milisaniyeye izin verilir. Bu zaman aşımı, genellikle ilk önce socketTimeout tetiklendiğinden, genellikle vurulmaz. (varsayılan 10000)
    givenPortOnly: boolean - Yalnızca belirli bir bağlantı noktasındaki sunucuyu sorgulamaya çalışır. (varsayılan yanlış)
    debug: boolean - stdout'a büyük miktarda hata ayıklama günlüğü sağlar. (varsayılan yanlış)

Geri dönüş değeri

Döndürülen durum nesnesi aşağıdaki anahtarları içerecektir:

    name: string - Sunucu adı
    map: string - Geçerli sunucu oyun haritası
    password: boolean - Bir parola gerekiyorsa
    maxplayers: sayı
    oyuncular: nesne dizisi
        name: string - Oyuncunun adı bilinmiyorsa, dizi boş olacaktır.
        raw: object - Varsa oynatıcı hakkında ek bilgi (kararsız)
            Bu alanın içeriği, GameDig yama sürümleri arasında protokol bazında değişebilir (tipik olmasa da).
    botlar: nesne dizisi - Oyuncularla aynı şema
    connect: string
        Bu genellikle oyunun ip: bağlantı noktasını içerecektir
        Bağlantı noktası, isteğiniz istekte oyunun sorgu bağlantı noktasını belirtmiş olsa bile sunucunun oyun bağlantı noktasını yansıtacaktır.
        Bazı oyunlar için, eğer bir IP: Port son kullanıcılar için uygun değilse bu bir sunucu kimliği veya bağlantı url'si olabilir.
    ping: sayı
        Sunucuya gidiş dönüş süresi (milisaniye cinsinden).
        ICMP paketleri genellikle NAT'lar tarafından engellendiğinden ve düğüm ham soketler için zayıf desteğe sahip olduğundan, bunun bir ICMP yankısının RTT'si olmadığını unutmayın.
        Bu değer, sorgu paketlerinden birinin RTT'sinden türetilir, bu genellikle oldukça doğrudur, ancak sunucu gecikmesi nedeniyle biraz ekleyebilir.
    ham: serbest biçimli nesne (kararsız)
        Sunucudan alınan tüm bilgileri düzensiz bir biçimde içerir.
        Bu alanın içeriği, GameDig yama sürümleri arasında protokol bazında değişebilir (tipik olmasa da).
