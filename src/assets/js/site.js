// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(()=>{
    $("#me-sm")
    .hover(()=>{
        $("#me-container-dialog").addClass("about-container")
    },
    ()=>{
        $("#me-container-dialog").removeClass("about-container")
    })
    .click(()=>{
        $("#me-container-dialog").addClass("about-container")
    });

    $("#me-lg").hover(()=>{
        $("#me-container-dialog").show()
    },
    ()=>{
        $("#me-container-dialog").hide()
    });
});
