import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { db } from "../../config/firebase";
import {
  ContarctContainer,
  ContarctHeader,
  ContarctSection,
  ContarctTableSection,
  ContarctTableTbody,
  ContarctTableThead,
  Status,
} from "./style";

export function Contratos() {
  const [contracts, setContracts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getContracts() {
      const collectionRef = collection(db, "contracts")
      const querySnapshot = await getDocs(collectionRef);
      setContracts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    }
    getContracts();
  },[]);

  function navigateContractItms(id){
    navigate(`/contratos/${id}`)
  }

console.log(contracts)
  return (
    <ContarctContainer>
      <ContarctHeader>
        <h4>Contratos</h4>
      </ContarctHeader>

      <ContarctSection>
        <h1>Cosanpa</h1>
        <ContarctTableSection>
          <ContarctTableThead>
            <tr>
              <th>Contrato</th>
              <th>VALOR</th>
              <th>ÍNICIO</th>
              <th>FIM</th>
              <th>STATUS</th>
            </tr>
          </ContarctTableThead>
          <ContarctTableTbody>
            {contracts.map((contract) =>{
                if(contract.contractor.cnpj === "04945341000190"){
                  return(
                   <>
                      <tr className="summary">
                        <td colSpan={5}>{contract.contract.summary}</td>
                      </tr>
                     <tr className="dados" onClick={() =>{
                        navigateContractItms(contract.contract.id)
                      }}>
                      <td>
                        <p>{contract.contract.id}</p>
                      <div>
                        <p>{contract.company.name}</p>
                      </div>
                      </td>
                      <td>
                        <p>{contract.contract.value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                      </td>
                      <td>
                        <p>{contract.dates.contract.start}</p>
                      </td>
                      <td>
                        <p>{contract.dates.contract.end}</p>
                      </td>
                      <Status variant={contract.status}>
                        <p>{contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}</p>
                      </Status >
                    </tr>
                   </>
                  )
                }
            })}
          </ContarctTableTbody>
        </ContarctTableSection>
      </ContarctSection>

      <ContarctSection>
        <h1>Seduc</h1>
        <ContarctTableSection>
          <ContarctTableThead>
            <tr>
              <th>Contrato</th>
              <th>VALOR</th>
              <th>ÍNICIO</th>
              <th>FIM</th>
              <th>STATUS</th>
            </tr>
          </ContarctTableThead>
          <ContarctTableTbody>
            {contracts.map((contract) => {
              if(contract.contractor.cnpj === "05054937000163"){
                return(
                  <tr className="dados" onClick={() =>{
                    navigateContractItms(contract.contract.id)
                  }}>
                <td>
                  <p>{contract.contract.id}</p>
                  <div>
                    <p>{contract.company.name}</p>
                  </div>
                </td>
                <td>
                  <p>{contract.contract.value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                </td>
                <td>
                  <p>{contract.dates.contract.start}</p>
                </td>
                <td>
                  <p>{contract.dates.contract.end}</p>
                </td>
                <Status variant={contract.status}>
                  <p>{contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}</p>
                </Status >
              </tr>
                )
              }
            })}
          </ContarctTableTbody>
        </ContarctTableSection>
      </ContarctSection>


    </ContarctContainer>
  );
}
