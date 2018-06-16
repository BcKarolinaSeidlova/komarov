
var obrazek = "https://api.mapy.cz/img/api/marker/drop-red.png";

  var m = new SMap(JAK.gel("m"));
  m.addControl(new SMap.Control.Sync()); /* Aby mapa reagovala na změnu velikosti průhledu */
  m.addDefaultLayer(SMap.DEF_BASE).enable(); /* Turistický podklad */

  var data = {
    "Zastavení 1": "49°8'56.361\"N, 17°34'15.362\"E",
    "Zastavení 2": "49°8'58.545\"N, 17°34'13.451\"E",
    "Zastavení 3": "49°9'0.061\"N, 17°34'10.863\"E",
    "Zastavení 4": "49°9'4.153\"N, 17°34'7.502\"E",
    "Zastavení 5": "49°9'10.596\"N, 17°34'8.951\"E",
    "Zastavení 6": "49°9'20.959\"N, 17°33'50.411\"E",
    "Zastavení 7": "49°9'26.589\"N, 17°33'30.390\"E",
    "Zastavení 8": "49°8'59.501\"N, 17°33'56.895\"E",
    "Zastavení 9": "49°9'8.090\"N, 17°34'40.000\"E",
    "Zastavení 10": "49°8'51.113\"N, 17°33'26.383\"E",
    "Zastavení 11": "49°9'19.306\"N, 17°33'36.270\"E",
    "Zastavení 12": "49°8'20.086\"N, 17°34'7.787\"E"
};
  var znacky = [];
  var souradnice = [];

for (var name in data) { /* Vyrobit značky */
    var c = SMap.Coords.fromWGS84(data[name]); /* Souřadnice značky, z textového formátu souřadnic */
    
    var options = {
        url:obrazek,
        title:name,
        anchor: {left:10, bottom: 1}  /* Ukotvení značky za bod uprostřed dole */
    }
    
    var znacka = new SMap.Marker(c, null, options);
    souradnice.push(c);
    znacky.push(znacka);
}


/* Křivoklát ukotvíme za střed značky, přestože neznáme její velikost */
  var options = {
    anchor: {left:0.5, top:0.5}
}
  znacky[1].decorate(SMap.Marker.Feature.RelativeAnchor, options);

  var vrstva = new SMap.Layer.Marker();     /* Vrstva se značkami */
  m.addLayer(vrstva);                          /* Přidat ji do mapy */
  vrstva.enable();                         /* A povolit */
  for (var i=0;i<znacky.length;i++) {
    vrstva.addMarker(znacky[i]);
}

  var cz = m.computeCenterZoom(souradnice); /* Spočítat pozici mapy tak, aby značky byly vidět */
  m.setCenterZoom(cz[0], cz[1]);

