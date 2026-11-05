/* ===== CONFIGURAÇÃO — edite aqui para adicionar conteúdo ===== */
const CONFIG = {
  nome: "Linha 5-Lilás — Padrão Motiva",
  lancamento: "20 DE NOVEMBRO DE 2026",
  lancamentoData: "2026-11-20T00:00:00-03:00",
  panoramica: "./Imagens/home.png",
  videoFundo: "Home.mp4",
  videoPoster: "./Imagens/1.png",

  galeria: [
    { src: "./Imagens/1.png", legenda: "Frota P — Identidade Visual Motiva" },
    { src: "./Imagens/2.png", legenda: "Frota P — Vista Externa" },
    { src: "./Imagens/3.png", legenda: "Frota P — Composição em Operação" },
    { src: "./Imagens/4.png", legenda: "Frota P — Detalhes da Composição" },
    { src: "./Imagens/5.png", legenda: "Frota P — Interior dos Carros" },
    { src: "./Imagens/6.png", legenda: "Interior — Painéis e Acabamentos" },
    { src: "./Imagens/7.png", legenda: "Interior — Mapa e Comunicação Visual" },
    { src: "./Imagens/8.png", legenda: "Frota P — Versão Nativa" },
    { src: "./Imagens/9.png", legenda: "Plataformas — Grades de Segurança" },
    { src: "./Imagens/10.png", legenda: "Capão Redondo — Entorno da Estação" },
    { src: "./Imagens/11.png", legenda: "Terminal EMTU — Capão Redondo" },
    { src: "./Imagens/12.png", legenda: "Estações — Identidade Visual Atualizada" },
    { src: "./Imagens/13.png", legenda: "Sinalização — Placa de Destino" },
    { src: "./Imagens/14.png", legenda: "Estações — Relógios Atualizados" },
    { src: "./Imagens/15.png", legenda: "Plataformas — Portas com Identidade Motiva" },
    { src: "./Imagens/16.png", legenda: "Capão Redondo — Grades de Proteção" },
    { src: "./Imagens/17.png", legenda: "Via Permanente — Proteção e Delimitação" },
    { src: "./Imagens/18.png", legenda: "Garagem Viação Campo Belo — Área Externa" },
    { src: "./Imagens/19.png", legenda: "Garagem Viação Campo Belo — Estrutura" },
    { src: "./Imagens/20.png", legenda: "Garagem Viação Campo Belo — Detalhes" },
    { src: "./Imagens/21.png", legenda: "Pátio Guido Caloi — Desenvolvimento Parcial" },
    { src: "./Imagens/22.png", legenda: "Pátio Guido Caloi — Estruturas e Ambientação" },
    { src: "./Imagens/23.png", legenda: "Santo Amaro — Ampliação da Estação" },
    { src: "./Imagens/24.png", legenda: "Santo Amaro — Novas Estruturas" },
    { src: "./Imagens/25.png", legenda: "Santo Amaro — Detalhamento da Ampliação" },
    { src: "./Imagens/26.png", legenda: "Santo Amaro — Vista Externa" },
    { src: "./Imagens/27.png", legenda: "AACD Servidor — Estacionamento de Trens" }
  ],

  download: {
    versao: "",
    tamanho: "",
    url: "",
    requisitos: "",
    instalacao: ""
  },

  creditos: {
    rota: [
      {
        nome: "OpenBVE Modernizações BR",
        obs: "Desenvolvimento original da rota Linha 5-Lilás."
      },
      {
        nome: "Diego Bitencourt, Natan Felix, Pedro Rocha, João Watanabe, Gabriel Santos, Lucas Mendes e Guilherme Santos",
        obs: "Desenvolvedores originais da rota."
      }
    ],
    trens: [
      {
        nome: "OpenBVE Modernizações BR",
        obs: "Desenvolvimento original das composições utilizadas na rota."
      },
      {
        nome: "Diego Bitencourt, Natan Felix, Pedro Rocha, João Watanabe, Gabriel Santos, Lucas Mendes e Guilherme Santos",
        obs: "Desenvolvedores originais dos trens."
      }
    ],
    colaboradores: [
      // foto: caminho da imagem (ex.: "img/colaboradores/luan.jpg") — vazio mostra a inicial
      // youtube: link do canal (ex.: "https://www.youtube.com/@usuario") — vazio deixa o ícone desativado
      { usuario: "Luan14_", foto: "./Collab/Luan.jpg", youtube: "https://www.youtube.com/@bfn_multi24" },
      { usuario: "matheuspictures",      foto: "./Collab/MP.jpg", youtube: "https://www.youtube.com/@matheuspictures" },
      { usuario: "NosTrilhosdeSãoPaulo",      foto: "/Collab/NSP.jpg", youtube: "https://www.youtube.com/@NosTrilhosdeS%C3%A3oPaulo" },
      { usuario: "Ohama4303",      foto: "/Collab/Ohama.jpg", youtube: "https://www.youtube.com/@ohama4303" },
      { usuario: "VinizzK",      foto: "/Collab/VF.jpg", youtube: "https://www.youtube.com/@VinizzK" },
    ],
    referencias: [
      {
        nome: "OpenBVE Modernizações BR",
        obs: "Rota e trens originais utilizados como base para esta versão."
      }
    ]
  }
};


