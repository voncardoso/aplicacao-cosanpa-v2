import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import {
  HomeContainer,
  HomeHeader,
  HomeHeaderSection,
  HomeSection,
  HomeTableSection,
  HomeTableTbody,
  HomeTableThead,
  HomeTableTheadTotal,
} from "./style";

export function ContractItems() {
  const [contracItems, setContractsItems] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    async function getContracts() {
      const collectionRef = collection(db, "contracts");
      const querySnapshot = await getDocs(collectionRef);
      setContracts(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
    getContracts();
  }, []);

  useEffect(() => {
    async function getContracts() {
      const collectionRef = collection(db, "budgets");
      const querySnapshot = await getDocs(collectionRef);
      setContractsItems(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
    getContracts();
  }, []);

  const existeContract = contracItems.filter((contract) => {
    return contract.contract.id === params.id;
  });

  const contrato = contracts.filter((contrato) => {
    return contrato.contract.id === params.id;
  });

  const soma = existeContract.reduce(
    (acc, value) => {
      acc.totalValor += value.contract.value;
      acc.totalFinanciamento += value.financing.value;
      return acc;
    },
    {
      totalValor: 0,
      totalFinanciamento: 0,
    }
  );

  function handlecontructionItem(id) {
    navigate(`/obras/${id}`);
  }

  console.log(contrato);
  return (
    <HomeContainer>
      <HomeHeader>
        {contrato.map((item) => {
          return (
            <div>
              <h5>Contrato</h5>
              <strong>{item.contract?.id}</strong>
              <p>{item.contract?.object}</p>
              <p>
                {item.contract?.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          );
        })}
      </HomeHeader>

      <HomeSection>
        <HomeHeaderSection>
          <p>OBRAS POR CONTRATO</p>
        </HomeHeaderSection>
        <HomeTableSection>
          <HomeTableThead>
            <tr>
              <th>DESCRIÇÃO</th>
              <th>VALOR</th>
              <th>FONTE</th>
              <th>FINACIAMENTO</th>
              <th>CONTRATO</th>
              <th></th>
            </tr>
          </HomeTableThead>
          <HomeTableTbody>
            {existeContract.map((item) => {
              return (
                <tr
                  className="dados"
                  onClick={() => {
                    handlecontructionItem(item.id);
                  }}
                >
                  <td>
                    <div>
                      <p>{`${item.financing.sigla} / ${item.contract.service}`}</p>
                    </div>
                  </td>
                  <td>
                    <span>
                      {item.contract.value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </td>
                  <td>
                    <p>{item.financing.fonte}</p>
                  </td>
                  <td>
                    <p>
                      {item.financing.value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </td>
                  <td>
                    <p>{item.financing.contract}</p>
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </HomeTableTbody>
          <HomeTableTheadTotal>
            <tr>
              <th>TOTAL</th>
              <th>
                {soma.totalValor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </th>
              <th></th>
              <th>
                {soma.totalFinanciamento.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </th>
              <th></th>
              <th></th>
            </tr>
          </HomeTableTheadTotal>
        </HomeTableSection>
      </HomeSection>
    </HomeContainer>
  );
}
