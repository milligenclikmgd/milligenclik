# Millî Gençlik Derneği

Mobil uyumlu, derlenmeden çalıştırılabilen kurumsal dernek sitesi.

## Kullanım ve yayın

`dist/` klasörünün içeriğini cPanel'de hedef dizine veya herhangi bir statik sunucuya yükleyin. Mevcut sitenin üzerine yazmadan önce tam dosya ve veritabanı yedeği alın; yeni siteyi önce ayrı alt alan adında hazırlayın.

Yerel kullanım: `python -m http.server 8080 --directory dist`

Vercel: Framework Preset `Other`, Build Command boş, Output Directory `dist`.

## İçerik

Gerçek başkan, divan, yardımcı, adres ve telefon bilgileri uydurulmamıştır. Tüm içerikler `dist/data.json` dosyasından gelir. Fotoğraflar için `assets/` yolu veya HTTPS görsel adresi kullanılabilir. Başkan yardımcıları ilgili divan kaydının `assistants` dizisinden yönetilir.

Sayfa altındaki içerik taslağı düzenleyicisi yalnızca ziyaretçinin kendi tarayıcısında çalışır; sunucuya yazmaz ve bir yetkilendirilmiş yönetim paneli değildir. Taslağı JSON olarak indirip `dist/data.json` ile değiştirerek yeniden yayımlayın. Fotoğraf yüklemeleri küçültülerek JSON içine alınır. Büyük fotoğraf arşivleri için ayrı görsel dosyaları tercih edin.

81 ilin sınırları tıklanabilir. İstanbul'un iki yakası tek il kaydına bağlıdır. İl listesi ve klavye ile seçim desteklenir.

Bağış butonu hesap sahibi ve IBAN eklenene kadar açıkça ödeme alınmadığını belirtir. Gerçek ödeme entegrasyonu içermez. Doğrulanmış HTTPS ödeme sayfası `donation.paymentUrl` alanından bağlanabilir.

## Varlıklar

- Logolar: kullanıcı tarafından sağlanan Millî Gençlik logoları.
- Temsili gençlik fotoğrafı: https://unsplash.com/photos/49953e39b3ac (görsel URL: https://images.unsplash.com/photo-1529156069898-49953e39b3ac).
- Türkiye il haritası: https://github.com/dnomak/svg-turkiye-haritasi — lisans `dist/assets/MAP-LICENSE.txt`.
- Dergi görseli gerçek yayın kapağı değil, tipografik temsili tasarımdır.
- Fontlar Google Fonts'tan yüklenir; ağ erişimi yoksa sistem fontları kullanılır.

## Kontroller

`node --check dist/app.js`

Statik dosyalar, 81 il kaydı, yerel varlık yolları ve içerik JSON'u doğrulanmıştır. Bu ortamda tarayıcı ile görsel ve etkileşim testi yapılmamıştır.
