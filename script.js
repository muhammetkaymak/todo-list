var items = ['item 1','item 2','item 3','item 4'];

var list = document.querySelector('#myList');

items.forEach(function(item){
    createItem(item);
});


list.addEventListener('click',function(item){

    if(item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
        ToogleDeleteButton();
    }
});

document.getElementById('deleteAll').onclick=function(){
    var elements = document.querySelectorAll('.checked');

    elements.forEach(function(item){
        item.style.display='none';
    });
};

function ToogleDeleteButton() {
    var checkList = document.querySelectorAll('.checked');

    if(checkList.length>0){
        document.querySelector('#deleteAll').classList.remove('d-none');
    }else{
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}

document.querySelector('#btnCreate').onclick = function(){
    var item = document.querySelector('#txtItem').value;
    
    if(item === ''){
        alert('Lütfen geçerli bir değer giriniz.');
        return;
    }
    createItem(item);
};

function createItem(item){
    var li = document.createElement('li');
    var t = document.createTextNode(item);

    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function(){
        var li = this.parentElement;
        li.style.display='none';
        li.classList.remove('checked');
    }
}
