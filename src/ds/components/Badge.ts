import styled from "styled-components";
import { ColorCategories, COLORS } from "../tokens";

export type BadgeType = ColorCategories;

export const Badge = styled.span<{ type: BadgeType }>`
  padding: 0.35em 0.55em;
  border-radius: 0.4em;
  background-color: ${(props) => COLORS[props.type || "info"].light};
  border: 1px solid rgba(0, 0, 0, 0.05);
  line-height: 1;
`;
