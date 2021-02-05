function init(slider, info){
  /*
    INITIALISATION
  */
  var viewer = new Cesium.Viewer('cesiumContainer', {
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      animation: false,
      timeline: false,
      fullscreenButton: false
  });

    var imageryLayer = viewer.imageryLayers.addImageryProvider(
        new Cesium.IonImageryProvider({ assetId: 4 })
    );

  var inicoord = new Cesium.Cartesian3.fromDegrees(-73.276878, 45.449454, 9900000);
  var iniorient = new Cesium.HeadingPitchRoll.fromDegrees(0, -90, 0);
  var cam_initial = {
  destination : inicoord,
  orientation : {
      heading : iniorient.heading,
      pitch : iniorient.pitch,
      roll : iniorient.roll
    }
  };
  viewer.scene.camera.setView(cam_initial);
  
  
  var chamblycoord = new Cesium.Cartesian3.fromDegrees(-73.276878, 45.449454, 1000);
  var chamblyorient = new Cesium.HeadingPitchRoll.fromDegrees(0, -90, 0);
  var cam_chambly = {
  destination : chamblycoord,
  orientation : {
      heading : chamblyorient.heading,
      pitch : chamblyorient.pitch,
      roll : chamblyorient.roll
    }
  };

    

  /* var entity = viewer.entities.add({
       name : 'data/chambly.gltf',
       position : position,
       orientation : orientation,
       model : {
           uri : 'data/chambly.gltf',
           scale: 1,
           material : Cesium.Color.fromRandom({alpha : 0.5})
       }
   });
   */
   var promise = Cesium.GeoJsonDataSource.load('data/batiment.geojson', {
       fill: Cesium.Color.RED.withAlpha(0.8),
       strokeWidth: 0
   });
   var amerique_FR = viewer.dataSources.add(Cesium.GeoJsonDataSource.load('data/amefran.geojson', {
          fill: Cesium.Color.BLUE.withAlpha(0.5),
          strokeWidth: 0
        }));
        document.getElementById('afficher_annee').innerHTML = 1667;
 
             
   
  /* viewer.trackedEntity = entity;
  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees());
  var model = viewer.scene.primitives.add(Cesium.Model.fromGltf({
      url : 'data/chambly.gltf',
      modelMatrix : modelMatrix,
      scale : 1,
      rotation: Cesium.Math.toRadians(90)
  }));*/


  /*
    INTERACTION
  */

slider.oninput = function() {
 
    var story = this.value;
    info.src  = story + '.html';
    var story_num = parseInt(story);
      viewer.dataSources.removeAll();
      viewer.entities.removeAll();
      switch(story_num) {
          case 1:
            viewer.dataSources.add(amerique_FR);
            document.getElementById('afficher_annee').innerHTML = 1667;
            viewer.scene.camera.setView(cam_initial);
            break;
          case 2:
            // code block
            break;
          case 3:
            // code block
            break;
          case 4:
            // code block
            break;
          case 5:
            // code block
            break;
          case 6:
            // code block
            break;
          case 7:
            // code block
            break;
          case 8:
            var carte1704 = viewer.entities.add({
            name: 'Carte 1704',
            rectangle: {
                coordinates: Cesium.Rectangle.fromDegrees( -73.279342, 45.447503, -73.270614, 45.450625),
                material: 'img/1704.jpg',
                rotation: Cesium.Math.toRadians(-184),
                stRotation: Cesium.Math.toRadians(-184)
                 }
             });
             carte1704.alpha = 0.5;
             var citizensBankPark = viewer.entities.add({
                name : 'Maison du Roi',
                position : Cesium.Cartesian3.fromDegrees(-73.276867, 45.449289),
                point : {
                    pixelSize : 5,
                    color : Cesium.Color.RED,
                    outlineColor : Cesium.Color.WHITE,
                    outlineWidth : 2
                },
                label : {
                    text : 'Maison du Roi',
                    font : '14pt monospace',
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    outlineWidth : 2,
                    verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset : new Cesium.Cartesian2(0, -9)
                }
            });
            viewer.scene.camera.setView(cam_chambly);
            break;
          case 9:
            // code block
            break;
          case 10:
            
             var cartevestige = viewer.entities.add({
            name: 'Vestige',
            rectangle: {
                coordinates: Cesium.Rectangle.fromDegrees(-73.277501, 45.448891, -73.2762654, 45.4498036),
                material: 'data/vestige.jpg'
                 }
             });
            viewer.scene.camera.setView(cam_chambly);
            break;
          case 11:
            promise.then(function(dataSource) {
            viewer.dataSources.add(dataSource);
           
           var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                    var entity = entities[i];
                    if (entity.properties.annee != 1851){
                        entity.show = false; 
                    }else{
                        
                        entity.show = true;
                    }
                    entity.polygon.extrudedHeight = 7;
            }
            }).otherwise(function(error){
                window.alert(error);
            });
            viewer.scene.camera.setView(cam_chambly);
            document.getElementById('afficher_annee').innerHTML = 1851;
            break;
          case 12:
            // code block
            break;
          case 13:
            // code block
            break;
          case 14:
            // code block
            break;
          case 15:
            // code block
            break;
    }
}

  return viewer;
}


