import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  collectionOfData = [
    { 'question' : 'Javascript is an _ language?', 'option1' : 'java',  'option2' : 'python',  'option3' : 'javascript', 'option4' : 'pop',  },
    { 'question' : 'How can a datatype be declared to be a constant type?', 'option1' : 'Const',  'option2' : 'Let',  'option3' : 'Var', 'option4' : 'Constant',  },
    { 'question' : 'What keyword is used to check whether a given property is valid or not?', 'option1' : 'in',  'option2' : 'is in',  'option3' : 'exist', 'option4' : 'lies',  },
    { 'question' : 'Which of the following is not a Javascript framework?', 'option1' : 'Node',  'option2' : 'Vue',  'option3' : 'React', 'option4' : 'Cassandra',  },
    { 'question' : 'What keyword is used to declare an asynchronous function in Javascript? ', 'option1' : 'async',  'option2' : 'awate',  'option3' : 'setTimeout', 'option4' : 'None of the above',  },
    { 'question' : 'Which of the following is not a Java features?', 'option1' : 'Dynamic',  'option2' : 'Architecture Neutral',  'option3' : 'Use of pointers', 'option4' : 'Object-oriented',  },
    { 'question' : 'How can a datatype be declared to be a constant type?', 'option1' : 'Const',  'option2' : 'Let',  'option3' : 'Var', 'option4' : 'Constant',  },
    { 'question' : 'What keyword is used to check whether a given property is valid or not?', 'option1' : 'in',  'option2' : 'is in',  'option3' : 'exist', 'option4' : 'lies',  },
    { 'question' : 'Which of the following is not a Javascript framework?', 'option1' : 'Node',  'option2' : 'Vue',  'option3' : 'React', 'option4' : 'Cassandra',  },
    { 'question' : 'What keyword is used to declare an asynchronous function in Javascript? ', 'option1' : 'async',  'option2' : 'awate',  'option3' : 'setTimeout', 'option4' : 'None of the above',  },
    { 'question' : 'Which of the following is not a Java features?', 'option1' : 'Dynamic',  'option2' : 'Architecture Neutral',  'option3' : 'Use of pointers', 'option4' : 'Object-oriented',  },

    
  
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('pragya')
  }
}
