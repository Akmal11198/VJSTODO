const item=document.getElementById('in');
const addb=document.getElementById('add');
const list=document.getElementById('list');

addb.addEventListener('click',add);
list.addEventListener('click',delorcheck);
document.addEventListener('DOMContentLoaded',load);


function delorcheck(event){
    const source=event.target;
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];

    }
    else {
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    if(source.classList[0]==='deleteb'){
        const p= source.parentElement.remove();
       
        todos.splice(todos.indexOf(source.parentElement.children[0].innerText)+1,1);
        todos.splice(todos.indexOf(source.parentElement.children[0].innerText),1);
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    else if(source.classList[0]==='completeb'){
        source.parentElement.classList.toggle('completed');
        if(source.parentElement.classList.contains('completed'))
            todos[todos.indexOf(source.parentElement.children[0].innerText)+1]=true;
        else
            todos[todos.indexOf(source.parentElement.children[0].innerText)+1]=false;
       localStorage.setItem('todos',JSON.stringify(todos));
    }
}

function save(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];

    }
    else {
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    todos.push(false);
    localStorage.setItem('todos',JSON.stringify(todos));

}
function load(){
    let todos=[];
    if(localStorage.getItem('todos')===null){
        todos=[];

    }
    else {
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    // localStorage.setItem('todos',JSON.stringify(todos));
    var i=0;
    var c="";
    todos.forEach(function(todo){
        console.log(i+":"+todo);
        if((i++)%2==0){
            c=todo;
        }
        else{
            const newdiv=document.createElement('div');
            newdiv.classList.add('todo');
            if(todo==true){
                newdiv.classList.add('completed');
            }
    
            const elmnt=document.createElement('li');
            elmnt.innerText=c;
            elmnt.classList.add('todoitem');
            newdiv.appendChild(elmnt);
    
            const completeb=document.createElement('button');
            completeb.innerHTML='<i class="fa fa-check"></i>';
            completeb.classList.add('completeb')
            newdiv.appendChild(completeb);
    
            const deleteb=document.createElement('button');
            deleteb.innerHTML='<i class="fa fa-trash"></i>';
            deleteb.classList.add('deleteb')
            newdiv.appendChild(deleteb);
    
            list.appendChild(newdiv);
        }
       
    })
}



function add(event){
    event.preventDefault();
    const newdiv=document.createElement('div');
    newdiv.classList.add('todo');

    const elmnt=document.createElement('li');
    var v=item.value;
    elmnt.innerText=v;
    save(v);
    item.value="";
    elmnt.classList.add('todoitem');
    newdiv.appendChild(elmnt);

    const completeb=document.createElement('button');
    completeb.innerHTML='<i class="fa fa-check"></i>';
    completeb.classList.add('completeb')
    newdiv.appendChild(completeb);

    const deleteb=document.createElement('button');
    deleteb.innerHTML='<i class="fa fa-trash"></i>';
    deleteb.classList.add('deleteb')
    newdiv.appendChild(deleteb);

    list.appendChild(newdiv);
    
}