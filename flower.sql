/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3306
 Source Schema         : flower

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 24/02/2018 17:12:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bigtype
-- ----------------------------
DROP TABLE IF EXISTS `bigtype`;
CREATE TABLE `bigtype`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品类别',
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bigtype
-- ----------------------------
INSERT INTO `bigtype` VALUES (1, '鲜花', '2018-02-02 12:06:06');
INSERT INTO `bigtype` VALUES (2, '永生花', '2018-02-02 12:06:19');
INSERT INTO `bigtype` VALUES (3, '蛋糕', '2018-02-02 12:07:07');
INSERT INTO `bigtype` VALUES (4, '礼品', '2018-02-02 12:07:10');
INSERT INTO `bigtype` VALUES (5, '巧克力', '2018-02-02 12:07:20');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL COMMENT '用户id',
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `gid` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (1, 2, '2018-02-24 15:53:10', '1,2');
INSERT INTO `cart` VALUES (2, 1, '2018-02-24 15:53:14', '1,3,4');
INSERT INTO `cart` VALUES (3, 16, '2018-02-24 15:53:22', '1,2,3');
INSERT INTO `cart` VALUES (4, 17, '2018-02-24 16:01:35', '1,1,2');

-- ----------------------------
-- Table structure for cartproduct
-- ----------------------------
DROP TABLE IF EXISTS `cartproduct`;
CREATE TABLE `cartproduct`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `gid` int(11) NULL DEFAULT NULL,
  `num` int(11) NULL DEFAULT NULL,
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `userid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of cartproduct
-- ----------------------------
INSERT INTO `cartproduct` VALUES (10, 3, 1, '2018-02-24 17:07:31', 17);
INSERT INTO `cartproduct` VALUES (11, 8, 1, '2018-02-24 17:07:36', 17);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品标题',
  `bigtype` int(11) NOT NULL COMMENT '商品大类别',
  `smalltype` int(11) NULL DEFAULT NULL COMMENT '商品小类别（如花里面的玫瑰花）',
  `price` decimal(10, 2) NOT NULL COMMENT '商品价格',
  `saleprice` decimal(10, 2) NULL DEFAULT NULL COMMENT '折后价',
  `saleqty` int(11) NULL DEFAULT NULL,
  `hot` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mainimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品主要图片',
  `detailsimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品细节图片',
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品颜色',
  `qty` int(10) NULL DEFAULT NULL COMMENT '商品剩余数量',
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 117 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '心连心----红玫瑰19枝，龙柳心型小架构', 1, 1, 259.00, 239.00, 3, 'n', 'src/assets/imgs/redrose001.jpg', 'src/assets/imgs/redrose001_001.jpg,src/assets/imgs/redrose001_002.jpg,src/assets/imgs/redrose001_003.jpg,src/assets/imgs/redrose001_004.jpg', '红色', 100, '2018-02-02 20:38:08');
INSERT INTO `goods` VALUES (2, '邂逅浪漫----红玫瑰29枝+红色蔷薇10枝，灯台9枝，尤加利叶', 1, 1, 229.00, 239.00, 5, 'n', 'src/assets/imgs/redrose002.jpg', 'src/assets/imgs/redrose002_001.jpg,src/assets/imgs/redrose002_002.jpg,src/assets/imgs/redrose002_003.jpg,src/assets/imgs/redrose002_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (3, '圣诞红----红玫瑰11枝+银色松果5个+红色小雏菊5枝', 1, 1, 469.00, 239.00, 11, 'n', 'src/assets/imgs/redrose003.jpg', 'src/assets/imgs/redrose003_001.jpg,src/assets/imgs/redrose003_002.jpg,src/assets/imgs/redrose003_003.jpg,src/assets/imgs/redrose003_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (4, '一往情深----精品玫瑰礼盒:19枝红玫瑰，勿忘我适量', 1, 1, 259.00, 239.00, 30, 'y', 'src/assets/imgs/redrose004.jpg', 'src/assets/imgs/redrose004_001.jpg,src/assets/imgs/redrose004_002.jpg,src/assets/imgs/redrose004_003.jpg,src/assets/imgs/redrose004_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (5, '致美丽的你----红玫瑰11枝，满天星围绕，栀子叶0.5扎', 1, 1, 259.00, 239.00, 22, 'n', 'src/assets/imgs/redrose005.jpg', 'src/assets/imgs/redrose005_001.jpg,src/assets/imgs/redrose005_002.jpg,src/assets/imgs/redrose005_003.jpg,src/assets/imgs/redrose005_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (6, '不变的承诺----99枝红玫瑰', 1, 1, 559.00, 539.00, 2, 'n', 'src/assets/imgs/redrose006.jpg', 'src/assets/imgs/redrose006_001.jpg,src/assets/imgs/redrose006_002.jpg,src/assets/imgs/redrose006_003.jpg,src/assets/imgs/redrose006_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (7, '一心一意----玫瑰11枝，粉色勿忘我0.3扎', 1, 1, 259.00, 239.00, 1, 'n', 'src/assets/imgs/redrose007.jpg', 'src/assets/imgs/redrose007_001.jpg,src/assets/imgs/redrose007_002.jpg,src/assets/imgs/redrose007_003.jpg,src/assets/imgs/redrose007_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (8, '爱在心头----玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝', 1, 1, 119.00, 109.00, 7, 'n', 'src/assets/imgs/redrose008.jpg', 'src/assets/imgs/redrose008_001.jpg,src/assets/imgs/redrose008_002.jpg,src/assets/imgs/redrose008_003.jpg,src/assets/imgs/redrose008_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (9, '浪漫心情----红玫瑰19枝', 1, 1, 259.00, 239.00, 13, 'n', 'src/assets/imgs/redrose009.jpg', 'src/assets/imgs/redrose009_001.jpg,src/assets/imgs/redrose009_002.jpg,src/assets/imgs/redrose009_003.jpg,src/assets/imgs/redrose009_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (10, '黑夜之光----红色玫瑰11枝，满天星', 1, 1, 339.00, 319.00, 15, 'n', 'src/assets/imgs/redrose010.jpg', 'src/assets/imgs/redrose010_001.jpg,src/assets/imgs/redrose010_002.jpg,src/assets/imgs/redrose010_003.jpg,src/assets/imgs/redrose010_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (11, '浪漫巴黎----红玫瑰12枝，石竹梅7枝', 1, 1, 259.00, 239.00, 19, 'n', 'src/assets/imgs/redrose001.jpg', 'src/assets/imgs/redrose001_001.jpg,src/assets/imgs/redrose001_002.jpg,src/assets/imgs/redrose001_003.jpg,src/assets/imgs/redrose001_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (12, '牵手一生----红玫瑰19枝', 1, 1, 169.00, 139.00, 0, 'n', 'src/assets/imgs/redrose002.jpg', 'src/assets/imgs/redrose002_001.jpg,src/assets/imgs/redrose002_002.jpg,src/assets/imgs/redrose002_003.jpg,src/assets/imgs/redrose002_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (13, '永恒的爱情----红玫瑰99枝', 1, 1, 259.00, 239.00, 3, 'n', 'src/assets/imgs/redrose003.jpg', 'src/assets/imgs/redrose003_001.jpg,src/assets/imgs/redrose003_002.jpg,src/assets/imgs/redrose003_003.jpg,src/assets/imgs/redrose003_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (14, '热恋----红玫瑰50枝', 1, 1, 459.00, 439.00, 5, 'n', 'src/assets/imgs/redrose004.jpg', 'src/assets/imgs/redrose004_001.jpg,src/assets/imgs/redrose004_002.jpg,src/assets/imgs/redrose004_003.jpg,src/assets/imgs/redrose004_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (15, '真爱----红玫瑰9枝，石竹梅4枝，栀子叶0.5扎', 1, 1, 219.00, 209.00, 11, 'n', 'src/assets/imgs/redrose005.jpg', 'src/assets/imgs/redrose005_001.jpg,src/assets/imgs/redrose005_002.jpg,src/assets/imgs/redrose005_003.jpg,src/assets/imgs/redrose005_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (16, '馨情无限----戴安娜玫瑰11枝，红色康乃馨11支，红色石竹梅4枝', 1, 1, 159.00, 139.00, 30, 'y', 'src/assets/imgs/redrose006.jpg', 'src/assets/imgs/redrose006_001.jpg,src/assets/imgs/redrose006_002.jpg,src/assets/imgs/redrose006_003.jpg,src/assets/imgs/redrose006_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (17, '缪斯女神----红玫瑰16枝，红豆5枝，粉色桔梗1枝，银叶菊2枝', 1, 1, 259.00, 239.00, 22, 'n', 'src/assets/imgs/redrose007.jpg', 'src/assets/imgs/redrose007_001.jpg,src/assets/imgs/redrose007_002.jpg,src/assets/imgs/redrose007_003.jpg,src/assets/imgs/redrose007_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (18, '爱的纪念日----红玫瑰11枝,勿忘我、栀子叶', 1, 1, 299.00, 259.00, 2, 'n', 'src/assets/imgs/redrose008.jpg', 'src/assets/imgs/redrose008_001.jpg,src/assets/imgs/redrose008_002.jpg,src/assets/imgs/redrose008_003.jpg,src/assets/imgs/redrose008_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (19, '念念不忘----红玫瑰19枝', 1, 1, 259.00, 239.00, 1, 'n', 'src/assets/imgs/redrose009.jpg', 'src/assets/imgs/redrose009_001.jpg,src/assets/imgs/redrose009_002.jpg,src/assets/imgs/redrose009_003.jpg,src/assets/imgs/redrose009_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (20, '浪漫告白----卡罗拉红玫瑰11枝、白色小雏菊4枝', 1, 1, 239.00, 219.00, 7, 'n', 'src/assets/imgs/redrose010.jpg', 'src/assets/imgs/redrose010_001.jpg,src/assets/imgs/redrose010_002.jpg,src/assets/imgs/redrose010_003.jpg,src/assets/imgs/redrose010_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (21, '晴朗----香槟玫瑰11枝，向日葵2枝，绿色桔梗5枝，绿色小菊3枝，叶上花3枝', 1, 1, 259.00, 239.00, 13, 'n', 'src/assets/imgs/bubblyrose001.jpg', 'src/assets/imgs/bubblyrose001_001.jpg,src/assets/imgs/bubblyrose001_002.jpg,src/assets/imgs/bubblyrose001_003.jpg,src/assets/imgs/bubblyrose001_004.jpg', '香槟色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (22, '淳美之爱----戴安娜粉玫瑰33枝，白色相思梅5枝', 1, 1, 559.00, 539.00, 15, 'n', 'src/assets/imgs/pinkrose001.jpg', 'src/assets/imgs/pinkrose001_001.jpg,src/assets/imgs/pinkrose001_002.jpg,src/assets/imgs/pinkrose001_003.jpg,src/assets/imgs/pinkrose001_001.jpg', '粉色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (23, '伴你久久----冷美人紫玫瑰99枝', 1, 1, 259.00, 239.00, 19, 'n', 'src/assets/imgs/purplerose001.jpg', 'src/assets/imgs/purplerose001_001.jpg,src/assets/imgs/purplerose001_002.jpg,src/assets/imgs/purplerose001_003.jpg,src/assets/imgs/purplerose001_004.jpg', '紫色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (24, '一生期盼----紫玫瑰19枝、紫色桔梗6枝', 1, 1, 119.00, 109.00, 0, 'n', 'src/assets/imgs/purplerose002.jpg', 'src/assets/imgs/purplerose002_001.jpg,src/assets/imgs/purplerose002_002.jpg,src/assets/imgs/purplerose002_003.jpg,src/assets/imgs/purplerose002_004.jpg', '紫色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (25, '圣诞雪----白雪山9枝+银色松果5个+水晶草等叶材', 1, 1, 259.00, 239.00, 3, 'n', 'src/assets/imgs/whiterose001.jpg', 'src/assets/imgs/whiterose001_001.jpg,src/assets/imgs/whiterose001_001.jpg,src/assets/imgs/whiterose001_001.jpg,src/assets/imgs/whiterose001_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (26, '月光女神----白玫瑰11枝，绿色桔梗5枝，小菊3枝，白色石竹梅4枝', 1, 1, 339.00, 319.00, 5, 'n', 'src/assets/imgs/whiterose002.jpg', 'src/assets/imgs/whiterose002_001.jpg,src/assets/imgs/whiterose002_001.jpg,src/assets/imgs/whiterose002_001.jpg,src/assets/imgs/whiterose002_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (27, '真爱如初----雪山玫瑰11枝、深紫色勿忘我0.3扎', 1, 1, 259.00, 239.00, 11, 'n', 'src/assets/imgs/whiterose003.jpg', 'src/assets/imgs/whiterose003_001.jpg,src/assets/imgs/whiterose003_001.jpg,src/assets/imgs/whiterose003_001.jpg,src/assets/imgs/whiterose003_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (28, '海洋之心----白玫瑰29枝', 1, 1, 169.00, 139.00, 30, 'y', 'src/assets/imgs/whiterose004.jpg', 'src/assets/imgs/whiterose004_001.jpg,src/assets/imgs/whiterose004_001.jpg,src/assets/imgs/whiterose004_001.jpg,src/assets/imgs/whiterose004_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (29, '白雪公主----白玫瑰50枝', 1, 1, 259.00, 239.00, 22, 'n', 'src/assets/imgs/whiterose005.jpg', 'src/assets/imgs/whiterose005_001.jpg,src/assets/imgs/whiterose005_001.jpg,src/assets/imgs/whiterose005_001.jpg,src/assets/imgs/whiterose005_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (30, '爱是唯一----雪山白玫瑰11枝、白百合3枝', 1, 1, 459.00, 439.00, 2, 'n', 'src/assets/imgs/whiterose001.jpg', 'src/assets/imgs/whiterose001_001.jpg,src/assets/imgs/whiterose001_001.jpg,src/assets/imgs/whiterose001_001.jpg,src/assets/imgs/whiterose001_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (31, '梦的光点----雪山白玫瑰33支、尤加利叶8支、绿小菊10支', 1, 1, 219.00, 209.00, 1, 'n', 'src/assets/imgs/whiterose002.jpg', 'src/assets/imgs/whiterose002_001.jpg,src/assets/imgs/whiterose002_001.jpg,src/assets/imgs/whiterose002_001.jpg,src/assets/imgs/whiterose002_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (32, '纯美恋人----白玫瑰33枝，粉色勿忘我围绕', 1, 1, 159.00, 139.00, 7, 'n', 'src/assets/imgs/whiterose003.jpg', 'src/assets/imgs/whiterose003_001.jpg,src/assets/imgs/whiterose003_001.jpg,src/assets/imgs/whiterose003_001.jpg,src/assets/imgs/whiterose003_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (33, '轻语----精品玫瑰礼盒:白玫瑰33枝，少量绿叶', 1, 1, 259.00, 239.00, 13, 'n', 'src/assets/imgs/whiterose004.jpg', 'src/assets/imgs/whiterose004_001.jpg,src/assets/imgs/whiterose004_001.jpg,src/assets/imgs/whiterose004_001.jpg,src/assets/imgs/whiterose004_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (34, '爱你如初----雪山白玫瑰66枝', 1, 1, 299.00, 259.00, 15, 'n', 'src/assets/imgs/whiterose005.jpg', 'src/assets/imgs/whiterose005_001.jpg,src/assets/imgs/whiterose005_001.jpg,src/assets/imgs/whiterose005_001.jpg,src/assets/imgs/whiterose005_001.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (35, '暗香----香槟玫瑰11枝，黄玫瑰8枝，红豆3枝', 1, 1, 259.00, 239.00, 19, 'n', 'src/assets/imgs/yellowrose001.jpg', 'src/assets/imgs/yellowrose001_001.jpg,src/assets/imgs/yellowrose001_002.jpg,src/assets/imgs/yellowrose001_003.jpg,src/assets/imgs/yellowrose001_004.jpg', '黄色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (36, '清晨的问候----10枝马蹄莲，5枝白玫瑰', 1, 6, 219.00, 209.00, 0, 'n', 'src/assets/imgs/callalily001.jpg', 'src/assets/imgs/callalily001_001.jpg,src/assets/imgs/callalily001_002.jpg,src/assets/imgs/callalily001_003.jpg,src/assets/imgs/callalily001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (37, '天使之祈----精品康乃馨礼盒,粉色康乃馨19枝，勿忘我适量', 1, 2, 159.00, 139.00, 3, 'n', 'src/assets/imgs/pinkcarnation001.jpg', 'src/assets/imgs/pinkcarnation001_001.jpg,src/assets/imgs/pinkcarnation001_002.jpg,src/assets/imgs/pinkcarnation001_003.jpg,src/assets/imgs/pinkcarnation001_004.jpg', '粉色 ', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (38, '爱的祝福----2枝多头白香水百合,19枝粉康乃馨', 1, 2, 259.00, 239.00, 5, 'n', 'src/assets/imgs/pinkcarnation002.jpg', 'src/assets/imgs/pinkcarnation002_001.jpg,src/assets/imgs/pinkcarnation002_002.jpg,src/assets/imgs/pinkcarnation002_003.jpg,src/assets/imgs/pinkcarnation002_004.jpg', '粉色 ', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (39, '健康长久----大红色康乃馨99枝、红色多头康乃馨1扎', 1, 2, 299.00, 259.00, 11, 'n', 'src/assets/imgs/redcarnation001.jpg', 'src/assets/imgs/redcarnation001_001.jpg,src/assets/imgs/redcarnation001_002.jpg,src/assets/imgs/redcarnation001_003.jpg,src/assets/imgs/redcarnation001_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (40, '感激----29枝红康乃馨,2枝粉百合', 1, 2, 259.00, 239.00, 30, 'y', 'src/assets/imgs/redcarnation002.jpg', 'src/assets/imgs/redcarnation002_001.jpg,src/assets/imgs/redcarnation002_002.jpg,src/assets/imgs/redcarnation002_003.jpg,src/assets/imgs/redcarnation002_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (41, 'Be My Love---- 厄瓜多尔进口红色永生玫瑰2枝，进口白色永生玫瑰1枝，棉花2朵，粉色珍珠5颗', 2, NULL, 259.00, 239.00, 22, 'n', 'src/assets/imgs/foreverfreshflower001.jpg', 'src/assets/imgs/foreverfreshflower001_001.jpg,src/assets/imgs/foreverfreshflower001_002.jpg,src/assets/imgs/foreverfreshflower001_003.jpg,src/assets/imgs/foreverfreshflower001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (42, '公主的音乐水晶球·七彩----大型水晶音乐球永生花', 2, NULL, 459.00, 439.00, 2, 'n', 'src/assets/imgs/foreverfreshflower002.jpg', 'src/assets/imgs/foreverfreshflower002_001.jpg,src/assets/imgs/foreverfreshflower002_002.jpg,src/assets/imgs/foreverfreshflower002_003.jpg,src/assets/imgs/foreverfreshflower002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (43, '「倾世之爱」永生玫瑰熊/定制款/60CM----厄瓜多尔进口红色永生玫瑰', 2, NULL, 219.00, 209.00, 1, 'n', 'src/assets/imgs/foreverfreshflower003.jpg', 'src/assets/imgs/foreverfreshflower003_001.jpg,src/assets/imgs/foreverfreshflower003_002.jpg,src/assets/imgs/foreverfreshflower003_003.jpg,src/assets/imgs/foreverfreshflower003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (44, '永恒的约定----红色进口永生玫瑰6枝，红色小玫瑰3枝', 2, NULL, 159.00, 139.00, 7, 'n', 'src/assets/imgs/foreverfreshflower004.jpg', 'src/assets/imgs/foreverfreshflower004_001.jpg,src/assets/imgs/foreverfreshflower004_002.jpg,src/assets/imgs/foreverfreshflower004_003.jpg,src/assets/imgs/foreverfreshflower004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (45, '公主的水晶鞋·粉----进口粉色永生玫瑰1枝，小玫瑰1枝，搭配粉色白色绣球、小满天星', 2, NULL, 259.00, 239.00, 13, 'n', 'src/assets/imgs/foreverfreshflower005.jpg', 'src/assets/imgs/foreverfreshflower005_001.jpg,src/assets/imgs/foreverfreshflower005_002.jpg,src/assets/imgs/foreverfreshflower005_003.jpg,src/assets/imgs/foreverfreshflower005_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (46, '莫尔卡夫(8寸)----元祖巧克力蛋糕', 3, NULL, 219.00, 209.00, 15, 'n', 'src/assets/imgs/cake001.jpg', 'src/assets/imgs/cake001_001.jpg,src/assets/imgs/cake001_002.jpg,src/assets/imgs/cake001_003.jpg,src/assets/imgs/cake001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (47, '黄金燕麦(8寸)----元祖鲜奶蛋糕', 3, NULL, 159.00, 139.00, 19, 'n', 'src/assets/imgs/cake002.jpg', 'src/assets/imgs/cake002_001.jpg,src/assets/imgs/cake002_002.jpg,src/assets/imgs/cake002_003.jpg,src/assets/imgs/cake002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (48, '草莓拿破仑蛋糕（5-8人食）----拿破仑蛋糕', 3, NULL, 259.00, 239.00, 0, 'n', 'src/assets/imgs/cake003.jpg', 'src/assets/imgs/cake003_001.jpg,src/assets/imgs/cake003_002.jpg,src/assets/imgs/cake003_003.jpg,src/assets/imgs/cake003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (49, '草莓物语 （2.2磅）----乳脂蛋糕', 3, NULL, 299.00, 259.00, 11, 'n', 'src/assets/imgs/cake004.jpg', 'src/assets/imgs/cake004_001.jpg,src/assets/imgs/cake004_002.jpg,src/assets/imgs/cake004_003.jpg,src/assets/imgs/cake004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (50, '白色红丝绒（1.2磅）----奶油蛋糕', 3, NULL, 259.00, 239.00, 30, 'n', 'src/assets/imgs/cake005.jpg', 'src/assets/imgs/cake005_001.jpg,src/assets/imgs/cake005_002.jpg,src/assets/imgs/cake005_003.jpg,src/assets/imgs/cake005_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (51, '彩虹下的约定/花的嫁纱银项链----厄瓜多尔进口巨型彩色玫瑰+T400花的嫁纱S925银项链', 4, NULL, 299.00, 259.00, 22, 'n', 'src/assets/imgs/present001.jpg', 'src/assets/imgs/present001_001.jpg,src/assets/imgs/present001_002.jpg,src/assets/imgs/present001_003.jpg,src/assets/imgs/present001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (52, '雪人房子LED灯水晶球音乐盒---- 曲目《天空之城》', 4, NULL, 259.00, 239.00, 2, 'n', 'src/assets/imgs/present002.jpg', 'src/assets/imgs/present002_001.jpg,src/assets/imgs/present002_002.jpg,src/assets/imgs/present002_003.jpg,src/assets/imgs/present002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (53, '十八音水晶钢琴----水晶音乐盒 韵升精品机芯 精选送女友礼物', 4, NULL, 259.00, 239.00, 1, 'n', 'src/assets/imgs/present003.jpg', 'src/assets/imgs/present003_001.jpg,src/assets/imgs/present003_002.jpg,src/assets/imgs/present003_003.jpg,src/assets/imgs/present003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (54, 'kiss娃娃摆件/小号----娃娃千足纯金箔 富贵典雅 婚庆结婚礼品', 4, NULL, 459.00, 439.00, 7, 'n', 'src/assets/imgs/present004.jpg', 'src/assets/imgs/present004_001.jpg,src/assets/imgs/present004_002.jpg,src/assets/imgs/present004_003.jpg,src/assets/imgs/present004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (55, '童话木马音乐盒----旋转木马音乐盒', 4, NULL, 219.00, 209.00, 13, 'n', 'src/assets/imgs/present005.jpg', 'src/assets/imgs/present005_001.jpg,src/assets/imgs/present005_002.jpg,src/assets/imgs/present005_003.jpg,src/assets/imgs/present005_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (56, '奢悦之美巧克力礼盒----夹心巧克力', 5, NULL, 159.00, 139.00, 15, 'n', 'src/assets/imgs/chocolate001.jpg', 'src/assets/imgs/chocolate001_001.jpg,src/assets/imgs/chocolate001_002.jpg,src/assets/imgs/chocolate001_003.jpg,src/assets/imgs/chocolate001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (57, '美满良缘 巧克力礼盒----手工巧克力', 5, NULL, 259.00, 239.00, 19, 'n', 'src/assets/imgs/chocolate002.jpg', 'src/assets/imgs/chocolate002_001.jpg,src/assets/imgs/chocolate002_002.jpg,src/assets/imgs/chocolate002_003.jpg,src/assets/imgs/chocolate002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (58, '玫瑰之恋巧克力礼盒----混合口味巧克力礼盒', 5, NULL, 219.00, 209.00, 0, 'n', 'src/assets/imgs/chocolate003.jpg', 'src/assets/imgs/chocolate003_001.jpg,src/assets/imgs/chocolate003_002.jpg,src/assets/imgs/chocolate003_003.jpg,src/assets/imgs/chocolate003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (59, '棒棒糖形手工纯脂巧克力礼盒----混合口味巧克力礼盒六一儿童节礼物', 5, NULL, 159.00, 139.00, 22, 'n', 'src/assets/imgs/chocolate004.jpg', 'src/assets/imgs/chocolate004_001.jpg,src/assets/imgs/chocolate004_002.jpg,src/assets/imgs/chocolate004_003.jpg,src/assets/imgs/chocolate004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (60, '玫瑰之约手工巧克力礼盒----手工巧克力', 5, NULL, 259.00, 239.00, 2, 'n', 'src/assets/imgs/chocolate005.jpg', 'src/assets/imgs/chocolate005_001.jpg,src/assets/imgs/chocolate005_002.jpg,src/assets/imgs/chocolate005_003.jpg,src/assets/imgs/chocolate005_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (61, '清晨的问候----10枝马蹄莲，5枝白玫瑰', 1, 6, 219.00, 209.00, 7, 'n', 'src/assets/imgs/callalily001.jpg', 'src/assets/imgs/callalily001_001.jpg,src/assets/imgs/callalily001_002.jpg,src/assets/imgs/callalily001_003.jpg,src/assets/imgs/callalily001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (62, '荷兰风情----玫红色郁金香10枝', 1, 3, 259.00, 239.00, 7, 'n', 'src/assets/imgs/tulip001.jpg', 'src/assets/imgs/tulip001_001.jpg,src/assets/imgs/tulip001_002.jpg,src/assets/imgs/tulip001_003.jpg,src/assets/imgs/tulip001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (63, '亭亭玉立----玫红色郁金香19枝', 1, 3, 159.00, 139.00, 22, 'y', 'src/assets/imgs/tulip002.jpg', 'src/assets/imgs/tulip002_001.jpg,src/assets/imgs/tulip002_002.jpg,src/assets/imgs/tulip002_003.jpg,src/assets/imgs/tulip002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (64, '虞美人----粉色郁金香9枝，紫色玫瑰11枝', 1, 3, 259.00, 239.00, 2, 'n', 'src/assets/imgs/tulip003.jpg', 'src/assets/imgs/tulip003_001.jpg,src/assets/imgs/tulip003_002.jpg,src/assets/imgs/tulip003_003.jpg,src/assets/imgs/tulip003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (65, '爱的芬芳----白色郁金香9枝，粉色郁金香9枝，紫色小菊3枝，高山羊齿叶7枝', 1, 3, 219.00, 209.00, 1, 'n', 'src/assets/imgs/tulip004.jpg', 'src/assets/imgs/tulip004_001.jpg,src/assets/imgs/tulip004_002.jpg,src/assets/imgs/tulip004_003.jpg,src/assets/imgs/tulip004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (66, '心花怒放----粉香水百合5枝', 1, 4, 159.00, 139.00, 7, 'n', 'src/assets/imgs/pinkgreenishlily001.jpg', 'src/assets/imgs/pinkgreenishlily001_001.jpg,src/assets/imgs/pinkgreenishlily001_002.jpg,src/assets/imgs/pinkgreenishlily001_003.jpg,src/assets/imgs/pinkgreenishlily001_004.jpg', '粉色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (67, '甜蜜物语----黛安娜粉玫瑰33枝，粉色香水百合3枝，搭配适量粉色勿忘我', 1, 4, 259.00, 239.00, 13, 'n', 'src/assets/imgs/pinkgreenishlily002.jpg', 'src/assets/imgs/pinkgreenishlily002_001.jpg,src/assets/imgs/pinkgreenishlily002_002.jpg,src/assets/imgs/pinkgreenishlily002_003.jpg,src/assets/imgs/pinkgreenishlily002_004.jpg', '粉色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (68, '海洋之心----白玫瑰29枝', 1, 4, 299.00, 259.00, 15, 'n', 'src/assets/imgs/whitegreenishlily001.jpg', 'src/assets/imgs/whitegreenishlily001_001.jpg,src/assets/imgs/whitegreenishlily001_002.jpg,src/assets/imgs/whitegreenishlily001_003.jpg,src/assets/imgs/whitegreenishlily001_004.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (69, '爱的祝福----2枝多头白香水百合,19枝粉康乃馨', 1, 4, 259.00, 239.00, 19, 'n', 'src/assets/imgs/whitegreenishlily002.jpg', 'src/assets/imgs/whitegreenishlily002_001.jpg,src/assets/imgs/whitegreenishlily002_002.jpg,src/assets/imgs/whitegreenishlily002_003.jpg,src/assets/imgs/whitegreenishlily002_004.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (70, '阳光心情----10枝多头黄百合', 1, 4, 299.00, 259.00, 0, 'n', 'src/assets/imgs/yellowgreenishlily001.jpg', 'src/assets/imgs/yellowgreenishlily001_001.jpg,src/assets/imgs/yellowgreenishlily001_002.jpg,src/assets/imgs/yellowgreenishlily001_003.jpg,src/assets/imgs/yellowgreenishlily001_004.jpg', '黄色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (71, '嫣然----粉色康乃馨19枝，粉色扶郎花5枝，紫色小雏菊3枝，银叶菊10枝', 1, 5, 259.00, 239.00, 22, 'y', 'src/assets/imgs/pinkfulang001.jpg', 'src/assets/imgs/pinkfulang001_001.jpg,src/assets/imgs/pinkfulang001_002.jpg,src/assets/imgs/pinkfulang001_003.jpg,src/assets/imgs/pinkfulang001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (72, '水瓶座守护花----粉色扶郎13枝，银叶菊1扎', 1, 5, 259.00, 239.00, 2, 'n', 'src/assets/imgs/pinkfulang002.jpg', 'src/assets/imgs/pinkfulang002_001.jpg,src/assets/imgs/pinkfulang002_002.jpg,src/assets/imgs/pinkfulang002_003.jpg,src/assets/imgs/pinkfulang002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (73, '清晨的问候----10枝马蹄莲，5枝白玫瑰', 1, 6, 459.00, 439.00, 7, 'n', 'src/assets/imgs/callalily001.jpg', 'src/assets/imgs/callalily001_001.jpg,src/assets/imgs/callalily001_002.jpg,src/assets/imgs/callalily001_003.jpg,src/assets/imgs/callalily001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (74, '向日葵之歌----向日葵6枝', 1, 7, 219.00, 209.00, 7, 'n', 'src/assets/imgs/sunflower001.jpg', 'src/assets/imgs/sunflower001_001.jpg,src/assets/imgs/sunflower001_002.jpg,src/assets/imgs/sunflower001_003.jpg,src/assets/imgs/sunflower001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (75, '阳光灿烂----向日葵3枝、金枝玉叶黄玫瑰19枝', 1, 7, 159.00, 139.00, 2, 'n', 'src/assets/imgs/sunflower002.jpg', 'src/assets/imgs/sunflower002_001.jpg,src/assets/imgs/sunflower002_002.jpg,src/assets/imgs/sunflower002_003.jpg,src/assets/imgs/sunflower002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (76, '向阳的温暖----精品向日葵礼盒：向日葵3枝，绿色康乃馨8枝，白百合2枝', 1, 7, 259.00, 239.00, 7, 'n', 'src/assets/imgs/sunflower003.jpg', 'src/assets/imgs/sunflower003_001.jpg,src/assets/imgs/sunflower003_002.jpg,src/assets/imgs/sunflower003_003.jpg,src/assets/imgs/sunflower003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (77, '天使之祈----精品康乃馨礼盒,粉色康乃馨19枝，勿忘我适量', 1, 2, 159.00, 139.00, 3, 'n', 'src/assets/imgs/pinkcarnation001.jpg', 'src/assets/imgs/pinkcarnation001_001.jpg,src/assets/imgs/pinkcarnation001_002.jpg,src/assets/imgs/pinkcarnation001_003.jpg,src/assets/imgs/pinkcarnation001_004.jpg', '粉色 ', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (78, '爱的祝福----2枝多头白香水百合,19枝粉康乃馨', 1, 2, 259.00, 239.00, 5, 'n', 'src/assets/imgs/pinkcarnation002.jpg', 'src/assets/imgs/pinkcarnation002_001.jpg,src/assets/imgs/pinkcarnation002_002.jpg,src/assets/imgs/pinkcarnation002_003.jpg,src/assets/imgs/pinkcarnation002_004.jpg', '粉色 ', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (79, '健康长久----大红色康乃馨99枝、红色多头康乃馨1扎', 1, 2, 299.00, 259.00, 11, 'n', 'src/assets/imgs/redcarnation001.jpg', 'src/assets/imgs/redcarnation001_001.jpg,src/assets/imgs/redcarnation001_002.jpg,src/assets/imgs/redcarnation001_003.jpg,src/assets/imgs/redcarnation001_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (80, '感激----29枝红康乃馨,2枝粉百合', 1, 2, 259.00, 239.00, 30, 'y', 'src/assets/imgs/redcarnation002.jpg', 'src/assets/imgs/redcarnation002_001.jpg,src/assets/imgs/redcarnation002_002.jpg,src/assets/imgs/redcarnation002_003.jpg,src/assets/imgs/redcarnation002_004.jpg', '红色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (81, 'Be My Love---- 厄瓜多尔进口红色永生玫瑰2枝，进口白色永生玫瑰1枝，棉花2朵，粉色珍珠5颗', 2, NULL, 259.00, 239.00, 22, 'n', 'src/assets/imgs/foreverfreshflower001.jpg', 'src/assets/imgs/foreverfreshflower001_001.jpg,src/assets/imgs/foreverfreshflower001_002.jpg,src/assets/imgs/foreverfreshflower001_003.jpg,src/assets/imgs/foreverfreshflower001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (82, '公主的音乐水晶球·七彩----大型水晶音乐球永生花', 2, NULL, 459.00, 439.00, 2, 'n', 'src/assets/imgs/foreverfreshflower002.jpg', 'src/assets/imgs/foreverfreshflower002_001.jpg,src/assets/imgs/foreverfreshflower002_002.jpg,src/assets/imgs/foreverfreshflower002_003.jpg,src/assets/imgs/foreverfreshflower002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (83, '「倾世之爱」永生玫瑰熊/定制款/60CM----厄瓜多尔进口红色永生玫瑰', 2, NULL, 219.00, 209.00, 1, 'n', 'src/assets/imgs/foreverfreshflower003.jpg', 'src/assets/imgs/foreverfreshflower003_001.jpg,src/assets/imgs/foreverfreshflower003_002.jpg,src/assets/imgs/foreverfreshflower003_003.jpg,src/assets/imgs/foreverfreshflower003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (84, '永恒的约定----红色进口永生玫瑰6枝，红色小玫瑰3枝', 2, NULL, 159.00, 139.00, 7, 'n', 'src/assets/imgs/foreverfreshflower004.jpg', 'src/assets/imgs/foreverfreshflower004_001.jpg,src/assets/imgs/foreverfreshflower004_002.jpg,src/assets/imgs/foreverfreshflower004_003.jpg,src/assets/imgs/foreverfreshflower004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (85, '公主的水晶鞋·粉----进口粉色永生玫瑰1枝，小玫瑰1枝，搭配粉色白色绣球、小满天星', 2, NULL, 259.00, 239.00, 13, 'n', 'src/assets/imgs/foreverfreshflower005.jpg', 'src/assets/imgs/foreverfreshflower005_001.jpg,src/assets/imgs/foreverfreshflower005_002.jpg,src/assets/imgs/foreverfreshflower005_003.jpg,src/assets/imgs/foreverfreshflower005_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (86, '莫尔卡夫(8寸)----元祖巧克力蛋糕', 3, NULL, 219.00, 209.00, 15, 'n', 'src/assets/imgs/cake001.jpg', 'src/assets/imgs/cake001_001.jpg,src/assets/imgs/cake001_002.jpg,src/assets/imgs/cake001_003.jpg,src/assets/imgs/cake001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (87, '黄金燕麦(8寸)----元祖鲜奶蛋糕', 3, NULL, 159.00, 139.00, 19, 'n', 'src/assets/imgs/cake002.jpg', 'src/assets/imgs/cake002_001.jpg,src/assets/imgs/cake002_002.jpg,src/assets/imgs/cake002_003.jpg,src/assets/imgs/cake002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (88, '草莓拿破仑蛋糕（5-8人食）----拿破仑蛋糕', 3, NULL, 259.00, 239.00, 0, 'n', 'src/assets/imgs/cake003.jpg', 'src/assets/imgs/cake003_001.jpg,src/assets/imgs/cake003_002.jpg,src/assets/imgs/cake003_003.jpg,src/assets/imgs/cake003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (89, '草莓物语 （2.2磅）----乳脂蛋糕', 3, NULL, 299.00, 259.00, 11, 'n', 'src/assets/imgs/cake004.jpg', 'src/assets/imgs/cake004_001.jpg,src/assets/imgs/cake004_002.jpg,src/assets/imgs/cake004_003.jpg,src/assets/imgs/cake004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (90, '白色红丝绒（1.2磅）----奶油蛋糕', 3, NULL, 259.00, 239.00, 30, 'n', 'src/assets/imgs/cake005.jpg', 'src/assets/imgs/cake005_001.jpg,src/assets/imgs/cake005_002.jpg,src/assets/imgs/cake005_003.jpg,src/assets/imgs/cake005_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (91, '彩虹下的约定/花的嫁纱银项链----厄瓜多尔进口巨型彩色玫瑰+T400花的嫁纱S925银项链', 4, NULL, 299.00, 259.00, 22, 'n', 'src/assets/imgs/present001.jpg', 'src/assets/imgs/present001_001.jpg,src/assets/imgs/present001_002.jpg,src/assets/imgs/present001_003.jpg,src/assets/imgs/present001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (92, '雪人房子LED灯水晶球音乐盒---- 曲目《天空之城》', 4, NULL, 259.00, 239.00, 2, 'n', 'src/assets/imgs/present002.jpg', 'src/assets/imgs/present002_001.jpg,src/assets/imgs/present002_002.jpg,src/assets/imgs/present002_003.jpg,src/assets/imgs/present002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (93, '十八音水晶钢琴----水晶音乐盒 韵升精品机芯 精选送女友礼物', 4, NULL, 259.00, 239.00, 1, 'n', 'src/assets/imgs/present003.jpg', 'src/assets/imgs/present003_001.jpg,src/assets/imgs/present003_002.jpg,src/assets/imgs/present003_003.jpg,src/assets/imgs/present003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (94, 'kiss娃娃摆件/小号----娃娃千足纯金箔 富贵典雅 婚庆结婚礼品', 4, NULL, 459.00, 439.00, 7, 'n', 'src/assets/imgs/present004.jpg', 'src/assets/imgs/present004_001.jpg,src/assets/imgs/present004_002.jpg,src/assets/imgs/present004_003.jpg,src/assets/imgs/present004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (95, '童话木马音乐盒----旋转木马音乐盒', 4, NULL, 219.00, 209.00, 13, 'n', 'src/assets/imgs/present005.jpg', 'src/assets/imgs/present005_001.jpg,src/assets/imgs/present005_002.jpg,src/assets/imgs/present005_003.jpg,src/assets/imgs/present005_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (96, '奢悦之美巧克力礼盒----夹心巧克力', 5, NULL, 159.00, 139.00, 15, 'n', 'src/assets/imgs/chocolate001.jpg', 'src/assets/imgs/chocolate001_001.jpg,src/assets/imgs/chocolate001_002.jpg,src/assets/imgs/chocolate001_003.jpg,src/assets/imgs/chocolate001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (97, '美满良缘 巧克力礼盒----手工巧克力', 5, NULL, 259.00, 239.00, 19, 'n', 'src/assets/imgs/chocolate002.jpg', 'src/assets/imgs/chocolate002_001.jpg,src/assets/imgs/chocolate002_002.jpg,src/assets/imgs/chocolate002_003.jpg,src/assets/imgs/chocolate002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (98, '玫瑰之恋巧克力礼盒----混合口味巧克力礼盒', 5, NULL, 219.00, 209.00, 0, 'n', 'src/assets/imgs/chocolate003.jpg', 'src/assets/imgs/chocolate003_001.jpg,src/assets/imgs/chocolate003_002.jpg,src/assets/imgs/chocolate003_003.jpg,src/assets/imgs/chocolate003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (99, '棒棒糖形手工纯脂巧克力礼盒----混合口味巧克力礼盒六一儿童节礼物', 5, NULL, 159.00, 139.00, 22, 'n', 'src/assets/imgs/chocolate004.jpg', 'src/assets/imgs/chocolate004_001.jpg,src/assets/imgs/chocolate004_002.jpg,src/assets/imgs/chocolate004_003.jpg,src/assets/imgs/chocolate004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (100, '玫瑰之约手工巧克力礼盒----手工巧克力', 5, NULL, 259.00, 239.00, 2, 'n', 'src/assets/imgs/chocolate005.jpg', 'src/assets/imgs/chocolate005_001.jpg,src/assets/imgs/chocolate005_002.jpg,src/assets/imgs/chocolate005_003.jpg,src/assets/imgs/chocolate005_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (101, '清晨的问候----10枝马蹄莲，5枝白玫瑰', 1, 6, 219.00, 209.00, 7, 'n', 'src/assets/imgs/callalily001.jpg', 'src/assets/imgs/callalily001_001.jpg,src/assets/imgs/callalily001_002.jpg,src/assets/imgs/callalily001_003.jpg,src/assets/imgs/callalily001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (102, '荷兰风情----玫红色郁金香10枝', 1, 3, 259.00, 239.00, 7, 'n', 'src/assets/imgs/tulip001.jpg', 'src/assets/imgs/tulip001_001.jpg,src/assets/imgs/tulip001_002.jpg,src/assets/imgs/tulip001_003.jpg,src/assets/imgs/tulip001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (103, '亭亭玉立----玫红色郁金香19枝', 1, 3, 159.00, 139.00, 22, 'n', 'src/assets/imgs/tulip002.jpg', 'src/assets/imgs/tulip002_001.jpg,src/assets/imgs/tulip002_002.jpg,src/assets/imgs/tulip002_003.jpg,src/assets/imgs/tulip002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (104, '虞美人----粉色郁金香9枝，紫色玫瑰11枝', 1, 3, 259.00, 239.00, 2, 'n', 'src/assets/imgs/tulip003.jpg', 'src/assets/imgs/tulip003_001.jpg,src/assets/imgs/tulip003_002.jpg,src/assets/imgs/tulip003_003.jpg,src/assets/imgs/tulip003_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (105, '爱的芬芳----白色郁金香9枝，粉色郁金香9枝，紫色小菊3枝，高山羊齿叶7枝', 1, 3, 219.00, 209.00, 1, 'n', 'src/assets/imgs/tulip004.jpg', 'src/assets/imgs/tulip004_001.jpg,src/assets/imgs/tulip004_002.jpg,src/assets/imgs/tulip004_003.jpg,src/assets/imgs/tulip004_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (106, '心花怒放----粉香水百合5枝', 1, 4, 159.00, 139.00, 7, 'n', 'src/assets/imgs/pinkgreenishlily001.jpg', 'src/assets/imgs/pinkgreenishlily001_001.jpg,src/assets/imgs/pinkgreenishlily001_002.jpg,src/assets/imgs/pinkgreenishlily001_003.jpg,src/assets/imgs/pinkgreenishlily001_004.jpg', '粉色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (107, '甜蜜物语----黛安娜粉玫瑰33枝，粉色香水百合3枝，搭配适量粉色勿忘我', 1, 4, 259.00, 239.00, 13, 'n', 'src/assets/imgs/pinkgreenishlily002.jpg', 'src/assets/imgs/pinkgreenishlily002_001.jpg,src/assets/imgs/pinkgreenishlily002_002.jpg,src/assets/imgs/pinkgreenishlily002_003.jpg,src/assets/imgs/pinkgreenishlily002_004.jpg', '粉色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (108, '海洋之心----白玫瑰29枝', 1, 4, 299.00, 259.00, 15, 'n', 'src/assets/imgs/whitegreenishlily001.jpg', 'src/assets/imgs/whitegreenishlily001_001.jpg,src/assets/imgs/whitegreenishlily001_002.jpg,src/assets/imgs/whitegreenishlily001_003.jpg,src/assets/imgs/whitegreenishlily001_004.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (109, '爱的祝福----2枝多头白香水百合,19枝粉康乃馨', 1, 4, 259.00, 239.00, 19, 'n', 'src/assets/imgs/whitegreenishlily002.jpg', 'src/assets/imgs/whitegreenishlily002_001.jpg,src/assets/imgs/whitegreenishlily002_002.jpg,src/assets/imgs/whitegreenishlily002_003.jpg,src/assets/imgs/whitegreenishlily002_004.jpg', '白色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (110, '阳光心情----10枝多头黄百合', 1, 4, 299.00, 259.00, 0, 'n', 'src/assets/imgs/yellowgreenishlily001.jpg', 'src/assets/imgs/yellowgreenishlily001_001.jpg,src/assets/imgs/yellowgreenishlily001_002.jpg,src/assets/imgs/yellowgreenishlily001_003.jpg,src/assets/imgs/yellowgreenishlily001_004.jpg', '黄色', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (111, '嫣然----粉色康乃馨19枝，粉色扶郎花5枝，紫色小雏菊3枝，银叶菊10枝', 1, 5, 259.00, 239.00, 22, 'y', 'src/assets/imgs/pinkfulang001.jpg', 'src/assets/imgs/pinkfulang001_001.jpg,src/assets/imgs/pinkfulang001_002.jpg,src/assets/imgs/pinkfulang001_003.jpg,src/assets/imgs/pinkfulang001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (112, '水瓶座守护花----粉色扶郎13枝，银叶菊1扎', 1, 5, 259.00, 239.00, 2, 'n', 'src/assets/imgs/pinkfulang002.jpg', 'src/assets/imgs/pinkfulang002_001.jpg,src/assets/imgs/pinkfulang002_002.jpg,src/assets/imgs/pinkfulang002_003.jpg,src/assets/imgs/pinkfulang002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (113, '清晨的问候----10枝马蹄莲，5枝白玫瑰', 1, 6, 459.00, 439.00, 7, 'n', 'src/assets/imgs/callalily001.jpg', 'src/assets/imgs/callalily001_001.jpg,src/assets/imgs/callalily001_002.jpg,src/assets/imgs/callalily001_003.jpg,src/assets/imgs/callalily001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (114, '向日葵之歌----向日葵6枝', 1, 7, 219.00, 209.00, 7, 'n', 'src/assets/imgs/sunflower001.jpg', 'src/assets/imgs/sunflower001_001.jpg,src/assets/imgs/sunflower001_002.jpg,src/assets/imgs/sunflower001_003.jpg,src/assets/imgs/sunflower001_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (115, '阳光灿烂----向日葵3枝、金枝玉叶黄玫瑰19枝', 1, 7, 159.00, 139.00, 2, 'n', 'src/assets/imgs/sunflower002.jpg', 'src/assets/imgs/sunflower002_001.jpg,src/assets/imgs/sunflower002_002.jpg,src/assets/imgs/sunflower002_003.jpg,src/assets/imgs/sunflower002_004.jpg', '', 100, '2018-02-02 20:38:09');
INSERT INTO `goods` VALUES (116, '向阳的温暖----精品向日葵礼盒：向日葵3枝，绿色康乃馨8枝，白百合2枝', 1, 7, 259.00, 239.00, 7, 'n', 'src/assets/imgs/sunflower003.jpg', 'src/assets/imgs/sunflower003_001.jpg,src/assets/imgs/sunflower003_002.jpg,src/assets/imgs/sunflower003_003.jpg,src/assets/imgs/sunflower003_004.jpg', '', 100, '2018-02-02 20:38:09');

-- ----------------------------
-- Table structure for grade
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gid` int(255) NOT NULL COMMENT '商品id',
  `userid` int(11) NULL DEFAULT NULL COMMENT '用户id',
  `star` int(11) NOT NULL COMMENT '评分几星',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论内容',
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 35 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of grade
-- ----------------------------
INSERT INTO `grade` VALUES (31, 14, 2, 1, '商品太好，差评', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (30, 20, 2, 2, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (29, 27, 2, 5, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (28, 11, 2, 3, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (27, 10, 2, 4, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (26, 18, 2, 3, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (25, 15, 2, 5, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (24, 13, 1, 1, '商品很好，差评', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (23, 23, 1, 2, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (22, 20, 1, 5, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (21, 2, 1, 3, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (20, 12, 1, 4, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (19, 22, 1, 3, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (18, 15, 1, 5, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (32, 12, 2, 5, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (33, 27, 2, 4, '商品很好，基本满意', '2018-02-02 17:47:32');
INSERT INTO `grade` VALUES (34, 14, 3, 1, '商品很好，基本满意', '2018-02-16 18:55:09');

-- ----------------------------
-- Table structure for orderproduct
-- ----------------------------
DROP TABLE IF EXISTS `orderproduct`;
CREATE TABLE `orderproduct`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderid` int(11) NULL DEFAULT NULL,
  `gid` int(11) NULL DEFAULT NULL,
  `qty` int(11) NULL DEFAULT NULL,
  `date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 121 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of orderproduct
-- ----------------------------
INSERT INTO `orderproduct` VALUES (61, 60, 3, 5, '2018-02-08 10:08:56');
INSERT INTO `orderproduct` VALUES (60, 60, 2, 4, '2018-02-08 10:08:56');
INSERT INTO `orderproduct` VALUES (59, 60, 1, 3, '2018-02-08 10:08:56');
INSERT INTO `orderproduct` VALUES (101, 89, 84, 3, '2018-02-09 13:30:12');
INSERT INTO `orderproduct` VALUES (119, 100, 45, 3, '2018-02-16 18:57:39');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL COMMENT '用户id',
  `total` int(11) NULL DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '订单状态（默认为0，未支付）',
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 103 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (79, 1, 439, 0, '2018-02-09 12:56:19');
INSERT INTO `orders` VALUES (78, 1, 439, 0, '2018-02-09 12:55:35');
INSERT INTO `orders` VALUES (77, 1, 439, 0, '2018-02-09 12:30:18');
INSERT INTO `orders` VALUES (97, 1, 417, 1, '2018-02-09 13:42:21');
INSERT INTO `orders` VALUES (96, 1, 417, 0, '2018-02-09 13:41:43');
INSERT INTO `orders` VALUES (95, 1, 417, 0, '2018-02-09 13:40:58');
INSERT INTO `orders` VALUES (94, 1, 239, 1, '2018-02-09 13:38:11');
INSERT INTO `orders` VALUES (93, 1, 209, 0, '2018-02-09 13:32:14');
INSERT INTO `orders` VALUES (92, 1, 209, 0, '2018-02-09 13:32:04');
INSERT INTO `orders` VALUES (91, 1, 209, 0, '2018-02-09 13:30:26');
INSERT INTO `orders` VALUES (90, 1, 209, 0, '2018-02-09 13:30:15');
INSERT INTO `orders` VALUES (89, 1, 209, 0, '2018-02-09 13:30:12');
INSERT INTO `orders` VALUES (88, 1, 417, 1, '2018-02-09 13:29:04');
INSERT INTO `orders` VALUES (87, 1, 439, 1, '2018-02-09 13:25:13');
INSERT INTO `orders` VALUES (86, 1, 439, 1, '2018-02-09 13:22:45');
INSERT INTO `orders` VALUES (85, 1, 439, 0, '2018-02-09 13:21:01');
INSERT INTO `orders` VALUES (84, 1, 439, 0, '2018-02-09 13:18:07');
INSERT INTO `orders` VALUES (83, 1, 439, 0, '2018-02-09 13:16:45');
INSERT INTO `orders` VALUES (82, 1, 439, 0, '2018-02-09 13:06:34');
INSERT INTO `orders` VALUES (81, 1, 439, 0, '2018-02-09 13:03:49');
INSERT INTO `orders` VALUES (80, 1, 439, 0, '2018-02-09 13:02:40');
INSERT INTO `orders` VALUES (76, 1, 439, 0, '2018-02-09 12:27:44');
INSERT INTO `orders` VALUES (75, 1, 439, 0, '2018-02-09 12:25:36');
INSERT INTO `orders` VALUES (74, 1, 439, 0, '2018-02-09 12:25:06');
INSERT INTO `orders` VALUES (73, 1, 139, 0, '2018-02-09 10:24:37');
INSERT INTO `orders` VALUES (72, 1, 878, 0, '2018-02-09 10:24:01');
INSERT INTO `orders` VALUES (71, 1, 417, 0, '2018-02-09 10:23:54');
INSERT INTO `orders` VALUES (70, 1, 717, 0, '2018-02-09 10:23:16');
INSERT INTO `orders` VALUES (69, 1, 1773, 0, '2018-02-09 10:22:20');
INSERT INTO `orders` VALUES (68, 1, 656, 0, '2018-02-09 09:59:02');
INSERT INTO `orders` VALUES (67, 1, 656, 0, '2018-02-09 09:58:38');
INSERT INTO `orders` VALUES (66, 1, 656, 0, '2018-02-09 09:56:43');
INSERT INTO `orders` VALUES (65, 1, 656, 0, '2018-02-09 09:46:51');
INSERT INTO `orders` VALUES (64, 1, 656, 0, '2018-02-09 09:42:30');
INSERT INTO `orders` VALUES (63, 1, 417, 0, '2018-02-09 09:40:48');
INSERT INTO `orders` VALUES (62, 1, 417, 0, '2018-02-09 09:40:46');
INSERT INTO `orders` VALUES (61, 1, 478, 0, '2018-02-09 09:29:09');
INSERT INTO `orders` VALUES (98, 1, 417, 1, '2018-02-09 16:08:08');
INSERT INTO `orders` VALUES (99, 1, 556, 1, '2018-02-09 16:30:14');
INSERT INTO `orders` VALUES (100, 1, 717, 1, '2018-02-16 18:57:41');
INSERT INTO `orders` VALUES (101, 1, 0, 0, '2018-02-24 13:36:36');
INSERT INTO `orders` VALUES (102, 17, 239, 1, '2018-02-24 14:21:55');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id` int(11) NOT NULL,
  `cartid` int(11) NOT NULL COMMENT '购物车id',
  `gid` int(11) NOT NULL COMMENT '商品id',
  `qty` int(11) NOT NULL COMMENT '商品数量',
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 4, 1, 4, '2018-02-02 16:48:03');
INSERT INTO `product` VALUES (2, 4, 4, 2, '2018-02-02 16:48:28');

-- ----------------------------
-- Table structure for smalltype
-- ----------------------------
DROP TABLE IF EXISTS `smalltype`;
CREATE TABLE `smalltype`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bigtype` int(11) NULL DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of smalltype
-- ----------------------------
INSERT INTO `smalltype` VALUES (1, 1, 'src/assets/imgs/redrose004.jpg', '玫瑰', '2018-02-02 19:07:43');
INSERT INTO `smalltype` VALUES (2, 1, 'src/assets/imgs/redcarnation002.jpg', '康乃馨', '2018-02-02 19:07:56');
INSERT INTO `smalltype` VALUES (3, 1, 'src/assets/imgs/tulip002.jpg', '郁金香', '2018-02-02 19:09:28');
INSERT INTO `smalltype` VALUES (4, 1, 'src/assets/imgs/pinkgreenishlily002.jpg', '百合', '2018-02-02 19:09:53');
INSERT INTO `smalltype` VALUES (5, 1, 'src/assets/imgs/pinkfulang001.jpg', '扶郞', '2018-02-02 19:10:13');
INSERT INTO `smalltype` VALUES (6, 1, 'src/assets/imgs/callalily001.jpg', '马蹄莲', '2018-02-02 19:10:35');
INSERT INTO `smalltype` VALUES (7, 1, 'src/assets/imgs/sunflower001.jpg', '向日葵', '2018-02-02 19:10:49');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户邮箱',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户地址',
  `phone` int(30) NULL DEFAULT NULL COMMENT '手机号',
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '昵称',
  `birthday` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生日',
  `date` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `address1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '18177297437', '111111', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-05 19:48:23', NULL);
INSERT INTO `users` VALUES (2, '132111111111', 'undefined', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-07 20:00:23', NULL);
INSERT INTO `users` VALUES (3, '18122222222', '111111', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-05 22:29:30', NULL);
INSERT INTO `users` VALUES (4, '18155555555', '111111', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:26:16', NULL);
INSERT INTO `users` VALUES (5, '1111', '', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:28:43', NULL);
INSERT INTO `users` VALUES (6, '13677869764', '123456', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:37:12', NULL);
INSERT INTO `users` VALUES (7, '13611111111', '333333', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:38:39', NULL);
INSERT INTO `users` VALUES (8, '13677777773', '000000', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:42:41', NULL);
INSERT INTO `users` VALUES (9, '18100000000', '666666', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:43:56', NULL);
INSERT INTO `users` VALUES (10, '18188888888', '101010', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:45:20', NULL);
INSERT INTO `users` VALUES (11, '18144444444', '111111', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:48:06', NULL);
INSERT INTO `users` VALUES (12, '18177777777', '333333', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:49:12', NULL);
INSERT INTO `users` VALUES (13, '18177342736', '111111', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 09:50:02', NULL);
INSERT INTO `users` VALUES (14, '', '', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-06 10:11:35', NULL);
INSERT INTO `users` VALUES (15, '18211111111', '111111', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-09 10:28:04', NULL);
INSERT INTO `users` VALUES (16, '13222222222', '222222', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-23 10:45:15', NULL);
INSERT INTO `users` VALUES (17, '13211111111', '11111111', NULL, NULL, NULL, NULL, NULL, NULL, '2018-02-24 13:37:39', NULL);

SET FOREIGN_KEY_CHECKS = 1;
