/** @format */

const Discord = require("discord.js");
const messageCreate = require("../Events/messageCreate");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "choc_cong_san",
    description: "Lenh choc may thang bo do va cong san.",
    async run(message, args, client){
        function _output(s){
            console.log(`[${new Date().toLocaleTimeString()}]: ${s}`);
        }

        _output("Da gui data thanh cong.");
        const quotes = [
            "Tích cực tuyên truyền tư tưởng tướng Nguyễn Văn Thiệu vĩ đại cho công dân đời sau!",
            "TAO Đ*T CHẾT MẤY THẰNG CỘNG SẢN ĂN DƠ Ở BẨN😏😏😏😏😏😏😏TAO NÉM XE TOYOTA NẶNG 10000000000000KG LÊN ĐẦU MẤY THẰNG CỘNG SẢN TAO TUYÊN BỐ SẼ PHANG CHẾT MẤY CON BÒ ĐỎ!!!!!!!!!!!!",
            "\"Đừng nghe Cộng sản nói, hãy nhìn Cộng sản làm!\" - by Nguyễn Văn Thiệu",
            "https://vuongthuc.files.wordpress.com/2015/10/animatedpicture2quochan2014-600-450-24.gif",
            "http://1.bp.blogspot.com/-Gx3ZbAqlg6Q/VNU9D8AyAzI/AAAAAAAAAGM/7wgHq8dyG64/s1600/NL.gif",
            "TIẾP NỐI TRUYỀN THỐNG BÚ C*C MAO TRẠCH ĐÔNG MUÔN ĐỜI!!!!!!!!! MẤY CON BÒ ĐỎ CAY THÌ CẮN TAO NÈ😂😂😂😂😂😂😂😂😂😂😂🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣",
            "KÊU GỌI CHÍNH PHỦ MỸ XÉ BỎ TỜ PARIS 1973 ĐỂ CHO VNCH KHÔI PHỤC LẠI TẠI ĐẤT MẸ RỒI BÁN CSVN CHO TRUNG QUỐC!!!!!!!!!!!"
        ]

        const random = quotes[Math.floor(Math.random() * quotes.length)];

        message.channel.send(`${random}`);
    }
});