/* ===== COMPONENTES ===== */

const IMG = {
  "m.png": "img/m.png",
  "m-branco.png": "img/m-branco.png"
};

const $ = s => document.querySelector(s);

const PAGES = [
  ["home", "Início"],
  ["galeria", "Galeria"],
  ["downloads", "Downloads"],
  ["creditos", "Créditos e referências"]
];

/* Faixa de M repetido passando para a esquerda */
const marquee = (cls, img, d) => {
  const g = `<div class="mq-g">${`<img src="${IMG[img]}" alt="">`.repeat(24)}</div>`;
  return `<div class="mq ${cls}" style="--d:${d || 60}s" aria-hidden="true"><div class="mq-t">${g}${g}</div></div>`;
};

const ph = (t, c = "") => `<div class="ph ${c}">${t}</div>`;

const pageTitle = (t, s) =>
  `<div class="pt">${marquee("big", "m-branco.png", 90)}<div class="w in"><h2>${t}</h2><p>${s}</p></div></div>`;

const val = (v, f) =>
  v ? v : `<span style="opacity:.6;font-weight:400">${f}</span>`;

const YT_ICON = `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.500 0 9.400-.5a3 3 0 0 0 2.100-2.100c.5-1.900.5-5.800.5-5.800s0-3.900-.5-5.800ZM9.600 15.600V8.400l6.200 3.600-6.200 3.600Z"/></svg>`;

const colabCard = c => {
  const ini = (c.usuario.replace(/[^a-zA-Z0-9]/g, "")[0] || "?").toUpperCase();
  const avatar = c.foto
    ? `<img src="${c.foto}" alt="Foto de ${c.usuario}" loading="lazy">`
    : `<span aria-hidden="true">${ini}</span>`;
  const yt = c.youtube
    ? `<a class="yt" href="${c.youtube}" target="_blank" rel="noopener" aria-label="Canal de ${c.usuario} no YouTube" title="Abrir canal no YouTube">${YT_ICON}</a>`
    : `<span class="yt off" role="img" aria-label="Canal do YouTube ainda não informado" title="Canal ainda não informado">${YT_ICON}</span>`;
  return `<div class="cb"><div class="av">${avatar}</div><div class="u">@${c.usuario}<small>Colaborador</small></div>${yt}</div>`;
};

const credList = a =>
  `<ul class="list">${a.map(x => `<li><b>${x.nome}</b>${x.obs}</li>`).join("")}</ul>`;


/* ===== PÁGINAS ===== */

