import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const ConstructionContainer = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h3`
  width: 90vw;
  margin: 0 auto;
  margin-top: 10px;
`;

export const ConstructionHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #FFFFFF;

  div {
    width: 550px;
    text-align: center;
    font-size: 14px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;

export const SectionKML = styled.ul`
  width: 90vw;
  margin: 0 auto;
  margin-top: 10px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background: #FFFFFF;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 6px;

    a {
      padding: 5px 10px;
      background: #49C06C;
      border: none;
      color: #FFFFFF;
      border-radius: 5px;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

export const ContructionSection = styled.section`
  width: 90vw;
  margin: 10px auto;
  padding: 10px 20px;
  background: #FFFFFF;
  border-radius: 10px;

  h2 {
    text-align: justify;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    gap: 10px;
    li {
      text-decoration: none;
      list-style: none;
      display: flex;
      flex-direction: column;
      strong {
        text-align: center;
      }
      p {
        text-align: center;
        margin-top: 5px;
      }
    }
  }

  .GridFor {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-between;
  }
`;

// --- Estilo Modal

export const ContainerModal = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ButtonModal = styled.button`
  background: #2FB0C6;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  margin-bottom: 20px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #2FB0C6;
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #FFFFFF;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormModal = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
  button {
    width: 100%;
    padding: 5px;
    cursor: pointer;

    height: 48px;
    border: none;
    background: #2FB0C6;
    color: #FFFFFF;
    border-radius: 5px;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px #2FB0C6;
    }
  }
`;

export const InputModal = styled.input`
  border: 2px solid #F1F0F5;
  padding: 10px;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #2FB0C6;
  }
`;
