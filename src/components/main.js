import * as THREE from "three";
import { CompositionShader } from "./shaders/CompositionShader";
import {
    BASE_LAYER,
    BLOOM_LAYER,
    BLOOM_PARAMS,
    OVERLAY_LAYER,
} from "./config/renderConfig";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { Galaxy } from "./objects/galaxy.js";

let canvas,
    renderer,
    camera,
    scene,
    orbit,
    baseComposer,
    bloomComposer,
    overlayComposer,
    galaxy; // <-- Global variable

function initThree() {
    canvas = document.querySelector("#canvas");
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xebe2db, 0.00003);

    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        5000000
    );
    camera.position.set(0, 50, 50);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);

    // ✅ Correct OrbitControls usage
    orbit = new OrbitControls(camera, canvas);
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.05;
    orbit.screenSpacePanning = false;
    orbit.minDistance = 1;
    orbit.maxDistance = 16384;
    orbit.maxPolarAngle = Math.PI / 2 - Math.PI / 360;

    initRenderPipeline();
}

function initRenderPipeline() {
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas,
        logarithmicDepthBuffer: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5;

    const renderScene = new RenderPass(scene, camera);

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
    );
    bloomPass.threshold = BLOOM_PARAMS.bloomThreshold;
    bloomPass.strength = BLOOM_PARAMS.bloomStrength;
    bloomPass.radius = BLOOM_PARAMS.bloomRadius;

    bloomComposer = new EffectComposer(renderer);
    bloomComposer.renderToScreen = false;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    overlayComposer = new EffectComposer(renderer);
    overlayComposer.renderToScreen = false;
    overlayComposer.addPass(renderScene);

    const finalPass = new ShaderPass(
        new THREE.ShaderMaterial({
            uniforms: {
                baseTexture: { value: null },
                bloomTexture: { value: bloomComposer.renderTarget2.texture },
                overlayTexture: { value: overlayComposer.renderTarget2.texture },
            },
            vertexShader: CompositionShader.vertex,
            fragmentShader: CompositionShader.fragment,
            defines: {},
        }),
        "baseTexture"
    );
    finalPass.needsSwap = true;

    baseComposer = new EffectComposer(renderer);
    baseComposer.addPass(renderScene);
    baseComposer.addPass(finalPass);
}

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

async function render() {
    orbit.update();

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    // ✅ Ensure `galaxy` is defined before using it
    if (galaxy) {
        galaxy.stars.forEach((star) => {
            star.updateScale(camera);
        });

        galaxy.haze.forEach((haze) => {
            haze.updateScale(camera);
        });
    }

    renderPipeline();
    requestAnimationFrame(render);
}

function renderPipeline() {
    camera.layers.set(BLOOM_LAYER);
    bloomComposer.render();

    camera.layers.set(OVERLAY_LAYER);
    overlayComposer.render();

    camera.layers.set(BASE_LAYER);
    baseComposer.render();
}

export function initializeThree() {
    initThree();
    let axes = new THREE.AxesHelper(5.0);
    scene.add(axes);

    // ✅ Assign `galaxy` globally
    galaxy = new Galaxy(scene);

    requestAnimationFrame(render);
}
