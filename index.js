console.log(`Trabalhando com Listas`);

console.log(`Cidades que já visitei:`);

const balneárioCamburiu = `Balneário Camburiú`;
const fazendaRioGrande = `Fazenda Rio Grande`;
const curitiba = `Curitiba`;
const itapoa = `Itapoá`;

console.log(balneárioCamburiu, fazendaRioGrande, curitiba, itapoa);

const cidadesQueJaVisitei = new Array(
  `Balneário Camburiu`,
  `Fazenda Rio Grande`,
  `Curitiba`,
  `Itapoá`
);

cidadesQueJaVisitei.push(`Sao Paulo`);

console.log(cidadesQueJaVisitei);

console.log('A cidade mais linda:');
console.log(cidadesQueJaVisitei[0]);

console.log(`Mues amigos me disseram que eu nunca fui a Curitiba, eu estava muito bebado e mentiram pra mim.`);

cidadesQueJaVisitei.splice(2, 1);
//primeiro número do splice diz aa posição do elemento que queremos remover
//o segundo número informa quantos elementos serão excluidos;

console.log(cidadesQueJaVisitei);
