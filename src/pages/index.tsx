import Main, { MainProps } from 'components/Main'

export default function Home(props: MainProps) {
  return <Main {...props} />
}

// ATENÇÃO:
// os meétodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES!

// getStaticProps => vai gerar um estático em build time
// getServerSideprops => gerar via ssr cada request

export function getStaticProps() {
  // faz lógica
  // pode ser buscar dados em uma api
  // fazer caculo/leitura de context

  //retorno dos dados
  return {
    props: {
      title: 'Bem vindo!',
      description: 'Aqui é onde a mágica acontece'
    }
  }
}
