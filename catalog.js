
/*var Items=[
    {
        ItemCode: "4ksonyp",
        ItemTittle: "Sony 4k projector",
        ItemPrice: "2500",
        ItemDescription: "Sony 4k Projector",
        ItemCategory: "projector",
        ItemImage: "image/sony 4k.jpg",
    },
    {
        ItemCode: "lg654k",
        ItemTittle: "LG 65 4k TV",
        ItemPrice: "2499",
        ItemDescription: "LG 65 4k TV",
        ItemCategory: "TV",
        ItemImage: "Image/LG 65.jpg",
    },
    {
        ItemCode: "sony651080p",
        ItemTittle: "sony 65 1080p",
        ItemPrice: "3500",
        ItemDescription: "Sony 65 1080p",
        ItemCategory: "TV",
        ItemImage: "Image/Sony 65.jpg",
    },
    {
        ItemCode: "TCL654k",
        ItemTittle: "TCL 65 4k",
        ItemPrice: "3499",
        ItemDescription: "TCL 65",
        ItemCategory: "TV",
        ItemImage: "Image/TCL 65.jpg",
    }
];
*/

var Items = [];

var serverURL = "http://restclass.azurewebsites.net/API/";

function getCatalog() {

    $.ajax({
        url: serverURL + "points",
        type: "GET",
        success: function (resp) {
            console.log("Working", resp)
            for (var y = 0; y < resp.length; y++) {

                if (resp[y].user == "Efren" && resp[y].title != "") {
                    Items.push(resp[y]);
                }
            }

            displayCatalog();
        },
        error: function (errordet) {
            console.log("Error", errordet);
        }
    });

}

function DeleteCatalog(ItemCode) {

    $("#" + ItemCode).remove();

}

function displayCatalog() {
    for (var x = 0; x < Items.length; x++) {
        displayItem(Items[x]);
    }
}

function displayItem(Product) {

    var Layout = `<div class="Item" id="${Product.code}">
    <img src="${Product.image}">
    <h4>${Product.title}</h4>
    <h6>${Product.price}</h6>
    <p>${Product.description}</p>
    <div class="button-div">
    <button class="btn btn-primary mb-2">
        Add to Cart
    </button>
    <button class="btn btn-primary mb-2" id="btnDelete" onclick="DeleteCatalog('${Product.code}');">
        Delete
    </button>
    </div>
</div> `;

    $("#catalog").append(Layout);

}

function init() {
    console.log("Catalog Page");
    getCatalog();
    $("#btnSearch").click(SearchItem);
    $("#txtSearch").keypress(function (e) {
        if (e.keyCode == 13) {
            SearchItem();
        }
    });
}

// $("#btnSearch").on("click",function(){
function SearchItem() {

    var txtSearchLocal = $("#txtSearch").val();
    console.log(Items);

    for (var x = 1; x < Items.length; x++) {
        if (
            Items[x].title.toUpperCase().includes(txtSearchLocal.toUpperCase())
            ||
            Items[x].description.toUpperCase().includes(txtSearchLocal.toUpperCase())
        ) {
            $("#" + Items[x].code).show();
        }
        else {
            $("#" + Items[x].code).hide();
        }


        // if( txtSearchLocal.toUpperCase() != Items[x].tittle.toUpperCase()){
        //     $("#" + Items[x].code).hide();

        // }
        // else{
        //     $("#" + Items[x].code).show();

        // }

        if (txtSearchLocal == "") {
            $("#" + Items[x].code).show();
        }

    }

}

window.onload = init; 