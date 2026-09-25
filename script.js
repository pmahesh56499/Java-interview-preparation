const topics=[
 {icon:'☕',title:'Core Java',slug:'core-java',text:'JVM, JDK, JRE, data types, memory, strings and language fundamentals.',count:'Start here'},
 {icon:'🧩',title:'OOP',slug:'oop',text:'Encapsulation, inheritance, polymorphism, abstraction, interfaces and SOLID basics.',count:'Foundation'},
 {icon:'📦',title:'Collections',slug:'collections',text:'List, Set, Map, queues, iterators, hashing, generics and complexity.',count:'High frequency'},
 {icon:'⚡',title:'Java 8+',slug:'java-8',text:'Lambdas, streams, functional interfaces, Optional, method references and Date/Time.',count:'Modern Java'},
 {icon:'🌱',title:'Spring Boot',slug:'spring-boot',text:'IoC, dependency injection, REST, annotations, configuration and common interview scenarios.',count:'Backend'},
 {icon:'🗄️',title:'SQL & DB',slug:'sql-db',text:'Joins, grouping, subqueries, indexes, transactions and practical query questions.',count:'Backend'},
 {icon:'🎯',title:'Interview Practice',slug:'practice',text:'Rapid-fire questions, scenario-based questions and coding patterns for revision.',count:'Practice'}
];
const grid=document.querySelector('#topicGrid');
if(grid){topics.forEach(t=>{const el=document.createElement('a');el.className='topic';el.href=`topic.html?topic=${t.slug}`;el.setAttribute('aria-label',`Open ${t.title}`);el.innerHTML=`<div class="topic-icon">${t.icon}</div><h3>${t.title}</h3><p>${t.text}</p><small>${t.count} →</small>`;grid.appendChild(el)});}
const answerBtn=document.querySelector('#answerBtn'),answer=document.querySelector('#answer');
if(answerBtn&&answer) answerBtn.addEventListener('click',()=>{const open=answer.classList.toggle('show');answerBtn.textContent=open?'Hide answer':'Show answer'});
const themeBtn=document.querySelector('#themeBtn');
if(themeBtn) themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');themeBtn.textContent=document.body.classList.contains('dark')?'☀':'◐';localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');if(themeBtn)themeBtn.textContent='☀';}
