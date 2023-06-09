function checkForElements() { //  30/05
  var elements = document.querySelectorAll('a.marketplace-buy-item-card');
  var foundElements = [];

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var href = element.getAttribute("href");
    var number = null;
    var power = null;
    var percentuale = null;
    var showV = false;
	  
    if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c27") {   
      number = "0.2"; //doogie
	  power = 0.01;
	  percentuale = 0;
    } else if (href === "/marketplace/buy/miner/6399c3331c483a58f70e9914") {
      number = "1.3"; // doggie-woogie uncommon
	  power = 0.105;
	  percentuale = 0.14;
    } else if (href === "/marketplace/buy/miner/6399c3341c483a58f70e9924") {
      number = "4";// doggie-woogie rare
	  power = 0.315;
	  percentuale = 0.42 ;
	} else if (href === "/marketplace/buy/miner/6399c3351c483a58f70e9932") {
      number = "10"; // doggie-woogie epic
	  power = 0.84;
	  percentuale = 0.52;
	} else if (href === "/marketplace/buy/miner/6231c24ba258d58160cc1526") {
      number = "31.5" ; //8bearded
	  power = 330;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6231c296a258d58160cdf676") {
      number = "1.88" ; //8blessed  
	  power = 33;
	  percentuale = 0;
	  
	} else if (href === "/marketplace/buy/miner/631f7b018238ed283a234d8d") {
      number = "8.1 v" ; //8blessed uncommon 
	  power = 86.625 ;
	  percentuale = 0.55;
	  showV = true;
	} else if (href === "/marketplace/buy/miner/631f7b028238ed283a234d9a") {
      number = "30.45"; //8blessed rare
	  power = 227.43 ;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/631f7b038238ed283a234da7") {
      number = "80" ; //8blessed epic 
	  power = 597.03 ;
	  percentuale = 2.08;
	} else if (href === "/marketplace/buy/miner/6231c273a258d58160cd1b51") {
      number = "16.3" ; //8bubbled 
      power =  165;
	  percentuale = 0;	  
	} else if (href === "/marketplace/buy/miner/631f7b068238ed283a234dce") {
      number = "47.18" ; //8bubbled uncommon
	  power =  433.125;
	  percentuale = 0.57;
	} else if (href === "/marketplace/buy/miner/62444e1b42a0cd1b7d7ae198") {
      number = "9" ; //acropolis 
	  power = 50 ;
	  percentuale = 0.5;
	  showV = true;
	} else if (href === "/marketplace/buy/miner/631f79d28238ed283a233f96") {
      number = "16.56" ; //acropolis uncommon 
	  power =  131.25;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/6296227e530f48a8e7a34e16") {
      number = "10.7" ; // afterparty 
	  power = 125;
	  percentuale = 1;
	  showV = true;
	} else if (href === "/marketplace/buy/miner/631f7a728238ed283a2346f3") {
      number = "35.5" ; // afterparty uncommon
	  power =  328.125;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/631f7a738238ed283a234700") {
      number = "82.8" ; // afterparty rare  
	  power =  861.42;
	  percentuale = 1.1;
	} else if (href === "/marketplace/buy/miner/631f7a748238ed283a23470d") {
      number = "193.2"; // afterparty epic 
	  power = 861.42 ;
	  percentuale = 1.1;
	} else if (href === "/marketplace/buy/miner/62447dbe42a0cd1b7d3350b0") {
      number = "25.9"; // ai-miner
      power = 200 ;
	  percentuale = 2;	
      showV = true;	  
	} else if (href === "/marketplace/buy/miner/629622eb530f48a8e7a52283") {
      number = "25" ; // air mattress 
	  power =  200;
	  percentuale = 1;
	  showV = true;
    } else if (href === "/marketplace/buy/miner/631f7a778238ed283a234734") {
      number = "60" ; // air mattress uncommon
	  power =  525;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/63bffdd0d2e89bab14ff95bc") {
      number = "68"; // almost switch
	  power = 582.023 ;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/63c013408606868c5f3478c0") {
      number = "160"; // almost switch uncommon
	  power =  1528;
	  percentuale = 3.12;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e9") {
      number = "96" ; // ancient  
	  power =  500;
	  percentuale = 6;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e3") {
      number = "20.5" ; // anti-phaze 
	  power =  125;
	  percentuale = 1.50;
	  showV = true;
	} else if (href === "/marketplace/buy/miner/62553e7542a0cd1b7dd7e403") {
      number = "5.3" ; // anubis
	  power =  45;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a2f8238ed283a2343e7") {
      number = "14" ; // anubis uncommon  
	  power = 118.125 ;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/6436d787547cfab9a2155dfa") {
      number = "11.3"; // apollo miner 
	  power =  147;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6437cd9ae3a75846582178cb") {
      number = "37"; // apollo miner uncommon
	  power =  385.875;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6437cd9be3a75846582178d9") {
      number = "84.6"; // apollo miner rare
	  power =  1013;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d2380") {
      number = "4.8" ; // armageddon
	  power =  35;
	  showV = true;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f78cf8238ed283a2333a7") {
      number = "14" ; // armageddon uncommon
	  power =  91.875;
	  percentuale = 0.79;
	} else if (href === "/marketplace/buy/miner/631f78d08238ed283a2333b4") {
      number = "26.8" ; // armageddon rare 
	  power =  241.185;
	  percentuale = 0.83;
	} else if (href === "/marketplace/buy/miner/60c7441465dce86c86607522") {
      number = "24.9"; // aurum  
	  power =  200;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce688939024e") {
      number = "41"; // azure dragon
	  power =  200;
	  showV = true;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/645230f07dd1aacd1ea9bd01") {
      number = "3" ; // biogauge 67
	  power =  43.8;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6452490c8953173292548e8f") {
      number = "14.4"; // biogauge 67 uncommon
	  power =  114.975;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f9") {
      number = "2.6"; // blaize
	  power =  26;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f78c98238ed283a233366") {
      number = "9.2" ; // blaize uncommon
	  power =  68.25;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f78cb8238ed283a233380") {
      number = "46" ; // blaize epic
	  power =  179.235;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f78cd8238ed283a23338d") {
      number = "110" ; // blaize legendary
	  power =  470.505;
	  percentuale = 0.61;
	} else if (href === "/marketplace/buy/miner/631f78ce8238ed283a23339a") {
      number = "276" ; // blaize unreal
	  power =  3242;
	  percentuale = 0.64;
	} else if (href === "/marketplace/buy/miner/631b561aa775e04d9a28547a") {
      number = "3.8" ; // blaze dragon
	  power =  47.2;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b878238ed283a2353e6") {
      number = "15.2"; // blaze dragon uncommon
	  power =  123.9;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7b888238ed283a2353f3") {
      number = "44.1"; // blaze dragon rare
	  power = 325.29 ;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/631f7b898238ed283a235400") {
      number = "92" ; // blaze dragon epic
	  power =  853.965;
	  percentuale = 2.08;
	} else if (href === "/marketplace/buy/miner/6422f238f1cff2d95bf745a6") {
      number = "18"; // blaze-boosted
	  power =  213.6;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/62a71fed9b5a37db46b4cea0") {
      number = "4.5"; // blobpat
	  power =  30;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7aa98238ed283a23497d") {
      number = "10.8" ; // blobpat uncommon
	  power =  78.75;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/631f7aaa8238ed283a23498a") {
      number = "19.3" ; // blobpat rare
	  power =  206.745;
	  percentuale = 0.28;
	} else if (href === "/marketplace/buy/miner/611e485ebf6b53744c700a3b") {
      number = "89" ; // boneyard
	  power =  700;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fde") {
      number = "5.6"; // box of wonders
	  power =  20;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f79428238ed283a2338fc") {
      number = "9" ; // box of wonders uncommon
	  power =  52.5;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f79438238ed283a233909") {
      number = "15.6"; // box of wonders rare
	  power =  137.865;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f79448238ed283a233916") {
      number = "35" ; // box of wonders epic
	  power =  361.935;
	  percentuale = 0.58;
	} else if (href === "/marketplace/buy/miner/646ddc59260e7d19c91846bc") {
      number = "31" ; // bubbles
	  power =  260;
	  percentuale = 1;  
	} else if (href === "/marketplace/buy/miner/634fe54add8b7d5052e2d14e") {
      number = "45" ; // calaveras 
	  power = 430.5 ;
	  percentuale = 0; 
	} else if (href === "/marketplace/buy/miner/635b95a385f7ba2d7a7984b1") {
      number = "110" ; // calaveras uncommon
	  power = 1130 ;
	  percentuale = 1.49;
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fe0") {
      number = "0.9" ; // candy box
	  power =  10;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f794d8238ed283a23397e") {
      number = "3.5" ; // candy box uncommon
	  power =  26.25;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/631f794e8238ed283a23398b") {
      number = "7" ; // candy box rare
	  power =  68.985;
	  percentuale = 0.28;
	} else if (href === "/marketplace/buy/miner/631f79508238ed283a233998") {
      number = "16.56"; // candy box epic
	  power =  181.125;
	  percentuale = 0.29;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e6") {
      number = "50"; // candysweet
	  power =  250;
	  showV = true;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e567") {
      number = "8.4" ; // cathouse miner
	  power =  92.4;
	  
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c36d1c483a58f70e9c5e") {
      number = "26" ; // cathouse miner uncommon
	  power =  242.55;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c36e1c483a58f70e9c6c") {
      number = "73.6"; // cathouse miner rare
	  power =  636.72;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/631b561aa775e04d9a28548c") {
      number = "4" ; // cerberus
	  power =  63;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b828238ed283a2353a5") {
      number = "16.9"; // cerberus uncommon
	  power =  165.375;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/62961778530f48a8e77085e8") {
      number = "3.6" ; // chaise lounge
	  power =  25;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a568238ed283a2345ae") {
      number = "7.8" ; // chaise lounge uncommon
	  power =  65.625;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/63bffdd0d2e89bab14ff95bd") {
      number = "1.35" ; //  chattanouge
	  power =  20.23;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/63c013458606868c5f347908") {
      number = "6" ; //  chattanouge uncommon 
	  power =  53.13;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/63c013458606868c5f347916") {
      number = "22.8" ; // chattanouge rare 
	  power =  139.545;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/6452319e7dd1aacd1ea9bd03") {
      number = "18.5"; // chemdose 55
	  power =  175;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e568") {
      number = "5.7" ; // christmas courier
	  power =  67.2;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3711c483a58f70e9ca4") {
      number = "18" ; //  christmas courier uncommon
	  power =  176.4;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c3721c483a58f70e9cb2") {
      number = "46" ; //  christmas courier rare 
	  power =  463.05;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce688939024b") {
      number = "160" ; //  chunxi road
	  power =  1150;
	  percentuale = 6;
	} else if (href === "/marketplace/buy/miner/5f9ae5284ac419fdd08d0584") {
      number = "2.7" ; //  chupacabra
	  power =  14;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f779e8238ed283a2325b0") {
      number = "6.7" ; // chupacabra uncommon
	  power =  36.75;
	  showV = true;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/61bb6123698d2f88e80c7730") {
      number = "15.8"; //  chupacabra X
	  power =  42;
	  showV = true;
	  percentuale = 1.5;
	} else if (href === "/marketplace/buy/miner/631f779f8238ed283a2325bd") {
      number = "16" ; // chupacabra rare
	  power =  96.495;
	  percentuale = 1.1;
	} else if (href === "/marketplace/buy/miner/631f77a08238ed283a2325ca") {
      number = "32" ; // chupacabra epic
	  power =  253.365;
	  percentuale = 1.16;
	} else if (href === "/marketplace/buy/miner/6422effbb78c58eb24801eb9") {
      number = "41" ; // classic fury 
	  power =  418;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/604f569e8402c6550b2b936b") {
      number = "27.3" ; // clover lover
	  power =  115;
	  showV = true;
	  percentuale = 2.5;
	} else if (href === "/marketplace/buy/miner/631f77ae8238ed283a232673") {
      number = "55" ; //  clover lover uncommon
	  power =  406.875;
	  percentuale = 2.63;
	} else if (href === "/marketplace/buy/miner/61bb6127698d2f88e80c7772") {
      number = "92" ; //  clover lover x 
	  power = 406.875 ;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/62324419a258d5816074aeb1") {
      number = "58.8" ; //  clover-n'-over
	  power =  530;
	  percentuale = 2.5;
	} else if (href === "/marketplace/buy/miner/631b5619a775e04d9a285469") {
      number = "9.7" ; //   corn popper 
	  power = 140  ;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b688238ed283a235260") {
      number = "40"; //  corn popper uncommon
	  power =  367.5;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/62553f2f42a0cd1b7dda81da") {
      number = "5.8" ; // cornucopia 
	  power =  20;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a1a8238ed283a2342e3") {
      number = "16" ; //  cornucopia uncommon
	  power =  52.5;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/631f7a1b8238ed283a2342f0") {
      number = "50" ; // cornucopia rare 
	  power =  137.865;
	  percentuale = 0.28;
	} else if (href === "/marketplace/buy/miner/631f7a1c8238ed283a2342fd") {
      number = "32.4"; // cornucopia epic 
	  power =  361.935;
	  percentuale = 0.29;
	} else if (href === "/marketplace/buy/miner/610a9b31bf6b53744c87cedc") {
      number = "0.55" ; //  cp-106
	  power =  11.106;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f77f68238ed283a2329c0") {
      number = "5.9" ; //  cp-106 uncommon
	  power =  29.19;
	  showV = true;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f77f78238ed283a2329cd") {
      number = "16"; //  cp-106 rare
	  power =  76.65;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f77f98238ed283a2329da") {
      number = "22" ; //  cp-106 epic
	  power =  201.285;
	  percentuale = 0.58;
	} else if (href === "/marketplace/buy/miner/61bb6126698d2f88e80c775d") {
      number = "9" ; //  cp-106 x
	  power =  33.318;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/610a9c61bf6b53744c8ea0d4") {
      number = "10" ; // cp-306 
	  power =  30;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f780c8238ed283a232ac4") {
      number = "24"; // cp-306 uncommon 
	  power =  78.75;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/61bb6126698d2f88e80c7758") {
      number = "36.8"; //  cp-306 x
	  power =  90;
	  percentuale = 1.5;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce6889390250") {
      number = "6.3" ; //  crimson bloom
	  power =  40;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f79958238ed283a233ccb") {
      number = "14.2"; //  crimson bloom uncommon
	  power =  105;
	  showV = true;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/631f79968238ed283a233cd8") {
      number = "32" ; //  crimson bloom rare
	  power = 275.625 ;
	  percentuale = 1.1;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce6889390252") {
      number = "1.4" ; // crimson spark 
	  power =  20;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f79a08238ed283a233d4d") {
      number = "6" ; // crimson spark uncommon 
	  power =  52.5;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f79a18238ed283a233d5a") {
      number = "15"; // crimson spark rare 
	  power =  137.865;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f79a28238ed283a233d67") {
      number = "36.8" ; //  crimson spark epic
	  power =  361.935;
	  percentuale = 0.58;
	} else if (href === "/marketplace/buy/miner/62d687e681b1c8e692c2de01") {
      number = "10.5" ; //  dancing queen
	  power =  78;
	  showV = true;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f7af68238ed283a234d0b") {
      number = "21" ; //  dancing queen uncommon
	  power =  204.75;
	  showV = true;
	  percentuale = 0.79;
	} else if (href === "/marketplace/buy/miner/631f7af78238ed283a234d18") {
      number = "52.4" ; //  dancing queen rare
	  power =  537.495;
	  percentuale = 0.83;
	} else if (href === "/marketplace/buy/miner/631f7af98238ed283a234d32") {
      number = "322" ; //  dancing queen legendary
	  power =  3704;
	  percentuale = 0.91;
	} else if (href === "/marketplace/buy/miner/634fdb50dd8b7d5052a7a9a7") {
      number = "11.5" ; //  danza de la muerte
	  power =  131.2;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/635b959f85f7ba2d7a79846e") {
      number = "36" ; //  danza de la muerte uncommon
	  power =  344.4;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fcc") {
      number = "21" ; //  dasher's sled
	  power =  75;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/62f3c12e81b1c8e692098d7e") {
      number = "4.1" ; //  dawn-to-dusk
	  power =  64.8;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b118238ed283a234e50") {
      number = "17.8"; // dawn-to-dusk uncommon 
	  power =  170.1;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7b128238ed283a234e5d") {
      number = "55" ; //  dawn-to-dusk rare
	  power =  446.565;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/6422fb6cb78c58eb24801ebd") {
      number = "3.4" ; // death proof digger 
	  power =  22;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/642412af10f9251eee27d985") {
      number = "10" ; // death proof digger uncommon 
	  power =  57.75;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/62bab8944616472f6ce28842") {
      number = "72.2" ; // declarator 407+ 
	  power =  407;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/62a722279b5a37db46c0bca5") {
      number = "1.52" ; // deepdiver  
	  power =  12.5;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a938238ed283a234879") {
      number = "3.4" ; // deepdiver  uncommon
	  power =  32.865;
	  showV = true;
	  percentuale = 0.26;  
	} else if (href === "/marketplace/buy/miner/6422f238f1cff2d95bf745a0") {
      number = "0.14" ; //  demon speeding
	  power =  0.01;
	  percentuale = 0;
    } else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c29") {
      number = "2.3" ; //  disco-roll
	  power =  36.3;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c33f1c483a58f70e99a2") {
      number = "9.3" ; // disco-roll uncommon
	  power =  95.34;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c3401c483a58f70e99b0") {
      number = "34"; // disco-roll rare
	  power =  250.32;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/6399c3411c483a58f70e99be") {
      number = "73" ; // disco-roll epic
	  power =  657.09;
	  percentuale = 2.08;
	} else if (href === "/marketplace/buy/miner/6399c3421c483a58f70e99cc") {
      number = "174" ; // disco-roll legendary
	  power =  1725;
	  percentuale = 2.6;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f0") {
      number = "15.5"; // dj roller
	  power =  85;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f0") {
      number = "29"; // dj roller uncommon
	  power =  223.125;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/631f78788238ed283a232fa4") {
      number = "60" ; // dj roller rare
	  power =  585.795;
	  percentuale = 1.1;
	} else if (href === "/marketplace/buy/miner/607eedae65dce86c86e95319") {
      number = "33.4" ; // doger 420
	  power =  199;
	  percentuale = 2.5;
	} else if (href === "/marketplace/buy/miner/631f77ba8238ed283a2326f5") {
      number = "64" ; //doger 420 uncommon
	  power =  522.375;
	  percentuale = 2.63;
	} else if (href === "/marketplace/buy/miner/631b561ba775e04d9a285494") {
      number = "77.5" ; // dragon wing
	  power =  815.5;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce688939024c") {
      number = "18.5"; //dragon's breath
	  power =  50;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/631f797f8238ed283a233bc7") {
      number = "38" ; // dragon's breath uncommon
	  power =  131.25;
	  percentuale = 1.58;
	} else if (href === "/marketplace/buy/miner/631f79808238ed283a233bd4") {
      number = "39"; //dragon's breath rare
	  power =  344.61;
	  percentuale = 1.65;
	} else if (href === "/marketplace/buy/miner/62b068ec9b5a37db46189072") {
      number = "17"; // dragonpride 16t+
	  power =  50;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f7aca8238ed283a234b03") {
      number = "40" ; // dragonpride 16t+ uncommon
	  power =  131.25;
	  percentuale = 0.79;
    } else if (href === "/marketplace/buy/miner/5a0b08b1d1d9ee5894f36f33") {
      number = "13.5" ; //	 dragonroller 16t 
	  power =  16;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f775c8238ed283a2322a4") {
      number = "36.2" ; // dragonroller 16t uncommon
	  power =  42;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/61bb6124698d2f88e80c7737") {
      number = "42" ; // dragonroller 16t x
	  power =  48;
	  percentuale = 1.5;
	} else if (href === "/marketplace/buy/miner/5e2ee460041b386e78b97c2a") {
      number = "13.3"; // dream demolisher 3000
	  power =  70;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/631f77888238ed283a2324ac") {
      number = "34" ; // dream demolisher 3000 uncommon
	  power =  183.75;
	  percentuale = 2.1;
	} else if (href === "/marketplace/buy/miner/631f77898238ed283a2324b9") {
      number = "60" ; //dream demolisher 3000 rare
	  power =  482.37;
	  percentuale = 2.21;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f5") {
      number = "2.1" ; // drifter
	  power =  24;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f78be8238ed283a2332e4") {
      number = "9.2" ; // drifter uncommon
	  power =  63;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f78bf8238ed283a2332f1") {
      number = "18.4" ; // drifter rare
	  power =  165.375;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/5f9ae5584ac419fdd08d08cd") {
      number = "20.9" ; // el monstro
	  power =  110;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/631f77a38238ed283a2325f1") {
      number = "40" ; // el monstro uncommon
	  power =  288.75;
	  percentuale = 2.1;
	} else if (href === "/marketplace/buy/miner/631b561aa775e04d9a285473") {
      number = "1.9" ; // elven
	  power =  22.8;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b928238ed283a235468") {
      number = "9.1" ; // elven uncommon
	  power =  59.85;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7b938238ed283a235475") {
      number = "22" ; // elven rare
	  power =  157.185;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce688939024f") {
      number = "17"; // emperor's treasure
	  power =  40;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631b5619a775e04d9a28546f") {
      number = "1.4" ; //entminer
	  power =  22;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b9d8238ed283a2354ea") {
      number = "5.36" ; // entminer uncommon
	  power =  57.75;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7b9e8238ed283a2354f7") {
      number = "23"; // entminer rare
	  power =  157.185;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/62e000cf81b1c8e692fa0e1f") {
      number = "93" ; // etherilliant
	  power =  850;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/62a71eee9b5a37db46af496e") {
      number = "15" ; // eviltopus
	  power =  100;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f7aba8238ed283a234a40") {
      number = "32" ; // eviltopus uncommon
	  power = 262.5 ;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/637411755247b3b8921562ac") {
      number = "8.5" ; // fairy dancer
	  power =  90.74;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6374119b5247b3b892164c27") {
      number = "29" ; // fairy dancer uncommon
	  power =  238.245;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6463a05715a6792f949b49eb") {
      number = "62" ; // fallout finder 55
	  power =  607.2;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/644bb5de648294b4642f368f") {
      number = "0.05" ; // fang simbol 
	  power =  0.1;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/617965be67433d2dc533871b") {
      number = "21" ; // fb-1
	  power =  50;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/631f49f54b63e9397b05b0fa") {
      number = "23" ; // fiery breath
	  power =  256;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/634d57526d81450f9e8006c0") {
      number = "71.7"; // fiery breat uncommon
	  power =  672;
	  percentuale = 0.88;
    } else if (href === "/marketplace/buy/miner/645b8a87eccd3c43207474d0") {
      number = "16" ; //	 fire forger 
	  power =  149;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/645b98267f78e084daf91261") {
      number = "43" ; // fire forger uncommon
	  power =  391.125;
	  percentuale = 1.02;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fcf") {
      number = "73" ; // first class
	  power =  270;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/629615fa530f48a8e769b2dc") {
      number = "5.6" ; //flamin-go
	  power =  50;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f7a4b8238ed283a23452c") {
      number = "16" ; //flamin-go uncommon
	  power =  131.25;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/625410ae42a0cd1b7d9c67e0") {
      number = "68" ; //fluffy miner
	  power =  550;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a28543d") {
      number = "14.4" ; //fortune teller
	  power =  162.5;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b428238ed283a235099") {
      number = "45" ; //fortune teller uncommon
	  power =  426.615;
	  percentuale = 0.57;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce6889390253") {
      number = "5" ; //fortune charm
	  power =  20;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f79a68238ed283a233d8e") {
      number = "10.1" ; // fortune charm uncommon
	  power =  52.5;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f79a78238ed283a233d9b") {
      number = "21" ; // fortune charm rare
	  power =  137.865;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/63ac54fbbc0da509117727f4") {
      number = "31.2" ; //frozen brownie
	  power =  242.023;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/62f3c16c81b1c8e6920b58c8") {
      number = "40" ; // full circle
	  power =  465;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/645b8a87eccd3c43207474d2") {
      number = "75"; //furry rocker
	  power =  690;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/6422fd40b78c58eb24801ebf") {
      number = "2.3"; //fury fueler
	  power =  22.4;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/642412b310f9251eee27d9cb") {
      number = "10" ; //fury fueler uncommon
	  power =  58.8;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6463a05715a6792f949b49e8") {
      number = "5" ; //gamma geiger 17
	  power =  65;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6463a9da7982aa4292ea76a8") {
      number = "18.8" ; //gamma geiger 17 uncommon
	  power =  170.625;
	  percentuale = 0.35;
	} else if (href === "/marketplace/buy/miner/6463a05715a6792f949b49ea") {
      number = "26.1" ; //gamma geiger 77
	  power =  447.93;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/6463a9e37982aa4292ea7734") {
      number = "60" ; //gamma geiger 77 uncommon
	  power =  260.4;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c2d") {
      number = "16"; //gandhi's splittie
	  power =  213.6;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3521c483a58f70e9aba") {
      number = "56" ; //gandhi splittie uncommon
	  power =  560.7;
	  showV = true;
	  percentuale = 0.74;
	} else if (href === "/marketplace/buy/miner/6422ff81b78c58eb24801ec7") {
      number = "4" ; //gas town bitminer
	  power =  48;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/642412c510f9251eee27dae3") {
      number = "18"; //gas town bitminer uncommon
	  power =  126;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6422f238f1cff2d95bf745a5") {
      number = "11.7"; //gear grabber
	  power = 152.55 ;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/646ca4d60134dd538d6797ee") {
      number = "50"; //genesis gear
	  power = 455 ;
	  percentuale = 1;  
	} else if (href === "/marketplace/buy/miner/6422fdd5b78c58eb24801ec1") {
      number = "2.2" ; //ghostly pumper
	  power =  22.5;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/642412b810f9251eee27da11") {
      number = "9.2" ; //ghostly pumper uncommon
	  power =  59.85;
	  percentuale = 0.55;
    } else if (href === "/marketplace/buy/miner/642412b910f9251eee27da1f") {
      number = "35"; //	  ghostly pumper rare
	  power =  157.185;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/6474a38830cd78b9cb76478c") {
      number = "19.7"; //	  giftbox pile
	  power =  230;
	  showV = true;
	  percentuale = 0;  
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fcd") {
      number = "15.9"; //gingerbread
	  power =  75;
	  showV = true;
	  percentuale = 1.5;
	} else if (href === "/marketplace/buy/miner/631f791c8238ed283a233735") {
      number = "31"; //gingerbread uncommon
	  power =  196.875;
	  percentuale = 1.58;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e56e") {
      number = "2" ; // gingerbread house 
	  power =  22;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3901c483a58f70e9e48") {
      number = "8.4" ; // gingerbread house uncommon
	  power =  57.75;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c3911c483a58f70e9e56") {
      number = "23 v" ; // gingerbread house rare
	  power =  151.62;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/5e2ee460041b386e78b97c29") {
      number = "6.7" ; //gold digger
	  power =  15;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f778d8238ed283a2324ed") {
      number = "15.5" ; //gold digger uncommon
	  power =  39.378;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/62a71fac9b5a37db46b36976") {
      number = "12"; //golden corral
	  power =  40;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7aaf8238ed283a2349be") {
      number = "18" ; //golden corral uncommon
	  power =  105;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/62553d1342a0cd1b7dd31292") {
      number = "71.7"; //golden fleece
	  power =  500;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fcb") {
      number = "23.3" ; //  granny's cake
	  power =  125;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e1") {
      number = "76" ; //  gravity
	  power =  500;
	  showV = true;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f7") {
      number = "7.4" ; //  grum
	  power =  40;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f78928238ed283a2330dc") {
      number = "15.5" ; //  grum uncommon
	  power =  105;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f6") {
      number = "8.1" ; //  guts
	  power =  40;
	  percentuale = 0.5;  
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a285443") {
      number = "111" ; //  guess-the-card
	  power =  1080;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6436d7ba547cfab9a216c65b") {
      number = "35"; //  hand of the blockchain
	  power =  331;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/6254115642a0cd1b7d9dd0d9") {
      number = "11.5" ; //  happy easter
	  power =  80;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f7a0e8238ed283a234261") {
      number = "28.3" ; //  happy easter uncommon
	  power =  210;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/631b5619a775e04d9a28546d") {
      number = "1.3"; //  hashers egg
	  power =  21.6;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7ba28238ed283a23552b") {
      number = "5.6"; //  hashers egg uncommon
	  power =  56.7;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7ba38238ed283a235538") {
      number = "23"; //  hashers egg rare
	  power =  148.89;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/63e61425547cfab9a27bcc78") {
      number = "12.3"; // heartbeat 
	  power =  176;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/63e61b1f457dbbcf9501b67b") {
      number = "40" ; //  heartbeat uncommon
	  power =  462;
	  percentuale = 0.61;
	} else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c2a") {
      number = "5" ; //  helipop
	  power =  78.5;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3441c483a58f70e99e8") {
      number = "19.6" ; //  helipop uncommon
	  power =  206.115;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c3451c483a58f70e99f6") {
      number = "58" ; //  helipop rare
	  power =  541.065;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/631b561ba775e04d9a285492") {
      number = "16.5" ; //  hellcat
	  power =  188.1;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b778238ed283a235323") {
      number = "50" ; //  hellcat uncommon
	  power =  493.815;
	  percentuale = 0.65;
	} else if (href === "/marketplace/buy/miner/631b561aa775e04d9a285476") {
      number = "4.8" ; //  helltaurus
	  power =  34.8;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b8d8238ed283a235427") {
      number = "20" ; //  helltaurus uncommon
	  power =  91.35;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7b8e8238ed283a235434") {
      number = "36.8"; //  helltaurus rare
	  power =  239.82;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/611e2490bf6b53744cad6620") {
      number = "25.6" ; //  hokusai
	  power =  95;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/631f781f8238ed283a232b87") {
      number = "50" ; //  hokusai uncommon
	  power =  249.375;
	  percentuale = 2.1;
	} else if (href === "/marketplace/buy/miner/646ca3db0134dd538d6797ec") {
      number = "9.4" ; //  hope harvester
	  power =  135;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/646cc84c75d80c24695df9fa") {
      number = "33" ; //  hope harvester uncommon
	  power =  354.375;
	  percentuale = 0.35;  
	} else if (href === "/marketplace/buy/miner/629623c5530f48a8e7a90896") {
      number = "50" ; //  iced-out-cream
	  power =  350;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a285441") {
      number = "38" ; //  illusionists box
	  power =  400;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6422fe93b78c58eb24801ec3") {
      number = "2.3" ; //  immortan income
	  power =  23.2;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/642412bc10f9251eee27da57") {
      number = "10.2" ; //  immortan income uncommon
	  power =  60.9;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/642412bd10f9251eee27da65") {
      number = "33" ; //  immortan income rare
	  power =  159.915;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/6422ffffb78c58eb24801ec9") {
      number = "6" ; //  inferno igniter
	  power =  67.2;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/642412c910f9251eee27db29") {
      number = "20" ; //  inferno igniter uncommon
	  power =  176.4;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/645b8a87eccd3c43207474cf") {
      number = "4.4" ; //  inferno miner
	  power =  61;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/645b98227f78e084daf9121b") {
      number = "15.7" ; //  inferno miner uncommon
	  power =  160.125;
	  percentuale = 0.35;
	} else if (href === "/marketplace/buy/miner/6463a05715a6792f949b49e9") {
      number = "13" ; //  isotope miner 23
	  power =  164.3;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6463a9df7982aa4292ea76ee") {
      number = "44" ; //  isotope miner 23 uncommon
	  power =  431.34;
	  percentuale = 0.58;
	} else if (href === "/marketplace/buy/miner/645b8a87eccd3c43207474d1") {
      number = "33.5"; // it'sokayer 
	  power =  282;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/5f9ae5844ac419fdd08d0bee") {
      number = "25.6" ; // jacko miner 
	  power =  99.9;
	  showV = true;
	  percentuale = 2.5;
	} else if (href === "/marketplace/buy/miner/631f77988238ed283a23256f") {
      number = "50" ; //  jack o miner uncommon
	  power =  262.29;
	  percentuale = 2.63;
	} else if (href === "/marketplace/buy/miner/610a9bcabf6b53744c8b3c79") {
      number = "15.4" ; //  jbs144
	  power =  27.7;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/610a9ae2bf6b53744c860a30") {
      number = "1.3" ; //  jbs200
	  power =  13;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f77f18238ed283a23297f") {
      number = "3.8" ; //  jbs200 uncommon
	  power =  34.125;
	  showV = true;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f77f28238ed283a23298c") {
      number = "9.8" ; // jbs200 rare
	  power =  89.67;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fe3") {
      number = "5.5" ; // jellier 
	  power =  20;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f795e8238ed283a233a41") {
      number = "10.5" ; // jellier uncommon 
	  power =  52.5;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fd0") {
      number = "5.5" ; //  jelly bones
	  power =  26;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f79278238ed283a2337b7") {
      number = "11.1" ; //  jelly bones uncommon
	  power =  68.25;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/62d687ba81b1c8e692c19e43") {
      number = "5" ; //  jungle king
	  power =  16.8;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f7af08238ed283a234cca") {
      number = "9.6" ; //  jungle king uncommon
	  power =  44.1;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f7af18238ed283a234cd7") {
      number = "11.5 v" ; //  jungle king rare
	  power =  115.815;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/62553f0e42a0cd1b7dda1a7d") {
      number = "5" ; //  khepri
	  power =  20;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a1f8238ed283a234324") {
      number = "10.1" ; //  khepri uncommon
	  power =  52.5;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce6889390251") {
      number = "15.5" ; // king of beast 
	  power =  50;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d2383") {
      number = "9.5" ; //  lava-box
	  power =  26;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d2382") {
      number = "7" ; //  lava-tomb
	  power =  35;
	  showV = true;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f78da8238ed283a233429") {
      number = "15.7" ; //  lava-tomb uncommon
	  power =  91.875;
	  percentuale = 0.79;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a28543b") {
      number = "0.3" ; //  leap
	  power =  0.001;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b268238ed283a234f54") {
      number = "2" ; //  leap uncommon
	  power =  0.1;
	  percentuale = 0.14;
	} else if (href === "/marketplace/buy/miner/64108bbc547cfab9a23562b7") {
      number = "73" ; //  leprecoin
	  power =  533.5;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/64424434547cfab9a2f5b450") {
      number = "67" ; //  leviathan
	  power =  618;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/62962764530f48a8e7b97156") {
      number = "23"; // lifebuoy 
	  power =  150;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/6422ee79b78c58eb24801eb7") {
      number = "15.4" ; //m-engine  
	  power =  188;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/63bffdd0d2e89bab14ff95ba") {
      number = "34" ; // m-rex
	  power =  314.1;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/63d8ffb0547cfab9a29e1566") {
      number = "50" ; // magma 
	  power =  210;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/62553d5642a0cd1b7dd3d7a3") {
      number = "23" ; //  mahakala
	  power =  120;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/63eb62ea547cfab9a29dbe0d") {
      number = "34" ; // mascarado 
	  power =  252;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/64491aaf547cfab9a2c64491") {
      number = "16.8" ; //  mega stallion
	  power =  166.5;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631b5619a775e04d9a28546b") {
      number = "0.08" ; // mergedge 
	  power =  3.825;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b6d8238ed283a2352a1") {
      number = "0.5" ; //  mergedge uncommon
	  power =  10.08;
	  showV = true;
	  percentuale = 0.14;
	} else if (href === "/marketplace/buy/miner/631f7b6e8238ed283a2352ae") {
      number = "1.6" ; //  mergedge rare
	  power =  23.46;
	  showV = true;
	  percentuale = 0.42;
	} else if (href === "/marketplace/buy/miner/646ddba0260e7d19c91846b9") {
      number = "0.17" ; // mergedge mk.I
	  power =  4.86;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/646de74209672fd5f06e22bd") {
      number = "0.6" ; //  mergedge mk.I uncommon
	  power =  12.81;
	  percentuale = 0.08;
	} else if (href === "/marketplace/buy/miner/646de74309672fd5f06e22cb") {
      number = "3.6" ; //  mergedge mk.I rare
	  power =  33.705;
	  percentuale = 0.2;  
	} else if (href === "/marketplace/buy/miner/646ddbed260e7d19c91846ba") {
      number = "0.3" ; // mergedge mk.IV
	  power =  6.45;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/646de74609672fd5f06e2303") {
      number = "1.28" ; //  mergedge mk.IV uncommon
	  power =  17.01;
	  percentuale = 0.08;
	} else if (href === "/marketplace/buy/miner/646de74609672fd5f06e2311") {
      number = "5.1" ; //  mergedge mk.IV rare
	  power =  44.73;
	  percentuale = 0.2;    
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e56d") {
      number = "2.4" ; //  merry dancer
	  power =  22.4;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c38c1c483a58f70e9e02") {
      number = "8.5" ; //  merry dancer uncommon
	  power =  58.8;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c38d1c483a58f70e9e10") {
      number = "28" ; //  merry dancer rare
	  power =  154.35;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/631b5619a775e04d9a285467") {
      number = "26" ; //  merry-go-round
	  power =  300;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b628238ed283a23521f") {
      number = "71" ; //  merry-go-round uncommon
	  power =  787.5;
	  showV = true;
	  percentuale = 1.04;
	} else if (href === "/marketplace/buy/miner/62553ed642a0cd1b7dd954b6") {
      number = "6.8" ; // mictlan 
	  power =  20;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a248238ed283a234365") {
      number = "10.5" ; //  mictlan uncommon
	  power =  52.5;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/60c9bbce65dce86c86c22a25") {
      number = "15" ; //  milly
	  power =  70;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/631f77c58238ed283a232777") {
      number = "35" ; // milly uncommon 
	  power =  183.75;
	  percentuale = 1.58;
	} else if (href === "/marketplace/buy/miner/60c9bc0965dce86c86c372fe") {
      number = "3.1" ; //  milly mini
	  power =  25;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f77ca8238ed283a2327b8") {
      number = "10.2" ; //  milly mini uncommon
	  power =  65.625;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/62962127530f48a8e79cf81f") {
      number = "4.4" ; //minesbass  
	  power =  50;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f7a618238ed283a234630") {
      number = "19.6" ; //minesbass uncommon  
	  power =  50;
	  percentuale = 0.5;  
	} else if (href === "/marketplace/buy/miner/62444f3642a0cd1b7d7fe748") {
      number = "22" ; // minellite.130
	  power =  130;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/624449f142a0cd1b7d693be8") {
      number = "0.4" ; //  minerzaurus
	  power =  0.001;
	  percentuale = 0.01;
	} else if (href === "/marketplace/buy/miner/631f79c18238ed283a233ed3") {
      number = "2" ; //  minerzaurus uncommon
	  power =  0.105;
	  percentuale = 0.01;
	} else if (href === "/marketplace/buy/miner/6436d756547cfab9a213fc9f") {
      number = "2.3" ; //  mission controll 321
	  power =  33;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6437cd96e3a7584658217885") {
      number = "10.2" ; //  mission controll 321 uncommon
	  power =  86.625;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6437cd97e3a7584658217893") {
      number = "35" ; //  mission controll 321 rare
	  power =  227.43;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/644243ce547cfab9a2f2a3db") {
      number = "4" ; //  monstrcrab
	  power =  45.5;
	  percentuale = 0.1;
	} else if (href === "/marketplace/buy/miner/62cc041881b1c8e6926cecf6") {
      number = "25" ; // mr.wilson 
	  power =  110;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77ee") {
      number = "10.6" ; //  mycellium
	  power =  35;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/641828e5547cfab9a2307e13") {
      number = "10.5" ; //  new beginns
	  power =  125;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/62f3c15081b1c8e6920a8e04") {
      number = "17" ; //  night shade
	  power =  189;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b168238ed283a234e91") {
      number = "41.4" ; //  night shade uncommon
	  power =  496.125;
	  percentuale = 0.65;
	} else if (href === "/marketplace/buy/miner/6422f238f1cff2d95bf745a3") {
      number = "5.2" ; //  nitro mine
	  power =  78.5;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6424129210f9251eee27d79b") {
      number = "22" ; //  nitro mine uncommon
	  power =  206.115;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/646ddc2d260e7d19c91846bb") {
      number = "31" ; //  noms
	  power =  260;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a28543f") {
      number = "23"; //  not-a-loss-cannon
	  power =  262.5;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b378238ed283a235017") {
      number = "68"; //  not-a-loss-cannon uncommon
	  power =  689.115;
	  percentuale = 0.91;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f8") {
      number = "1.5" //  nuc
	  power =  26;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f78c48238ed283a233325") {
      number = "7.4" ; //  nuc uncommon
	  power =  68.25;
	  showV = true;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f78c58238ed283a233332") {
      number = "19.4"; //  nuc rare
	  power =  179.235;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6463a05715a6792f949b49e7") {
      number = "2.1"; //  nuclemburg
	  power =  35.2;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6463a9d67982aa4292ea7660") {
      number = "9.6" ; // nuclemburg uncommon
	  power =  92.4;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/6463a9d77982aa4292ea7670") {
      number = "30" ; //  nuclemburg rare
	  power =  242.55;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77eb") {
      number = "21"; //  nucleus
	  power =  100;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/631606ee5b26a667f754eafb") {
      number = "4"; //  o mineiro
	  power =  59.97;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b218238ed283a234f13") {
      number = "20" ; //  o mineiro uncommon
	  power =  157.5;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/62a721219b5a37db46bb72b8") {
      number = "11" ; //  octominer
	  power =  25;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/62553ea742a0cd1b7dd8a09a") {
      number = "3.9" ; // ouroborus 
	  power =  40;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a2a8238ed283a2343a6") {
      number = "9.1" ; //ouroborus uncommon
	  power =  105;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d237e") {
      number = "18.2"; //  overgrown
	  power =  100;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/631f78e58238ed283a2334ab") {
      number = "29"; //  overgrown uncommon
	  power =  262.5;
	  showV = true;
	  percentuale = 1.58;
	} else if (href === "/marketplace/buy/miner/64108b75547cfab9a2334b56") {
      number = "33"; //  paddys pub
	  power =  276.5;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/62bac5d09b5a37db461f6ade") {
      number = "15.1"; //  palm beach
	  power =  75;
	  showV = true;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f7adb8238ed283a234bc6") {
      number = "40"; //  palm beach uncommon
	  power =  196.875;
	  percentuale = 0.79;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e2") {
      number = "72" ; //  paradox
	  power =  350;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/645231e67dd1aacd1ea9bd04") {
      number = "47"; //  pathoprobe 21
	  power =  442.8;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/62962355530f48a8e7a7062a") {
      number = "17.8"; // pearl-coin 
	  power =  100;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c30") {
      number = "108" ; //pencil-reroller
	  power =  1136;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/60c7444c65dce86c8661a2af") {
      number = "44"; //perfection
	  power =  400;
	  showV = true;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/62444c9142a0cd1b7d749f2a") {
      number = "1.4" ; //  petrolgiph
	  power =  25;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f79c78238ed283a233f14") {
      number = "6" ; //  petrolgiph uncommon
	  power =  65.625;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e4") {
      number = "21" ; // photon
	  power =  125;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/64230161b78c58eb24801ecf") {
      number = "84" ; //  pip-hamster
	  power =  862.1;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f49f54b63e9397b05b0f9") {
      number = "11.7"; //  pixiu
	  power =  135;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7ba78238ed283a23556c") {
      number = "38"; //  pixiu uncommon
	  power =  354.375;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fce") {
      number = "69" ; //  polar express
	  power =  270;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/6436d817547cfab9a2195c0c") {
      number = "81"; //  power patriot
	  power =  612;
	  showV = true;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/644bb225648294b4642f368d") {
      number = "0.02"; //  power symbol
	  power =  0.1;
	  percentuale = 0;  
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77ec") {
      number = "17"; //  prescilla
	  power =  100;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/6474a38830cd78b9cb76478d") {
      number = "55"; //  present box
	  power =  620.5;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/60c743d665dce86c865f2251") {
      number = "12.8"; //  prisma
	  power =  140;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fdf") {
      number = "3"; //  purlple snowfak
	  power =  10;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f79488238ed283a23393d") {
      number = "6.5" ; //  purple snofk uncommon
	  power =  26.25;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e565") {
      number = "87"; //  queen of spin
	  power =  862.1;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/645231427dd1aacd1ea9bd02") {
      number = "8.6" ; //  radexfiltration 98
	  power =  107.5;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/645249108953173292548ed5") {
      number = "28.7"; //  radexfiltration 98 uncommon
	  power =  282.24;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c28") {
      number = "1.1"; //  radio gaga
	  power =  15.4;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3381c483a58f70e995c") {
      number = "5.2"; //  radio gaga uncommon
	  power =  40.425;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c3391c483a58f70e996a") {
      number = "18.7"; //  radio gaga rare
	  power =  106.155;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/6399c33c1c483a58f70e9978") {
      number = "46" ; //  radio gaga epic
	  power =  278.67;
	  percentuale = 2.08;
	} else if (href === "/marketplace/buy/miner/631b561ba775e04d9a285490") {
      number = "6" ; //  rainbow fairy
	  power =  89.6;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b7d8238ed283a235364") {
      number = "23.1"; //  rainbow fairy uncommon
	  power =  235.2;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7b7e8238ed283a235371") {
      number = "70" ; //  rainbow fairy rare
	  power =  617.4;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/62444e4f42a0cd1b7d7bce01") {
      number = "11.5"; // ramesess II 
	  power =  65;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/629616e8530f48a8e76de5e4") {
      number = "0.2"; //  raver crab
	  power =  0.001;
	  percentuale = 0.01;
	} else if (href === "/marketplace/buy/miner/631f7a518238ed283a23456d") {
      number = "1.5"; //  raver crab uncommon
	  power =  0.105;
	  percentuale = 0.01;
	} else if (href === "/marketplace/buy/miner/631f7a528238ed283a23457a") {
      number = "8" ; // raver crab rare 
	  power =  0.315;
	  percentuale = 0.01;
	} else if (href === "/marketplace/buy/miner/646ca2f20134dd538d6797eb") {
      number = "3"; // rebirth rover 
	  power =  44;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/646cc84775d80c24695df9b2") {
      number = "12.3" ; // rebirth rover uncommon
	  power =  115.5;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/646cc84875d80c24695df9c2") {
      number = "34" ; // rebirth rover rare
	  power =  303.24;
	  percentuale = 1; 
	} else if (href === "/marketplace/buy/miner/646ca46a0134dd538d6797ed") {
      number = "17.8"; // renewal runner 
	  power =  210.5;
	  percentuale = 0;  
	} else if (href === "/marketplace/buy/miner/611e27d8bf6b53744cbf488c") {
      number = "16.5"; // retro night 
	  power =  95;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/631f78258238ed283a232bc8") {
      number = "37" ; // retro night uncommon
	  power =  249.375;
	  percentuale = 2.1;
	} else if (href === "/marketplace/buy/miner/61bb6126698d2f88e80c774b") {
      number = "45" ; // retro night x 
	  power =  285;
	  showV = true;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/63e6140d547cfab9a27b449c") {
      number = "75" ; //  richard lindon 
	  power =  620;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/62444e8a42a0cd1b7d7ccef3") {
      number = "12.4" ; // richies castle 
	  power =  80;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/64491ae0547cfab9a2c7b2e1") {
      number = "53" ; // road trip to hell
	  power =  482.4;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/62444ec242a0cd1b7d7dc2b0") {
      number = "18.2"; // roller industries 
	  power =  120;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fe5") {
      number = "0.03"; //  rollerarcs1
	  power =  0.15;
	  showV = true;
	  percentuale = 0.1;
	} else if (href === "/marketplace/buy/miner/631f79648238ed283a233a82") {
      number = "0.03"; //  rollerarcs1 uncommon
	  power =  0.42;
	  showV = true;
	  percentuale = 0.11;
	} else if (href === "/marketplace/buy/miner/61bb6127698d2f88e80c7781") {
      number = "0.07" ; // rollerarcs1 x
	  power =  0.45;
	  showV = true;
	  percentuale = 0.15;
	} else if (href === "/marketplace/buy/miner/631f79658238ed283a233a8f") {
      number = "0.1"; // rollerarcs1 rare 
	  power =  1.155;
	  showV = true;
	  percentuale = 0.11;
	} else if (href === "/marketplace/buy/miner/631f79668238ed283a233a9c") {
      number = "0.18"; //  rollerarcs1 epic
	  power =  3.045;
	  showV = true;
	  percentuale = 0.12;
	} else if (href === "/marketplace/buy/miner/631f79678238ed283a233aa9") {
      number = "2.3"; //  rollerarcs1 legendary
	  power =  8.805;
	  percentuale = 0.12;
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fe4") {
      number = "1.6"; // rollerarcsx
	  power =  1;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/61bb6127698d2f88e80c7780") {
      number = "10 "; //  rollerarcsx x
	  power =  3;
	  showV = true;
	  percentuale = 1.5;
	} else if (href === "/marketplace/buy/miner/631f79698238ed283a233ac3") {
      number = "5" ; //  rollerarcsx uncommon
	  power =  2.625;
	  showV = true;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/631f796a8238ed283a233ad0") {
      number = "12.5" ; // rollerarcsx rare 
	  power =  6.93;
	  percentuale = 1.1;
	} else if (href === "/marketplace/buy/miner/61e7ff8aa258d581601dca8e") {
      number = "100"; // rollerfamily
	  power =  800;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/5a0b08b3d1d9ee5894f36f34") {
      number = "3.6"; // rollerfury b8  
	  power =  19.3;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f77568238ed283a232261") {
      number = "10.1"; // rollerfury b8  uncommon
	  power =  50.715;
	  percentuale = 1.05;  
	} else if (href === "/marketplace/buy/miner/62447dd842a0cd1b7d33b139") {
      number = "69" ; // rollerfuture 
	  power =  500;
	  showV = true;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/646ddb26260e7d19c91846b8") {
      number = "0.18"; //  rollerminer g1
	  power =  3.5;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/646de73e09672fd5f06e2275") {
      number = "0.95"; //  rollerminer g1 uncommon
	  power =  9.24;
	  percentuale = 0.08;
	} else if (href === "/marketplace/buy/miner/646de73f09672fd5f06e2285") {
      number = "3.5"; // rollerminer g1 rare
	  power =  24.255;
	  percentuale = 0.2;
	} else if (href === "/marketplace/buy/miner/5a0b08abd1d9ee5894f36f30") {
      number = "0.3" ; //  rollerminer r4
	  power =  6;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/61bb6125698d2f88e80c7738") {
      number = "3.8" ; // rollerminer r4x 
	  power =  18;
	  showV = true;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f776c8238ed283a232367") {
      number = "1.7" ; // rollerminer r4 uncommon
	  power =  15.75;
	  showV = true;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/59f05bdda8fa9b726b0742ca") {
      number = "0.14 " ; // rollerminer s4 
	  power =  1.16;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f77828238ed283a23246b") {
      number = "0.35"; // rollerminer s4 uncommon 
	  power =  3.045;
	  showV = true;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/61bb6125698d2f88e80c7746") {
      number = "1.47"; // rollerminer s4 x  
	  power =  3.48;
	  showV = true;
	  percentuale = 0.37;
	} else if (href === "/marketplace/buy/miner/631f77838238ed283a232478") {
      number = "1" ; // rollerminer s4 rare
	  power =  8.085;
	  showV = true;
	  percentuale = 0.28;
	} else if (href === "/marketplace/buy/miner/631f77848238ed283a232485") {
      number = "4.6" ; //  rollerminer s4 epic
	  power =  21.315;
	  percentuale = 0.29;
	} else if (href === "/marketplace/buy/miner/5a0b08a9d1d9ee5894f36f2f") {
      number = "0.3"; // rollerminer s5+ 
	  power =  4;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f77728238ed283a2323a8") {
      number = "0.95" ; //  rollerminer s5+ uncommon
	  power =  10.5;
	  showV = true;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/61bb6125698d2f88e80c773f") {
      number = "3.4" ; // rollerminer s5+x
	  power =  12;
	  showV = true;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f77738238ed283a2323b5") {
      number = "4.3" ; // rollerm s5+ rare 
	  power =  27.615;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/5a0b022dd1d9ee5894f36f2d") {
      number = "0.05"; //  rollerminer s7
	  power =  1.32;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f777d8238ed283a23242a") {
      number = "0.12"; //  rollerminer s7 uncommon
	  power =  3.465;
	  showV = true;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/631f777e8238ed283a232437") {
      number = "0.62"; // rollerminer s7 rare
	  power =  9.135;
	  showV = true;
	  percentuale = 0.28;
	} else if (href === "/marketplace/buy/miner/631f777f8238ed283a232444") {
      number = "3" ; //  rollerminer s7 epic
	  power =  24.045;
	  percentuale = 0.29;
	} else if (href === "/marketplace/buy/miner/61bb6125698d2f88e80c7745") {
      number = "1.74"; // rollerminer s7x 
	  power =  3.96;
	  showV = true;
	  percentuale = 0.37;
	} else if (href === "/marketplace/buy/miner/5a0b08b0d1d9ee5894f36f32") {
      number = "2.4" ; // rollerminer s9 
	  power =  14.5;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f77628238ed283a2322e5") {
      number = "7.14"; // rollerminer s9 uncommon
	  power =  38.115;
	  showV = true;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/5a0b08a7d1d9ee5894f36f2e") {
      number = "0.12"; // rolleron 741 
	  power =  2.73;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f77778238ed283a2323e9") {
      number = "0.7"; // rolleron 741 uncommon 
	  power =  7.245;
	  showV = true;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/631f77788238ed283a2323f6") {
      number = "3.2 " ; //  rolleron 741 rare
	  power =  19.11;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/61bb6125698d2f88e80c7744") {
      number = "7" ; // rolleron 741 x
	  power =  8.19;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f77798238ed283a232403") {
      number = "11"; //  rolleron 741 epic
	  power =  50.19;
	  percentuale = 0.58;
	} else if (href === "/marketplace/buy/miner/5a0b08afd1d9ee5894f36f31") {
      number = "5.3"; // rolleron miner 761 
	  power =  6.5;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f77678238ed283a232326") {
      number = "10" ; // rolleron miner 761 uncommon 
	  power =  17.115;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/62b0696e9b5a37db461b478b") {
      number = "10.2"; // rollerpride s9+
	  power =  50;
	  showV = true;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/631f7ad08238ed283a234b44") {
      number = "21" ; //  rollerpride s9+ uncommon
	  power =  131.25;
	  percentuale = 0.79;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a285442") {
      number = "5.6" ; // rollershow 
	  power =  90;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b478238ed283a2350da") {
      number = "25"; //  rollershow uncommon
	  power =  236.25;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/63a5ae7784f0c13b2e30d554") {
      number = "13.9"; // rollingdoll house
	  power =  82.023;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/63a5b487df88579b4157b937") {
      number = "24" ; //  rollingdoll house uncommon
	  power =  215.355;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e569") {
      number = "3.4" ; // roy and silo 
	  power =  48;
	  showV = true;
	  percentuale = 0; 
	} else if (href === "/marketplace/buy/miner/6399c3761c483a58f70e9cea") {
      number = "13.8"; //  roy and silo uncommon
	  power =  126;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6422f238f1cff2d95bf745a1") {
      number = "1.05" ; // rpminer
	  power =  15.4;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6424128610f9251eee27d70b") {
      number = "5.6" ; //  rpminer uncommon
	  power =  40.42;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6424128710f9251eee27d71d") {
      number = "20.4"; //  rpminer rare
	  power =  106.155;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/64491a76547cfab9a2c49655") {
      number = "5.1"; // rust runner 
	  power =  64.6;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/64492affa84fda7c28288f0b") {
      number = "15.2"; // rust runner uncommon
	  power =  169.575;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/62962194530f48a8e79ef9b8") {
      number = "10.5 " ; //  sandys castle
	  power =  65;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/5fd9ea94101f34db22cee8da") {
      number = "31.7"; // santa sleigh 
	  power =  160;
	  showV = true;
	  percentuale = 2.50;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fca") {
      number = "60" ; // santa flyer 
	  power =  250;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/62447d7842a0cd1b7d324dcf") {
      number = "43" ; // saturn6
	  power =  300;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/5e2ee460041b386e78b97c28") {
      number = "1.36"; // scarabey
	  power =  8;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f77938238ed283a23252e") {
      number = "4.4" ; //  scarabey uncommon
	  power =  18.48;
	  showV = true;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/631f77948238ed283a23253b") {
      number = "13" ; //  scarabey rare
	  power =  55.125;
	  percentuale = 1.1;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e5") {
      number = "8.1" ; //  serenity
	  power =  30;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/63ca6f1d547cfab9a2c51bc2") {
      number = "7" ; // shaolin temple
	  power =  112.85;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/63ca8f60a882e7a24995ca92") {
      number = "8.7" ; // shaolin temple uncommon
	  power =  296.31;
	  percentuale = 0.55;  
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77ef") {
      number = "10.3"; // shifter
	  power =  40;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f78b98238ed283a2332a3") {
      number = "17.9"; //  shifter uncommon
	  power =  105;
	  showV = true;
	  percentuale = 1.05;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f4") {
      number = "1.4" ; //  shrume
	  power =  22;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f78988238ed283a23311d") {
      number = "6.7" ; // shrummee uncommon  
	  power =  57.75;
	  showV = true;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/642300dfb78c58eb24801ecd") {
      number = "16.35"; // skullnfire
	  power =  199.5;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/645b8a87eccd3c43207474ce") {
      number = "1.3" ; // smelt smith
	  power =  21;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/645b981d7f78e084daf911d1") {
      number = "5.4" ; //  smelt smith uncommon
	  power =  55.125;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/645b981e7f78e084daf911e3") {
      number = "19.2"; //  smelt smit rare
	  power =  144.795;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/6422f238f1cff2d95bf745a2") {
      number = "1.97 "; //  smokin hotrod
	  power =  36.3;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6424128c10f9251eee27d755") {
      number = "11.4" ; // smokin hotrod uncommon
	  power =  95.34;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e56a") {
      number = "2.8" ; // snowster 900
	  power =  35.4;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c37b1c483a58f70e9d30") {
      number = "12.3 "; // snowster 900 uncommon 
	  power =  92.925;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fd1") {
      number = "12.5" ; //  snowy blowy
	  power =  65;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/622f4123a258d58160a2f1ce") {
      number = "14.5"; //  sovereignty
	  power =  50;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/6474a38830cd78b9cb76478e") {
      number = "33.7" ; //  sonic engegner
	  power =  332.5;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6474b318cee923ae67791ccf") {
      number = "95"; //  sonic engegner uncommon
	  power =  872.865;
	  percentuale = 1.18;  
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fe1") {
      number = "3"; // sparklight 
	  power =  10;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/646ddc82260e7d19c91846bd") {
      number = "33.6"; // sparky
	  power =  260;
	  percentuale = 1;  
	} else if (href === "/marketplace/buy/miner/629627d7530f48a8e7bb8f61") {
      number = "65" ; // speedster
	  power =  550;
	  showV = true;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/611e2995bf6b53744cc8cf63") {
      number = "38.6"; //  starground
	  power =  210;
	  showV = true;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/644bb270648294b4642f368e") {
      number = "0.05 "; //  star symbol
	  power =  0.1;
	  percentuale = 0;  
	} else if (href === "/marketplace/buy/miner/611e2b04bf6b53744cd0c093") {
      number = "57" ; //steamwheedle  
	  power =  360;
	  showV = true;
	  percentuale = 3.50;
	} else if (href === "/marketplace/buy/miner/62a721f19b5a37db46bf9780") {
      number = "1.8"; //  subminer
	  power =  15;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a988238ed283a2348ba") {
      number = "5.4"; // subminer un
	  power =  39.375;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/62bac64c9b5a37db46221d7e") {
      number = "99"; //sugarmelon 
	  power =  750;
	  percentuale = 4;
	} else if (href === "/marketplace/buy/miner/62bac60c9b5a37db4620b95a") {
      number = "47" ; //  sunset beach
	  power =  350;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/611d2605bf6b53744c49e333") {
      number = "20.5" ; // sunset city 
	  power =  95;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e7") {
      number = "14"; //  survivor
	  power =  75;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e56b") {
      number = "2"; // sweets stelar
	  power =  23.2;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3811c483a58f70e9d76") {
      number = "10.3"; // sweets stelar un
	  power =  60.9;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c3821c483a58f70e9d84") {
      number = "29" ; //  sweets stelar rare
	  power =  159.915;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/63eb6320547cfab9a29ef912") {
      number = "61"; //  tamborim
	  power =  452;
	  showV = true;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c2e") {
      number = "14"; // tapesde a 
	  power =  188;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3561c483a58f70e9b00") {
      number = "52" ; // tapesade a uncommon
	  power =  493.5;
	  percentuale = 0.65;
	} else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c2f") {
      number = "38.5"; // tapesade b
	  power =  418;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/610a9a96bf6b53744c845ba0") {
      number = "4.3" ; //  tapeboy
	  power =  12.2;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/610a9b67bf6b53744c890647") {
      number = "15"; //tapeman  
	  power =  25.6;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a285440") {
      number = "5.1"; // target floof 
	  power =  56;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b4c8238ed283a23511b") {
      number = "18" ; // target floof uncommon
	  power =  147;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631b5619a775e04d9a285463") {
      number = "60" ; // the big top
	  power =  640;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/62553dd842a0cd1b7dd592eb") {
      number = "5.3" ; //  the black pearl
	  power =  50;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f7a358238ed283a234428") {
      number = "15.3"; //  the black pearl uncommon
	  power =  131.25;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d2381") {
      number = "18.9" ; // the blubber 
	  power =  35;
	  percentuale = 0.75;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d2384") {
      number = "9.4"; // the blup
	  power =  26;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fc9") {
      number = "84" ; // the chrismats eve
	  power =  400;
	  showV = true;
	  percentuale = 5;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77ea") {
      number = "16"; //  the creeper
	  power =  90;
	  showV = true;
	  percentuale = 1.50;
	} else if (href === "/marketplace/buy/miner/61b9cce178d63d64cd626fd2") {
      number = "12.4" ; //  the evergreeen
	  power =  60;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/631f79378238ed283a23387a") {
      number = "22" ; //  the evergreeen uncommon
	  power =  157.5;
	  percentuale = 1.05;  
	} else if (href === "/marketplace/buy/miner/60c7438d65dce86c865da09e") {
      number = "4" ; //  the glimpse
	  power =  50;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a28543a") {
      number = "15.5"; // the golden ticket
	  power =  162.5;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b3c8238ed283a235058") {
      number = "42" ; // the golden ticket uncommon
	  power =  426.615;
	  percentuale = 0.57;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77e8") {
      number = "48"; //  the icarus
	  power =  225;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f3") {
      number = "15"; //  the krank
	  power =  60;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/6255406042a0cd1b7dde6824") {
      number = "4.2" ; //  the leyak
	  power =  20;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d2385") {
      number = "6.8" ; // the lush
	  power =  24;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e566") {
      number = "17.1"; // the minercraker
	  power =  199.5;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3691c483a58f70e9c18") {
      number = "54.3" ; // the minercraker uncommon 
	  power =  523.74;
	  percentuale = 0.7;
	} else if (href === "/marketplace/buy/miner/62553d7b42a0cd1b7dd45438") {
      number = "13"; // the minertaur 
	  power =  100;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77ed") {
      number = "95" ; //  the nemesis
	  power =  450;
	  showV = true;
	  percentuale = 5;
	} else if (href === "/marketplace/buy/miner/62444dee42a0cd1b7d7a2222") {
      number = "2.3"; // the sacrifice
	  power =  35;
	  showV = true;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f79cc8238ed283a233f55") {
      number = "9.7"; // the sacrifice uncommon
	  power =  91.875;
	  showV = true;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a28543e") {
      number = "2.96"; // the savantron
	  power =  27;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b528238ed283a23515c") {
      number = "12.8"; //  the savantron uncommon
	  power =  70.875;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631b5617a775e04d9a28543c") {
      number = "1.9" ; // the thrill rider 
	  power =  13;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b578238ed283a23519d") {
      number = "6.6"; //  ttr uncommon
	  power =  30.03;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7b588238ed283a2351aa") {
      number = "25.2" ; // ttr rare
	  power =  72.135;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/62a71f559b5a37db46b18caa") {
      number = "7.8" ; // trapped
	  power =  55;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/61532146db5008102f9f77f2") {
      number = "17.5"; //  the womb
	  power =  60;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/62444ef542a0cd1b7d7eaee4") {
      number = "23"; //  think tronik
	  power =  180;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/64230073b78c58eb24801ecb") {
      number = "7.3" ; //  thunderdome tinkerer
	  power =  92.4;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/642412ce10f9251eee27db6f") {
      number = "35"; // thunderdome tinkerer uncommon
	  power =  242.55;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fdd") {
      number = "6"; // tinsel town
	  power =  22.5;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d237d") {
      number = "82" ; //  tlm2000
	  power =  450;
	  percentuale = 5;
	} else if (href === "/marketplace/buy/miner/629618ca530f48a8e77652ef") {
      number = "5.9" ; // token surf 
	  power =  35;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/631f7a5b8238ed283a2345ef") {
      number = "13"; //  token surf uncommon
	  power =  91.875;
	  percentuale = 0.26;
	} else if (href === "/marketplace/buy/miner/6422ff13b78c58eb24801ec5") {
      number = "3.2" ; // toxic crusarder
	  power =  35.4;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/642412c010f9251eee27da9d") {
      number = "14.2"; // tocix crusaredr uncommon
	  power =  92.925;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/645230ae7dd1aacd1ea9bd00") {
      number = "1.3"; // toxifilter 
	  power =  16;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/645249088953173292548e47") {
      number = "5.5" ; //  toxifilter uncommon
	  power =  42;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/645249088953173292548e57") {
      number = "21.4"; //  toxifilter rare
	  power =  110.25;
	  showV = true;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/63ca82bf547cfab9a2426a98") {
      number = "32"; // tu nian
	  power =  339.15;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/62a721b59b5a37db46be6dc2") {
      number = "6.9" ; // turtlecoin
	  power =  20;
	  percentuale = 0.25;
	} else if (href === "/marketplace/buy/miner/6422f238f1cff2d95bf745a4") {
      number = "7.8" ; //  twin tire driller 
	  power =  114;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6422f238f1cff2d95bf745a4") {
      number = "28.8" ; //  twin tire driller  uncommon
	  power =  299.25;
	  percentuale = 0.55;  
	} else if (href === "/marketplace/buy/miner/610a9c19bf6b53744c8d085b") {
      number = "7.3"; //  type-z
	  power =  38;
	  showV = true;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/62a71ea19b5a37db46ada4d4") {
      number = "20" ; // umigame  
	  power =  130;
	  percentuale = 1;
	} else if (href === "/marketplace/buy/miner/611e222abf6b53744ca040a2") {
      number = "20"; // underwater
	  power =  95;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/637413185247b3b892186e12") {
      number = "26.3" ; // unicorn dancer
	  power =  303.6;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6244499b42a0cd1b7d67ca1e") {
      number = "5.3" ; // uniminer-42
	  power =  50;
	  showV = true;
	  percentuale = 0.5;  
	} else if (href === "/marketplace/buy/miner/622f42d9a258d58160aadb92") {
      number = "13.8" ; // unity 
	  power =  50;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/63bffdd0d2e89bab14ff95b9") {
      number = "3.8" ; //  velociminer
	  power =  38.75;
	  showV = true;
	  percentuale = 0.1;
	} else if (href === "/marketplace/buy/miner/63c013498606868c5f34794e") {
      number = "14.5" ; //  velociminer uncommon
	  power =  101.745;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c2c") {
      number = "11.1" ; // vinylla78
	  power =  152.55;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c34d1c483a58f70e9a74") {
      number = "38" ; // vinylla 78 uncommon
	  power =  400.47;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631b5619a775e04d9a285471") {
      number = "2.6"; //  vyzzaris
	  power =  22.4;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/631f7b978238ed283a2354a9") {
      number = "14.3" ; //  vyzzaris uncommon
	  power =  58.8;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/631f7b988238ed283a2354b6") {
      number = "35"; //  vyzzaris rare 
	  power =  154.35;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/6436d7ec547cfab9a2182d27") {
      number = "54" ; // washingtonian
	  power =  448;
	  showV = true;
	  percentuale = 2;
	} else if (href === "/marketplace/buy/miner/6296220a530f48a8e7a12a18") {
      number = "12" ; // watersoaker 
	  power =  85;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/6398e9e195b70ff678b1e56c") {
      number = "1.8" ; // white christmat 
	  power =  22.8;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3861c483a58f70e9dbc") {
      number = "9.7" ; //  white chrismat uncommon
	  power =  59.85;
	  showV = true;
	  percentuale = 0.55;
	} else if (href === "/marketplace/buy/miner/6399c3871c483a58f70e9dca") {
      number = "30" ; // white christmat rare
	  power =  157.185;
	  percentuale = 1.66;
	} else if (href === "/marketplace/buy/miner/61b9cce478d63d64cd626fe2") {
      number = "5.6" ; //  wishing bell
	  power =  20;
	  showV = true;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/631f79538238ed283a2339bf") {
      number = "10.5" ; // wishing bell uncommon
	  power =  52.5;
	  percentuale = 0.53;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d2386") {
      number = "3.7"; // xlz01
	  power =  22;
	  percentuale = 0.5;
	} else if (href === "/marketplace/buy/miner/618d1dda8f5ef2744b7d237f") {
      number = "25"; // xlz1 
	  power =  100;
	  percentuale = 1.5;
	} else if (href === "/marketplace/buy/miner/61f9356a8b46ce688939024d") {
      number = "55" ; //  yrllow imperor
	  power =  200;
	  percentuale = 3;
	} else if (href === "/marketplace/buy/miner/63930d86380ccf549d7f5c2b") {
      number = "8.9" ; //  ymca
	  power =  114;
	  showV = true;
	  percentuale = 0;
	} else if (href === "/marketplace/buy/miner/6399c3481c483a58f70e9a2e") {
      number = "25"; // ymca uncommon	   
	  power =  299.25;
	  showV = true;
	  percentuale = 0.55;
    }
  

    if (number) {
      var priceElement = element.querySelector("p.item-price");
      var priceValue = parseFloat(priceElement.innerText.replace("$", ""));
      var discountedNumber = parseFloat(number) * (1 - 0.08); // Applica lo sconto dell'8%
      var differencePercent = ((priceValue - discountedNumber) / discountedNumber) * 100;
      var ratio = power !== 0 ? (power + ((222.37 + percentuale) * power / 100) + ((percentuale * (29537 + power) /100 ))) / priceValue : 0;
      foundElements.push({ element: element, number: discountedNumber, price: priceValue, power: power, percentuale: percentuale, ratio: ratio, showV: showV, differencePercent: differencePercent });
    }
  }

  if (foundElements.length > 0) {
    appendNumberLabels(foundElements);
  }
}

