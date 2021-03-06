import styled from "styled-components";
import { useRoute } from "wouter";
import { ContainerWithGutter } from "../ds/components/Container";
import { Code } from "../ds/components/Code";
import { LinkButton } from "../ds/components/Link";

const CenteredContainer = styled(ContainerWithGutter)`
  text-align: center;
`;

const H1 = styled.h1`
  margin: 5rem 0 2rem;
  font-size: 15rem;
  font-weight: bold;
  color: #aaa;
`;

export const Page404 = () => {
  const [, params] = useRoute("/:rest*");
  return (
    <CenteredContainer>
      <H1>404</H1>
      Sorry the page <Code>{params?.rest ?? ""}</Code> does not exist!
      <div>
        <LinkButton color="info" href="/">
          Go to the home page
        </LinkButton>
      </div>
    </CenteredContainer>
  );
};
