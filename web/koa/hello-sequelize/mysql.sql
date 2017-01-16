use test;

CREATE TABLE pets (
    `id` VARCHAR(50) NOT NULL COMMENT '主键ID',
    `name` VARCHAR(100) NOT NULL COMMENT '名称',
    `gender` BOOL NOT NULL COMMENT '性别',
    `birth` VARCHAR(10) NOT NULL COMMENT '出生日期',
    `createdAt` BIGINT NOT NULL COMMENT '创建时间',
    `updatedAt` BIGINT NOT NULL COMMENT '更新时间',
    `version` BIGINT NOT NULL COMMENT '版本号',
    primary key (id)
) ENGINE=INNODB DEFAULT CHARSET UTF8;


create database nodejs;

grant all privileges on nodejs.* to 'www'@'%' identified by 'www';
grant all privileges on test.* to 'www'@'%' identified by 'www';