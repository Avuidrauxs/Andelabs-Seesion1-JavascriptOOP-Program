var Person = require('../lib/app.js');

'use strict'


describe("Test casese to test OOP functionality of the program",function(){

	describe("Lets test objects and see if it is an instance of Person object",function(){

		it("Create person 'employee' and it should be instance of Person",function(){
			var employee = new Person();
			expect(typeof employee).toEqual(typeof {});
			expect(employee instanceof Person).toBeTruthy();
		});

		it("Create a person 'Abena' with parameters and it should be instance of Person",function(){

			var adwoa = new Person('Abena','Oforiwaa',190,25,'Female');
			expect(adwoa.firstname).toBe('Abena');
			expect(adwoa.sex).toBe('Female');

		});

		it("Create a person 'john' with no parameters and it should be instance of Person",function(){

			var john = new Person();
			expect(john.firstname).toEqual('John');
			expect(john.lastname).toEqual('Abanga');

		});

		it("Create a person 'Aba' with  parameters and it should be instance of Person and have properties",function(){

			var john = new Person();
			expect(john.hasOwnProperty('firstname')).toBeTruthy();
			expect(john.hasOwnProperty('lastname')).toBeTruthy();

		});


		it("Person object created age should increase after birth through a method and also excute other methods",function(){

			var audax = new Person('audax','mutumbu');
			audax.getBirthday();
			
			expect(audax.age).toBe(31);
			expect(audax.walk(30)).toEqual('audax is walking 30 steps');

		});

		it("Person walk function should be able to be overriden",function(){

			var man = new Person();
			man.walk = function walk(){
				return "I'm walking by myself";
			}
			//expect(guy instanceof Person).toBeTruthy();
			expect(man.walk()).toEqual("I'm walking by myself");

		});

	});



});