var DePopUP = (function() { 
    var $window = $(window);
    var $Venster = $('<div class="modaal-venster"/>');
    var $Content = $('<div class="modaal-inhoud"/>');
    var $Kruisje = $('<span class="kruisje">&#10005;</span>');
    
    $Venster.append($Content);
    
    return {
        centreren: function() {
            var links = Math.max($window.outerWidth()-$Content.width(), 0)/2;
            var boven = Math.max($window.outerHeight()-$Content.height(), 0)/2;
            $Content.css({left: links, top: boven});
            
        },
        openen: function(instellingen) {
            $Content.append(instellingen.inhoud, $Kruisje);
            $Content.css({width: instellingen.breedte+'%' || 'auto', height: instellingen.hoogte+'%' || 'auto'})
                .on('click', function(e){
            e.stopPropagation();
            });
            $Venster.appendTo('body')
            .on('click', DePopUP.sluiten);
            DePopUP.centreren();
            $Kruisje.on('click', DePopUP.sluiten);
            $window.on('resize', DePopUP.centreren);
        },
        sluiten: function(){
            $Content.empty()
            .off('click', DePopUP.sluiten);
            $Venster.detach();
            $window.off('resize', DePopUP.centreren);
            
            
        }
    }  
}());
