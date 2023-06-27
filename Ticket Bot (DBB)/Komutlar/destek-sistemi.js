module.exports = [{
          name: "destek-sistemi",
          code: `
          $title[$guildName[$guildID] | Destek Sistemi]
          $description[
          \`Selamlar, Eğer Sorununuz Varsa, Ticket Açınız,\`

          \`Destek Verdiğimiz Servisler,\`
          
          \`- SKH ( Sunucu Kopyalama )\`
          
          \`Boşa Ticket Açmayınız.\`
          ]
          $color[Blurple]
          $addButton[1;Talep Aç;success;destek;false]
          $onlyPerms[administrator;**Bu Komut için \`YÖNETİCİ\` Yetkisine Sahip Olman Gerek!**]`
},{
          name: "destek",
          type: "interaction",
          prototype: "button",
          code: `
          $interactionReply[**Talebiniz Açıldı!**;;;;everyone;true]
          $newTicket[ticket-$username;**(** <@$authorID> **)** Yeni Bir Destek Talebi Var.{newEmbed:{description:
          **# Bize Ulaştığınız İçin Teşşekkür Ederiz.**
          Lütfen Sabırla Yetkiliyi Bekle, Bekleme Süresi **10 Dakika**yı Geçerse Aktif Bir Yetkiliyi Etiketleyebilirsiniz.

          - **Kullanıcı: <@$authorID>

          - Sebep: Belirtilmemiş.**}{color:Blurple}};$guildID;false;**Hata! Destek Kategorisini Ayarlayınız.**]`
}];