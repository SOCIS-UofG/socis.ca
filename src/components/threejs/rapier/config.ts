import { MeshLambertMaterial } from "three";

export const config = {
  materials: {
    primary: new MeshLambertMaterial({
      color: "#10b981",
      emissive: "#10b981",
    }),

    secondary: new MeshLambertMaterial({
      color: "#1c1c1c",
      emissive: "#1c1c1c",
    }),
  },

  numberOfSphereInstances: 7,
};
