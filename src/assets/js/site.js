// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(()=>{
    $("#me-sm")
    .hover(()=>{
        $("#me-container").show()
    },
    ()=>{
        $("#me-container").hide()
    })
    .click(()=>{
        $("#me-container").show()
    });

    $("#me-lg").hover(()=>{
        $("#me-container").show()
    },
    ()=>{
        $("#me-container").hide()
    });
});
