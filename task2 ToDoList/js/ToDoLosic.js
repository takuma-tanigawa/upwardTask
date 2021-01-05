class ToDo {
    constructor(deadLine,title,contents) {
        this.registDate = new Date();
        this.editDate = null;
        this.deadLine = deadLine;
        this.title = title;
        this.contents = contents;
        this.done = false;
    }

    get getRegistDate() { return this.registDate;}
    set setRegistDate(registDate) { this.registDate = registDate;}

    get getEditDate() { return this.editDate;}
    set setEditDate(editDate) { this.editDate = editDate;}

    get getDeadLine() { return this.deadLine;}
    set setDeadLine(deadLine) { this.deadLine = deadLine;}

    get getTitle() { return this.title;}
    set setTitle(title) { this.title = title;}

    get getContents() { return this.contents;}
    set setContents(contents) { this.contents = contents;}

    get getDone() { return this.done;}
    set setDone(done) { this.done = done;}
}

const listNumber = document.querySelector('input[name="number"]'); 
const dateDeadLine = document.querySelector('input[name="deadLine"]'); 
const ToDoTitle = document.querySelector('input[name="title"]'); 
var ToDoContents = document.querySelector('input[name="contents"]'); 
const isDone1 = document.querySelector('input[name="done"]');
const isDone2 = document.querySelector('input[name="done"]:checked');
const actionB = document.querySelector('input[name="actionB"]');

var mode = document.getElementById('mode');
var msg = document.getElementById('errorMSG');

var list = document.getElementById('ToDoList');
var ToDos = [];

