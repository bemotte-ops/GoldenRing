ymaps.ready(init);

function init() {
  const map = new ymaps.Map("map", {
    center: [56.8, 39.0],
    zoom: 7,
    controls: ['zoomControl', 'fullscreenControl']
  });

  const places = [
    { name: "Троице-Сергиева Лавра", desc: "Сергиев Посад", lat: 56.3012, lng: 38.1341, type: "monastery" },
    { name: "Спасо-Преображенский собор", desc: "Переславль-Залесский", lat: 56.7406, lng: 38.8736, type: "church" },
    { name: "Ростовский кремль", desc: "Ростов Великий", lat: 57.1917, lng: 39.4167, type: "museum" },
    { name: "Спасо-Преображенский монастырь", desc: "Ярославль", lat: 57.6299, lng: 39.8739, type: "monastery" },
    { name: "Ипатьевский монастырь", desc: "Кострома", lat: 57.8036, lng: 40.9447, type: "monastery" },
    { name: "Арт-галерея «Классика»", desc: "Иваново", lat: 56.9990, lng: 40.9715, type: "museum" },
    { name: "Спасо-Евфимиев монастырь", desc: "Суздаль", lat: 56.4311, lng: 41.0453, type: "monastery" },
    { name: "Музей деревянного зодчества", desc: "Суздаль", lat: 56.4261, lng: 41.0535, type: "museum" }
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
      iconImageSize: [32, 32],
      iconImageOffset: [-16, -32]
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