function initMap() {

    // Brande starts here
    var denmark = {lat: 56.1780842, lng: 10.1117596};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: denmark
    });

    // Custom Icons for map markers
    var dmcuIcon = 'img/dmcu.png';

    // Brande starts here
    var brandeContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var brandeInfo = new google.maps.InfoWindow({
        content: brandeContent
    });

    var brande = new google.maps.Marker({
        position: {lat: -20.363, lng: 111.044},
        map: map
    });

    brande.addListener('click', function() {
        brandeInfo.open(map, brande);
    });
    // Brande ends here

    // Hampen starts here
    var hampenContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Hampen Motocross Club</h1>'+
        '<h3 id="" class="">Åbningstider:</h3>'+
        '<p id="" class=""><b>Tirsdag:</b> fra kl. 16.00 til 20.00</p>'+
        '<p id="" class=""><b>Lørdag:</b> fra kl. 11.00 til 15.00</p>'+
        '<p id="" class=""><b>Adresse:</b> 18 Møllebakken, Møllebakken 21, 7361 Ejstrupholm</p>'+
        '<p id="" class=""><b>Hjemmeside:</b> <a href="http://www.hampenmx.dk/">www.hampenmx.dk/</a></p>'+
        '<div id="bodyContent">'+
        '<p>Hampen banen har fast åben tirsdag og lørdag i tidsrummet fra den 01 marts til den 15 november.</p>' +
        '<p>Træningen er som udgangspunkt altid opdelt.</p>' +
        '<p>Træningenstiden kan variere fra 20min til 30min alt efter dagen..</p>'+
        '</div>'+
        '</div>';

    var hampenInfo = new google.maps.InfoWindow({
        content: hampenContent
    });

    var hampen = new google.maps.Marker({
        position: {lat: 56.0367091, lng: 9.3439831},
        map: map,
        icon: dmcuIcon
    });

    hampen.addListener('click', function() {
        hampenInfo.open(map, hampen);
    });
    // Hampen ends here

    // Billund starts here
    var billundContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Billund Moto Cross Klub</h1>'+
        '<h3 id="" class="">Åbningstider:</h3>'+
        '<p id="" class=""><b>Onsdag:</b> kl.17.00 til kl.20.00 Når vi har sommertid.</p>'+
        '<p id="" class=""><b>Lørdag:</b> kl.10.00 til kl.15.00 Hele året når vejret tillader det.</p>'+
        '<p id="" class=""><b>Adresse:</b> Elkærskovvej 3, 7190 Billund</p>'+
        '<p id="" class=""><b>Hjemmeside:</b> <a href="http://www.billundmotocross.dk">www.billundmotocross.dk</a></p>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

    var billundInfo = new google.maps.InfoWindow({
        content: billundContent
    });

    var billund = new google.maps.Marker({
        position: {lat: 55.7537097, lng: 9.0827839},
        map: map,
        icon: dmcuIcon
    });

    billund.addListener('click', function() {
        billundInfo.open(map, billund);
    });
    // billund ends here

    // grena starts here
    var grenaContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Grenå Moto Cross Klub</h1>'+
        '<h3 id="" class="">Åbningstider:</h3>'+
        '<p id="" class=""><b>Onsdag sommertid:</b> kl. 16.30 - 20.00</p>'+
        '<p id="" class=""><b>Lørdag sommertid:</b> kl. 12.30 - 17.00</p>'+
        '<p id="" class=""><b>Lørdag vintertid:</b> kl. 12.30 - 17.00</p>'+
        '<p id="" class=""><b>Adresse:</b> Næsgårdvej 7 - 8500 Grenaa</p>'+
        '<p id="" class=""><b>Hjemmeside:</b> <a href="http://www.gmck.klub-modul.dk">www.gmck.klub-modul.dk</a></p>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

    var grenaInfo = new google.maps.InfoWindow({
        content: grenaContent
    });

    var grena = new google.maps.Marker({
        position: {lat: 56.409533, lng: 10.8477563},
        map: map,
        icon: dmcuIcon,
        category: 'dmcu'
    });

    grena.addListener('click', function() {
        grenaInfo.open(map, grena);
    });
    // grena ends here

    // grimhoj starts here
    var grimhojContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Grimhøj Motocross Klub</h1>'+
        '<h3 id="" class="">Åbningstider:</h3>'+
        '<p id="" class="">Åbningstider skifter per uge, tjek hjemmeside.</p>'+
        '<p id="" class=""><b>Hjemmeside:</b> <a href="http://grimhoej.dk">www.grimhoej.dk</a></p>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

    var grimhojInfo = new google.maps.InfoWindow({
        content: grimhojContent
    });

    var grimhoj = new google.maps.Marker({
        position: {lat: 56.167197, lng: 10.1220323},
        map: map,
        icon: dmcuIcon,
        category: 'dmcu'
    });

    grimhoj.addListener('click', function() {
        grimhojInfo.open(map, grimhoj);
    });
    // grimhoj ends here

    // lindknud starts here
    var lindknudContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Lindknud Moto Cross Klub</h1>'+
        '<h3 id="" class="">Åbningstider:</h3>'+
        '<p id="" class=""><b>Tirsdag:</b> 17:00 til 21:00 (i sommertiden)</p>'+
        '<p id="" class=""><b>Lørdag:</b> 11:00 til 15:00</p>'+
        '<p id="" class=""><b>Adresse:</b> Hyldelundvej 9, 6650 Brørup</p>'+
        '<p id="" class=""><b>Hjemmeside:</b> <a href="http://lindknudmotocross.dk">www.lindknudmotocross.dk</a></p>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

    var lindknudInfo = new google.maps.InfoWindow({
        content: lindknudContent
    });

    var lindknud = new google.maps.Marker({
        position: {lat: 55.576422, lng: 8.9812484},
        map: map,
        icon: dmcuIcon,
        category: 'dmcu'
    });

    lindknud.addListener('click', function() {
        lindknudInfo.open(map, lindknud);
    });
    // lindknud ends here

    // mols starts here
    var molsContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Mols Cross Club</h1>'+
        '<h3 id="" class="">Åbningstider:</h3>'+
        '<p id="" class=""><b>Onsdag sommertid:</b> 17.00 til 20.00</p>'+
        '<p id="" class=""><b>Lørdag sommertid:</b> 10.30 til 14.00</p>'+
        '<p id="" class=""><b>Onsdag vintertid:</b> 16.00 til 19.00 (fra 1. marts - 31 marts)</p>'+
        '<p id="" class=""><b>Lørdag vintertid:</b> 10.30 til 14.00</p>'+
        '<p id="" class=""><b>Adresse:</b> Mols Bjergevej 8A, Basballe, 8400 Ebeltoft</p>'+
        '<p id="" class=""><b>Hjemmeside:</b> <a href="http://www.molscross.dk">www.molscross.dk</a></p>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

    var molsInfo = new google.maps.InfoWindow({
        content: molsContent
    });

    var mols = new google.maps.Marker({
        position: {lat: 56.2428031, lng: 10.5590672},
        map: map,
        icon: dmcuIcon,
        category: 'dmcu'
    });

    mols.addListener('click', function() {
        molsInfo.open(map, mols);
    });
    // mols ends here

    // rougso starts here
    var rougsoContent = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Rougsø Cross Club</h1>'+
        '<h3 id="" class="">Åbningstider:</h3>'+
        '<p id="" class=""><b>Tirsdag 1. april til 30. september:</b> 16.00 - 19.00</p>'+
        '<p id="" class=""><b>Lørdag 1. april til 30. september:</b> 10.30 - 14.00</p>'+
        '<p id="" class=""><b>Tirsdag 1. oktober til ca. 1. november:</b> 16.00 - 19.00</p>'+
        '<p id="" class=""><b>Lørdag 1. oktober til ca. 1. november:</b> 12.30 - 16.00</p>'+
        '<p id="" class=""><b>Lørdag 1. november til 1. marts:</b> 12.30 - 16.00</p>'+
        '<p id="" class=""><b>Adresse:</b> Ørsted Kærvej 8950 Ørsted</p>'+
        '<p id="" class=""><b>Hjemmeside:</b> <a href="http://www.rckcross.dk/">www.rckcross.dk/</a></p>'+
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

    var rougsoInfo = new google.maps.InfoWindow({
        content: rougsoContent
    });

    var rougso = new google.maps.Marker({
        position: {lat: 56.486565, lng: 10.3637163},
        map: map,
        icon: dmcuIcon,
        category: 'dmcu'
    });

    rougso.addListener('click', function() {
        rougsoInfo.open(map, rougso);
    });
    // mols ends here

    // filtered results for dmcu
    $( ".dmcu-filter" ).click(function() {
        grena.setVisible(true);
        billund.setVisible(true);
        hampen.setVisible(true);
        grimhoj.setVisible(true);
        mols.setVisible(true);
        lindknud.setVisible(true);
        rougso.setVisible(true);
    });

    // filtered results for dmu
    $( ".dmu-filter" ).click(function() {
        grena.setVisible(false);
        billund.setVisible(false);
        hampen.setVisible(false);
        grimhoj.setVisible(false);
        mols.setVisible(false);
        lindknud.setVisible(false);
        rougso.setVisible(false);
    });

    // Function for closing markers when user is clicking outside of infowindow
    google.maps.event.addListener(map, "click", function(event) {
        brandeInfo.close();
        hampenInfo.close();
        billundInfo.close();
        grenaInfo.close();
        lindknudInfo.close();
        grimhojInfo.close();
        molsInfo.close();
        rougsoInfo.close();
    });
}
