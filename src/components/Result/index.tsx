import { Container } from "./styles";

export function Result() {
  return (
    <Container>
      <div>
        <ul>Cidade</ul>
        <input />
        <ul>Endereço</ul>
        <input />
        <ul>Complemento</ul>
        <input />
      </div>
      <div>
        <ul>Bairro</ul>
        <input />
        <ul>UF</ul>
        <input />
      </div>
    </Container>
  )
}