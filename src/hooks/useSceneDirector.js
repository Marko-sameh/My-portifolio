import { useState } from "react";

export function useSceneDirector() {
  const [currentScene, setCurrentScene] = useState("prologue");

  const navigateToScene = (scene) => setCurrentScene(scene);

  return { currentScene, navigateToScene };
}
