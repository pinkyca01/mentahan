const rules = (prefix, instagram, yt, name, pushname, user, limitt, uptime, jam, tanggal) => { return`
╭───「 *PERATURAN* 」
┴
❏ JANGAN VC/VON BOT!!
❏ JANGAN SPAM!!
❏ KASIH WAKTU 5/10 Dtk
❏ KALO GA DI JAWAB SAMA BOT
❏ PENDING/EROR/OFF
┬
╰───「 *PINKY BOT* 」
`
}

exports.rules = rules

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (6060));
  var minutes = Math.floor(seconds % (6060) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

// Limit
const limitend = (pushname) => {
        return`*Maaf ${pushname} Limit Anda Habis*\n*limit di riset setiap 12:00 wib tengah malam*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: *${limitCounts}*
`
}

exports.limitend = limitend
exports.limitcount = limitcount