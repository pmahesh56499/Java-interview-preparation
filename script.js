const topics=[
 {icon:'☕',title:'Core Java',text:'JVM, JDK, JRE, data types, memory, strings and language fundamentals.',count:'Start here'},
 {icon:'🧩',title:'OOP',text:'Encapsulation, inheritance, polymorphism, abstraction, interfaces and SOLID basics.',count:'Foundation'},
 {icon:'📦',title:'Collections',text:'List, Set, Map, queues, iterators, hashing, generics and complexity.',count:'High frequency'},
 {icon:'⚡',title:'Java 8+',text:'Lambdas, streams, functional interfaces, Optional, method references and Date/Time.',count:'Modern Java'},
 {icon:'🌱',title:'Spring Boot',text:'IoC, dependency injection, REST, annotations, configuration and common interview scenarios.',count:'Backend'},
 {icon:'🗄️',title:'SQL & DB',text:'Joins, grouping, subqueries, indexes, transactions and practical query questions.',count:'Backend'},
 {icon:'🎯',title:'Interview Practice',text:'Rapid-fire questions, scenario-based questions and coding patterns for revision.',count:'Practice'}
];
const grid=document.querySelector('#topicGrid');
topics.forEach(t=>{const el=document.createElement('article');el.className='topic';el.innerHTML=`<div class="topic-icon">${t.icon}</div><h3>${t.title}</h3><p>${t.text}</p><small>${t.count} →</small>`;grid.appendChild(el)});
const answerBtn=document.querySelector('#answerBtn'),answer=document.querySelector('#answer');
answerBtn.addEventListener('click',()=>{const open=answer.classList.toggle('show');answerBtn.textContent=open?'Hide answer':'Show answer'});
const themeBtn=document.querySelector('#themeBtn');
themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');themeBtn.textContent=document.body.classList.contains('dark')?'☀':'◐'});
