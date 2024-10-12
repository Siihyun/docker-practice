-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS myapp;
USE myapp;

-- 테이블 생성
CREATE TABLE IF NOT EXISTS lists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value VARCHAR(255) NOT NULL
);

-- 기본 데이터 삽입
INSERT INTO lists (value) VALUES ('Initial value');

-- MySQL 인증 모드 변경
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
