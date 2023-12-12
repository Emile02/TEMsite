  <template>
    <div id="map" class="h-screen w-full"></div>
    <div id="div-to-use">
      <button>
            <h1 class="text-center">Restaurant Le TEM</h1>
            <h1 class="text-center">17 Grand Rue</h1>
            <h1 class="text-center">54000 Nancy</h1>
            <h1 class="text-red-200 text-sm font-light"><a href="https://maps.app.goo.gl/tC83ytDFqjCsFo8z8" data-replace="Calculez votre itinéraire" class=" mt-2 text-sm font-light "><span>Calculez votre itinéraire</span></a></h1>
      </button>
    </div>
  </template>

  <script>
  import { ref, onMounted } from 'vue';
  import * as L from 'leaflet';
  import mitt from 'mitt';

  const emitter = mitt();
  export default {
    setup() {
      const map = ref(null);
      
      onMounted(() => {
      let mapInstance = L.map('map', {
          center: [48.695327005647925, 6.181040152792563],
          zoom: 10,
          scrollWheelZoom: false,
        });
        var greenIcon = new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstance);
        L.marker([48.695327005647925, 6.181040152792563], {icon: greenIcon}).addTo(mapInstance)
          .bindPopup(document.getElementById('div-to-use'))
          .openPopup()
          mapInstance.whenReady(() => {
        // Émettre l'événement personnalisé avec mapInstance
            emitter.emit('map-loaded', mapInstance);
      });
        });

      return { map };
    },
  };
  </script>

<style>
  /* a {
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a::before,
a::after {
 content: '';
  position: absolute;
  width: 100%;
  left: 0;
}
a::before {
  background-color: #000000;
  height: 2px;
  bottom: 0;
  transform-origin: 100% 50%;
  transform: scaleX(0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}
a::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(200%, 0, 0);
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
  color: #000000;
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
a:hover::after {
  transform: translate3d(0, 0, 0);
}

a span {
  display: inline-block;
  transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
  transform: translate3d(-200%, 0, 0);
} */
</style>
