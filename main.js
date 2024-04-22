const start = document.querySelector(".startBtn");


function blocks() {
    //создаем текстовое поле и добавляем его в body
    const preTitle = document.createElement('p');
    preTitle.textContent = "Уровень blocks. Введите число блоков";
    document.body.append(preTitle);
    //создаем поле ввода и добавляем его в body
    const input = document.createElement('input');
    document.body.append(input);
    //когда нажали на enter
    input.addEventListener('keyup', element => {
        if (element.code == "Enter") {
            //прочитали число, которое ввели в input
            let n = input.value;
            preTitle.textContent = "Удалите блок для перехода на сл. уровень";
            //удаляем input
            input.parentNode.removeChild(input);
            //создаем n блоков
            for (let i = 0; i < n; i++) {
                let block = document.createElement('div');
                block.textContent = i;
                block.classList.add("block");
                block.addEventListener('click', () => {
                    block.parentNode.removeChild(block);
                })
                document.body.append(block);
            }
            //достаем из body последний блок
            const lastBlock = document.body.lastChild;
            //добавляем ему класс hiddenBlock 
            lastBlock.classList.add("hiddenBlock");
            //задаем случайную позицию
            lastBlock.style.top = String(parseInt(Math.random() * (500 - 10) + 10)) + "px";
            lastBlock.style.left = String(parseInt(Math.random() * (500 - 10) + 10)) + "px";
            lastBlock.addEventListener('click', () => {
                //получаем все блоки по классу block
                const blocks = document.querySelectorAll(".block");
                //проходимся по всем блокам в цикле и удаляем их
                for (let bl of blocks) {
                    bl.parentNode.removeChild(bl);
                }
                preTitle.parentNode.removeChild(preTitle);
                //переход на сл. уровень через 3 секунды
                setTimeout(random, 3000);
            })
        }

    })
}
function random() {
    //генерируем рандомное число и округляем его до целого
    let randNumber = parseInt(Math.random() * (5 - 1) + 1);
    const preTitle = document.createElement('p');
    const input = document.createElement('input');
    preTitle.textContent = "Уровень random. Угадайте число от 1 до 5";
    document.body.append(preTitle);
    document.body.append(input);
    input.addEventListener('keyup', element => {
        if (element.code == "Enter") {
            let myNumber = input.value;
            input.value = '';
            if (myNumber == randNumber) {
                preTitle.textContent = "Вы угадали";
                setTimeout(() => {
                    input.style.display = "none";
                    preTitle.style.display = "none";
                }, 1000);
                //переходим на новый уровень
                //ПОМЕНЯТЬ ЭТУ СТРОКУ НА ВЫЗОВ СВОЕГО НОВОГО УРОВНЯ
                setTimeout(math, 3000);
            } else {
                preTitle.textContent = "Попробуйте еще раз";
            }
        }
    })
}
start.addEventListener('click', () => {
    //удаляем кнопку
    start.parentNode.removeChild(start);
    const title = document.createElement('h1');
    title.textContent = "Укажите свое имя";
    document.body.append(title);
    const inpName = document.createElement('input');
    const enterName = document.createElement('button');
    enterName.textContent = "Ввод";
    document.body.append(inpName);
    document.body.append(enterName);
    enterName.addEventListener('click', () => {
        let userName = inpName.value;
        enterName.parentNode.removeChild(enterName);
        inpName.parentNode.removeChild(inpName);
        title.textContent = `Добро пожаловать, ${userName} !`;
        //запускаем уровень через 2 секунды
        setTimeout(blocks, 2000)
    })
})
function math(){
    const preTitle = document.createElement('p');
    preTitle.textContent = "Уровень mathematics.Решите пример";
    document.body.append(preTitle);
    const example = document.createElement('h2');
    document.body.append(example);
    example.classList.add("example");
    example.textContent = "10+21=?";
    const input = document.createElement('input');
    document.body.append(input);
    input.addEventListener("keyup",element =>{
        if(element.code =="Enter"){
            let r = input.value;
            if(r == 31){
                preTitle.textContent ="ты молодец,давай ещё раз";
                example.textContent = "10*4-17=?";
                input.addEventListener("keyup",element =>{
                    if(element.code =="Enter"){
                        let q = input.value;
                        if(q == 23){
                            preTitle.textContent = "вы великий математик";
                            setTimeout(() => {
                                input.style.display = "none";
                                preTitle.style.display = "none";
                                example.style.display = "none";
                            }, 1000);
                            setTimeout(find, 3000);
                        }
                    }
                })
            }  
        }
    })
    
}
function find(){
    const preTitle = document.createElement('p');
    preTitle.textContent = "Уровень find.Введите число блоков";
    document.body.append(preTitle);
    const input = document.createElement('input');
    document.body.append(input);
    input.addEventListener('keyup', element =>{
        if(element.code =="Enter"){
            let b = input.value;
            preTitle.textContent ="Найдите верный блок";
            input.style.display ="none";
            for (let t = 0; t <  b; t++){
                let block1 = document.createElement("div");
                block1.classList.add("block1");
                block1.style.top = String(parseInt(Math.random() * (500 - 10) + 10)) + "px";//? 1
                block1.style.left = String(parseInt(Math.random() * (500 - 10) + 10)) + "px"//? 1
                document.body.append(block1);
            }
            const lastBlock1 = document.body.lastChild;
            lastBlock1.addEventListener('click',() =>{
                lastBlock1.style.display ="none"
                setTimeout(() => {
                    input.style.display = "none";
                    preTitle.style.display = "none";
                    block1.style.display = "none"///? 2
                }, 3000);
                 
            })

        }
    })
}