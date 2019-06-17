window.onscroll = function() {ProgressFunc()};
window.onload = function(){init()};

function ProgressFunc(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}

function storyToggle(num){
    var isArrowAlive = $('#arrow-' + num).hasClass('fas fa-arrow-circle-up');
    if(isArrowAlive){
        $('#arrow-' + num).removeClass('fas fa-arrow-circle-up');
        $('#arrow-' + num).addClass('fas fa-arrow-circle-down');
    }else{
        $('#arrow-' + num).removeClass('fas fa-arrow-circle-down');
        $('#arrow-' + num).addClass('fas fa-arrow-circle-up');
    }
    
    $('#story-description' + num).slideToggle(250);
}

function init(){
    for(num = 0; num < 4; num++){
         var isArrowAlive = $('#arrow-' + num).hasClass('fas fa-arrow-circle-down');
        if(isArrowAlive){
            $('#arrow-' + num).removeClass('fas fa-arrow-circle-down');
            $('#arrow-' + num).addClass('fas fa-arrow-circle-up');
        }else{
            $('#arrow-' + num).removeClass('fas fa-arrow-circle-up');
            $('#arrow-' + num).addClass('fas fa-arrow-circle-down');
        }
    }    
}