const R = {

  /* HOME */
  home: () => `
    <section class="hero">
      ${
        CONFIG.videoFundo
          ? `<video class="hero-video" src="${CONFIG.videoFundo}"
               ${CONFIG.videoPoster ? `poster="${CONFIG.videoPoster}"` : ""}
               autoplay muted loop playsinline preload="auto"
               aria-hidden="true"></video>
             <div class="hero-ov"></div>`
          : ""
      }
      ${marquee("big", "m-branco.png", 80)}
      <div class="w in">

        <h1>LINHA 5-LILÁS — PADRÃO MOTIVA</h1>

        <p class="lead">
          A Linha 5-Lilás do Metrô de São Paulo no padrão visual Motiva,
          recriada para o simulador OpenBVE.
        </p>

        <div class="btns">
          <a class="btn" href="#galeria">Ver galeria</a>
          <a class="btn o" href="#downloads">Ir para downloads</a>
        </div>

        <div class="when">
          Lançamento
          <b>${CONFIG.lancamento}</b>
        </div>

        <div class="cd" id="cd"></div>
      </div>
    </section>

    <div class="dv">${marquee("sm", "m.png", 70)}</div>

    <section class="s">
      <div class="w">

        <h2>A rota</h2>

        <p class="lead">
          Do primeiro ao último desembarque, a linha inteira para dirigir no OpenBVE.
        </p>

        ${
          CONFIG.panoramica
            ? `<img class="pano pano-img" src="${CONFIG.panoramica}" alt="Panorâmica da rota">`
            : ph("Espaço reservado — imagem panorâmica da rota", "pano")
        }

        <div class="cols">

          <div>
            <h3>Sobre o projeto</h3>
            <p>
              Uma versão renovada da Linha 5-Lilás do Metrô de São Paulo
              para o OpenBVE, contemplando melhorias visuais, estações
              aprimoradas, novos elementos de infraestrutura e ambientação.
              O percurso abrange o trecho entre Capão Redondo e Chácara Klabin.
            </p>
          </div>

          <div>
            <h3>Trens</h3>
            <p>
              A composição Frota P recebeu a identidade visual Padrão Motiva,
              além de aprimoramentos no interior dos carros, atualização dos
              elementos de comunicação visual e um mapa interno interativo,
              com iluminação sincronizada à abertura e ao fechamento das portas.
            </p>
          </div>

          <div>
            <h3>Simulação</h3>
            <p>
              Desenvolvido para OpenBVE, o projeto apresenta melhorias na
              infraestrutura ferroviária, portas de plataforma, sinalização
              visual, ambientação e diversos elementos que contribuem para
              uma experiência de simulação mais imersiva.
            </p>
          </div>

        </div>
      </div>
    </section>
  `,


  /* GALERIA */
  galeria: () =>
    pageTitle("Galeria", "Capturas de tela do projeto.") +
    `
      <section class="s">
        <div class="w">

          <div class="gal">
            ${CONFIG.galeria.map((g, i) => `
              <button
                class="gi"
                data-i="${i}"
                aria-label="Ampliar: ${g.legenda}"
              >
                ${
                  g.src
                    ? `<img loading="lazy" src="${g.src}" alt="${g.legenda}">`
                    : `<span>${g.legenda}</span>`
                }
              </button>
            `).join("")}
          </div>

          <p class="lead" style="margin-top:26px;font-size:14px"></p>

        </div>
      </section>
    `,


  /* DOWNLOADS E ATUALIZAÇÕES */
  downloads: () => {
    const d = CONFIG.download;

    return pageTitle("Downloads", "Arquivos oficiais do projeto.") +
    `
      <section class="s">
        <div class="w">

          <div class="dl">
            ${marquee("", "m-branco.png", 100)}

            <div>
              <span class="tag">OpenBVE</span>

              <h2>Rota Linha 5-Lilás — Padrão Motiva</h2>

              <p>
                ${
                  d.url
                    ? "Versão para o simulador OpenBVE."
                    : "O download será disponibilizado a partir de " +
                      CONFIG.lancamento.toLowerCase() + "."
                }
              </p>

              <div class="btns">
                ${
                  d.url
                    ? `<a class="btn" href="${d.url}" rel="noopener">Baixar para OpenBVE</a>`
                    : `<button class="btn" disabled>Download indisponível</button>`
                }
              </div>
            </div>

            <dl>
              <div>
                <dt>Versão</dt>
                <dd>${val(d.versao, "[1.0.0]")}</dd>
              </div>

              <div>
                <dt>Tamanho</dt>
                <dd>${val(d.tamanho, "[243.2 MB]")}</dd>
              </div>

              <div>
                <dt>Requisitos</dt>
                <dd>${val(
                  Array.isArray(d.requisitos) ? d.requisitos.join("<br>") : d.requisitos,
                  "Windows 10 ou 11<br>OpenBVE atualizado<br>Espaço livre em disco"
                )}</dd>
              </div>
            </dl>
          </div>


          <!-- HISTÓRICO DE ATUALIZAÇÕES -->

          <div style="margin-top:48px;max-width:760px">

            <h3 style="font-size:22px;margin:0 0 12px">
              Atualizações
            </h3>

            <p style="margin-bottom:24px">
              Confira o histórico de versões, novidades e melhorias
              implementadas na Linha 5-Lilás — Padrão Motiva.
            </p>

            <ul class="list">

              <li>

                <b>[1.0.0] — Lançamento inicial | 20/11/2026</b>

                <p><b>Trens e composição</b></p>

                <ul>
                  <li>Frota P com pintura e identidade visual Padrão Motiva.</li>
                  <li>Atualização visual do interior dos carros.</li>
                  <li>Modernização dos mapas internos e elementos de comunicação visual.</li>
                  <li>Implementação de mapa interno interativo, com iluminação sincronizada à abertura e ao fechamento das portas.</li>
                  <li>Atualização da composição nativa.</li>
                </ul>


                <p><b>Estações e infraestrutura ferroviária</b></p>

                <ul>
                  <li>Ampliação e aprimoramento visual da Estação Santo Amaro.</li>
                  <li>Atualização das placas de identificação e sinalização das estações.</li>
                  <li>Relógios atualizados para a identidade visual Motiva.</li>
                  <li>Implementação e alinhamento de portas de plataforma.</li>
                  <li>Atualização das portas de plataforma com a nova identidade visual.</li>
                  <li>Instalação de grades de segurança e proteção em trechos da via.</li>
                  <li>Melhorias na ambientação e nos elementos de infraestrutura ao longo da rota.</li>
                </ul>


                <p><b>Entorno e estruturas</b></p>

                <ul>
                  <li>Construção do Terminal EMTU Capão Redondo.</li>
                  <li>Inclusão de ônibus estáticos no terminal.</li>
                  <li>Reconstrução e aprimoramento visual da garagem Viação Campo Belo.</li>
                  <li>Inclusão de modelos de ônibus BYD BC22 e Caio Millennium.</li>
                  <li>Melhorias visuais na região da Estação Capão Redondo.</li>
                  <li>Implementação do acesso na região anterior à estação AACD-Servidor.</li>
                  <li>Desenvolvimento parcial da área visual do Pátio Guido Caloi.</li>
                  <li>Inclusão de estacionamento de trens na região de Capão Redondo.</li>
                </ul>


                <p><b>Simulação e desenvolvimento</b></p>

                <ul>
                  <li>Ajustes e aprimoramentos nos arquivos da rota.</li>
                  <li>Melhorias na ambientação para OpenBVE.</li>
                  <li>Testes e ajustes de desempenho durante o desenvolvimento.</li>
                </ul>

              </li>

            </ul>

            <p style="margin-top:24px;font-size:14px;color:var(--muted)">
              Futuras correções, melhorias e conteúdos adicionais poderão
              ser disponibilizados em novas versões do projeto.
            </p>

          </div>

        </div>
      </section>
    `;
  },


  /* CRÉDITOS E REFERÊNCIAS */
  creditos: () => {
    const c = CONFIG.creditos;

    return pageTitle(
      "Créditos e referências",
      "Reconhecimento a quem tornou este projeto possível."
    ) +
    `
      <section class="s">
        <div class="w">

          <div class="two">

            <div>
              <h3>Criadores da rota</h3>
              ${credList(c.rota)}
            </div>

            <div>
              <h3>Criadores dos trens</h3>
              ${credList(c.trens)}
            </div>

          </div>

          <h3 class="sec-h">Colaboradores</h3>
          <div class="colabs">
            ${c.colaboradores.map(colabCard).join("")}
          </div>

          <div class="notice">
            <b>Direitos autorais.</b>
            Este projeto respeita o trabalho dos criadores originais.
            Objetos, texturas, trens e demais materiais de terceiros
            pertencem aos seus autores e são usados com os devidos créditos.
            Se identificar algum material sem crédito, entre em contato
            para a correção.
          </div>

        </div>
      </section>
    `;
  }

};


