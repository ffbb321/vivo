/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : loginuser

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-10-18 11:12:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for login_user
-- ----------------------------
DROP TABLE IF EXISTS `login_user`;
CREATE TABLE `login_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `mark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login_user
-- ----------------------------
INSERT INTO `login_user` VALUES ('1', '小明', '1234', null);
INSERT INTO `login_user` VALUES ('2', 'xixi', '123', null);
INSERT INTO `login_user` VALUES ('3', 'fanfan', '2222', null);
INSERT INTO `login_user` VALUES ('4', '小红', '4567', null);
INSERT INTO `login_user` VALUES ('5', 'cai', '555', null);
INSERT INTO `login_user` VALUES ('6', 'xxxx', '1111', null);
INSERT INTO `login_user` VALUES ('7', '翻翻', '123', null);
INSERT INTO `login_user` VALUES ('8', '小王', '123', null);
INSERT INTO `login_user` VALUES ('9', '邓伦', '520', null);
INSERT INTO `login_user` VALUES ('12', 'gai', '111', null);
INSERT INTO `login_user` VALUES ('14', '123', '123', null);
INSERT INTO `login_user` VALUES ('15', '123123', '123', null);
INSERT INTO `login_user` VALUES ('16', 'aaa', '123', null);
INSERT INTO `login_user` VALUES ('17', 'faa', '123', null);
INSERT INTO `login_user` VALUES ('18', '1234', '123', null);
INSERT INTO `login_user` VALUES ('19', '12434', '111', null);
INSERT INTO `login_user` VALUES ('20', '翻翻阿克', '123', null);
