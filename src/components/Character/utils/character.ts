import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                if (mesh.material) {
                  mesh.material = (mesh.material as THREE.Material).clone();
                  const mat = mesh.material as THREE.MeshStandardMaterial;

                  if (mat.color) {
                    const name = mesh.name.toLowerCase();
                    const matName = mat.name.toLowerCase();

                    if (
                      name.includes("body") || name.includes("head") || name.includes("face") ||
                      name.includes("hand") || name.includes("skin") || name.includes("arm") ||
                      matName.includes("body") || matName.includes("head") || matName.includes("face") ||
                      matName.includes("hand") || matName.includes("skin") || matName.includes("arm")
                    ) {
                      mat.color.setHex(0xe0ac69);
                    }
                    else if (
                      name.includes("shirt") || name.includes("tshirt") || name.includes("top") || name.includes("cloth") ||
                      matName.includes("shirt") || matName.includes("tshirt") || matName.includes("top") || matName.includes("cloth")
                    ) {
                      mat.color.setHex(0xffffff);
                    }
                    else if (
                      name.includes("jean") || name.includes("pant") || name.includes("bottom") || name.includes("leg") ||
                      matName.includes("jean") || matName.includes("pant") || matName.includes("bottom") || matName.includes("leg")
                    ) {
                      mat.color.setHex(0x444444);
                    }
                  }
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
