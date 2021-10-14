(function(window) {
	'use strict';
	window.opposite = {"N":"S","S":"N","W":"E","E":"W","Z":"Z"};
	window.className = {"N":"north","S":"south","W":"west","E":"east","Z":"whirlpool"};
	window.entranceItemToItem = {};

	window.initializeOverworldGraph = function()
	{
		createDoubleOverworldScreen(0x00,"Lost Woods","Skull Woods",true,["Southwest","South","Northeast","Southeast","Northwest","North","Divider"],"Southeast");
		createDoubleOverworldScreen(0x02,"Lumberjacks","Dark Lumberjacks",false,null,"Main");
		createDoubleOverworldScreen(0x03,"West Death Mountain","West Dark Death Mountain",true,["Top","Spectacle Rock","Bottom"],"Bottom");
		createDoubleOverworldScreen(0x05,"East Death Mountain","East Dark Death Mountain",true,["Top Main","Bottom Main","Top West","Bottom West","Island","Spiral","Mimic","Laser Bridge","Blocked Cave"],"Bottom Main");
		createDoubleOverworldScreen(0x07,"Turtle Rock Pegs","Turtle Rock",false,["Main","Portal"],"Main");
		createDoubleOverworldScreen(0x0A,"Death Mountain Entry","Bumper",false,["Main","Ledge","Bottom Cave"],"Main");
		createDoubleOverworldScreen(0x0F,"Waterfall","Catfish",false,["Main","Waterfall"],"Main");
		createDoubleOverworldScreen(0x10,"Kakariko Portal","Village Portal",false,["West","North","South","Portal"],"West");
		createDoubleOverworldScreen(0x11,"Kakariko Fortune Teller","Village Fortune Teller",false,null,"Main");
		createDoubleOverworldScreen(0x12,"Pond","Dark Pond",false,null,"Main");
		createDoubleOverworldScreen(0x13,"Sanctuary","Dark Chapel",false,["Main","Rocks"],"Main");
		createDoubleOverworldScreen(0x14,"Graveyard","Dark Graveyard",false,["Main","Ledge","North","King Tomb"],"Main");
		createDoubleOverworldScreen(0x15,"River Bend","Dark River Bend",false,["West","East","River"],"East");
		createDoubleOverworldScreen(0x16,"Potion Shop","Dark Potion Shop",false,["West","East","River"],"West");
		createDoubleOverworldScreen(0x17,"Zora Warning","Cafish Warning",false,["West","East","River"],"East");
		createDoubleOverworldScreen(0x18,"Kakariko","Village of Outcasts",true,["Main","Blocked House","Southwest"],"Main");
		createDoubleOverworldScreen(0x1A,"Forgotten Forest","Curiosity Shop",false,null,"Main");
		createDoubleOverworldScreen(0x1B,"Hyrule Castle","Pyramid",true,["Main","East","South","Southwest","Courtyard","Balcony","Pyramid Exit","Passage Exit"],"Courtyard");
		createDoubleOverworldScreen(0x1D,"Wooden Bridge","Broken Bridge",false,["West","Northeast","Southeast","River"],"Northeast");
		createDoubleOverworldScreen(0x1E,"Eastern Palace","Palace of Darkness",true,null,"Main");
		createDoubleOverworldScreen(0x22,"Blacksmiths","Hammer Pegs",false,["West","Main","Northeast"],"Main");
		createDoubleOverworldScreen(0x25,"Rock Field","Dark Rock Field",false,null,"Main");
		createDoubleOverworldScreen(0x28,"Maze Race","Digging Game",false,["Top","Bottom","Minigame"],"Bottom");
		createDoubleOverworldScreen(0x29,"Library","Archery Game",false,["Top","Bottom","Frog"],"Top");
		createDoubleOverworldScreen(0x2A,"Haunted Grove","Stumpy",false,["Main","Southwest"],"Main");
		createDoubleOverworldScreen(0x2B,"Central Bonk Rocks","Dark Bonk Rocks",false,null,"Main");
		createDoubleOverworldScreen(0x2C,"Link's House","Bomb Shop",false,null,"Main");
		createDoubleOverworldScreen(0x2D,"Hobo's Bridge","Hammer Bridge",false,["North","South","River"],"South");
		createDoubleOverworldScreen(0x2E,"Tree Line","Dark Tree Line",false,["Main","River"],"Main");
		createDoubleOverworldScreen(0x2F,"Eastern Portal","Darkness Portal",false,["Main","Portal"],"Main");
		createDoubleOverworldScreen(0x30,"Desert","Misery Mire",true,["Main","Front","Ledge","Back","Balcony","Tablet","Northeast","Portal"],"Portal");
		createDoubleOverworldScreen(0x32,"Cave 45","Bush Circle 45",false,["Main","North","Ledge"],"Main");
		createDoubleOverworldScreen(0x33,"C Whirlpool","Dark C",false,["West","East","Portal"],"West");
		createDoubleOverworldScreen(0x34,"Hype Fairy","Hype Cave",false,null,"Main");
		createDoubleOverworldScreen(0x35,"Lake Hylia","Dark Lake Hylia",true,["Northwest","Northeast","Southwest","Southeast","Lake","Central Island","Small Island"],"Southeast");
		createDoubleOverworldScreen(0x37,"Ice Cave","Dark Ice Cave",false,null,"Main");
		createDoubleOverworldScreen(0x3A,"Desert Thief","Dark Desert Thief",false,["Main","Southeast","Ledge"],"Main");
		createDoubleOverworldScreen(0x3B,"Dam","Swamp Palace",false,null,"Main");
		createDoubleOverworldScreen(0x3C,"South Pass","Dark South Pass",false,null,"Main");
		createDoubleOverworldScreen(0x3F,"Octoballoon","Bomber Corner",false,["Main","Waterfall"],"Main");
		let specialScreen = createOverworldScreen(0x80,"Pedestal",false,["Main"],"Main");
		specialScreen.x = 32;
		specialScreen.y = 0;
		specialScreen.file = "pedestal";
		specialScreen = createOverworldScreen(0x81,"Zora's Domain",false,["Main","Southeast"],"Main");
		specialScreen.x = 384;
		specialScreen.y = 32;
		specialScreen.file = "zora";
		specialScreen = createOverworldScreen(0x82,"Hobo",false,["Main"],"Main");
		specialScreen.x = 384;
		specialScreen.y = 224;
		specialScreen.file = "hobo";
		screenLinksLayout.push([0x00,0x2D,0x80,0x82]);
		screenLinksEntrance.push([0x05,0x07]);
		screenLinksLayout.push([0x0F,0x35,0x81]);
		screenLinksLayout.push([0x12,0x15,0x33,0x3F]);
		screenLinksEntrance.push([0x13,0x14,0x1B]);
		screenLinksLayout.push([0x1A,0x1B]);
		screenLinksLayout.push([0x28,0x29]);
		screenLinksEntrance.push([0x28,0x29]);
		screenLinksLayout.push([0x30,0x3A]);
		screenLinksGlobal.push([0x80,0x82]);
		let specialEdge = createOverworldEdge(0x00,"Northwest","N",1,1,false,.3);
		specialEdge.y = specialEdge.y2 = .35;
		createDoubleOverworldEdge(0x00,"Northeast","E",1,1,false,.3);
		createDoubleOverworldEdge(0x00,"Southwest","S",0,2,false,.2);
		createDoubleOverworldEdge(0x00,"South","S",1,2,false,.75);
		createDoubleOverworldEdge(0x00,"Southeast","S",2,1,false,1.8);
		createDoubleOverworldEdge(0x02,"Main","W",1,1,false,.3);
		createDoubleOverworldEdge(0x02,"Main","S",1,1,false,.4);
		createDoubleOverworldEdge(0x03,"Top","E",0,1,false,.25);
		createDoubleOverworldEdge(0x03,"Bottom","E",2,1,false,1.65);
		createDoubleOverworldEdge(0x05,"Top West","W",0,1,false,.25);
		createDoubleOverworldEdge(0x05,"Bottom West","W",2,1,false,1.65);
		createDoubleOverworldEdge(0x05,"Top Main","E",1,1,false,.25);
		createDoubleOverworldEdge(0x07,"Main","W",1,1,false,.25);
		createDoubleOverworldEdge(0x0A,"Main","N",1,1,false,.4);
		createDoubleOverworldEdge(0x0A,"Main","S",1,1,false,.55);
		createOverworldEdge(0x0F,"Main","N",1,1,false,.65);
		createDoubleOverworldEdge(0x0F,"Main","S",1,1,false,.75);
		createWhirlpool(0x0F,"Main",.25,.6);
		createDoubleOverworldEdge(0x10,"West","N",0,2,false,.2);
		createDoubleOverworldEdge(0x10,"North","N",2,2,false,.75);
		createDoubleOverworldEdge(0x10,"West","S",0,2,false,.3);
		createDoubleOverworldEdge(0x10,"South","S",2,2,false,.65);
		createDoubleOverworldEdge(0x11,"Main","N",1,1,false,.8);
		createDoubleOverworldEdge(0x11,"Main","E",0,2,false,.3);
		createDoubleOverworldEdge(0x11,"Main","E",2,2,false,.75);
		createDoubleOverworldEdge(0x11,"Main","S",1,1,false,.55);
		createDoubleOverworldEdge(0x12,"Main","N",1,1,false,.55);
		createDoubleOverworldEdge(0x12,"Main","W",0,2,false,.3);
		createDoubleOverworldEdge(0x12,"Main","W",2,2,false,.75);
		createDoubleOverworldEdge(0x12,"Main","E",0,2,false,.4);
		createDoubleOverworldEdge(0x12,"Main","E",2,2,false,.75);
		createDoubleOverworldEdge(0x12,"Main","S",0,2,false,.3);
		createDoubleOverworldEdge(0x12,"Main","S",2,2,false,.6);
		createWhirlpool(0x12,"Main",.5,.5);
		createDoubleOverworldEdge(0x13,"Rocks","W",0,2,false,.4);
		createDoubleOverworldEdge(0x13,"Main","W",2,2,false,.75);
		createDoubleOverworldEdge(0x13,"Main","E",1,1,false,.55);
		createDoubleOverworldEdge(0x14,"Main","W",1,1,false,.55);
		createDoubleOverworldEdge(0x14,"Main","E",1,1,false,.55);
		createDoubleOverworldEdge(0x15,"West","W",1,1,false,.55);
		createDoubleOverworldEdge(0x15,"River","E",0,1,true,.25);
		createDoubleOverworldEdge(0x15,"East","E",1,2,false,.45);
		createDoubleOverworldEdge(0x15,"East","E",2,2,false,.7);
		createDoubleOverworldEdge(0x15,"West","S",0,2,false,.3);
		createDoubleOverworldEdge(0x15,"River","S",1,1,true,.6);
		createDoubleOverworldEdge(0x15,"East","S",2,2,false,.8);
		createWhirlpool(0x15,"River",.55,.3);
		createWhirlpool(0x55,"River",.55,.3);
		createDoubleOverworldEdge(0x16,"River","W",0,1,true,.25);
		createDoubleOverworldEdge(0x16,"West","W",1,2,false,.45);
		createDoubleOverworldEdge(0x16,"West","W",2,2,false,.7);
		createDoubleOverworldEdge(0x16,"River","E",0,1,true,.15);
		createDoubleOverworldEdge(0x16,"East","E",2,1,false,.35);
		createDoubleOverworldEdge(0x17,"East","N",1,1,false,.75);
		createDoubleOverworldEdge(0x17,"River","W",0,1,true,.15);
		createDoubleOverworldEdge(0x17,"West","W",2,1,false,.35);
		createDoubleOverworldEdge(0x18,"Main","N",0,2,false,.3);
		createDoubleOverworldEdge(0x18,"Main","N",1,2,false,.65);
		createDoubleOverworldEdge(0x18,"Main","N",2,1,false,1.55);
		createDoubleOverworldEdge(0x18,"Main","E",1,1,false,1.6);
		createDoubleOverworldEdge(0x18,"Main","S",1,1,false,1.7);
		createDoubleOverworldEdge(0x1A,"Main","N",0,2,false,.3);
		createDoubleOverworldEdge(0x1A,"Main","N",2,2,false,.6);
		createOverworldEdge(0x1A,"Main","E",1,1,false,.6);
		createOverworldEdge(0x1B,"Main","W",1,1,false,.6);
		createDoubleOverworldEdge(0x1B,"East","E",1,1,false,1.3);
		createDoubleOverworldEdge(0x1B,"Southwest","S",0,1,false,.25);
		createDoubleOverworldEdge(0x1B,"South","S",2,1,false,1.6);
		createDoubleOverworldEdge(0x1D,"West","N",0,2,false,.3);
		createDoubleOverworldEdge(0x1D,"River","N",1,1,true,.6);
		createDoubleOverworldEdge(0x1D,"Northeast","N",2,2,false,.8);
		createDoubleOverworldEdge(0x1D,"Southeast","S",1,1,false,.35);
		createDoubleOverworldEdge(0x1E,"Main","S",0,1,false,.25);
		createDoubleOverworldEdge(0x1E,"Main","S",2,1,false,1.75);
		createDoubleOverworldEdge(0x22,"West","W",1,1,false,.6);
		createDoubleOverworldEdge(0x25,"Main","N",1,1,false,.35);
		createDoubleOverworldEdge(0x25,"Main","W",1,1,false,.3);
		createDoubleOverworldEdge(0x25,"Main","S",1,1,false,.45);
		let edge1 = createOverworldEdge(0x28,"Bottom","E",1,1,false,.9);
		createOverworldEdge(0x68,"Top","E",0,2,false,.7);
		let edge2 = createOverworldEdge(0x68,"Bottom","E",2,2,false,.9);
		edge1.parallel = edge2;
		edge2.parallel = edge1;
		createDoubleOverworldEdge(0x29,"Top","N",1,1,false,.7);
		edge1 = createOverworldEdge(0x29,"Bottom","W",1,1,false,.9);
		createOverworldEdge(0x69,"Bottom","W",0,2,false,.7);
		edge2 = createOverworldEdge(0x69,"Bottom","W",2,2,false,.9);
		edge1.parallel = edge2;
		edge2.parallel = edge1;
		createDoubleOverworldEdge(0x29,"Bottom","E",1,1,false,.7);
		createDoubleOverworldEdge(0x2A,"Southwest","W",1,1,false,.7);
		createDoubleOverworldEdge(0x2A,"Southwest","S",0,2,false,.15);
		createDoubleOverworldEdge(0x2A,"Main","S",2,2,false,.45);
		createDoubleOverworldEdge(0x2B,"Main","N",1,1,false,.25);
		createDoubleOverworldEdge(0x2B,"Main","E",0,3,false,.35);
		createDoubleOverworldEdge(0x2B,"Main","E",1,3,false,.6);
		createDoubleOverworldEdge(0x2B,"Main","E",2,3,false,.8);
		createDoubleOverworldEdge(0x2B,"Main","S",1,1,false,.3);
		createDoubleOverworldEdge(0x2C,"Main","N",1,1,false,.6);
		createDoubleOverworldEdge(0x2C,"Main","W",0,3,false,.35);
		createDoubleOverworldEdge(0x2C,"Main","W",1,3,false,.6);
		createDoubleOverworldEdge(0x2C,"Main","W",2,3,false,.8);
		createDoubleOverworldEdge(0x2C,"Main","S",1,1,false,.45);
		createDoubleOverworldEdge(0x2C,"Main","E",1,1,false,.8);
		createDoubleOverworldEdge(0x2D,"North","N",1,1,false,.45);
		specialEdge = createOverworldEdge(0x2D,"River","W",0,1,true,.6);
		specialEdge.x = specialEdge.x2 = .65;
		edge1 = createOverworldEdge(0x2D,"South","W",2,1,false,.8);
		edge2 = createOverworldEdge(0x6D,"South","W",1,1,false,.8);
		edge1.parallel = edge2;
		edge2.parallel = edge1;
		createDoubleOverworldEdge(0x2D,"North","E",0,1,false,.3);
		createDoubleOverworldEdge(0x2D,"River","E",2,1,true,.65);
		createDoubleOverworldEdge(0x2D,"South","S",1,1,false,.45);
		createDoubleOverworldEdge(0x2E,"Main","N",1,1,false,.25);
		createDoubleOverworldEdge(0x2E,"Main","W",0,1,false,.3);
		createDoubleOverworldEdge(0x2E,"River","W",2,1,true,.65);
		createDoubleOverworldEdge(0x2E,"River","S",0,1,true,.6);
		createDoubleOverworldEdge(0x2E,"Main","S",2,1,false,.85);
		createDoubleOverworldEdge(0x2F,"Main","N",1,1,false,.75);
		createOverworldEdge(0x30,"Tablet","E",0,2,false,1.5);
		createOverworldEdge(0x30,"Main","E",2,2,false,1.8);
		createDoubleOverworldEdge(0x32,"Main","N",0,2,false,.15);
		createDoubleOverworldEdge(0x32,"North","N",2,2,false,.45);
		createDoubleOverworldEdge(0x32,"Main","E",1,1,false,.5);
		createDoubleOverworldEdge(0x33,"West","N",1,1,false,.3);
		createDoubleOverworldEdge(0x33,"West","W",1,1,false,.5);
		createDoubleOverworldEdge(0x33,"East","E",0,2,false,.3);
		createDoubleOverworldEdge(0x33,"East","E",1,1,true,.55);
		createDoubleOverworldEdge(0x33,"East","E",2,2,false,.8);
		createDoubleOverworldEdge(0x33,"East","S",1,1,false,.6);
		createWhirlpool(0x33,"East",.65,.6);
		createDoubleOverworldEdge(0x34,"Main","N",1,1,false,.45);
		createDoubleOverworldEdge(0x34,"Main","W",0,2,false,.3);
		createDoubleOverworldEdge(0x34,"Main","W",1,1,true,.55);
		createDoubleOverworldEdge(0x34,"Main","W",2,2,false,.8);
		createDoubleOverworldEdge(0x34,"Main","S",1,1,false,.5);
		createDoubleOverworldEdge(0x35,"Northwest","N",0,1,false,.45);
		createDoubleOverworldEdge(0x35,"Lake","N",1,1,true,1.6);
		createDoubleOverworldEdge(0x35,"Northeast","N",2,1,false,1.85);
		createDoubleOverworldEdge(0x35,"Southwest","W",1,1,false,1.8);
		createDoubleOverworldEdge(0x35,"Lake","E",0,1,true,1.6);
		createDoubleOverworldEdge(0x35,"Southeast","E",2,1,false,1.85);
		createWhirlpool(0x35,"Lake",1.3,1.35);
		createDoubleOverworldEdge(0x37,"Main","S",0,1,true,.25);
		createDoubleOverworldEdge(0x37,"Main","S",2,1,false,.65);
		createOverworldEdge(0x3A,"Ledge","W",0,2,false,.5);
		createOverworldEdge(0x3A,"Main","W",2,2,false,.8);
		createDoubleOverworldEdge(0x3A,"Main","E",0,2,false,.6);
		createDoubleOverworldEdge(0x3A,"Southeast","E",2,2,false,.85);
		createDoubleOverworldEdge(0x3B,"Main","N",1,1,false,.6);
		createDoubleOverworldEdge(0x3B,"Main","W",0,2,false,.6);
		createDoubleOverworldEdge(0x3B,"Main","W",2,2,false,.85);
		createDoubleOverworldEdge(0x3B,"Main","E",1,1,false,.5);
		createDoubleOverworldEdge(0x3C,"Main","N",1,1,false,.5);
		createDoubleOverworldEdge(0x3C,"Main","W",1,1,false,.5);
		createDoubleOverworldEdge(0x3C,"Main","E",1,1,false,.8);
		createDoubleOverworldEdge(0x3F,"Waterfall","N",0,1,true,.25);
		createDoubleOverworldEdge(0x3F,"Main","N",2,1,false,.65);
		createDoubleOverworldEdge(0x3F,"Main","W",0,1,true,.6);
		createDoubleOverworldEdge(0x3F,"Main","W",2,1,false,.85);
		createWhirlpool(0x3F,"Main",.25,.4);
		createWhirlpool(0x7F,"Main",.25,.4);
		createOverworldEdge(0x80,"Main","S",1,1,false,.45);
		createOverworldEdge(0x81,"Main","S",1,1,false,.5);
		createOverworldEdge(0x82,"Main","E",1,1,true,.6);
		setVanillaTransition(0x00,"N1",0x80,"S1");
		setVanillaTransition(0x00,"E1",0x02,"W1");
		setVanillaTransition(0x00,"S0",0x10,"N0");
		setVanillaTransition(0x00,"S1",0x10,"N2");
		setVanillaTransition(0x00,"S2",0x11,"N1");
		setVanillaTransition(0x02,"S1",0x0A,"N1");
		setVanillaTransition(0x03,"E0",0x05,"W0");
		setVanillaTransition(0x03,"E2",0x05,"W2");
		setVanillaTransition(0x05,"E1",0x07,"W1");
		setVanillaTransition(0x0A,"S1",0x12,"N1");
		setVanillaTransition(0x0F,"N1",0x81,"S1");
		setVanillaTransition(0x0F,"S1",0x17,"N1");
		setVanillaTransition(0x0F,"ZW",0x35,"ZW");
		setVanillaTransition(0x10,"S0",0x18,"N0");
		setVanillaTransition(0x10,"S2",0x18,"N1");
		setVanillaTransition(0x11,"E0",0x12,"W0");
		setVanillaTransition(0x11,"E2",0x12,"W2");
		setVanillaTransition(0x11,"S1",0x18,"N2");
		setVanillaTransition(0x12,"E0",0x13,"W0");
		setVanillaTransition(0x12,"E2",0x13,"W2");
		setVanillaTransition(0x12,"S0",0x1A,"N0");
		setVanillaTransition(0x12,"S2",0x1A,"N2");
		setVanillaTransition(0x12,"ZW",0x3F,"ZW");
		setVanillaTransition(0x13,"E1",0x14,"W1");
		setVanillaTransition(0x14,"E1",0x15,"W1");
		setVanillaTransition(0x15,"E0",0x16,"W0");
		setVanillaTransition(0x15,"E1",0x16,"W1");
		setVanillaTransition(0x15,"E2",0x16,"W2");
		setVanillaTransition(0x15,"S0",0x1D,"N0");
		setVanillaTransition(0x15,"S1",0x1D,"N1");
		setVanillaTransition(0x15,"S2",0x1D,"N2");
		setVanillaTransition(0x15,"ZW",0x33,"ZW");
		setVanillaTransition(0x55,"ZW",0x7F,"ZW");
		setVanillaTransition(0x16,"E0",0x17,"W0");
		setVanillaTransition(0x16,"E2",0x17,"W2");
		setVanillaTransition(0x18,"E1",0x22,"W1");
		setVanillaTransition(0x18,"S1",0x29,"N1");
		setVanillaTransition(0x1A,"E1",0x1B,"W1");
		setVanillaTransition(0x1B,"E1",0x25,"W1");
		setVanillaTransition(0x1B,"S0",0x2B,"N1");
		setVanillaTransition(0x1B,"S2",0x2C,"N1");
		setVanillaTransition(0x1D,"S1",0x25,"N1");
		setVanillaTransition(0x1E,"S0",0x2E,"N1");
		setVanillaTransition(0x1E,"S2",0x2F,"N1");
		setVanillaTransition(0x25,"S1",0x2D,"N1");
		setVanillaTransition(0x68,"E0",0x69,"W0");
		setVanillaTransition(0x28,"E1",0x29,"W1");
		setVanillaTransition(0x29,"E1",0x2A,"W1");
		setVanillaTransition(0x2A,"S0",0x32,"N0");
		setVanillaTransition(0x2A,"S2",0x32,"N2");
		setVanillaTransition(0x2B,"E0",0x2C,"W0");
		setVanillaTransition(0x2B,"E1",0x2C,"W1");
		setVanillaTransition(0x2B,"E2",0x2C,"W2");
		setVanillaTransition(0x2B,"S1",0x33,"N1");
		setVanillaTransition(0x2C,"E1",0x2D,"W2");
		setVanillaTransition(0x2C,"S1",0x34,"N1");
		setVanillaTransition(0x2D,"W0",0x82,"E1");
		setVanillaTransition(0x2D,"E0",0x2E,"W0");
		setVanillaTransition(0x2D,"E2",0x2E,"W2");
		setVanillaTransition(0x2D,"S1",0x35,"N0");
		setVanillaTransition(0x2E,"S0",0x35,"N1");
		setVanillaTransition(0x2E,"S2",0x35,"N2");
		setVanillaTransition(0x30,"E0",0x3A,"W0");
		setVanillaTransition(0x30,"E2",0x3A,"W2");
		setVanillaTransition(0x32,"E1",0x33,"W1");
		setVanillaTransition(0x33,"E0",0x34,"W0");
		setVanillaTransition(0x33,"E1",0x34,"W1");
		setVanillaTransition(0x33,"E2",0x34,"W2");
		setVanillaTransition(0x33,"S1",0x3B,"N1");
		setVanillaTransition(0x34,"S1",0x3C,"N1");
		setVanillaTransition(0x35,"W1",0x3C,"E1");
		setVanillaTransition(0x35,"E0",0x3F,"W0");
		setVanillaTransition(0x35,"E2",0x3F,"W2");
		setVanillaTransition(0x37,"S0",0x3F,"N0");
		setVanillaTransition(0x37,"S2",0x3F,"N2");
		setVanillaTransition(0x3A,"E0",0x3B,"W0");
		setVanillaTransition(0x3A,"E2",0x3B,"W2");
		setVanillaTransition(0x3B,"E1",0x3C,"W1");
		setEscapeEdges(0x1B,"S0");
		setEscapeEdges(0x1B,"S2");
		setEscapeEdges(0x2B,"E0");
		setEscapeEdges(0x2B,"E1");
		setEscapeEdges(0x2B,"E2");
		createSingleLogicEdge(0x00,"Southwest","South",null,true);
		createSingleLogicEdge(0x00,"Southwest","Northwest",null,true);
		createDoubleLogicEdge(0x00,"Northwest","North","bushes",true);
		createSingleLogicEdge(0x00,"Divider","North","bushes",true);
		createSingleLogicEdge(0x00,"Southeast","Divider",null,true);
		createSingleLogicEdge(0x00,"Southeast","Northeast",null,true);
		createSingleLogicEdge(0x40,"Southwest","Divider","bushes",true);
		createSingleLogicEdge(0x40,"Divider","Northeast",null,true);
		createSingleLogicEdge(0x40,"South","Southeast","gloves",true);
		createDoubleLogicEdge(0x03,"Top","Bottom",null,false);
		createInvertedLogicEdge(0x43,"Top","Bottom",null,true);
		createSingleLogicEdge(0x03,"Spectacle Rock","Top",null,false);
		createInvertedLogicEdge(0x03,"Spectacle Rock","Top",null,true);
		createDoubleLogicEdge(0x03,"Spectacle Rock","Bottom",null,false);
		createSingleLogicEdge(0x43,"Bottom","Spectacle Rock",null,false);
		createDoublePortal(0x03,"Bottom",null);
		createDoubleLogicEdge(0x05,"Top Main","Bottom Main",null,false);
		createSingleLogicEdge(0x05,"Top West","Top Main","hammer",true);
		createSingleLogicEdge(0x45,"Top West","Top Main",null,true);
		createSingleLogicEdge(0x05,"Bottom West","Bottom Main","hookshot",true);
		createSingleLogicEdge(0x45,"Island","Top Main",null,false);
		createInvertedLogicEdge(0x05,"Island","Top Main",null,true);
		createSingleLogicEdge(0x05,"Top Main","Spiral",null,false);
		createSingleLogicEdge(0x05,"Top Main","Laser Bridge",null,false);
		createSingleLogicEdge(0x05,"Laser Bridge","Blocked Cave",null,false);
		createSingleLogicEdge(0x05,"Spiral","Bottom Main",null,false);
		createSingleLogicEdge(0x45,"Spiral","Mimic",null,true);
		createDoubleLogicEdge(0x05,"Blocked Cave","Bottom Main",null,false);
		createSingleLogicEdge(0x05,"Bottom Main","Blocked Cave","mitts",false);
		createSingleLogicEdge(0x45,"Bottom Main","Blocked Cave","bushes",false);
		createInvertedLogicEdge(0x05,"Top Main","Mimic",null,false);
		createInvertedLogicEdge(0x05,"Mimic","Bottom Main",null,false);
		createDoublePortal(0x05,"Bottom Main","mitts");
		createSingleLogicEdge(0x07,"Main","Portal","mitts",false);
		createInvertedLogicEdge(0x47,"Main","Portal",null,false);
		createSingleLogicEdge(0x07,"Portal","Main","hammer",false);
		createSingleLogicEdge(0x47,"Portal","Main",null,false);
		createPortal(0x07,"Portal","hammer");
		createPortal(0x47,"Portal","mitts");
		createDoubleLogicEdge(0x0A,"Main","Bottom Cave","gloves",false);
		createDoubleLogicEdge(0x0A,"Ledge","Main",null,false);
		createDoubleLogicEdge(0x0A,"Bottom Cave","Main",null,false);
		createDoubleLogicEdge(0x0F,"Main","Waterfall","flippers",true);
		createSingleLogicEdge(0x10,"North","Portal","hammer",true);
		createDoublePortal(0x10,"Portal","gloves");
		createSingleLogicEdge(0x50,"North","Portal","bushes",true);
		createDoubleLogicEdge(0x10,"South","Portal","mitts",true);
		createSingleLogicEdge(0x50,"North","West","bushes",true);
		createSingleLogicEdge(0x13,"Rocks","Main",null,false);
		createSingleLogicEdge(0x53,"Rocks","Main",null,true);
		createSingleLogicEdge(0x14,"Main","King Tomb","mitts",true);
		createSingleLogicEdge(0x14,"North","King Tomb","mitts",true);
		createSingleLogicEdge(0x14,"Main","North","bushes",true);
		createSingleLogicEdge(0x14,"Ledge","North",null,false);
		createInvertedLogicEdge(0x14,"Ledge","North",null,true);
		createSingleLogicEdge(0x54,"Main","King Tomb","bushes",true);
		createSingleLogicEdge(0x54,"North","King Tomb","bushes",true);
		createSingleLogicEdge(0x54,"Ledge","North",null,true);
		createSingleLogicEdge(0x15,"West","River","flippers",true);
		createSingleLogicEdge(0x55,"West","River","flippers",false);
		createDoubleLogicEdge(0x15,"East","River","flippers",true);
		setDoubleMirrorBlock(0x15,"River");
		createDoubleLogicEdge(0x16,"West","River","flippers",false);
		createDoubleLogicEdge(0x16,"East","River","flippers",false);
		createDoubleLogicEdge(0x16,"West","East","gloves",true);
		setDoubleMirrorBlock(0x16,"River");
		createDoubleLogicEdge(0x17,"West","River","flippers",false);
		createDoubleLogicEdge(0x17,"West","East",null,true);
		setDoubleMirrorBlock(0x17,"River");
		createSingleLogicEdge(0x18,"Main","Blocked House","bushes",true);
		createSingleLogicEdge(0x58,"Main","Blocked House","hammer",true);
		createDoubleLogicEdge(0x18,"Main","Southwest","bushes",true);
		createSingleLogicEdge(0x1B,"Main","East","gloves",true);
		createSingleLogicEdge(0x5B,"Main","East",null,true);
		createSingleLogicEdge(0x1B,"Main","South",null,true);
		createSingleLogicEdge(0x1B,"South","Southwest","bushes",true);
		createSingleLogicEdge(0x5B,"South","Southwest",null,true);
		createSingleLogicEdge(0x5B,"Main","Courtyard",null,true);
		createSingleLogicEdge(0x5B,"Courtyard","Balcony",null,true);
		createSingleLogicEdge(0x1B,"Balcony","Courtyard",null,false);
		createSingleLogicEdge(0x1B,"Balcony","Main",null,false);
		createSingleLogicEdge(0x1B,"Balcony","Pyramid Exit",null,true);
		createSingleLogicEdge(0x5B,"Pyramid Exit","Main",null,false);
		createSingleLogicEdge(0x1B,"Courtyard","Passage Exit","bushes",true);
		createSingleLogicEdge(0x5B,"Courtyard","Passage Exit",null,true);
		createPortal(0x1B,"Main","agahnim");
		createPortal(0x1B,"Courtyard","agahnim");
		createPortal(0x5B,"South","agahnim");
		createSingleLogicEdge(0x1D,"West","Northeast","hookshot",false);
		createSingleLogicEdge(0x5D,"Northeast","West","hookshot",false);
		createSingleLogicEdge(0x1D,"West","Southeast",null,true);
		createDoubleLogicEdge(0x1D,"West","River","flippers",false);
		createDoubleLogicEdge(0x1D,"Northeast","River","flippers",false);
		createSingleLogicEdge(0x5D,"Southeast","River","flippers",false);
		createSingleLogicEdge(0x1D,"Northeast","Southeast","bushes",true);
		createSingleLogicEdge(0x5D,"Northeast","Southeast","hammer",true);
		createSingleLogicEdge(0x5D,"Northeast","Southeast","gloves",true);
		setDoubleMirrorBlock(0x1D,"River");
		createSingleLogicEdge(0x22,"West","Main",null,true);
		createSingleLogicEdge(0x62,"West","Main","mitts",true);
		createSingleLogicEdge(0x22,"Main","Northeast","hammer",true);
		createSingleLogicEdge(0x62,"Main","Northeast",null,true);
		createSingleLogicEdge(0x28,"Minigame","Top","bushes",true);
		createSingleLogicEdge(0x28,"Minigame","Bottom",null,false);
		createDoubleLogicEdge(0x28,"Top","Bottom",null,false);
		createSingleLogicEdge(0x68,"Minigame","Top","mitts",false);
		createSingleLogicEdge(0x68,"Minigame","Bottom",null,true);
		overworldScreens.get(0x68).regions.get("Minigame").mirrorBlock = true;
		createSingleLogicEdge(0x29,"Top","Bottom",null,true);
		createSingleLogicEdge(0x29,"Top","Frog",null,true);
		createSingleLogicEdge(0x69,"Top","Bottom",null,false);
		createSingleLogicEdge(0x69,"Bottom","Top","mitts",false);
		createSingleLogicEdge(0x69,"Top","Frog","mitts",true);
		createSingleLogicEdge(0x2D,"North","South",null,true);
		createSingleLogicEdge(0x6D,"North","South","hammer",true);
		createSingleLogicEdge(0x6D,"North","River","flippers",true);
		setDoubleMirrorBlock(0x2E,"River");
		createDoubleLogicEdge(0x2F,"Main","Portal","hammer",true);
		createDoublePortal(0x2F,"Portal","gloves");
		createSingleLogicEdge(0x30,"Main","Front","book",false);
		createSingleLogicEdge(0x70,"Main","Front",null,true);
		createSingleLogicEdge(0x30,"Ledge","Main",null,false);
		createSingleLogicEdge(0x70,"Ledge","Main",null,true);
		createSingleLogicEdge(0x30,"Balcony","Main",null,false);
		createSingleLogicEdge(0x30,"Tablet","Main",null,false);
		createSingleLogicEdge(0x30,"Ledge","Back","gloves",true);
		createSingleLogicEdge(0x70,"Ledge","Back",null,true);
		createDoubleLogicEdge(0x30,"Portal","Main",null,false);
		createSingleLogicEdge(0x30,"Northeast","Main",null,false);
		createSingleLogicEdge(0x70,"Northeast","Main",null,true);
		createInvertedLogicEdge(0x30,"Northeast","Main",null,true);
		createDoublePortal(0x30,"Portal","mitts");
		createDoubleLogicEdge(0x32,"North","Main","bushes",true);
		createSingleLogicEdge(0x32,"Ledge","Main",null,false);
		createSingleLogicEdge(0x72,"Ledge","Main",null,true);
		createInvertedLogicEdge(0x32,"Ledge","Main",null,true);
		createDoubleLogicEdge(0x33,"West","East","gloves",true);
		createDoubleLogicEdge(0x33,"East","Portal","hammer",true);
		createDoublePortal(0x33,"Portal","gloves");
		createSingleLogicEdge(0x35,"Northwest","Lake","flippers",true);
		createSingleLogicEdge(0x75,"Northwest","Lake","flippers",false);
		createDoubleLogicEdge(0x35,"Northeast","Lake","flippers",true);
		createSingleLogicEdge(0x35,"Southwest","Southeast",null,true);
		createDoubleLogicEdge(0x35,"Southwest","Lake","flippers",false);
		createDoubleLogicEdge(0x35,"Southeast","Lake","flippers",false);
		createSingleLogicEdge(0x35,"Central Island","Lake","flippers",true);
		createInvertedLogicEdge(0x75,"Central Island","Lake","flippers",true);
		createSingleLogicEdge(0x35,"Small Island","Lake","flippers",false);
		createSingleLogicEdge(0x75,"Small Island","Lake","flippers",true);
		createInvertedLogicEdge(0x35,"Small Island","Lake","flippers",true);
		createDoublePortal(0x35,"Central Island","mitts");
		createSingleLogicEdge(0x3A,"Ledge","Main",null,false);
		createSingleLogicEdge(0x7A,"Ledge","Main",null,true);
		createInvertedLogicEdge(0x3A,"Ledge","Main",null,true);
		createSingleLogicEdge(0x3A,"Southeast","Main","gloves",true);
		createSingleLogicEdge(0x7A,"Southeast","Main",null,true);
		createDoubleLogicEdge(0x3F,"Waterfall","Main","flippers",false);
		setDoubleMirrorBlock(0x3F,"Waterfall");
		createSingleLogicEdge(0x81,"Main","Southeast","flippers",true);
		//Bumper Cave
		createSpecialDefaultConnector(0x4A,"Bottom Cave","Bunny",0x4A,"Ledge","Bunny","cape",true);
		createSpecialDefaultConnector(0x0A,"Bottom Cave","Bunny",0x0A,"Ledge","Bunny","cape",true);
		//DM Ascent
		createSpecialDefaultConnector(0x0A,"Bottom Cave","Link",0x03,"Bottom","Link","lantern",false);
		createSpecialDefaultConnector(0x4A,"Bottom Cave","Link",0x43,"Bottom","Link","lantern",false);
		createSpecialDefaultConnector(0x0A,"Bottom Cave","Link",0x43,"Bottom","Link","lantern",false);
		createSpecialDefaultConnector(0x4A,"Bottom Cave","Link",0x03,"Bottom","Link","lantern",false);
		//DM Descent
		createSpecialDefaultConnector(0x03,"Bottom","Link",0x0A,"Ledge","Link","lantern",true);
		createSpecialDefaultConnector(0x03,"Bottom","Link",0x4A,"Ledge","Link","lantern",true);
		createDefaultConnector(0x05,"Bottom Main",0x05,"Top Main",null,true);
		createDefaultConnector(0x45,"Bottom Main",0x45,"Top Main",null,false);
		createDefaultConnector(0x45,"Top Main",0x45,"Island","glovesandbomb",true);
		createDefaultConnector(0x47,"Portal",0x45,"Spiral","connectortr",false);
		createDefaultConnector(0x1B,"Main",0x1B,"Passage Exit","bushes",false);
		createDefaultConnector(0x1B,"Courtyard",0x13,"Main","connectorhccsanc",false);
		createDefaultConnector(0x1B,"Courtyard",0x1B,"Balcony","connectorhcchcb",false);
		createDefaultConnector(0x14,"Main",0x13,"Main","connectorboesanc",false);
		createDefaultConnector(0x14,"Main",0x1B,"Balcony","connectorboehcb",false);
		createDefaultConnector(0x14,"Main",0x1B,"Courtyard","connectorboehcc",false);
		createDefaultConnector(0x13,"Main",0x1B,"Balcony","connectorsanchcb",false);
		createDefaultConnector(0x13,"Main",0x1B,"Courtyard","connectorsanchcc",false);
		createDefaultConnector(0x28,"Top",0x29,"Bottom","bombdash",true);
		createItemLocation(0x14,"King Tomb",0,-1,"boots");
		createItemLocation(0x3B,"Main",1,0,"bushes");
		createItemLocation(0x2C,"Main",2,1,"bushes");
		createSpecialLocation(0x6C,"Main","Inverted Link's House","bushes");
		createItemLocation(0x05,"Spiral",3,-1,"bushes");
		createItemLocation(0x05,"Mimic",4,-1,"hammer");
		createItemLocation(0x18,"Main",5,-1,"bushes");
		createItemLocation(0x18,"Main",6,-1,"bomb");
		createItemLocation(0x58,"Main",7,-1,"bomb");
		createItemLocation(0x58,"Main",8,-1,"bushes");
		createItemLocation(0x30,"Main",9,-1,"bomb");
		createItemLocation(0x70,"Main",10,-1,"bushes");
		createItemLocation(0x45,"Bottom Main",11,-1,"bushes");
		createItemLocation(0x1E,"Main",12,-1,"bombdash");
		createItemLocation(0x43,"Bottom",13,-1,"spikecave");
		createItemLocation(0x18,"Main",14,-1,"bomb");
		createSpecialLocation(0x18,"Main","Bombless Well","bushes");
		createItemLocation(0x18,"Main",15,-1,"bomb");
		createSpecialLocation(0x18,"Main","Bombless Thieve's Hut","bushes");
		createItemLocation(0x74,"Main",16,-1,"bomb");
		createItemLocation(0x05,"Bottom Main",17,-1,"bomb");
		createSpecialLocation(0x05,"Bottom Main","Bombless Paradox","paradoxswitch");
		createItemLocation(0x13,"Main",18,-1,"boots");
		createItemLocation(0x35,"Southwest",19,-1,"bomb");
		createItemLocation(0x37,"Main",20,-1,"bomb");
		createItemLocation(0x45,"Top Main",21,-1,"hscbottom");
		createSpecialLocation(0x45,"Island","HSC Bottom Back","hscbottomback");
		createItemLocation(0x45,"Top Main",22,-1,"hsctop");
		createSpecialLocation(0x45,"Island","HSC Top Back","hsctopback");
		createItemLocation(0x58,"Main",23,-1,"bushes");
		createItemLocation(0x18,"Main",24,2,null);
		createItemLocation(0x1E,"Main",25,-1,"greenpendant");
		createItemLocation(0x6A,"Main",26,3,null);
		createItemLocation(0x18,"Main",27,-1,"bottle");
		createItemLocation(0x62,"Main",28,4,null);
		createSpecialLocation(0x3A,"Main","Thief",null);
		createItemLocation(0x82,"Main",29,5,null);
		createItemLocation(0x03,"Top",30,6,"tablet");
		createSpecialLocation(0x03,"Top","Read Ether","book");
		createItemLocation(0x30,"Tablet",31,7,"tablet");
		createSpecialLocation(0x30,"Tablet","Read Bombos","book");
		createItemLocation(0x4F,"Main",32,8,"bushes");
		createItemLocation(0x81,"Main",33,9,null);
		createItemLocation(0x03,"Bottom",34,10,"lantern");
		createSpecialLocation(0x43,"Bottom","Inverted Old Man","lantern");
		createSpecialLocation(0x03,"Top","Old Man Hera",null);
		createItemLocation(0x16,"West",35,-1,"mushroom");
		createItemLocation(0x00,"Southeast",36,-1,"bushes");
		createSpecialLocation(0x00,"Southeast","Check Hideout",null);
		createItemLocation(0x02,"Main",37,-1,"agaandboots");
		createSpecialLocation(0x02,"Main","Check Lumberjack",null);
		createItemLocation(0x03,"Bottom",38,-1,null);
		createItemLocation(0x32,"Ledge",39,-1,"bushes");
		createSpecialLocation(0x32,"Ledge","Check 45",null);
		createItemLocation(0x14,"Ledge",40,-1,"bomb");
		createItemLocation(0x30,"Northeast",41,-1,"gloves");
		createItemLocation(0x62,"Main",42,-1,"hammer");
		createItemLocation(0x29,"Top",43,-1,"boots");
		createSpecialLocation(0x29,"Top","Check Library",null);
		createItemLocation(0x00,"North",44,11,null);
		createSpecialLocation(0x00,"Divider","Check Mushroom 1",null);
		createSpecialLocation(0x00,"Northwest","Check Mushroom 2",null);
		createItemLocation(0x03,"Spectacle Rock",45,12,null);
		createSpecialLocation(0x03,"Bottom","Check Spectacle",null);
		createItemLocation(0x05,"Island",46,13,null);
		createSpecialLocation(0x05,"Top Main","Check Floating",null);
		createItemLocation(0x28,"Minigame",47,14,"bushes");
		createSpecialLocation(0x28,"Bottom","Check Race",null);
		createItemLocation(0x30,"Ledge",48,15,null);
		createSpecialLocation(0x30,"Main","Check Desert",null);
		createSpecialLocation(0x30,"Front","Desert Access","bushes");
		createItemLocation(0x35,"Small Island",49,16,null);
		createSpecialLocation(0x35,"Northwest","Check Lake 1",null);
		createSpecialLocation(0x35,"Lake","Check Lake 2",null);
		createItemLocation(0x4A,"Ledge",50,17,null);
		createSpecialLocation(0x4A,"Main","Check Bumper",null);
		createItemLocation(0x5B,"Main",51,18,null);
		createItemLocation(0x68,"Minigame",52,19,"bushes");
		createItemLocation(0x81,"Southeast",53,20,null);
		createSpecialLocation(0x81,"Main","Check Zora",null);
		createItemLocation(0x2A,"Main",54,21,"shovel");
		createItemLocation(0x14,"Main",55,-1,"gloves");
		createItemLocation(0x1B,"Passage Exit",56,-1,"bushes");
		createSpecialLocation(0x1B,"Main","Uncle Drop","bushes");
		createItemLocation(0x1B,"Courtyard",57,-1,"castleweapon");
		createSpecialLocation(0x1B,"Courtyard","Castle First Chest","bushes");
		createItemLocation(0x13,"Main",58,-1,"bushes");
		createItemLocation(0x22,"Northeast",59,-1,"powder");
		createItemLocation(0x69,"Frog",60,-1,null);
		createSpecialLocation(0x22,"Main","Smith",null);
		createItemLocation(0x5B,"Main",61,-1,"bushes");
		createSpecialLocation(0x6C,"Main","Red Bomb","redcrystals");
		createItemLocation(0x80,"Main",62,22,"allpendants");
		createSpecialLocation(0x80,"Main","Read Pedestal","book");
		createItemLocation(0x1B,"Courtyard",63,-1,"bushesandlantern");
		createItemLocation(0x0F,"Waterfall",64,-1,"bushes");
		createItemLocation(0x1B,"Balcony",65,-1,"bushes");
		createItemLocation(0x1B,"Balcony",66,-1,"ctbarrier");
		createSpecialLocation(0x43,"Top","Inverted Castle Tower Access","bushes");
		createItemLocation(0x35,"Northwest",67,-1,null);
		createItemLocation(0x18,"Main",68,-1,null);
		createItemLocation(0x05,"Bottom Main",69,-1,"bomb");
		createItemLocation(0x75,"Northwest",70,-1,null);
		createItemLocation(0x58,"Blocked House",71,-1,null);
		createItemLocation(0x45,"Bottom Main",72,-1,null);
		createItemLocation(0x56,"West",73,-1,null);
		createItemLocation(0x42,"Main",74,-1,null);
		createItemLocation(0x5A,"Main",75,-1,null);
		createItemLocation(0x16,"West",76,-1,null);
		createItemLocation(0x35,"Central Island",77,-1,null);
		createItemLocation(0x6C,"Main",78,-1,null);
		createSpecialLocation(0x2C,"Main","Inverted Bomb Shop",null);
		createDungeonLocation(0x1E,"Main",0,0,null);
		createDungeonLocation(0x30,"Front",1,0,null);
		createDungeonLocation(0x30,"Ledge",1,1,null);
		createDungeonLocation(0x30,"Balcony",1,2,null);
		createDungeonLocation(0x30,"Back",1,3,null);
		createDungeonLocation(0x03,"Top",2,0,null);
		createDungeonLocation(0x5E,"Main",3,0,"bushes");
		createDungeonLocation(0x7B,"Main",4,0,null);
		createDungeonLocation(0x40,"Southeast",5,0,null);
		createDungeonLocation(0x40,"Southeast",5,1,null);
		createDungeonLocation(0x40,"Northwest",5,2,null);
		createDungeonLocation(0x40,"Northwest",5,3,"firerod");
		createDungeonLocation(0x40,"Southeast",5,4,null);
		createDungeonLocation(0x40,"Southeast",5,5,null);
		createDungeonLocation(0x40,"Southeast",5,6,"bushes");
		createDungeonLocation(0x40,"North",5,7,null);
		createDungeonLocation(0x58,"Main",6,0,"bushes");
		createDungeonLocation(0x75,"Central Island",7,0,null);
		createDungeonLocation(0x70,"Front",8,0,"mmmedallion");
		createSpecialLocation(0x70,"Front","Maybe MM","mmmedallionmaybe");
		createDungeonLocation(0x47,"Portal",9,0,"trmedallion");
		createSpecialLocation(0x47,"Portal","Maybe TR","trmedallionmaybe");
		createDungeonLocation(0x45,"Spiral",9,1,null);
		createDungeonLocation(0x45,"Mimic",9,2,null);
		createDungeonLocation(0x45,"Laser Bridge",9,3,null);
		createDungeonLocation(0x43,"Top",10,0,"gtcrystals");
		createSpecialLocation(0x43,"Top","Maybe GT","gtcrystalsmaybe");
		createSpecialLocation(0x1B,"Balcony","Inverted Ganon's Tower","gtcrystals");
		createSpecialLocation(0x1B,"Balcony","Inverted Maybe GT","gtcrystalsmaybe");
		createDungeonLocation(0x1B,"Courtyard",11,0,null);
		createDungeonLocation(0x1B,"Balcony",11,1,null);
		createDungeonLocation(0x1B,"Balcony",11,2,null);
		createDungeonLocation(0x13,"Main",11,3,null);
		createDungeonLocation(0x14,"Main",11,4,"gloves");
		createDungeonLocation(0x1B,"Balcony",12,0,"ctbarrier");
		createSpecialLocation(0x43,"Top","Inverted Castle Tower",null);
		createEntranceLocation(0x2C,"Main",0,null);
		createEntranceLocation(0x2B,"Main",1,"boots");
		createEntranceLocation(0x3B,"Main",2,null);
		createEntranceLocation(0x32,"Ledge",3,null);
		createEntranceLocation(0x16,"West",4,null);
		createEntranceLocation(0x0F,"Waterfall",5,null);
		createEntranceLocation(0x34,"Main",6,"bomb");
		createEntranceLocation(0x1B,"Courtyard",7,null);
		createEntranceLocation(0x1B,"Balcony",8,null);
		createEntranceLocation(0x1B,"Balcony",9,null);
		createEntranceLocation(0x1B,"Balcony",10,"ctbarrier");
		createEntranceLocation(0x1B,"Passage Exit",11,null);
		createEntranceLocation(0x1B,"Main",12,"bushes");
		createEntranceLocation(0x13,"Main",13,null);
		createEntranceLocation(0x13,"Rocks",14,"boots");
		createEntranceLocation(0x14,"Main",15,"gloves");
		createEntranceLocation(0x14,"Ledge",16,null);
		createEntranceLocation(0x14,"King Tomb",17,"boots");
		createEntranceLocation(0x15,"West",18,null);
		createEntranceLocation(0x15,"West",19,"bushes");
		createEntranceLocation(0x00,"Northeast",20,null);
		createEntranceLocation(0x00,"Southeast",21,"bushes");
		createEntranceLocation(0x00,"Southeast",22,null);
		createEntranceLocation(0x02,"Main",23,null);
		createEntranceLocation(0x02,"Main",24,null);
		createEntranceLocation(0x02,"Main",25,"agaandboots");
		createEntranceLocation(0x0A,"Bottom Cave",26,null);
		createEntranceLocation(0x11,"Main",27,null);
		createEntranceLocation(0x18,"Main",28,null);
		createEntranceLocation(0x18,"Main",29,null);
		createEntranceLocation(0x18,"Main",30,null);
		createEntranceLocation(0x18,"Main",31,null);
		createEntranceLocation(0x18,"Main",32,null);
		createEntranceLocation(0x18,"Main",33,null);
		createEntranceLocation(0x18,"Main",34,null);
		createEntranceLocation(0x18,"Main",35,null);
		createEntranceLocation(0x18,"Main",36,null);
		createEntranceLocation(0x18,"Blocked House",37,null);
		createEntranceLocation(0x18,"Southwest",38,"bomb");
		createEntranceLocation(0x18,"Main",39,null);
		createEntranceLocation(0x18,"Main",40,null);
		createEntranceLocation(0x18,"Main",41,null);
		createEntranceLocation(0x22,"Main",42,null);
		createEntranceLocation(0x22,"Main",43,null);
		createEntranceLocation(0x22,"Northeast",44,null);
		createEntranceLocation(0x29,"Top",45,null);
		createEntranceLocation(0x28,"Top",46,null);
		createEntranceLocation(0x29,"Bottom",47,null);
		createEntranceLocation(0x29,"Bottom",48,null);
		createEntranceLocation(0x1E,"Main",49,null);
		createEntranceLocation(0x1E,"Main",50,null);
		createEntranceLocation(0x2E,"Main",51,null);
		createEntranceLocation(0x2F,"Main",52,null);
		createEntranceLocation(0x30,"Front",53,null);
		createEntranceLocation(0x30,"Ledge",54,null);
		createEntranceLocation(0x30,"Balcony",55,null);
		createEntranceLocation(0x30,"Back",56,null);
		createEntranceLocation(0x30,"Northeast",57,"gloves");
		createEntranceLocation(0x30,"Main",58,null);
		createEntranceLocation(0x3A,"Main",59,null);
		createEntranceLocation(0x3A,"Main",60,"gloves");
		createEntranceLocation(0x35,"Northwest",61,null);
		createEntranceLocation(0x35,"Northwest",62,null);
		createEntranceLocation(0x35,"Southwest",63,"bomb");
		createEntranceLocation(0x35,"Central Island",64,null);
		createEntranceLocation(0x37,"Main",65,"bomb");
		createEntranceLocation(0x37,"Main",66,null);
		createEntranceLocation(0x37,"Main",67,"glove");
		createEntranceLocation(0x03,"Top",68,null);
		createEntranceLocation(0x03,"Bottom",69,null);
		createEntranceLocation(0x03,"Bottom",70,null);
		createEntranceLocation(0x03,"Bottom",71,null);
		createEntranceLocation(0x03,"Bottom",72,null);
		createEntranceLocation(0x03,"Bottom",73,null);
		createEntranceLocation(0x0A,"Ledge",74,null);
		createEntranceLocation(0x03,"Bottom",75,null);
		createEntranceLocation(0x03,"Bottom",76,null);
		createEntranceLocation(0x05,"Top Main",77,null);
		createEntranceLocation(0x05,"Bottom Main",78,null);
		createEntranceLocation(0x05,"Bottom Main",79,null);
		createEntranceLocation(0x05,"Spiral",80,null);
		createEntranceLocation(0x05,"Bottom Main",81,null);
		createEntranceLocation(0x05,"Bottom Main",82,null);
		createEntranceLocation(0x05,"Laser Bridge",83,null);
		createEntranceLocation(0x05,"Blocked Cave",84,null);
		createEntranceLocation(0x05,"Mimic",85,null);
		createEntranceLocation(0x6C,"Main",86,null);
		createEntranceLocation(0x6B,"Main",87,"boots");
		createEntranceLocation(0x74,"Main",88,"bomb");
		createEntranceLocation(0x7B,"Main",89,null);
		createEntranceLocation(0x53,"Main",90,null);
		createEntranceLocation(0x5A,"Main",91,null);
		createEntranceLocation(0x56,"West",92,null);
		createEntranceLocation(0x5B,"Main",93,"agahnim2");
		createSpecialLocation(0x1B,"Balcony","Inverted Ganon","agahnim2");
		createEntranceLocation(0x5B,"Main",94,"redcrystals");
		createEntranceLocation(0x5B,"Pyramid Exit",95,null);
		createSpecialLocation(0x1B,"Balcony","Inverted Ganon Exit",null);
		createEntranceLocation(0x40,"Northwest",96,"firerod");
		createEntranceLocation(0x40,"Northwest",97,null);
		createEntranceLocation(0x40,"North",98,null);
		createEntranceLocation(0x40,"Southeast",99,null);
		createEntranceLocation(0x40,"Southeast",100,null);
		createEntranceLocation(0x40,"Southeast",101,"bushes");
		createEntranceLocation(0x40,"Southeast",102,null);
		createEntranceLocation(0x40,"Southeast",103,null);
		createEntranceLocation(0x42,"Main",104,null);
		createEntranceLocation(0x4A,"Bottom Cave",105,null);
		createEntranceLocation(0x51,"Main",106,null);
		createEntranceLocation(0x58,"Main",107,null);
		createEntranceLocation(0x58,"Main",108,"bushes");
		createEntranceLocation(0x58,"Main",109,null);
		createEntranceLocation(0x58,"Blocked House",110,null);
		createEntranceLocation(0x58,"Main",111,"bomb");
		createEntranceLocation(0x62,"Main",112,"hammer");
		createEntranceLocation(0x69,"Bottom",113,null);
		createEntranceLocation(0x5E,"Main",114,"bushes");
		createEntranceLocation(0x5E,"Main",115,null);
		createEntranceLocation(0x6E,"Main",116,null);
		createEntranceLocation(0x6F,"Main",117,null);
		createEntranceLocation(0x75,"Central Island",118,null);
		createEntranceLocation(0x75,"Northwest",119,null);
		createEntranceLocation(0x77,"Main",120,"bomb");
		createEntranceLocation(0x77,"Main",121,null);
		createEntranceLocation(0x77,"Main",122,"glove");
		createEntranceLocation(0x70,"Front",123,"mmmedallion");
		createEntranceLocation(0x70,"Main",124,null);
		createEntranceLocation(0x70,"Main",125,null);
		createEntranceLocation(0x70,"Main",126,null);
		createEntranceLocation(0x43,"Top",127,"gtcrystals");
		createEntranceLocation(0x43,"Bottom",128,null);
		createEntranceLocation(0x4A,"Ledge",129,null);
		createEntranceLocation(0x43,"Bottom",130,null);
		createEntranceLocation(0x45,"Island",131,null);
		createEntranceLocation(0x45,"Top Main",132,"glove");
		createEntranceLocation(0x45,"Top Main",133,null);
		createEntranceLocation(0x45,"Bottom Main",134,null);
		createEntranceLocation(0x45,"Bottom Main",135,null);
		createEntranceLocation(0x47,"Portal",136,"trmedallion");
		createEntranceLocation(0x45,"Laser Bridge",137,null);
		createEntranceLocation(0x45,"Spiral",138,null);
		createEntranceLocation(0x45,"Mimic",139,null);
        setEntranceRegion(0x00,"Northeast",[20]);
        setEntranceRegion(0x00,"Southeast",[21,22]);
        setEntranceRegion(0x40,"Southeast",[99,100,101,102,103]);
        setEntranceRegion(0x40,"Northwest",[96,97]);
        setEntranceRegion(0x40,"North",[98]);
        setEntranceRegion(0x02,"Main",[23,24,25]);
        setEntranceRegion(0x42,"Main",[104]);
        setEntranceRegion(0x03,"Top",[68]);
        setEntranceRegion(0x03,"Bottom",[69,70,71,72,73,75,76]);
        setEntranceRegion(0x43,"Top",[127]);
        setEntranceRegion(0x43,"Bottom",[128,130]);
        setEntranceRegion(0x05,"Top Main",[77]);
        setEntranceRegion(0x05,"Bottom Main",[78,79,81,82]);
        setEntranceRegion(0x05,"Spiral",[80]);
        setEntranceRegion(0x05,"Mimic",[85]);
        setEntranceRegion(0x05,"Laser Bridge",[83]);
        setEntranceRegion(0x05,"Blocked Cave",[84]);
        setEntranceRegion(0x45,"Top Main",[132,133]);
        setEntranceRegion(0x45,"Bottom Main",[134,135]);
        setEntranceRegion(0x45,"Island",[131]);
        setEntranceRegion(0x45,"Spiral",[138]);
        setEntranceRegion(0x45,"Mimic",[139]);
        setEntranceRegion(0x45,"Laser Bridge",[137]);
        setEntranceRegion(0x47,"Portal",[136]);
        setEntranceRegion(0x0A,"Ledge",[74]);
        setEntranceRegion(0x0A,"Bottom Cave",[26]);
        setEntranceRegion(0x4A,"Ledge",[129]);
        setEntranceRegion(0x4A,"Bottom Cave",[105]);
        setEntranceRegion(0x0F,"Waterfall",[5]);
        setEntranceRegion(0x11,"Main",[27]);
        setEntranceRegion(0x51,"Main",[106]);
        setEntranceRegion(0x13,"Main",[13]);
        setEntranceRegion(0x13,"Rocks",[14]);
        setEntranceRegion(0x53,"Main",[90]);
        setEntranceRegion(0x14,"Main",[15]);
        setEntranceRegion(0x14,"King Tomb",[17]);
        setEntranceRegion(0x14,"Ledge",[16]);
        setEntranceRegion(0x15,"West",[18,19]);
        setEntranceRegion(0x16,"West",[4]);
        setEntranceRegion(0x56,"West",[92]);
        setEntranceRegion(0x18,"Main",[28,29,30,31,32,33,34,35,36,39,40,41]);
        setEntranceRegion(0x18,"Blocked House",[37]);
        setEntranceRegion(0x18,"Southwest",[38]);
        setEntranceRegion(0x58,"Main",[107,108,109,111]);
        setEntranceRegion(0x58,"Blocked House",[110]);
        setEntranceRegion(0x5A,"Main",[91]);
        setEntranceRegion(0x1B,"Main",[12]);
        setEntranceRegion(0x1B,"Passage Exit",[11]);
        setEntranceRegion(0x1B,"Courtyard",[7]);
        setEntranceRegion(0x1B,"Balcony",[8,9,10,293,295]);
        setEntranceRegion(0x5B,"Main",[93,94]);
        setEntranceRegion(0x5B,"Pyramid Exit",[95]);
        setEntranceRegion(0x1E,"Main",[49,50]);
        setEntranceRegion(0x5E,"Main",[114,115]);
        setEntranceRegion(0x22,"Main",[42,43]);
        setEntranceRegion(0x22,"Northeast",[44]);
        setEntranceRegion(0x62,"Main",[112]);
        setEntranceRegion(0x28,"Top",[46]);
        setEntranceRegion(0x29,"Top",[45]);
        setEntranceRegion(0x29,"Bottom",[47,48]);
        setEntranceRegion(0x69,"Bottom",[113]);
        setEntranceRegion(0x2B,"Main",[1]);
        setEntranceRegion(0x6B,"Main",[87]);
        setEntranceRegion(0x2C,"Main",[0]);
        setEntranceRegion(0x6C,"Main",[86]);
        setEntranceRegion(0x2E,"Main",[51]);
        setEntranceRegion(0x6E,"Main",[116]);
        setEntranceRegion(0x2F,"Main",[52]);
        setEntranceRegion(0x6F,"Main",[117]);
        setEntranceRegion(0x30,"Main",[58]);
        setEntranceRegion(0x30,"Front",[53]);
        setEntranceRegion(0x30,"Ledge",[54]);
        setEntranceRegion(0x30,"Back",[56]);
        setEntranceRegion(0x30,"Balcony",[55]);
        setEntranceRegion(0x30,"Northeast",[57]);
        setEntranceRegion(0x70,"Main",[124,125,126]);
        setEntranceRegion(0x70,"Front",[123]);
        setEntranceRegion(0x32,"Ledge",[3]);
        setEntranceRegion(0x34,"Main",[6]);
        setEntranceRegion(0x74,"Main",[88]);
        setEntranceRegion(0x35,"Northwest",[61,62]);
        setEntranceRegion(0x35,"Southwest",[63]);
        setEntranceRegion(0x35,"Central Island",[64]);
        setEntranceRegion(0x75,"Northwest",[119]);
        setEntranceRegion(0x75,"Central Island",[118]);
        setEntranceRegion(0x37,"Main",[65,66,67]);
        setEntranceRegion(0x77,"Main",[120,121,122]);
        setEntranceRegion(0x3A,"Main",[59,60]);
        setEntranceRegion(0x3B,"Main",[2]);
        setEntranceRegion(0x7B,"Main",[89]);
	};

	window.vanillaTransitionsMode = function(button)
	{
		if(owshuffle !== 'N' || crossedow === 'C')
		{
			for(let screen of overworldScreens.values())
				for(let edge of screen.edges.values())
					if(edge.out && !edgesCompatible(edge,edge.out))
						deleteSimilarParallel(edge);
			if(owshuffle === 'N')
			{
				connectEdgesByKeys(0x1A,"E1",0x1B,"W1",true);
				connectEdgesByKeys(0x68,"E0",0x69,"W0",true);
				connectEdgesByKeys(0x30,"E0",0x3A,"W0",true);
				connectEdgesByKeys(0x30,"E2",0x3A,"W2",true);
				connectEdgesByKeys(0x00,"N1",0x80,"S1",true);
				connectEdgesByKeys(0x0F,"N1",0x81,"S1",true);
				connectEdgesByKeys(0x2D,"W0",0x82,"E1",true);
				connectEdgesByKeys(0x0F,"ZW",0x35,"ZW",true);
				connectEdgesByKeys(0x12,"ZW",0x3F,"ZW",true);
				connectEdgesByKeys(0x15,"ZW",0x33,"ZW",true);
				connectEdgesByKeys(0x55,"ZW",0x7F,"ZW",true);
				if(similarow)
				{
					connectEdgesByKeys(0x28,"E1",0x29,"W1",true);
					connectEdgesByKeys(0x68,"E2",0x69,"W2",true);
				}
			}
			if(owshuffle === 'P')
			{
				connectEdgesByKeys(0x2D,"W0",0x82,"E1",true);
				if(similarow)
				{
					connectEdgesByKeys(0x1A,"E1",0x1B,"W1",true);
					connectEdgesByKeys(0x28,"E1",0x29,"W1",true);
					connectEdgesByKeys(0x68,"E0",0x69,"W0",true);
					connectEdgesByKeys(0x68,"E2",0x69,"W2",true);
					connectEdgesByKeys(0x30,"E0",0x3A,"W0",true);
					connectEdgesByKeys(0x30,"E2",0x3A,"W2",true);
				}
				else
					if(crossedow !== 'C' && (!mixedow || crossedow === 'P'))
						connectEdgesByKeys(0x68,"E0",0x69,"W0",true);
			}
			if(crossedow !== 'C' && (!mixedow || crossedow === 'P'))
				connectEdgesByKeys(0x55,"ZW",0x7F,"ZW",true);
			if(similarow && crossedow !== 'C' && (!mixedow || crossedow === 'P'))
			{
				connectEdgesByKeys(0x2B,"E0",0x2C,"W0",true);
				connectEdgesByKeys(0x2B,"E1",0x2C,"W1",true);
				connectEdgesByKeys(0x2B,"E2",0x2C,"W2",true);
				connectEdgesByKeys(0x6B,"E0",0x6C,"W0",true);
				connectEdgesByKeys(0x6B,"E1",0x6C,"W1",true);
				connectEdgesByKeys(0x6B,"E2",0x6C,"W2",true);
			}
			for(let screen of overworldScreens.values())
				for(let edge of screen.edges.values())
					if(edge.out && ((owshuffle !== 'F' && edge.parallel) || (similarow && edge.similarGroup !== 1)))
						connectSimilarParallel(edge,edge.out);
		}
		if(mixedow)
		{
			for(let [id,screen] of overworldScreens)
				if((id < 0x40 || id >= 0x80) && screen.mixedState !== "unknown")
					setMixedScreen(screen,screen.mixedState);
			if(worldState === 'S')
				for(let id of [0x1B,0x2B,0x2C])
					setMixedScreen(overworldScreens.get(id),"normal");
		}
		document.getElementById("overworldoptionsfinalbox").style.display = "none";
		sendUpdate();
		updateReachableEdges();
		if(button)
			buttonFlash(button);
	};

	window.vanillaWhirlpools = function(button)
	{
		connectEdgesByKeys(0x0F,"ZW",0x35,"ZW",true);
		connectEdgesByKeys(0x12,"ZW",0x3F,"ZW",true);
		connectEdgesByKeys(0x15,"ZW",0x33,"ZW",true);
		connectEdgesByKeys(0x55,"ZW",0x7F,"ZW",true);
		sendUpdate();
		updateReachableEdges();
		buttonFlash(button);
	};

	window.vanillaSpecialScreens = function(button)
	{
		connectEdgesByKeys(0x00,"N1",0x80,"S1",true);
		connectEdgesByKeys(0x0F,"N1",0x81,"S1",true);
		connectEdgesByKeys(0x2D,"W0",0x82,"E1",true);
		sendUpdate();
		updateReachableEdges();
		buttonFlash(button);
	};

	window.isDarkWorld = function(screen)
	{
		if(mixedow && screen.mixedState !== "unknown")
			return screen.darkWorld === (screen.mixedState === "normal");
		return screen.darkWorld;
	};

	window.getConnectedEdge = function(edge,source)
	{
		if(owshuffle === 'N' && crossedow !== 'C')
		{
			if(mixedow && edge.parallel)
			{
				if(edge.screen.mixedState === "unknown" || edge.vanilla.screen.mixedState === "unknown")
					return null;
				return crossedow === 'P' || edge.screen.mixedState === edge.vanilla.screen.mixedState ?edge.vanilla :edge.parallel.vanilla;
			}
			return edge.vanilla;
		}
		return source ?edge.in :edge.out;
	};

	window.getAssumedMixedState = function(screen,assumptions)
	{
		if(screen.mixedState !== "unknown")
			return screen.mixedState;
		return assumptions.has(screen.id&0xBF) ?assumptions.get(screen.id&0xBF) :"unknown";
	};

	window.isAssumedDarkWorld = function(screen,assumptions)
	{
		if(mixedow)
		{
			let state = getAssumedMixedState(screen,assumptions);
			if(state !== "unknown")
				return screen.darkWorld === (state === "normal");
		}
		return screen.darkWorld;
	};

	window.getAssumedConnectedEdge = function(edge,source,assumptions)
	{
		if(owshuffle === 'N' && crossedow !== 'C')
		{
			if(mixedow && edge.parallel)
			{
				if(getAssumedMixedState(edge.screen,assumptions) === "unknown" || getAssumedMixedState(edge.vanilla.screen,assumptions) === "unknown")
					return null;
				return crossedow === 'P' || getAssumedMixedState(edge.screen,assumptions) === getAssumedMixedState(edge.vanilla.screen,assumptions) ?edge.vanilla :edge.parallel.vanilla;
			}
			return edge.vanilla;
		}
		return source ?edge.in :edge.out;
	};

	window.addContinueRegion = function(id,state,normalRegion,swappedRegion,checkableScreens,continueRegions)
	{
		id &= 0xBF;
		checkableScreens.add(id);
		if(state !== "unknown")
		{
			let keyNormal = id+" normal",keySwapped = id+" swapped";
			if(!continueRegions.has(keyNormal))
				continueRegions.set(keyNormal,new Set());
			if(!continueRegions.has(keySwapped))
				continueRegions.set(keySwapped,new Set());
			let normal = state === "normal";
			continueRegions.get(keyNormal).add(normal ?normalRegion :swappedRegion);
			continueRegions.get(keySwapped).add(normal ?swappedRegion :normalRegion);
		}
	};

	window.explore = function(current,items,visitedRegions,visitedScreenEdges,checkableScreens,continueRegions,assumptions)
	{
		visitedRegions.add(current);
		let darkWorld = isAssumedDarkWorld(current.screen,assumptions);
		let edgesOut = current.logicEdgesOut;
		if((worldState === 'I') === (darkWorld === current.darkWorld))
			edgesOut = edgesOut.concat(current.invertedLogicEdgesOut);
		edgesOut = edgesOut.concat(entranceEnabled ?current.entranceConnectorsOut :current.defaultConnectorsOut);
		if(!entranceEnabled && current.specialDefaultConnectorsOut && (!mixedow || getAssumedMixedState(current.screen,assumptions) !== "unknown"))
		{
			let skip = false;
			for(let edge of current.specialDefaultConnectorsOut)
			{
				if(mixedow)
				{
					if(getAssumedMixedState(edge.target.screen,assumptions) === "unknown" && current.name !== "Ledge")
					{
						if(!skip && (edge.sourceWorld === "Link") === (darkWorld === (worldState === 'I')) && (!edge.rule || checkRule(edge.rule,items,darkWorld)))
						{
							addContinueRegion(edge.target.screen.id,getAssumedMixedState(current.screen,assumptions),edge.target,edge.target.parallel,checkableScreens,continueRegions);
							skip = true;
						}
					}
					else
						if((edge.sourceWorld === "Link") === (darkWorld === (worldState === 'I')))
							if((edge.targetWorld === "Link") === (isAssumedDarkWorld(edge.target.screen,assumptions) === (worldState === 'I')))
								edgesOut.push(edge);
				}
				else
				{
					if((edge.sourceWorld === "Link") === (darkWorld === (worldState === 'I')))
						if((edge.targetWorld === "Link") === (edge.target.darkWorld === (worldState === 'I')))
							edgesOut.push(edge);
				}
			}
		}
		for(let edge of edgesOut)
		{
			if((!edge.rule || checkRule(edge.rule,items,darkWorld)) && !visitedRegions.has(edge.target))
			{
				if(mixedow && getAssumedMixedState(edge.target.screen,assumptions) === "unknown")
					checkableScreens.add(edge.target.screen.id&0xBF);
				else
					explore(edge.target,items,visitedRegions,visitedScreenEdges,checkableScreens,continueRegions,assumptions);
			}
		}
		for(let edge of current.screenEdges)
		{
			if(!edge.water || checkRule("flippers",items,darkWorld))
			{
				visitedScreenEdges.add(edge);
				if(mixedow && owshuffle === 'N' && crossedow !== 'C' && (edge.parallel || crossedow === 'P') && getAssumedMixedState(edge.vanilla.screen,assumptions) === "unknown")
				{
					addContinueRegion(edge.vanilla.screen.id,getAssumedMixedState(current.screen,assumptions),edge.vanilla.region,crossedow === 'P' ?edge.vanilla.region :edge.parallel.vanilla.region,checkableScreens,continueRegions);
				}
				else
				{
					let targetEdge = getAssumedConnectedEdge(edge,false,assumptions);
					if(targetEdge && (!edge.water || checkRule("flippers",items,isAssumedDarkWorld(targetEdge.screen,assumptions))) && !visitedRegions.has(targetEdge.region))
					{
						explore(targetEdge.region,items,visitedRegions,visitedScreenEdges,checkableScreens,continueRegions,assumptions);
					}
				}
			}
		}
		if(current.portal && (darkWorld === (worldState === 'I')) && (!current.portal.rule || checkRule(current.portal.rule,items,darkWorld)) && !visitedRegions.has(current.parallel))
		{
			explore(current.parallel,items,visitedRegions,visitedScreenEdges,checkableScreens,continueRegions,assumptions);
		}
		if(current.parallel && (darkWorld === (worldState !== 'I')) && !current.mirrorBlock && items.mirror && !visitedRegions.has(current.parallel))
		{
			explore(current.parallel,items,visitedRegions,visitedScreenEdges,checkableScreens,continueRegions,assumptions);
		}
	};

	window.dijkstra = function(goal,items)
	{
		let reachable = new Set();
		for(let screen of overworldScreens.values())
			for(let region of screen.regions.values())
			{
				region.distance = Infinity;
				region.nextRegion = [];
			}
		goal.distance = 0;
		reachable.add(goal);
		while(reachable.size != 0)
		{
			let min = Infinity,current;
			for(let region of reachable)
				if(region.distance < min)
				{
					min = region.distance;
					current = region;
				}
			reachable.delete(current);
			let darkWorld = isDarkWorld(current.screen);
			let edgesIn = current.logicEdgesIn;
			if((worldState === 'I') === (darkWorld === current.darkWorld))
				edgesIn = edgesIn.concat(current.invertedLogicEdgesIn);
			edgesIn = edgesIn.concat(entranceEnabled ?current.entranceConnectorsIn :current.defaultConnectorsIn);
			if(!entranceEnabled && current.specialDefaultConnectorsIn)
				for(let edge of current.specialDefaultConnectorsIn)
				{
					if(mixedow)
					{
						if(edge.source.screen.mixedState !== "unknown")
							if((edge.targetWorld === "Link") === (darkWorld === (worldState === 'I')))
								if((edge.sourceWorld === "Link") === (isDarkWorld(edge.source.screen) === (worldState === 'I')))
									edgesIn.push(edge);
					}
					else
					{
						if((edge.targetWorld === "Link") === (darkWorld === (worldState === 'I')))
							if((edge.sourceWorld === "Link") === (edge.source.darkWorld === (worldState === 'I')))
								edgesIn.push(edge);
					}
				}
			for(let edge of edgesIn)
			{
				let distance = current.distance+edge.weight;
				if((!mixedow || edge.source.screen.mixedState !== "unknown") && (!edge.rule || checkRule(edge.rule,items,isDarkWorld(edge.source.screen))) && distance < edge.source.distance)
				{
					edge.source.distance = distance;
					edge.source.nextRegion = current;
					edge.source.nextEdgeType = edge.weight > 1 ?"C" :"L";
					edge.source.nextEdge = edge;
					reachable.add(edge.source);
				}
			}
			for(let edge of current.screenEdges)
			{
				let distance = current.distance+1;
				let sourceEdge = getConnectedEdge(edge,true);
				if(sourceEdge && (!edge.water || (checkRule("flippers",items,isDarkWorld(sourceEdge.screen)) && checkRule("flippers",items,darkWorld))) && distance < sourceEdge.region.distance)
				{
					sourceEdge.region.distance = distance;
					sourceEdge.region.nextRegion = current;
					sourceEdge.region.nextEdgeType = "S";
					sourceEdge.region.nextEdge = sourceEdge;
					reachable.add(sourceEdge.region);
				}
			}
			if(current.parallel)
			{
				let distance = current.distance+1,parallel = current.parallel;
				if(parallel.portal && (!darkWorld === (worldState === 'I')) && (!parallel.portal.rule || checkRule(parallel.portal.rule,items,!darkWorld)) && distance < parallel.distance)
				{
					parallel.distance = distance;
					parallel.nextRegion = current;
					parallel.nextEdgeType = "P";
					reachable.add(parallel);
				}
				if((!darkWorld === (worldState !== 'I')) && !parallel.mirrorBlock && items.mirror && distance < parallel.distance)
				{
					parallel.distance = distance;
					parallel.nextRegion = current;
					parallel.nextEdgeType = "M";
					reachable.add(parallel);
				}
			}
		}
	};

	window.checkRule = function(rule,items,darkWorld)
	{
		switch(rule)
		{
			case "bushes":
				return items.moonpearl || (darkWorld === (worldState === 'I'));
			case "mirror":
				return items.mirror;
			case "lantern":
				return items.lantern;
			case "agahnim":
				return items.agahnim;
			case "agahnim2":
				return items.agahnim2;
			case "book":
				return items.book;
			case "bottle":
				return items.bottle;
			case "mushroom":
				return items.mushroom;
			case "bombdash":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && (items.bomb || items.boots);
			case "bushesandlantern":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items.lantern;
			case "glovesandbomb":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items.gloves && items.bomb;
			case "agaandboots":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items.agahnim && items.boots;
			case "hscbottom":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items.gloves && (items.boots || items.hookshot);
			case "hscbottomback":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items.bomb && (items.boots || items.hookshot);
			case "hsctop":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items.gloves && items.hookshot;
			case "hsctopback":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items.bomb && items.hookshot;
			case "spikecave":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items.gloves && items.hammer && (items.byrna || (items.cape && (items.bottle || items.magic)));
			case "paradoxswitch":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && (items.bomb || items.bow || items.boomerang || items.firerod || items.icerod || items.somaria);
			case "castleweapon":
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && (items.bomb || items.sword || items.hammer || items.bow || items.firerod || items.somaria || items.byrna);
			case "tablet":
				return items.book && (items.sword > 1 || (items.flags && items.flags.swordmode === 'S' && items.hammer));
			case "ctbarrier":
				return worldState === 'I' || items.agahnim || ((!darkWorld || items.moonpearl) && (items.cape || items.sword > 1 || (items.flags && items.flags.swordmode === 'S' && items.hammer)));
			case "mmmedallion":
			case "trmedallion":
			case "mmmedallionmaybe":
			case "trmedallionmaybe":
				let index = rule.startsWith("mm") ?0 :1;
				if((items.moonpearl || (darkWorld === (worldState === 'I'))) && (items.sword > 0 || (items.flags && items.flags.swordmode === 'S')))
				{
					if(items.bombos && items.ether && items.quake)
						return true;
					if(items.medallions && items.medallions.hasOwnProperty(index))
						switch(items.medallions[index])
						{
							case 0:
								return rule.endsWith("maybe") && (items.bombos || items.ether || items.quake);
							case 1:
								return items.bombos;
							case 2:
								return items.ether;
							case 3:
								return items.quake;
						}
				}
				return false;
			case "greenpendant":
				if(items.prizes)
					for(let k = 0; k < 10; k++)
						if(items.prizes[k] === 1 && items["boss"+k])
							return true;
				return false;
			case "allpendants":
				if(items.prizes)
				{
					let c = 0;
					for(let k = 0; k < 10; k++)
						if((items.prizes[k] === 1 || items.prizes[k] === 2) && items["boss"+k])
							if(++c === 3)
								return true;
				}
				return false;
			case "redcrystals":
				if(items.prizes)
				{
					let c = 0;
					for(let k = 0; k < 10; k++)
						if(items.prizes[k] === 4 && items["boss"+k])
							if(++c === 2)
								return true;
				}
				return false;
			case "gtcrystals":
			case "gtcrystalsmaybe":
				if(items.prizes)
				{
					let goal = 7;
					if(items.flags && Number.isInteger(items.flags.opentowercount) && items.flags.opentowercount < 7)
						goal = items.flags.opentowercount;
					if(items.flags.opentowercount === 8 && rule.endsWith("maybe"))
						return true;
					if(goal <= 0)
						return true;
					let c = 0;
					for(let k = 0; k < 10; k++)
						if((items.prizes[k] === 3 || items.prizes[k] === 4) && items["boss"+k])
							if(++c === goal)
								return true;
				}
				return false;
			default:
				return (items.moonpearl || (darkWorld === (worldState === 'I'))) && items[rule];
		}
	};

	window.setDifference = function(set1,set2)
	{
		return new Set([...set1].filter(r=>!set2.has(r)));
	};

	window.setIntersection = function(set1,set2)
	{
		if(!set1 || !set2)
			return new Set();
		return new Set([...set1].filter(r=>set2.has(r)));
	};

	window.setUnion = function(set1,set2)
	{
		if(!set1)
			return set2 ?set2 :new Set();
		if(!set2)
			return set1;
		let set = new Set(set1);
		for(let r of set2)
			set.add(r);
		return set;
	};

	window.determineLocationAvailability = function(regions,items)
	{
		let door = items.flags && items.flags.doorshuffle ?items.flags.doorshuffle !== 'N' :doorshuffle !== 'N';
		let data = {};
		data.logic = true;
		data.items = new Array(79);
		for(let k = 0; k < 79; k++)
			data.items[k] = "unavailable";
		data.entranceitems = [];
		data.dungeons = new Array(104);
		for(let k = 0; k < 104; k++)
			data.dungeons[k] = "unavailable";
		data.entrances = new Array(140);
		for(let k = 0; k < 140; k++)
			data.entrances[k] = "unavailable";
		data.dungeonsBunny = {};
		data.special = {};
		//Collect all points of interest in reachable regions
		for(let region of regions)
		{
			let darkWorld = items.moonpearl || isDarkWorld(region.screen);
			for(let location of region.locations)
			{
				if(!location.rule || checkRule(location.rule,items,darkWorld))
				{
					data[location.type][location.id] = "available";
				}
				if(!items.moonpearl && location.type === "dungeons")
					data.dungeonsBunny[location.id] = darkWorld !== (worldState === 'I');
			}
		}
		//Special rules for certain locations
		if(worldState === 'I')
		{
			data.items[2] = data.special["Inverted Link's House"] ?"available" :"unavailable";
			data.items[65] = data.items[66] = data.special["Inverted Castle Tower Access"] ?"available" :"unavailable";
			data.items[78] = data.special["Inverted Bomb Shop"] ?"available" :"unavailable";
			data.dungeons[80] = data.entrances[10] = data.special["Inverted Ganon's Tower"] ?"available" :"unavailable";
			data.dungeons[96] = data.entrances[127] = data.special["Inverted Castle Tower"] ?"available" :"unavailable";
			orSpecial(data.dungeons,80,data.special["Inverted Maybe GT"],"possible");
			orSpecial(data.entrances,10,data.special["Inverted Maybe GT"],"possible");
			if(!items.moonpearl)
			{
				let swap = data.dungeonsBunny[80];
				data.dungeonsBunny[80] = data.dungeonsBunny[96];
				data.dungeonsBunny[96] = swap;
			}
		}
		else
		{
			orSpecial(data.dungeons,80,data.special["Maybe GT"],"possible");
			orSpecial(data.entrances,127,data.special["Maybe GT"],"possible");
		}
		if((mixedow && overworldScreens.get(0x03).mixedState === "swapped") !== (worldState === 'I'))
			if(entranceEnabled)
			{
				if(data.items[34] === "available")
				{
					andSpecial(data.items,34,data.special["Inverted Old Man"]);
					andSpecial(data.items,34,data.special["Old Man Hera"]);
					if(data.items[34] === "unavailable")
						data.items[34] = "possible";
				}
			}
			else
				data.items[34] = data.special["Inverted Old Man"] ?"available" :"unavailable";
		else
			if(entranceEnabled && data.items[34] === "available")
			{
				andSpecial(data.items,34,data.special["Old Man Hera"]);
				if(data.items[34] === "unavailable")
					data.items[34] = "possible";
			}
		if((mixedow && overworldScreens.get(0x1B).mixedState === "swapped") !== (worldState === 'I'))
		{
			data.entrances[93] = data.special["Inverted Ganon"] ?"available" :"unavailable";
			data.entrances[95] = data.special["Inverted Ganon Exit"] ?"available" :"unavailable";
		}
		orSpecial(data.items,21,data.special["HSC Bottom Back"],"available");
		orSpecial(data.items,22,data.special["HSC Top Back"],"available");
		orSpecial(data.items,56,data.special["Uncle Drop"],"available");
		orSpecial(data.items,14,data.special["Bombless Well"],"partialavailable");
		orSpecial(data.items,15,data.special["Bombless Thieve's Hut"],"partialavailable");
		orSpecial(data.items,17,data.special["Bombless Paradox"],"partialavailable");
		orSpecial(data.items,57,data.special["Castle First Chest"],"partialavailable");
		orSpecial(data.items,30,data.special["Read Ether"],"information");
		orSpecial(data.items,31,data.special["Read Bombos"],"information");
		orSpecial(data.items,36,data.special["Check Hideout"],"information");
		orSpecial(data.items,37,data.special["Check Lumberjack"],"information");
		orSpecial(data.items,39,data.special["Check 45"],"information");
		orSpecial(data.items,43,data.special["Check Library"],"information");
		orSpecial(data.items,44,data.special["Check Mushroom 1"],"information");
		orSpecial(data.items,44,data.special["Check Mushroom 2"],"information");
		orSpecial(data.items,45,data.special["Check Spectacle"],"information");
		orSpecial(data.items,46,data.special["Check Floating"],"information");
		orSpecial(data.items,47,data.special["Check Race"],"information");
		orSpecial(data.items,48,data.special["Check Desert"],"information");
		orSpecial(data.items,49,data.special["Check Lake 1"],"information");
		orSpecial(data.items,49,data.special["Check Lake 2"],"information");
		orSpecial(data.items,50,data.special["Check Bumper"],"information");
		orSpecial(data.items,53,data.special["Check Zora"],"information");
		orSpecial(data.items,62,data.special["Read Pedestal"],"information");
		orSpecial(data.dungeons,64,data.special["Maybe MM"],"possible");
		orSpecial(data.dungeons,72,data.special["Maybe TR"],"possible");
		orSpecial(data.entrances,123,data.special["Maybe MM"],"possible");
		orSpecial(data.entrances,136,data.special["Maybe TR"],"possible");
		andSpecial(data.items,28,data.special["Thief"]);
		andSpecial(data.items,28,data.items[60]);
		andSpecial(data.items,60,data.special["Smith"]);
		andSpecial(data.items,61,data.special["Red Bomb"]);
		for(let k = 0; k < 23; k++)
			data.entranceitems[k] = data.items[entranceItemToItem[k]];
		andSpecial(data.items,28,data.items[60]);
		//For now, unknown if followers can be delivered
		for(let id of [28,60,61])
			if(data.items[id] === "available")
				data.items[id] = "possible";
		if(data.entranceitems[0] === "available")
			data.entranceitems[0] = "possible";
		if(data.entranceitems[4] === "available")
			data.entranceitems[4] = "possible";
		if(data.entrances[94] === "available")
			data.entrances[94] = "possible";
		//Manually refine access to certain items that involve dungeons
		if(!entranceEnabled)
		{
			let front = data.items[63],back = data.items[55],towerAccess = data.items[65] === "available" && data.items[66] === "available";
			let retro = items.flags && items.flags.gametype ?items.flags.gametype === 'R' :worldState === 'R';
			//Back of Escape
			if(back === "available")
				data.items[55] = items.bomb || items.boots ?"available" :"unavailable";
			else
				if(front === "available" && items.lantern && (items.bomb || items.boots) && (items.bomb || items.sword || items.bow || items.hammer || items.firerod || items.somaria || items.byrna))
				{
					if(retro || (items.flags && items.flags.wildkeys))
						data.items[55] = retro || items.smallkeyhalf0 ?"available" :"unavailable";
					else
						data.items[55] = "possible";
				}
			//Sewers
			if(front !== "available" && back === "available" && items.lantern && (items.bomb || items.sword || items.bow || items.hammer || items.firerod || items.somaria || items.byrna))
			{
				if(retro || (items.flags && items.flags.wildkeys))
					data.items[63] = retro || items.smallkeyhalf0 ?"available" :"unavailable";
				else
					data.items[63] = "possible";
			}
			//Castle Tower
			if(towerAccess && (items.sword || items.bow || items.hammer || items.firerod || items.somaria || items.byrna))
			{
				data.items[65] = "available";
				data.items[66] = items.lantern && (retro || items.smallkeyhalf1 || !items.flags || !items.flags.wildkeys) ?"available" :"unavailable";
			}
			else
				data.items[65] = data.items[66] = "unavailable";
			//Desert Ledge
			if(data.items[48] === "information")
				if(door)
				{
					if(items.book)
					{
						data.items[48] = "possible";
						if(data.special["Desert Access"] === "available" && (mixedow && overworldScreens.get(0x30).mixedState === "swapped") !== (worldState === 'I'))
							data.helpDesert = true;
					}
				}
				else
					if(data.special["Desert Access"] === "available")
						data.items[48] = "available";
			//Mimic Cave
			if(items.mirror && items.hammer && items.moonpearl && data.items[4] === "unavailable" && data.entrances[136] !== "unavailable" && (mixedow && overworldScreens.get(0x05).mixedState === "swapped") === (worldState === 'I'))
				if(door)
				{
					data.items[4] = "possible";
					if(data.entrances[136] === "available")
						data.helpMimic = true;
				}
				else
					if(items.somaria && items.bomb)
						if(retro || (items.flags && items.flags.wildkeys))
							data.items[4] = retro || items.smallkey9 > 1 ?data.entrances[136] :"unavailable";
						else
							data.items[4] = items.firerod ?data.entrances[136] :"possible";
			//Consider guaranteed or possibles paths between dungeon entrances
			if(door)
			{
				//Desert Palace
				if((mixedow && overworldScreens.get(0x30).mixedState === "swapped") !== (worldState === 'I'))
				{
					if(data.dungeons[8] === "available")
					{
						data.dungeons[9] = "available";
						if(items.gloves && items.moonpearl)
							data.dungeons[11] = "available";
					}
				}
				if(data.dungeons[8] === "available" && data.dungeons[9] === "available" && data.dungeons[11] === "available")
					data.dungeons[10] = "available";
				//Skull Woods
				if((mixedow && overworldScreens.get(0x00).mixedState === "swapped") === (worldState === 'I'))
				{
					if(data.dungeons[40] === "available" && data.dungeons[41] === "available" && data.dungeons[44] === "available" && data.dungeons[45] === "available" && data.dungeons[46] === "available")
					{
						data.dungeons[42] = data.dungeons[47] = "available";
						if(items.firerod)
							data.dungeons[43] = "available";
					}
				}
				//Turtle Rock
				if((mixedow && overworldScreens.get(0x05).mixedState === "swapped") === (worldState === 'I'))
				{
					if(data.dungeons[72] === "available" && items.bomb)
						data.dungeons[73] = data.dungeons[74] = "available";
					if(data.dungeons[72] === "available" && data.dungeons[73] === "available" && data.dungeons[74] === "available")
						data.dungeons[75] = "available";
				}
				//CT or GT through HC
				if(worldState === 'I')
				{
					if(data.dungeons[80] === "unavailable")
					{
						let entrycheck = checkRule("gtcrystals",items,isDarkWorld(overworldScreens.get(0x1B))) ?"available" :(checkRule("gtcrystalsmaybe",items,isDarkWorld(overworldScreens.get(0x1B))) ?"possible" :"unavailable");
						if(entrycheck !== "unavailable" && (data.dungeons[88] !== "unavailable" || data.dungeons[91] !== "unavailable" || data.dungeons[92] !== "unavailable"))
						{
							data.dungeons[80] = "possible";
							data.dungeonsBunny[80] = data.dungeonsBunny[88];
						}
					}
				}
				else
				{
					if(data.dungeons[96] === "unavailable")
					{
						if(checkRule("ctbarrier",items,isDarkWorld(overworldScreens.get(0x1B))) && (data.dungeons[88] !== "unavailable" || data.dungeons[91] !== "unavailable" || data.dungeons[92] !== "unavailable"))
						{
							data.dungeons[96] = "possible";
							data.dungeonsBunny[96] = data.dungeonsBunny[88];
						}
					}
				}
			}
		}
		//Skull Woods in Entrance
		if(data.entrances[102] === "available" && !data.dungeonsBunny[40])
		{
			if(items.firerod && data.entrances[96] === "unavailable")
				data.entrances[96] = door ?"possible" :"available";
			if(data.entrances[97] === "unavailable")
				data.entrances[97] = door ?"possible" :"available";
			if(data.entrances[98] === "unavailable")
				data.entrances[98] = door ?"possible" :"available";
		}
		data.special = null;
		return data;
	};

	window.orSpecial = function(object,locationID,special,availability)
	{
		if(object[locationID] === "unavailable" && special === "available")
			object[locationID] = availability;
	};

	window.andSpecial = function(object,locationID,special)
	{
		if(object[locationID] !== "unavailable" && special !== "available")
			object[locationID] = special ?special :"unavailable";
	};

	window.createLocation = function(screenID,regionName,locationType,locationID,rule)
	{
		let region = overworldScreens.get(screenID).regions.get(regionName);
		let location = {};
		location.type = locationType;
		location.id = locationID;
		location.rule = rule;
		region.locations.push(location);
	};

	window.createItemLocation = function(screenID,regionName,locationID,entranceLocationID,rule)
	{
		createLocation(screenID,regionName,"items",locationID,rule);
		if(entranceLocationID != -1)
			entranceItemToItem[entranceLocationID] = locationID;
	};

	window.createDungeonLocation = function(screenID,regionName,dungeonID,entranceID,rule)
	{
		createLocation(screenID,regionName,"dungeons",dungeonID*8+entranceID,rule);
	};

	window.createEntranceLocation = function(screenID,regionName,locationID,rule)
	{
		createLocation(screenID,regionName,"entrances",locationID,rule);
	};

	window.createSpecialLocation = function(screenID,regionName,locationID,rule)
	{
		createLocation(screenID,regionName,"special",locationID,rule);
	};

	window.setEntranceRegion = function(screenID,regionName,entranceIndices)
	{
        let screen = overworldScreens.get(screenID),region = screen.regions.get(regionName);
        screen.entranceRegions.push(region);
        region.numberEntrances = entranceIndices.length;
		for(let k of entranceIndices)
			entranceIndexToRegion[k] = region;
    };

	window.getEntranceRegionFromIndex = function(index)
	{//This can cause problems in Mixed and Mystery. Change data structure in the future
		if((index === 93 || index === 95) && (worldState === 'I') !== (mixedow && overworldScreens.get(0x1B).mixedState === "swapped"))
			index += 200;
		return entranceIndexToRegion[index];
	};

	window.createDefaultConnector = function(screenID1,regionName1,screenID2,regionName2,rule,bidirectional)
	{
		let edge = {},screen1 = overworldScreens.get(screenID1),screen2 = overworldScreens.get(screenID2);
		let region1 = screen1.regions.get(regionName1),region2 = screen2.regions.get(regionName2);
		edge.source = region1;
		edge.target = region2;
		edge.rule = rule;
		edge.weight = 3;
		region1.defaultConnectorsOut.push(edge);
		region2.defaultConnectorsIn.push(edge);
		if(bidirectional)
		{
			edge = {};
			edge.target = region1;
			edge.source = region2;
			edge.rule = rule;
			edge.weight = 3;
			region1.defaultConnectorsIn.push(edge);
			region2.defaultConnectorsOut.push(edge);
		}
	};

	window.createSpecialDefaultConnector = function(screenID1,regionName1,world1,screenID2,regionName2,world2,rule,bidirectional)
	{
		let edge = {},screen1 = overworldScreens.get(screenID1),screen2 = overworldScreens.get(screenID2);
		let region1 = screen1.regions.get(regionName1),region2 = screen2.regions.get(regionName2);
		edge.source = region1;
		edge.target = region2;
		edge.sourceWorld = world1;
		edge.targetWorld = world2;
		edge.rule = rule;
		edge.weight = 3;
		if(!region1.specialDefaultConnectorsOut)
			region1.specialDefaultConnectorsOut = [];
		if(!region2.specialDefaultConnectorsIn)
			region2.specialDefaultConnectorsIn = [];
		region1.specialDefaultConnectorsOut.push(edge);
		region2.specialDefaultConnectorsIn.push(edge);
		if(bidirectional)
		{
			edge = {};
			edge.target = region1;
			edge.source = region2;
			edge.targetWorld = world1;
			edge.sourceWorld = world2;
			edge.rule = rule;
			edge.weight = 3;
			if(!region1.specialDefaultConnectorsIn)
				region1.specialDefaultConnectorsIn = [];
			if(!region2.specialDefaultConnectorsOut)
				region2.specialDefaultConnectorsOut = [];
			region1.specialDefaultConnectorsIn.push(edge);
			region2.specialDefaultConnectorsOut.push(edge);
		}
	};

	window.setDoubleMirrorBlock = function(screenID,regionName)
	{
		let region = overworldScreens.get(screenID).regions.get(regionName);
		region.mirrorBlock = region.parallel.mirrorBlock = true;
	};

	window.createPortal = function(screenID,regionName,rule)
	{
		let screen = overworldScreens.get(screenID);
		screen.portal = {"rule":rule};
		screen.regions.get(regionName).portal = {"rule":rule};
	};

	window.createDoublePortal = function(screenID,regionName,rule)
	{
		createPortal(screenID,regionName,rule);
		createPortal(screenID+0x40,regionName,rule);
	};

	window.createSingleLogicEdge = function(screenID,regionName1,regionName2,rule,bidirectional)
	{
		let edge = {},screen = overworldScreens.get(screenID);
		let region1 = screen.regions.get(regionName1),region2 = screen.regions.get(regionName2);
		edge.source = region1;
		edge.target = region2;
		edge.rule = rule;
		edge.weight = .1;
		region1.logicEdgesOut.push(edge);
		region2.logicEdgesIn.push(edge);
		if(bidirectional)
		{
			edge = {};
			edge.target = region1;
			edge.source = region2;
			edge.rule = rule;
			edge.weight = .1;
			region1.logicEdgesIn.push(edge);
			region2.logicEdgesOut.push(edge);
		}
	};

	window.createInvertedLogicEdge = function(screenID,regionName1,regionName2,rule,bidirectional)
	{
		let edge = {},screen = overworldScreens.get(screenID);
		let region1 = screen.regions.get(regionName1),region2 = screen.regions.get(regionName2);
		edge.source = region1;
		edge.target = region2;
		edge.rule = rule;
		edge.weight = .1;
		region1.invertedLogicEdgesOut.push(edge);
		region2.invertedLogicEdgesIn.push(edge);
		if(bidirectional)
		{
			edge = {};
			edge.target = region1;
			edge.source = region2;
			edge.rule = rule;
			edge.weight = .1;
			region1.invertedLogicEdgesIn.push(edge);
			region2.invertedLogicEdgesOut.push(edge);
		}
	};

	window.createDoubleLogicEdge = function(screenID,regionName1,regionName2,rule,bidirectional)
	{
		createSingleLogicEdge(screenID,regionName1,regionName2,rule,bidirectional);
		createSingleLogicEdge(screenID+0x40,regionName1,regionName2,rule,bidirectional);
	};

	window.setEscapeEdges = function(screenID,edgeString)
	{
		let edge = overworldScreens.get(screenID).edges.get(edgeString);
		edge.escapeEdge = edge.vanilla.escapeEdge = true;
	};

	window.createWhirlpool = function(screenID,regionName,x,y)
	{
		let edge = {},screen = overworldScreens.get(screenID);
		edge.screen = screen;
		edge.region = screen.regions.get(regionName);
		edge.region.screenEdges.push(edge);
		edge.direction = "Z";
		edge.symbol = "W";
		edge.string = "ZW";
		edge.similarGroup = 1;
		edge.water = true;
		edge.x = edge.x2 = x;
		edge.y = edge.y2 = y;
		screen.edges.set("ZW",edge);
	};

	window.createOverworldEdge = function(screenID,regionName,direction,symbol,similarGroup,water,position)
	{
		let edge = {},screen = overworldScreens.get(screenID);
		edge.screen = screen;
		edge.region = screen.regions.get(regionName);
		edge.region.screenEdges.push(edge);
		edge.direction = direction;
		edge.symbol = symbol;
		edge.string = direction+symbol;
		edge.similarGroup = similarGroup;
		edge.water = water;
		edge.position = position;
		switch(edge.direction)
		{
			case "N":
				edge.x = edge.x2 = position;
				edge.y = .125;
				edge.y2 = screen.big ?.25 :.125;
				break;
			case "S":
				edge.x = edge.x2 = position;
				edge.y = screen.big ?1.875 :.875;
				edge.y2 = screen.big ?1.75 :.875;
				break;
			case "W":
				edge.x = .125;
				edge.x2 = screen.big ?.25 :.125;
				edge.y = edge.y2 = position;
				break;
			case "E":
				edge.x = screen.big ?1.875 :.875;
				edge.x2 = screen.big ?1.75 :.875;
				edge.y = edge.y2 = position;
		}
		screen.edges.set(edge.string,edge);
		return edge;
	};

	window.createDoubleOverworldEdge = function(screenID,region,direction,symbol,similarGroup,water,position)
	{
		let edge1 = createOverworldEdge(screenID,region,direction,symbol,similarGroup,water,position);
		let edge2 = createOverworldEdge(screenID+0x40,region,direction,symbol,similarGroup,water,position);
		edge1.parallel = edge2;
		edge2.parallel = edge1;
	};

	window.setVanillaTransition = function(screenID1,edgeID1,screenID2,edgeID2)
	{
		let edge1 = overworldScreens.get(screenID1).edges.get(edgeID1),edge2 = overworldScreens.get(screenID2).edges.get(edgeID2);
		edge1.vanilla = edge2;
		edge2.vanilla = edge1;
		if(edge1.parallel)
		{
			edge1.parallel.vanilla = edge2.parallel;
			edge2.parallel.vanilla = edge1.parallel;
		}
	};

	window.createOverworldScreen = function(screenID,name,big,regionNames,fluteRegionName)
	{
		let screen = {};
		screen.id = screenID;
		screen.darkWorld = screenID >= 0x40 && screenID < 0x80;
		screen.special = screenID >= 0x80;
		screen.name = name;
		screen.big = big;
		screen.edges = new Map();
		screen.regions = new Map();
        screen.entranceRegions = [];
		screen.mixedState = "unknown";
		for(let regionName of regionNames)
		{
			let region = {};
			region.screen = screen;
			region.darkWorld = screen.darkWorld;
			region.special = screen.special;
			region.name = regionName;
			region.screenEdges = [];
			region.logicEdgesOut = [];
			region.logicEdgesIn = [];
			region.invertedLogicEdgesOut = [];
			region.invertedLogicEdgesIn = [];
			region.defaultConnectorsOut = [];
			region.defaultConnectorsIn = [];
			region.entranceConnectorsOut = [];
			region.entranceConnectorsIn = [];
			region.locations = [];
			screen.regions.set(regionName,region);
		}
		screen.fluteRegion = screen.regions.get(fluteRegionName);
		overworldScreens.set(screenID,screen);
		return screen;
	};

	window.createDoubleOverworldScreen = function(screenID,nameLight,nameDark,big,regionNames,fluteRegionName)
	{
		if(!regionNames)
			regionNames = ["Main"];
		let screen1 = createOverworldScreen(screenID,nameLight,big,regionNames,fluteRegionName);
		let screen2 = createOverworldScreen(screenID+0x40,nameDark,big,regionNames,fluteRegionName);
		screen1.parallel = screen2;
		screen2.parallel = screen1;
		for(let regionName of regionNames)
		{
			let region1 = screen1.regions.get(regionName),region2 = screen2.regions.get(regionName);
			region1.parallel = region2;
			region2.parallel = region1;
		}
	};

	window.connectEdges = function(edge1,edge2,bidirectional)
	{
		if(edge1.out)
			edge1.out.in = null;
		if(edge2.in)
			edge2.in.out = null;
		edge1.out = edge2;
		edge2.in = edge1;
		if(bidirectional)
		{
			if(edge1.in)
				edge1.in.out = null;
			if(edge2.out)
				edge2.out.in = null;
			edge1.in = edge2;
			edge2.out = edge1;
		}
	};

	window.connectEdgesByKeys = function(screenID1,edgeID1,screenID2,edgeID2,bidirectional)
	{
		connectEdges(overworldScreens.get(screenID1).edges.get(edgeID1),overworldScreens.get(screenID2).edges.get(edgeID2),bidirectional);
	};

	window.edgesCompatible = function(edge1,edge2)
	{
		return edge1.direction === opposite[edge2.direction] && edge1.water === edge2.water && (worldState !== 'S' || crossedow === 'C' || mixedow || (edge1.escapeEdge === edge2.escapeEdge)) && compatibleKnownWorlds(edge1.screen,edge2.screen) && compatibleParallel(edge1,edge2) && compatibleSimilar(edge1,edge2);
	};

	window.compatibleKnownWorlds = function(screen1,screen2)
	{
		return (!mixedow || (screen1.mixedState !== "unknown" && screen2.mixedState !== "unknown")) && (crossedow === 'C' || (crossedow === 'P' ? (screen1.darkWorld === screen2.darkWorld) : (isDarkWorld(screen1) === isDarkWorld(screen2))));
	};

	window.compatibleParallel = function(edge1,edge2)
	{
		return (owshuffle === 'F' || !edge1.parallel === !edge2.parallel) && (owshuffle !== 'N' || edge1 === edge2.vanilla || edge1.parallel === edge2.vanilla);
	};

	window.compatibleSimilar = function(edge1,edge2)
	{
		if(!similarow)
			return true;
		if(edge1.water || edge2.water)
			return true;
		if(edge1.similarGroup !== edge2.similarGroup)
			return false;
		switch(edge1.similarGroup)
		{
			case 1:
				return true;
			case 2:
				return firstInSimilarPair(edge1) === firstInSimilarPair(edge2);
			case 3:
				return edge1.symbol === edge2.symbol;
		}
	};

	window.firstInSimilarPair = function(edge)
	{
		let edges = edge.screen.edges;
		for(let k = 0; k < 3; k++)
			if(edges.has(edge.direction+k) && edges.get(edge.direction+k).similarGroup === 2)
				return k === edge.symbol;
	};

	window.connectSimilarParallel = function(edge1,edge2)
	{
		if(similarow && edge1.similarGroup !== 1 && edge1.similarGroup === edge2.similarGroup)
		{
			let edges1 = edge1.screen.edges,edges2 = edge2.screen.edges;
			if(edge1.similarGroup === 3)
				for(let k = 0; k < 3; k++)
					connectParallel(edges1.get(edge1.direction+k),edges2.get(edge2.direction+k));
			else
			{
				let edgeList1 = [],edgeList2 = [];
				for(let k = 0; k < 3; k++)
				{
					if(edges1.has(edge1.direction+k) && edges1.get(edge1.direction+k).similarGroup === 2)
						edgeList1.push(edges1.get(edge1.direction+k));
					if(edges2.has(edge2.direction+k) && edges2.get(edge2.direction+k).similarGroup === 2)
						edgeList2.push(edges2.get(edge2.direction+k));
				}
				connectParallel(edgeList1[0],edgeList2[0]);
				connectParallel(edgeList1[1],edgeList2[1]);
			}
		}
		else
			connectParallel(edge1,edge2);
	};

	window.connectParallel = function(edge1,edge2)
	{
		connectEdges(edge1,edge2,true);
		if(owshuffle !== 'F' && edge1.parallel && edge2.parallel)
			connectEdges(edge1.parallel,edge2.parallel,true);
	};

	window.deleteConnections = function(edge)
	{
		if(edge.out)
		{
			edge.out.in = null;
			edge.out = null;
		}
		if(edge.in)
		{
			edge.in.out = null;
			edge.in = null;
		}
	};

	window.deleteSimilarParallel = function(edge)
	{
		if(similarow && edge.similarGroup !== 1)
		{
			let edges = edge.screen.edges;
			if(edge.similarGroup === 3)
				for(let k = 0; k < 3; k++)
					deleteParallel(edges.get(edge.direction+k));
			else
				for(let k = 0; k < 3; k++)
					if(edges.has(edge.direction+k) && edges.get(edge.direction+k).similarGroup === 2)
						deleteParallel(edges.get(edge.direction+k));
		}
		else
			deleteParallel(edge);
	};

	window.deleteParallel = function(edge)
	{
		deleteConnections(edge);
		if(owshuffle !== 'F' && edge.parallel)
			deleteConnections(edge.parallel);
	};

	window.clearOverworldTransitions = function()
	{
		for(let screen of overworldScreens.values())
			for(let edge of screen.edges.values())
				if(edge.out)
				{
					edge.out.in = null;
					edge.out = null;
				}
	};

	window.isDarkWorld = function(screen)
	{
		if(mixedow && screen.mixedState !== "unknown")
			return screen.darkWorld === (screen.mixedState === "normal");
		return screen.darkWorld;
	};

	window.setMixedScreen = function(screen,state)
	{
		screen.mixedState = state;
		if(screen.parallel)
			screen.parallel.mixedState = state;
		let screenLinks = screenLinksGlobal;
		if(owshuffle === 'N' && crossedow === 'N')
			screenLinks = screenLinks.concat(screenLinksLayout);
		if(!entranceEnabled)
			screenLinks = screenLinks.concat(screenLinksEntrance);
		let id = screen.id&0xBF;
		if(owshuffle === 'N' && crossedow === 'N' && !entranceEnabled && [0x13,0x14,0x1A].includes(id))
			id = 0x1B;
		for(let group of screenLinks)
			if(group.includes(id))
			{
				for(let n of group)
				{
					let s = overworldScreens.get(n);
					if(s.mixedState !== state)
					{
						s.mixedState = state;
						if(s.parallel)
							s.parallel.mixedState = state;
					}
				}
			}
	};

	window.getScreenLinkGroup = function(id)
	{
		let screenLinks = screenLinksGlobal;
		if(owshuffle === 'N' && crossedow === 'N')
			screenLinks = screenLinks.concat(screenLinksLayout);
		if(!entranceEnabled)
			screenLinks = screenLinks.concat(screenLinksEntrance);
		id &= 0xBF;
		if(owshuffle === 'N' && crossedow === 'N' && !entranceEnabled && [0x13,0x14,0x1A].includes(id))
			id = 0x1B;
		let linkGroup = [id];
		for(let group of screenLinks)
			if(group.includes(id))
				for(let n of group)
					if(!linkGroup.includes(n))
						linkGroup.push(n);
		return linkGroup;
	};

	window.clearMixedStates = function()
	{
		for(let screen of overworldScreens.values())
			screen.mixedState = "unknown";
	};

	window.createEntranceConnectorEdge = function(regionStart,regionEnd)
	{
		if(!regionStart || !regionEnd)
			return;
		let edge = {};
		edge.source = regionStart;
		edge.target = regionEnd;
		edge.rule = null;
		edge.weight = 3;
		regionStart.entranceConnectorsOut.push(edge);
		regionEnd.entranceConnectorsIn.push(edge);
	};

	window.deleteEntranceConnectorEdge = function(regionStart,regionEnd)
	{
		if(!regionStart || !regionEnd)
			return;
		for(let k = 0; k < regionStart.entranceConnectorsOut.length; k++)
			if(regionStart.entranceConnectorsOut[k].target === regionEnd)
			{
				regionStart.entranceConnectorsOut.splice(k,1);
				break;
			}
		for(let k = 0; k < regionEnd.entranceConnectorsIn.length; k++)
			if(regionEnd.entranceConnectorsIn[k].source === regionStart)
			{
				regionEnd.entranceConnectorsIn.splice(k,1);
				break;
			}
	};

	window.createEntranceConnector = function(regionStart,regionEnd,status,id)
	{
		if(!regionStart || !regionEnd)
			return;
		if(status !== "single" && status !== "both" && status !== "unknown")
			status = "unknown";
		createEntranceConnectorEdge(regionStart,regionEnd);
		let connector = {};
		connector.data = [regionStart.screen.id,regionStart.name,regionEnd.screen.id,regionEnd.name];
		connector.status = status;
		connector.id = id;
		entranceConnectors.push(connector);
		if(status === "both")
			createEntranceConnectorEdge(regionEnd,regionStart);
	};

	window.makeEntranceConnectorUnidirectional = function(connector)
	{
		if(entranceConnectors.includes(connector) && connector.status === "both")
		{
			let regionStart = overworldScreens.get(connector.data[0]).regions.get(connector.data[1]),regionEnd = overworldScreens.get(connector.data[2]).regions.get(connector.data[3]);
			deleteEntranceConnectorEdge(regionEnd,regionStart);
			connector.status = "single";
		}
	};

	window.makeEntranceConnectorBidirectional = function(connector)
	{
		if(entranceConnectors.includes(connector) && connector.status !== "both")
		{
			let regionStart = overworldScreens.get(connector.data[0]).regions.get(connector.data[1]),regionEnd = overworldScreens.get(connector.data[2]).regions.get(connector.data[3]);
			createEntranceConnectorEdge(regionEnd,regionStart);
			connector.status = "both";
		}
	};

	window.deleteEntranceConnector = function(index,connector)
	{
		if(entranceConnectors[index] === connector)
		{
			let regionStart = overworldScreens.get(connector.data[0]).regions.get(connector.data[1]),regionEnd = overworldScreens.get(connector.data[2]).regions.get(connector.data[3]);
			deleteEntranceConnectorEdge(regionStart,regionEnd);
			if(connector.status === "both")
				deleteEntranceConnectorEdge(regionEnd,regionStart);
			entranceConnectors.splice(index,1);
		}
	};

	window.clearEntranceConnectors = function()
	{
		for(let screen of overworldScreens.values())
			for(let region of screen.regions.values())
			{
				region.entranceConnectorsOut = [];
				region.entranceConnectorsIn = [];
			}
		entranceConnectors = [];
	};

	window.initializeRoomsAndSymbols = function()
	{
		dungeonImportant.push({"dungeon":11,"name":"Lobby","supertile":0x61,"part":"full"});
		dungeonEntrances.push({"dungeon":0,"name":"Entrance","supertile":0xC9,"part":"full"});
		dungeonEntrances.push({"dungeon":1,"name":"Main","supertile":0x84,"part":"full"});
		dungeonEntrances.push({"dungeon":1,"name":"West","supertile":0x83,"part":"bottomleft"});
		dungeonEntrances.push({"dungeon":1,"name":"East","supertile":0x85,"part":"bottomright"});
		dungeonEntrances.push({"dungeon":1,"name":"Back","supertile":0x63,"part":"bottomleft"});
		dungeonImportant.push({"dungeon":1,"name":"Lobby","supertile":0x84,"part":"full"});
		dungeonEntrances.push({"dungeon":2,"name":"Entrance","supertile":0x77,"part":"full"});
		dungeonImportant.push({"dungeon":2,"name":"Lobby","supertile":0x77,"part":"full"});
		dungeonImportant.push({"dungeon":2,"name":"Big Key Door","supertile":0x31,"part":"full"});
		dungeonImportant.push({"dungeon":2,"name":"Big Chest Room","supertile":0x27,"part":"full"});
		dungeonImportant.push({"dungeon":2,"name":"Bumper Room","supertile":0x17,"part":"full"});
		dungeonEntrances.push({"dungeon":3,"name":"Entrance","supertile":0x4A,"part":"full"});
		dungeonImportant.push({"dungeon":3,"name":"Pit Room","supertile":0x3A,"part":"full"});
		dungeonImportant.push({"dungeon":3,"name":"Arena","supertile":0x2A,"part":"full"});
		dungeonImportant.push({"dungeon":3,"name":"Falling Bridge","supertile":0x1A,"part":"full"});
		dungeonEntrances.push({"dungeon":4,"name":"Entrance","supertile":0x28,"part":"full"});
		dungeonImportant.push({"dungeon":4,"name":"Drained Dam","supertile":0x28,"part":"full"});
		dungeonImportant.push({"dungeon":4,"name":"Hub","supertile":0x36,"part":"full"});
		dungeonEntrances.push({"dungeon":5,"name":"Front Main","supertile":0x58,"part":"bottomleft"});
		dungeonEntrances.push({"dungeon":5,"name":"Front West","supertile":0x67,"part":"topleft"});
		dungeonEntrances.push({"dungeon":5,"name":"Front Pinball","supertile":0x68,"part":"full"});
		dungeonEntrances.push({"dungeon":5,"name":"Front North","supertile":0x58,"part":"topright"});
		dungeonEntrances.push({"dungeon":5,"name":"Middle East","supertile":0x57,"part":"bottomleft"});
		dungeonEntrances.push({"dungeon":5,"name":"Middle West","supertile":0x56,"part":"bottomleft"});
		dungeonEntrances.push({"dungeon":5,"name":"Middle North","supertile":0x56,"part":"topright"});
		dungeonEntrances.push({"dungeon":5,"name":"Back","supertile":0x59,"part":"bottomleft"});
		dungeonEntrances.push({"dungeon":6,"name":"Entrance","supertile":0xDB,"part":"full"});
		dungeonEntrances.push({"dungeon":6,"name":"Blind's Cell","supertile":0x45,"part":"topright"});
		dungeonEntrances.push({"dungeon":6,"name":"Boss Room","supertile":0xAC,"part":"bottomright"});
		dungeonImportant.push({"dungeon":6,"name":"Lobby SW","supertile":0xDB,"part":"full"});
		dungeonImportant.push({"dungeon":6,"name":"Lobby NW","supertile":0xCB,"part":"full"});
		dungeonImportant.push({"dungeon":6,"name":"Lobby NE","supertile":0xCC,"part":"full"});
		dungeonImportant.push({"dungeon":6,"name":"Lobby SE","supertile":0xDC,"part":"full"});
		dungeonImportant.push({"dungeon":6,"name":"Attic","supertile":0x65,"part":"bottomright"});
		dungeonEntrances.push({"dungeon":7,"name":"Entrance","supertile":0x0E,"part":"bottomright"});
		dungeonImportant.push({"dungeon":7,"name":"Pushable Block","supertile":0x9E,"part":"bottomright"});
		dungeonEntrances.push({"dungeon":8,"name":"Entrance","supertile":0x98,"part":"bottomleft"});
		dungeonImportant.push({"dungeon":8,"name":"Hub","supertile":0xC2,"part":"full"});
		dungeonEntrances.push({"dungeon":9,"name":"Main","supertile":0xD6,"part":"bottomright"});
		dungeonEntrances.push({"dungeon":9,"name":"West","supertile":0x23,"part":"bottomright"});
		dungeonEntrances.push({"dungeon":9,"name":"East","supertile":0x24,"part":"bottomright"});
		dungeonEntrances.push({"dungeon":9,"name":"Back","supertile":0xD5,"part":"bottomleft"});
		dungeonImportant.push({"dungeon":9,"name":"Hub","supertile":0xC6,"part":"full"});
		dungeonEntrances.push({"dungeon":10,"name":"Entrance","supertile":0x0C,"part":"full"});
		dungeonImportant.push({"dungeon":10,"name":"Torch Area","supertile":0x8C,"part":"full"});
		dungeonEntrances.push({"dungeon":11,"name":"Main","supertile":0x61,"part":"full"});
		dungeonEntrances.push({"dungeon":11,"name":"West","supertile":0x60,"part":"full"});
		dungeonEntrances.push({"dungeon":11,"name":"East","supertile":0x62,"part":"full"});
		dungeonEntrances.push({"dungeon":11,"name":"Back","supertile":0x11,"part":"full"});
		dungeonEntrances.push({"dungeon":11,"name":"Sanctuary","supertile":0x12,"part":"full"});
		dungeonEntrances.push({"dungeon":11,"name":"Zelda's Cell","supertile":0x80,"part":"topright"});
		dungeonEntrances.push({"dungeon":12,"name":"Entrance","supertile":0x30,"part":"bottomleft"});
		lobbyEntrances.push({"name":"Entr- ance",file:"dungeonentrance0"});
		lobbyEntrances.push({"name":"Entr- ance 1",file:"dungeonentrance1"});
		lobbyEntrances.push({"name":"Entr- ance 2",file:"dungeonentrance2"});
		lobbyEntrances.push({"name":"Entr- ance 3",file:"dungeonentrance3"});
		lobbyEntrances.push({"name":"Entr- ance 4",file:"dungeonentrance4"});
		lobbySanctuary = {"dungeon":11,"name":"Sanctuary","supertile":0x12,"part":"full"};
		lobbySW.push({"dungeon":5,"name":"Front West Drop","supertile":0x67,"part":"topleft"});
		lobbySW.push({"dungeon":5,"name":"Front Pinball Drop","supertile":0x68,"part":"full"});
		lobbySW.push({"dungeon":5,"name":"Front North Drop","supertile":0x58,"part":"topright"});
		lobbySW.push({"dungeon":5,"name":"Middle North Drop","supertile":0x56,"part":"topright"});
		lobbyTT.push({"dungeon":6,"name":"Blind's Cell","supertile":0x45,"part":"topright"});
		lobbyTT.push({"dungeon":6,"name":"Boss Room","supertile":0xAC,"part":"bottomright"});
		lobbyHC.push({"dungeon":11,"name":"Back of Escape Drop","supertile":0x11,"part":"full"});
		lobbyHC.push({"dungeon":11,"name":"Zelda's Cell","supertile":0x80,"part":"topright"});
		for(let k = 0; k < dungeonEntrances.length; k++)
		{
			let id = "0"+k.toString(36);
			dungeonEntrances[k].id = id;
			roomMap[id] = dungeonEntrances[k];
		}
		for(let k = 0; k < dungeonImportant.length; k++)
		{
			let id = "1"+k.toString(36);
			dungeonImportant[k].id = id;
			roomMap[id] = dungeonImportant[k];
		}
		let lobbyAll = lobbyEntrances.concat(lobbySanctuary,lobbySW,lobbyTT,lobbyHC)
		for(let k = 0; k < lobbyAll.length; k++)
		{
			let id = "2"+k.toString(36);
			lobbyAll[k].id = id;
			roomMap[id] = lobbyAll[k];
		}
		directions.push({"folder":"dungeons","file":"arrowright","x":128,"y":64});
		directions.push({"folder":"dungeons","file":"arrowrightup","x":128,"y":32});
		directions.push({"folder":"dungeons","file":"arrowrightdown","x":128,"y":96});
		directions.push({"folder":"dungeons","file":"arrowright","rotate":90,"x":64,"y":128});
		directions.push({"folder":"dungeons","file":"arrowrightup","rotate":90,"x":96,"y":128});
		directions.push({"folder":"dungeons","file":"arrowrightdown","rotate":90,"x":32,"y":128});
		directions.push({"folder":"dungeons","file":"arrowright","rotate":180,"x":0,"y":64});
		directions.push({"folder":"dungeons","file":"arrowrightup","rotate":180,"x":0,"y":96});
		directions.push({"folder":"dungeons","file":"arrowrightdown","rotate":180,"x":0,"y":32});
		directions.push({"folder":"dungeons","file":"arrowright","rotate":270,"x":64,"y":0});
		directions.push({"folder":"dungeons","file":"arrowrightup","rotate":270,"x":32,"y":0});
		directions.push({"folder":"dungeons","file":"arrowrightdown","rotate":270,"x":96,"y":0});
		directions.push({"folder":"dungeons","file":"quadranttopleft","x":48,"y":48});
		directions.push({"folder":"dungeons","file":"quadranttopleft","rotate":90,"x":80,"y":48});
		directions.push({"folder":"dungeons","file":"quadranttopleft","rotate":270,"x":48,"y":80});
		directions.push({"folder":"dungeons","file":"quadranttopleft","rotate":180,"x":80,"y":80});
		overworldEdgeToDirection["N0"] = directions[10];
		overworldEdgeToDirection["N1"] = directions[9];
		overworldEdgeToDirection["N2"] = directions[11];
		overworldEdgeToDirection["S0"] = directions[5];
		overworldEdgeToDirection["S1"] = directions[3];
		overworldEdgeToDirection["S2"] = directions[4];
		overworldEdgeToDirection["W0"] = directions[8];
		overworldEdgeToDirection["W1"] = directions[6];
		overworldEdgeToDirection["W2"] = directions[7];
		overworldEdgeToDirection["E0"] = directions[1];
		overworldEdgeToDirection["E1"] = directions[0];
		overworldEdgeToDirection["E2"] = directions[2];
		overworldEdgeToDirection["ZW"] = {"folder":"interface","file":"whirlpool","x":48,"y":48};
		overworldEdgeToDirection["CO"] = {"folder":"interface","file":"connectorentrance","x":80,"y":48};
		overworldEdgeToDirection["PO"] = {"folder":"interface","file":"portal","x":48,"y":80};
		overworldEdgeToDirection["MI"] = {"folder":"items","file":"mirror","x":80,"y":80};
		objects.push({"folder":"dungeons","file":"trapdoor"});
		objects.push({"folder":"dungeons","file":"keychest0"});
		objects.push({"folder":"dungeons","file":"prize0"});
		switchobjects.push({"folder":"dungeons","file":"crystalswitch","basic":[2,3,4,6,7,8,9,10]});
		switchobjects.push({"folder":"dungeons","file":"orangedown","basic":[2,3,4,6,7,8,9,10]});
		switchobjects.push({"folder":"dungeons","file":"bluedown","basic":[2,3,4,6,7,8,9,10]});
		switchobjects.push({"folder":"dungeons","file":"lever","basic":[4]});
		switchobjects.push({"folder":"dungeons","file":"drain","basic":[4]});
		itemicons.push({"folder":"dungeons","file":"smallkey"});
		itemicons.push({"folder":"dungeons","file":"bigkey"});
		itemicons.push({"folder":"items","file":"bomb"});
		itemicons.push({"folder":"items","file":"somaria","basic":[7,8,9,10]});
		itemicons.push({"folder":"items","file":"firerod","basic":[5,9,10]});
		itemicons.push({"folder":"items","file":"lantern","basic":[0,3,8,9,11,12]});
		itemicons.push({"folder":"dungeons","file":"torch","basic":[1,2,8,10]});
		itemicons.push({"folder":"items","file":"flippers","basic":[4]});
		itemicons.push({"folder":"items","file":"hookshot","basic":[0,2,4,5,7,8,9,10]});
		itemicons.push({"folder":"items","file":"boots","basic":[1,3,5,8,9,10]});
		itemicons.push({"folder":"items","file":"bow1","basic":[0,3,10]});
		itemicons.push({"folder":"items","file":"hammer","basic":[3,4,6,7,10]});
		itemicons.push({"folder":"items","file":"sword1","basic":[5,12]});
		itemicons.push({"folder":"items","file":"glove1","basic":[1,6,7]});
		itemicons.push({"folder":"items","file":"shield3","basic":[9]});
		itemicons.push({"folder":"dungeons","file":"freezor","basic":[7]});
		itemicons.push({"folder":"dungeons","file":"wizzrobe","basic":[8,10]});
		itemicons.push({"folder":"items","file":"boomerang2"});
		itemicons.push({"folder":"items","file":"mirror","basic":[1,4,5,6,11]});
		itemicons.push({"folder":"items","file":"moonpearl"});
		itemicons.push({"folder":"dungeons","file":"spikefloor","basic":[7,8]});
		itemicons.push({"folder":"items","file":"magic"});
		itemicons.push({"folder":"dungeons","file":"smallchest"});
		itemicons.push({"folder":"dungeons","file":"bigchest","basic":[0,1,2,3,4,5,6,7,8,9,10]});
		itemicons.push({"folder":"dungeons","file":"talltorch","basic":[1,10]});
		itemicons.push({"folder":"dungeons","file":"keysteal"});
		itemicons.push({"folder":"dungeons","file":"map"});
		itemicons.push({"folder":"dungeons","file":"compass"});
		itemicons.push({"folder":"dungeons","file":"hinttile"});
		itemicons.push({"folder":"items","file":"heartcontainer"});
		bosses.push({"folder":"dungeons","file":"boss0"});
		bosses.push({"folder":"dungeons","file":"boss1"});
		bosses.push({"folder":"dungeons","file":"boss2"});
		bosses.push({"folder":"dungeons","file":"boss3"});
		bosses.push({"folder":"dungeons","file":"boss4"});
		bosses.push({"folder":"dungeons","file":"boss5"});
		bosses.push({"folder":"dungeons","file":"boss6"});
		bosses.push({"folder":"dungeons","file":"boss7"});
		bosses.push({"folder":"dungeons","file":"boss8"});
		bosses.push({"folder":"dungeons","file":"boss9"});
		bosses.push({"folder":"dungeons","file":"agahnim0"});
		initializeSymbols(directions,'d');
		initializeSymbols(objects,'o');
		initializeSymbols(switchobjects,'s');
		initializeSymbols(itemicons,'i');
		initializeSymbols(bosses,'b');
	};

	window.initializeSymbols = function(list,key)
	{
		for(let k = 0; k < list.length; k++)
		{
			let id = key+k.toString(36);
			list[k].id = id;
			symbolMap[id] = list[k];
		}
	};
}(window));