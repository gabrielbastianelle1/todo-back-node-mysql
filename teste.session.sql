use todo;

drop table users;

create table users(
    userId int unsigned not null,
    username varchar(66) not null,
    senha varchar(66) not null,
    primary key (userId)
);


select * from users;