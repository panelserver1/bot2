const { makeWASocket, useMultiFileAuthState, downloadContentFromMessage } = require('@whiskeysockets/baileys');
const { createSticker, StickerTypes } = require('wa-sticker-formatter')
const config = require('./config')
const axios = require("axios")
const pino = require('pino');
(async () => {
    const fetch = await import('node-fetch');
})();
const { generate } = require('qrcode-terminal');

async function connectWhatsapp() {
    const auth = await useMultiFileAuthState("session")
    const socket = makeWASocket ({
        printQRInTerminal: true,
        browser: ["Oversear", "Ikann", "?"],
        auth: auth.state,
        logger: pino({ level: "silent" }),
    });

    socket.ev.on("creds.update", auth.saveCreds);
    socket.ev.on("connection.update", async ({ connection }) => {
        if (connection === "open") {
            console.log("BOT WHATSAPP SUDAH SIAP");
        } else if (connection === "close") {
            await connectWhatsapp();
        }
    });

    socket.ev.on("messages.upsert", async ({ messages, type }) =>{
        const chat = messages[0]
        const pesan = (
            chat.message?.extendedTextMessage?.text ??
            chat.message?.ephemeralMessage?.message?.extendedTextMessage?.text ??
            chat.message?.conversation
        ) || ''
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const text = pesan.split(" ").slice(1).join(" ")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function ffStalk(id) {
    try {
      const response = await axios.get('https://allstars-apis.vercel.app/freefire?id=' + id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

async function jadwalsholat(kota) {
    try {
    let { data } = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${kota}&country=Indonesia&method=8`)
    let response = {
      subuh: data.data.timings.Fajr,
      dhuhur: data.data.timings.Dhuhr,
      ashar: data.data.timings.Asr,
      maghrib: data.data.timings.Maghrib,
      isya: data.data.timings.Isha 
     }
    return response
    } catch (e){
    returne
    }}
      
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const downloadMp3 = async (Link) => {
        socket.sendMessage(chat.key.remoteJid, { react: {
            text: '⏳',
            key: chat.key
        }})
        try {
        await ytdl.getInfo(Link)
        let mp3File = getRandom('.mp3')
        ytdl(Link, { filter: 'audioonly' })
        .pipe(fs.createWriteStream(mp3File))
        .on('finish', async () => {
        await socket.sendMessage(chat.key.remoteJid, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg' }, { quoted: chat })
        fs.unlinkSync(mp3File)
        })
        } catch (err) {
            socket.sendMessage(chat.key.remoteJid, { text: `${err}` }, { quoted: chat })
    }
}

const downloadMp4 = async (Link) => {
    socket.sendMessage(chat.key.remoteJid, { react: {
        text: '⏳',
        key: chat.key
    }})
    try {
        await ytdl.getInfo(Link)
        let mp4File = getRandom('.mp4')
        ytdl(Link)
        .pipe(fs.createWriteStream(mp4File))
        .on('finish', async () => {
            await socket.sendMessage(chat.key.remoteJid, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: chat })
            fs.unlinkSync(`./${mp4File}`)
        })
        } catch (err) {
        socket.sendMessage(chat.key.remoteJid, { text: `${err}` }, { quoted: chat })
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (pesan.startsWith(".")) {
            const commandBody = pesan.slice('.'.length)
            const args = commandBody.split(' ')
            const command = args.shift().toLowerCase()

        switch (command) {
            case "ping":
                await socket.sendMessage(chat.key.remoteJid, { text: "pong" }, { quoted: chat })
                break;

            case "h" :
            case "hidetag":

            const args = pesan.split(" ").slice(1).join(" ")

            if (!chat.key.remoteJid.includes("@g.us")) {
                await socket.sendMessage(chat.key.remoteJid, { text: "*Command ini hanya bisa di gunakan di grup!!*" }, { quoted: chat })
                return;
            }

            const metadata = await socket.groupMetadata(chat.key.remoteJid);
            const participants = metadata.participants.map((v) => v.id);

            socket.sendMessage(chat.key.remoteJid, {
                text: args,
                mentions: participants
            })

            break;

            case 'waktusholat' : {
                
                if (!text) return socket.sendMessage(chat.key.remoteJid, { text: 'masukan nama daerah' })
                let res = await jadwalsholat(text)
                socket.sendMessage(chat.key.remoteJid, { text : `「 📑 」 Jadwal sholat di ${text}

「 🌆 」 Subuh: ${res.subuh}
「 🏜 」 Dzuhur: ${res.dhuhur}
「 🌇 」 Ashar: ${res.ashar}
「 🌄 」 Maghrib: ${res.maghrib}
「 🌃 」 Isya: ${res.isya}`})

                }
                break;

                case 'cuaca': {
                    const text = pesan.split(" ").slice(1).join(" ")
                    if (!text) return socket.sendMessage(chat.key.remoteJid, { text: 'masukan nama daerah' })
                    try {
                            const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
                            const res = await response
                            const name = res.data.name
                            const Country = res.data.sys.country
                            const Weather = res.data.weather[0].description
                            const Temperature = res.data.main.temp + "°C"
                            const Minimum_Temperature = res.data.main.temp_min + "°C"
                            const Maximum_Temperature = res.data.main.temp_max + "°C"
                            const Humidity = res.data.main.humidity + "%"
                            const Wind = res.data.wind.speed + "km/h"
                            const wea = `「 📍 」 Place: ${name}\n「 🗺 」 Country: ${Country}\n「 🌤 」 Weather: ${Weather}\n「 🌡 」Temperature: ${Temperature}\n「 💠 」 Minimum Temperature: ${Minimum_Temperature}\n「 📛 」 Maximum Temperature: ${Maximum_Temperature}\n「 💦 」 Humidity: ${Humidity}\n「 🌬 」 Wind: ${Wind}`
                    
                            socket.sendMessage(chat.key.remoteJid, { text: wea})
                        } catch (e) {
                            return "Error location not found!!!"
                    }
                    }
                    break;

                    case 'ffstalk': {
                        const id = pesan.split(" ").slice(1).join(" ")
                        if (!id) return socket.sendMessage(chat.key.remoteJid, { text: 'Masukin ID FF nya Ngab' }, { quoted: chat })
                        const ff = await ffStalk(id)
                        const result = `*\`FREE FIRE STALK\`*
> BASIC INFO
*Name:* ${ff.BasicInfo.Name}
*ID:* ${ff.BasicInfo.UID}
*Level:* ${ff.BasicInfo.Level}
*Region:* ${ff.BasicInfo.Region}
*Honor Score:* ${ff.BasicInfo.HonorScore}
*Title:* ${ff.BasicInfo.Title}
*Bio:* ${ff.BasicInfo.Bio}

> ACTIVITY INFO
*Fire Pass:* ${ff.ActivityInfo.FirePass}
*CS Point:* ${ff.ActivityInfo.CSPoints}
*Created At:* ${ff.ActivityInfo.CreatedAt}
*Last Login:* ${ff.ActivityInfo.LastLogin}

> PET INFO
*Equipped:* ${ff.PetInfo.Equipped}
*Pet Name:* ${ff.PetInfo.PetName}
*Pet Type:* ${ff.PetInfo.PetType}
*Pet Level:* ${ff.PetInfo.PetLevel}
                        
> GUILD INFO
*Guild Name:* ${ff.GuildInfo.GuildName}
*Guild ID:* ${ff.GuildInfo.GuildID}
*Guild Level:* ${ff.GuildInfo.GuildLevel}
*Member:* ${ff.GuildInfo.LiveMembers}
                        `
                        socket.sendMessage(chat.key.remoteJid, { text: result})
                    }
                        break;

                        case 'kalkulator':{
                            val = pesan.split(" ").slice(1).join(" ")
                            .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
                            .replace(/×/g, '*')
                            .replace(/÷/g, '/')
                            .replace(/π|pi/gi, 'Math.PI')
                            .replace(/e/gi, 'Math.E')
                            .replace(/\/+/g, '/')
                            .replace(/\++/g, '+')
                            .replace(/-+/g, '-')
                            let format = val
                            .replace(/Math\.PI/g, 'π')
                            .replace(/Math\.E/g, 'e')
                            .replace(/\//g, '÷')
                            .replace(/\*×/g, '×')
                            socket.sendMessage(chat.key.remoteJid, { react: { text: '🕒', key: chat.key }})
                            try {
                            let result = (new Function('return ' + val))()
                            if (!result) return socket.sendMessage(chat.key.remoteJid, { text: `${result}` }),{quoted: chat}
                            socket.sendMessage(chat.key.remoteJid, { text: `*${format}* = _${result}_`}),{quoted: chat}
                            } catch (e) {
                            if (e == undefined) return socket.sendMessage(chat.key.remoteJid, { text: 'Isinya?'}),{quoted: chat}
                            socket.sendMessage(chat.key.remoteJid, { text: 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport' }),{quoted: chat}
                            }
                            }
                            break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 'ytmp3':
    await downloadMp3(text)
    break;

case 'ytmp4':
    await downloadMp4(text)
    break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            case 'randomsound': case 'rsound':
 let lop = await (await fetch('https://itzpire.com/random/sound-effect')).json()
 let nnd = lop.data
 let ranIndex = Math.floor(Math.random() * nnd.length);
 let sou = nnd[ranIndex]
 const cap = `🎲 *RANDOM SOUND*\n*Title:* ${sou.title}\n*Source:* ${sou.pageLink}`
socket.sendMessage(chat.key.remoteJid,{ text: cap},{ quoted: chat})
socket.sendMessage(chat.key.remoteJid,{ audio:{url: sou.soundLink}, mimetype: 'audio/mp4'})
 break;

 case 'randomstick': case 'rstick':
  let fet = await (await fetch('https://itzpire.com/random/sticker-anime'))
  socket.sendMessage(chat.key.remoteJid,{ sticker: fet }, {quoted: chat})
break;

case 'cekkhodam': {
    const text = pesan.split(" ").slice(1).join(" ")
    if (!text) await socket.sendMessage(chat.key.remoteJid, { text: 'Masukkan namamu' }, { quoted: chat })
    
    const khodamData = require('./lib/game/listkhodam.json')
    const randomKhodam = khodamData[Math.floor(Math.random() * khodamData.length)]
    const result = `*-- CEK KHODAM --*
Nama: ${text}
Khodam: ${randomKhodam}`
    if (text) await socket.sendMessage(chat.key.remoteJid, { text: result }, { quoted: chat })
    }
    break;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case "menu": {
    await socket.sendMessage(chat.key.remoteJid, { text: `*---------- > INFO BOT < ----------*
📟 *Bot name*: ?
📞 *Prefix*: [.]
⏱ *Jam*: ?` })


const Button = require("./button")
let button = new Button()
button.setTitle("title").setBody("body").setFooter("footer").makeButton("quick_reply").setParams({ display_text: "reply", id: ".test" })
socket.sendMessage(chat.key.remoteJid, button.getFullMessage(chat), {})
}
        }}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (chat.message?.imageMessage?.caption == '.s' && chat.message?.imageMessage) {

            const getMedia = async (msg) => {
                const messageType = Object.keys(msg?.message)[0]
                const stream = await downloadContentFromMessage(msg.message[messageType], messageType.replace('Message', ''))
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }

                return buffer
            }

            const mediaData = await getMedia(chat)
            const stickerOption = {
                pack: "Oversear",
                author: "Ikann",
                type: StickerTypes.FULL,
                quality: 50
            }

            const generateSticker = await createSticker(mediaData, stickerOption)
            await socket.sendMessage(chat.key.remoteJid, { sticker: generateSticker })
        } else if (chat.message?.imageMessage?.caption == '.sticker' && chat.message?.imageMessage) {

            const getMedia = async (msg) => {
                const messageType = Object.keys(msg?.message)[0]
                const stream = await downloadContentFromMessage(msg.message[messageType], messageType.replace('Message', ''))
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }

                return buffer
            }

            const mediaData = await getMedia(chat)
            const stickerOption = {
                pack: "Oversear",
                author: "Ikann",
                type: StickerTypes.FULL,
                quality: 50
            }

            const generateSticker = await createSticker(mediaData, stickerOption)
            await socket.sendMessage(chat.key.remoteJid, { sticker: generateSticker })
        }
    })
}

connectWhatsapp()