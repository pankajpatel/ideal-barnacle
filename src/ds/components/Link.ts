import styled from "styled-components";
import { ColorCategories, COLORS } from "../tokens";

export const Link = styled.a`
  font-size: 1rem;
  display: inline-block;
`;

export const LinkButton = styled.a<{ color: ColorCategories }>`
  ${({ color }) => `
    color: ${COLORS[color].dark};
    background-color: ${COLORS[color].light};
    border: 1px solid ${COLORS[color].dark};
  `};
  margin: 1rem;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  display: inline-block;
  border-radius: 0.5rem;
`;
