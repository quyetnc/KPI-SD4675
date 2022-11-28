/*!
 * CDN Upload v1.0
 * Description: Handle javascript functions for CDN upload module
 */

var delayTime = 1000;   //delay 1s

$(function () {
    $(".input-field").keypress(function (e) {
        if (e.which === 13) {
            $("#advancedSearchForm").submit();
        }
    });

    updateEvents();
});

function submitAdvancedSearch(xhr, request) {
    // Extract page number
    var pattern = /Page\[([0-9]+)\]/im;
    var pageNumber = pattern.exec(request.url);
    $("#SearchModel_Page").val(pageNumber[1]);
    $("#advancedSearchForm").submit();
    return false;
}

//Submit form
function submitForm(element) {
    $($(element).data("target")).submit();
}

function handleSuccess() {
    console.log("Updating file list successfully!");
    updateEvents();
    //loadAllXeditable();
    MAF.XEditable.loadAll();
}

function handleFailure() {
    //showXEditableInfo("Updating file list failed!");
    MAF.Utils.showError("Updating file list failed!");
}

//Update events after loading page
function updateEvents() {
    //Handle copy link action
    $(".copy-link").on("click", function () {
        var url = $(this).closest("td").find("a[class~='download-link']").prop("href");
        copyToClipboard(url);
        //showXEditableInfo("Download link is copied to clipboard!");
        MAF.Utils.showInfo("Download link is copied to clipboard!");
    });

    //Handle file download action
    $(".download-file").on("click", function () {
        var url = $(this).closest("td").find("a[class~='download-link']").prop("href");
        window.open(url, '_blank');
    });
}

//Copy to clipboard
function copyToClipboard(text) {
    $("body").append("<input type='text' id='temp' style='position:absolute;opacity:0;'>");
    $("#temp").val(text).select();
    document.execCommand("copy");
    $("#temp").remove();
}

//Init dropzone for upload
function initDropzone(url) {
    $("div#uploadZone").dropzone({
        url: url,
        paramName: "FileUpload",
        dictDefaultMessage: "Drop your file here to upload...",
        autoQueue: false,
        //autoProcessQueue:false,
        //addRemoveLinks: true,
        init: function () {
            var dropZone = this;

            this.on("complete", function (result) {
                showNotification(result.xhr.responseText);
                setTimeout(function () {
                    dropZone.removeAllFiles();
                }, delayTime);
            });
            this.on("success", function (file, result) {
                var msg = typeof result === 'string' ? result : result.message;
                console.log('Upload file done: ' + msg);
            });
            this.on("error", function (file, errorMsg, xhr) {
                if (xhr) {
                    console.log('Error on server side:' + errorMsg);
                } else {
                    console.log('Error when uploading file: ' + errorMsg);
                }
            });
            this.on("addedfile", function (file) {
                //Check if category is selected before adding file
                var categoryId = ($("#CategoryId").val() !== '') ? $("#CategoryId").val() : 0;
                if (categoryId !== 0) {
                    file.accepted = true;
                    dropZone.enqueueFile(file);
                } else {
                    showNotification("Category not selected.");
                    dropZone.removeAllFiles(true);
                }
            });
            this.on("sending", function (file, xhr, formData) {
                //Get form data
                var token = $("#UploadForm input[name='__RequestVerificationToken']").val();
                var categoryId = ($("#CategoryId").val() !== '') ? $("#CategoryId").val() : 0;
                var documentId = $("#DocumentId").val();
                console.log('CategoryId: ' + categoryId);
                console.log('DocumentId: ' + documentId);
               
                //Add form data
                formData.append("CategoryId", categoryId);
                formData.append("DocumentId", documentId);
                formData.append("__RequestVerificationToken", token);
            });
        }
    });
}

function showNotification(result) {
    var status = '';
    var message = '';
    var parentUrl = '';
    var alertClass = '';

    try {
        var jsonResult = JSON.parse(result);
        status = jsonResult.status;
        alertClass = status === 'error' ? 'danger' : status;
        message = jsonResult.message;
        parentUrl = jsonResult.data.parentUrl;
    }
    catch (e) {
        console.log("Response result is not Json");
        status = 'warning';
        alertClass = 'warning';
        message = result;
    }
    //Show result message
    $('#dragalerts').empty();
    $('#dragalerts').append('<div class="alert alert-' + alertClass + '"> <a class="close" data-dismiss="alert">×</a><strong>' +
        status.toUpperCase() + '!</strong> ' + message + '</div>');
    //------------------------------------------
    //Refresh parent page
    if (status === "success" && parentUrl !== '') {
        showLoadingBar();
        setTimeout(function () {
            window.location.href = parentUrl;
        }, delayTime);
    }
}

function bindingApplicationName(categoryEditable, event, valueFromServer) {

    //var cell = $('#'+cellCategoryId);
    var categoryId = valueFromServer.newValue;
    var methodUrl = categoryEditable.data('refreshurl');

    $.ajax({
        url: methodUrl + '?categoryId=' + categoryId,
        context: categoryEditable,
        cache: false,
        data: { categoryId: categoryId },
        success: function (data) {
            $('#' + categoryEditable.data('applicationid')).html(data);
        },
        error: function (error) {
            alert(error.status);
        }
    });
}