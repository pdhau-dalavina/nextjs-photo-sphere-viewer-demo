import { useRef, useEffect } from 'react';
import { MarkersPlugin } from 'photo-sphere-viewer/dist/plugins/markers';
import 'photo-sphere-viewer/dist/plugins/virtual-tour.css';
import { GalleryPlugin } from 'photo-sphere-viewer/dist/plugins/gallery';
import 'photo-sphere-viewer/dist/plugins/gallery.css';
import { VirtualTourPlugin } from 'photo-sphere-viewer/dist/plugins/virtual-tour';
import * as PhotoSphereViewer from 'photo-sphere-viewer';

export default function Index() {
  const container = useRef();

  useEffect(() => {
    const base = 'https://photo-sphere-viewer-data.netlify.app/assets/';

    const viewer = new PhotoSphereViewer.Viewer({
      container: container.current,
      loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
      touchmoveTwoFingers: true,
      mousewheelCtrlKey: true,
      caption: 'Cape Florida Light, Key Biscayne <b>&copy; Pixexid</b>',
      defaultLong: '100deg',
      plugins: [
        MarkersPlugin,
        GalleryPlugin,
        [VirtualTourPlugin, {
          positionMode: VirtualTourPlugin.MODE_GPS,
          renderMode: VirtualTourPlugin.MODE_MARKERS,
        }],
      ],
      navbar: 'zoom move download gallery caption fullscreen',
    });

    const virtualTour = viewer.getPlugin(VirtualTourPlugin);

    virtualTour.setNodes([
      {
        id: '1',
        panorama: base + 'tour/key-biscayne-1.jpg',
        thumbnail: base + 'tour/key-biscayne-1-thumb.jpg',
        name: 'One',
        links: [
          { nodeId: '2' },
        ],
        markers: [
          {
            id: 'marker-1',
            image: 'https://photo-sphere-viewer.js.org/assets/pin-red.png',
            tooltip: 'Cape Florida Light, Key Biscayne',
            width: 32,
            height: 32,
            anchor: 'bottom center',
            longitude: '105deg',
            latitude: '35deg',
          }
        ],
        position: [-80.156479, 25.666725, 3],
        panoData: { poseHeading: 327 },
      },
      {
        id: '2',
        panorama: base + 'tour/key-biscayne-2.jpg',
        thumbnail: base + 'tour/key-biscayne-2-thumb.jpg',
        name: 'Two',
        links: [
          { nodeId: '3' },
          { nodeId: '1' },
        ],
        position: [-80.156168, 25.666623, 3],
        panoData: { poseHeading: 318 },
      },
      {
        id: '3',
        panorama: base + 'tour/key-biscayne-3.jpg',
        thumbnail: base + 'tour/key-biscayne-3-thumb.jpg',
        name: 'Three',
        links: [
          { nodeId: '4' },
          { nodeId: '2' },
          { nodeId: '5' },
        ],
        position: [-80.155932, 25.666498, 5],
        panoData: { poseHeading: 328 },
      },
      {
        id: '4',
        panorama: base + 'tour/key-biscayne-4.jpg',
        thumbnail: base + 'tour/key-biscayne-4-thumb.jpg',
        name: 'Four',
        links: [
          { nodeId: '3' },
          { nodeId: '5' },
        ],
        position: [-80.156089, 25.666357, 3],
        panoData: { poseHeading: 78 },
      },
      {
        id: '5',
        panorama: base + 'tour/key-biscayne-5.jpg',
        thumbnail: base + 'tour/key-biscayne-5-thumb.jpg',
        name: 'Five',
        links: [
          { nodeId: '6' },
          { nodeId: '3' },
          { nodeId: '4' },
        ],
        position: [-80.156292, 25.666446, 2],
        panoData: { poseHeading: 190 },
      },
      {
        id: '6',
        panorama: base + 'tour/key-biscayne-6.jpg',
        thumbnail: base + 'tour/key-biscayne-6-thumb.jpg',
        name: 'Six',
        links: [
          { nodeId: '5' },
        ],
        position: [-80.156465, 25.666496, 2],
        panoData: { poseHeading: 328 },
      },
    ], '2');

    return () => {
      viewer.destroy();
    };
  });

  return (
    <>
      <div id="container" ref={container} style={{ width: '100vw', height: '100vh' }} />
    </>
  );
}
