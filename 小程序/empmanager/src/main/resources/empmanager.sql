/*
SQLyog Ultimate v11.27 (32 bit)
MySQL - 5.7.28 : Database - empmanager
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`empmanager` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `empmanager`;

/*Table structure for table `emp` */

DROP TABLE IF EXISTS `emp`;

CREATE TABLE `emp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `salary` decimal(10,0) DEFAULT NULL,
  `dept` varchar(50) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

/*Data for the table `emp` */

insert  into `emp`(`id`,`name`,`age`,`salary`,`dept`,`phone`,`birthday`,`addtime`) values (1,'赵云',21,'100000','管理部','1599999999','2021-06-19','2021-06-02 06:31:24'),(4,'关羽',33,'180000','管理部','18092355639','2021-06-09','2021-05-11 06:31:41'),(5,'张飞',37,'1200000','管理部123','18092355639','2021-06-21','2021-06-23 10:33:00'),(6,'小赵',37,'1200000','管理部123','18092355639','2021-06-09','2021-06-10 11:07:00'),(7,'吕布123',37,'1200000','管理部123','18092355639','2021-06-09','2021-06-02 09:01:00'),(8,'小张',22,'200000','管理','1599998888','2021-06-15','2021-06-23 12:52:00'),(9,'111',NULL,NULL,NULL,NULL,NULL,NULL),(10,'111',NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `videos` */

DROP TABLE IF EXISTS `videos`;

CREATE TABLE `videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL COMMENT '视频名称',
  `size` double DEFAULT NULL COMMENT '视频大小Mb',
  `path` varchar(128) DEFAULT NULL COMMENT '访问路径',
  `real_path` varchar(128) DEFAULT NULL COMMENT '物理路径',
  `createtime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '添加事件',
  `updatetime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '修改事件',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='早教视频表';

/*Data for the table `videos` */

insert  into `videos`(`id`,`name`,`size`,`path`,`real_path`,`createtime`,`updatetime`) values (1,'第二个',176.60645961761475,'/videos/v2.mp4','D:\\videos\\v2.mp4','2021-06-21 09:45:07','2021-06-21 09:45:07'),(2,'第一个',0,'/videos/v1.mp4','D:\\videos\\v1.mp4','2021-06-21 10:05:51','2021-06-21 10:05:51'),(3,'第三个',0,'/videos/v3.mp4','D:\\videos\\v3.mp4','2021-06-21 10:09:38','2021-06-21 10:09:38');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
