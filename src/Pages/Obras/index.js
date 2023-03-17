import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { ContarctContainer } from "../Contratos/style";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonModal,
  ConstructionHeader,
  ContainerModal,
  Content,
  ContructionSection,
  FormModal,
  InputModal,
  Overlay,
  Title,
  SectionKML,
} from "./style";


export function Obras() {
  const [contracConstruction, setContractsConstruction] = useState({});
  const [contracts, setContracts] = useState([]);
  const [workData, setWorkData] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function getContracts() {
      const collectionRef = doc(db, "budgets", `${params.id}`);
      const querySnapshot = await getDoc(collectionRef);
      setContractsConstruction(querySnapshot.data());
    }
    getContracts();
  }, [params.id]);

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

  const contrato = contracts.filter((contrato) => {
    return contrato.contract.id === contracConstruction.contract?.id;
  });

  useEffect(() => {
    if (contrato) {
      contrato.map(async () => {
        window.localStorage.setItem("contrato", contrato[0]?.id);
        const workQ = query(
          collection(db, `contracts/${contrato[0]?.id}/kmls`)
        );
        const workDetails = await getDocs(workQ);
        setWorkData(
          workDetails.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, [contracts]);

  function handleClick(id) {
    navigate(
      `/obras/${contrato[0]?.id}/map/${id}`
    );
  }

  //console.log(workData);
  // console.log("teste", contracts[0]?.id);

  // console.log(contracConstruction);
  //console.log(contrato.id);
  return (
    <ContarctContainer>
      <ConstructionHeader>
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
      </ConstructionHeader>
      <Title>Financiamento</Title>
      <ContructionSection>
        <ul className="GridFor">
          <li>
            <strong>Financiamento</strong>
            <p>{contracConstruction.financing?.sigla}</p>
          </li>
          <li>
            <strong>Contrato</strong>
            <p>{contracConstruction.financing?.contract}</p>
          </li>
          <li>
            <strong>Fonte</strong>
            <p>{contracConstruction.financing?.fonte}</p>
          </li>
          <li>
            <strong>Valor</strong>
            <p>
              {contracConstruction.financing?.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </li>
        </ul>
      </ContructionSection>
      <Title>KML</Title>
      <SectionKML>
        {workData.map((item) => {
          return (
            <li>
              <div>
                <p>{item.name}</p>
                <p>Data: {item.date}</p>
              </div>
              <a onClick={() =>{
                handleClick(item.id)
              }}>
                Vizualizar
              </a>
            </li>
          );
        })}
      </SectionKML>
      <ContainerModal>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonModal>Adicionar KML</ButtonModal>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Overlay />
            <Content>
              <Dialog.Title>Adicinar KML</Dialog.Title>
              <FormModal action="">
                <InputModal type="file" />

                <button>Adicionar</button>
              </FormModal>
              <Dialog.Close />
            </Content>
          </Dialog.Portal>
        </Dialog.Root>
      </ContainerModal>
    </ContarctContainer>
  );
}