function showMessage(message) {
  var existingMessage = document.querySelector(".status-message");
  if (existingMessage) {
    existingMessage.innerText = message;
  } else {
    var div = document.createElement("div");
    div.classList.add("status-message");
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.backgroundColor = "green";
    div.style.color = "white";
    div.style.padding = "10px";
    div.innerText = message;
    document.body.appendChild(div);
  }
}

function appendNumberLabels(elements) {
  var existingLabels = document.querySelectorAll(".number-label, .power-label, .difference-label, .v-label");
  existingLabels.forEach(function (label) {
    label.remove();
  });

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i].element;
    var number = elements[i].number;
    var price = elements[i].price;
    var power = elements[i].power;
    var ratio = elements[i].ratio;
    var percentuale = elements[i].percentuale;
	var showV = elements[i].showV;
    var differencePercent = elements[i].differencePercent;
    

    var numberLabel = document.createElement("span");
    numberLabel.classList.add("number-label");
    numberLabel.style.padding = "3px";

    if (price < parseFloat(number)) {
      numberLabel.style.backgroundColor = "green";
      numberLabel.style.color = "white";
    } else {
      numberLabel.style.backgroundColor = "red";
      numberLabel.style.color = "white";
    }

    numberLabel.innerText = number.toFixed(2); // Mostra il numero con due decimali
    element.appendChild(numberLabel);

    if (power !== 0) {
      var powerLabel = document.createElement("span");
      powerLabel.classList.add("power-label");
      powerLabel.style.padding = "3px";
      
      if (ratio < 30) {
        powerLabel.style.backgroundColor = "red";
      } else if (ratio >= 30 && ratio <= 40) {
        powerLabel.style.backgroundColor = "blue";
      } else {
        powerLabel.style.backgroundColor = "green";
      }
      
      powerLabel.style.color = "white";
      powerLabel.innerText = ratio.toFixed(2); // Mostra il rapporto con due decimali
      element.appendChild(powerLabel);
    }

    var differenceLabel = document.createElement("span");
    differenceLabel.classList.add("difference-label");
    differenceLabel.style.padding = "3px";
    
    if (differencePercent > 30) {
      differenceLabel.style.backgroundColor = "black";
    } else {
      differenceLabel.style.backgroundColor = "purple";
    }
    
    differenceLabel.style.color = "white";
    differenceLabel.innerText = differencePercent.toFixed(2) + "%";
    element.appendChild(differenceLabel);

    if (showV) {
      var vLabel = document.createElement("span");
      vLabel.classList.add("v-label");
      vLabel.style.padding = "3px";
      vLabel.style.backgroundColor = "yellow";
      vLabel.style.color = "white";
      vLabel.innerText = "x";
      element.appendChild(vLabel);
    }
  }
}

setInterval(checkForElements, 1000);