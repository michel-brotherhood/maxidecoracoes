import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  stores: {
    name: string;
    address: string;
    coordinates: [number, number];
  }[];
}

export const Map = ({ stores }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const accessToken = 'pk.eyJ1IjoibWF4aWRlY29yYWNvZXNsdGRhIiwiYSI6ImNtaDZmMXdubDBiejkyaW9va3lrOTBsbWgifQ.vCaBLcg33a4EW2b-ADsbYQ';
    
    try {
      mapboxgl.accessToken = accessToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: stores[0].coordinates,
        zoom: 11,
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add markers for each store
      stores.forEach((store) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '32px';
        el.style.height = '32px';
        el.style.borderRadius = '50%';
        el.style.backgroundColor = 'hsl(var(--primary))';
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        el.style.cursor = 'pointer';

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div style="padding: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">${store.name}</h3>
            <p style="font-size: 14px; color: #666;">${store.address}</p>
          </div>`
        );

        new mapboxgl.Marker(el)
          .setLngLat(store.coordinates)
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Fit bounds to show all markers
      if (stores.length > 1) {
        const bounds = new mapboxgl.LngLatBounds();
        stores.forEach(store => bounds.extend(store.coordinates));
        map.current.fitBounds(bounds, { padding: 50 });
      }
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, [stores]);

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
        <p className="text-xs sm:text-sm font-medium text-foreground">
          📍 {stores.length} {stores.length === 1 ? 'Loja' : 'Lojas'}
        </p>
      </div>
    </div>
  );
};
