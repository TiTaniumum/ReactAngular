create database clinic;
use clinic;

CREATE TABLE doctors(
	id bigint auto_increment,
    fullname nvarchar(100),
    phone nvarchar(15),
    specialization nvarchar(100),
    constraint pk_doctors_id primary key(id)
);

CREATE TABLE doctor_schedule(
	id bigint auto_increment,
    doctor_id bigint,
    schedule_date date,
    constraint pk_doctor_schedule_id primary key(id),
    constraint fk_doctor_schedule_id_doctors foreign key(doctor_id) references doctors(id) on delete cascade
);

CREATE TABLE doctor_schedule_time(
	id bigint auto_increment,
    doctor_schedule_id bigint,
    schedule_time int,
    patient_name nvarchar(100),
    constraint pk_doctor_schedule_time_id primary key(id),
    constraint fk_doctors_schedule_time_id_doctor_schedule foreign key(doctor_schedule_id) references doctor_schedule(id) on delete cascade
);

drop procedure if exists add_schedule;
delimiter //

create procedure add_schedule (in _doctor_id bigint, in _schedule_date date, in _schedule_time int, in _patient_name nvarchar(100))
begin
	if not exists (select 1 from doctor_schedule where doctor_id = _doctor_id and schedule_date = _schedule_date)
    then 
		insert into doctor_schedule(doctor_id, schedule_date)
        select _doctor_id, _schedule_date;
	end if;
    
    if not exists(
		select 1 
		from doctor_schedule ds 
        inner join doctor_schedule_time dst on ds.id = dst.doctor_schedule_id
        where ds.doctor_id = _doctor_id and ds.schedule_date = _schedule_date and dst.schedule_time = _schedule_time
	)
	then
		insert into doctor_schedule_time(doctor_schedule_id, schedule_time, patient_name)
        select id, _schedule_time, _patient_name
        from doctor_schedule ds
        where ds.doctor_id = _doctor_id and ds.schedule_date = _schedule_date
        limit 1;
	end if;
end //

delimiter ;

drop procedure if exists get_doctor_schedule;
delimiter //

create procedure get_doctor_schedule(in _doctor_id bigint, in _schedule_date date)
begin
	select dst.schedule_time, dst.patient_name
	from doctor_schedule ds
    inner join doctor_schedule_time dst on ds.id = dst.doctor_schedule_id
    where ds.doctor_id = _doctor_id and ds.schedule_date = _schedule_date;
end //

delimiter ;

drop procedure if exists create_update_doctor;
delimiter //

create procedure create_update_doctor(in _id bigint, in _fullname nvarchar(100), in _phone nvarchar(15), in _specialization nvarchar(100))
begin
	if (_id = -1)
    then
		insert into doctors(fullname, phone, specialization)
        select _fullname, _phone, _specialization;
	else
		update doctors 
        set fullname = _fullname,
			phone = _phone,
            specialization = _specialization
		where id = _id;
    end if;
end //

delimiter ;


INSERT INTO doctors(fullname, phone, specialization) values
('Васильев Игорь Шпаненко', '87758342149', 'Врачь общей практики'),
('Мыржакып Дулат Сулейменов','87022345674','Генеколог');

INSERT INTO doctor_schedule(doctor_id, schedule_date) values
(1, '20241223');

INSERT INTO doctor_schedule_time(doctor_schedule_id, schedule_time, patient_name) values
(1, 8, 'Култыкшаш');

call add_schedule (1, '20241223', 9, 'Маржан');
call add_schedule (1, '20241224', 8, 'Малика');

SELECT 
	*
FROM doctors d
LEFT JOIN doctor_schedule ds on d.id = ds.doctor_id
LEFT JOIN doctor_schedule_time dst on ds.id = dst.doctor_schedule_id;

call get_doctor_schedule(1, '20241223');

call create_update_doctor(-1, 'test', 'test', 'test');
call create_update_doctor(3, 'Инекеев Пушка Фигаксов', '87776665544', 'Детский врач');