const WA='6282249465151';
const services=[
['01','Electrical Installation','Instalasi, improvement dan commissioning sistem kelistrikan untuk rumah, komersial dan fasilitas industri.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai kebutuhan instalasi listrik di lokasi saya. Mohon dibantu untuk survey awal dan estimasi pekerjaan. Terima kasih.'],['02','Panel & Distribution','Panel LV, distribution board, rewiring, troubleshooting dan preventive maintenance.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai panel dan sistem distribusi listrik di lokasi saya. Mohon dibantu untuk pemeriksaan dan rekomendasi pekerjaan. Terima kasih.'],['03','Grounding System','Instalasi grounding dan pengukuran tahanan pembumian untuk kebutuhan proteksi.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai pemasangan sistem grounding di lokasi saya. Mohon dibantu untuk survey, pengukuran tahanan pembumian, spesifikasi pekerjaan, dan estimasi biayanya. Terima kasih.'],['04','Lightning Protection','Perencanaan dan pemasangan sistem proteksi petir serta pemeriksaan koneksi dan grounding.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai pemasangan atau pemeriksaan sistem penangkal petir di lokasi saya. Mohon dibantu untuk survey dan rekomendasi sistem yang sesuai. Terima kasih.'],['05','Thermal Inspection','Pemeriksaan termal panel dan koneksi untuk membantu menemukan indikasi hotspot sebelum menjadi gangguan.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai thermal inspection pada panel listrik di lokasi saya. Mohon informasi mengenai pemeriksaan, laporan hasil inspection, dan estimasi biayanya. Terima kasih.'],['06','EV Charger','Survey daya, instalasi EV charger, proteksi dan commissioning untuk rumah maupun bisnis.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai pemasangan EV Charger. Mohon dibantu untuk pengecekan kebutuhan daya, instalasi, proteksi, dan estimasi biayanya. Terima kasih.'],['07','Solar PV / PLTS','Estimasi kebutuhan, desain awal, instalasi dan commissioning sistem PLTS.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai kebutuhan pemasangan PLTS. Mohon dibantu menghitung kapasitas yang sesuai dengan konsumsi listrik saya dan memberikan estimasi awal sistemnya. Terima kasih.'],['08','Telecom & Fiber Optic','FO pulling, termination, testing dan pekerjaan infrastruktur telecom.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai pekerjaan telecom atau fiber optic di lokasi saya. Mohon dibantu untuk survey, scope pekerjaan, dan estimasi awal. Terima kasih.'],['09','PJU & Lighting','Instalasi, penggantian dan maintenance sistem pencahayaan serta PJU.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai instalasi atau penggantian PJU dan sistem lighting. Mohon dibantu untuk survey kebutuhan dan estimasi pekerjaan. Terima kasih.'],['10','Home Electrical Service','Pemeriksaan dan perbaikan masalah kelistrikan rumah dengan pendekatan yang aman dan komunikatif.','Halo JPN Home Service, saya sedang membutuhkan bantuan untuk masalah kelistrikan di rumah. Mohon dibantu untuk pengecekan dan informasi jadwal teknisi. Terima kasih.'],['11','Maintenance Contract','Program preventive maintenance berkala untuk menjaga keandalan sistem listrik.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai kontrak preventive maintenance sistem kelistrikan. Mohon dibantu untuk pilihan scope pemeriksaan, jadwal maintenance, dan estimasi biayanya. Terima kasih.'],['12','Engineering Consultation','Survey, estimasi awal, technical review dan konsultasi kebutuhan proyek.','Halo CV. Jaya Prima Nusantara, saya ingin berkonsultasi mengenai kebutuhan engineering project saya. Mohon dibantu untuk konsultasi awal, survey jika diperlukan, dan estimasi scope pekerjaan. Terima kasih.']
];
const grid=document.getElementById('service-grid');
if(grid) grid.innerHTML=services.map(s=>`<article class="service"><span class="num">${s[0]} / JPN SERVICE</span><h3>${s[1]}</h3><p>${s[2]}</p><a href="https://wa.me/${WA}?text=${encodeURIComponent(s[3])}" target="_blank" rel="noopener" aria-label="Konsultasi ${s[1]} melalui WhatsApp">Konsultasikan Sekarang ↗</a></article>`).join('');

