import React from "react";
import styled from "@emotion/styled";
import { DistortionItem, FACE_ANCHORS, TYPES } from "../../src/constants";

const Row = styled.div`
  display: flex;
  padding: 4px 16px;
  gap: 8px;
  border-bottom: 1px solid gray;
`;

const RowItem = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const Label = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: bold;
`;
interface Props {
  data: DistortionItem;
  onChange: (name: string, value: number | string) => void;
  onDelete: () => void;
}

const DistortionRow: React.FC<Props> = ({ data, onChange, onDelete }) => {
  return (
    <Row>
      <RowItem>
        <Label>Type</Label>
        <select
          value={data.type}
          onChange={(e) => {
            onChange("type", e.target.value);
          }}
        >
          {TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </RowItem>
      <RowItem>
        <Label>Face Anchor</Label>
        <select
          value={data.faceAnchor}
          onChange={(e) => {
            onChange("faceAnchor", e.target.value);
          }}
        >
          {FACE_ANCHORS.map((anchor) => (
            <option key={anchor} value={anchor}>
              {anchor}
            </option>
          ))}
        </select>
      </RowItem>
      <RowItem>
        <Label>Angle</Label>
        <input
          onChange={(e) => {
            const { value, min, max } = e.target;
            const v = Math.max(
              Number(min),
              Math.min(Number(max), Number(value))
            );
            onChange("angle", Number(v));
          }}
          min={0}
          max={360}
          value={data.angle}
          type="number"
        />
      </RowItem>
      <RowItem>
        <Label>Radius X</Label>
        <input
          onChange={(e) => {
            const { value, min, max } = e.target;
            const v = Math.max(
              Number(min),
              Math.min(Number(max), Number(value))
            );
            onChange("radiusX", Number(v));
            onChange("radiusY", Number(v));
          }}
          min={0}
          max={10}
          value={data.radiusX}
          type="number"
        />
      </RowItem>
      <RowItem>
        <Label>Radius Y</Label>
        <input disabled min={0} max={10} value={data.radiusY} type="number" />
      </RowItem>
      <RowItem>
        <Label>Scale</Label>
        <input
          onChange={(e) => {
            const { value, min, max } = e.target;
            const v = Math.max(
              Number(min),
              Math.min(Number(max), Number(value))
            );
            onChange("scale", Number(v));
          }}
          min={-15}
          max={15}
          value={data.scale}
          type="number"
        />
      </RowItem>
      <RowItem>
        <Label>Offset X</Label>
        <input
          onChange={(e) => {
            const { value, min, max } = e.target;
            const v = Math.max(
              Number(min),
              Math.min(Number(max), Number(value))
            );
            onChange("offsetX", Number(v));
          }}
          min={-1}
          max={1}
          step={0.1}
          value={data.offsetX}
          type="number"
        />
      </RowItem>
      <RowItem>
        <Label>Offset Y</Label>
        <input
          onChange={(e) => {
            const { value, min, max } = e.target;
            const v = Math.max(
              Number(min),
              Math.min(Number(max), Number(value))
            );
            onChange("offsetY", Number(v));
          }}
          min={-1}
          max={1}
          step={0.1}
          value={data.offsetY}
          type="number"
        />
      </RowItem>
      <RowItem>
        <Label>Min</Label>
        <input
          onChange={(e) => {
            const { value, min, max } = e.target;
            const v = Math.max(
              Number(min),
              Math.min(Number(max), Number(value))
            );
            onChange("min", Number(v));
          }}
          min={0}
          max={2}
          step={0.1}
          value={data.min}
          type="number"
        />
      </RowItem>
      <RowItem>
        <Label>Max</Label>
        <input
          onChange={(e) => {
            const { value, min, max } = e.target;
            const v = Math.max(
              Number(min),
              Math.min(Number(max), Number(value))
            );
            onChange("max", Number(v));
          }}
          min={0}
          max={2}
          step={0.1}
          value={data.max}
          type="number"
        />
      </RowItem>
      <button onClick={onDelete}>X</button>
    </Row>
  );
};

export default DistortionRow;
