document.addEventListener("DOMContentLoaded", function() {
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
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create a rotating sphere (replace with your nebula logic)
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Position the camera
  camera.position.z = 5;

  // Animate the scene
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the sphere
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
});



























































































































































