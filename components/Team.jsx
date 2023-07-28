import Image from 'next/image'


const Team = () => {
    const Members = [
        
        {
            name: 'Prof. Kalpana',
            imgSrc:"/../public/assets/team/kalpana.jpg",
            position: 'Faculty Advisor, GDSC CRCE',
            linkedIn:'',
            Instagram: '',
        },
        {
            name: 'Vijay Prajapati',
            imgSrc:"/../public/assets/team/vijay.jpg",
            position: 'GDSC Lead',
            linkedIn:'https://www.linkedin.com/in/vijayyy/',
            Instagram: 'https://www.instagram.com/v.i.j.a.y.y',
        },
        {
            name: 'Deon Gracias',
            imgSrc:"/../public/assets/team/deon.jpeg",
            position: 'GDSC Co-Lead',
            linkedIn:'https://www.linkedin.com/in/deongracias/',
            Instagram: 'https://www.instagram.com/deon_gracias',
        },
        {
            name: 'Jainam Joshi',
            imgSrc:"/../public/assets/team/jainam.jpg",
            position: 'Head Of Operations',
            linkedIn:'https://www.linkedin.com/in/jainam-joshi-15b093174',
            Instagram: 'https://www.instagram.com/_jai_nam',
        },
        {
            name: 'Ishaan Loomba',
            imgSrc:"/../public/assets/team/ishaan.jpeg",
            position: 'Blockchain Lead',
            linkedIn:'https://www.linkedin.com/in/ishaan-loomba-14577321a/',
            Instagram: 'https://www.instagram.com/ishaanloomba ',
        },
        {
            name: 'Candida Noronha',
            imgSrc:"/../public/assets/team/Candida.png",
            position: 'Web Development Lead',
            linkedIn:'https://www.linkedin.com/in/candida-noronha-b019101ab',
            Instagram: 'https://www.instagram.com/candyyyy__18',
        },
        {
            name: 'Aditya Vyas',
            imgSrc:"/../public/assets/team/aditya vyas.jpg",
            position: 'Mobile App Development Lead',
            linkedIn:'https://www.linkedin.com/in/aditya-vyas-b647131bb',
            Instagram: '',
        },
        {
            name: 'Krisha Vora',
            imgSrc:"/../public/assets/team/krisha.jpg",
            position: 'Mobile App Development Co-Lead',
            linkedIn:'https://www.linkedin.com/in/krisha-vora-72905b219',
            Instagram: 'https://www.instagram.com/_krisha_03',
        },
        {
            name: 'Andre Nazareth',
            imgSrc:"/../public/assets/team/andre.jpg",
            position: 'AI/ML Lead',
            linkedIn:'http://www.linkedin.com/in/andre-nazareth-3b248b196',
            Instagram: 'https://www.instagram.com/andre__isaac',
        },
        {
            name: 'Ryan Valiaparambil',
            imgSrc:"/../public/assets/team/Ryan AIML Co-Lead.jpeg",
            position: 'AI/ML Co-Lead',
            linkedIn:'https://www.linkedin.com/in/ryan-v-20690b1b9/',
            Instagram: 'https://www.instagram.com/v.ryan_19',
        },
        {
            name: 'Aditya Mahamuni',
            imgSrc:"/../public/assets/team/aditya mahamuni.jpg",
            position: 'Cloud Computing Lead',
            linkedIn:'https://www.linkedin.com/in/aditya-mahamuni',
            Instagram: 'https://www.instagram.com/_adityax25_',
        },
        {
            name: 'Omkar Satupe',
            imgSrc:"/../public/assets/team/omkar.JPG",
            position: 'Cloud Computing Co-Lead',
            linkedIn:'',
            Instagram: 'https://www.instagram.com/__.omkxr.___',
        },
        {
            name: 'Upmanyu Jha',
            imgSrc:"/../public/assets/team/uj.jpg",
            position: 'Cyber Security Lead',
            linkedIn:'https://www.linkedin.com/in/upmanyu-jha/',
            Instagram: 'https://www.instagram.com/upmanyujha',
        },
        {
            name: 'Glen Rodrigues',
            imgSrc:"/../public/assets/team/glen.jpg",
            position: 'Cyber Security Co-Lead',
            linkedIn:'https://www.linkedin.com/in/glen-rodrigues16/',
            Instagram: 'https://www.instagram.com/glen.r16',
        },
        {
            name: 'Mahek Intwala',
            imgSrc:"/../public/assets/team/Mahek.jpg",
            position: 'Graphic Design Lead',
            linkedIn:'https://www.linkedin.com/in/mahek-intwala-99aaa6235',
            Instagram: 'https://www.instagram.com/_mahekkk_28',
        },
        {
            name: 'Aakarsh Sharma',
            imgSrc:"/../public/assets/team/aakarsh.png",
            position: 'Graphic Design Co-Lead',
            linkedIn:'https://www.linkedin.com/in/aakarsh-sharma-ba3418175/',
            Instagram: 'https://www.instagram.com/_.aakxrsh._',
        },
        {
            name: 'Atharva Pawar',
            imgSrc:"/../public/assets/team/Atharva.png",
            position: 'IOT Lead',
            linkedIn:'https://www.linkedin.com/in/atharva-pawar-536318232/',
            Instagram: 'https://www.instagram.com/atharvaprashantp',
        },
        {
            name: 'Rissa Chettiar',
            imgSrc:"/../public/assets/team/rissa.jpeg",
            position: 'Management Lead',
            linkedIn:'https://www.linkedin.com/in/rissa-chettiar-a999621a3',
            Instagram: 'https://www.instagram.com/rissaaachettiar',
        },
        {
            name: 'Rahul Bothra',
            imgSrc:"/../public/assets/team/rahul.jpg",
            position: 'Management Co-Lead',
            linkedIn:'https://www.linkedin.com/in/rahul-bothra-5506221b4',
            Instagram: 'https://www.instagram.com/rahul_bothra_',
        },
        {
            name: 'Asher Lopes',
            imgSrc:"/../public/assets/team/asher.jpg",
            position: 'Public Relations Lead',
            linkedIn:'http://linkedin.com/in/asher-lopes-a1b10a22b',
            Instagram: 'https://www.instagram.com/asherlopezz',
        },
        {
            name: 'Bhavika Salvi',
            imgSrc:"/../public/assets/team/bhavika.jpeg",
            position: 'Public Relations Co-Lead',
            linkedIn:'https://www.linkedin.com/in/bhavika-salvi/',
            Instagram: 'https://www.instagram.com/loveschessbutcantplay',
        },
        {
            name: 'Meet Satra',
            imgSrc:"/../public/assets/team/meet.jpg",
            position: 'Marketing Lead',
            linkedIn:'https://www.linkedin.com/in/meetsatra/',
            Instagram: 'https://www.instagram.com/meetsatraa',
        },
        {
            name: 'Arpita Kar',
            imgSrc:"/../public/assets/team/arpita.jpg",
            position: 'Representative',
            linkedIn:'https://www.linkedin.com/mwlite/in/arpita-kar-917635198',
            Instagram: 'https://www.instagram.com/arpita_kar7',
        },
        {
            name: 'Anosh V',
            imgSrc:"/../public/assets/team/anosh.jpg",
            position: 'TE Representative - Lead',
            linkedIn:'https://www.linkedin.com/in/anosh-kurian-3b7434249/',
            Instagram: 'https://www.instagram.com/__.anosh',
        },
        {
            name: 'Hisbaan Sayed',
            imgSrc:"/../public/assets/team/hisbaan.jpg",
            position: 'TE Representative',
            linkedIn:'https://www.linkedin.com/in/hisbaan-sayed-420474249/',
            Instagram: 'https://www.instagram.com/hisbaan_14',
        },
        {
            name: 'Akshat Sarraf',
            imgSrc:"/../public/assets/team/Akshat.jpg",
            position: 'Web Development Associate',
            linkedIn:'https://www.linkedin.com/in/akshat-sarraf-3b8929230',
            Instagram: 'https://www.instagram.com/akshat_sarraf',
        },
        {
            name: 'Zane Falcao',
            imgSrc:"/../public/assets/team/Zane.jpeg",
            position: 'Web Development Associate',
            linkedIn:'https://www.linkedin.com/in/zane-falcao-014a41247/',
            Instagram: 'https://www.instagram.com/falcaozane/',
        },
        {
            name: 'Rahul Gandla',
            imgSrc:"/../public/assets/team/Rahul_Gandla.jpg",
            position: 'Web Development Associate',
            linkedIn:'https://www.linkedin.com/in/rahulgandla',
            Instagram: 'https://www.instagram.com/rahul_g.5125',
        },
        {
            name: 'Sanat Patil',
            imgSrc:"/../public/assets/team/Sanat.jpg",
            position: 'Graphic Design Associate',
            linkedIn:'https://www.linkedin.com/in/sanat-patil-123bb122a/',
            Instagram: 'https://www.instagram.com/_kingsanz007_',
        },
        {
            name: 'Shreya Sahay',
            imgSrc:"/../public/assets/team/Shreya.jpeg",
            position: 'Graphic Design Associate',
            linkedIn:'https://www.linkedin.com/in/shreya-s-sahay-706490238/',
            Instagram: 'https://www.linkedin.com/in/shreya-s-sahay-706490238/',
        },
        {
            name: 'Shubh Shetty',
            imgSrc:"/../public/assets/team/Shubh.jpg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/shubh-shetty',
            Instagram: 'https://www.instagram.com/shubhs2006',
        },
        {
            name: 'Arnav Pandita',
            imgSrc:"/../public/assets/team/Arnav.jpg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/arnav-pandita-01355924a/',
            Instagram: 'https://instagram.com/arnavp_21?igshid=OGQ5ZDc2ODk2ZA==',
        },
        {
            name: 'Shruti Patil',
            imgSrc:"/../public/assets/team/Shruti.jpg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/shruti-patil-2055b6231/',
            Instagram: 'https://www.instagram.com/shrutipatil__20',
        },
        {
            name: 'Rudalph Gonsalves',
            imgSrc:"/../public/assets/team/rudalph.jpeg",
            position: 'GDSC Associate',
            linkedIn:'',
            Instagram: 'https://www.instagram.com/rudalphgonsalves',
        },
        {
            name: 'Sanket Mane',
            imgSrc:"/../public/assets/team/Sanket.jpeg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/sanketmane2323',
            Instagram: 'https://www.instagram.com/_sanket.mane23',
        },
        {
            name: 'Punit Giri',
            imgSrc:"/../public/assets/team/Punit.JPG",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/punit-giri/',
            Instagram: 'https://www.instagram.com/pun.it.irl_',
        },
        {
            name: 'Prof. Kalpana',
            imgSrc:"/../public/assets/team/kalpana.jpg",
            position: 'Faculty Advisor, GDSC CRCE',
            linkedIn:'',
            Instagram: '',
        },
        {
            name: 'Arnav Pandita',
            imgSrc:"/../public/assets/team/Arnav.jpg",
            position: 'GDSC Lead',
            linkedIn:'http://linkedin.com/in/arnav-pandita-01355924a',
            Instagram: 'https://instagram.com/arnavp_21?igshid=OGQ5ZDc2ODk2ZA==',
        },
        {
            name: 'Shreya Sahay',
            imgSrc:"/../public/assets/team/shreya.jpg",
            position: 'Joint Lead',
            linkedIn:'https://www.linkedin.com/in/shreya-s-sahay-706490238',
            Instagram: 'https://www.instagram.com/sahay989/',
        },
        {
            name: 'Sanket Mane',
            imgSrc:"/../public/assets/team/Sanket.jpeg",
            position: 'Head of Operations',
            linkedIn:'',
            Instagram: '',
        },
        {
            name: 'Shubh Shetty',
            imgSrc:"/../public/assets/team/Shubh.jpg",
            position: 'Management Lead',
            linkedIn:'https://www.linkedin.com/in/shubh-shetty',
            Instagram: 'https://instagram.com/shubhs2006?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
        },
        {
            name: 'Sahil Khan',
            imgSrc:"/../public/assets/team/.jpg",
            position: 'Management Co-Lead',
            linkedIn:'https://www.linkedin.com/in/sahilthk7/',
            Instagram: 'https://www.instagram.com/isaahiil/',
        },
        {
            name: 'Bryce Miranda',
            imgSrc:"/../public/assets/team/Bryce.jpeg",
            position: 'Technical & PR Lead',
            linkedIn:'https://www.linkedin.com/in/bryce-miranda-b7a94a216/',
            Instagram: 'https://instagram.com/thestoryofbryce?igshid=MmIzYWVlNDQ5Yg==',
        },
        {
            name: 'Punit Giri',
            imgSrc:"/../public/assets/team/Punit.JPG",
            position: 'Technical & Marketing Lead',
            linkedIn:'https://www.linkedin.com/in/punit-giri/',
            Instagram: 'https://www.instagram.com/punitirl/',
        },
        {
            name: 'Shruti Patil',
            imgSrc:"/../public/assets/team/Shruti.jpg",
            position: 'Technical & Marketing Co-Lead',
            linkedIn:'https://www.linkedin.com/in/shruti-patil-2055b6231',
            Instagram: 'https://instagram.com/shrutipatil__20?igshid=MzNlNGNkZWQ4Mg==',
        },
        {
            name: 'Sanat Patil',
            imgSrc:"/../public/assets/team/Sanat.jpg",
            position: 'Graphic Design Lead',
            linkedIn:'https://www.linkedin.com/in/sanat-patil-123bb122a/',
            Instagram: 'https://www.instagram.com/_sannnz07_/',
        },
        {
            name: 'Dhruv Mayekar',
            imgSrc:"/../public/assets/team/",
            position: 'Graphic Design Co-Lead',
            linkedIn:'https://www.linkedin.com/in/dhruv-mayekar-3a1b35208',
            Instagram: 'https://instagram.com/dhruvv_mayekar?igshid=OGQ5ZDc2ODk2ZA==',
        },
        {
            name: 'Chhand Chaughule',
            imgSrc:"/../public/assets/team/chhand.jpg",
            position: 'Web Development Lead',
            linkedIn:'https://www.linkedin.com/in/chhand2808/',
            Instagram: 'https://www.instagram.com/chhand__2808/',
        },
        {
            name: 'Zane Falcao',
            imgSrc:"/../public/assets/team/Zane.jpeg",
            position: 'Blockchain Lead',
            linkedIn:'https://www.linkedin.com/in/zane-falcao-014a41247/',
            Instagram: 'https://www.instagram.com/falcaozane/',
        },
        {
            name: 'Aston Castelino',
            imgSrc:"/../public/assets/team/Aston.jpg",
            position: 'AI/ML Lead',
            linkedIn:'https://www.linkedin.com/in/aston-castelino/',
            Instagram: 'https://instagram.com/aston_c_?igshid=MzNlNGNkZWQ4Mg==',
        },
        {
            name: 'Akshat Saraf',
            imgSrc:"/../public/assets/team/Akshat.jpg",
            position: 'AI/ML Co-Lead',
            linkedIn:'https://www.linkedin.com/in/akshat-sarraf-3b8929230',
            Instagram: 'https://instagram.com/akshat_sarraf?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        },
        {
            name: 'Soham Parab',
            imgSrc:"/../public/assets/team/Soham.jpg",
            position: 'Mobile Application Lead',
            linkedIn:'https://www.linkedin.com/in/soham-parab-a51a791b7/',
            Instagram: 'https://instagram.com/soo.oham?igshid=ZDc4ODBmNjlmNQ==',
        },
        {
            name: 'Rudalph Gonsalves',
            imgSrc:"/../public/assets/team/rudalph.jpeg",
            position: 'Algozenith Lead',
            linkedIn:'https://www.linkedin.com/in/rudalph-gonsalves-219463257/',
            Instagram: 'https://www.instagram.com/rudalphgonsalves/',
        },
        {
            name: 'Vijay Prajapati',
            imgSrc:"/../public/assets/team/vijay.jpg",
            position: 'Technical Advisor',
            linkedIn:'https://www.linkedin.com/in/vijayyy/',
            Instagram: 'https://www.instagram.com/v.i.j.a.y.y',
        },
        {
            name: 'Rahul Bothra',
            imgSrc:"/../public/assets/team/rahul.jpg",
            position: 'Operational Advisor',
            linkedIn:'https://www.linkedin.com/in/rahul-bothra-5506221b4',
            Instagram: 'https://www.instagram.com/rahul_bothra_',
        },
        {
            name: 'Deon Gracias',
            imgSrc:"/../public/assets/team/deon.jpeg",
            position: 'Postman Student Lead',
            linkedIn:'https://www.linkedin.com/in/deongracias/',
            Instagram: 'https://www.instagram.com/deon_gracias',
        },
        {
            name: "Angela D'Souza",
            imgSrc:"/../public/assets/team/Angela Dsouza.jpg",
            position: 'Head of Documentation',
            linkedIn:'https://www.linkedin.com/in/angela-dsouza-751a22249',
            Instagram: 'https://instagram.com/angela._.ds?igshid=MzNlNGNkZWQ4Mg==',
        },
        {
            name: 'Zane Fernandes',
            imgSrc:"/../public/assets/team/Zane2.jpg",
            position: 'Web Dev Associate',
            linkedIn:'http://www.linkedin.com/in/zane-fernandes-b46b75264',
            Instagram: 'https://www.instagram.com/zane_fernandes/',
        },
        {
            name: 'Shaun Mendes',
            imgSrc:"/../public/assets/team/Shaun.jpeg",
            position: 'Web Dev Associate',
            linkedIn:'https://www.linkedin.com/in/shaun-mendes-2107521b0/',
            Instagram: 'https://www.instagram.com/shaun_mendes_01/',
        },
        {
            name: "Alvin D'Souza",
            imgSrc:"/../public/assets/team/Alvin.jpg",
            position: 'Web Dev Associate',
            linkedIn:'https://www.linkedin.com/in/alvin-dsouza-a23268263',
            Instagram: 'https://www.instagram.com/the.alvin.dsouza/',
        },
        {
            name: 'Leora Dias',
            imgSrc:"/../public/assets/team/Leora_Dias.jpg",
            position: 'Graphic Design Associate',
            linkedIn:'https://www.linkedin.com/in/leora-dias-0332b7258',
            Instagram: 'https://instagram.com/trynafindleora/',
        },
        {
            name: 'Aditi Singh',
            imgSrc:"/../public/assets/team/aditi_singh.jpg",
            position: 'Graphic Design Associate',
            linkedIn:'https://www.linkedin.com/in/aditi-singh-031174263',
            Instagram: 'https://instagram.com/aditiiiee_?igshid=ZDc4ODBmNjlmNQ==',
        },
        {
            name: 'Siddhant Jadhav',
            imgSrc:"/../public/assets/team/Siddhant.png",
            position: 'Graphic Design Associate',
            linkedIn:'https://www.linkedin.com/in/siddhant-jadhav-21bb43282',
            Instagram: 'https://instagram.com/whyy.siddd?igshid=OGQ5ZDc2ODk2ZA==',
        },
        {
            name: 'Susan Fernandes',
            imgSrc:"/../public/assets/team/.jpeg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/susan-fernandes-3b6635256',
            Instagram: 'https://instagram.com/_susan_fernandes_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        },
        {
            name: "Samuel D'Souza",
            imgSrc:"/../public/assets/team/.jpg",
            position: 'GDSC Associate',
            linkedIn:'',
            Instagram: '',
        },
        {
            name: 'Sakshi Kupekar',
            imgSrc:"/../public/assets/team/Sakshi_Kupekar.jpg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/sakshi-kupekar-a23751285',
            Instagram: 'https://instagram.com/_saakshiii_k?igshid=MzNlNGNkZWQ4Mg==',
        },
        {
            name: 'Jefin John',
            imgSrc:"/../public/assets/team/Jefin John.jpg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/jefin-john-85996a1a6',
            Instagram: 'https://www.instagram.com/jefin3273/',
        },
        {
            name: 'Elita Gonsalves',
            imgSrc:"/../public/assets/team/Elita Gonsalves.jpg",
            position: 'GDSC Associate',
            linkedIn:'http://www.linkedin.com/in/elita-gonsalves-454679252',
            Instagram: 'https://www.instagram.com/elita_2215/',
        },
        {
            name: 'Joshua Gonsalves',
            imgSrc:"/../public/assets/team/joshua.jpg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/joshua-gonsalves-77b532267/',
            Instagram: 'https://instagram.com/joshwahhh__?igshid=MjEwN2IyYWYwYw==',
        },
        {
            name: 'Saumitra Gurav',
            imgSrc:"/../public/assets/team/SaumitraGurav.jpg",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/saumitra-gurav-06a03626a/',
            Instagram: 'https://www.instagram.com/sau_meeeee/',
        },
        {
            name: 'Iqra Khan',
            imgSrc:"/../public/assets/team/",
            position: 'GDSC Associate',
            linkedIn:'https://www.linkedin.com/in/iqrakhan04/',
            Instagram: '',
        },
        
        
    ]
  return (
    <>  
        <div className="container my-24 mx-auto md:px-6 bg-blue-100 max-w-full pt-10">
  
            <section className="mb-32 text-center">
                <h2 className="mb-32 text-3xl font-bold mt-10 pt-10">
                    Meet the <u className="text-primary text-blue-800 ">team</u>
                </h2>

                <div className="grid gap-x-6 md:grid-cols-4 lg:gap-x-12 ">
                    {Members.map((Member, index) =>(
                            <div key={index} className="mb-24 md:mb-0 py-24">
                            <div
                                
                                className="block h-full rounded-lg bg-blue-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:bg-blue-700">
                                <div className="flex justify-center">
                                    <div className="flex justify-center -mt-[75px]">
                                        <Image 
                                            src={Member.imgSrc} 
                                            className="mx-auto rounded-full shadow-lg w-[140px] h-[140px] hover:border-amber-100 hover:border-4 " 
                                            alt="Avatar" 
                                            width={100}
                                            height={100}
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-4 text-xl font-extrabold text-white">{Member.name}</h5>
                                    <p className="mb-6 font-semibold text-slate-300">{Member.position}</p>
                                    { (Member.linkedIn && Member.Instagram) ?(
                                        <ul className="mx-auto flex list-inside justify-center">
                                        {/*
                                            <a href="#!" className="px-2 text-slate-400 hover:text-white ">
                                            { ## GitHub ##}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                className="h-4 w-4 text-primary ">
                                            <path fill="currentColor"
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            </a>
                                        */}
                                        <a href={Member.Instagram} className="px-2 text-slate-400 hover:text-white ">
                                            {/* Instagram */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="h-4 w-4 text-primary ">
                                            <path fill="currentColor"
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                        <a href={Member.linkedIn} className="px-2 text-slate-400 hover:text-white ">
                                            {/*Linkedin -->*/}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            className="h-4 w-4 text-primary ">
                                            <path fill="currentColor"
                                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                            </svg>
                                        </a>
                                        </ul>
                                    ): null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
  
        </div>
    </>
  )
}

export default Team
