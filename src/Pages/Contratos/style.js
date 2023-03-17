import styled from "styled-components";

export const ContarctContainer = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export const ContarctHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #FFFFFF;
`;

export const ContarctSection = styled.section`
  width: 90vw;
  margin: 10px auto;
  padding: 10px 20px;
  background: #FFFFFF;
  border-radius: 10px;
  h1{
    margin-bottom: 10px;
  }
`;

export const ContarctTableSection = styled.table`
  width: 100%;
  overflow: scroll;
  text-align: left;
  border-collapse: collapse;
  background: #F1F0F5;

`;

export const ContarctTableThead = styled.thead`
  background: #2FB0C6;
  th {
    padding: 5px;
    font-size: 12px;
    color: #F1F0F5;
    font-weight: 400;
    & + th {
      text-align: center;
    }

    &:first-child {
      width: 52%;
    }
  }
`;

export const ContarctTitleTable = styled.td`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContarctTableTbody = styled.tbody`
  width: 100%;
  margin-bottom: 60px;
  tr {
    td {
      padding: 10px;
      font-size: 14px;
    }
  }

  .dados {
    background: #F1F0F5;
    border-bottom: 6px solid #F1F0F5;
    cursor: pointer;
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
          background: #D8D090;
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

  .summary{
    background: #FFFFFF;
    border-bottom: 1px solid #F1F0F5;
  }
`;




export const Status= styled.td`
    padding: 10px;
    font-size: 14px;
    color: ${(props) => props.variant === 'ativo' ? "#49C06C": "" 
    || props.variant === 'finalizado' ? " #F26B66"  : "" 
    ||  props.variant === 'cancelado' ? "#FCCD06" : ""};
`;

export const ContarctTableTheadTotal = styled.thead`
  background:  #2FB0C6;
  th {
    padding: 5px;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: 400;
    & + th {
      text-align: center;
    }

    &:first-child {
      width: 52%;
    }
  }
`;
