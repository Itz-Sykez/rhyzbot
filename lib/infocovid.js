exports.infocovid = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `*尺んﾘ乙乃Ծｲ*

Hai, *${id.split("@s.whatsapp.net")[0]}*

━─━─━─━─━─━─━─━─━─━─━─━

Info Covid - 19

Positif : *${corohelp.confirmed.value}*
Sembuh : *${corohelp.recovered.value}*
Meninggal : *${corohelp.deaths.value}*
Update: *${corohelp.lastUpdate}*

━─━─━─━─━─━─━─━─━─━─━─━

*Jika Ingin Donasi, Chat Nomor Dibawah.*
wa.me/6285346104367

Please Dont Copy This Text
*©Copyright RhyzBot*`
} 