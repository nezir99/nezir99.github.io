window.onload = function() {
  const canvas = document.getElementById("nebula");

  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }

  // Set canvas size to full window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create glowing nebula-like sphere
  const geometry = new THREE.SphereGeometry(5, 64, 64);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(0x4e44ff) },
      color2: { value: new THREE.Color(0xff44e8) },
      time: { value: 0.0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform float time;

      void main() {
        float intensity = sin(time + length(vNormal)) * 0.5 + 0.5;
        vec3 color = mix(color1, color2, intensity);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });

  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(ambientLight, pointLight);

  camera.position









































































































































































































































