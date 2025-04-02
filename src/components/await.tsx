import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const ModelLoaderComponent: React.FC = () => {
  const [model, setModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    const loader = new OBJLoader();

    function modelLoader(url: string): Promise<THREE.Object3D> {
      return new Promise((resolve, reject) => {
        loader.load(url, (data: THREE.Object3D) => resolve(data), undefined, reject);
      });
    }

    async function loadModel() {
      const loadedModel = await modelLoader("./sailor-moon/gunter.obj");
      setModel(loadedModel);
    }

    loadModel();
  }, []);

  return (
    <div>
      {model ? <p>Model loaded successfully</p> : <p>Loading model...</p>}
    </div>
  );
};

export default ModelLoaderComponent;