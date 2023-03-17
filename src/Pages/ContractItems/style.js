import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export const HomeHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
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

export const HomeSection = styled.section`
  width: 90vw;
  margin: 10px auto;
  padding: 10px 20px;
  background: #FFFFFF;
  border-radius: 10px;
`;

export const HomeHeaderSection = styled.header`
  width: 100%;
  text-align: center;

  p {
    font-size: 14px;
  }
  margin-bottom: 20px;
`;

export const HomeTableSection = styled.table`
  width: 100%;
  overflow: scroll;
  text-align: left;
  border-collapse: collapse;
  background: #F1F0F5;
`;

export const HomeTableThead = styled.thead`
  background: #2FB0C6;
  th {
    padding: 5px;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: 400;
    & + th {
      text-align: center;
    }

    &:first-child {
      width: 42%;
    }
  }
`;

export const HomeTitleTable = styled.td`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HomeTableTbody = styled.tbody`
  width: 100%;
  margin-bottom: 60px;
  tr {
    background: #F1F0F5;
    border-bottom: 1px solid #F1F0F5;
    cursor: pointer;

    td {
      padding: 10px;
      font-size: 14px;
    }
  }
  .dados {
    background: #FFFFFF;
    border-bottom: 1px solid #F1F0F5;
    td {
      padding: 10px 5px;
      font-size: 14px;
      &:first-child {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 10px;

        > p {
          padding: 5px;
          background: ${(props) => props.theme["green-200"]};
          border-radius: 10px;
        }

        div {
        }
      }

      & + td {
        text-align: center;
      }
    }
  }
`;

export const HomeTableTheadTotal = styled.thead`
  background: #2FB0C6;
  th {
    padding: 5px;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: 400;
    & + th {
      text-align: center;
    }

    &:first-child {
      width: 42%;
    }
  }
`;
