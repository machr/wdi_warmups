var thisArray = ["Skynet","Digital Music Distribution",
"FitBit","Realtime Data","ManPacks","Landing Page",
"Conversion Funnel","Social Network","Airbnb","SnapChat",
"Bang With Friends","HTML5 App","Google Analytics","Mapreduce Query",
"Node.js Server","KickStarter","Match.com","Adultfriendfinder",
"Pinterest","Amber Alert System","Groupon","Appstore","Digital Magazine",
"Distributed Social Network","Quadcopter","Daring Fireball",
"Content Distribution Network","Analytics Platform","OpenTable",
"LinkedIn","Brick and Mortar Solution","Aggregator","Social Game","jQuery Plugin","Game-based Incentive","Foursquare","YouTube","WeedMaps","Texts From Last Night","Ponzi Scheme","1-800-Flowers","Cash4Gold","Online Marketplace","Viral Marketer","Wearable Computer","Google Glass App","Facebook Marketplace","Zivity","Playboy","Cloud Storage Provider","Kindle Fire App","Pandora","Green Tech Program","Eco-Friendly Marketplace",
"Netflix","Amazon","Zappos","Reddit","Enron","Wordpress","iPhone App","Android App","Meme Generator","Crowdsourcing App","Mac App","SEO Optimizer","Apartment Guide","Social CRM","Database Abstraction Layer","Microblogging Service","Product Curation Service","API","New Social Platform","Tumblr","Deal Finder","CPA Ad Network","Collaborative Filter","Shopping Site","Digg 2.0",
"Recommendation Engine","News Recommender","Neural Network","Tesseract OCR engine","Unreadable CAPTCHA","Mobile Ecosystem","Flickr","Salesforce.com","Twitter Filter","Wikipedia","Yelp"];

var thatArray = ["Facebook Platform","Erlang Enthusiasts","Ex-Girlfriends",
"Mitt Romney's Hair","Laundromats","Celebrity Gossip","Endangered Species","Pandas","Middle Schoolers","Alpha Phi Girls","Funeral Homes","Chinese Take-out","Ex-Convicts","Fast Casual Restaurants","Marketers","Qualifying Leads","Funeral Homes","Farmers","Cougars","Pilots","Gynecologists",
"Cracked iPhone Apps","Stolen Goods","Adult Dancers","People Who Hate Groupon","Hunters","Sysadmins","Bath Salts","Nootropics","California","Government Corruption","Political Attack Ads","Whiskey Lovers","Parking Tickets","Highway Accidents","Traveling","Airlines","Presentation Tools","Your Boss","Ponzi Schemes","Your Finances","Restroom Attendants","Your Aquarium","Your Cat's Litter Box","Pets","Alcoholics",
"Camp Counselors","Nature Blogs","World of Warcraft","Models","Family Guy Enthusiasts","The Army","Cheap Vodka","Tech Incubators","Star Trek Conventions","Presentation Tools","Small Businesses","Beer","Nightclub Lines","Semi-Active Volcanoes", "Sanctimonial Artifacts","Traveling Abroad","Your Mom","Billionaires","Happy Hours","Ugg Boots","The Homeless","Blacking Out","Red Wine","Happy Families","Social Outcasts",
"Surgeons","Pounding Jagger Bombs","Textbooks","Coffee Shops","Baristas"];

function createStartup(){

  // used the link below to find out how to generate a random number- the example uses 20 as its number range
  // but we want to make a number in the whole array - so we use the .length of the array
  // the Math.floor is a built-in method in JS that will round a decimal number down to the lowest closest number. 1.7 become 1 and 2.9 becomes 2
  // This will help us get the first element in our array which is index 0 ( [0]  )
  // https://www.freecodecamp.com/challenges/generate-random-whole-numbers-with-javascript
  var numberInThisArray = Math.floor(Math.random() * thisArray.length);
  var numberInThatArray = Math.floor(Math.random() * thatArray.length);

  // ================================================================

  // the variable startupName is where we put together 2 random words found in the array. we get the words by
  // putting the random number we just found, in the index of our array, fx thisArray[3] is thisArray[numberInThisArray]
  // We do the same for the other array. This gives us the 2 selection we will put together to create the name

  // our name will be a string using ' + ', and our javascript variables together. only HTML needs "" around them.
  var startupName = thisArray[numberInThisArray] + " - " + thatArray[numberInThatArray];

  // line 39 chooses the #startup-name h2 element in our code and sets the text to the name we generated and
  //stored in variable startupName on line 36
  document.getElementById('startup-name').innerHTML = startupName;

  // line 43 adds a css style to startup-name that is called 'styled'. This gives it a yellow background
  document.getElementById('startup-name').className = "styled";
}

document.getElementById('generate-btn').onclick = createStartup;
