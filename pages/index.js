import { useRef, useEffect } from 'react';
import { MarkersPlugin } from 'photo-sphere-viewer/dist/plugins/markers';
import { Viewer } from 'photo-sphere-viewer';

export default function Index() {
  const container = useRef();

  useEffect(() => {
    let viewer = new Viewer({
      container: container.current,
      panorama:
        'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg',
      plugins: [
        [
          MarkersPlugin,
          {
            markers: [
              {
                // image marker that opens the panel when clicked
                id: 'image-1',
                longitude: 0.32,
                latitude: 0.11,
                image: 'https://photo-sphere-viewer.js.org/assets/pin-red.png',
                width: 32,
                height: 32,
                anchor: 'bottom center',
                tooltip: 'A image marker. <b>Click me!</b>',
                content: document.getElementById('lorem-content').innerHTML
              },
              {
                // circle marker
                id: 'image-2',
                // image: 'https://photo-sphere-viewer.js.org/assets/pin-red.png',
                circle: 20,
                x: 2500,
                y: 1000,
                tooltip: 'A circle marker'
              }
            ],
          },
        ],
      ],
    });

    return () => {
      viewer.destroy();
    };
  });

  return (
    <>
      <div ref={container} style={{ width: '100vw', height: '100vh' }} />
      <div style={{display: "none"}} id="lorem-content">
        <h1>HTML Ipsum Presents</h1>

        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et
          sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
          dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54469.108394396746!2d6.9617553450295855!3d44.151844842645815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdaf6678af879d%3A0xcabc15aee7b89386!2sParc%20national%20du%20Mercantour!5e0!3m2!1sfr!2sfr!4v1611498421096!5m2!1sfr!2sfr" width="100%" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

        <h2>Header Level 2</h2>

        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet
          congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis,
          tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

        <h3>Header Level 3</h3>

        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
      </div>
    </>
  );
}