/* ===== CONTAGEM REGRESSIVA ===== */

let tm;

function countdown() {
  clearInterval(tm);

  const el = $("#cd");
  if (!el) return;

  const t = () => {
    const s = Math.floor(
      (new Date(CONFIG.lancamentoData) - Date.now()) / 1000
    );

    if (s <= 0) {
      el.innerHTML = "<div><span>Lançado</span></div>";
      clearInterval(tm);
      return;
    }

    let r = s;

    el.innerHTML = [
      ["dias", 86400],
      ["horas", 3600],
      ["min", 60],
      ["seg", 1]
    ].map(([n, k]) => {
      const v = Math.floor(r / k);
      r %= k;

      return `
        <div>
          <span>${String(v).padStart(2, "0")}</span>
          <small>${n}</small>
        </div>
      `;
    }).join("");
  };

  t();
  tm = setInterval(t, 1000);
}


/* ===== ROTEAMENTO POR HASH ===== */

function route() {
  const k = (location.hash || "#home").slice(1);
  const p = R[k] ? k : "home";

  $("#app").innerHTML = `<div class="pg">${R[p]()}</div>`;

  $("#nav").innerHTML = PAGES.map(([h, t]) => `
    <a href="#${h}" class="${h === p ? "on" : ""}">${t}</a>
  `).join("");

  $("#nav").classList.remove("open");

  $("#fn").innerHTML = PAGES.map(([h, t]) => `
    <a href="#${h}">${t}</a>
  `).join("");

  document.title =
    (p === "home" ? "" : PAGES.find(x => x[0] === p)[1] + " · ") +
    CONFIG.nome;

  window.scrollTo(0, 0);

  const hv = $(".hero-video");
  if (hv) { hv.muted = true; hv.play().catch(() => {}); }

  countdown();
}