/* Hero cleanup + useful trust navigation + day/night mode */
(function enhanceHomepage(){
  const style=document.createElement('style');
  style.textContent=`
    .hero-actions{display:flex;align-items:stretch;gap:16px;flex-wrap:wrap}
    .hero-actions .btn{min-height:72px;min-width:255px;flex:0 1 285px;padding:13px 18px;line-height:1.25;text-align:left;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:5px}
    .hero-actions .btn small{display:block;font-size:10px;font-weight:500;opacity:.72}
    .hero-actions .primary{background:#f5f8fa;color:#071521;border:1px solid rgba(255,255,255,.65)}
    .hero-actions .residential-btn{background:#153b50;color:#f5fbff;border:1px solid #3d91bd}
    .hero-actions .residential-btn:hover{background:#1c526c}
    .hero-actions .primary:hover{background:#dcecf5}
    .residential-quick{display:none!important}
    .trust{gap:0;padding:0;background:#fff}
    .trust a{flex:1 1 0;min-width:150px;padding:17px 14px;text-align:center;color:#647681;font-size:10px;letter-spacing:.08em;border-right:1px solid #e2e8ec;transition:.2s}
    .trust a:last-child{border-right:0}
    .trust a:hover{background:#eef6fa;color:#176e9e}
    .theme-toggle{width:40px;height:40px;border:1px solid rgba(255,255,255,.25);border-radius:8px;background:transparent;color:#fff;display:grid;place-items:center;cursor:pointer;font-size:17px;flex:0 0 auto}
    .theme-toggle:hover{background:rgba(255,255,255,.1)}
    body.light-mode{background:#f4f7f9;color:#10212d}
    body.light-mode .hero{background:linear-gradient(120deg,#eaf4f9,#d9edf6 62%,#c9e3ef);color:#071521}
    body.light-mode .hero h1 em{color:#315568}.light-mode .lead{color:#486372}.light-mode .slogan{color:#315568}
    body.light-mode .trust,.light-mode .service,.light-mode .tool,.light-mode .knowledge-grid article,.light-mode .review-card{background:#fff}
    body.light-mode .section-head>p,.light-mode .home p{color:#526a77}
    body.light-mode .hero-card{background:rgba(255,255,255,.82);color:#10212d}
    @media(max-width:600px){.hero-actions{gap:10px}.hero-actions .btn{min-width:0;flex:1 1 100%;min-height:64px;padding:11px 15px}.trust a{min-width:33.333%;font-size:8px;padding:12px 7px}.theme-toggle{width:34px;height:34px;font-size:15px}}
  `;
  document.head.appendChild(style);

  const header=document.querySelector('.site-header');
  if(header && !document.querySelector('.theme-toggle')){
    const button=document.createElement('button');
    button.className='theme-toggle';button.type='button';button.setAttribute('aria-label','Ubah mode siang/malam');
    const saved=localStorage.getItem('jpn-theme');
    if(saved==='light') document.body.classList.add('light-mode');
    button.textContent=document.body.classList.contains('light-mode')?'☀':'☾';
    button.addEventListener('click',()=>{document.body.classList.toggle('light-mode');const light=document.body.classList.contains('light-mode');localStorage.setItem('jpn-theme',light?'light':'dark');button.textContent=light?'☀':'☾'});
    const cta=header.querySelector('.nav-cta');
    if(cta) header.insertBefore(button,cta); else header.appendChild(button);
  }

  const trust=document.querySelector('.trust');
  if(trust){
    const links={
      'Bekasi & Jabodetabek':'#contact','Industrial':'#portfolio','Commercial':'#portfolio','Residential':'#contact','Renewable Energy':'#services','Telecom':'#services'
    };
    [...trust.children].forEach(item=>{const label=item.textContent.trim();const a=document.createElement('a');a.href=links[label]||'#services';a.textContent=label;a.setAttribute('aria-label',`Lihat layanan ${label}`);item.replaceWith(a)});
  }
})();

function num(id){return Number(document.getElementById(id)?.value)||0}
function fmt(v,d=1){return new Intl.NumberFormat('id-ID',{maximumFractionDigits:d}).format(v)}
function calcMCB(){const p=num('mcbPower'),v=num('mcbVolt'),pf=num('mcbPf'),sf=num('mcbSf')/100;if(!p||!v||!pf)return;const nominal=p/(v*pf),design=nominal*(1+sf);const sizes=[2,4,6,10,16,20,25,32,40,50,63];const mcb=sizes.find(x=>x>=design)||'di atas 63';const result=document.getElementById('mcbResult');if(result) result.innerHTML=`Arus nominal: ${fmt(nominal,2)} A<br>Arus desain setelah safety factor: ${fmt(design,2)} A<br><strong>Rekomendasi MCB awal: ${mcb} A</strong><br><small>Verifikasi akhir wajib dengan KHA kabel, karakteristik beban, breaking capacity dan koordinasi proteksi.</small>`}
function calcSolar(){const k=num('solarKwh'),psh=num('solarPsh'),der=num('solarDerate')/100;if(!k||!psh||!der)return;const kwp=k/(psh*30*der);const result=document.getElementById('solarResult');if(result) result.innerHTML=`Estimasi kebutuhan PLTS: <strong>${fmt(kwp,2)} kWp</strong><br><small>Estimasi awal dari konsumsi bulanan, peak sun hours dan derating sistem.</small>`}
function calc3ph(){const p=num('threePower'),v=num('threeVolt'),pf=num('threePf');if(!p||!v||!pf)return;const a=p/(Math.sqrt(3)*v*pf);const result=document.getElementById('threeResult');if(result) result.innerHTML=`Arus 3 phase: <strong>${fmt(a,2)} A</strong><br><small>Rumus: P / (√3 × V × PF). Untuk desain final pertimbangkan ketidakseimbangan beban dan faktor instalasi.</small>`}
calcMCB();calcSolar();calc3ph();
