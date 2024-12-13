// nebula.js

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("nebula");

    if (!canvas) {
        console.error("Canvas element not found");
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create particle geometry
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 50;
    }

    particles.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    );

    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x0055ff,
        size: 0.2,
        transparent: true,
        blending: THREE.AdditiveBlending,
    });

    // Create particle system
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);

        // Rotate particle system for animation
        particleSystem.rotation.y += 0.002;
        particleSystem.rotation.x += 0.001;

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});


















































  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(ambientLight, pointLight);

  camera.position









































































































































































































































