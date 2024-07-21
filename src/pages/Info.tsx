function Info() {
  return (
    <div>
      <>
        <div>
          <nav
            className="w-full py-4 xl:px-0 px-4"
            style={{
              background: "linear-gradient(to right, #6722D1 , #72AFFD)",
            }}
          >
            <div className="max-w-6xl mx-auto">
              <img
                src=" https://cliente.processorapido.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprocesso-rapido.f01d44cd.png&w=256&q=75"
                alt=""
                className=""
              />
            </div>
          </nav>
          <div className="xl:px-0 px-4">
            <div className="max-w-6xl mx-auto py-16 md:flex-row flex-col flex items-center gap-6">
              <div className="md:w-1/2">
                <div className="">
                  <h1 className="font-[IBM Plex Sans,sans-serif] text-[#692dd4] font-bold text-xl">
                    Orientação para Utilização
                  </h1>
                  <p className="text-[#212529] py-4 text-[15px] tracking-wide">
                    Falta pouco para que você baixe seus processos rapidamente!
                  </p>
                </div>
                <div className="">
                  <h1 className="font-[IBM Plex Sans,sans-serif] text-[#692dd4] font-bold text-xl">
                    Requisição de Processo
                  </h1>
                  <p className="text-[#212529] py-4 text-[15px] tracking-wide">
                    As solicitações de processos devem ser realizadas
                    diretamente em nosso site
                    <a href="#" className="text-[#6933d6] hover:underline">
                      clique aqui para fazer login.
                    </a>
                  </p>
                  <p className="text-[#212529] text-[15px] tracking-wide">
                    Só será possível realizar pedidos de processos dos seguintes
                    tribunais: <br className="xl:flex hidden" />
                    <a href="#" className="text-[#6933d6] hover:underline">
                      Ver todos os tribunais.
                    </a>
                  </p>
                  <p className="text-[#212529] py-4 text-[15px] tracking-wide">
                    O procedimento é bem simples e você pode realizar a partir
                    de diversos dispositivo: computador, celular e tablet.
                  </p>
                </div>
                <div className="">
                  <h1 className="font-[IBM Plex Sans,sans-serif] text-[#692dd4] font-bold text-xl">
                    Segredo de Justiça
                  </h1>
                  <p className="text-[#212529] py-4 text-[15px] tracking-wide">
                    Não será possível baixar processos em
                    <span className="font-[700]">Segredo de Justiça</span>
                    de quaisquer tribunais.
                  </p>
                </div>
                <div className="">
                  <h1 className="font-[IBM Plex Sans,sans-serif] text-[#692dd4] font-bold text-xl">
                    Processos Físicos
                  </h1>
                  <p className="text-[#212529] py-4 text-[15px] tracking-wide">
                    Não será possível baixar
                    <span className="font-[700]">Processos Físicos</span>
                    de quaisquer tribunais.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <video
                  src="https://youtu.be/4s33ErhNmqU"
                  preload="metadata"
                  className="md:h-[340px] w-full h-full md:w-[90%]"
                />
              </div>
            </div>
          </div>
          <footer className="max-w-6xl sm:flex-row flex-col mx-auto xl:px-0 pb-2 gap-1 px-4 items-center text-center flex justify-center">
            <img
              src="https://cliente.processorapido.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-omnis.0d5e324a.jpeg&w=256&q=75"
              alt=""
              className="w-[60px] h-[12px]"
            />
            <p className="text-[#212529] text-[14px] tracking-wide">
              Todos os direitos reservados - Omnis Soluções Jurídicas
            </p>
          </footer>
        </div>
      </>
    </div>
  );
}

export default Info;
