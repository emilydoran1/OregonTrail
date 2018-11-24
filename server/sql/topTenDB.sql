drop database if exists otTopTen;
create database if not exists otTopTen character set utf8;
use otTopTen;

create table topTen (id integer not null primary key auto_increment, playerName
  varchar(50), playerScore Integer, dateEarned varchar(15));

insert into topTen (playerName, playerScore, dateEarned) values
  ('Emily', 300, '2018/11/19');
insert into topTen (playerName, playerScore, dateEarned) values
  ('Jim', 160, '2016/09/10');
insert into topTen (playerName, playerScore, dateEarned) values
  ('Sarah', 77, '2017/05/07');

create user 'ttUser'@'localhost' identified by '12345';
grant all on otTopTen.topTen to 'ttUser'@'localhost';
