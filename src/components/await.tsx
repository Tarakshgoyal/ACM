import React, { useEffect, useState } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const ModelLoaderComponent: React.FC = () => {
  const [model, setModel] = useState<any>(null);

  useEffect(() => {
    const loader = new OBJLoader();

    function modelLoader(url: string): Promise<any> {
      return new Promise((resolve, reject) => {
        loader.load(url, (data: any) => resolve(data), undefined, reject);
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