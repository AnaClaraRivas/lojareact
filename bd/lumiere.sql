-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 30-Out-2025 às 16:42
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `lumiere`
--
CREATE DATABASE IF NOT EXISTS `lumiere` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `lumiere`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_detalhada`
--

CREATE TABLE `avaliacao_detalhada` (
  `id_avaliacao_det` int(11) NOT NULL,
  `nota` int(11) NOT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  `opiniao` enum('Sim','Não','Mais ou menos') NOT NULL,
  `data_avaliacao_det` datetime DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_obras` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `avaliacao_detalhada`
--

INSERT INTO `avaliacao_detalhada` (`id_avaliacao_det`, `nota`, `comentario`, `opiniao`, `data_avaliacao_det`, `id_usuario`, `id_obras`) VALUES
(1, 9, 'Filme incrível, fotografia impecável!', 'Sim', '2025-10-30 12:04:39', 1, 3),
(2, 7, 'Gostei, mas esperava mais do final.', 'Mais ou menos', '2025-10-30 12:04:39', 3, 2),
(3, 10, 'Um clássico, simplesmente perfeito.', 'Sim', '2025-10-30 12:04:39', 4, 1),
(4, 8, 'História envolvente e emocionante.', 'Sim', '2025-10-30 12:04:39', 2, 4),
(5, 6, 'Legal, mas algumas partes foram confusas.', 'Mais ou menos', '2025-10-30 12:04:39', 5, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_rapida`
--

CREATE TABLE `avaliacao_rapida` (
  `id_avaliacao_rap` int(11) NOT NULL,
  `nota` int(11) NOT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  `opiniao` enum('Sim','Não','Mais ou menos') NOT NULL,
  `data_avaliacao_rap` datetime DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_obras` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `avaliacao_rapida`
--

INSERT INTO `avaliacao_rapida` (`id_avaliacao_rap`, `nota`, `comentario`, `opiniao`, `data_avaliacao_rap`, `id_usuario`, `id_obras`) VALUES
(1, 10, 'Maravilhoso!', 'Sim', '2025-10-30 12:05:12', 1, 1),
(2, 5, 'Não gostei muito.', 'Não', '2025-10-30 12:05:12', 2, 2),
(3, 8, 'Bem interessante.', 'Sim', '2025-10-30 12:05:12', 3, 3),
(4, 9, 'Excelente produção.', 'Sim', '2025-10-30 12:05:12', 4, 4),
(5, 7, 'Bom, mas um pouco longo.', 'Mais ou menos', '2025-10-30 12:05:12', 5, 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `criterios`
--

CREATE TABLE `criterios` (
  `id_criterios` int(11) NOT NULL,
  `originalidade` int(11) NOT NULL,
  `personagens` int(11) NOT NULL,
  `enredo` int(11) DEFAULT NULL,
  `fluidez_leitura` int(11) DEFAULT NULL,
  `ambientacao` int(11) DEFAULT NULL,
  `roteiro` int(11) DEFAULT NULL,
  `atuacao` int(11) DEFAULT NULL,
  `trilha_sonora` int(11) DEFAULT NULL,
  `fotografia` int(11) DEFAULT NULL,
  `id_avaliacao_det` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `estantes`
--

CREATE TABLE `estantes` (
  `id_estantes` int(11) NOT NULL,
  `nome_estante` varchar(255) DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_obras` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `estantes`
--

INSERT INTO `estantes` (`id_estantes`, `nome_estante`, `descricao`, `id_usuario`, `id_obras`) VALUES
(1, 'Favoritos', 'Obras que mais gostei.', 1, 1),
(2, 'Para assistir', 'Filmes e séries que quero ver.', 2, 2),
(3, 'Clássicos', 'Obras antigas e marcantes.', 3, 3),
(4, 'Romances', 'Filmes e livros românticos.', 4, 5),
(5, 'Fantasia', 'Histórias com mundos mágicos.', 5, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `obras`
--

CREATE TABLE `obras` (
  `id_obras` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `tipo` enum('Livro','Série','Filme') NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `ano_lancamento` datetime NOT NULL,
  `autor` varchar(255) NOT NULL,
  `capa` varchar(300) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `obras`
--

INSERT INTO `obras` (`id_obras`, `titulo`, `tipo`, `descricao`, `ano_lancamento`, `autor`, `capa`, `data_cadastro`, `id_usuario`) VALUES
(1, 'Jantar secreto', 'Livro', 'Pobres que precisam de dinheiro fazem jantares canibais.', '2015-07-29 00:00:00', 'Raphael Montes', 'senhor.jpg', '2025-10-30 12:03:50', 1),
(2, 'Stranger Things', 'Série', 'Crianças enfrentam mistérios sobrenaturais em Hawkins.', '2016-07-15 00:00:00', 'Irmãos Duffer', 'stranger.jpg', '2025-10-30 12:03:50', 2),
(3, 'Interestelar', 'Filme', 'Um grupo viaja por buracos de minhoca em busca de um novo lar para a humanidade.', '2014-11-07 00:00:00', 'Christopher Nolan', 'interestelar.jpg', '2025-10-30 12:03:50', 2),
(4, 'Wicked', 'Filme', 'Bruxa verde e rosa sendo amigas.', '2024-11-22 00:00:00', 'Jon M. Chu', 'wicked.jpg', '2025-10-30 12:03:50', 3),
(5, 'La La Land', 'Filme', 'Um pianista e uma atriz vivem um romance em Los Angeles.', '2016-12-09 00:00:00', 'Damien Chazelle', 'lalaland.jpg', '2025-10-30 12:03:50', 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `temporadas`
--

CREATE TABLE `temporadas` (
  `id_temporadas` int(11) NOT NULL,
  `numero_temp` int(11) DEFAULT NULL,
  `numero_eps` int(11) DEFAULT NULL,
  `id_obras` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `temporadas`
--

INSERT INTO `temporadas` (`id_temporadas`, `numero_temp`, `numero_eps`, `id_obras`) VALUES
(1, 1, 8, 2),
(2, 2, 9, 2),
(3, 3, 8, 2),
(4, 4, 9, 2),
(5, 5, 8, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_cadastro` datetime DEFAULT NULL,
  `tipo_usuario` enum('Administrador','Avaliador') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome`, `email`, `senha`, `data_cadastro`, `tipo_usuario`) VALUES
(1, 'Ana Clara', 'ana.clara@example.com', 'senha123', '2025-10-30 11:58:04', 'Avaliador'),
(2, 'Carlos Souza', 'carlos.souza@example.com', '123456', '2025-10-30 11:58:04', 'Administrador'),
(3, 'Maria Oliveira', 'maria.oliveira@example.com', 'senha789', '2025-10-30 11:58:04', 'Avaliador'),
(4, 'João Pereira', 'joao.pereira@example.com', 'abc123', '2025-10-30 11:58:04', 'Avaliador'),
(5, 'Beatriz Krisan', 'beatriz.krisan@example.com', 'teste2025', '2025-10-30 11:58:04', 'Administrador');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `avaliacao_detalhada`
--
ALTER TABLE `avaliacao_detalhada`
  ADD PRIMARY KEY (`id_avaliacao_det`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_obras` (`id_obras`);

--
-- Índices para tabela `avaliacao_rapida`
--
ALTER TABLE `avaliacao_rapida`
  ADD PRIMARY KEY (`id_avaliacao_rap`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_obras` (`id_obras`);

--
-- Índices para tabela `criterios`
--
ALTER TABLE `criterios`
  ADD PRIMARY KEY (`id_criterios`),
  ADD KEY `id_avaliacao_det` (`id_avaliacao_det`);

--
-- Índices para tabela `estantes`
--
ALTER TABLE `estantes`
  ADD PRIMARY KEY (`id_estantes`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_obras` (`id_obras`);

--
-- Índices para tabela `obras`
--
ALTER TABLE `obras`
  ADD PRIMARY KEY (`id_obras`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices para tabela `temporadas`
--
ALTER TABLE `temporadas`
  ADD PRIMARY KEY (`id_temporadas`),
  ADD KEY `id_obras` (`id_obras`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `avaliacao_detalhada`
--
ALTER TABLE `avaliacao_detalhada`
  MODIFY `id_avaliacao_det` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `avaliacao_rapida`
--
ALTER TABLE `avaliacao_rapida`
  MODIFY `id_avaliacao_rap` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `criterios`
--
ALTER TABLE `criterios`
  MODIFY `id_criterios` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `estantes`
--
ALTER TABLE `estantes`
  MODIFY `id_estantes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `obras`
--
ALTER TABLE `obras`
  MODIFY `id_obras` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `temporadas`
--
ALTER TABLE `temporadas`
  MODIFY `id_temporadas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `avaliacao_detalhada`
--
ALTER TABLE `avaliacao_detalhada`
  ADD CONSTRAINT `avaliacao_detalhada_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `avaliacao_detalhada_ibfk_2` FOREIGN KEY (`id_obras`) REFERENCES `obras` (`id_obras`);

--
-- Limitadores para a tabela `avaliacao_rapida`
--
ALTER TABLE `avaliacao_rapida`
  ADD CONSTRAINT `avaliacao_rapida_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `avaliacao_rapida_ibfk_2` FOREIGN KEY (`id_obras`) REFERENCES `obras` (`id_obras`);

--
-- Limitadores para a tabela `criterios`
--
ALTER TABLE `criterios`
  ADD CONSTRAINT `criterios_ibfk_1` FOREIGN KEY (`id_avaliacao_det`) REFERENCES `avaliacao_detalhada` (`id_avaliacao_det`);

--
-- Limitadores para a tabela `estantes`
--
ALTER TABLE `estantes`
  ADD CONSTRAINT `estantes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `estantes_ibfk_2` FOREIGN KEY (`id_obras`) REFERENCES `obras` (`id_obras`);

--
-- Limitadores para a tabela `obras`
--
ALTER TABLE `obras`
  ADD CONSTRAINT `obras_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Limitadores para a tabela `temporadas`
--
ALTER TABLE `temporadas`
  ADD CONSTRAINT `temporadas_ibfk_1` FOREIGN KEY (`id_obras`) REFERENCES `obras` (`id_obras`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
