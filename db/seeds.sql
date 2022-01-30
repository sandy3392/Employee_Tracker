INSERT INTO department (name)
VALUES
  ('IT'),
  ('Finance'),
  ('Product'),
  ('Legal');

INSERT INTO role (title, salary , department_id)
VALUES
 ('Tech Lead',130000, 1),
 ('Finance Anlayst',140000, 2),
 ('Product Owner',170000, 3),
 ('Legal Director',190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
   ('James', 'Fraser',1, 101 ),
  ('Jack', 'London', 1, 111),
  ('Robert', 'Bruce', 2,121),
  ('Peter', 'Greenaway',3 ,131),
  ('Derek', 'Jarman',4 ,141);
