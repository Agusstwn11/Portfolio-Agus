export const portfolioData = {
  personal: {
    name: "Agus Setiawan, S.Kom",
    role: "Junior Web Developer | Junior Data Analyst | Network Engineer",
    tagline: "Building practical web solutions, data-driven insights, and reliable network systems.",
    shortIntro: "Informatics Engineering Graduate passionate about web application engineering, data analytics, and network infrastructure.",
    about: "I am an Informatics Engineering graduate from Universitas Esa Unggul with multidisciplinary competencies across Web Development, Data Analysis & BI, and Network Engineering. I have hands-on experience building full-stack web applications using PHP and Laravel, designing automated ETL pipelines with Pentaho & Power BI, performing Software Quality Assurance (Jest automated testing & black-box testing), conducting time-series predictive modeling using Python & ARIMAX, and configuring enterprise-level network infrastructure with Cisco Packet Tracer (MLS, EIGRP, VLANs, ASA Firewall) and MikroTik. I am driven by clean code, analytical rigor, and continuous learning.",
    location: "Jakarta, Indonesia",
    gpa: "3.43 / 4.00",
    degree: "S1 Teknik Informatika",
    university: "Universitas Esa Unggul (2022–2026)",
    availability: "Open to Work / Junior Tech Opportunities",
    photo: "/agus-photo.jpg",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/agussetiawan11/",
    github: "https://github.com/Agusstwn11",
    gmail: "setiawan110904@gmail.com",
    whatsapp: "081212635065",
    whatsappLink: "https://wa.me/6281212635065?text=Halo%20Agus%20Setiawan,%20saya%20tertarik%20dengan%20profil%20portfolio%20Anda.",
    instagram: "https://www.instagram.com/a.stwn11",
  },

  skills: [
    {
      category: "Web Development",
      description: "Frontend & backend web applications, REST APIs, and modern responsive styling",
      items: [
        { name: "PHP", level: "Intermediate" },
        { name: "Laravel", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Intermediate" },
        { name: "React.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "REST API", level: "Intermediate" },
        { name: "HTML5 / CSS3", level: "Advanced" },
      ],
    },
    {
      category: "Data Analysis & BI",
      description: "ETL pipelines, business intelligence dashboards, and predictive time-series models",
      items: [
        { name: "Power BI", level: "Intermediate" },
        { name: "Pentaho Data Integration (ETL)", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "Pandas & NumPy", level: "Intermediate" },
        { name: "ARIMAX Modeling", level: "Intermediate" },
        { name: "Matplotlib & Seaborn", level: "Intermediate" },
        { name: "Exploratory Data Analysis", level: "Intermediate" },
      ],
    },
    {
      category: "Network Engineering",
      description: "Network configuration, dynamic routing, firewall perimeter, and infrastructure support",
      items: [
        { name: "BNSP Level II Certified", level: "Certified" },
        { name: "Cisco Packet Tracer", level: "Advanced" },
        { name: "Multilayer Switch (MLS)", level: "Intermediate" },
        { name: "EIGRP & OSPF Routing", level: "Intermediate" },
        { name: "VLAN & Inter-VLAN Routing", level: "Intermediate" },
        { name: "Cisco ASA Firewall & ACL", level: "Intermediate" },
        { name: "MikroTik", level: "Intermediate" },
        { name: "TCP/IP & Subnetting", level: "Intermediate" },
      ],
    },
    {
      category: "Software QA & Testing",
      description: "Automated unit/integration testing, black-box validation, and test reporting",
      items: [
        { name: "Jest Framework", level: "Intermediate" },
        { name: "React Testing Library", level: "Intermediate" },
        { name: "Black-Box Testing", level: "Advanced" },
        { name: "Test Case Design", level: "Advanced" },
        { name: "Regression & Functional QA", level: "Advanced" },
      ],
    },
    {
      category: "Database & Tools",
      description: "Relational database modeling, query optimization, version control, and IDEs",
      items: [
        { name: "MySQL", level: "Intermediate" },
        { name: "Database Design", level: "Intermediate" },
        { name: "Git & GitHub", level: "Intermediate" },
        { name: "Visual Studio Code", level: "Advanced" },
        { name: "Postman", level: "Intermediate" },
        { name: "Android Studio / Kotlin", level: "Basic" },
      ],
    },
  ],

  projects: [
    {
      id: "legal-mind-attendance",
      title: "Company Attendance & QR Barcode System",
      category: "Web Development",
      featured: true,
      tag: "Internship Project",
      image: "/projects/legal-mind-dashboard.jpg",
      gallery: [
        {
          url: "/projects/legal-mind-dashboard.jpg",
          caption: "Dashboard Pemantauan Kehadiran Karyawan Real-time (Hadir, Izin, Sakit, Tidak Hadir)"
        },
        {
          url: "/projects/legal-mind-barcode.jpg",
          caption: "Modul Pembuatan Barcode / QR Code Presensi Dinamis Berdasarkan Koordinat GPS & Radius Meter"
        }
      ],
      technologies: ["PHP", "Laravel", "MySQL", "REST API", "Tailwind CSS", "QR Code Engine", "Geolocation"],
      shortDescription: "Aplikasi absensi karyawan berbasis web dengan fitur pemantauan kehadiran real-time dan validasi QR Barcode berbasis koordinat GPS.",
      longDescription: "Sistem presensi internal tingkat produksi yang dirancang dan diimplementasikan selama magang di Badan Usaha Legal Mind. Sistem ini mendigitalisasi pencatatan kehadiran harian karyawan, pemantauan jam kerja, pengelompokan divisi, serta otomatisasi pembuatan QR Code / Barcode kehadiran yang terikat dengan koordinat GPS dan batasan radius meter tertentu demi mencegah manipulasi presensi.",
      features: [
        "Dashboard analitik kehadiran real-time dengan status ringkasan (Hadir, Izin, Sakit, Tidak Hadir)",
        "Sistem generate Barcode/QR Code presensi dinamis berbasis koordinat GPS dan radius validasi (meter)",
        "Multi-role Authentication & Role-Based Access Control (Admin & Karyawan)",
        "Manajemen data karyawan, struktur departemen/divisi, dan pembagian shift kerja",
        "Operasi CRUD komprehensif untuk absensi, pengajuan cuti/izin, dan rekap jam kerja",
        "Endpoints REST API untuk sinkronisasi data presensi dan integrasi layanan",
        "Ekspor laporan rekap kehadiran ke format file untuk kebutuhan HRD"
      ],
      github: "https://github.com/Agusstwn11",
      demo: null,
      reportPdf: null,
    },
    {
      id: "ecommerce-qa-testing",
      title: "E-Commerce Software Quality Assurance (SQA)",
      category: "QA & Testing",
      featured: true,
      tag: "Testing & Automated QA",
      image: "/projects/powerbi-data-warehouse.jpg",
      gallery: [
        {
          url: "/projects/powerbi-data-warehouse.jpg",
          caption: "Tampilan Sistem E-Commerce yang Menjadi Objek Pengujian Fungsional & Kualitas"
        },
        {
          url: "/projects/sqa-testing-frontend.jpg",
          caption: "Hasil Eksekusi Automated Testing Jest Frontend: 12 Test Suites, 27 Test Cases (100% PASS)"
        },
        {
          url: "/projects/sqa-testing-backend.jpg",
          caption: "Hasil Eksekusi Automated Testing Jest Backend API: 10 Test Suites, 64 Test Cases (100% PASS)"
        },
        {
          url: "/projects/sqa-testing-report.jpg",
          caption: "Dokumentasi Formal Pengujian dengan jest-html-reporter (HTML Test Report)"
        }
      ],
      technologies: ["Jest", "React Testing Library", "Next.js", "Express.js", "Black-Box Testing", "HTML Report Generator"],
      shortDescription: "Pengujian fungsional komprehensif sistem e-commerce berbasis Next.js & Express.js menggunakan metode Black-Box Testing dan Automated Testing Jest.",
      longDescription: "Proyek Software Quality Assurance (SQA) formal yang mendalam untuk mengevaluasi fungsionalitas, reliabilitas, dan integritas sistem e-commerce fullstack. Menggabungkan pengujian manual black-box dengan skenario real user scenario dan pengujian otomatis (automated testing) menggunakan framework Jest pada lapisan Frontend dan Backend dengan tingkat keberhasilan 100% PASS tanpa kegagalan fungsi.",
      features: [
        "100% Test Pass Rate: 27 test cases lolos pada Frontend (12 test suites) & 64 test cases lolos pada Backend API (10 test suites)",
        "Pengujian fungsional menyeluruh: Autentikasi JWT, Katalog Produk, Filter Kategori, Cart, Wishlist, Address, dan Checkout",
        "Penyusunan matriks test case terstruktur (Test ID, Scenario, Input, Expected Output, Result Status)",
        "Automated report generation menggunakan jest-html-reporter untuk audit formal kualitas software",
        "Laporan pengujian akademis resmi setebal 16 halaman lengkap dengan metodologi, pengujian endpoint, dan rekomendasi CI/CD"
      ],
      github: "https://github.com/Agusstwn11",
      demo: null,
      reportPdf: "/projects/laporan-sqa-ecommerce.pdf",
    },
    {
      id: "hospital-network-architecture",
      title: "Perancangan Jaringan Rumah Sakit WYN (Cisco)",
      category: "Network Engineering",
      featured: true,
      tag: "Enterprise Network Design",
      image: "/projects/cisco-hospital-topology.jpg",
      gallery: [
        {
          url: "/projects/cisco-hospital-topology.jpg",
          caption: "Topologi Jaringan Rumah Sakit WYN Menggabungkan Core, Distribution, Access Layer, dan Cisco ASA Firewall"
        }
      ],
      technologies: ["Cisco Packet Tracer", "Multilayer Switch (MLS)", "EIGRP Protocol", "VLAN & SVI", "DHCP Helper", "Cisco ASA Firewall"],
      shortDescription: "Simulasi infrastruktur jaringan skala enterprise untuk rumah sakit dengan 11 departemen menggunakan Cisco Packet Tracer, MLS, EIGRP, dan Cisco ASA Firewall.",
      longDescription: "Proyek perancangan dan implementasi infrastruktur jaringan terintegrasi untuk Rumah Sakit WYN dengan menghubungkan 11 unit ruangan kritis (IGD, ICU, Ruang Operasi, Radiologi, Laboratorium, Farmasi, Klinik, Manajemen, IT Hub, dll). Menggunakan arsitektur hierarkis tiga lapis (Core, Distribution, Access) dengan Multilayer Switch untuk inter-VLAN routing, dynamic routing EIGRP AS 10, DHCP terpusat, dan perimeter security Cisco ASA.",
      features: [
        "Desain topologi hierarkis terintegrasi 11 ruangan medis & operasional rumah sakit",
        "Segmentasi VLAN untuk isolasi trafik data medis (VLAN 40 Clinics, 50 Radiology, 60 Lab, 70 Pharmacy, 80 Emergency, dll)",
        "Inter-VLAN routing pada lapisan distribusi menggunakan Switched Virtual Interface (SVI) dan routed port Point-to-Point (/30)",
        "Konfigurasi Dynamic Routing Protocol EIGRP (Autonomous System 10) dengan konvergensi otomatis cepat tanpa loop",
        "Implementasi DHCP Server terpusat dengan IP Helper-Address pada interface VLAN",
        "Keamanan perimeter firewall menggunakan Cisco ASA (Stateful Inspection ICMP & Access Control List)",
        "Dokumentasi laporan teknis lengkap 22 halaman dengan bukti pengujian ping skenario ujung ke ujung"
      ],
      github: "https://github.com/Agusstwn11",
      demo: null,
      reportPdf: "/projects/laporan-jaringan-rumah-sakit-cisco.pdf",
    },
    {
      id: "powerbi-etl-data-warehouse",
      title: "Data Warehouse ETL & Power BI Dashboard",
      category: "Data Science",
      featured: true,
      tag: "ETL & Business Intelligence",
      image: "/projects/pengaduan-masyarakat.jpg",
      gallery: [
        {
          url: "/projects/pengaduan-masyarakat.jpg",
          caption: "Visualisasi Analisis Data Warehouse & Dashboard Terintegrasi"
        },
        {
          url: "/projects/pentaho-etl-pipeline.jpg",
          caption: "Pentaho Data Integration (Spoon) Pipeline: Ekstraksi CSV, Type Casting, Perhitungan, Pengurutan, Agregasi, hingga Pemuatan DB"
        }
      ],
      technologies: ["Power BI", "Pentaho Data Integration (Spoon)", "ETL Architecture", "MySQL", "Data Modeling", "DAX"],
      shortDescription: "Pipeline rekayasa data end-to-end menggunakan Pentaho Spoon untuk proses ETL dan Power BI untuk dashboard analitik visual interaktif.",
      longDescription: "Proyek rekayasa dan analisis data komprehensif yang mengintegrasikan proses Data Warehousing mulai dari data mentah hingga visualisasi tingkat eksekutif. Menggunakan Pentaho Spoon untuk mengekstraksi, membersihkan tipe data, melakukan kalkulasi matematika, memilah variabel, menyortir, dan melakukan agregasi ke dalam tabel data warehouse, kemudian divisualisasikan secara dinamis menggunakan Microsoft Power BI.",
      features: [
        "Pembangunan pipeline ETL otomatis dengan Pentaho Spoon (CSV Input -> Type Casting -> Calculator -> Sort -> Aggregation -> Table Output)",
        "Dashboard Business Intelligence interaktif dengan metrik visual: Jumlah pendapatan per jenis cuci, tren bulanan & harian, rata-rata harga per tahun",
        "Analisis komparatif kendaraan (mobil vs motor) dan tipe paket (biasa vs full paket)",
        "Penerapan pemodelan data dimensional dan perumusan formula DAX untuk kalkulasi agregat",
        "Slicing & filtering interaktif untuk eksplorasi data multi-dimensi secara real-time"
      ],
      github: "https://github.com/Agusstwn11",
      demo: null,
      reportPdf: null,
    },
    {
      id: "workout-daily-exercise",
      title: "Personalized Workout & Daily Exercise App",
      category: "Mobile",
      featured: false,
      tag: "Android Mobile App",
      image: "/projects/workout-app-mobile.jpg",
      gallery: [
        {
          url: "/projects/workout-app-mobile.jpg",
          caption: "Mockup UI Aplikasi Workout: Splash Screen, Autentikasi Pengguna, dan Form Data Diri"
        }
      ],
      technologies: ["Kotlin", "Android Studio", "UI/UX Mobile Design", "Figma", "Android SDK"],
      shortDescription: "Aplikasi mobile Android untuk memandu rutinitas kebugaran harian dengan kustomisasi tujuan latihan dan tingkat intensitas.",
      longDescription: "Aplikasi mobile native Android yang dirancang untuk mempermudah masyarakat dalam menjaga kebugaran tubuh tanpa peralatan rumit. Dilengkapi dengan perancangan arsitektur berorientasi pengguna, mulai dari analisis kebutuhan, diagram aktivitas UML, kustomisasi jadwal workout berdasarkan 3 tingkat kemampuan (Pemula, Menengah, Lanjutan), serta integrasi preferensi jenis latihan (Kardio, Kekuatan, HIIT, Yoga).",
      features: [
        "Modul autentikasi pengguna lengkap (Login & Registrasi dengan validasi input terstruktur)",
        "Pembuatan jadwal latihan otomatis berdasarkan 3 level kebugaran (Pemula, Menengah, Lanjutan)",
        "Pilihan kategori latihan variatif (Kardio wajib, Kekuatan otot, HIIT, dan Yoga)",
        "Home Page interaktif dengan pelacak aktivitas harian ('Today's Activity') dan rekomendasi kelas latihan",
        "Dokumentasi SRS teknis lengkap dengan Activity Diagram dan tautan video demonstrasi aplikasi"
      ],
      github: "https://github.com/dendi-fathir/AplikasiWorkout.git",
      demo: "https://drive.google.com/drive/folders/1B6PvIqhg50NUOrq9h0hGlQCJ8wiDN5Xh?usp=drive_link",
      reportPdf: "/projects/laporan-aplikasi-workout-mobile.pdf",
    },
    {
      id: "public-complaint-app",
      title: "Public Complaint / Pengaduan Masyarakat",
      category: "Web Development",
      featured: false,
      tag: "Civic Tech Platform",
      image: "/projects/ecommerce-qa.jpg",
      gallery: [
        {
          url: "/projects/ecommerce-qa.jpg",
          caption: "Tampilan Sistem Aplikasi Layanan Publik Pengaduan Masyarakat"
        }
      ],
      technologies: ["PHP", "Laravel", "MySQL", "REST API", "Blade", "Tailwind CSS"],
      shortDescription: "Platform digital pelayanan publik untuk memfasilitasi pelaporan keluhan masyarakat secara transparan dengan dashboard admin.",
      longDescription: "Aplikasi web civic-tech yang dirancang untuk mempermudah masyarakat menyampaikan aduan permasalahan lingkungan dan fasilitas umum kepada pihak pengelola. Dilengkapi dashboard petugas untuk memverifikasi laporan, memperbarui status penanganan (proses, selesai), dan memelihara arsip data aduan secara tertib.",
      features: [
        "Formulir aduan publik dengan pengisian NIK, nama pelapor, dan uraian permasalahan",
        "Dashboard admin terpusat dengan rekap aduan masuk dan status penanganan real-time",
        "Manajemen pengguna dan hak akses petugas verifikasi",
        "Sistem navigasi terstruktur (Registrasi, Pengaduan, Respon, User, dan Laporan)",
        "Database relasional MySQL dengan implementasi operasi CRUD yang aman"
      ],
      github: "https://github.com/Agusstwn11",
      demo: null,
      reportPdf: null,
    },
    {
      id: "shopee-sales-forecasting",
      title: "Prediksi Penjualan Shopee Menggunakan ARIMAX (Publikasi Jurnal CoSciTech)",
      category: "Data Science",
      featured: true,
      tag: "Publikasi Jurnal Nasional (CoSciTech)",
      image: null,
      gallery: [],
      technologies: ["ARIMAX", "Python", "Time Series", "Pandas", "Grid Search AIC", "Ljung-Box Test", "Machine Learning"],
      shortDescription: "Artikel ilmiah terpublikasi di Jurnal Nasional CoSciTech (Vol. 7 No. 2, 2026) mengenai pemodelan ARIMAX untuk peramalan penjualan e-commerce Shopee.",
      longDescription: "Penelitian ilmiah yang telah resmi dipublikasikan di Jurnal Computer Science and Information Technology (CoSciTech), Vol. 7, No. 2, Agustus 2026, hal. 309-316 (p-ISSN: 2723-567X, e-ISSN: 2723-5661, DOI: 10.37859/coscitech.v7i2.12159). Mengimplementasikan model ARIMAX pada 11.142 transaksi Shopee Seller Centre toko Kiranashoop15 periode 2020-2025 yang diagregasi menjadi 65 observasi bulanan. Model optimal ARIMAX(2,1,4) menghasilkan akurasi prediksi istimewa dengan MAPE 0,461%, RMSE Rp62.484, dan MAE Rp51.825 dengan residual white-noise teruji (p-value 1.00).",
      features: [
        "Publikasi Resmi Jurnal Ilmiah Nasional: Jurnal CoSciTech Vol. 7 No. 2, 2026 (Universitas Muhammadiyah Riau)",
        "Penulis Pertama (First Author): Agus Setiawan bersama tim pembimbing akademisi Universitas Esa Unggul",
        "Akurasi Prediksi Sangat Tinggi: MAPE 0,461% (< 1%, Sangat Baik), MAE Rp51.825, dan RMSE Rp62.484",
        "Analisis Kontribusi Variabel Eksogen: Harga Asli Produk dominan (68,87%), diikuti Biaya Kampanye (22,13%)",
        "Optimasi Parameter Model: ARIMAX(2,1,4) terpilih melalui Grid Search berbasis AIC terendah (1203,78)",
        "Uji Diagnostik Residual Ljung-Box (p-value 1.00) mengonfirmasi residual bersih tanpa autokorelasi (white noise)",
        "Proyeksi Dinamis 6 Bulan ke Depan (Juni-November 2025): Total penjualan stabil pada Rp14,20 juta - Rp15,22 juta/bulan"
      ],
      github: "https://github.com/Agusstwn11",
      demo: "https://ejurnal.umri.ac.id/index.php/coscitech/article/view/12159",
      journalUrl: "https://ejurnal.umri.ac.id/index.php/coscitech/article/view/12159",
      doi: "https://doi.org/10.37859/coscitech.v7i2.12159",
      reportPdf: "/projects/jurnal-arimax-shopee-agus-setiawan.pdf",
    },
  ],

  certifications: [
    {
      id: "pub-journal-coscitech",
      title: "Publikasi Jurnal Ilmiah CoSciTech: Prediksi Penjualan Shopee (ARIMAX)",
      issuer: "Jurnal Computer Science and Information Technology (CoSciTech)",
      institution: "Universitas Muhammadiyah Riau (Vol. 7 No. 2, Agustus 2026, hal. 309-316)",
      credentialNo: "p-ISSN: 2723-567X | e-ISSN: 2723-5661",
      regNo: "DOI: 10.37859/coscitech.v7i2.12159",
      date: "Agustus 2026",
      status: "Published & Peer-Reviewed (Penulis Pertama)",
      category: "Publikasi & Jurnal",
      badge: "Jurnal Ilmiah",
      badgeColor: "indigo",
      image: null,
      backImage: null,
      file: "/projects/jurnal-arimax-shopee-agus-setiawan.pdf",
      url: "https://ejurnal.umri.ac.id/index.php/coscitech/article/view/12159",
      description: "Artikel ilmiah nasional peer-reviewed yang memodelkan 11.142 transaksi e-commerce Shopee Seller Centre toko Kiranashoop15 menggunakan ARIMAX(2,1,4) dengan tingkat akurasi istimewa MAPE 0,461% (< 1%), MAE Rp51.825, dan RMSE Rp62.484."
    },
    {
      id: "cert-bnsp-tkj",
      title: "Sertifikat Kompetensi KKNI Level II - Teknik Komputer dan Jaringan",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      institution: "LSP SMKN 53 Jakarta",
      credentialNo: "61100 3513 2 0000436 2022",
      regNo: "TIK 004 0000105 2022",
      date: "30 Mei 2022",
      status: "Sertifikasi Negara / Resmi Terverifikasi",
      category: "Nasional & BNSP",
      badge: "BNSP Resmi",
      badgeColor: "emerald",
      image: "/certificates/sertifikat-bnsp-tkj.jpg",
      backImage: "/certificates/sertifikat-bnsp-tkj-unit.jpg",
      file: "/certificates/sertifikat-bnsp-tkj.jpg",
      description: "Sertifikasi profesi nasional standar BNSP yang menguji dan menyatakan kompetensi penuh pada 13 Unit Kompetensi Jaringan (Perancangan Topologi, Pengalamatan IP, Konfigurasi Switch & Routing Autonomous System, Jaringan Nirkabel, Monitoring Keamanan, hingga Penggantian Perangkat)."
    },
    {
      id: "cert-power-bi",
      title: "Power BI for Beginners (Declaration of Completion)",
      issuer: "Simplilearn SkillUp",
      institution: "Powered by Microsoft",
      credentialNo: "10759283",
      regNo: null,
      date: "20 September 2026",
      status: "Verified Credential",
      category: "Data & BI",
      badge: "Microsoft Course",
      badgeColor: "sky",
      image: null,
      backImage: null,
      file: "/certificates/sertifikat-power-bi-simplilearn.pdf",
      description: "Penyelesaian program pelatihan resmi Business Intelligence menggunakan Microsoft Power BI, mencakup koneksi sumber data, pemodelan data, visualisasi interaktif, dan analisis performa bisnis."
    },
    {
      id: "cert-data-analyst",
      title: "Certificate of Completion - Free Data Analyst Course",
      issuer: "Simplilearn SkillUp",
      institution: "Simplilearn",
      credentialNo: "10761098",
      regNo: null,
      date: "20 September 2026",
      status: "Verified Credential",
      category: "Data & BI",
      badge: "Data Analytics",
      badgeColor: "indigo",
      image: null,
      backImage: null,
      file: "/certificates/sertifikat-data-analyst-simplilearn.pdf",
      description: "Kursus komprehensif analisis data yang mencakup prinsip eksplorasi data (EDA), manipulasi dataset, perumusan hipotesis analitik, serta interpretasi wawasan data untuk pengambilan keputusan."
    },
    {
      id: "cert-microsoft-office",
      title: "Sertifikat Keahlian Microsoft Office (Predikat: Sangat Baik)",
      issuer: "Yayasan Abdi Karya (YADIKA)",
      institution: "CV Sabar Parade Wedya & SMK Yadika 3",
      credentialNo: "180/SMK-YAK.3/V/2022",
      regNo: "196613",
      date: "12 Mei 2022",
      status: "Lulus dengan Predikat Sangat Baik (Rata-rata 81)",
      category: "IT Productivity",
      badge: "Sangat Baik (81)",
      badgeColor: "purple",
      image: "/certificates/sertifikat-microsoft-office.jpg",
      backImage: "/certificates/sertifikat-microsoft-office-nilai.jpg",
      file: "/certificates/sertifikat-microsoft-office.jpg",
      description: "Sertifikasi resmi penguasaan piranti lunak perkantoran Microsoft Office dengan nilai rata-rata 81 (Word: 81, Excel: 83, PowerPoint: 82), membuktikan keterampilan pengolahan dokumen, analisis spreadsheet, dan presentasi profesional."
    },
    {
      id: "cert-legal-mind",
      title: "Sertifikat Magang Back End Developer",
      issuer: "Badan Usaha Legal Mind",
      institution: "Legal Mind Indonesia",
      credentialNo: "001/INT/LM/VIII/2025",
      regNo: null,
      date: "Maret 2025 – Agustus 2025",
      status: "Magang Terverifikasi",
      category: "Pengalaman Kerja",
      badge: "Back End Intern",
      badgeColor: "indigo",
      image: null,
      backImage: null,
      file: "/certificates/sertifikat-legal-mind.pdf",
      description: "Sertifikat resmi atas kontribusi sebagai Back End Developer Intern dalam pengembangan sistem presensi karyawan berbasis PHP Laravel, integrasi REST API, database MySQL, dan pengujian sistem di Badan Usaha Legal Mind."
    },
    {
      id: "cert-ciputra",
      title: "Sertifikat PRAKERIN IT Support",
      issuer: "PT Cakradigdaya Lokaraya (Ciputra)",
      institution: "Ciputra Group",
      credentialNo: "PRAKERIN/CIP/2020",
      regNo: null,
      date: "Agustus 2020 – Oktober 2020",
      status: "Prakerin Terverifikasi",
      category: "Pengalaman Kerja",
      badge: "IT Support",
      badgeColor: "amber",
      image: "/certificates/sertifikat-ciputra.jpg",
      backImage: null,
      file: "/certificates/sertifikat-ciputra.pdf",
      description: "Sertifikat Praktik Kerja Industri (PRAKERIN) di departemen IT Ciputra dalam pemeliharaan infrastruktur komputer, pemecahan masalah hardware/software, dan troubleshooting jaringan."
    },
    {
      id: "cert-ltp-2024",
      title: "Sertifikat Ketua Pelaksana Leadership Training Program 2024",
      issuer: "BEM FASILKOM Universitas Esa Unggul",
      institution: "Fakultas Ilmu Komputer Universitas Esa Unggul",
      credentialNo: "002/BEM-FASILKOM/LTP/XI/2024",
      regNo: null,
      date: "14 – 15 November",
      status: "Kepemimpinan Resmi",
      category: "Kepemimpinan & Organisasi",
      badge: "Ketua Pelaksana",
      badgeColor: "rose",
      image: "/certificates/sertifikat-ltp-2024.jpg",
      backImage: null,
      file: "/certificates/sertifikat-ltp-2024.jpg",
      description: "Penghargaan resmi sebagai Ketua Pelaksana Acara 'Leadership Training Program 2024' dengan tema 'Katalisator Aksi: Gerakan Gagasan, Wujudkan Perubahan' yang diikuti oleh lebih dari 112 peserta mahasiswa."
    },
  ],

  experiences: [
    {
      role: "Back End Developer Intern",
      company: "Badan Usaha Legal Mind",
      period: "Maret 2025 – Agustus 2025",
      type: "Internship",
      location: "Indonesia",
      description: "Mengembangkan sistem presensi karyawan berbasis PHP dan Laravel secara menyeluruh, mencakup autentikasi multi-role, manajemen pegawai, integrasi QR Barcode koordinat GPS, CRUD, optimasi database MySQL, REST API, serta debugging fungsional.",
      skills: ["PHP", "Laravel", "MySQL", "REST API", "Tailwind CSS", "QR Engine", "Testing"],
      hasCertificate: true,
      certificate: {
        title: "Sertifikat Magang Back End Developer",
        issuer: "Badan Usaha Legal Mind",
        period: "Maret 2025 – Agustus 2025",
        status: "Tersedia & Terverifikasi",
        credentialNo: "001/INT/LM/VIII/2025",
        role: "Web Back End Development Intern",
        file: "/certificates/sertifikat-legal-mind.pdf",
        image: null,
      },
    },
    {
      role: "IT Support Intern",
      company: "PT Cakradigdaya Lokaraya (Ciputra)",
      period: "Agustus 2020 – Oktober 2020",
      type: "Internship / Prakerin",
      location: "Indonesia",
      description: "Membantu pemeliharaan infrastruktur teknologi informasi, perbaikan serta troubleshooting perangkat keras dan sistem operasi komputer kerja, pemeliharaan konektivitas jaringan lokal, dan penanganan tiket keluhan teknis.",
      skills: ["IT Infrastructure", "Hardware Support", "Software Troubleshooting", "Networking", "Technical Support"],
      hasCertificate: true,
      certificate: {
        title: "Sertifikat Praktik Kerja Industri (PRAKERIN) IT Support",
        issuer: "PT Cakradigdaya Lokaraya (Ciputra)",
        period: "3 Agustus 2020 – 2 Oktober 2020",
        status: "Tersedia & Terverifikasi",
        credentialNo: "PRAKERIN/CIP/2020",
        role: "IT Department Intern",
        file: "/certificates/sertifikat-ciputra.pdf",
        image: "/certificates/sertifikat-ciputra.jpg",
      },
    },
  ],

  education: {
    degree: "S1 Teknik Informatika (Bachelor of Informatics Engineering)",
    institution: "Universitas Esa Unggul",
    period: "2022 – 2026",
    gpa: "3.43 / 4.00",
    description: "Fokus studi mendalam pada rekayasa perangkat lunak, pengembangan sistem aplikasi berbasis web, arsitektur basis data, analisis data saintifik, serta perancangan dan keamanan jaringan komputer.",
    highlights: [
      "IPK Kumulatif: 3.43 / 4.00",
      "Lulusan dengan portofolio komprehensif di Web Development, Data Analytics, dan Computer Network",
      "Aktif dalam kepemimpinan Himpunan Mahasiswa Jurusan (HMJ) dan berbagai kepanitiaan fakultas",
    ],
  },

  organizations: [
    {
      role: "Ketua Pelaksana (Event Chairman)",
      organization: "Leadership Training Program 2024",
      period: "2024",
      description: "Memimpin dan mengoordinasikan tim panitia penyelenggara pelatihan kepemimpinan mahasiswa Fakultas Ilmu Komputer dengan tema 'Katalisator Aksi: Gerakan Gagasan, Wujudkan Perubahan' yang diikuti oleh 112 peserta.",
      badge: "112 Peserta",
      image: "/certificates/sertifikat-ltp-2024.jpg",
      hasCertificate: true,
      certificateFile: "/certificates/sertifikat-ltp-2024.jpg"
    },
    {
      role: "Ketua Pelaksana (Event Chairman)",
      organization: "FASTTION - Fasilkom Gathering 2022",
      period: "2022",
      description: "Bertanggung jawab penuh atas perancangan, manajemen logistik, dan eksekusi acara malam keakraban mahasiswa baru bersama civitas akademika Fakultas Ilmu Komputer yang melibatkan 105+ peserta.",
      badge: "105+ Peserta",
      image: "/certificates/fasilkom-gathering-2022.jpg",
      hasCertificate: true,
      certificateFile: "/certificates/fasilkom-gathering-2022.jpg"
    },
    {
      role: "Wakil Ketua (Vice Chairman)",
      organization: "HMJ Teknik Informatika Universitas Esa Unggul",
      period: "2023 – 2024",
      description: "Mengoordinasikan divisi kerja, mendampingi perumusan program kerja tahunan, serta memperkuat sinergi antara mahasiswa, dosen, dan pihak eksternal kampus.",
      badge: "Leadership BEM/HMJ",
      image: null,
      hasCertificate: false,
    },
  ],
};
