var serverURL = "http://localhost:8080/api/";

var Items = [];

function init() {
    console.log("Admin Page");
}

window.onload = init;

class Item {
    constructor(code, title, price, description, category, image) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.user = "Chad";
    }
}

function clearForm() {
    $("#ItemCode").val("");
    $("#ItemTitle").val("");
    $("#ItemPrice").val("");
    $("#ItemDescription").val("");
    $("#ItemCategory").val("");
    $("#ItemImage").val("");
    $("#ItemCode").focus();
}



function Register() {
    console.log("Current Items" + Items.length);

    var code = $("#ItemCode").val();
    var title = $("#ItemTitle").val();
    var price = $("#ItemPrice").val();
    var description = $("#ItemDescription").val();
    var category = $("#ItemCategory").val();
    var image = $("#ItemImage").val();

    if (code == "") {
        $("#ItemCode").focus();

    } 
    else if
    (title == "") {
        $("#ItemTitle").focus();

    } 
    else if
    (price == "") {
        $("#ItemPrice").focus();

    } 
    else if
    (description == "") {
        $("#ItemDescription").focus();

    }  
    else if
    (category == ""){
        $("#ItemCategory").focus();

    } 
    else if
    (image == "") {
        $("#ItemImage").focus();

    }
    else {
        var newItem = new Item(code, title, price, description, category, image);

        Items.push(newItem);
        var jsonString = JSON.stringify(newItem);

        console.log(newItem);
        console.log(jsonString);

        $.ajax({
            url: serverURL + "items",
            type: "POST",
            contentType: "application/json",
            data: jsonString,
            success: function (response) {
                console.log("it works", response);
                clearForm();
                $("#AlertMessage").removeClass("hidden");
    
                setTimeout(function () {
                    $("#AlertMessage").addClass("hidden");
                }, 5000)
    
                clearForm();
            },
            error: function (errorDetails) {
                console.log(errorDetails);
            }
    
        });

        // Items.push(
        //     {
        //         code: code,
        //         title: title,
        //         price: price,
        //         description: description,
        //         category: category,
        //         image: image,
        //     }
        // );

    }

    

}


$("#btnRegister").on("click", function () {
    Register();
});

function solveHW() {
    var data = [
        {
            age: 29,
            name: "james",
            color: "white"
        },
        {
            age: 32,
            name: "Chad",
            color: "Blue"
        },
        {
            age: 33,
            name: "Walter",
            color: "robins egg blue"
        },
        {
            age: 8,
            name: "Emilia",
            color: "Red"
        },
        {
            age: 33,
            name: "Mari",
            color: "Green"
        },
        {
            age: 11,
            name: "22",
            color: "Purple"
        },
        {
            age: 33,
            name: "Chad",
            color: "Green"
        }
    ]
}

//


