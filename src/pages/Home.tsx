import AnimatedComponent from "../components/Motion";
function Home() {
  return (
    <div>
      <>
        <div>
          <nav
            className="relative w-full px-4 py-4 pb-60 xl:px-0"
            style={{
              background: "linear-gradient(to right, #6722D1, #72AFFD)",
            }}
          >
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-1 sm:gap-4">
              <img
                src=" https://cliente.processorapido.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprocesso-rapido.f01d44cd.png&w=256&q=75"
                alt=""
                className="sm:w-auto h-auto w-40"
              />
              <div className="hidden gap-5 xl:flex">
                <a
                  href="#"
                  className="font-[IBM Plex Sans,sans-serif] border-b-[3px] border-[#FFED00] pb-1 text-[17px] font-medium tracking-wide text-white"
                >
                  Início
                </a>
                <a
                  href="#"
                  className="font-[IBM Plex Sans,sans-serif] border-[#FFED00] pb-1 text-[17px] font-medium tracking-wide text-white hover:border-b-[3px]"
                >
                  Planos
                </a>
                <a
                  href="#"
                  className="font-[IBM Plex Sans,sans-serif] border-[#FFED00] pb-1 text-[17px] font-medium tracking-wide text-white hover:border-b-[3px]"
                >
                  Contato
                </a>
                <a
                  href="#"
                  className="font-[IBM Plex Sans,sans-serif] border-[#FFED00] pb-1 text-[17px] font-medium tracking-wide text-white hover:border-b-[3px]"
                >
                  Área do Cliente
                </a>
                <a
                  href="#"
                  className="font-[IBM Plex Sans,sans-serif] flex items-center gap-1 border-[#FFED00] pb-1 text-[17px] font-medium tracking-wide text-white hover:border-b-[3px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                  >
                    <rect width={16} height={16} fill="none" />
                    <path
                      fill="currentColor"
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
                    />
                  </svg>
                  Consulta Processual
                </a>
              </div>
              <div className="group flex xl:hidden relative">
                <div className="sm:h-10 cursor-pointer sm:w-12 rounded-md sm:border flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-8 w-6 h-6 sm:h-8 text-white"
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                  >
                    <rect width={32} height={32} fill="none" />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h22M5 16h22M5 24h22"
                    />
                  </svg>
                </div>
                <div className="bg-white border hidden group-hover:flex flex-col w-fit gap-4 h-fit rounded-md absolute -left-40 top-12 py-4 px-3">
                  <a
                    href="#"
                    className="font-[IBM Plex Sans,sans-serif] border-b-[1px] border-[#FFED00] pb-1 text-[14px] font-medium tracking-wide "
                  >
                    Início
                  </a>
                  <a
                    href="#"
                    className="font-[IBM Plex Sans,sans-serif] border-[#FFED00] pb-1 text-[15px] font-medium tracking-wide border-b-[1px]"
                  >
                    Planos
                  </a>
                  <a
                    href="#"
                    className="font-[IBM Plex Sans,sans-serif] border-[#FFED00] pb-1 text-[14px] font-medium tracking-wide  border-b-[1px]"
                  >
                    Contato
                  </a>
                  <a
                    href="#"
                    className="font-[IBM Plex Sans,sans-serif] border-[#FFED00] pb-1 text-[14px] font-medium tracking-wide border-b-[1px]"
                  >
                    Área do Cliente
                  </a>
                  <a
                    href="#"
                    className="font-[IBM Plex Sans,sans-serif] flex items-center gap-1  pb-1 text-[14px] font-medium tracking-wide "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <rect width={16} height={16} fill="none" />
                      <path
                        fill="currentColor"
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
                      />
                    </svg>
                    Consulta Processual
                  </a>
                </div>
              </div>
            </div>

            <div className="mx-auto flex lg:flex-row flex-col max-w-6xl items-center justify-between lg:gap-4 gap-12 md:pb-60 sm:pb-20 pb-10 pt-28">
              <div className="lg:w-1/2">
                <AnimatedComponent
                  animationType="animateLeft"
                  duration={1}
                  delay={0.5}
                >
                  <h1 className="font-[IBM Plex Sans,sans-serif] sm:text-4xl text-2xl font-semibold tracking-wide text-white">
                    Consulta Processual
                  </h1>
                  <h2 className="font-[IBM Plex Sans,sans-serif] leading-widest py-2 text-[2rem] font-[700] tracking-wide text-white">
                    Economize tempo! <br className="hidden lg:flex" />
                    Tenha a cópia integral <br className="hidden lg:flex" />
                    dos seus processos em <br className="hidden lg:flex" />
                    poucos cliques
                  </h2>
                  <p className="text-xl font-semibold text-white">
                    Acesso aos principais tribunais do Brasil
                  </p>
                </AnimatedComponent>
              </div>

              <div className="lg:w-1/2">
                <AnimatedComponent
                  animationType="animateRight"
                  duration={1}
                  delay={0.5}
                >
                  <img
                    src="https://processorapido.com/img/advogado-trabalhando-em-processo.png"
                    alt=""
                    className=""
                  />
                </AnimatedComponent>
              </div>
            </div>

            <div className="">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB74AAAEnCAMAAAAJjxwTAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAXMXWOi67fvGsG+NqUsyl95+Zk40zKAizFHVC3YdkIUkN6m+WVTL+AAAJ/0lEQVR42uzcW04CQRAF0AIBB0RF8RWI8ZHa/xr90i9iJOBMT/c5m7ipdN8bAK2aXU7zjLqHeQAAZzXfLfI3ohwAhva0XnZZgm4rygHgoNXk9jOL120fAwBat9vkWG1EOQBtWd1lVUQ5ABXbT7NyrwEAlViX8QutN9sAgLH62GbLbgMAxuNxkXx7CQAo2eQqOWz6HABQlNfkTy5WAQCDq6wA1o+rpwCAQayTk3SzAIDezMa7lFag9wCAf/Vc/erKUCYBAOfXdoO7J+sAgPOYJH26CwA4wVyNeyCbAIDjvSTH8x4OwEAuk3IsAgB+dZ0UyVQbAIe8XSRl2wUA/JglY3ETABDLZHTmAUCzHN1jFgC0x9FdgWUA0Ix9Uo99AFC9RVKfAKBa70m97gOA6ji6W/DF3h2kNBAFQQBtgyFKVFAcRDRCsO9/Rl24UVEnJmG6M+9d4sPvokoeHeB0qFGbk4sAoL1FMj+bAKArA92zpiEdoJ+bBGE2gD5eEiyNAjRiMYxv1gFAWS7daHUBaGVI8IIDNLJNGGcbAFTg1s1uhgBgd/Y+mdpZADCNTcL/rQKAEUTMKeY2APiZiDlVLQKAo3tIOLDLAOALEXMaeAoAPoiY00gAcFirhON7DgBEzOnnNQDY1zLhTz7RAeoQMWcsLzhADSLmTOsuABAxp59lADDOVUIdAYAfc/pRqQrwm/OEmkyLArh201EA8NljQn33AYAyVPoJAN6tE1oZAmDerpM39u5lmQEgCgLo9abiEURKLCj0/3+jhRVloyohd+acn+jF3J6mIYfowMROA20VwIReAs1ZJQMmswoMoQBmsQyMY1MAwzsIjOaiAEZ2GBhTAYzpJDCyqwIYzV1geIsCGEhgFgUwhMvAVCyaAO0dBeazLIC21oFpFUBHZkiYXQE08xRAgAOd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"
                alt=""
                className="absolute bottom-0 left-0 w-full"
              />
            </div>
          </nav>
          <AnimatedComponent
            animationType="animateLeft"
            duration={1}
            delay={0.5}
          >
            <div className="px-4 py-32 xl:px-0">
              <div className="mx-auto flex lg:flex-row flex-col max-w-6xl items-center justify-between lg:gap-4 gap-12">
                <div className="lg:w-1/3">
                  <h1
                    className="bg-clip-text sm:text-4xl etxt-2xl font-bold leading-snug text-transparent"
                    style={{
                      background: "linear-gradient(to right, #6825D2, #71A1F9)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Veja como o <br className="hidden lg:flex" />
                    Processo Rápido <br className="hidden lg:flex" />
                    pode te ajudar!
                  </h1>
                  <p className="py-2 text-lg font-medium text-[#212529]">
                    Em apenas um clique você pode baixar{" "}
                    <br className="hidden lg:flex" />
                    a cópia integral de qualquer processo independente de seu
                    tribunal ou <br className="hidden lg:flex" />
                    tamanho.
                  </p>
                  <button
                    className="mt-4 sm:h-[45px] sm:whitespace-nowrap rounded-md border-[3px] from-[#6825D2] to-[#71A1F9] bg-clip-border px-2 py-1.5 font-medium text-[#212529] hover:border-none hover:bg-gradient-to-r hover:text-white"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    Quero baixar agora mesmo!
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <video
                    src="https://youtu.be/4s33ErhNmqU"
                    controls=""
                    preload="metadata"
                    className="h-full w-full md:h-[280px] md:w-[90%]"
                  />
                </div>
              </div>
            </div>
          </AnimatedComponent>
          <div
            className="relative my-28 px-2 xl:px-0"
            style={{
              background: "linear-gradient(to right, #6722D1, #72AFFD)",
            }}
          >
            <div className="absolute left-0 top-0">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB74AAAEnCAMAAAAJjxwTAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAXMXWOi67fvGsG+NqUsyl95+Zk40zKAizFHVC3YdkIUkN6m+WVTL+AAAKIUlEQVR42uzd2U7CYBSF0UOLrYJhUBQRFIf//Z9RLxwgIcYYh5661kt8Vzs7CgCQTOg3AGQT+g0A2YR+A0A2od8AkE3oNwBkE/oNANmEfgNANvGqLgBADvHmqgAAKcS7RQEAMogdtwUASCB2DQsA0H2xZ1UAgM6LFwZkAJBG6DcAZBP6DQDZhH4DQDah3wCQTeg3AGQT+g0A2cRhmwIAdFXscWACALtmdXPWLs7P5tOTpqkm9Wb8cDwrfy72ODAB4H/bNPN2MBzF91iuRtuL03n9e/mO0wIAPTeunmu93savWN21Vw8/ne9YFwDolXE1vbm9u1zGXzsanE9+KN8xKgCQ3eRmHR12v74+GX853wZkAPRL1XY62wdsB4tqVj4l9BuAXqnaYWS3HD5O6/KB0G8AeqHpQbYPGEzKAaHfADyxdy86TURRFECPrR1m7AsrVGgEBc7/f6Mao4kEQqGlM3fuWj+xM3NP9i5as7uMsZtt8n8hvwEo0fnVwyzqspjmXyG/AShJ2y22UbGPXf4S8huAErTd7ffgj7vYxzwBoC/3N1V/bh+gSQA4vatlcIAvCQAnND/7FOzJgAkAvet+BMeyTQB4X9PddfAKDtAB6NW6tILyciQAHN1q0f9+57glABzP+WaULeXDc58AcAST2+B0PicAHKK9qK2qfAiWCQBv03wI9ucBHICeNQ7LX0l+A9Cri7tgABIA9vLN7/IBSQB4SedEbWgmCQDPOwuGaJcA8JSVwZEBmyUAPLIx8jl4CQD/zBdBERIAfmtUl5ckAajejbmw4rQJQL2my6BI6wSgSuttUC4LJgDVaR+C0n1NAOoxsTwyFglAFdbXwYgkAGO3ugzGJgF+snd3uwxEURSAtw6apigN4UJ/1H7/Z3QnIRJFZ8w+830vsXLWyTmLht1aDWvU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"
                alt=""
                className=""
              />
            </div>
            <div className="mx-auto flex max-w-3xl flex-col items-center pt-60 lg:pt-[300px] text-center text-white">
              <h1 className="text-3xl font-semibold">
                Uma gama de benefícios e vantagens para você!
              </h1>
              <img
                src="https://processorapido.com/img/baixar-processo-rapido.png"
                alt=""
                className="py-8"
              />
              <h2 className="text-2xl font-semibold">
                Arquivos contidos nos processos baixados rapidamente
              </h2>
              <h4 className="text-[17px] font-medium">
                Chega de perder tempo fazendo o download dos arquivos de seu
                processo um a um. Com o Processo Rápido você nem sequer terá o
                trabalho de abrir arquivo por arquivo, deixamos tudo compilado
                em um único PDF para você.
              </h4>
              <div className="flex items-center gap-2 pb-10 pt-20">
                <div className="h-3 w-3 cursor-pointer rounded-full bg-white" />
                <div className="h-3 w-3 cursor-pointer rounded-full bg-[#B5ABF0]" />
                <div className="h-3 w-3 cursor-pointer rounded-full bg-[#B5ABF0]" />
                <div className="h-3 w-3 cursor-pointer rounded-full bg-[#B5ABF0]" />
              </div>
              <div className="absolute -bottom-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#6D69E7]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <rect width={24} height={24} fill="none" />
                  <path
                    fill="currentColor"
                    d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="px-4 py-10 xl:px-0">
            <div className="mx-auto lg:flex-row flex-col flex max-w-6xl lg:gap-4 gap-12">
              <div className="lg:w-1/2">
                <div className="">
                  <h1 className="sm:text-4xl text-2xl font-semibold leading-snug text-[#212529]">
                    Confira no mapa os <br className="hidden md:flex" />
                    tribunais cobertos pelo <br className="hidden md:flex" />
                    <span className="font-bold"> Processo Rápido </span>
                  </h1>
                  <p className="pt-4 font-medium text-[#212529]">
                    Não encontrou algum tribunal?
                  </p>
                  <a
                    href="#"
                    className="font-medium text-[#6933d6] hover:underline"
                  >
                    {" "}
                    Envie sua sugestão!{" "}
                  </a>
                </div>
              </div>
              <div className="">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n          #svg-map path { fill:#bfc0c2 }\n          #svg-map text { fill:transparent; font:12px Arial-BoldMT, sans-serif; cursor:pointer }\n          #svg-map a{ text-decoration:none }\n          #svg-map a:hover { cursor:pointer; text-decoration:none }\n          #svg-map a:hover path{ fill:rgb(107 87 225)!important; }\n          #svg-map .circle { fill:#8d9298 }\n          #svg-map a:hover .circle { fill:#72adfd !important; cursor:pointer }\n        ",
                  }}
                />
                <svg
                  version="1.1"
                  id="svg-map"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width=""
                  height=""
                  className="sm:w-[450px] h-[460px] max-w-full mx-auto sm:mx-0"
                  viewBox="0 0 450 460"
                  enableBackground="new 0 0 450 460"
                  xmlSpace="preserve"
                >
                  <g>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Tocantins"
                      code={17}
                      uf="to"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M289.558,235.641
  c16.104,0.575,44.973-31.647,44.835-45.259c-0.136-13.612-17.227-58.446-22.349-66.088c-5.122-7.628-37.905,2.506-37.905,2.506
  S234.852,233.695,289.558,235.641z"
                      />
                      <text
                        transform="matrix(1 0 0 1 287.0137 188.3208)"
                        fill="#FFFFFF"
                      >
                        TO
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Bahia"
                      code={29}
                      uf="ba"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M313.276,197.775
  c2.084-2.739,3.506-7.012,6.464-8.764c1.641-0.973,3.232-4.684,4.271-5.163c2.304-1.014,12.161-25.143,20.706-22.513
  c1.095,0.342,29.881,3.478,32.153,7.532c2.246-0.506,17.582-8.804,25.829-4.999c9.172,4.246,11.225,20.679,11.2,20.843
  c0.107,0.328-0.823,5.765-0.985,5.929c-1.15,1-5.258-0.807-4.22,2.138c1.317,3.751,5.094,10.583,9.97,6.613
  c-3.669,6.574-6.846,16.022-13.966,17.747c-5.808,1.411-4.605,13.421-5.178,18.037c-0.465,3.75,0.192,8.448,1.014,12.117
  c1.148,4.959-0.821,8.6-1.808,13.42c-0.822,4.162-0.219,8.299-0.987,12.297c-0.271,1.286-4.407,5.723-5.559,7.148
  c-1.616-1.426-63.952-37.248-73.1-36.265c1.149-3.738,2.438-9.559-0.741-12.723c-8.625-8.572-0.135-19.335-0.162-19.432
  c-0.546-1.725-5.396-6.079-0.026-7.175c-3.175,0.959-1.944-4.027,0.875-3.012C316.726,200.733,314.044,200.527,313.276,197.775z"
                      />
                      <text
                        transform="matrix(1 0 0 1 359.7324 210.1221)"
                        fill="#FFFFFF"
                      >
                        BA
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Sergipe"
                      code={28}
                      uf="se"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M408.561,191.735
  c0.521-1.505,2.465-0.725,3.533-0.794c2.273-0.164,0.494-2.738,1.095-3.778c2.026-3.793-2.738-5.999-1.998-10.408
  c4.024,1.931,9.448,3.397,12.408,6.89c1.343,1.533,5.504,2.656,5.832,4.847c-6.822,0.384-6.901,8.819-11.942,11.572
  C413.545,202.212,407.055,193.721,408.561,191.735z"
                      />
                      <text
                        transform="matrix(1 0 0 1 408.9121 198.6689)"
                        fill="#FFFFFF"
                      >
                        SE
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Pernambuco"
                      code={26}
                      uf="pe"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M373.011,167.238
  c2.709-0.795,6.218-14.106,8.325-15.106c4.136-1.986,17.255-1.437,17.8,4.903c-0.437-0.068,8.189-2.273,7.479-1.466
  c1.7-0.711,10.518-4.723,12.599-4.82c0.274-0.013,4.603,0.905,3.068,2.315c-0.464,0.439,4.219,3.698,10.789,3.45
  c4.66-0.176,5.179-3.436,8.627-4.409c5.89-1.67,4.737,3.698,5.589,6.943c-1.182,2.684-1.646,5.586-2.74,8.285
  c-1.533,3.792-9.804,9.791-13.39,12.119c-7.287,4.778-21.802-4.067-22.762-5.67c-0.602-0.985-2.55-5.121-3.178-5.107
  c-0.629,0.356-1.04,0.861-1.287,1.519c-0.904-0.013-7.256-3.533-7.502-4.655c-4.769-1.151-5.425,6.108-8.957,6.19
  c0.219,0.108-8.244,6.681-7.506,3.314C383.556,170.4,374.241,168.566,373.011,167.238z"
                      />
                      <text
                        transform="matrix(1 0 0 1 401.3984 165.8003)"
                        fill="#FFFFFF"
                      >
                        PE
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Alagoas"
                      code={27}
                      uf="al"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M413.953,169.018
  c3.78,3.313,9.424,5.505,12.547,5.491c3.229-0.013,5.009-3.328,7.421-4.794c1.177-0.712,10.297-1.93,9.174,1.042
  c-1.807,4.848-7.122,8.585-10.024,12.789c-2.792,2-3.423,7.093-6.354,1.864c-3.259,0.424-3.722-4.424-6.957-4.477
  c-3.668-2.261-7.998-3.769-11.201-6.342C410.615,172.646,412.751,171.359,413.953,169.018z"
                      />
                      <text
                        transform="matrix(1 0 0 1 429.7891 183.895)"
                        fill="#FFFFFF"
                      >
                        AL
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Rio Grande do Norte"
                      code={24}
                      uf="rn"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M404.698,138.795
  c2.383-4.027,6.574-6.123,8.49-11.149c1.973-5.107,3.834-5.818,8.764-4.642c5.041,1.207,9.339,0.837,14.57,1.671
  c7.534,1.193,6.848,10.968,9.206,16.516c-1.919,1.096-13.972,0.521-15.064-1.657c-1.041-2.067-2.904,7.107-5.094,7.3
  c1.532-5.847-12.654,1.78-5.424-8.683c2.545-3.67-6.302-0.808-6.711,0.725C410.121,144.013,407.217,139.151,404.698,138.795z"
                      />
                      <text
                        transform="matrix(1 0 0 1 422.541 123.9009)"
                        fill="#FFFFFF"
                      >
                        RN
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Ceará"
                      code={23}
                      uf="ce"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M372.379,104.409
  c0.437-1.368,2.961-3.627,1.043-5.025c12.106-1.328,17.581-0.849,27.66,6.723c4.026,3.054,6.822,5.574,10.571,9.147
  c1.317,1.273,7.614,4.313,7.914,6.164c-0.054-0.316-5.396,3.696-5.997,5.217c-1.066,2.684-2.659,6.093-4.3,8.298
  c0.025-0.055-6.903,3.957-3.532,4.217c-4.41,3.821-1.015,8.135-0.797,11.517c0.196,2.767-4.38,7.587-6.765,5.422
  c-2.244-1.999-3.998-5.711-7.779-5.094c-1.998,0.329-5.476,2.189-7.612,0.479c-2.52-2.054,3.669-5.162-0.545-7.354
  c-6.987-3.615-1.264-15.393-6.684-20.239c-3.504-3.136,1.753-7.313,0.109-10.749C374.952,111.68,373.694,105.244,372.379,104.409
  C373.035,102.314,374.815,105.971,372.379,104.409z"
                      />
                      <text
                        transform="matrix(1 0 0 1 386.8379 129.0347)"
                        fill="#FFFFFF"
                      >
                        CE
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Piauí"
                      code={22}
                      uf="pi"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M320.781,185.478
  c2.465-5.149-7.505-20.801-7.505-20.801s47.354-65.868,54.285-66.841c0.299-0.042,6.243,1.768,6.463,2.219
  c0.438,0.863-0.821,5.244-0.685,6.587c0.275,2.629,2.879,6.587,2.328,8.684c-1.15,4.736-1.863,6.134,1.369,9.901
  c2.794,3.245,0.325,10.16,2.544,14.269c-1.778,4.23,4.768,3.656,3.943,7.613c-0.655,3.163-5.424,7.655-1.176,10.312
  c0.274,4.642-4.685,4.983-6.79,7.818c-2.631,2.835-5.535,5.013-7.999,7.888c-0.55,0.671-8.821,4.096-9.998,4.082
  c0.302-0.301-17.665-6.449-11.967,2.354c2.463,3.808-1.505,5.56-3.177,8.778c-0.633,2.164-5.836,0.958-7.836,3.205
  C328.176,198.748,327.409,180.727,320.781,185.478z"
                      />
                      <text
                        transform="matrix(1 0 0 1 355.127 158.1045)"
                        fill="#FFFFFF"
                      >
                        PI
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Maranhão"
                      code={21}
                      uf="ma"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M288.845,127.827
  c4.108-2.726,31.195-48.985,31.386-50.395c1.235,0.397,6.084,7.435,7.562,5.025c0.493,0.013-0.328,2.15-0.547,2.396
  c-0.054-0.135,2.189-2.286,2.52-2.436c0.521-0.233,1.948,1.903,3.451-0.726c5.642,1.575,1.314,14.31,9.121,11.694
  c-1.147,0.384,1.452,0.74,0.848,1.905c5.095-6.587,8.488-0.027,15.337,1.491c2.025,0.466,6.243,0.575,8.162,0.207
  c3.808-0.823-2.082,6.847-2.082,6.887c-1.369,2.986-5.041,1.713-6.818,5.683c-0.684,1.549-3.506,4.327-3.042,6.148
  c0.494,1.781,2.081,2.863,0.274,4.629c0.603,2.793,3.066,7.109-0.385,9.12c-4.601,4.383,2.304,7.52,1.316,11.598
  c-0.9,3.726-6.244,5.725-9.147,2.78c-4.847-0.11-6.872,3.821-10.406,6.45c-2.74,2.041-8.793,2.493-10.327,5.642
  c-1.918,3.929-3.699,8.763-5.341,12.79c-1.699,4.204,6.383,18.762-4.328,15.611c-0.932-0.273-3.396-4.725-3.396-5.738
  c-0.081-3.739-2.738-4.176-4.821-7.477c0.356-3.025,2.466-6.929,4.766-8.052c3.342-1.63,1.919-6.629-2.466-4.465
  c-3.505,1.726-4.709-2.794-6.958-5.287c0.548,0.59-3.064-4.696-3.146-3.697c0.19-1.89,2.876-5.833,3.341-8.448
  c0.575-3.259,0.52-6.764-0.521-10.105c-0.63-2.068-4.656-4.521-6.518-4.437c-1.289,0.287-2.443,0-3.427-0.878
  C290.983,125.675,290.983,128.044,288.845,127.827z"
                      />
                      <text
                        transform="matrix(1 0 0 1 318.2754 126.7036)"
                        fill="#FFFFFF"
                      >
                        MA
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Amapá"
                      code={16}
                      uf="ap"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M225.198,39.089
  c3.274,1.165,3.985-1.315,6.572-1.74c3.616-0.603,5.683,2.725,9.037,2.067c4.055-0.78,7.093-8.025,7.314-11.598
  c4.492-3.534,5.503-11.258,9.42-14.68c6.055,4.258,6.11,15.788,7.589,22.485c-0.164,0.083,6.57,7.998,7.944,8.682
  c3.396,1.657,3.366,6.203,0.078,9.34c-3.777,3.587-7.449,34.275-7.449,34.275h-46.489c0,0,0.932-50.366,0-51.449
  C221.814,36.458,223.334,38.417,225.198,39.089z"
                      />
                      <text
                        transform="matrix(1 0 0 1 245.9023 52.6099)"
                        fill="#FFFFFF"
                      >
                        AP
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Pará"
                      code={15}
                      uf="pa"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M173.378,50.619
  c2.259,2.63,5.629-4.478,7.901-3.82c3.19,0.918,1.478-1.108,5.026-1.752c1.931,0.806,3.096,0.273,3.519-1.631
  c0.535-1.26,1.453-1.726,2.725-1.384c1.768-1.684,13.558,3.603,14.68,0.384c0.629-1.821-4.287-5.709-0.302-6.997
  c1.643-0.533,6.012,0.808,8.75-0.068c3.986-1.288,4.876,2.684,4.382,6.066c0.631,3.587,13.145,5.766,12.982,7.97
  c3.589-1.518,5.354,12.763,7.105,14.447c0.357,4.26,6.304,8.585,7.07,12.544c0.628,3.396,7.065,3.616,8.213,0.095
  c2.578-8.133,9.696-10.022,13.475-16.651c4.603-8.038,3.725,3.752,8.955,1.067c2.11,0.411,2.876,3.629,4.574,4.724
  c3.18,2.027,7.779,0.974,10.572,3.013c-4.192,4.382,8.188,3.752,9.231,3.875c4.682,0.575,8.104,2.383,11.855,3.629
  c-0.164-0.069,4.792,0.52,5.178,1.245c2.026,3.767-4.904,19.214-6.382,21.486c-1.121,1.713-2.932,4.985-3.727,6.834
  c-0.902,2.026-4.764,7.313-4.655,9.229c-1.888,0.972-2.248,4.835-5.012,4.328c-3.096,3.026-8.187,4.999-10.27,8.956
  c2.057,0.781,8.325,1.041,5.311,4.272c-0.821,0.877-1.094,5.533-1.615,6.833c-0.575,1.384-4.464,4.779-6.108,5.34
  c-4.107,1.426-2.736,4.135-4.271,7.655c-0.933,2.054-0.546,3.491,1.756,4.339c-0.083,2.835-0.988,5.575-2.385,7.998
  c-3.041,5.245-9.009,9.818-10.079,16.27c-3.261,3.408-87.066-1.22-87.464-2.644c-1.423-5.012,1.508-24.006-2.808-27.88
  c-0.19-2.082-29.893-6.299-30.714-8.081C150.016,140.479,173.173,58.561,173.378,50.619z M319.139,77.664
  C319.302,76.912,319.74,78.76,319.139,77.664z"
                      />
                      <text
                        transform="matrix(1 0 0 1 232.7725 122.5137)"
                        fill="#FFFFFF"
                      >
                        PA
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Roraima"
                      code={14}
                      uf="rr"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M113.18,24.107
  c-0.972-2.753-7.861-5.889-6.999-8.984c0.068-0.232,13.229,6.053,12.79,2.808c0.398,1.329,1.219,1.889,2.439,1.685
  c1.889-1.301,7.148,4.204,8.216,1.889c0.438-0.959-1.657-3.753,0.74-3.848c1.026,0.438,1.534,0.164,1.52-0.822
  c0.835-1.752,3.575,0.219,4.793,0.083c0.767-1.056,10.625-3.026,9.037-5.094c1.37,0.438,4.574,0.808,4.63-1.547
  c4.546-2.054,1.15-4.409,2.644-6.354c2.177-2.82,9.791,0.809,7.327,5.738c-1.972,3.93,7.121,4.027,5.724,9.366
  c-0.452,1.686-2.479,2.724-3.423,3.971c-1.179,1.546-1.836,9.243-1.356,11.53c1.041,4.889,3.231,8.695,6.134,12.16
  c1.712,2.027,5.614,2.261,5.724,4.369c0.164,2.945,1.165,6.177,0.329,9.092c-1.547,5.424-36.618,30.471-36.618,30.471
  s-12.517-52.736-20.335-54.063C115.261,36.417,111.523,25.682,113.18,24.107z"
                      />
                      <text
                        transform="matrix(1 0 0 1 136.2939 42.3862)"
                        fill="#FFFFFF"
                      >
                        RR
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Amazonas"
                      code={13}
                      uf="am"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.078,136.412
  c1.15-4.972,4.258-10.394,8.215-13.105c4.41-3.027,7.656-5.71,13.105-6.082c2.165-0.149,10.216-5.75,11.983-2.984
  c3.711,5.765,4.998-3.739,5.574-7.025c1.726-9.667,3.697-19.322,4.86-29.086c-0.342-1.356-2.013-6.231-2.833-7.163
  c-1.453-1.616-4.287-2.122-4.768-4.544c-0.272-1.452-0.574-7.258,1.109-8.121c3.494-1.768,6.547-0.042,9.737-0.89
  c-2.561-4.053,0.302-4.327-5.532-5.135c-3.438-0.466-3.971-2.466-2.738-6.368c1.053-3.3,15.898-1,19.088-1.396
  c-1.534,0.178-1.11-2.479-0.042-2.616c1.274-0.165,1.576,2.684,3.165,0.998c1.286-1.395,3.189-2.915,4.6-3.751
  c2.438-1.45,4.533,8.217,4.465,9.833c-0.041,0.78-0.137,2.438,1.177,2.246c3.012-0.466,4.219,2.849,7.273,4.231
  c3.778,1.713,3.929-1.355,7.023-2.068c4.301-0.985,0.711,3.396,2.383,3.793c1.589,0.385,3.806-4.969,4.821-5.572
  c0.93-0.533,3.725-0.753,4.846-1.602c3.013-2.245,1.933-1.686,3.492-1.206c3.478,1.041,2.233-8.367,6.491-7.066
  c1.822-0.466,3.643-2.34,5.533-2.423c1.041-0.043,6.066,2.287,6.544,3.147c0.589,1.465,0.316,2.795-0.793,3.986
  c1.575,1.425,2.698,3.149,3.355,5.162c0.904,2.862-1.286,6.807,0.588,9.299c-0.22,6.655,4.808,7.887-0.396,12.597
  c0.192-0.178,6.711,7.067,7.121,8.039c0.971-0.711,4.066,0.849,4.381,1.535c-1.658-3.629,0.547-17.09,6.628-10.915
  c7.203,7.327,5.491-3.615,9.148-8.627c2.834-3.875,14.597-3.136,14.077,3.246c-1.082,3.273,6.271,14.256,9.667,11.436
  c2.26,5.737,6.889,4.285,10.407,8.051c5.094,5.464,4.37,3.396,11.313,2.848c-2.259,3.602-3.425,4.808-5.272,8.86
  c-3.149,6.862-6.15,13.776-9.204,20.678c-2.437,5.505-14.843,23.471-11.105,28.442c4.806,6.395,9.339,30.183,11.324,29.934
  c-6.162-0.26-48.079-10.625-51.652-8.105c-1.453,1.013-53.626,10.503-55.9,10.819c-6.369,0.875-18.09-7.272-23.719-10.136
  c-8.601-4.381-16.61-8.981-26.088-11.05c-10.282-2.259-20.635-4.793-29.878-10.011C4.121,145.766,12.433,144.779,10.078,136.412z"
                      />
                      <text
                        transform="matrix(1 0 0 1 98.1406 119.0591)"
                        fill="#FFFFFF"
                      >
                        AM
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Acre"
                      code={12}
                      uf="ac"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.656,148.545
  c12.557,7.544,27.524,8.367,41.082,13.2c12.802,8.065,27.278,12.845,40.616,19.872c-2.834,1.205-7.587,4.382-9.983,6.395
  c-2.93,2.45-1.3,2.04-4.628,1.957c-2.93-0.069-3.957,4.615-7.203,5.259c-2.999,0.603-7.161-1.958-10.995-1.697
  c-1.905,0.136-11.969-0.056-12.64,0.603c0.313-3.642-0.385-7.299-0.165-10.941c0.096-1.439,1.998-6.533,1.245-7.451
  c-6.82,3.149-8.339,7.19-16.733,7.013c-2.136-0.042-2.562-2.492-3.081-4.001c-1.247-3.572-7.218-3.422-10.559-3.778
  c6.299-3.41-3.107-11.9-5.216-15.679c-0.52-0.918-3.588-4.655-3.629-5.957C1.642,150.174,6.612,151.968,3.656,148.545z"
                      />
                      <text
                        transform="matrix(1 0 0 1 47.7017 184.9355)"
                        fill="#FFFFFF"
                      >
                        AC
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Rondônia"
                      code={11}
                      uf="ro"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M83.34,180.232
  c0.931-1.574,5.341-4.668,6.312-4.656c1.355-0.067,2.671,0.138,3.958,0.603c3.012,1.44,2.039-1.135,5.341-0.123
  c-1.274-2.287,3.793-2.943,2.86-0.315c3.068,0.247,2.725-4.683,6.668-5.12c4.438-0.508,5.054-0.646,7.122-4.534
  c0.135-0.246,2.628-5.519,2.752-5.025c2.191-6.491,14.585-0.878,15.638,3.355c0.397,1.615,1.834,3.137,3.642,4.369
  c1.246,0.862,6.327-3.999,6.134,1.314c-0.78,1.274,26.663,7.656,30.005,19.282c3.82,13.338-16.421,32.167-18.173,34.043
  c-4.464,1.191-2.039,1.726-6.6,0.15c-2.574-0.875-6.422,0.986-9.08,0.289c-2.409-0.645-3.041-3.957-5.86-4.683
  c-3.055-0.78-5.423-1.795-7.654-3.93c-4.041-3.876-8.983-2.645-14.475-3.808c-1.835-0.083-6.053-6.779-7.874-5.327
  c-1.821-0.438-5.381-9.094-3.397-11.204c0.124-1.67-0.26-3.204-1.163-4.627c-0.986-2.644,1.041-5.026,0.863-7.806
  c-0.384-6.081-1.028-1.986-3.382-1.903C94.336,180.686,85.957,181.671,83.34,180.232z"
                      />
                      <text
                        transform="matrix(1 0 0 1 118.1299 195.3193)"
                        fill="#FFFFFF"
                      >
                        RO
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Mato Grosso"
                      code={51}
                      uf="mt"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M142.237,173.962
  c4-0.316-1.888-6.452,5-5.738c7.914,0.808,16.295,0.328,24.279,0.218c1.629-0.013,8.902,1.288,7.395-1.833
  c-1.192-2.453,1.821-6.425,0.425-9.725c2.027-0.864,1.289-3.807,2.629-5.107c1.151-1.123,4.176,7.244,4.436,7.819
  c1.097,2.451,0.398,5.478,1.932,7.654c1.41,1.987,4.574,2.136,5.889,4.259c3.136,5.136,10.845,4.137,17.13,4.657
  c20.159,1.656,40.356,2.669,60.486,4.752c-3.48,7.763-3.999,14.912-5.122,22.552c-0.437,2.972,1.863,7.163-0.056,10.065
  c1.945,1.287,1.346,2.753,1.424,4.409c1.151,25.129-20.429,60.186-33.548,58.569c-10.914-1.369-45.3,0.058-46.928-3.396
  c-1.165-3.944-6.136-2.658-8.395-6.603c-2.301-4.051,0.684-6.299,0.737-10.242c-6.997,0.603-14.09-0.384-21.102-0.324
  c0.793-5.016-3.725-9.288-2.929-13.809c0.519-3.025,2.726-2.916,0.932-6.79c-1.206-2.589-0.261-4.247-0.699-6.382
  c-0.289-1.385-1.042-1.876-2.124-2.424c-2.931-1.493,1.246-2.48,2.056-3.644c1.726-2.465,3.299-11.394,6.545-11.612
  c1.219-1.999-1.781-3.643-1.465-5.56c-3.902-3.588,0.506-4.643,0.369-7.984c-0.151-3.627-9.654-3.944-12.256-3.751
  c-1.821,0.137-4.109,0.562-5.888-0.094c0.493-3.521-0.521-6.054-0.535-9.217c-0.014-2.286,1.288-5.177,0.835-7.45
  C143.581,176.618,141.937,174.714,142.237,173.962z"
                      />
                      <text
                        transform="matrix(1 0 0 1 200.0244 218.4175)"
                        fill="#FFFFFF"
                      >
                        MT
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Mato Grosso do Sul"
                      code={50}
                      uf="ms"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M183.198,294.536
  c2.136-4.464,3.177-9.394,5.312-13.61c1.712-3.344-4.067-7.587-2.423-9.807c0.027-0.026,2.738,3.641,3.917,3.725
  c3.204-1.534,4.807-2.272,6.984-5.228c2.615-3.59,10.832-3.014,14.051-0.305c1.259,1.041,3.068,2.107,4.668,2.574
  c3.163,0.934,5.889-3.013,8.559-0.873c3.724,2.982,4.626-1.862,7.86-3.509c1.945-1.012-1.768,8.465-2.244,7.781
  c2.463,0.959,4.285,0.901,6.82,0.959c3.504,0.081,1.805,1.205,2.436,3.339c0.466,1.564,28.948-5.997,29.416,0.578
  c0.302,3.837-0.987,61.813-0.987,61.813s-39.532,5.533-41.602,5.286c-3.889-0.492-3.587-3.231-8.063-0.933
  c-2.028,0.329-6.012,1.205-5.177-2.409c-2.013-4.354-0.111-14.625-4.849-17.088c-1.206-0.659-7.092-2.36-7.504-1.945
  c-1.699,1.777-3.739,1.562-6.121,1.121c-2.904,0.027-5.629-1.614-8.243-1.203c-4.178,0.656-0.603-2.986-1.645-3.535
  c0.932-2.847,1.411-9.912,0.453-11.856c-0.165-0.331-3.52-7.232-2.547-8.108C186.306,297.688,182.334,299.415,183.198,294.536z"
                      />
                      <text
                        transform="matrix(1 0 0 1 213.2939 306.7236)"
                        fill="#FFFFFF"
                      >
                        MS
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Goiás"
                      code={52}
                      uf="go"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M237.768,270.519
  c0.628-2.904,1.835-7.396,4.709-8.766c1.015-1.644,1.754-5.147,2.275-5.586c2.408-2.247,3.889-3.783,6.63-4.656
  c3.723-1.205,3.338-5.342,4.846-8.165c1.504-2.845,4.736-1.15,5.942-3.382c1.479-2.834,0.741-6.161,2.189-8.874
  c2.902-5.531,1.862-17.363,8.656-20.567c-4.878,7.641,3.698,4.971,7.201,9.449c2.273,1.738,2.164-1.822,2.71-3.055
  c1.618-3.533,2.878,2.247,4.52-1.533c0.413,0.37,4.136,5.765,3.427,5.601c-0.029-0.931,0.326-1.408,1.037-1.438
  c0.108,0.534,0.274,1.013,0.602,1.452c-0.602-0.261,9.697-0.095,8.82,1.534c0.36-0.657-0.602-3.11,0.221-3.438
  c1.039-0.411,3.971,1.368,6.351,0.438c1.045-0.397,7.889-2.807,7.671-3.683c0.767,0.905,1.262,2.67,2.85,1.286
  c-2.632,2.274-2.576,4.466,1.258,3.821c-1.861,1.438-2.846,4.341-2.382,6.547c0.357,1.643,3.752,5.973,3.478,6.751
  c-1.78,0.315,0.602,5.438-2.325,6.078c-3.181,0.701-3.973-5.53-4.3,0.688c-0.164,1.48-1.097,1.67-2.768,0.576
  c-3.288,0.327-0.549,2.19-1.121,3.888c-0.988,2.902,2.792,6.437-2.411,6.764c-3.586,0.219-2.682,1.341-2.682-2.739
  c-0.028-4.573-12.054-3.643-10.218,0.521c-4.901,6.355,12.05-0.326,9.668,6.355c-1.313,3.752,15.83,28.211,10.406,25.416
  c-1.944-0.986-50.804,10.271-49.982,12.105c-5.012-2.136-11.804-7.941-17.391-8.162c-0.438-2.189-3.618-1.284-5.095-1.533
  c-3.724-0.604,1.04-3.231,0.22-4.109c-1.89-1.916-4.382,1.756-3.588-3.012C239.602,274.627,237.055,273.038,237.768,270.519z"
                      />
                      <text
                        transform="matrix(1 0 0 1 266.9111 254.2139)"
                        fill="#FFFFFF"
                      >
                        GO
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Paraná"
                      code={41}
                      uf="pr"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M222.225,363.694
  c1.807-2.138,1.889-4.881,2.424-7.479c0.301-1.453,0.465-7.86,1.369-8.736c2.3-0.684,2.3-3.315,2.726-5.204
  c0.616-2.738,2.821-2.958,3.984-5.616c4.369-9.91,38.947-9.529,46.476-9.227c4.658,0.193,15.775,34.563,17.916,33.794
  c-1.728,2.19-5.754,8.929-8.41,8.984c-4.054,0.057-14.215,14.68-14.215,14.68s-37.329-12.05-40.287-11.285
  c-3.875-1.449-2.698-6.491-6.054-8.216C226.663,364.623,222.498,367.8,222.225,363.694z"
                      />
                      <text
                        transform="matrix(1 0 0 1 248.4453 356.1045)"
                        fill="#FFFFFF"
                      >
                        PR
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Santa Catarina"
                      code={42}
                      uf="sc"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M231.029,383.959
  c1.669-3.338-0.284-10.516,4.573-10.569c6.631-0.109,13.639,3.559,20.402,3.888c1.317,0.055,5.231,2.163,4.357-1.15
  c-1.095-4.164,3.945-1.863,5.67-3.179c2.274-1.724,8.187-4.106,11.311-1.367c1.423,1.809,20.05-5.395,13.284,3.946
  c-1.368,1.395,0.713,10.789,0.466,10.734c-3.449,4.438,1.726,11.666-5.096,15.334c-2.901,1.536-7.284,7.779-9.64,9.995
  C276.085,411.866,233.534,382.918,231.029,383.959z"
                      />
                      <text
                        transform="matrix(1 0 0 1 266.9111 387.7646)"
                        fill="#FFFFFF"
                      >
                        SC
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Rio Grande do Sul"
                      code={43}
                      uf="rs"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M191.236,416.881
  c0.52-2.684,7.38-8.409,9.477-10.351c0.37-0.359,8.599-10.08,9.174-8.329c-1.301-3.89,2.781-1.589,3.917-4.819
  c0.26-0.521,7.04-4.821,7.109-4.795c1.436-0.191,6.721-3.695,7.421-3.257c1.204-2.028,8.927-1.479,8.653-0.824
  c1.165-0.38,2.284-0.877,3.326-1.479c0.221-0.821,22.459,7.533,24.319,11.531c2.523,5.34,12.217,2.822,13.15,5.563
  c0.106,0.275-5.809,9.339-3.89,9.173c-0.985,0.08,3.204-2.875,3.834,0.409c-2.793,3.619-4.6,7.834-6.571,11.944
  c-3.696,7.614-8.872,12.765-15.886,17.42c-7.394,4.902-7.339,11.941-13.257,17.693c-8.091,7.942-10.159-0.574-4.08-5.752
  c3.806-3.231-22.527-19.746-25.578-22.732c-1.918-1.862-2.384,0.274-4.219,1.15c-2.547,1.205-1.917-2.822-3.588-4.273
  c-2.3-1.999-4.793-5.479-7.737-6.68c-3.478-1.367-5.615,5.145-9.052,0.821C189.168,418.854,190.332,418.032,191.236,416.881z"
                      />
                      <text
                        transform="matrix(1 0 0 1 231.0313 414.4658)"
                        fill="#FFFFFF"
                      >
                        RS
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="São Paulo"
                      code={35}
                      uf="sp"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M239.3,330.554
  c3.26-4.356,9.56-5.039,11.531-10.792c1.369-3.942,3.889-8.818,6.135-13.036c1.561-2.957,7.749-7.121,10.517-8.65
  c0.383-0.196,32.974-6.138,42.234-1.701c20.265,9.724,26.017,33.879,27.854,33.304c4.408-1.425,5.34,3.778,2.106,4.49
  c-1.754,0.413-6.519,1.479-6.49,3.399c0.027,3.448,0.521,1.615-2.931,3.639c-2.189-1.42-3.34,4.111-4.763,3.426
  c-4.271-2.244-6.958,2.96-9.258,1.918c-4.271-1.918-16.98,13.092-19.638,15.336c0.245-0.218-1.148-1.479-1.587-2.685
  c-0.466-1.369-2.658,0.385-4.025,0.082c-0.986-0.192,1.751-4.079-2.303-4.52c-1.369-0.164-3.753,0.303-4.929,0.084
  c-2.903-0.547,0.108-2.41-0.439-3.862c-1.067-2.986-3.013-4.931-3.751-7.779c-0.52-1.945,0.165-7.531-3.615-7.395
  c-0.848-2.956-6.628-1.451-9.066-1.862c-0.162,0.163-8.846-2.684-10.079-2.684c-1.616-0.029-6.791-3.396-7.121-0.274
  C247.982,330.386,239.876,331.21,239.3,330.554z"
                      />
                      <text
                        transform="matrix(1 0 0 1 280.6816 327.3193)"
                        fill="#FFFFFF"
                      >
                        SP
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Minas Gerais"
                      code={31}
                      uf="mg"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M262.881,297.305
  c-1.696-5.094,15.531-19.882,18.844-13.421c5.531-7.367,15.886,1.588,19.773-3.944c0.988-1.367,3.015-1.453,3.725-2.957
  c0.326-0.711-0.493-2.793-0.056-3.888c1.369-3.398-4.873-2.355-0.109-6.603c4.547-4.053-1.917-4.739-1.204-8.186
  c0.957-4.604,1.807-4.713,5.613-6.027c1.943-0.688,0.906-8.272,0.083-8.52c-0.108-2.699,1.974-2.546,3.782-1.617
  c2.188-0.135-0.276-3.695,0.957-4.243c-0.357,0.151,5.559,1.999,5.724,2.055c0.986,0.358-0.52,3.534-0.931,3.943
  c8.217-2.355,14.514-11.789,23.279-11.242c4.983,0.316-0.327,4.339,5.367,5.544c0.684,1.234,3.34-1.054,4.054-1.189
  c2.876-0.536,5.53,3.284,8.106,3.886c2.301,3.578,7.503,0.537,10.298,3.001c1.755,1.589,2.188,3.397,3.396,5.313
  c1.314,2.052,3.86-0.465,5.726-0.109c3.257,0.656,6.326,2.026,9.338,3.723c2.19,1.205,0.768,3.179-0.548,4.573
  c-0.765,0.796-3.259,6.165-2.627,5.643c-2.138,1.781-2.628-1.669-3.397,2.764c-0.628,3.674,0.164,4.714,3.149,7.015
  c4.901,3.229-6.765,3.12-6.71,3.504c0.22,0.601-2.846,41.96-3.835,42.179c-6.737,1.562-14.513,5.311-21.744,7.012
  c-12.736,2.985-24.295,3.778-29.471,4.656c0,1.452-5.367,6.872-8.518,1.259c0,0-3.041-7.285-2.821-7.229
  c0.105-0.027,2.138-5.506,2.244-6.137c0.768-3.504-5.042-0.765-5.749-2.188c-0.878-1.81-2.358-4.576-2.166-6.628
  c1.699-1.205,1.672-2.383-0.08-3.562c-1.04-1.095-1.205-2.303-0.521-3.672c-2.329-1.424-3.065-2.683-5.698-2.462
  c-1.479,0.138-4.055,3.668-5.506,0.629c0.878,2.108-4.188,0.769-5.094,1.56c-2.354-1.202-1.779,2.028-2.384,3.069
  c-0.137,0.22-1.014-2.904-1.065-2.961c-1.149-1.175-2.767,4.165-3.505-0.055c0.766-4.105-4.657-2.709-7.67-2.93
  c-4.708-0.353-5.53-1.613-9.858,0.631C262.993,300.562,262.336,299.274,262.881,297.305z"
                      />
                      <text
                        transform="matrix(1 0 0 1 328.4063 286.4561)"
                        fill="#FFFFFF"
                      >
                        MG
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Rio de Janeiro"
                      code={33}
                      uf="rj"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M332.886,337.429
  c-1.26-2.768,8.409-4.795,7.89-6.71c-3.177-1.864-4.602,1.148-6.63-2.959c4.274-0.686,9.533-4.49,13.831-3.562
  c0.548-0.219,4.902-1.753,4.96,0.167c2.546-1.566,5.479-2.412,8.105-3.837c2.246-1.206,0.932-8.218,3.725-9.643
  c6.054-3.123,1.398,1.836,7.066,2.959c5.888,1.205,5.395,1.48,5.641,7.067c0.247,5.642-8.763,4.381-11.063,8.764
  c-1.039,1.999,1.698,5.368-3.368,4.903c-4.188-0.413-10.628,2.355-9.285-3.18c-1.039-0.08-1.861,0.301-2.464,1.124
  c0,0,0.105,2.767-0.74,2.741c-0.766-0.056-7.643,1.094-7.449,0.463c1.398-0.359,2.708-0.684,4.135-0.794
  c-1.667-0.713-2.957-1.839-4.901-0.142c0.465,0.195-4.227-0.086-3.379-0.113c-0.521,1.727-3.814,0.699-3.879,3.045
  C336.717,337.908,333.927,342.41,332.886,337.429z"
                      />
                      <text
                        transform="matrix(1 0 0 1 347.4648 334.6807)"
                        fill="#FFFFFF"
                      >
                        RJ
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Espírito Santo"
                      code={32}
                      uf="es"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M367.119,308.834
  c1.044-1.999-0.298-5.451,1.841-6.326c3.697-1.453,3.858-0.467,5.941-4.49c0.767-1.563,3.999-5.807,2.848-7.835
  c-0.439-0.765-3.204-3.613-3.286-4.05c1.04-0.249,2.079-0.219,3.123,0.054c1.366-0.654-6.465-10.519,2.137-8.054
  c-1.204-0.655-1.535-1.365-0.932-2.135c4.358-0.138,13.856,0.027,12.845,6.738c-0.577,3.835,0.933,8.079-0.577,11.804
  c-0.218,0.576-5.861,8.954-5.831,8.954c0.985,3.289-5.18,5.808-6.054,8.165c-1.313,3.56-2.135,3.013-5.614,2.573
  c-1.64-0.274-3.202-0.768-4.736-1.451C368.819,311.297,369.424,309.055,367.119,308.834z"
                      />
                      <text
                        transform="matrix(1 0 0 1 373.3047 300.4971)"
                        fill="#FFFFFF"
                      >
                        ES
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Distrito Federal"
                      code={53}
                      uf="df"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M292.461,246.197
  c0,0,12.929-2.903,14.188,0c1.233,2.903,0.659,10.683-1.424,11.504c-2.08,0.849-14.296-1.806-14.023-3.313
  C291.503,252.853,292.461,246.197,292.461,246.197z"
                      />
                      <text
                        transform="matrix(1 0 0 1 292.4141 254.2139)"
                        fill="#FFFFFF"
                      >
                        DF
                      </text>
                    </a>
                    <a
                      xlinkHref="javascript:void(0)"
                      className="estado"
                      name="Paraíba"
                      code={25}
                      uf="pb"
                    >
                      <path
                        stroke="#FFFFFF"
                        strokeWidth="1.0404"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M401.575,141.096
  c2.081-3.081,16.791-6.82,19.117-4.616c0,1.918,7.259,1.686,10.133,2.712c-0.492,3.038,12.652,1.533,14.408,2.259
  c1.421,0.589,3.833,11.983,1.421,12.202c-0.874-1.124-2.083-1.739-3.586-1.835c-2.957-0.027-2.546,1.863-4.383,3.108
  c-2.626,1.767-6.571,1.917-9.558,2.109c-0.162,1.232-3.943,4.438-5.259,4.916c-3.122,1.149-2.657-2.727-5.095-3.602
  c0.713-1.124,4.082-5.203,3.725-6.205c-1.423-3.846-12.051,5.52-14.981,3.506c-1.396-0.973-6.218,1.493-3.476-2.588
  C405.574,150.776,400.398,142.889,401.575,141.096z"
                      />
                      <text
                        transform="matrix(1 0 0 1 425.2129 148.9893)"
                        fill="#FFFFFF"
                      >
                        PB
                      </text>
                    </a>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mx-auto max-w-6xl pt-32">
              <h1 className="pb-8 text-center text-2xl sm:text-3xl tracking-wide">
                Escolha o plano ideal para você
              </h1>
              <div className="grid grid-cols-1 justify-between gap-20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <div
                    className="group cursor-pointer border-[3px] border-transparent from-[#6825D2] to-[#71A1F9] bg-clip-border px-3 py-8 hover:bg-gradient-to-r sm:h-[500px]"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    <h1 className="text-center text-4xl font-bold text-[#6938D8] group-hover:text-[#FFED00]">
                      Personal
                    </h1>
                    <div className="flex flex-col gap-1 py-8 text-[#262626] group-hover:text-white">
                      <p className="font-medium">
                        <span className="font-bold">01</span> Processo
                      </p>
                      <p className="font-medium">
                        <span className="font-bold">100.000</span> Até folhas
                        por processo
                      </p>
                      <p className="font-medium">
                        Processo em nuvem por
                        <span className="font-bold">48hrs</span>
                      </p>
                      <p className="font-medium">
                        Validade dos créditos:{" "}
                        <span className="font-bold">03 anos</span>
                      </p>
                      <h1
                        className="bg-clip-text pb-20 pt-16 text-center text-5xl font-semibold leading-snug text-transparent hover:text-[#FFED00] group-hover:hidden"
                        style={{
                          background:
                            "linear-gradient(to bottom, #6825D2, #71A1F9)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        <span className="text-[16px]">R$</span> 23,99
                      </h1>
                      <h1 className="hidden pb-20 pt-16 text-center text-5xl font-semibold leading-snug group-hover:block group-hover:text-[#FFED00]">
                        <span className="text-[16px]">R$</span> 23,99
                      </h1>
                    </div>
                  </div>
                  <button
                    className="mt-4 h-[45px] w-full whitespace-nowrap rounded-md border-[3px] from-[#6825D2] to-[#71A1F9] bg-clip-border px-2 py-1.5 font-medium text-[#6938D8] hover:border-none hover:bg-gradient-to-r hover:text-white"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    Quero Adquirir!
                  </button>
                </div>
                <div className="">
                  <div
                    className="group cursor-pointer border-[3px] border-transparent from-[#6825D2] to-[#71A1F9] bg-clip-border px-3 py-8 hover:bg-gradient-to-r sm:h-[500px]"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    <h1 className="text-center text-4xl font-bold text-[#6938D8] group-hover:text-[#FFED00]">
                      Personal P
                    </h1>
                    <div className="flex flex-col gap-1 py-8 text-[#262626] group-hover:text-white">
                      <p className="font-medium">
                        <span className="font-bold">01</span> Processo
                      </p>
                      <p className="font-medium">
                        <span className="font-bold">100.000</span> Até folhas
                        por processo
                      </p>
                      <p className="font-medium">
                        Processo em nuvem por
                        <span className="font-bold">48hrs</span>
                      </p>
                      <p className="font-medium">
                        Validade dos créditos:{" "}
                        <span className="font-bold">03 anos</span>
                      </p>
                      <div className="group-hover:hidden">
                        <h1
                          className="bg-clip-text pt-16 text-center text-5xl font-semibold leading-snug text-transparent hover:text-[#FFED00]"
                          style={{
                            background:
                              "linear-gradient(to bottom, #6825D2, #71A1F9)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          <span className="text-[16px]">R$</span> 19,99
                        </h1>
                      </div>
                      <h1 className="hidden pt-16 text-center text-5xl font-semibold leading-snug group-hover:block group-hover:text-[#FFED00]">
                        <span className="text-[16px]">R$</span> 19,99
                      </h1>
                      <p className="pb-1 pt-4 text-center text-[15px] tracking-widest text-[#262626] group-hover:text-white">
                        For proceese
                      </p>
                      <div className="flex justify-center gap-2 text-center">
                        <p className="text-[15px] font-medium text-gray-600 line-through group-hover:text-white">
                          R$230,90
                        </p>
                        <h5 className="font-semibold text-[#6938D8] group-hover:text-[#FFED00]">
                          16%O off
                        </h5>
                      </div>
                      <h3 className="text-center text-lg font-bold">
                        Total:{" "}
                        <span className="group-hover:text-[#FFED00]">
                          R$199,90
                        </span>
                      </h3>
                    </div>
                  </div>
                  <button
                    className="mt-4 h-[45px] w-full whitespace-nowrap rounded-md border-[3px] from-[#6825D2] to-[#71A1F9] bg-clip-border px-2 py-1.5 font-medium text-[#6938D8] hover:border-none hover:bg-gradient-to-r hover:text-white"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    Quero Adquirir!
                  </button>
                </div>
                <div className="relative">
                  <div className="mx-auto flex w-full justify-center">
                    <div className="absolute -top-[42px] bg-[#6938D8] px-5 py-2 text-center text-lg font-bold text-[#FCFF16]">
                      MAIS VENDIDO
                    </div>
                  </div>
                  <div
                    className="group cursor-pointer border-[3px] border-transparent from-[#6825D2] to-[#71A1F9] bg-clip-border px-3 py-8 hover:bg-gradient-to-r sm:h-[500px]"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    <h1 className="text-center text-4xl font-bold text-[#6938D8] group-hover:text-[#FFED00]">
                      Personal M
                    </h1>
                    <div className="flex flex-col gap-1 py-8 text-[#262626] group-hover:text-white">
                      <p className="font-medium">
                        <span className="font-bold">01</span> Processo
                      </p>
                      <p className="font-medium">
                        <span className="font-bold">100.000</span> Até folhas
                        por processo
                      </p>
                      <p className="font-medium">
                        Processo em nuvem por
                        <span className="font-bold">48hrs</span>
                      </p>
                      <p className="font-medium">
                        Validade dos créditos:{" "}
                        <span className="font-bold">03 anos</span>
                      </p>
                      <div className="group-hover:hidden">
                        <h1
                          className="bg-clip-text pt-16 text-center text-5xl font-semibold leading-snug text-transparent hover:text-[#FFED00]"
                          style={{
                            background:
                              "linear-gradient(to bottom, #6825D2, #71A1F9)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          <span className="text-[16px]">R$</span> 19,99
                        </h1>
                      </div>
                      <h1 className="hidden pt-16 text-center text-5xl font-semibold leading-snug group-hover:block group-hover:text-[#FFED00]">
                        <span className="text-[16px]">R$</span> 19,99
                      </h1>
                      <p className="pb-1 pt-4 text-center text-[15px] tracking-widest text-[#262626] group-hover:text-white">
                        For proceese
                      </p>
                      <div className="flex justify-center gap-2 text-center">
                        <p className="text-[15px] font-medium text-gray-600 line-through group-hover:text-white">
                          R$230,90
                        </p>
                        <h5 className="font-semibold text-[#6938D8] group-hover:text-[#FFED00]">
                          16%O off
                        </h5>
                      </div>
                      <h3 className="text-center text-lg font-bold">
                        Total:{" "}
                        <span className="group-hover:text-[#FFED00]">
                          R$199,90
                        </span>
                      </h3>
                    </div>
                  </div>
                  <button
                    className="mt-4 h-[45px] w-full whitespace-nowrap rounded-md border-[3px] from-[#6825D2] to-[#71A1F9] bg-clip-border px-2 py-1.5 font-medium text-[#6938D8] hover:border-none hover:bg-gradient-to-r hover:text-white"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    Quero Adquirir!
                  </button>
                </div>
                <div className="">
                  <div
                    className="group cursor-pointer border-[3px] border-transparent from-[#6825D2] to-[#71A1F9] bg-clip-border px-3 py-8 hover:bg-gradient-to-r sm:h-[500px]"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    <h1 className="text-center text-4xl font-bold text-[#6938D8] group-hover:text-[#FFED00]">
                      Personal L
                    </h1>
                    <div className="flex flex-col gap-1 py-8 text-[#262626] group-hover:text-white">
                      <p className="font-medium">
                        <span className="font-bold">01</span> Processo
                      </p>
                      <p className="font-medium">
                        <span className="font-bold">100.000</span> Até folhas
                        por processo
                      </p>
                      <p className="font-medium">
                        Processo em nuvem por
                        <span className="font-bold">48hrs</span>
                      </p>
                      <p className="font-medium">
                        Validade dos créditos:{" "}
                        <span className="font-bold">03 anos</span>
                      </p>
                      <div className="group-hover:hidden">
                        <h1
                          className="bg-clip-text pt-16 text-center text-5xl font-semibold leading-snug text-transparent hover:text-[#FFED00]"
                          style={{
                            background:
                              "linear-gradient(to bottom, #6825D2, #71A1F9)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          <span className="text-[16px]">R$</span> 19,99
                        </h1>
                      </div>
                      <h1 className="hidden pt-16 text-center text-5xl font-semibold leading-snug group-hover:block group-hover:text-[#FFED00]">
                        <span className="text-[16px]">R$</span> 19,99
                      </h1>
                      <p className="pb-1 pt-4 text-center text-[15px] tracking-widest text-[#262626] group-hover:text-white">
                        For proceese
                      </p>
                      <div className="flex justify-center gap-2 text-center">
                        <p className="text-[15px] font-medium text-gray-600 line-through group-hover:text-white">
                          R$230,90
                        </p>
                        <h5 className="font-semibold text-[#6938D8] group-hover:text-[#FFED00]">
                          16%O off
                        </h5>
                      </div>
                      <h3 className="text-center text-lg font-bold">
                        Total:{" "}
                        <span className="group-hover:text-[#FFED00]">
                          R$199,90
                        </span>
                      </h3>
                    </div>
                  </div>
                  <button
                    className="mt-4 h-[45px] w-full whitespace-nowrap rounded-md border-[3px] from-[#6825D2] to-[#71A1F9] bg-clip-border px-2 py-1.5 font-medium text-[#6938D8] hover:border-none hover:bg-gradient-to-r hover:text-white"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    Quero Adquirir!
                  </button>
                </div>
                <div className="">
                  <div
                    className="group cursor-pointer border-[3px] border-transparent from-[#6825D2] to-[#71A1F9] bg-clip-border px-3 py-8 hover:bg-gradient-to-r sm:h-[500px]"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    <h1 className="text-center text-4xl font-bold text-[#6938D8] group-hover:text-[#FFED00]">
                      Personal A
                    </h1>
                    <div className="flex flex-col gap-1 py-8 text-[#262626] group-hover:text-white">
                      <p className="font-medium">
                        <span className="font-bold">01</span> Processo
                      </p>
                      <p className="font-medium">
                        <span className="font-bold">100.000</span> Até folhas
                        por processo
                      </p>
                      <p className="font-medium">
                        Processo em nuvem por
                        <span className="font-bold">48hrs</span>
                      </p>
                      <p className="font-medium">
                        Validade dos créditos:{" "}
                        <span className="font-bold">03 anos</span>
                      </p>
                      <div className="group-hover:hidden">
                        <h1
                          className="bg-clip-text pt-16 text-center text-5xl font-semibold leading-snug text-transparent hover:text-[#FFED00]"
                          style={{
                            background:
                              "linear-gradient(to bottom, #6825D2, #71A1F9)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          <span className="text-[16px]">R$</span> 19,99
                        </h1>
                      </div>
                      <h1 className="hidden pt-16 text-center text-5xl font-semibold leading-snug group-hover:block group-hover:text-[#FFED00]">
                        <span className="text-[16px]">R$</span> 19,99
                      </h1>
                      <p className="pb-1 pt-4 text-center text-[15px] tracking-widest text-[#262626] group-hover:text-white">
                        For proceese
                      </p>
                      <div className="flex justify-center gap-2 text-center">
                        <p className="text-[15px] font-medium text-gray-600 line-through group-hover:text-white">
                          R$230,90
                        </p>
                        <h5 className="font-semibold text-[#6938D8] group-hover:text-[#FFED00]">
                          16%O off
                        </h5>
                      </div>
                      <h3 className="text-center text-lg font-bold">
                        Total:{" "}
                        <span className="group-hover:text-[#FFED00]">
                          R$199,90
                        </span>
                      </h3>
                    </div>
                  </div>
                  <button
                    className="mt-4 h-[45px] w-full whitespace-nowrap rounded-md border-[3px] from-[#6825D2] to-[#71A1F9] bg-clip-border px-2 py-1.5 font-medium text-[#6938D8] hover:border-none hover:bg-gradient-to-r hover:text-white"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    Quero Adquirir!
                  </button>
                </div>
                <div className="">
                  <div
                    className="group cursor-pointer border-[3px] border-transparent from-[#6825D2] to-[#71A1F9] bg-clip-border px-3 py-8 hover:bg-gradient-to-r sm:h-[500px]"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    <h1 className="text-center text-4xl font-bold text-[#6938D8] group-hover:text-[#FFED00]">
                      Personal B
                    </h1>
                    <div className="flex flex-col gap-1 py-8 text-[#262626] group-hover:text-white">
                      <p className="font-medium">
                        <span className="font-bold">01</span> Processo
                      </p>
                      <p className="font-medium">
                        <span className="font-bold">100.000</span> Até folhas
                        por processo
                      </p>
                      <p className="font-medium">
                        Processo em nuvem por
                        <span className="font-bold">48hrs</span>
                      </p>
                      <p className="font-medium">
                        Validade dos créditos:{" "}
                        <span className="font-bold">03 anos</span>
                      </p>
                      <div className="group-hover:hidden">
                        <h1
                          className="bg-clip-text pt-16 text-center text-5xl font-semibold leading-snug text-transparent hover:text-[#FFED00]"
                          style={{
                            background:
                              "linear-gradient(to bottom, #6825D2, #71A1F9)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          <span className="text-[16px]">R$</span> 19,99
                        </h1>
                      </div>
                      <h1 className="hidden pt-16 text-center text-5xl font-semibold leading-snug group-hover:block group-hover:text-[#FFED00]">
                        <span className="text-[16px]">R$</span> 19,99
                      </h1>
                      <p className="pb-1 pt-4 text-center text-[15px] tracking-widest text-[#262626] group-hover:text-white">
                        For proceese
                      </p>
                      <div className="flex justify-center gap-2 text-center">
                        <p className="text-[15px] font-medium text-gray-600 line-through group-hover:text-white">
                          R$230,90
                        </p>
                        <h5 className="font-semibold text-[#6938D8] group-hover:text-[#FFED00]">
                          16%O off
                        </h5>
                      </div>
                      <h3 className="text-center text-lg font-bold">
                        Total:{" "}
                        <span className="group-hover:text-[#FFED00]">
                          R$199,90
                        </span>
                      </h3>
                    </div>
                  </div>
                  <button
                    className="mt-4 h-[45px] w-full whitespace-nowrap rounded-md border-[3px] from-[#6825D2] to-[#71A1F9] bg-clip-border px-2 py-1.5 font-medium text-[#6938D8] hover:border-none hover:bg-gradient-to-r hover:text-white"
                    style={{
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(to right, #6825D2, #71A1F9)",
                    }}
                  >
                    Quero Adquirir!
                  </button>
                </div>
              </div>
              <div className="pt-10 text-center">
                <h1 className="text-2xl tracking-wide">
                  As ofertas terminam em:
                </h1>
                <div className="flex pt-8 justify-center items-center gap-4 sm:flex-row flex-col">
                  <div className="flex flex-col items-center text-[14px]">
                    <div className="flex h-[62px] w-[4.2rem] items-center justify-center rounded-lg bg-[#6821D1] text-3xl font-semibold text-white">
                      2
                    </div>
                    dias
                  </div>
                  <span className="text-3xl sm:-mt-7 -mt-3">:</span>
                  <div className="flex flex-col items-center text-[14px]">
                    <div className="flex h-[62px] w-[4.2rem] items-center justify-center rounded-lg bg-[#6821D1] text-3xl font-semibold text-white">
                      09
                    </div>
                    horas
                  </div>
                  <span className="text-3xl sm:-mt-7 -mt-3">:</span>
                  <div className="flex flex-col items-center text-[14px]">
                    <div className="flex h-[62px] w-[4.2rem] items-center justify-center rounded-lg bg-[#6821D1] text-3xl font-semibold text-white">
                      31
                    </div>
                    minutos
                  </div>
                  <span className="text-3xl sm:-mt-7 -mt-3">:</span>
                  <div className="flex flex-col items-center text-[14px]">
                    <div className="flex h-[62px] w-[4.2rem] items-center justify-center rounded-lg bg-[#6821D1] text-3xl font-semibold text-white">
                      2
                    </div>
                    segundos
                  </div>
                </div>
              </div>
            </div>
            <p className="py-10 font-medium text-center">
              Os planos acima são de pagamento único. Ao contratá-los, você
              receberá a quantidade de créditos correspondente com a validade
              informada no plano.
            </p>
            <div className="max-w-6xl mx-auto">
              <h1 className="pb-8 pt-10 text-center text-2xl font-bold">
                O <span className="text-[#6938D8]">Processo Rápido</span> é
                utilizado diariamente por diversos escritórios de advocacia e
                profissionais do setor jurídico em todo Brasil
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-between gap-3 py-16">
                <img
                  src="https://processorapido.com/img/clientes/rocha-calderon-e-advogados-associados.jpg"
                  alt=""
                  className="cursor-pointer grayscale hover:grayscale-0"
                />
                <img
                  src="https://processorapido.com/img/clientes/rolim-e-wainstok-advogados.jpg"
                  alt=""
                  className="cursor-pointer grayscale hover:grayscale-0"
                />
                <img
                  src="https://processorapido.com/img/clientes/advocacia-granja-de-abreu.jpg"
                  alt=""
                  className="cursor-pointer grayscale hover:grayscale-0"
                />
                <img
                  src="https://processorapido.com/img/clientes/queiroz-cavalcanti-advogacia.jpg"
                  alt=""
                  className="cursor-pointer grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[500px] w-full justify-center bg-[url('https://images.unsplash.com/photo-1542024476627-e08bd26cef66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed object-cover grayscale">
          <div className="mx-auto flex justify-center md:flex-row flex-col max-w-6xl items-center gap-5 lg:justify-between">
            <div className="md:border-r-2 border-white pr-5 text-center">
              <h1 className="lg:text-6xl text-4xl font-bold text-white">
                +1 milhão
              </h1>
              <p className="pt-2 text-xl font-bold text-white">
                processos baixados
              </p>
            </div>
            <div className="md:border-r-2 border-white pr-5 text-center">
              <h1 className="lg:text-6xl text-4xl font-bold text-white">
                +150.000
              </h1>
              <p className="pt-2 text-xl font-bold text-white">
                horas economizadas
              </p>
            </div>
            <div className=" text-center">
              <h1 className="lg:text-6xl text-4xl font-bold text-white">
                +10.000
              </h1>
              <p className="pt-2 text-xl font-bold text-white">usuários</p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:gap-4 gap-12 px-4 py-28 xl:px-0">
          <div className="flex sm:flex-row flex-col items-center justify-between">
            <img
              src="https://processorapido.com/img/foto/luiz.jpg"
              alt=""
              className="rounded-full  sm:w-auto h-auto w-20"
            />
            <div className="sm:ml-20 sm:text-left text-center">
              <h1 className="font-medium leading-snug tracking-wider">
                "Realmente, esta ferramenta está sendo{" "}
                <br className="hidden lg:flex" />
                incrível para o meu escritório. Ela nos ajuda a economizar tempo
                e aumentou a nossa produtividade."
              </h1>
              <h1 className="pt-6 text-lg font-bold text-[#6F38D5]">
                Luiz Otavio - Advogado Consumerista
              </h1>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-0 gap-6 items-center justify-between">
            <img
              src="https://processorapido.com/img/foto/roberta.jpg"
              alt=""
              className="rounded-full sm:w-auto h-auto w-20"
            />
            <div className="sm:ml-20 sm:text-left text-center">
              <h1 className="font-medium leading-snug tracking-wider">
                "Fiquei muito impressionada com o jeito que esta ferramenta me
                ajudou no dia-a-dia. O download dos arquivos demandavam um tempo
                enorme."
              </h1>
              <h1 className="pt-6 text-lg font-bold text-[#6F38D5]">
                Roberta Monteiro - Advogada Trabalhista
              </h1>
            </div>
          </div>
        </div>
        <div
          className="w-full px-4 py-10 xl:px-0"
          style={{ background: "linear-gradient(to right, #6722D1, #72AFFD)" }}
        >
          <div className="relative mx-auto flex justify-center max-w-6xl items-center lg:justify-between">
            <div className="">
              <h1 className="text-3xl font-bold text-[#CEDDFF]">
                Precisando de ajuda?
              </h1>
              <p className="text-xl tracking-wide text-white">
                Entre em contato conosco
              </p>
              <div className="flex flex-col gap-1 pb-8 pt-5">
                <div className="group flex sm:flex-row flex-col items-center gap-3">
                  <img
                    src="https://processorapido.com/img/icone/email.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <a
                    href="#"
                    className="sm:text-lg font-medium text-center tracking-wide text-white group-hover:text-[#E7EA14]"
                  >
                    contato@processorapido. com
                  </a>
                </div>
                <div className="group flex sm:flex-row flex-col items-center gap-3">
                  <img
                    src="https://processorapido.com/img/icone/instagram.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <a
                    href="#"
                    className="sm:text-lg font-medium tracking-wide text-white group-hover:text-[#E7EA14]"
                  >
                    ProcessoRapido
                  </a>
                </div>
                <div className="group flex sm:flex-row flex-col items-center gap-3">
                  <img
                    src="https://processorapido.com/img/icone/facebook.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <a
                    href="#"
                    className="sm:text-lg font-medium tracking-wide text-white group-hover:text-[#E7EA14]"
                  >
                    ProcessoRapido
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute lg:flex hidden -bottom-10 right-0">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAEjCAMAAADzMwMvAAAC+lBMVEUAAAD////8/vz////+//7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////6+vv///8MADfn5+/8/PsAyOT/QGD///39/vzT0d/9/v76/Pv//fwNADj7+/qW7/cAACH7/fzl5e4AqM8AACb/QWH4+fv/h2YJADTQ0d/l5+/o5u4CAC7/RGP/+vgAxOP/J0rs7PLi4+zKzNv/MlTPz90DADL29vnq6fDl5OzOzdzMzNz/PFz08Paclqz/Ike1scS29PoCABv/5uqD7ff/Kk7o5+/w5+4AwOCL8PmHgJscGETR6vAAps7m6vL/7fDY1+QNACwAyuX/L1EAzeeS7/jT0+C/uMrj/////Pnf//8mIEopJU/u7/RvZojc3uj/SWcEABEA4/35mavx8vcAocvh9///WTvj+v+Mhp/+gV4CsNXd3Of/Xnj8e5L/cknj4ur/vcj3lqn/lKX/xMz/N1jk7/cAudz/elT/Z4AA3Pf/9vfj9Pvq5OsTEDv/i54A1vT+h5z/j2wBz+vu1t//GD2morb36vDZz9yo//8A0u//mW061er/uMMj0unwxciAeZbIxdQEpcVWU3XG5/BU2ev4p7cCkbZEQ2Wh9Pvg4On8p5P9lns5NFxRFj43Djuw5O531+j81Nx/G0X/UDN//v8Vvdrvz9Ouq74Bm8aUkKcHJE6c4ewsu9d2co//pnL/Um8VzOby/v/q/v+Q1+X0vbwO7P/s3ORnhqK+XHzOLlQkBzOfm7H5t6r1PF6YMU6ka4nF+v1j7vm2K1JzNEnb6/BpmK/VbV/jM1hWxt3HvcwxpsWmUVbK0+Hl1N+RiqMDQmq/YVu20t9RqcDOT2/gSGg97PoCU3wAhKleZodPi60GZ42PaIXOfn/T+vx6rsGBwtO2usr/RyTekab/RR7/PhjElKuPoLLrcYrtiIeOGsDeAAAAJXRSTlMA8uLc4BQu99Z0Hj4lzWoMBcSXuV81sH7uqJ9RjOmGV0vlRZD8ElCuVAAAPGZJREFUeNrs3Muq00AYB/AJba5tmnuapte0fG5qRwSVgxhxoxIPtDu3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"
                alt=""
                className="h-[300px] w-[500px]"
              />
            </div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 pb-8 pt-4 text-center sm:flex-row xl:px-0">
          <img
            src="https://cliente.processorapido.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-omnis.0d5e324a.jpeg&w=256&q=75"
            alt=""
            className="h-[12px] w-[60px]"
          />
          <p className="text-[14px] font-medium tracking-wide text-[#212529]">
            Todos os direitos reservados - Omnis Soluções Jurídicas
          </p>
        </footer>
      </>
    </div>
  );
}

export default Home;
