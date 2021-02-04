/*
Navicat MySQL Data Transfer

Source Server         : LOCALHOST
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : automatizado

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-02-04 20:45:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cachipun
-- ----------------------------
DROP TABLE IF EXISTS `cachipun`;
CREATE TABLE `cachipun` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `idHash` varchar(500) NOT NULL,
  `playerNum` int(11) DEFAULT NULL,
  `idEncuesta` varchar(500) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `ganadorJuego1` int(11) NOT NULL DEFAULT 0,
  `ganadorJuego2` int(11) NOT NULL DEFAULT 0,
  `ganadorJuego3` int(11) NOT NULL DEFAULT 0,
  `fechaHora` datetime NOT NULL,
  PRIMARY KEY (`ID`,`idHash`),
  UNIQUE KEY `id` (`idHash`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for movimientos
-- ----------------------------
DROP TABLE IF EXISTS `movimientos`;
CREATE TABLE `movimientos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `idEncuesta` varchar(500) DEFAULT '',
  `idUser` varchar(500) NOT NULL,
  `movimiento` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
