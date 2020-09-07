import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import * as S from '../styles/styles';
import { Blockquote } from '../components/Blockquote/Blockquote';

import github from '../icons/iconmonstr-github-1.svg';

export default function Home() {
  const dateYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Não peça se alguém sabe, apenas pergunte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.main>
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
        Maurício @ {dateYear}
        <a
          href="https://github.com/users/rwietter"
          target="_blank"
          rel="noopener noreferrer"></a>
        <img src={github}></img>
      </S.footer>
    </>
  );
}
