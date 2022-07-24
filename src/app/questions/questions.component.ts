import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  collectionOfData = [
    
    { 'question' : 'Javascript is an _______ language?' , 'options' : ['Object_Oriented', 'Object_Based', 'Procedural', 'None of the above'] },
    { 'question' : 'How can a datatype be declared to be a constant type? ' , 'options' : ['Const', 'Let', 'Var', 'Constant'] },
    { 'question' : ' What keyword is used to check whether a given property is valid or not' , 'options' : ['in', 'is in', 'exist', 'lies'] },
    { 'question' : 'Which of the following is not a Javascript framework? ' , 'options' : ['Node', 'Vue', 'React', 'Cassandra'] },
    { 'question' : ' What keyword is used to declare an asynchronous function in Javascript? ' , 'options' : ['async', 'awate', 'setTimeout', 'None of the above'] },
    {'question': 'Which of the following is not a Java features?' ,'options' : ['Dynamic','Architecture Neutral','Use of pointers','Object-oriented']},
    {'question': 'What is the return type of the hashCode() method in the Object class?' ,'options' : ['Object','int','long',' void']},
    {'question': 'What does the expression float a = 35 / 0 return?' ,'options': ['0','Not a Number','Infinity','Run time exception']},
    {'question': 'Which method of the Class.class is used to determine the name of a class represented by the class object as a String?' ,'options': ['getClass()','intern()','getName()','toString()']},
    {'question': 'In which process, a local variable has the same name as one of the instance variables?' ,'options': ['Serialization','Variable Shadowing','Abstraction','Multi-threading']}
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