var typeNum = null;

    function RegistrationB(num) {
        listNumber.disabled = true;
        dateDeadLine.disabled = true;
        ToDoTitle.disabled = true;
        ToDoContents.disabled = true;
        isDone1.disabled = true;
        isDone2.disabled = true;
        actionB.disabled = false;
        msg.innerHTML = "";

        switch (num) {
            case 1:
                // 登録
                console.log("1");
                typeNum = 1;

                mode.innerHTML = "登録モード";

                dateDeadLine.disabled = false;
                ToDoTitle.disabled = false;
                ToDoContents.disabled = false;

                break;
            case 2:
                // 編集
                console.log("hoge");
                typeNum = 2;

                mode.innerHTML = "編集モード";

                listNumber.disabled = false;
                dateDeadLine.disabled = false;
                ToDoTitle.disabled = false;
                ToDoContents.disabled = false;
                isDone1.disabled = false;
                isDone2.disabled = false;

                break;
            case 3:
                // 削除
                console.log("huga");
                typeNum = 3;

                mode.innerHTML = "削除モード";

                listNumber.disabled = false;
                msg.innerHTML = "削除は取り消せません、注意して実行してください"

                break;

            default:
                break;
        }
    }

    function registToDo() {
        switch (typeNum) {
            case 1:
                var innerList = document.createElement('li');
                var innerDate = dateDeadLine.value;
                var innerTitle = ToDoTitle.value;
                var innerText = ToDoContents.value;
                var innerDone = null;
                var classToDo = new ToDo(innerDate,innerTitle,innerText);
                ToDos.push(classToDo);

                if (classToDo.getDone) {
                    innerDone ="　完了";
                } else {
                    innerDone = "未完了";
                }

                innerList.textContent = innerDone + "　" + innerDate + " 迄に " + innerTitle + "　内容：" + innerText;
                list.appendChild(innerList);

                const saveToDo = classToDo.getRegistDate + "," + classToDo.getEditDate + ","
                                    + classToDo.getDeadLine + "," + classToDo.getTitle + ","
                                        + classToDo.getContents + "," + classToDo.getDone;

                localStorage.setItem("ToDo" + ToDos.length,saveToDo);

                dateDeadLine.value = "";
                ToDoTitle.value = "";
                ToDoContents.value = "";
                break;

            case 2:

                var editNum = null;
                var flg = null;

                if (!listNumber.value == "") {

                    editNum = listNumber.value - 1;
                    console.log(editNum);

                    if (!dateDeadLine.value == "") { ToDos[editNum].setDeadLine = dateDeadLine.value; flg = true;}
                    if (!ToDoTitle.value == "") { ToDos[editNum].setTitle = ToDoTitle.value; flg = true;}
                    if (!ToDoContents.value == "") { ToDos[editNum].setContents = ToDoContents.value; flg = true;}
                    if (isDone1.checked) { ToDos[editNum].setDone = true; flg = true;} else{ ToDos[editNum].setDone = false;}
                    if (isDone2.checked) { flg = true;}

                }

                const editToDo = ToDos[editNum].getRegistDate + "," + ToDos[editNum].getEditDate + ","
                                    + ToDos[editNum].getDeadLine + "," + ToDos[editNum].getTitle + ","
                                        + ToDos[editNum].getContents + "," + ToDos[editNum].getDone;
                localStorage.setItem("ToDo" + listNumber.value, editToDo);

                if (flg) {
                    var tmpDate = new Date();
                    ToDos[editNum].setEditDate = tmpDate;

                    while (list.firstChild) {
                        list.removeChild(list.firstChild);
                    }
    
                    var i = 0;

                    ToDos.forEach(() => {
                        var tmpDone = null;

                        if (ToDos[i].getDone) {
                            tmpDone ="　完了";
                        } else {
                            tmpDone = "未完了";
                        }

                        var valList = tmpDone + "　" + ToDos[i].getDeadLine + " 迄に " + ToDos[i].getTitle + "　内容：" + ToDos[i].getContents;
                        var setList = document.createElement('li');
                        setList.textContent = valList;

                        list.appendChild(setList);
                        i++;
                    });
                }

                dateDeadLine.value = "";
                ToDoTitle.value = "";
                ToDoContents.value = "";

                break;
            case 3:
                var deleteNum = listNumber.value - 1;
                console.log(deleteNum);

                while (list.firstChild) {
                    list.removeChild(list.firstChild);
                }

                if (deleteNum >= 0) {

                    ToDos.splice(deleteNum,1);

                    try {
                        for (let i = 1; i < 100; i++){
                            localStorage.removeItem("ToDo" + i);
                        }
                    } catch (error) {}
    
                    var i = 0;

                    ToDos.forEach(() => {
                        var tmpDone = null;

                        if (ToDos[i].getDone == "true") {
                            tmpDone ="　完了";
                        } else {
                            tmpDone = "未完了";
                        }

                        var valList = tmpDone + "　" + ToDos[i].getDeadLine + " 迄に " + ToDos[i].getTitle + "　内容：" + ToDos[i].getContents;
                        var setList = document.createElement('li');
                        setList.textContent = valList;

                        list.appendChild(setList);

                        const editToDo = ToDos[i].getRegistDate + "," + ToDos[i].getEditDate + ","
                                    + ToDos[i].getDeadLine + "," + ToDos[i].getTitle + ","
                                        ToDos[i].getContents + "," + ToDos[i].getDone;
                        
                        i++;
                        localStorage.setItem("ToDo" + i, editToDo);
                    });               

                }

                dateDeadLine.value = "";
                ToDoTitle.value = "";
                ToDoContents.value = "";
                
                break;
                
            default:
                msg.innerHTML = "エラー、再読み込みして やり直してください";
                break;
        }
        
    }

    function loadToDo() {
        if (list.length > 0) {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
            ToDos.splice(0);
        }

        try {
            for (let i = 1; i < 100; i++) {
                var tmpToDoStr = localStorage.getItem("ToDo" + i);
                var tmpToDos = tmpToDoStr.split(",");
                var tmpToDo = new ToDo(tmpToDos[2],tmpToDos[3],tmpToDos[4]);
                tmpToDo.setRegistDate = tmpToDos[0];
                if (tmpToDos[5] == "true") {
                    tmpToDo.setDone = true;
                } else {
                    tmpToDo.setDone = false;
                }

                if (!tmpToDos[1] == null) {
                    tmpToDo.setEditDate = tmpToDos[1];
                }

                ToDos.push(tmpToDo);
                
            }
        } catch (error) {
            var i = 0;

            ToDos.forEach(() => {
                var tmpDone = null;

                if (ToDos[i].getDone) {
                    tmpDone ="　完了";
                } else {
                    tmpDone = "未完了";
                }
                console.log(tmpDone);

                var valList = tmpDone + "　" + ToDos[i].getDeadLine + " 迄に " + ToDos[i].getTitle + "　内容：" + ToDos[i].getContents;
                var setList = document.createElement('li');
                setList.textContent = valList;

                list.appendChild(setList);
                i++;
            });        
        }
    }