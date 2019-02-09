((d, w) => {
  let square = d.getElementById( "picker" );
  let compArea = d.getElementById( "colourArea" );
  let monoArea = d.getElementById( "monoColourArea" );
  let splitArea = d.getElementById( "splitCompColourArea" );
  let logousArea = d.getElementById( "logousColourArea" );
  let triadArea = d.getElementById( "triadColourArea" );
  let dummySection = d.getElementById( "dummySection" );
  let colourArray = [];
  let clicked;

  // Modal box items
  let modalWindow = d.getElementById( "harmonyModal" );
  let modalShown = false;
  let modColBox1 = d.getElementById( "modColour1" );
  let modColBox2 = d.getElementById( "modColour2" );
  let modColBox3 = d.getElementById( "modColour3" );
  let modColBox4 = d.getElementById( "modColour4" );
  let modColBox5 = d.getElementById( "modColour5" );

  // Colour slider items
  let rangeHue = d.getElementById( "hue" );
  let rangeSat = d.getElementById( "sat" );
  let rangeLight = d.getElementById( "light" );

  let compColour1 = d.getElementById( "compColour1" );
  let compColour2 = d.getElementById( "compColour2" );
  let compColour3 = d.getElementById( "compColour3" );
  let compColour4 = d.getElementById( "compColour4" );

  // ----------------------------------------
  //      Harmony calculations
  // ----------------------------------------
  let calcComps = ( ( hue, sat, light ) => {
    colourArray[0] = `hsl(${hue} ${sat}% ${light-30}%)`;
    colourArray[1] = `hsl(${hue} ${sat-20}% ${light}%)`;
    colourArray[2] = `hsl(${hue} ${sat}% ${light}%)`;
    colourArray[3] = `hsl(${hue+180} ${sat}% ${light-30}%)`;
    colourArray[4] = `hsl(${hue+180} ${sat}% ${light}%)`;

    compColour1.style.backgroundColor = colourArray[0];
    compColour2.style.backgroundColor = colourArray[1];
    compColour3.style.backgroundColor = colourArray[3];
    compColour4.style.backgroundColor = colourArray[4];

    modColBox1.style.backgroundColor = colourArray[0];
    modColBox2.style.backgroundColor = colourArray[1];
    modColBox3.style.backgroundColor = colourArray[2];
    modColBox4.style.backgroundColor = colourArray[3];
    modColBox5.style.backgroundColor = colourArray[4];
  });

  let calcMonos = ( ( hue, sat, light ) => {
    monoColour1.style.backgroundColor = `hsl(${hue} ${sat}% ${light-50}%)`;
    monoColour2.style.backgroundColor = `hsl(${hue} ${sat-30}% ${light}%)`;
    monoColour3.style.backgroundColor = `hsl(${hue} ${sat-30}% ${light-50}%)`;
    monoColour4.style.backgroundColor = `hsl(${hue} ${sat}% ${light-20}%)`;
  });

  let calcLogous = ( ( hue, sat, light ) => {
    logousColour1.style.backgroundColor = `hsl(${hue+20} ${sat-5}% ${light}%)`;
    logousColour2.style.backgroundColor = `hsl(${hue+10} ${sat-5}% ${light-10}%)`;
    logousColour3.style.backgroundColor = `hsl(${hue-30} ${sat-5}% ${light-10}%)`;
    logousColour4.style.backgroundColor = `hsl(${hue-60} ${sat-5}% ${light}%)`;
  });

  let calcTriads = ( ( hue, sat, light ) => {
    triadColour1.style.backgroundColor = `hsl(${hue-120} ${sat}% ${light}%)`;
    triadColour2.style.backgroundColor = `hsl(${hue-120} ${sat}% ${light-20}%)`;
    triadColour3.style.backgroundColor = `hsl(${hue+120} ${sat}% ${light-20}%)`;
    triadColour4.style.backgroundColor = `hsl(${hue+120} ${sat}% ${light}%)`;
  });

  let calcSplits = ( ( hue, sat, light ) => {
    splitCompColour1.style.backgroundColor = `hsl(${hue-150} ${sat}% ${light}%)`;
    splitCompColour2.style.backgroundColor = `hsl(${hue-150} ${sat}% ${light-20}%)`;
    splitCompColour3.style.backgroundColor = `hsl(${hue+150} ${sat}% ${light-20}%)`;
    splitCompColour4.style.backgroundColor = `hsl(${hue+150} ${sat}% ${light}%)`;
  })

  let createHarmonies = ( ( hue, sat, light ) => {
    calcComps( hue, sat, light );
    calcMonos( hue, sat, light );
    calcLogous( hue, sat, light );
    calcTriads( hue, sat, light );
    calcSplits( hue, sat, light );
  });

  let setPicker = ( ( hue, sat, light ) => {
    square.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    compArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    monoArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    splitArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    logousArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    triadArea.style.backgroundColor = `hsl(${hue} ${sat}% ${light}%)`;
    createHarmonies( hue, sat, light );
  } );

  let hue = +rangeHue.value;
  let sat = +rangeSat.value;
  let light = +rangeLight.value;

  setPicker( hue, sat, light );

  rangeHue.addEventListener( "input", () => {
    hue = +rangeHue.value;
    setPicker( hue, sat, light );
  } )

  rangeSat.addEventListener( "input", () => {
    sat = +rangeSat.value;
    setPicker( hue, sat, light );
  } )

  rangeLight.addEventListener( "input", () => {
    light = +rangeLight.value;
    setPicker( hue, sat, light );
  } )

  modalWindow.addEventListener( "click", event => {
    clicked.style.backgroundColor = event.target.style.backgroundColor;
    modalWindow.style.display = "none";
    modalShown = false;
  } );

  dummySection.addEventListener( "click", event => {
    clicked = event.target;
    modalWindow.style.display = "block";
    modalShown = true;
  })

})(document, window);
