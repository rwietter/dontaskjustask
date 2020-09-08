import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import * as S from '../styles/styles';
import { Blockquote } from '../components/Blockquote/Blockquote';

export default function Home() {
  const [height, setHeight] = useState(0);
  const dateYear = new Date().getFullYear();

  const _MAIN = document.querySelector('#main');
  const _SPAN = document.createElement('span');

  const MAX_HEIGHT = new Promise((resolve, _) => {
    const height = _MAIN?.offsetHeight;
    const interval = setInterval(() => {
      resolve(height);
      clearInterval(interval);
    }, 500);
  });
  MAX_HEIGHT.then(setHeight);

  useEffect(() => {
    const styleBar = [
      `
      height: 5px;
      background-color: #2dc25c;
      position: fixed;
      top: 0;
      left: 0px;
      transition: all 0.5s ease-out 0s;
      width: 0;
    `,
    ];
    _SPAN.style = styleBar;
    document.body.appendChild(_SPAN);
  });

  const updateStyleBar = (width) => {
    _SPAN.style.width = `${width}%`;
    window.localStorage.setItem('statusbar', width);
  };

  const handleScroll = (width) => {
    const positionYoffScroll = window.pageYOffset;
    const updateWidthStyleBar = Math.ceil((positionYoffScroll * 140) / height);
    if (width) updateStyleBar(width);
    else updateStyleBar(updateWidthStyleBar);
  };

  const stylebar = localStorage.getItem('statusbar');
  if (stylebar) {
    handleScroll(stylebar);
  }

  document.addEventListener('scroll', () => {
    handleScroll();
  });

  return (
    <div id="content">
      <Head>
        <title>Não peça se alguém sabe, apenas pergunte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.main id="main">
        <S.content>
          <h1>Não faça esse tipo de pergunta</h1>
          <p>
            Em muitos chats, fóruns e aplicativos de mensagens, algumas pessoas
            fazem perguntas como as listadas abaixo. Existem vários problemas em
            enviar mensagens assim. A maioria das pessoas ignora se você enviar
            perguntas neste formato, o tempo para perguntas e respostas pode
            levar horas ou dias, além disso, menos pessoas vão se engajar para
            lhe ajudar.
          </p>
          <Blockquote>Foo234: Alguém sabe Java ?</Blockquote>
          <Blockquote>Foo655: Alguém pode me ajudar com C ?</Blockquote>
          <Blockquote>Foo910: Preciso de ajuda em um exercício ?</Blockquote>
          <Blockquote>
            Foo02: Estou com uma dúvida, alguém disponível para responder ?
          </Blockquote>
        </S.content>

        <S.section>
          <p>
            Isso não ajuda a resolver o seu problema, em vez disso, prefira
            detalhar a mensagem com máximo de detalhes de logs, screenshots, o
            que você já tentou fazer para resolver, onde pesquisou (
            <span>
              <a
                target="_blank"
                without
                rel="noopener noreferrer"
                href="https://google.com.br/">
                Google
              </a>
              ,{' '}
              <a
                target="_blank"
                without
                rel="noopener noreferrer"
                href="https://duckduckgo.com/">
                DuckDuckGo
              </a>
              , Fóruns, Sites etc...
            </span>
            ). Além disso, é extremamente importante que você forneça o que{' '}
            <a
              target="_blank"
              without
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/XY_problem">
              você tem e o que você quer ter
            </a>
            .
          </p>
          <p>
            Pesquise em inglês, querendo ou não, o cenário da tecnologia mundial
            fala inglês, você econtrará milhares de resultados a mais
            pesquisando em inglês, existem vários{' '}
            <a
              target="_blank"
              without
              rel="noopener noreferrer"
              href="https://stackoverflow.com/questions">
              fóruns
            </a>{' '}
            e{' '}
            <a
              target="_blank"
              without
              rel="noopener noreferrer"
              href="https://github.com/explore">
              issues
            </a>{' '}
            que já tem uma possível solução para o problema que você está
            enfrentando.
          </p>

          <p>
            Portando, não pergunte se tem alguém que saiba ou é especialista
            naquilo, apenas faça a pergunta, se alguém souber poderá responder
            diretamente. Para fazer uma pergunta bem elaborada pense em colocar
            esses pontos. Veja um exemplo abaixo de como fazer uma pergunta
            direta do seu problema.
          </p>
        </S.section>

        <S.content>
          <h2>Faça esse tipo de pergunta</h2>
          <Blockquote id="question">
            Foo49: Estou tendo o seguinte [problema] no Java, estou tentando
            fazer X e obtendo Z quando, na verdade, queria obter Y. Já tentei
            fazer [isso], pesquisei nas seguintes [fontes], mas não consegui
            resolver o problema, aqui estão os screenshots, links e logs para
            mais detalhes. Se alguém puder me ajudar, agradeço desde já!
          </Blockquote>
        </S.content>

        <S.section>
          <p>
            Abaixo estão alguns links úteis que você pode utilizar para enviar
            logs e detalhes do problema.
            <ul>
              <li>
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://carbon.now.sh/">
                  Carbon
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://pastebin.com/">
                  Pastebin
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://gist.github.com/">
                  GitHub Gist
                </a>
              </li>
            </ul>
          </p>
        </S.section>

        <S.section>
          <p>
            Por fim, se você quiser se aprofundar um pouco mais, leia{' '}
            <a
              target="_blank"
              without
              rel="noopener noreferrer"
              href="http://catb.org/~esr/faqs/smart-questions.html">
              isto
            </a>
            .
          </p>
        </S.section>
      </S.main>

      <S.footer>
        NPASAP@{dateYear}
        <a
          href="https://github.com/users/rwietter"
          target="_blank"
          rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </S.footer>
    </div>
  );
}