function marker1(){
    //TEXTE
            var loader = new THREE.FontLoader();
				loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
					var textGeo = new THREE.TextBufferGeometry( "1", {
						font: font,
						size: 50,
						height: 2,
						curveSegments: 12,
						bevelThickness: 2,
						bevelSize: 1,
						bevelEnabled: true
					} );
					textGeo.computeBoundingBox();
					var textMaterial = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
					var mesh = new THREE.Mesh( textGeo, textMaterial );
					mesh.position.set(-60 ,0,-90);
					scene.add( mesh );
				} );


            //MARKER
            var geometry = new THREE.RingBufferGeometry( 10.3, 8, 6, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
            var mesh = new THREE.Mesh( geometry, material );
            mesh.rotateX(THREE.Math.degToRad(90));
            mesh.position.set(0,0.1,-100);
            mesh.scale.set(2,2,1);
            scene.add( mesh );
				//
}


function marker2(){
    //TEXTE
            var loader = new THREE.FontLoader();
				loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
					var textGeo = new THREE.TextBufferGeometry( "2", {
						font: font,
						size: 50,
						height: 2,
						curveSegments: 12,
						bevelThickness: 2,
						bevelSize: 1,
						bevelEnabled: true
					} );
					textGeo.computeBoundingBox();
					var textMaterial = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
					var mesh = new THREE.Mesh( textGeo, textMaterial );
					mesh.position.set(-150 ,0,-190);
					scene.add( mesh );
				} );


            //MARKER
            var geometry = new THREE.RingBufferGeometry( 10.3, 8, 6, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
            var mesh = new THREE.Mesh( geometry, material );
            mesh.rotateX(THREE.Math.degToRad(90));
            mesh.position.set(-90,0.1,-200);
            mesh.scale.set(2,2,1);
            scene.add( mesh );
				//
}

function marker3(){
    //TEXTE
            var loader = new THREE.FontLoader();
				loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
					var textGeo = new THREE.TextBufferGeometry( "3", {
						font: font,
						size: 50,
						height: 2,
						curveSegments: 4,
						bevelThickness: 1,
						bevelSize: 1,
						bevelEnabled: true
					} );
					textGeo.computeBoundingBox();
					var textMaterial = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
					var mesh = new THREE.Mesh( textGeo, textMaterial );
					mesh.position.set(60 ,0,-290);
					scene.add( mesh );
				} );


            //MARKER
            var geometry = new THREE.RingBufferGeometry( 10.3, 8, 6, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
            var mesh = new THREE.Mesh( geometry, material );
            mesh.rotateX(THREE.Math.degToRad(90));
            mesh.position.set(120,0.1,-300);
            mesh.scale.set(2,2,1);
            scene.add( mesh );
}

function marker4(){
    //TEXTE
            var loader = new THREE.FontLoader();
				loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
					var textGeo = new THREE.TextBufferGeometry( "4", {
						font: font,
						size: 50,
						height: 2,
						curveSegments: 4,
						bevelThickness: 1,
						bevelSize: 1,
						bevelEnabled: true
					} );
					textGeo.computeBoundingBox();
					var textMaterial = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
					var mesh = new THREE.Mesh( textGeo, textMaterial );
					mesh.position.set(140 ,0,-490);
					scene.add( mesh );
				} );


            //MARKER
            var geometry = new THREE.RingBufferGeometry( 10.3, 8, 6, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
            var mesh = new THREE.Mesh( geometry, material );
            mesh.rotateX(THREE.Math.degToRad(90));
            mesh.position.set(200,0.1,-500);
            mesh.scale.set(2,2,1);
            scene.add( mesh );
}

function marker5(){
    //TEXTE
            var loader = new THREE.FontLoader();
				loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
					var textGeo = new THREE.TextBufferGeometry( "5", {
						font: font,
						size: 50,
						height: 2,
						curveSegments: 4,
						bevelThickness: 1,
						bevelSize: 1,
						bevelEnabled: true
					} );
					textGeo.computeBoundingBox();
					var textMaterial = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
					var mesh = new THREE.Mesh( textGeo, textMaterial );
					mesh.position.set(486 ,0,-560);
					mesh.rotateY(THREE.Math.degToRad(-90));
					scene.add( mesh );
				} );


            //MARKER
            var geometry = new THREE.RingBufferGeometry( 10.3, 8, 6, 1 );
            var material = new THREE.MeshBasicMaterial( { color: 0xc63b4b, side: THREE.DoubleSide } );
            var mesh = new THREE.Mesh( geometry, material );
            mesh.rotateX(THREE.Math.degToRad(90));
            mesh.position.set(500,0.1,-500);
            mesh.scale.set(2,2,1);
            scene.add( mesh );
}