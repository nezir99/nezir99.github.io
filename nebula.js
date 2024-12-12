const canvas = document.getElementById('nebula');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Nebula Material
const geometry = new THREE.PlaneGeometry(10, 10);
const loader = new THREE.TextureLoader();
const texture = loader.load('https://images.unsplash.com/photo-1475300350006-204d9881aa3e');
const material = new THREE.MeshBasicMaterial({ map: texture });
const nebula = new THREE.Mesh(geometry, material);
scene.add(nebula);

// Animation
function animate() {
  requestAnimationFrame(animate);
  nebula.material.map.offset.y += 0.002; // Subtle movement
  renderer.render(scene, camera);
}
animate();

// Adjust canvas size on resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

