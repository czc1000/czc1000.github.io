$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.toc-wrapper').pushpin();
    $('#slide-out li a').click(function(i){
        var $this = $(this);
        $('#slide-out li').removeClass('active');
        var $collapsibleBody = $this.parent().find('.collapsible-body');
        $this.parent().siblings().each(function(i){
            var $this = $(this);
            $this.removeClass('active');
            $this.find('li').removeClass('active');
        });
        $this.parent().addClass('active');
        var $cBody = $this.parent().parent().parent().parent();
        $cBody.addClass('active');

        console.log('$this.parent()');
        console.log($this.parent());
        if ($collapsibleBody.is(":hidden")){
            $collapsibleBody.show();
        }else{
            $collapsibleBody.hide();
        }
    })
});