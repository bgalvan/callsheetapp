CREATE TABLE crew(
	id serial,
	name character varying(50),
	phone char(10),
	email character varying(50)
);

CREATE TABLE calls(
	id serial,
	call character varying(50),
	day char(10),
	hour char(10),
	location character varying(50)
);

CREATE TABLE assignments(
	id serial,
	crew character varying(50),
	call character varying(50)
);

INSERT INTO crew(name, phone, email)
VALUES
('Bobby Galvan', '5128396389', 'bgalvan10@gmail.com'),
('Stacy Ballard', '3435464432', 'stacyhardknock@msn.com');

INSERT INTO calls(call, day, hour, location)
VALUES
('Journey Event', '7/14/18', '8am', 'buena vista park'),
('PGA world tour', '7/21/18', '9am-12pm', 'lyons golf course');

INSERT INTO assignments(name, call)
VALUES
('Bobby Galvan', 'Journey Event'),
('Bobby Galvan', 'PGA world tour'),
('Stacy Ballard', 'PGA world tour');

