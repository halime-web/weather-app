# Alternatif Hava Durumu Uygulaması

Bu proje, JavaScript kullanarak bir API’den hava durumu verisi çekmeyi
ve bu verileri tek sayfa (SPA) bir web uygulamasında kartlar halinde
göstermeyi amaçlamaktadır.

## Kullanılan API
- API Adı: API Ninjas – Weather API

## API Endpoint Örneği
https://api.api-ninjas.com/v1/weather?city=London
"SuKfvvnheMbWbCOQqGK/Wg==Ncq3B8mALQt2kNB4"benim aldığım api

## Uygulama Nasıl Çalışır?
- Kullanıcı şehir adını girer.
- Fetch API kullanılarak hava durumu verisi alınır.
- Gelen veriler JavaScript ile kart olarak ekrana basılır.
- Detay butonuna tıklanınca ek bilgiler aynı sayfada gösterilir.
- API erişim hatası olursa try/catch ile hata yakalanır ve yedek veri gösterilir.
- Koyu mod, Enter ile arama ve Temizle butonu eklenmiştir.

## Kullanılan JavaScript Konuları
- fetch API
- async / await
- try / catch
- DOM Manipülasyonu
- addEventListener
- if / else
- Fonksiyonlar

## Bonus Özellikler
- Koyu Mod (Dark Mode)
- Enter tuşu ile arama

- Temizle butonu
