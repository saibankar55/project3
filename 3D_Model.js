import { GLTFLoader } from "../../libs/three.js-r132/examples/jsm/loaders/GLTFLoader.js";
import { Raycaster, Vector2 } from "../../libs/three.js-r132/build/three.module.js";

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc: '../../assets/targets/pc.mind',
        });
        const { renderer, scene, camera } = mindarThree;

        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);

        const anchor = mindarThree.addAnchor(0);

        const loader = new GLTFLoader();
        const raycaster = new Raycaster();
        const mouse = new Vector2();

        let pcModel; // Declare a variable to hold the pc model

        // Load the first GLTF model
        loader.load("../../assets/models/product/pc.gltf", (gltf) => {
            pcModel = gltf.scene;
            pcModel.scale.set(0.1, 0.1, 0.1);
            pcModel.position.set(0.1, -0.1, 0.0);
            anchor.group.add(pcModel);

            // Add click event to open the link
            document.addEventListener('click', (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(pcModel.children, true);

                if (intersects.length > 0) {
                    console.log('Model clicked: Opening https://www.youtube.com/watch?v=XV1cOGaZUq0');
                    window.open("https://www.youtube.com/watch?v=XV1cOGaZUq0", '_blank');
                }
            });
        });

        // Load the second GLTF model
        loader.load("../../assets/models/musicband-raccoon/.gltf", (gltf) => {
            gltf.scene.scale.set(0.01, 0.008, 0.01);
            gltf.scene.position.set(-0.2, -0.45, -0.0);
            anchor.group.add(gltf.scene);

            // Add click event to open a different link
            document.addEventListener('click', (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(gltf.scene.children, true);

                if (intersects.length > 0) {
                    console.log('Model clicked: Opening https://visioment.com/');
                    window.open("https://visioment.com/", '_blank');
                }
            });
        });

        // Load the third GLTF model
        loader.load("../../assets/models/musicband-raccoon/.gltf", (gltf) => {
            gltf.scene.scale.set(0.007, 0.0035, 0.01);
            gltf.scene.position.set(-1.10, -0.152, -0.0);
            anchor.group.add(gltf.scene);

            // Add click event to open another different link
            document.addEventListener('click', (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(gltf.scene.children, true);

                if (intersects.length > 0) {
                    console.log('Model clicked: Opening https://www.linkedin.com/in/sai-bankar-8280ba26a?originalSubdomain=in');
                    window.open("https://www.linkedin.com/in/sai-bankar-8280ba26a?originalSubdomain=in", '_blank');
                }
            });
        });

        // Load the fourth GLTF model
        loader.load("../../assets/models/musicband-raccoon/.gltf", (gltf) => {
            gltf.scene.scale.set(0.007, 0.0035, 0.01);
            gltf.scene.position.set(-1.10, -0.02, -0.0);
            anchor.group.add(gltf.scene);

            // Add click event to open another different link
            document.addEventListener('click', (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(gltf.scene.children, true);

                if (intersects.length > 0) {
                    console.log('Model clicked: Opening https://www.example.com/yet-another-link');
                    window.open("https://www.bing.com/ck/a?!&&p=095fad1aea57b821JmltdHM9MTcwOTQyNDAwMCZpZ3VpZD0yMWIwMGI0MC0yZjM4LTYwZDMtMWZjMS0xZjY2MmU1YzYxZDYmaW5zaWQ9NTIyNQ&ptn=3&ver=2&hsh=3&fclid=21b00b40-2f38-60d3-1fc1-1f662e5c61d6&psq=sai+bankar+insta&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zYWlfYmFua2FyXzQv&ntb=1", '_blank');
                }
            });
        });

        await mindarThree.start();

        renderer.setAnimationLoop(() => {
            if (pcModel) {
                pcModel.rotation.y += 0.01; // Rotate the pc model continuously
            }
            renderer.render(scene, camera);
        });
    }

    start();
});
