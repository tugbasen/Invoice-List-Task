# Invoice List By Tuğba ŞEN

## AÇIKLAMA

- Proje HTML, Css/Scss, JavaScript ve jQuery'den oluşmaktadır. Css Framework'ü olarak Bootstrap5 tercih edilmiştir.
- Tasarımda istenilen ikonların neredeyse tamamı Pixso üzerinde tanımlı olan tasarımdan svg alınarak projeye dahil edilmiştir.
  Kullanımının daha kolay veya uyumlu olduğunu düşündüğüm noktalarda inisiyatif alınarak Bootstrap Icons tercih edilmiştir.
  Font-size, padding, width, height gibi birçok noktada Pixso üzerinde bırakılan değerler esas alınmıştır.
- Projede sadece UI öğelerinin bulunmasının yeterli olacağı belirtilmiş olsa da, içeriğe uygun olacak şekilde eklemeler tercih edilmiştir. Bu eklemeler;
  - Butonların tamamına dropdown menu, collapse veya modal olarak aksiyonlar verilmesi
  - SideBar alanında tab sistemi kurulması, her bir tab için ayrı ayrı içerik sayfalarının oluşturulması
  - Header alanında mobile uyumlu olacak şekilde navbar eklenmesi
  - Tablonun yer aldığı anasayfa içerisinde 'All Invoices - Overdue - In Progress - Waiting - ...' başlıklarının birer tab-content içeriği şeklinde kurgulanması
  - Tablo oluşturmada Jquery dataTable tercih edilmesi ve istenilen tasarıma göre customize edilmesi
- Mobile - Tablet - Desktop olmak üzere her ekran boyutuna / cihaza uyumlu olacak şekilde responsive hazırlanması.
  Bazı alanlarda Desktop için ayrı, Mobile için ayrı olacak şekilde tasarımda değişikliğe gidilmesi.
- Projenin okuma, takip ve incelenme aşamalarını kolaylaştırmak adına birçok noktada yorum bırakılması

Keyifli incelemeler!

## Kurulum

1. **Projeyi Klonlayın**

   ```bash
   git clone https://github.com/tugbasen/Invoice-List-Task.git

   ```

2. **Bağımlılıkları Yükleyin**
   Proje dizininde terminal açın ve aşağıdaki komutu çalıştırın:

   npm install

3. **SCSS Derlemesi**
   SCSS dosyalarında değişiklik yapmak ve CSS dosyalarına dönüştürmek için:

npx sass --watch scss:css

## Kullanım

    SCSS kullanıldığı için npm install ile modülleri yükleyin.
    SCSS dosyalarını scss klasöründe düzenleyebilirsiniz.
    Değişikliklerin CSS'e yansımasını sağlamak için yukarıdaki npx sass --watch komutunu kullanın.
    Projeyi tarayıcınızda görüntülemek için index.html dosyasını açın.
