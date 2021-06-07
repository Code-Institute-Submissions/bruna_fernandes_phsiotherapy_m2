function initMap(){
            // Map options
            let options = {
                zoom: 3, 
                center: {lat:-20.451371,lng:-54.6396917},
                
            }
            // New map
            let map = new google.maps.Map(document.getElementById("map"), options);
          
            addMarker({lat:-20.451371,lng:-54.6396917});
            
            
            // Add Marker Function
            function addMarker(coords){
            let marker = new google.maps.Marker({
                position:coords,
                map:map,
            })
            }
        }