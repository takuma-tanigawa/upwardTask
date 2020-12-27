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
const ToDoContents = document.querySelector('input[name="contents"]'); 
const isDoneT = document.querySelector('input[name="doneT"]');
const isDoneF = document.querySelector('input[name="doneF"]');
const actionB = document.querySelector('input[name="actionB"]');

var mode = document.getElementById('mode');
var msg = document.getElementById('errorMSG');

var typeNum = null;

    function RegistrationB(num) {
        listNumber.disabled = true;
        dateDeadLine.disabled = true;
        ToDoTitle.disabled = true;
        ToDoContents.disabled = true;
        isDoneT.disabled = true;
        isDoneF.disabled = true;
        actionB.disabled = false;

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
                isDoneT.disabled = false;
                isDoneF.disabled = false;

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