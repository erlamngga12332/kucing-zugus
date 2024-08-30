const story = [
    "Pada suatu hari yang dingin di bulan Desember, seekor kucing bernama Zugus terbangun dengan rasa penasaran yang besar. Dari jendela rumahnya, dia melihat hamparan salju putih yang indah dan mendengar desas-desus tentang makhluk ajaib bernama Snowman. Zugus pun memutuskan untuk memulai perjalanan mencari Snowman.",
    "Sebelum berangkat, Zugus menyiapkan bekal dan perlengkapan yang diperlukan. Dia membawa peta, makanan, dan mantel tebal untuk melindunginya dari dingin. Setelah semua siap, Zugus pun memulai petualangannya menuju hutan salju yang luas.",
    "Saat berjalan di hutan, Zugus bertemu dengan seekor burung hantu bijak yang memberi petunjuk. 'Snowman tinggal di puncak Gunung Salju,' kata burung hantu. 'Namun, untuk sampai ke sana, kamu harus melalui Lembah Es yang berbahaya.' Zugus berterima kasih dan melanjutkan perjalanannya.",
    "Lembah Es ternyata sangat licin dan berbahaya. Zugus hampir tergelincir beberapa kali, tetapi dia tidak menyerah. Dengan tekad yang kuat, dia berhasil melewati lembah tersebut dan mendekati puncak gunung.",
    "Akhirnya, setelah perjalanan yang panjang dan melelahkan, Zugus sampai di puncak Gunung Salju. Di sana, dia melihat Snowman yang besar dan ramah. Snowman tersenyum dan menyapa Zugus. 'Selamat datang, Zugus. Aku telah menunggumu,' kata Snowman.",
    "Zugus dan Snowman berbicara panjang lebar dan menjadi teman baik. Snowman mengajari Zugus banyak hal tentang keindahan dan keajaiban musim dingin. Zugus merasa sangat bahagia telah melakukan perjalanan ini.",
    "Setelah menghabiskan beberapa hari bersama Snowman, Zugus memutuskan untuk kembali ke rumah. Snowman memberi Zugus kristal salju sebagai kenang-kenangan. Dengan hati yang penuh kebahagiaan, Zugus pun pulang ke rumahnya, membawa banyak cerita dan pengalaman baru.",
    "Di rumah, Zugus menceritakan petualangannya kepada teman-temannya. Mereka semua terpesona dan terinspirasi oleh keberanian dan tekad Zugus. Petualangan ini menjadi kenangan yang tak terlupakan bagi Zugus dan semua yang mendengarnya.",
    "Perjalanan Zugus mencari Snowman adalah bukti bahwa dengan tekad dan keberanian, kita dapat mencapai hal-hal luar biasa. Zugus mengajarkan kita untuk tidak pernah menyerah dan selalu berusaha mencapai impian kita, betapapun sulitnya perjalanan itu."
];

let currentChapter = 0;

function nextChapter() {
    if (currentChapter < story.length) {
        document.getElementById('story').innerText = story[currentChapter];
        currentChapter++;
    } else {
        alert('Cerita selesai!');
    }
}
