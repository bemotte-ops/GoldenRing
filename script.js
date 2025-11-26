ymaps.ready(init);

function init() {
  const map = new ymaps.Map("map", {
    center: [56.8, 39.2],
    zoom: 7,
    controls: ['zoomControl', 'fullscreenControl']
  });

  // Точки маршрута (автомобильный)
  const waypoints = [
    [55.7585, 37.5231],  // 🏁 Старт/Финиш: Шелепихинская наб., 34к5, Москва
    [56.3012, 38.1341],  // Сергиев Посад
    [56.7406, 38.8736],  // Переславль
    [57.1917, 39.4167],  // Ростов Великий
    [57.6299, 39.8739],  // Ярославль
    [57.8036, 40.9447],  // Кострома
    [56.9990, 40.9715],  // Иваново
    [56.4311, 41.0453],  // Суздаль
    [56.1290, 40.4073],  // Владимир
    [55.7585, 37.5231]   // 🏁 Возврат в Москву
  ];

  // Создаём мультимаршрут
  const multiRoute = new ymaps.multiRouter.MultiRoute({
    referencePoints: waypoints,
    params: {
      routingMode: "auto"
    }
  }, {
    boundsAutoApply: true,
    wayPointVisible: true,
    routeActiveStrokeWidth: 5,
    routeActiveStrokeColor: "#c8a985"
  });

  map.geoObjects.add(multiRoute);

  // Метки с описанием
  const points = [
    { name: "Старт/Финиш: Шелепихинская наб., 34к5", lat: 55.7585, lng: 37.5231 },
    { name: "Троице-Сергиева Лавра", lat: 56.3012, lng: 38.1341 },
    { name: "Спасо-Преображенский собор", lat: 56.7406, lng: 38.8736 },
    { name: "Ростовский кремль", lat: 57.1917, lng: 39.4167 },
    { name: "Спасо-Преображенский монастырь", lat: 57.6299, lng: 39.8739 },
    { name: "Ипатьевский монастырь", lat: 57.8036, lng: 40.9447 },
    { name: "Арт-галерея «Классика»", lat: 56.9990, lng: 40.9715 },
    { name: "Суздаль", lat: 56.4311, lng: 41.0453 },
    { name: "Владимир", lat: 56.1290, lng: 40.4073 }
  ];
  
  points.forEach(p => {
    const placemark = new ymaps.Placemark([p.lat, p.lng], {
      balloonContent: `<b>${p.name}</b>`,
      hintContent: p.name
    }, {
      preset: 'islands#violetDotIconWithCaption',
      iconCaption: ''
    });
    map.geoObjects.add(placemark);
  });
}


