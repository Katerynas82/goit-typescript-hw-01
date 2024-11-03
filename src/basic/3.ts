// Створіть змінну, яка може містити 
// або рядок, або число (union type)? Також
// , оголосіть змінну, яка може містити лише
//  одне з двох можливих рядкових значень:
//   'enable' або 'disable' (literal type).

let value: string | number;
value = "Hello World";
value = 15;

let status: 'enable' | 'disable';
status = 'enable'; 
status = 'disable';