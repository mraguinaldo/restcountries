import styled from "styled-components";

export const Wrapper = styled.section`
  background-image: url("/hero-image.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  max-width: 1440px;
  height: 872px;
  margin: 0 auto;

  .countries {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 64px 0;
    img {
      position: absolute;
      &:nth-child(2) {
        left: 32px;
      }
      &:nth-child(3) {
        left: 64px;
      }
    }
  }
`;