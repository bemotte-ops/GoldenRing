ymaps.ready(init);

function init() {
  const map = new ymaps.Map("map", {
    center: [56.8, 39.2],
    zoom: 7,
    controls: ['zoomControl', 'fullscreenControl']
  });

  const places = [
    {
      name: "Троице-Сергиева Лавра",
      desc: "Сергиев Посад<br>🕗 6:00–21:00<br>💰 Бесплатно",
      lat: 56.3012,
      lng: 38.1341,
      type: "monastery"
    },
    {
      name: "Спасо-Преображенский собор",
      desc: "Переславль-Залесский<br>🕗 8:00–17:00<br>💰 Бесплатно",
      lat: 56.7406,
      lng: 38.8736,
      type: "church"
    },
    {
      name: "Ростовский кремль",
      desc: "Ростов Великий<br>🕗 10:00–18:00 (пн — выходной)<br>💰 300 ₽",
      lat: 57.1917,
      lng: 39.4167,
      type: "museum"
    },
    {
      name: "Спасо-Преображенский монастырь",
      desc: "Ярославль<br>🕗 8:00–19:00<br>💰 Бесплатно",
      lat: 57.6299,
      lng: 39.8739,
      type: "monastery"
    },
    {
      name: "Ипатьевский монастырь",
      desc: "Кострома<br>🕗 8:00–19:00<br>💰 Бесплатно (музей — 250 ₽)",
      lat: 57.8036,
      lng: 40.9447,
      type: "monastery"
    },
    {
      name: "Арт-галерея «Классика»",
      desc: "Иваново<br>🕗 11:00–19:00 (пн — выходной)<br>💰 200 ₽",
      lat: 56.9990,
      lng: 40.9715,
      type: "museum"
    },
    {
      name: "Спасо-Евфимиев монастырь",
      desc: "Суздаль<br>🕗 10:00–18:00<br>💰 350 ₽",
      lat: 56.4311,
      lng: 41.0453,
      type: "monastery"
    },
    {
      name: "Музей деревянного зодчества",
      desc: "Суздаль<br>🕗 9:00–17:00<br>💰 300 ₽",
      lat: 56.4261,
      lng: 41.0535,
      type: "museum"
    }
  ];

  const iconPath = 'assets/icons/';
  const iconMap = {
    church: iconPath + 'church.svg',
    museum: iconPath + 'museum.svg',
    monastery: iconPath + 'monastery.svg'
  };

  const placemarks = places.map(p => {
    return new ymaps.Placemark([p.lat, p.lng], {
      balloonContentHeader: p.name,
      balloonContentBody: p.desc,
      hintContent: p.name
    }, {
      iconLayout: 'default#image',
      iconImageHref: iconMap[p.type],
      iconImageSize: [36, 36],
      iconImageOffset: [-18, -36]
    });
  });

  const clusterer = new ymaps.Clusterer({
    preset: 'islands#invertedVioletClusterIcons',
    clusterDisableClickZoom: true,
    clusterHideIconOnShadow: true,
    clusterOpenBalloonOnClick: true
  });

  clusterer.add(placemarks);
  map.geoObjects.add(clusterer);
}