$("#fm").innerHTML = marquee("", "m-branco.png", 70);

addEventListener("hashchange", route);
route();

$("#mn").onclick = () => $("#nav").classList.toggle("open");


/* ===== BARRA DE PROGRESSO DE ROLAGEM ===== */

addEventListener("scroll", () => {
  const h = document.documentElement;

  $("#pr").style.width =
    (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%";

}, { passive: true });


/* ===== TEMA CLARO/ESCURO ===== */

const root = document.documentElement;

try {
  const t = localStorage.getItem("tema");
  if (t) root.dataset.theme = t;
} catch (e) {}

$("#tg").onclick = () => {
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme:dark)").matches;

  const n = dark ? "light" : "dark";

  root.dataset.theme = n;

  try {
    localStorage.setItem("tema", n);
  } catch (e) {}
};


/* ===== GALERIA AMPLIADA ===== */

let cur = 0;
const lb = $("#lb");

function show(i) {
  const n = CONFIG.galeria.length;
  cur = (i + n) % n;

  const g = CONFIG.galeria[cur];

  $("#lc").innerHTML = g.src
    ? `<img src="${g.src}" alt="${g.legenda}">`
    : ph("Espaço reservado — " + g.legenda);

  $("#lt").textContent = g.legenda;

  lb.classList.add("on");
}

document.addEventListener("click", e => {
  const b = e.target.closest(".gi");
  if (b) show(+b.dataset.i);
});

$("#lx").onclick = () => lb.classList.remove("on");

$("#lp").onclick = () => show(cur - 1);
$("#ln").onclick = () => show(cur + 1);

lb.onclick = e => {
  if (e.target === lb) lb.classList.remove("on");
};

addEventListener("keydown", e => {
  if (!lb.classList.contains("on")) return;

  if (e.key === "Escape") lb.classList.remove("on");
  if (e.key === "ArrowLeft") show(cur - 1);
  if (e.key === "ArrowRight") show(cur + 1);
});