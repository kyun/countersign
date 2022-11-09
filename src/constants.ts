export const TYPES = ["bulge", "shift"];
export const FACE_ANCHORS = [
  "lefteye",
  "righteye",
  "centerofeyes",
  "nose",
  "brow",
  "jaw",
  "leftcheek",
  "rightcheek",
  "mouth",
  "leftear",
  "rightear",
  "leftjaw",
  "rightjaw",
  "leftnostril",
  "rightnostril",
  "topmouth",
  "bottommouth",
];

export interface DistortionItem {
  type: string;
  faceAnchor: string;
  angle: number;
  max: number;
  min: number;
  offsetX: number;
  offsetY: number;
  radiusX: number;
  radiusY: number;
  scale: number;
}

export const INIT_DATA: DistortionItem = {
  type: TYPES[0],
  faceAnchor: FACE_ANCHORS[0],
  angle: 0,
  max: 0,
  min: 0,
  offsetX: 0,
  offsetY: 0,
  radiusX: 0,
  radiusY: 0,
  scale: 0,
};
