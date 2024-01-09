const doc = document
const apikey = '36acd555cbebd983225df72592a09352'
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&q=`

const search = doc.getElementById("search");
const weathericon = document.querySelector('#weather')
search.onsubmit = e => {
  e.preventDefault()
    let place = doc.getElementById('city').value;
    getWeather(place);
}

async function getWeather(place) {
  
    try {
        const response = await fetch(url + place);
        if (response.status == 404 || response.status == 400) {
            doc.querySelector('#place').innerText = "No City";
            doc.querySelector('#temperature').innerText = '-- °C';
            doc.querySelector('#humidity').innerText = '-- %';
            doc.querySelector('#wind').innerText = '-- km/hr';
            // doc.querySelector('#lat').innerText = '--° ' + '--°';
            doc.querySelector("#desc").innerText = '--';
            doc.getElementById("sunrise").innerText = '--';
            doc.getElementById("sunset").innerText = '--';
            // console.clear();
        }
        else {
            var data = await response.json();
            doc.querySelector('#place').innerText = data.name;
            doc.querySelector('#temperature').innerText = Math.round(data.main.temp) + '°C';
            doc.querySelector('#humidity').innerText = data.main.humidity + '%';
            doc.querySelector('#wind').innerText = data.wind.speed + ' km/hr';
            // doc.querySelector('#lat').innerText = data.coord.lat + '° / ' + data.coord.lon + '°';
            doc.querySelector("#desc").innerText = data.weather[0].description;
            let unix_timestamp = data.sys.sunrise;
            let date = new Date(unix_timestamp * 1000);
            let formattedTime = date.toLocaleTimeString(navigator.language,{hour: '2-digit',minute:'2-digit'});
            unix_timestamp = data.sys.sunset;
            date = new Date(unix_timestamp * 1000);
            let formattedTime2 = date.toLocaleTimeString(navigator.language,{hour: '2-digit',minute:'2-digit'});
            doc.getElementById("sunrise").innerText = formattedTime;
            doc.getElementById("sunset").innerText = formattedTime2;


            if (data.weather[0].main == "Clouds") {
                weathericon.src = 'images/clouds.png';
            }
            else if (data.weather[0].main == "Rain") {
                weathericon.src = 'images/rain.png';
            }
            else if (data.weather[0].main == "Clear") {
                weathericon.src = 'images/clear.png';
            }
            else if (data.weather[0].main == "Drizzle") {
                weathericon.src = 'images/drizzle.png';
            }
            else if (data.weather[0].main == "Mist") {
                weathericon.src = 'images/mist.png';
            }
            else if (data.weather[0].main == "Snow") {
                weathericon.src = 'images/snow.png';
            }
        }
    }
    catch (error) {

}
}

getWeather('ludhiana');
const cities = ["Achalpur", "Achhnera", "Adalaj", "Adilabad", "Adityapur", "Adoni", "Adoor", "Adra", "Adyar", "Afzalpur", "Agartala", "Agra", "Ahmedabad", "Ahmednagar", "Aizawl", "Ajmer", "Akola", "Akot", "Alappuzha", "Aligarh", "AlipurdUrbanAgglomerationr", "Alirajpur", "Allahabad", "Alwar", "Amalapuram", "Amalner", "Ambejogai", "Ambikapur", "Amravati", "Amreli", "Amritsar", "Amroha", "Anakapalle", "Anand", "Anantapur", "Anantnag", "Anjangaon", "Anjar", "Ankleshwar", "Arakkonam", "Arambagh", "Araria", "Arrah", "Arsikere", "Aruppukkottai", "Arvi", "Arwal", "Asansol", "Asarganj", "AshokNagar", "Athni", "Attingal", "Aurangabad", "Aurangabad", "Azamgarh", "Bagaha", "Bageshwar", "Bahadurgarh", "Baharampur", "Bahraich", "Balaghat", "Balangir", "BaleshwarTown", "Ballari", "Balurghat", "Bankura", "Bapatla", "Baramula", "Barbil", "Bargarh", "Barh", "BaripadaTown", "Barmer", "Barnala", "Barpeta", "Batala", "Bathinda", "Begusarai", "Belagavi", "Bellampalle", "Belonia", "Bengaluru", "Bettiah", "BhabUrbanAgglomeration", "Bhadrachalam", "Bhadrak", "Bhagalpur", "Bhainsa", "Bharatpur", "Bharuch", "Bhatapara", "Bhavnagar", "Bhawanipatna", "Bheemunipatnam", "BhilaiNagar", "Bhilwara", "Bhimavaram", "Bhiwandi", "Bhiwani", "Bhongir", "Bhopal", "Bhubaneswar", "Bhuj", "Bikaner", "Bilaspur", "Bobbili", "Bodhan", "BokaroSteelCity", "BongaigaonCity", "Brahmapur", "Buxar", "Byasanagar", "Chaibasa", "Chalakudy", "Chandausi", "Chandigarh", "Changanassery", "CharkhiDadri", "Chatra", "Chennai", "Cherthala", "Chhapra", "Chhapra", "Chikkamagaluru", "Chilakaluripet", "Chirala", "Chirkunda", "Chirmiri", "Chittoor", "Chittur-Thathamangalam", "Coimbatore", "Cuttack", "Dalli-Rajhara", "Darbhanga", "Darjiling", "Davanagere", "Deesa", "Dehradun", "Dehri-on-Sone", "Delhi", "Deoghar", "Dhamtari", "Dhanbad", "Dharmanagar", "Dharmavaram", "Dhenkanal", "Dhoraji", "Dhubri", "Dhule", "Dhuri", "Dibrugarh", "Dimapur", "Diphu", "Dumka", "Dumraon", "Durg", "Eluru", "EnglishBazar", "Erode", "Etawah", "Faridabad", "Faridkot", "Farooqnagar", "Fatehabad", "FatehpurSikri", "Fazilka", "Firozabad", "Firozpur", "Forbesganj", "Gadwal", "Gandhinagar", "Gangarampur", "Ganjbasoda", "Gaya", "Giridih", "Goalpara", "Gobichettipalayam", "Gobindgarh", "Godhra", "Gohana", "Gokak", "Gooty", "Gopalganj", "Gudivada", "Gudur", "Gumia", "Guntakal", "Guntur", "Gurdaspur", "Gurgaon", "Guruvayoor", "Guwahati", "Gwalior", "Habra", "Hajipur", "Haldwani-cum-Kathgodam", "Hansi", "Hapur", "Hardoi", "Hardwar", "Hazaribag", "Hindupur", "Hisar", "Hoshiarpur", "Hubli-Dharwad", "Hugli-Chinsurah", "Hyderabad", "Ichalkaranji", "Imphal", "Indore", "Itarsi", "Jabalpur", "Jagdalpur", "Jaggaiahpet", "Jagraon", "Jagtial", "Jaipur", "Jalandhar", "Jalpaiguri", "Jamalpur", "Jammalamadugu", "Jammu", "Jamnagar", "Jamshedpur", "Jamui", "Jangaon", "Jatani", "Jehanabad", "Jhansi", "Jhargram", "Jharsuguda", "JhumriTilaiya", "Jind", "Jodhpur", "Jorhat", "Kadapa", "Kadi", "Kadiri", "Kagaznagar", "Kailasahar", "Kaithal", "Kakinada", "Kalimpong", "Kalpi", "Kalyan-Dombivali", "Kamareddy", "Kancheepuram", "Kandukur", "Kanhangad", "Kannur", "Kanpur", "Kapadvanj", "Kapurthala", "Karaikal", "Karimganj", "Karimnagar", "Karjat", "Karnal", "Karur", "Karwar", "Kasaragod", "Kashipur", "KathUrbanAgglomeration", "Katihar", "Kavali", "Kayamkulam", "Kendrapara", "Kendujhar", "Keshod", "Khair", "Khambhat", "Khammam", "Khanna", "Kharagpur", "Kharar", "Khowai", "Kishanganj", "Kochi", "Kodungallur", "Kohima", "Kolar", "Kolkata", "Kollam", "Koratla", "Korba", "KotKapura", "Kota", "Kothagudem", "Kottayam", "Kovvur", "Koyilandy", "Kozhikode", "Kunnamkulam", "Kurnool", "Kyathampalle", "Lachhmangarh", "Ladnu", "Ladwa", "Lahar", "Laharpur", "Lakheri", "Lakhimpur", "Lakhisarai", "Lakshmeshwar", "LalGopalganjNindaura", "Lalganj", "Lalganj", "Lalgudi", "Lalitpur", "Lalsot", "Lanka", "Lar", "Lathi", "Latur", "Lilong", "Limbdi", "Lingsugur", "Loha", "Lohardaga", "Lonar", "Lonavla", "Longowal", "Loni", "Losal", "Lucknow", "Ludhiana", "Lumding", "Lunawada", "Lunglei", "Macherla", "Machilipatnam", "Madanapalle", "Maddur", "Madhepura", "Madhubani", "Madhugiri", "Madhupur", "Madikeri", "Madurai", "Magadi", "Mahad", "Mahalingapura", "Maharajganj", "Maharajpur", "Mahasamund", "Mahbubnagar", "Mahe", "Mahemdabad", "Mahendragarh", "Mahesana", "Mahidpur", "MahnarBazar", "Mahuva", "Maihar", "Mainaguri", "Makhdumpur", "Makrana", "MalajKhand", "Malappuram", "Malavalli", "Malda", "Malegaon", "Malerkotla", "Malkangiri", "Malkapur", "Malout", "Malpura", "Malur", "Manachanallur", "Manasa", "Manavadar", "Manawar", "Mancherial", "Mandalgarh", "Mandamarri", "Mandapeta", "Mandawa", "MandiDabwali", "Mandi", "Mandideep", "Mandla", "Mandsaur", "Mandvi", "Mandya", "Manendragarh", "Maner", "Mangaldoi", "Mangaluru", "Mangalvedhe", "Manglaur", "Mangrol", "Mangrol", "Mangrulpir", "Manihari", "Manjlegaon", "Mankachar", "Manmad", "Mansa", "Mansa", "Manuguru", "Manvi", "Manwath", "Mapusa", "Margao", "Margherita", "Marhaura", "Mariani", "Marigaon", "Markapur", "Marmagao", "Masaurhi", "Mathabhanga", "Mathura", "Mattannur", "Mauganj", "Mavelikkara", "Mavoor", "MayangImphal", "Medak", "Medininagar(Daltonganj)", "Medinipur", "Meerut", "Mehkar", "Memari", "MertaCity", "Mhaswad", "MhowCantonment", "Mhowgaon", "Mihijam", "Mira-Bhayandar", "Mirganj", "Miryalaguda", "Modasa", "Modinagar", "Moga", "Mohali", "Mokameh", "Mokokchung", "Monoharpur", "Moradabad", "Morena", "Morinda,India", "Morshi", "Morvi", "Motihari", "Motipur", "MountAbu", "Mudabidri", "Mudalagi", "Muddebihal", "Mudhol", "Mukerian", "Mukhed", "Muktsar", "Mul", "Mulbagal", "Multai", "Mumbai", "Mundargi", "Mundi", "Mungeli", "Munger", "Murliganj", "Murshidabad", "Murtijapur", "Murwara(Katni)", "Musabani", "Mussoorie", "Muvattupuzha", "Muzaffarpur", "Mysore", "Nabadwip", "Nabarangapur", "Nabha", "Nadbai", "Nadiad", "Nagaon", "Nagapattinam", "Nagar", "Nagari", "Nagarkurnool", "Nagaur", "Nagda", "Nagercoil", "Nagina", "Nagla", "Nagpur", "Nahan", "Naharlagun", "Naidupet", "Naihati", "NailaJanjgir", "Nainital", "Nainpur", "Najibabad", "Nakodar", "Nakur", "Nalbari", "Namagiripettai", "Namakkal", "Nanded-Waghala", "Nandgaon", "Nandivaram-Guduvancheri", "Nandura", "Nandurbar", "Nandyal", "Nangal", "Nanjangud", "Nanjikottai", "Nanpara", "Narasapuram", "Narasaraopet", "Naraura", "Narayanpet", "Nargund", "Narkatiaganj", "Narkhed", "Narnaul", "Narsinghgarh", "Narsinghgarh", "Narsipatnam", "Narwana", "Nashik", "Nasirabad", "Natham", "Nathdwara", "Naugachhia", "NaugawanSadat", "Nautanwa", "Navalgund", "Navsari", "Nawabganj", "Nawada", "Nawanshahr", "Nawapur", "Nedumangad", "Neem-Ka-Thana", "Neemuch", "Nehtaur", "Nelamangala", "Nellikuppam", "Nellore", "Nepanagar", "NewDelhi", "Neyveli(TS)", "Neyyattinkara", "Nidadavole", "Nilambur", "Nilanga", "Nimbahera", "Nirmal", "Niwai", "Niwari", "Nizamabad", "Nohar", "Noida", "Nokha", "Nokha", "Nongstoin", "Noorpur", "NorthLakhimpur", "Nowgong", "Nowrozabad(Khodargama)", "Nuzvid", "O'Valley", "Obra", "Oddanchatram", "Ongole", "Orai", "Osmanabad", "Ottappalam", "Ozar", "P.N.Patti", "Pachora", "Pachore", "Pacode", "Padmanabhapuram", "Padra", "Padrauna", "Paithan", "Pakaur", "Palacole", "Palai", "Palakkad", "Palampur", "Palani", "Palanpur", "PalasaKasibugga", "Palghar", "Pali", "Pali", "PaliaKalan", "Palitana", "Palladam", "Pallapatti", "Pallikonda", "Palwal", "Palwancha", "Panagar", "Panagudi", "Panaji", "Panamattom", "Panchkula", "Panchla", "Pandharkaoda", "Pandharpur", "Pandhurna", "PandUrbanAgglomeration", "Panipat", "Panna", "Panniyannur", "Panruti", "Panvel", "Pappinisseri", "Paradip", "Paramakudi", "Parangipettai", "Parasi", "Paravoor", "Parbhani", "Pardi", "Parlakhemundi", "Parli", "Partur", "Parvathipuram", "Pasan", "PaschimPunropara", "Pasighat", "Patan", "Pathanamthitta", "Pathankot", "Pathardi", "Pathri", "Patiala", "Patna", "Patratu", "Pattamundai", "Patti", "Pattran", "Pattukkottai", "Patur", "Pauni", "Pauri", "Pavagada", "Pedana", "Peddapuram", "Pehowa", "Pen", "Perambalur", "Peravurani", "Peringathur", "Perinthalmanna", "Periyakulam", "Periyasemur", "Pernampattu", "Perumbavoor", "Petlad", "Phagwara", "Phalodi", "Phaltan", "Phillaur", "Phulabani", "Phulera", "Phulpur", "Phusro", "Pihani", "Pilani", "Pilibanga", "Pilibhit", "Pilkhuwa", "Pindwara", "Pinjore", "PiparCity", "Pipariya", "Piriyapatna", "Piro", "Pithampur", "Pithapuram", "Pithoragarh", "Pollachi", "Polur", "Pondicherry", "Ponnani", "Ponneri", "Ponnur", "Porbandar", "Porsa", "PortBlair", "Powayan", "Prantij", "Pratapgarh", "Pratapgarh", "Prithvipur", "Proddatur", "Pudukkottai", "Pudupattinam", "Pukhrayan", "Pulgaon", "Puliyankudi", "Punalur", "Punch", "Pune", "Punganur", "Punjaipugalur", "Puranpur", "Puri", "Purna", "Purnia", "PurqUrbanAgglomerationzi", "Purulia", "Purwa", "Pusad", "Puthuppally", "Puttur", "Puttur", "Qadian", "Raayachuru", "RabkaviBanhatti", "Radhanpur", "RaeBareli", "Rafiganj", "Raghogarh-Vijaypur", "Raghunathganj", "Raghunathpur", "Rahatgarh", "Rahuri", "Raiganj", "Raigarh", "Raikot", "Raipur", "Rairangpur", "Raisen", "Raisinghnagar", "Rajagangapur", "Rajahmundry", "Rajakhera", "Rajaldesar", "Rajam", "Rajampet", "Rajapalayam", "Rajauri", "Rajgarh(Alwar)", "Rajgarh(Churu)", "Rajgarh", "Rajgir", "Rajkot", "Rajnandgaon", "Rajpipla", "Rajpura", "Rajsamand", "Rajula", "Rajura", "Ramachandrapuram", "Ramagundam", "Ramanagaram", "Ramanathapuram", "Ramdurg", "Rameshwaram", "RamganjMandi", "Ramgarh", "Ramnagar", "Ramnagar", "Ramngarh", "RampurManiharan", "Rampur", "RampuraPhul", "Rampurhat", "Ramtek", "Ranaghat", "Ranavav", "Ranchi", "Ranebennuru", "Rangia", "Rania", "Ranibennur", "Ranipet", "Rapar", "Rasipuram", "Rasra", "Ratangarh", "Rath", "Ratia", "Ratlam", "Ratnagiri", "Rau", "Raurkela", "Raver", "Rawatbhata", "Rawatsar", "RaxaulBazar", "Rayachoti", "Rayadurg", "Rayagada", "Reengus", "Rehli", "Renigunta", "Renukoot", "Reoti", "Repalle", "Revelganj", "Rewa", "Rewari", "Rishikesh", "Risod", "Robertsganj", "RobertsonPet", "Rohtak", "Ron", "Roorkee", "Rosera", "Rudauli", "Rudrapur", "Rudrapur", "Rupnagar", "Sabalgarh", "Sadabad", "Sadalagi", "Sadasivpet", "Sadri", "Sadulpur", "Sadulshahar", "Safidon", "Safipur", "Sagar", "Sagara", "Sagwara", "Saharanpur", "Saharsa", "Sahaspur", "Sahaswan", "Sahawar", "Sahibganj", "Sahjanwa", "Saidpur", "Saiha", "Sailu", "Sainthia", "Sakaleshapura", "Sakti", "Salaya", "Salem", "Salur", "Samalkha", "Samalkot", "Samana", "Samastipur", "Sambalpur", "Sambhal", "Sambhar", "Samdhan", "Samthar", "Sanand", "Sanawad", "Sanchore", "Sandi", "Sandila", "Sanduru", "Sangamner", "Sangareddy", "Sangaria", "Sangli", "Sangole", "Sangrur", "Sankarankovil", "Sankari", "Sankeshwara", "Santipur", "Sarangpur", "Sardarshahar", "Sardhana", "Sarni", "Sarsod", "Sasaram", "Sasvad", "Satana", "Satara", "Sathyamangalam", "Satna", "Sattenapalle", "Sattur", "Saunda", "Saundatti-Yellamma", "Sausar", "Savanur", "Savarkundla", "Savner", "SawaiMadhopur", "Sawantwadi", "Sedam", "Sehore", "Sendhwa", "Seohara", "Seoni", "Seoni-Malwa", "Shahabad", "Shahabad,Hardoi", "Shahabad,Rampur", "Shahade", "Shahbad", "Shahdol", "Shahganj", "Shahjahanpur", "Shahpur", "Shahpura", "Shahpura", "Shajapur", "Shamgarh", "Shamli", "Shamsabad,Agra", "Shamsabad,Farrukhabad", "Shegaon", "Sheikhpura", "Shendurjana", "Shenkottai", "Sheoganj", "Sheohar", "Sheopur", "Sherghati", "Sherkot", "Shiggaon", "Shikaripur", "Shikarpur,Bulandshahr", "Shikohabad", "Shillong", "Shimla", "Shirdi", "Shirpur-Warwade", "Shirur", "Shishgarh", "Shivamogga", "Shivpuri", "Sholavandan", "Sholingur", "Shoranur", "Shrigonda", "Shrirampur", "Shrirangapattana", "Shujalpur", "Siana", "Sibsagar", "Siddipet", "Sidhi", "Sidhpur", "Sidlaghatta", "Sihor", "Sihora", "Sikanderpur", "SikandraRao", "Sikandrabad", "Sikar", "Silao", "Silapathar", "Silchar", "Siliguri", "Sillod", "Silvassa", "Simdega", "Sindagi", "Sindhagi", "Sindhnur", "Singrauli", "Sinnar", "Sira", "Sircilla", "SirhindFatehgarhSahib", "Sirkali", "Sirohi", "Sironj", "Sirsa", "Sirsaganj", "Sirsi", "Sirsi", "Siruguppa", "Sitamarhi", "Sitapur", "Sitarganj", "Sivaganga", "Sivagiri", "Sivakasi", "Siwan", "Sohagpur", "Sohna", "Sojat", "Solan", "Solapur", "Sonamukhi", "Sonepur", "Songadh", "Sonipat", "Sopore", "Soro", "Soron", "Soyagaon", "SriMadhopur", "Srikakulam", "Srikalahasti", "Srinagar", "Srinagar", "Srinivaspur", "Srirampore", "SrisailamProject(RightFlankColony)Township", "Srivilliputhur", "Sugauli", "Sujangarh", "Sujanpur", "Sullurpeta", "Sultanganj", "Sultanpur", "Sumerpur", "Sumerpur", "Sunabeda", "Sunam", "Sundargarh", "Sundarnagar", "Supaul", "Surandai", "Surapura", "Surat", "Suratgarh", "SUrbanAgglomerationr", "Suri", "Suriyampalayam", "Suryapet", "Tadepalligudem", "Tadpatri", "Takhatgarh", "Taki", "Talaja", "Talcher", "TalegaonDabhade", "Talikota", "Taliparamba", "Talode", "Talwara", "Tamluk", "Tanda", "Tandur", "Tanuku", "Tarakeswar", "Tarana", "Taranagar", "Taraori", "Tarbha", "Tarikere", "TarnTaran", "Tasgaon", "Tehri", "Tekkalakote", "Tenali", "Tenkasi", "Tenudam-cum-Kathhara", "Terdal", "Tezpur", "Thakurdwara", "Thammampatti", "ThanaBhawan", "Thane", "Thanesar", "Thangadh", "Thanjavur", "Tharad", "Tharamangalam", "Tharangambadi", "TheniAllinagaram", "Thirumangalam", "Thirupuvanam", "Thiruthuraipoondi", "Thiruvalla", "Thiruvallur", "Thiruvananthapuram", "Thiruvarur", "Thodupuzha", "Thoubal", "Thrissur", "Thuraiyur", "Tikamgarh", "TildaNewra", "Tilhar", "Tindivanam", "Tinsukia", "Tiptur", "Tirora", "Tiruchendur", "Tiruchengode", "Tiruchirappalli", "Tirukalukundram", "Tirukkoyilur", "Tirunelveli", "Tirupathur", "Tirupathur", "Tirupati", "Tiruppur", "Tirur", "Tiruttani", "Tiruvannamalai", "Tiruvethipuram", "Tiruvuru", "Tirwaganj", "Titlagarh", "Tittakudi", "Todabhim", "Todaraisingh", "Tohana", "Tonk", "Tuensang", "Tuljapur", "Tulsipur", "Tumkur", "Tumsar", "Tundla", "Tuni", "Tura", "Uchgaon", "Udaipur", "Udaipur", "Udaipurwati", "Udgir", "Udhagamandalam", "Udhampur", "Udumalaipettai", "Udupi", "Ujhani", "Ujjain", "Umarga", "Umaria", "Umarkhed", "Umbergaon", "Umred", "Umreth", "Una", "Unjha", "Unnamalaikadai", "Unnao", "Upleta", "UranIslampur", "Uran", "Uravakonda", "UrmarTanda", "Usilampatti", "Uthamapalayam", "Uthiramerur", "Utraula", "Vadakkuvalliyur", "Vadalur", "VadgaonKasba", "Vadipatti", "Vadnagar", "Vadodara", "Vaijapur", "Vaikom", "Valparai", "Valsad", "Vandavasi", "Vaniyambadi", "Vapi", "Vapi", "Varanasi", "Varkala", "Vasai-Virar", "Vatakara", "Vedaranyam", "Vellakoil", "Vellore", "Venkatagiri", "Veraval", "Vidisha", "Vijainagar,Ajmer", "Vijapur", "Vijayapura", "Vijayawada", "Vijaypur", "Vikarabad", "Vikramasingapuram", "Viluppuram", "Vinukonda", "Viramgam", "Virudhachalam", "Virudhunagar", "Visakhapatnam", "Visnagar", "Viswanatham", "Vita", "Vizianagaram", "Vrindavan", "Vyara", "WadgaonRoad", "Wadhwan", "Wadi", "Wai", "Wanaparthy", "Wani", "Wankaner", "WaraSeoni", "Warangal", "Wardha", "Warhapur", "Warisaliganj", "Warora", "Warud", "Washim", "Wokha", "Yadgir", "Yamunanagar", "Yanam", "Yavatmal", "Yawal", "Yellandu", "Yemmiganur", "Yerraguntla", "Yevla", "Zaidpur", "Zamania", "Zira", "Zirakpur", "Zunheboto"];

const suggestion = doc.getElementById("cities");

search.oninput = () => {
    let search = doc.getElementById("city").value;
        let suggestions = cities.filter((i) => {
            return i.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    console.log(suggestions);
    let text = " ";
        for (let i of suggestions) {
            text += `<option value=${i}></option>`;
        }
    suggestion.innerHTML = text;
     var opts = suggestion.children;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === search) {
        getWeather(search);
        break;
      }
    }
};



